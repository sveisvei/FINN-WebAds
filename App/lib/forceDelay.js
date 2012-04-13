module.exports = function(app){
  app.get('*', function(req, res, next){  
    if (req.param('forceDelay', false)) {
      console.log('forced delay on request for ' + req.param('forceDelay') + 'ms');
      setTimeout(function(){ 
        next(); 
      }, req.param('forceDelay')*1)
    } else {
      next();
    }
  });
}