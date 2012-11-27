require('colors');
var fs      = require('fs');
var async   = require('async');
var jshintrunner = require('./jshint.runner')('webAds');
var dir     = __dirname + "/../src/";
var target  = __dirname + "/../";

var webAdsStream    = fs.createWriteStream(target + 'webads.js');
var webAdsMinified  = fs.createWriteStream(target + 'webads.min.js');

var libs = [
  'lib/rich-finn-no-2.2.min.js'/*,
  'lib/jqueryui.position.min.js'*/
];

var files = [
  'webAds.banners.js',
  'webAds.config.js',
  'webAds.sticky.js',
  'webAds.manager.js',
  'webAds.manager.plugins.js'
];

function mini(orig_code){
  var jsp = require("uglify-js").parser;
  var pro = require("uglify-js").uglify;
  var ast = jsp.parse(orig_code); // parse code and get the initial AST
  ast = pro.ast_mangle(ast); // get a new AST with mangled names
  ast = pro.ast_squeeze(ast); // get an AST with compression optimizations
  var final_code = pro.gen_code(ast); // compressed code here
  return final_code;
}

libs = libs.map(function(file){
  return function(callback){
        console.log('Prepending:'.bold.blue, file);
        var readStream = fs.createReadStream(dir + file);
        readStream.pipe(webAdsStream,   { end: false });
        readStream.pipe(webAdsMinified, { end: false });
        readStream.on('end', callback);
  }
});


async.series(libs,
  function(err, results){
    console.log('Done prepending:'.bold.blue, err);
    async.map(files, function(file, callback){
      var buffer = [];
      var readStream = fs.createReadStream(dir + file);
      readStream.pipe(webAdsStream, { end: false });

      readStream.on('data', function(data){
        buffer.push(data.toString('utf8'));
      });

      readStream.on('end', function(){
        console.log('Packed:'.yellow, file.italic);
        var content = buffer.join('');
        callback(null, content);
        jshintrunner.add(file, content);
      });

    }, function(err, result){
      console.log('File output:'.green, ' ', 'webAds.js'.bold.cyan);
      webAdsMinified.write(';'+mini(result.join(';\n\r')));
      console.log('File output:'.green, ' ', 'webAds.min.js'.bold.cyan);
      webAdsMinified.end();
      webAdsStream.end();
      jshintrunner.summary();
    });



  }
)


