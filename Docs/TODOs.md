#TODO
- Implementering
  - Forsiden  common-old-tiles / strapon
  - Eiendom   common + (lazy load, + data-webad-position)
  - Strapon   (bruker data-webad-position)
  - Reise     (Bjørnar)
  - Torget    common-old-tiles

#bugs
inline-block på body i iframe på noen banner i IE7
-possible to revisisjon iframe.
-dont resize iframe if same size as injected.

#browsersupport
  - "extends" rename

#Api
- setBannerFlag(key, valueString)
- refresh from backend - banner-url fra server? 
- refresh from backend middleware - throttling

#CSS
- Responsive support?

#config
- config.backend. 
  non-helios-content === refreshFromServer osv må ignoreres.
- bottombanners?
- Strap-on, kjetil jørgensen-dahl jobb-objekt side standard skjult banner.
    - default/fjerne banner. fjerne init


#Plugins
- tf_track osv må testes 
  - Reise hooker seg inn på done callback.
- Plugins (avklare med marius/rune hva produktet er)

#Backend
  - useragent check inn i controllere.
  - heliosbackend svarer med nye urler via ajax
  - serve iframe 
    - HEADER: responseHeaders.setCacheControl("max-age=290304000, public");
  
# Ikke viktig:
- Reporte feil via cassandra/statistikk

#Cleanup finn-codebase
  OAS, HELIOS
  old banner tiles

#teknisk gjeld
  - Reise- non-spring