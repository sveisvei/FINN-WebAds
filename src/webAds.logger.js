var FINN=FINN||{};

(function(F, $){
  var REXP_LOGLEVEL   = /loglevel=(\d+)/gmi;
  var loc             = window.location.toString();
  
  function logViewTemplate(logLevel, title, noMenu){
    var logLevelUp   = loc.replace(REXP_LOGLEVEL, 'loglevel=' + (logLevel + 1));
    var logLevelDown = loc.replace(REXP_LOGLEVEL, 'loglevel=' + (logLevel - 1));
    var noLogLevel   = loc.replace(REXP_LOGLEVEL, '');
    var menu         = noMenu ? '' : '\
      <a href="' + logLevelUp   + '">+</a>\
      <a href="' + logLevelDown + '">-</a>\
      <a href="' + noLogLevel   + '">x</a>\
    ';
    
    var templ = '<div id="webadsLogger">\
        <h1>'+(title||'Logger')+' (' + logLevel + ')'+menu+'</h1>\
        <div class="inner"></div>\
    </div>';
    return templ;
  }

  function logger(loggerName, logLevel, ready) {
    var $log; 
    var logLevelLocked = logLevel && typeof logLevel !== 'function';
    if (!logLevel) {
      logLevel  = loc.match(/loglevel=(\d+)/mi);
      logLevel  = (logLevel && logLevel[1] ? logLevel[1] : 0) * 1;
    }
    var readyLoaded = false;
    var buffer = [];

    var result = {
      log: function(banner, level, message){
        if (logLevel > 0) {
          var obj = {banner: banner, level: level, message: message};
          if (readyLoaded) {
            log.call(banner, level, message);
          } else {
            buffer.push(obj);
          }
        }
      }
    };

    if (logLevel > 0) {
      $(document).ready(function(){
        $log        = $("#banners").prepend(logViewTemplate(logLevel, loggerName, logLevelLocked)).find('.inner');        
        readyLoaded = true;        
        $.each(buffer, resolve);
        buffer      = null;
        if (ready) ready(result);
      });
    }
  
    
    function resolve(){
      log.call(this.banner, this.level, this.message);
    }
    
    var now;
    var logTimer = function(){
      var getTime = (new Date()).getTime();
      if (!now) now = getTime;
      return (getTime - now);
    };
    
    function log(level, msg){
      if (level > logLevel) return;
      var outputClass = [this.name && this.name.toLowerCase(), 'level'+level, this.failed ? 'fail' : '', this.active ? '' : 'unactive'].join(' ');
      $log.append('<p class="'+outputClass+'"><span class="label label-time">' + logTimer() + ' ms</span><span class="label label-banner">' + this.name + '</span> ' + msg + '</p>');
      
    }
    
    return result;
  }
  return (FINN.webAds.logger = logger);
})(FINN, jQuery);
