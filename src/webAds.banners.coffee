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
    @active     = false;
    @retries    = 5;
    @timer      = 50;
    @resolved   = false;
    console.log '-> new Banner;', @name, @exposeObj
  
  config: (key, value) -> @[key] = value;
  
  onload: () ->
    console.log('BANNER ONLOAD:', @name)
    $wrapper  = @iframe.$iframe.contents().find('#webAd');
    width     = $wrapper.width();
    height    = $wrapper.height()
    
    invalidSize = (width is null or width <= 25 or height is null or height <= 25)
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
    $("body").addClass(@params.bodyFailClass) if @params.bodyFailClass        
    console.error('FAILED -> ', @name, '->', reason);
    
  
  pollForNewSize: () ->
    console.warn('POLL for new size: ',@name, ', timer:', @timer, ' retries:', @retries);
    @timer += @timer
    @retries -= 1
    banner = @
    cb = () -> 
      console.warn('POLL CB!', banner && banner.name)
      banner.onload()
    if (@retries > 0)
      setTimeout(cb, @timer) 
    else
      @fail("timeout")
    
    return @
    
    
  resize: (@width, @height) -> #autoset on bannerclass
    console.log('resize banner=> ', @name, '. resize:', height, 'width', width);    
    @iframe.$iframe.css({height: height, width: width}).attr('height', height).attr('width', width);
    return @
  
  expose: () -> 
    return $.extend {}, @exposeObj, {banner: @}

  injectScript: (idoc, iwin) ->
    console.log('inject:', @name)
    idoc.write('<scr' + 'ipt type="text/javascript" src="'+@url+'"></scr'+'ipt>');
    return @
  
  refresh: () ->
    console.log('REFRESH', @name)
    @resolved = false
    @retries  = 5
    @timer    = 50
    @iframe.refresh();
    
  remove: () ->
    @active = false;
    @resolved = false;
    @iframe.remove()
    return @

  insert: () ->
    console.log 'insert;', @name    
    @active = true;
    $container = if typeof @container is 'string' then jQuery("#"+@container) else @container
    $container.addClass('webads-processed').append(@iframe.makeIframe());
    return @
  
window.FINN.Banner = Banner