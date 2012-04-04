window.FINN ?= {}

FINN.webAds ?= {}
iframeUrl = FINN.webAds.iframeUrl = FINN.webAds.iframeUrl ||"/finn/webads";

class Iframe
  constructor: (@name, @options = {}, @id = 'webad-' + @name) ->
  remove: () ->
    @$wrapper.remove();
  
  refresh: () ->
    currSrc = @$iframe.attr('src');
    url = if currSrc is "#{iframeUrl}?refresh##{@name}" then "#{iframeUrl}##{@name}" else "#{iframeUrl}?refresh##{@name}"
    @$iframe.attr('src', url)
    
  
  html: ()->    
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
    console.log '-> new Banner;', @name, @exposeObj
  
  config: (key, value) ->
    @[key] = value;
  
  onload: () ->
    console.log('onload:', @name)
    $wrapper = @iframe.$iframe.contents().find('#webAd');
    @resize( $wrapper.width(),  $wrapper.height())
    @params.done(@) if @params.done and typeof @params.done is 'function'
    return @
  
  resize: (@width, @height) ->    
    console.log('iframe: ', @name, '. resize:', height, 'width', width);    
    @iframe.$iframe.css({height: height, width: width}).attr('height', height).attr('width', width);
    return @
  
  setContainer: (@container) ->
    #TODO
    
  expose: () -> 
    return $.extend {}, @exposeObj, {banner: @}

  injectScript: (idoc, iwin) ->
    console.log('inject:', @name)
    idoc.write('<scr' + 'ipt type="text/javascript" src="'+@url+'"></scr'+'ipt>');
    return @
  
  refresh: () ->
    #@iframe.$wrapper.replaceWith(@iframe.html());
    @iframe.refresh();
    
  remove: () ->
    @active = false;
    @iframe.remove()
    return @

  insert: () ->
    console.log 'insert;', @name    
    @active = true;
    $container = if typeof @container is 'string' then jQuery("#"+@container) else @container
    $container.addClass('webads-processed')
      .append(@iframe.html())
    return @
  
window.FINN.Banner = Banner