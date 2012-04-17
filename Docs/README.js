Notes
  - RefreshAll
    - Hva med prioritering???
  - 1x1, 1x2, 3x3

Visjon
  - få det testbart, crossbrowser.
    - on-demand testing
    - 3. part bannerkode
    - case-basert kode
      - flash embed
      - overlay
      - bruk av api via js
      - timer, simulerer mobilbruk - treg linje
      - Rekkefølge
    - Hva skal testes?
      - Bredde og høyde etter den er ferdig
      
      
  - dynamisk størrelser
  - alt skal være inni iframe.
  - Toppbanner må lastes først, for companion ads. (kø-basert). Trottle max 5 om gangen.
  - Fallback til ($("body").outerHeight())




API
  -> Global Settings
    LOAD_PX_BEFORE_VIEWPORT: 100px
    IN_FIF: FALSE
    IN_DAP_IF: TRUE
    ELEMENTS PRIORITY: [OBJECT, EMBED, CANVAS, IMG]
    SECONDARY PRIORITY: [DIV, SPAN]
    FAIL_CLASS: 'failed'
    SUCCESS_CLASS: 'success'
    
    
  -> Annonse settings (lokal)
    - set('Top', {widht: 1, height: 2})
    - set('Top', "#element-with-data-attributes") -< data-banner-width data-bannner-height
    -POSITION (nanv, eks. Top)
      -> DEFAULT_SIZE: width, height
      -> render_if (window width, window height, feature tests)
      -> .on('banner:change') = render again or remove
    
  -> add (OBJ|ARRAY with OBJ)
    - {name: 'top', value: 'adtech url'}
  -> render(position)
  -> renderAll(serial?bool)
  -> refresh(position)
  -> refreshAll(serial?bool)
  -> renderWhenVisible(position, range in px||ADD_SETTINGS||GLOBAL)
  
  -> getNewUrls(currentURL, STRING||ARRAY of strings) "Top,Left,Middle"
    <- Returns [{},{}]
  
  
  #tilgjengelig
  -> swfobject
  -> jquery
  
  #plugins
  -> fullscreen overlay
  -> ++
  
  #Annonse data (nøkkel?)
  - state-objekt, har set metoder.
  -> findAd
    - tilgjengligjør andre ads på siden. ???
      - Rune må styre dette, 
    
  -> getPageContextData
    -> Gjeldende url
    -> Objektinfo
    -> Søkeurler/parametere
    -> Bruker? Har vi lov.
  -> search
    - getCurrentObject('', kopiTilbake (IKKE REFERANSE))
      - Henter fra siden eller fallback til ajax
    - Søke på hva som helst av data.
  -> GLOBALS: track, tf_track..
  


css
/*
.banners
  overflow hidden
  @992
    overflow: visible
  iframe
    display inline-block
    vertical-align: bottom;
  display none
  @480
    display block
    .skyscraper
      display none
  @992
    .skyscraper, .middleBanner
      display block

aside.banners
  max-width: containerWidth + 20px
  $unresponsive
    width: containerWidth + 20px
  height: 150px
  padding-bottom: 12px
  clearfix()
  .banner
    height 0px
    overflow: visible
  &.handheld
    height: 0
    padding-bottom: 0
  &.tablet
    .webad_Top
      width: containerWidth + 20px

.webad_Top
  .inner
    width 992px
    text-align: right
    overflow: visible

.webad_Right2, .webad_Left1
  display none
  @992
    display block
  position: relative
  z-index 1
  width: 100%
  .inner
    position: absolute
    z-index: 2
    top: 0px

.webad_Right2
  .inner
    left: 992px
  &.sticky
    iframe
      display block
      position: fixed
      z-index 3
      top: 10px
      left: 1000px

.webad_Left1
  .inner
    left: -252px

body.has-dominant-campaign
  padding: 10px 0 0 0  //body
  .wrapper, aside.banners, footer.copyright
    margin: 0 auto

.has-no-top-position
  aside.banners
    height 0
    padding-bottom 0px
  .webad_Top
    &, .inner
      display none

.webad_Survey, .webad_Wallpaper
  position absolute
  z-index: 1
  bottom: 0px
  display: none

.middleBanner
  display none
  background white
  border-radius 2px
  text-align center
  padding: 10px 0;
  @992
    display block

*/
