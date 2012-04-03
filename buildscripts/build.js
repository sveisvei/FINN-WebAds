var fs = require('fs');

var files = [
'webAds.banners.js',
'webAds.config.js',
'webAds.plugins.js',
'webAds.js'
];

var content = "";
var dir = __dirname + "/../src/"
files.forEach(function(file, i){
  console.log('Packing', file);
  content += fs.readFileSync(dir + file, 'utf8');
});

fs.writeFileSync(dir + 'webAds.packed.js', content, 'utf8');

