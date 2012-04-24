#TODO
- Implementering
  - Forsiden  (sveinung)
  - Eiendom   (lazy load, + data-webad-position)
  - Strapon   (bruker data-webad-position)
  todo - Reise     (Bjørnar)
          - cluster? Størrelse problematikk          
  todo - Torget    (Øyvind)

Move webads.css into global/head.!!!
Always check for FINN.webAds.

#browsersupport
  - "extends" rename

#Api
- refresh from backend - banner-url fra server? 
- refresh from backend middleware - throttling

#config
- data-attributter istedet for klasser
  - <div data-webads="true" id="needed-id"></div>
  - <div data-webads="lazy" data-webad-position="lazy"></div>
  
- config.backend. 
  non-helios-content === refreshFromServer osv må ignoreres.

- Strap-on, kjetil jørgensen-dahl jobb-objekt side standard skjult banner.
    - Default skjult banner
    - default/fjerne banner. fjerne init
    - bodyClass bodyFailClass navngivning.


#Plugins
- tf_track osv må testes
- Plugins (avklare med marius/rune hva produktet er)


#Backend
  - heliosbackend svarer med nye urler via ajax
  - serve iframe 
    - HEADER: responseHeaders.setCacheControl("max-age=290304000, public");
  
# Ikke viktig:
- Reporte feil via cassandra/statistikk
- Forenkle
  - fjerne jade
  - rydde opp unødvendig ting som gjøre det vanskelig for andre

#teknisk gjeld
  - Reise- non-spring