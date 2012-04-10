
var cradle = require('cradle');
cradle.setup({
  host: "finn.iriscouch.com",
  cache: true,
  raw: false,
  auth: {
    username: "finn",
    password: "finntomet"
  }
});


db = new(cradle.Connection)(5984).database('webads');

db.exists(function(err, exist){
  if (err) {
    console.log(err)
  } else if (exist) {
    console.log('db webads exist ok');
  } else {
    db.create(function(){
      db.save('_design/all', {
        all: {
          map: function(doc){emit(null, doc)}
        }
      })
    });
  }
});

function getAll(){}

function save(){}

module.exports = {
  getAll: getAll,
  save: save
}