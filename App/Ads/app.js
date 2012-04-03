
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.compiler({src: __dirname + '/../../src', dest: __dirname + '/../../src', enable: ['coffeescript']}));
  
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/../../src'));
  app.use(express.static(__dirname + '/../Tests'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.get("/finn/realestate/homes/rotationdemo.json", function(req, res){
  setTimeout(function(){
    res.send(
      [{"address":"Pottemakerveien 39","pris":"2 990 000,-","image":[{"priority":1,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_2107759158.jpg","thumbnail":"2012/3/30/1/340/565/81_2107759158_thumb.jpg","imageAtmStatus":0,"imageName":"98bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_2107759158_xl.jpg","mainSize":"2012/3/30/1/340/565/81_2107759158_hoved.jpg","main":"2012/3/30/1/340/565/81_2107759158_hoved.jpg","micro":"2012/3/30/1/340/565/81_2107759158_tumb.jpg","datestamp":20120330},{"priority":2,"path":null,"version":null,"description":"Tomten og område rundt boligen er pent opparbeidet med beplanting, belegningsstein, uteplasser og fine hageområder. Boligen ligger i en skråning opp fra veien. Dette gjør eiendommen solrik og med gode utsynsforhold.","reference":"2012/3/30/1/340/565/81_-299047761.jpg","thumbnail":"2012/3/30/1/340/565/81_-299047761_thumb.jpg","imageAtmStatus":0,"imageName":"8fbf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-299047761_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-299047761_hoved.jpg","main":"2012/3/30/1/340/565/81_-299047761_hoved.jpg","micro":"2012/3/30/1/340/565/81_-299047761_tumb.jpg","datestamp":20120330},{"priority":3,"path":null,"version":null,"description":"Fra gangen er det trapp opp til første etasje, samt lett tilgang til de øvrige rommene i underetasjen. Gangen er lyst oppusset med hvitmalt panel i himlingen og lys laminat på gulvet.","reference":"2012/3/30/1/340/565/81_-1373839832.jpg","thumbnail":"2012/3/30/1/340/565/81_-1373839832_thumb.jpg","imageAtmStatus":0,"imageName":"84bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1373839832_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1373839832_hoved.jpg","main":"2012/3/30/1/340/565/81_-1373839832_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1373839832_tumb.jpg","datestamp":20120330},{"priority":4,"path":null,"version":null,"description":"Stuen er formet som en vinkelstue og kan deles inn i tre seksjoner. En spisestuedel, salong og en tv-krok.","reference":"2012/3/30/1/340/565/81_194961681.jpg","thumbnail":"2012/3/30/1/340/565/81_194961681_thumb.jpg","imageAtmStatus":0,"imageName":"96bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_194961681_xl.jpg","mainSize":"2012/3/30/1/340/565/81_194961681_hoved.jpg","main":"2012/3/30/1/340/565/81_194961681_hoved.jpg","micro":"2012/3/30/1/340/565/81_194961681_tumb.jpg","datestamp":20120330},{"priority":5,"path":null,"version":null,"description":"Stuen er romslig og de store vinduene mot vest slipper inn rikelig med lys.","reference":"2012/3/30/1/340/565/81_523297085.jpg","thumbnail":"2012/3/30/1/340/565/81_523297085_thumb.jpg","imageAtmStatus":0,"imageName":"95bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_523297085_xl.jpg","mainSize":"2012/3/30/1/340/565/81_523297085_hoved.jpg","main":"2012/3/30/1/340/565/81_523297085_hoved.jpg","micro":"2012/3/30/1/340/565/81_523297085_tumb.jpg","datestamp":20120330},{"priority":6,"path":null,"version":null,"description":"Det er montert utvendige elektriske persienner på vinduene i stuen.","reference":"2012/3/30/1/340/565/81_1479535638.jpg","thumbnail":"2012/3/30/1/340/565/81_1479535638_thumb.jpg","imageAtmStatus":0,"imageName":"97bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1479535638_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1479535638_hoved.jpg","main":"2012/3/30/1/340/565/81_1479535638_hoved.jpg","micro":"2012/3/30/1/340/565/81_1479535638_tumb.jpg","datestamp":20120330},{"priority":7,"path":null,"version":null,"description":"Fra stuen er det utgang til en stor solrik og koselig terrasse. Store deler av terrassen er overbygget og er utstyrt med utepeis med pipe og ildsted samt elektriske ovner i taket.","reference":"2012/3/30/1/340/565/81_1275649174.jpg","thumbnail":"2012/3/30/1/340/565/81_1275649174_thumb.jpg","imageAtmStatus":0,"imageName":"8ebf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1275649174_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1275649174_hoved.jpg","main":"2012/3/30/1/340/565/81_1275649174_hoved.jpg","micro":"2012/3/30/1/340/565/81_1275649174_tumb.jpg","datestamp":20120330},{"priority":8,"path":null,"version":null,"description":"Kjøkkenet ble oppusset og modernisert så sent som i 2008.","reference":"2012/3/30/1/340/565/81_-723391395.jpg","thumbnail":"2012/3/30/1/340/565/81_-723391395_thumb.jpg","imageAtmStatus":0,"imageName":"89bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-723391395_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-723391395_hoved.jpg","main":"2012/3/30/1/340/565/81_-723391395_hoved.jpg","micro":"2012/3/30/1/340/565/81_-723391395_tumb.jpg","datestamp":20120330},{"priority":9,"path":null,"version":null,"description":"Kjøkkeninnredning er av type Kvik med malte profilerte fronter, heltre benkeplate og integrerte hvitevarer som komfyr, platetopp, kjøleskap og oppvaskmaskin.","reference":"2012/3/30/1/340/565/81_-1325801921.jpg","thumbnail":"2012/3/30/1/340/565/81_-1325801921_thumb.jpg","imageAtmStatus":0,"imageName":"8bbf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1325801921_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1325801921_hoved.jpg","main":"2012/3/30/1/340/565/81_-1325801921_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1325801921_tumb.jpg","datestamp":20120330},{"priority":10,"path":null,"version":null,"description":"Kjøkkenet har rikelig med skap og benkeplass.\nPå kjøkkenet er det også et massivt kjøkkenbord som er montert til veggen.","reference":"2012/3/30/1/340/565/81_-49621163.jpg","thumbnail":"2012/3/30/1/340/565/81_-49621163_thumb.jpg","imageAtmStatus":0,"imageName":"8abf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-49621163_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-49621163_hoved.jpg","main":"2012/3/30/1/340/565/81_-49621163_hoved.jpg","micro":"2012/3/30/1/340/565/81_-49621163_tumb.jpg","datestamp":20120330},{"priority":11,"path":null,"version":null,"description":"Boligen har eget adskilt kjøkken. I himlingen både på kjøkken i stuen er det innfelt downlights. Rommene har lyse og trivelige overflater.","reference":"2012/3/30/1/340/565/81_1557845859.jpg","thumbnail":"2012/3/30/1/340/565/81_1557845859_thumb.jpg","imageAtmStatus":0,"imageName":"8dbf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1557845859_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1557845859_hoved.jpg","main":"2012/3/30/1/340/565/81_1557845859_hoved.jpg","micro":"2012/3/30/1/340/565/81_1557845859_tumb.jpg","datestamp":20120330},{"priority":12,"path":null,"version":null,"description":"To av boligens tre soverom finner vi i underetasjen. Alle soverommene er lyst og pent oppusset.","reference":"2012/3/30/1/340/565/81_-1555570315.jpg","thumbnail":"2012/3/30/1/340/565/81_-1555570315_thumb.jpg","imageAtmStatus":0,"imageName":"92bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1555570315_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1555570315_hoved.jpg","main":"2012/3/30/1/340/565/81_-1555570315_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1555570315_tumb.jpg","datestamp":20120330},{"priority":13,"path":null,"version":null,"description":"Det største soverommet i underetasjen er utvidet og rommer blant annet en romslig skyvedørsgarderobe.","reference":"2012/3/30/1/340/565/81_800449394.jpg","thumbnail":"2012/3/30/1/340/565/81_800449394_thumb.jpg","imageAtmStatus":0,"imageName":"90bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_800449394_xl.jpg","mainSize":"2012/3/30/1/340/565/81_800449394_hoved.jpg","main":"2012/3/30/1/340/565/81_800449394_hoved.jpg","micro":"2012/3/30/1/340/565/81_800449394_tumb.jpg","datestamp":20120330},{"priority":14,"path":null,"version":null,"description":"Lyst og pent soverom i underetasjen.","reference":"2012/3/30/1/340/565/81_1172957571.jpg","thumbnail":"2012/3/30/1/340/565/81_1172957571_thumb.jpg","imageAtmStatus":0,"imageName":"91bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1172957571_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1172957571_hoved.jpg","main":"2012/3/30/1/340/565/81_1172957571_hoved.jpg","micro":"2012/3/30/1/340/565/81_1172957571_tumb.jpg","datestamp":20120330},{"priority":15,"path":null,"version":null,"description":"Badet er pusset opp med mørke fliser på gulvet og fliser i brysthøyde på veggene.","reference":"2012/3/30/1/340/565/81_981069627.jpg","thumbnail":"2012/3/30/1/340/565/81_981069627_thumb.jpg","imageAtmStatus":0,"imageName":"93bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_981069627_xl.jpg","mainSize":"2012/3/30/1/340/565/81_981069627_hoved.jpg","main":"2012/3/30/1/340/565/81_981069627_hoved.jpg","micro":"2012/3/30/1/340/565/81_981069627_tumb.jpg","datestamp":20120330},{"priority":16,"path":null,"version":null,"description":"utstyrt med veggmontert toalett, dusjkabinett med massasjedyser og heldekkende dobbel servant med skuffer, speil og lys. Fra badet er det inngang til vaskerom.","reference":"2012/3/30/1/340/565/81_2015746123.jpg","thumbnail":"2012/3/30/1/340/565/81_2015746123_thumb.jpg","imageAtmStatus":0,"imageName":"94bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_2015746123_xl.jpg","mainSize":"2012/3/30/1/340/565/81_2015746123_hoved.jpg","main":"2012/3/30/1/340/565/81_2015746123_hoved.jpg","micro":"2012/3/30/1/340/565/81_2015746123_tumb.jpg","datestamp":20120330},{"priority":17,"path":null,"version":null,"description":"Toalettrom i 1. etasje har montert vask med underskap og vannklosett.","reference":"2012/3/30/1/340/565/81_204599471.jpg","thumbnail":"2012/3/30/1/340/565/81_204599471_thumb.jpg","imageAtmStatus":0,"imageName":"8cbf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_204599471_xl.jpg","mainSize":"2012/3/30/1/340/565/81_204599471_hoved.jpg","main":"2012/3/30/1/340/565/81_204599471_hoved.jpg","micro":"2012/3/30/1/340/565/81_204599471_tumb.jpg","datestamp":20120330},{"priority":18,"path":null,"version":null,"description":"Store deler av terrassen er overbygget og er utstyrt med utepeis med pipe og ildsted samt elektriske ovner og downlights i taket.","reference":"2012/3/30/1/340/565/81_-610344422.jpg","thumbnail":"2012/3/30/1/340/565/81_-610344422_thumb.jpg","imageAtmStatus":0,"imageName":"86bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-610344422_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-610344422_hoved.jpg","main":"2012/3/30/1/340/565/81_-610344422_hoved.jpg","micro":"2012/3/30/1/340/565/81_-610344422_tumb.jpg","datestamp":20120330},{"priority":19,"path":null,"version":null,"description":"Stor terrasse med gode solforhold. Overbygget med downlights i himlingen.","reference":"2012/3/30/1/340/565/81_-1936139004.jpg","thumbnail":"2012/3/30/1/340/565/81_-1936139004_thumb.jpg","imageAtmStatus":0,"imageName":"85bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1936139004_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1936139004_hoved.jpg","main":"2012/3/30/1/340/565/81_-1936139004_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1936139004_tumb.jpg","datestamp":20120330},{"priority":20,"path":null,"version":null,"description":"På boligens nordside er det laget uteplass med beleggingsstein. Plassen har rikelig med både morgen og kvelds sol.","reference":"2012/3/30/1/340/565/81_1910366668.jpg","thumbnail":"2012/3/30/1/340/565/81_1910366668_thumb.jpg","imageAtmStatus":0,"imageName":"88bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1910366668_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1910366668_hoved.jpg","main":"2012/3/30/1/340/565/81_1910366668_hoved.jpg","micro":"2012/3/30/1/340/565/81_1910366668_tumb.jpg","datestamp":20120330},{"priority":21,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_-1581783320.jpg","thumbnail":"2012/3/30/1/340/565/81_-1581783320_thumb.jpg","imageAtmStatus":0,"imageName":"fde5dd8f-aa78-e111-9390-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1581783320_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1581783320_hoved.jpg","main":"2012/3/30/1/340/565/81_-1581783320_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1581783320_tumb.jpg","datestamp":20120330},{"priority":22,"path":null,"version":null,"description":"Fra garasjen og gårdsplassen er det trapp opp til inngangspartiet. Tomten og område rundt boligen er pent opparbeidet med beplanting, belegningsstein, uteplasser og fine hageområder.","reference":"2012/3/30/1/340/565/81_-1389369251.jpg","thumbnail":"2012/3/30/1/340/565/81_-1389369251_thumb.jpg","imageAtmStatus":0,"imageName":"87bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1389369251_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1389369251_hoved.jpg","main":"2012/3/30/1/340/565/81_-1389369251_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1389369251_tumb.jpg","datestamp":20120330},{"priority":23,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_1873991638.jpg","thumbnail":"2012/3/30/1/340/565/81_1873991638_thumb.jpg","imageAtmStatus":0,"imageName":"75e3aec4-d878-e111-9390-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1873991638_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1873991638_hoved.jpg","main":"2012/3/30/1/340/565/81_1873991638_hoved.jpg","micro":"2012/3/30/1/340/565/81_1873991638_tumb.jpg","datestamp":20120330},{"priority":24,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_68655653.jpg","thumbnail":"2012/3/30/1/340/565/81_68655653_thumb.jpg","imageAtmStatus":0,"imageName":"4ec1cda6-2874-e111-9390-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":432,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_68655653_xl.jpg","mainSize":"2012/3/30/1/340/565/81_68655653_hoved.jpg","main":"2012/3/30/1/340/565/81_68655653_hoved.jpg","micro":"2012/3/30/1/340/565/81_68655653_tumb.jpg","datestamp":20120330},{"priority":25,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_1792058184.jpg","thumbnail":"2012/3/30/1/340/565/81_1792058184_thumb.jpg","imageAtmStatus":0,"imageName":"4fc1cda6-2874-e111-9390-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":432,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1792058184_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1792058184_hoved.jpg","main":"2012/3/30/1/340/565/81_1792058184_hoved.jpg","micro":"2012/3/30/1/340/565/81_1792058184_tumb.jpg","datestamp":20120330},{"priority":1,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_1008232617.jpg","thumbnail":"2012/3/30/1/340/565/81_1008232617_thumb.jpg","imageAtmStatus":0,"imageName":"ba1d59d1-b036-e111-94df-e41f13cc9e1c.jpg","imageType":"BUSINESSCARD_IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":0,"imageHeight":0,"xl":"2012/3/30/1/340/565/81_1008232617_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1008232617_hoved.jpg","main":"2012/3/30/1/340/565/81_1008232617_hoved.jpg","micro":"2012/3/30/1/340/565/81_1008232617_tumb.jpg","datestamp":20120330}],"heading":"ENEBOLIG PÅ KRAPFOSS - Bo vestvendt, barnevennlig og med god standard."},{"address":"Pottemakerveien 39","pris":"2 990 000,-","image":[{"priority":1,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_2107759158.jpg","thumbnail":"2012/3/30/1/340/565/81_2107759158_thumb.jpg","imageAtmStatus":0,"imageName":"98bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_2107759158_xl.jpg","mainSize":"2012/3/30/1/340/565/81_2107759158_hoved.jpg","main":"2012/3/30/1/340/565/81_2107759158_hoved.jpg","micro":"2012/3/30/1/340/565/81_2107759158_tumb.jpg","datestamp":20120330},{"priority":2,"path":null,"version":null,"description":"Tomten og område rundt boligen er pent opparbeidet med beplanting, belegningsstein, uteplasser og fine hageområder. Boligen ligger i en skråning opp fra veien. Dette gjør eiendommen solrik og med gode utsynsforhold.","reference":"2012/3/30/1/340/565/81_-299047761.jpg","thumbnail":"2012/3/30/1/340/565/81_-299047761_thumb.jpg","imageAtmStatus":0,"imageName":"8fbf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-299047761_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-299047761_hoved.jpg","main":"2012/3/30/1/340/565/81_-299047761_hoved.jpg","micro":"2012/3/30/1/340/565/81_-299047761_tumb.jpg","datestamp":20120330},{"priority":3,"path":null,"version":null,"description":"Fra gangen er det trapp opp til første etasje, samt lett tilgang til de øvrige rommene i underetasjen. Gangen er lyst oppusset med hvitmalt panel i himlingen og lys laminat på gulvet.","reference":"2012/3/30/1/340/565/81_-1373839832.jpg","thumbnail":"2012/3/30/1/340/565/81_-1373839832_thumb.jpg","imageAtmStatus":0,"imageName":"84bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1373839832_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1373839832_hoved.jpg","main":"2012/3/30/1/340/565/81_-1373839832_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1373839832_tumb.jpg","datestamp":20120330},{"priority":4,"path":null,"version":null,"description":"Stuen er formet som en vinkelstue og kan deles inn i tre seksjoner. En spisestuedel, salong og en tv-krok.","reference":"2012/3/30/1/340/565/81_194961681.jpg","thumbnail":"2012/3/30/1/340/565/81_194961681_thumb.jpg","imageAtmStatus":0,"imageName":"96bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_194961681_xl.jpg","mainSize":"2012/3/30/1/340/565/81_194961681_hoved.jpg","main":"2012/3/30/1/340/565/81_194961681_hoved.jpg","micro":"2012/3/30/1/340/565/81_194961681_tumb.jpg","datestamp":20120330},{"priority":5,"path":null,"version":null,"description":"Stuen er romslig og de store vinduene mot vest slipper inn rikelig med lys.","reference":"2012/3/30/1/340/565/81_523297085.jpg","thumbnail":"2012/3/30/1/340/565/81_523297085_thumb.jpg","imageAtmStatus":0,"imageName":"95bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_523297085_xl.jpg","mainSize":"2012/3/30/1/340/565/81_523297085_hoved.jpg","main":"2012/3/30/1/340/565/81_523297085_hoved.jpg","micro":"2012/3/30/1/340/565/81_523297085_tumb.jpg","datestamp":20120330},{"priority":6,"path":null,"version":null,"description":"Det er montert utvendige elektriske persienner på vinduene i stuen.","reference":"2012/3/30/1/340/565/81_1479535638.jpg","thumbnail":"2012/3/30/1/340/565/81_1479535638_thumb.jpg","imageAtmStatus":0,"imageName":"97bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1479535638_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1479535638_hoved.jpg","main":"2012/3/30/1/340/565/81_1479535638_hoved.jpg","micro":"2012/3/30/1/340/565/81_1479535638_tumb.jpg","datestamp":20120330},{"priority":7,"path":null,"version":null,"description":"Fra stuen er det utgang til en stor solrik og koselig terrasse. Store deler av terrassen er overbygget og er utstyrt med utepeis med pipe og ildsted samt elektriske ovner i taket.","reference":"2012/3/30/1/340/565/81_1275649174.jpg","thumbnail":"2012/3/30/1/340/565/81_1275649174_thumb.jpg","imageAtmStatus":0,"imageName":"8ebf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1275649174_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1275649174_hoved.jpg","main":"2012/3/30/1/340/565/81_1275649174_hoved.jpg","micro":"2012/3/30/1/340/565/81_1275649174_tumb.jpg","datestamp":20120330},{"priority":8,"path":null,"version":null,"description":"Kjøkkenet ble oppusset og modernisert så sent som i 2008.","reference":"2012/3/30/1/340/565/81_-723391395.jpg","thumbnail":"2012/3/30/1/340/565/81_-723391395_thumb.jpg","imageAtmStatus":0,"imageName":"89bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-723391395_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-723391395_hoved.jpg","main":"2012/3/30/1/340/565/81_-723391395_hoved.jpg","micro":"2012/3/30/1/340/565/81_-723391395_tumb.jpg","datestamp":20120330},{"priority":9,"path":null,"version":null,"description":"Kjøkkeninnredning er av type Kvik med malte profilerte fronter, heltre benkeplate og integrerte hvitevarer som komfyr, platetopp, kjøleskap og oppvaskmaskin.","reference":"2012/3/30/1/340/565/81_-1325801921.jpg","thumbnail":"2012/3/30/1/340/565/81_-1325801921_thumb.jpg","imageAtmStatus":0,"imageName":"8bbf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1325801921_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1325801921_hoved.jpg","main":"2012/3/30/1/340/565/81_-1325801921_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1325801921_tumb.jpg","datestamp":20120330},{"priority":10,"path":null,"version":null,"description":"Kjøkkenet har rikelig med skap og benkeplass.\nPå kjøkkenet er det også et massivt kjøkkenbord som er montert til veggen.","reference":"2012/3/30/1/340/565/81_-49621163.jpg","thumbnail":"2012/3/30/1/340/565/81_-49621163_thumb.jpg","imageAtmStatus":0,"imageName":"8abf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-49621163_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-49621163_hoved.jpg","main":"2012/3/30/1/340/565/81_-49621163_hoved.jpg","micro":"2012/3/30/1/340/565/81_-49621163_tumb.jpg","datestamp":20120330},{"priority":11,"path":null,"version":null,"description":"Boligen har eget adskilt kjøkken. I himlingen både på kjøkken i stuen er det innfelt downlights. Rommene har lyse og trivelige overflater.","reference":"2012/3/30/1/340/565/81_1557845859.jpg","thumbnail":"2012/3/30/1/340/565/81_1557845859_thumb.jpg","imageAtmStatus":0,"imageName":"8dbf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1557845859_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1557845859_hoved.jpg","main":"2012/3/30/1/340/565/81_1557845859_hoved.jpg","micro":"2012/3/30/1/340/565/81_1557845859_tumb.jpg","datestamp":20120330},{"priority":12,"path":null,"version":null,"description":"To av boligens tre soverom finner vi i underetasjen. Alle soverommene er lyst og pent oppusset.","reference":"2012/3/30/1/340/565/81_-1555570315.jpg","thumbnail":"2012/3/30/1/340/565/81_-1555570315_thumb.jpg","imageAtmStatus":0,"imageName":"92bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1555570315_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1555570315_hoved.jpg","main":"2012/3/30/1/340/565/81_-1555570315_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1555570315_tumb.jpg","datestamp":20120330},{"priority":13,"path":null,"version":null,"description":"Det største soverommet i underetasjen er utvidet og rommer blant annet en romslig skyvedørsgarderobe.","reference":"2012/3/30/1/340/565/81_800449394.jpg","thumbnail":"2012/3/30/1/340/565/81_800449394_thumb.jpg","imageAtmStatus":0,"imageName":"90bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_800449394_xl.jpg","mainSize":"2012/3/30/1/340/565/81_800449394_hoved.jpg","main":"2012/3/30/1/340/565/81_800449394_hoved.jpg","micro":"2012/3/30/1/340/565/81_800449394_tumb.jpg","datestamp":20120330},{"priority":14,"path":null,"version":null,"description":"Lyst og pent soverom i underetasjen.","reference":"2012/3/30/1/340/565/81_1172957571.jpg","thumbnail":"2012/3/30/1/340/565/81_1172957571_thumb.jpg","imageAtmStatus":0,"imageName":"91bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1172957571_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1172957571_hoved.jpg","main":"2012/3/30/1/340/565/81_1172957571_hoved.jpg","micro":"2012/3/30/1/340/565/81_1172957571_tumb.jpg","datestamp":20120330},{"priority":15,"path":null,"version":null,"description":"Badet er pusset opp med mørke fliser på gulvet og fliser i brysthøyde på veggene.","reference":"2012/3/30/1/340/565/81_981069627.jpg","thumbnail":"2012/3/30/1/340/565/81_981069627_thumb.jpg","imageAtmStatus":0,"imageName":"93bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_981069627_xl.jpg","mainSize":"2012/3/30/1/340/565/81_981069627_hoved.jpg","main":"2012/3/30/1/340/565/81_981069627_hoved.jpg","micro":"2012/3/30/1/340/565/81_981069627_tumb.jpg","datestamp":20120330},{"priority":16,"path":null,"version":null,"description":"utstyrt med veggmontert toalett, dusjkabinett med massasjedyser og heldekkende dobbel servant med skuffer, speil og lys. Fra badet er det inngang til vaskerom.","reference":"2012/3/30/1/340/565/81_2015746123.jpg","thumbnail":"2012/3/30/1/340/565/81_2015746123_thumb.jpg","imageAtmStatus":0,"imageName":"94bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_2015746123_xl.jpg","mainSize":"2012/3/30/1/340/565/81_2015746123_hoved.jpg","main":"2012/3/30/1/340/565/81_2015746123_hoved.jpg","micro":"2012/3/30/1/340/565/81_2015746123_tumb.jpg","datestamp":20120330},{"priority":17,"path":null,"version":null,"description":"Toalettrom i 1. etasje har montert vask med underskap og vannklosett.","reference":"2012/3/30/1/340/565/81_204599471.jpg","thumbnail":"2012/3/30/1/340/565/81_204599471_thumb.jpg","imageAtmStatus":0,"imageName":"8cbf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_204599471_xl.jpg","mainSize":"2012/3/30/1/340/565/81_204599471_hoved.jpg","main":"2012/3/30/1/340/565/81_204599471_hoved.jpg","micro":"2012/3/30/1/340/565/81_204599471_tumb.jpg","datestamp":20120330},{"priority":18,"path":null,"version":null,"description":"Store deler av terrassen er overbygget og er utstyrt med utepeis med pipe og ildsted samt elektriske ovner og downlights i taket.","reference":"2012/3/30/1/340/565/81_-610344422.jpg","thumbnail":"2012/3/30/1/340/565/81_-610344422_thumb.jpg","imageAtmStatus":0,"imageName":"86bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-610344422_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-610344422_hoved.jpg","main":"2012/3/30/1/340/565/81_-610344422_hoved.jpg","micro":"2012/3/30/1/340/565/81_-610344422_tumb.jpg","datestamp":20120330},{"priority":19,"path":null,"version":null,"description":"Stor terrasse med gode solforhold. Overbygget med downlights i himlingen.","reference":"2012/3/30/1/340/565/81_-1936139004.jpg","thumbnail":"2012/3/30/1/340/565/81_-1936139004_thumb.jpg","imageAtmStatus":0,"imageName":"85bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1936139004_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1936139004_hoved.jpg","main":"2012/3/30/1/340/565/81_-1936139004_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1936139004_tumb.jpg","datestamp":20120330},{"priority":20,"path":null,"version":null,"description":"På boligens nordside er det laget uteplass med beleggingsstein. Plassen har rikelig med både morgen og kvelds sol.","reference":"2012/3/30/1/340/565/81_1910366668.jpg","thumbnail":"2012/3/30/1/340/565/81_1910366668_thumb.jpg","imageAtmStatus":0,"imageName":"88bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1910366668_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1910366668_hoved.jpg","main":"2012/3/30/1/340/565/81_1910366668_hoved.jpg","micro":"2012/3/30/1/340/565/81_1910366668_tumb.jpg","datestamp":20120330},{"priority":21,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_-1581783320.jpg","thumbnail":"2012/3/30/1/340/565/81_-1581783320_thumb.jpg","imageAtmStatus":0,"imageName":"fde5dd8f-aa78-e111-9390-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1581783320_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1581783320_hoved.jpg","main":"2012/3/30/1/340/565/81_-1581783320_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1581783320_tumb.jpg","datestamp":20120330},{"priority":22,"path":null,"version":null,"description":"Fra garasjen og gårdsplassen er det trapp opp til inngangspartiet. Tomten og område rundt boligen er pent opparbeidet med beplanting, belegningsstein, uteplasser og fine hageområder.","reference":"2012/3/30/1/340/565/81_-1389369251.jpg","thumbnail":"2012/3/30/1/340/565/81_-1389369251_thumb.jpg","imageAtmStatus":0,"imageName":"87bf0281-516f-e111-94df-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":400,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_-1389369251_xl.jpg","mainSize":"2012/3/30/1/340/565/81_-1389369251_hoved.jpg","main":"2012/3/30/1/340/565/81_-1389369251_hoved.jpg","micro":"2012/3/30/1/340/565/81_-1389369251_tumb.jpg","datestamp":20120330},{"priority":23,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_1873991638.jpg","thumbnail":"2012/3/30/1/340/565/81_1873991638_thumb.jpg","imageAtmStatus":0,"imageName":"75e3aec4-d878-e111-9390-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":900,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1873991638_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1873991638_hoved.jpg","main":"2012/3/30/1/340/565/81_1873991638_hoved.jpg","micro":"2012/3/30/1/340/565/81_1873991638_tumb.jpg","datestamp":20120330},{"priority":24,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_68655653.jpg","thumbnail":"2012/3/30/1/340/565/81_68655653_thumb.jpg","imageAtmStatus":0,"imageName":"4ec1cda6-2874-e111-9390-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":432,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_68655653_xl.jpg","mainSize":"2012/3/30/1/340/565/81_68655653_hoved.jpg","main":"2012/3/30/1/340/565/81_68655653_hoved.jpg","micro":"2012/3/30/1/340/565/81_68655653_tumb.jpg","datestamp":20120330},{"priority":25,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_1792058184.jpg","thumbnail":"2012/3/30/1/340/565/81_1792058184_thumb.jpg","imageAtmStatus":0,"imageName":"4fc1cda6-2874-e111-9390-e41f13cc9e1c.jpg","imageType":"IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":432,"imageHeight":600,"xl":"2012/3/30/1/340/565/81_1792058184_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1792058184_hoved.jpg","main":"2012/3/30/1/340/565/81_1792058184_hoved.jpg","micro":"2012/3/30/1/340/565/81_1792058184_tumb.jpg","datestamp":20120330},{"priority":1,"path":null,"version":null,"description":null,"reference":"2012/3/30/1/340/565/81_1008232617.jpg","thumbnail":"2012/3/30/1/340/565/81_1008232617_thumb.jpg","imageAtmStatus":0,"imageName":"ba1d59d1-b036-e111-94df-e41f13cc9e1c.jpg","imageType":"BUSINESSCARD_IMAGE","hashvalue":0,"passive":false,"created":"2012-03-30","imageWidth":0,"imageHeight":0,"xl":"2012/3/30/1/340/565/81_1008232617_xl.jpg","mainSize":"2012/3/30/1/340/565/81_1008232617_hoved.jpg","main":"2012/3/30/1/340/565/81_1008232617_hoved.jpg","micro":"2012/3/30/1/340/565/81_1008232617_tumb.jpg","datestamp":20120330}],"heading":"ENEBOLIG PÅ KRAPFOSS - Bo vestvendt, barnevennlig og med god standard."}]
      );
    res.end();
  }, 10000)

});

var fs = require('fs');
app.get('/finn/webads', function(req, res){
  fs.readFile(__dirname + '/public/iframe.html', 'utf8', function(err, data){
    if (err) throw err;
    res.send(data);
  });
});

app.listen(3000);
console.log("FINN webAds-test server listening on port %d in %s mode", app.address().port, app.settings.env);
