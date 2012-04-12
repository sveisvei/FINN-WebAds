var fs      = require('fs');
require('colors');

var files = [
  'webAds.banners.js',
  'webAds.config.js',
  'webAds.plugins.js',
  'webAds.manager.js'
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


var content = [];

var dir = __dirname + "/../src/";
var target = __dirname + "/../";

files.forEach(function(file, i){
  console.log((i+1+"").red, 'Packing:'.yellow, file);
  content.push(fs.readFileSync(dir + file, 'utf8'));
});

content = content.join("");
fs.writeFileSync(target + 'webAds.js', content, 'utf8');
console.log('File output:'.green, ' webAds.js');

fs.writeFileSync(target + 'webAds.min.js', mini(content), 'utf8');
console.log('File output:'.green, ' webAds.min.js');

