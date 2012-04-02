###

###
class OverridableOptions
  constructor: (@options)->    
  setOption: (key, val)->
    @options[key] = val

###
  WebBanners - Collection of Banner
###
class WebBanners extends OverridableOptions
  constructor: (options)->
    super(options)
  add: (key, value) ->
    #
  render: (pos) ->
  renderAll: () ->
  refresh: (pos) ->
  refreshAll: () ->
  renderWhenVisible: () ->
  
  
###

###
class HeliosWebBanners extends WebBanners
  constructor: (@positions = [], options = {}) ->
    super(options) # call parent constructor
    super.add(this.positions) # add positions
    
  fetch: (positionName, callback = $.noop) ->
    # 
  fetchAll: (positionNameList, callback = $.noop) ->
    # geturls for all registered positions
  
  
  
###

###
class Banner extends OverridableOptions
  constructor: () ->
  resize: (width, height) ->
  remove: () ->

###
###
class IframeContentLoader extends OverridableOptions
  constructor: () ->
  

###

###
class IframeApi
  expose: (obj) ->
    # expose each key in object in the global scope.
      # inFIF, inDapIf
    # expose track, tf_track etc (bransje defaults)
    # expose or load jquery, swfobject
    # expose plugins, e.g. overlay, pop-up, dialogs, resize-plugin
  getContextData: ->
    # expose data from parent FINN-object, e.g. Boat info
    # expose parent url and paramteres
    # expose hash parameters as well
    # ipGEO position
  search: (serviceName) ->
    # search service in parent page.