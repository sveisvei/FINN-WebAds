var fs = require('fs');

var files = [
  'webAds.banners.js',
  'webAds.config.js',
  'webAds.plugins.js',
  'webAds.js'
];

var content = [];

var dir = __dirname + "/../src/";
var target = __dirname + "/../target/";

files.forEach(function(file, i){
  console.log('Packing', file);
  content.push(fs.readFileSync(dir + file, 'utf8'));
});

fs.writeFileSync(target + 'webAds.packed.js', content.join(""), 'utf8');

