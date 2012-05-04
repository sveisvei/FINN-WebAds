#TODO
- Implementering
  - Forsiden  common-old-tiles / strapon
  - Eiendom   common + (lazy load, + data-webad-position)
  - Strapon   (bruker data-webad-position)
  - Reise     (Bjørnar)
  - Torget    common-old-tiles
  - Oppdrag   (Endre)

#bugs
? inline-block på body i iframe på noen banner i IE7
- feedbanner - Vil disse fungere Benjamin?
- mobil-testing.
  - toppbanner loader ikke på iphone, why?
- eksempel plugin, + tests
- hidden bannere i FF har ikke høyde eller bredde === se etter object,embed osv?
  - kan fikses med hack
- IAD -  cache tag

#Api
- refresh from backend - banner-url fra server? 
- refresh from backend middleware - throttling

#Plugins
- tf_track osv må testes - Reise hooker seg inn på done callback.


#Backend
  - serve iframe 
    - HEADER: responseHeaders.setCacheControl("max-age=290304000, public");
  
  [haster ikke] 
  - heliosbackend svarer med nye urler via ajax
    - avklare api, f.eks. server(currentUrl, cb)
  
# Ikke viktig:
- Reporte feil via cassandra/statistikk
- config.backend. 
  "helios", "finn", "aftenposten"

#Cleanup finn-codebase
  old banner tiles

#teknisk gjeld
  - Reise- non-spring