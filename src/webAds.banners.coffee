"use strict";
window.FINN ?= {}

FINN.webAds ?= {}
webAds = FINN.webAds

class Iframe
  constructor: (@name, @options = {}, @id = 'webad-' + @name) ->
  remove: () ->
    @$wrapper.remove();
  
  refresh: () ->
    iframeUrl = webAds.iframeUrl||"/finn/webads";    
    currSrc = @$iframe.attr('src');
    url = if currSrc is "#{iframeUrl}?refresh##{@name}" then "#{iframeUrl}##{@name}" else "#{iframeUrl}?refresh##{@name}"
    @$iframe.attr('src', url)
    
  
  makeIframe: ()->    
    iframeUrl = webAds.iframeUrl||"/finn/webads";
    div       = document.createElement('div')
    innerDiv  = document.createElement('div')
    iframe    = document.createElement('iframe')
    
    innerDiv.className  = 'inner'
    div.id              = @id
    div.className       = "advertising webads #{@id}"
    
    iframe.src        = "#{iframeUrl}##{@name}"
    iframe.scrolling  = 'no'
    iframe.className  = 'webad-iframe'
    # IE 7-8
    iframe.marginWidth        = 0
    iframe.marginHeight       = 0
    iframe.frameBorder        = '0' 
    iframe.allowTransparency  = 'true'
    #Safari will will not show iframe until scroll with width/height == 0px
    iframe.width        = (@options.width or 100) 
    iframe.height       = (@options.height or 100)
    iframe.style.border = '0px'
    iframe.style.width  = (@options.width or 100) + 'px'
    iframe.style.height = (@options.height or 100) + 'px'
    # Wrap iframe inside 2 divs
    innerDiv.appendChild(iframe)
    div.appendChild(innerDiv) 
    # Add reference for selecting injected iframe
    @$iframe  = $(iframe)
    @$wrapper = $(div)
    

class Banner
  constructor: (@params, @exposeObj = {}) ->
    @name       = @params.name
    @url        = @params.url
    @container  = @params.container
    @width      = @params.width
    @height     = @params.height
    @iframe     = new Iframe(@name, @params)    
    @active     = false
    @retries    = 5
    @timer      = 50
    @resolved   = false
    @failed     = false
    @now        = Date.now()    
    @log('new Banner()');
  
  log: (msg) ->
    if window.console and window.console.log
      args = [@name + "->", Date.now() - @now].concat(Array.prototype.slice.call(arguments))
      console.log.apply(console, args)
    else
      alert(msg)
    
  config: (key, value) -> @[key] = value;
  
  onload: () ->
    @log('onload')
    @processSize()
    return @
  
  processSize: () ->
    @log('processSize')
    $wrapper  = @iframe.$iframe.contents().find('#webAd');
    width     = $wrapper.width();
    height    = $wrapper.height()
    
    invalidSize = (width is null or width <= 31 or height is null or height <= 31)
    return @pollForNewSize() if invalidSize
    
    @resize( width,  height)
    @resolve()
    return @
  
  resolve: () ->
    $("body").addClass(@params.bodyClass) if @params.bodyClass        
    
    @params.done(@) if @params.done and typeof @params.done is 'function'        
    webAds.resolve(@name) if not @resolved
    @resolved = true
  
  fail: (reason) ->
    @log('Failed '+reason)
    $("body").addClass(@params.bodyFailClass) if @params.bodyFailClass  
    @failed = true;
    @resolve()
    
  
  pollForNewSize: () ->
    @log('pollForNewSize ' + @timer + ' retries: '+ @retries)
    @timer    += @timer
    @retries  -= 1
    banner    =  @

    if (@retries > 0)
      cb = () -> 
        banner.log('pollForNewSize setTimeout')
        banner.processSize()
      setTimeout(cb, @timer) 
    else
      @fail("timeout")
    
    return @
    
    
  resize: (@width, @height) -> #autoset on bannerclass
    @log('resize banner=> height:'+ height+ 'width'+ width)
    @iframe.$iframe.css({height: height, width: width}).attr('height', height).attr('width', width);
    return @
  
  expose: () -> 
    return $.extend {}, @exposeObj, {banner: @}

  injectScript: (idoc, iwin) ->
    @log('injectScript')
    idoc.write('<scr' + 'ipt type="text/javascript" src="'+@url+'"></scr'+'ipt>');
    return @
  
  refresh: () ->
    @log('refresh')
    @resolved = false
    @retries  = 5
    @timer    = 50
    @iframe.refresh();
    
  remove: () ->
    @log('remove')
    @active = false;
    @resolved = false;
    @iframe.remove()
    return @

  insert: () ->
    @log('insert')
    @active = true;
    $container = if typeof @container is 'string' then jQuery("#"+@container) else @container
    $container.addClass('webads-processed').append(@iframe.makeIframe());
    return @
  
window.FINN.Banner = Banner