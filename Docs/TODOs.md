#TODO
- Implementering
  p     - Forsiden  (sveinung)
  p     - Eiendom   (lazy load, + data-webad-position)
  p     - Strapon   ()
  todo  - Reise     (Bjørnar)
          - cluster? Størrelse problematikk
          - sticky underthefold script - banners-right
            - se på doc høyde og se hvor mange bannere som kan gjøres sticky
            - samle fra bunnen, legg på 10px som margen i tillegg.    
  todo  - Torget    (Øyvind)


- data-attributter istedet for klasser
  - <div data-webads="true" id="?"></div>
  - <div data-webads="lazy" data-webad-position="lazy"></div>
  


- refresh fra ny banner-url fra server? Hva skal gjøres her i koden?
- refresh from backend middleware - throttling

- Strap-on, kjetil jørgensen-dahl jobb-objekt side standard skjult banner.
  - Default skjult banner
  - default/fjerne banner. fjerne init
  - bodyClass bodyFailClass navngivning.

- backend. non-helios-content === refreshFromServer osv må ignoreres.

- Helios-parameters-refresh / søkeparametere === refreshFromServer/refreshAllFromServer
- ? heliosparameters, helioskeywords
- heliosbackend svarer med nye urler via ajax
- Plugins (avklare med marius/rune hva produktet er)
- HEADER: responseHeaders.setCacheControl("max-age=290304000, public");
- tf_track osv må testes

# Ikke viktig:
- Reporte feil via cassandra/statistikk
- Forenkle
  - fjerne jade
  - rydde opp unødvendig ting som gjøre det vanskelig for andre

#teknisk gjeld
  - Reise- non-spring