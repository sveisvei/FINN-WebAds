window.FINN ?= {}

class Iframe
  constructor: (@name, @options = {}, @id = 'webad-' + @name) ->
  remove: () ->
    @$wrapper.remove();
  
  refresh: () ->
    #force refresh of rendring
    currSrc = @$iframe.attr('src');
    #@$iframe.attr('src', 'about:blank')
    @$iframe.attr('src', if currSrc is '/finn/webads/#' + @name then '/finn/webads#' + @name else '/finn/webads/#' + @name )
    
  
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
    @width      = @params.width
    @height     = @params.height
    @iframe     = new Iframe(@name, @params)    
    @active     = false;    
    console.log '-> new Banner;', @name, @exposeObj
  
  onload: () ->
    console.log('onload:', @name)
    $body = @iframe.$iframe.contents().find('body');
    @resize($body.outerWidth(), $body.outerHeight())
  
  resize: (width, height) ->
    console.log('iframe: resize:', height, 'width', width);    
    @iframe.$iframe.css({height: height, width: width}).attr('height', height).attr('width', width);
  
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
    $container
      .addClass('webads-processed')
      .append(@iframe.html())
    return @
  
window.FINN.Banner = Banner