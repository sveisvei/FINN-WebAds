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
  
