window.FINN ?= {}

class Iframe
  constructor: (@name, @options = {}, @id = 'webad-' + @name) ->
  remove: () ->
    @$wrapper.remove();
    
  html: ()->    
    div       = document.createElement('div')
    innerDiv  = document.createElement('div')
    iframe    = document.createElement('iframe')
    
    innerDiv.className  = 'inner'
    div.id              = @id
    div.className       = ('advertising webads ' + @id)
    
    iframe.src        = '/finn/webads#' + @name
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
    @active     = false;
    console.log 'new Banner;', @name, @exposeObj
  
  onload: () ->
    console.log('loaded:', @name)
    $body = @iframe.$iframe.contents().find('body');
    size = {width: $body.outerWidth(), height: $body.outerHeight()};
    @iframe.$iframe.css(size).attr('height', size.height).attr('width', size.width);
    console.log('iframe: size', size, 'height', size.height, 'width', size.width);
  
  setContainer: (@container) ->
    #TODO
    
  expose: () -> return $.extend {}, @exposeObj, {banner: @}

  injectScript: (idoc, iwin) ->
    console.log('inject:', @name)
    idoc.write('<scr' + 'ipt type="text/javascript" src="'+@url+'"></scr'+'ipt>');
    return @
  
  resize: () ->
    #TODOx
    
  refresh: () ->
    @iframe.$wrapper.replaceWith(@iframe.html());
    
  remove: () ->
    @active = false;
    @iframe.remove()
    return @
    
  render: () ->
    console.log 'render:', @name
    @iframe = new Iframe(@name, @params)
    return @
    
  insert: () ->
    console.log 'insert;', @name    
    @active = true;
    jQuery("#"+@container).addClass('webads-processed').append(@iframe.html())
    return @
  
window.FINN.Banner = Banner