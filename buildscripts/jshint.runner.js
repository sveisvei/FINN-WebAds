require('colors');
var jshint = require('jshint').JSHINT;

console.log(jshint);
var options = {

  "node" : true,
  "es5" : false,
  "browser" : true,

  "bitwise": false,
  "boss" : false,
  "curly": false,
  "debug": false,
  "devel": false,
  "eqeqeq": false,
  "evil": true,
  "forin": false,
  "immed": true,
  "laxbreak": false,
  "newcap": true,
  "noarg": true,
  "noempty": false,
  "nonew": false,
  "nomen": false,
  "onevar": false,
  "plusplus": false,
  "regexp": false,
  "undef": true,
  "sub": true,
  "strict": false,
  "white": false,
  "unused": false
};
var globals = {
  jQuery: false,
  FINN: true,
  burt_api: false
};

module.exports = function (caseName){
  console.log('init '.red, caseName);

  var errors = [];

  return {
    add: function(filename, content){
      var result = jshint(content, options, globals);
      if (result == false){
        errors.push({
          filename: filename,
          errors: jshint.errors
        })
      }
    },
    summary: function(){
      if (errors.length > 0){
        console.log('#### JSHINT Failed on src files ####'.red.bold.inverse);
        errors.forEach(function(error){
          console.log(( "\n[ " + error.filename + " ]").red.inverse);
          var paddLength = error.filename.length;
          var padd = "";
          for(var i = 0; i < paddLength; i ++){
            padd += " ";
          }
          error.errors.forEach(function(desc, i){
            if (desc){
              console.log((padd + '-> ERROR '+(i+1)+':').red.inverse, 'Line:', (desc.line+"").red, ':', (desc.character+"").yellow);
              console.log((padd + '-> REASON :').red.inverse, desc.reason.yellow.bold);
              console.log((padd + '-> CODE   :').red.inverse, desc.evidence + "".trim());
            }

          });
        });
      }
    }
  };
};