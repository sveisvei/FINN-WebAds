__ADTECH_CODE__ = "";
__theDocument = document;
__theWindow = window;
__bCodeFlushed = false;

function __flushCode() {
  if (!__bCodeFlushed) {
    var span = parent.document.createElement("SPAN");
    span.innerHTML = __ADTECH_CODE__;
    window.frameElement.parentNode.appendChild(span);
    __bCodeFlushed = true;
  }
}

if (typeof inFIF != "undefined") {
  document.write = function(str) {
    __ADTECH_CODE__ += str;
  };
  document.writeln = function(str) {
    document.write(str + "\n");
  };
  __theDocument = parent.document;
  __theWindow = parent;
}
document.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n");
document.write("<html xmlns=\"http://www.w3.org/1999/xhtml\">\n");
document.write("<head>\n");
document.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n");
document.write("<title>Aberdeen</title>\n");
document.write("<style type=\"text/css\">\n");
document.write("html, body {\n");
document.write("margin: 0;\n");
document.write("}\n");
document.write("#Wrapper {\n");
document.write("box-sizing: border-box;\n");
document.write("-moz-box-sizing: border-box;\n");
document.write("-webkit-box-sizing: border-box;\n");
document.write("margin: 0 auto;\n");
document.write("/* max-width: 984px; */\n");
document.write("min-width: 150px;\n");
document.write("height: 225px;\n");
document.write("position: relative;\n");
document.write("width: 100%; /* Opp til 680px som er landskap for m.finn og App */\n");
document.write("/* width: 100%;  Dersom man ?nsker at annonsen skal strekkes i det uendelige*/\n");
document.write("overflow: hidden;\n");
document.write("border-bottom: 1px solid #38a6db;\n");
document.write("}\n");
document.write(".bilde {\n");
document.write("background-image: url(http://annonsestyring.finn.no/landing/--Mobilbannere--/2013/Eiendom/Aberdeen/bg.jpg);\n");
document.write("background-position: center;\n");
document.write("background-repeat: no-repeat;\n");
document.write("background-size: auto auto;\n");
document.write("}\n");
document.write("#Header {\n");
document.write("position: absolute;\n");
document.write("top: 40px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._header {\n");
document.write("color: #38a6db;\n");
document.write("font-family: Arial, Helvetica, sans-serif;\n");
document.write("font-size: 35px;\n");
document.write("font-weight: 600;\n");
document.write("}\n");
document.write("#Ingress {\n");
document.write("position: absolute;\n");
document.write("top: 85px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._ingress {\n");
document.write("color: #38a6db;\n");
document.write("font-family: Arial, Helvetica, sans-serif;\n");
document.write("font-size: 25px;\n");
document.write("}\n");
document.write("#Lenke {\n");
document.write("position: absolute;\n");
document.write("top: 135px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._lenke {\n");
document.write("color: #1d2455;\n");
document.write("font-family: Arial, Helvetica, sans-serif;\n");
document.write("font-size: 25px;\n");
document.write("}\n");
document.write("#Lenke2 {\n");
document.write("position: absolute;\n");
document.write("top: 165px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._lenke2 {\n");
document.write("color: #1d2455;\n");
document.write("font-family: Arial, Helvetica, sans-serif;\n");
document.write("font-size: 25px;\n");
document.write("}\n");
document.write("#Logo {\n");
document.write("position: absolute;\n");
document.write("right: 15px;\n");
document.write("top: 165px;\n");
document.write("}\n");
document.write("#Appelsin {\n");
document.write("position: absolute;\n");
document.write("right: 250px;\n");
document.write("top: 70px;\n");
document.write("background-image: url(http://annonsestyring.finn.no/landing/--Mobilbannere--/2013/Eiendom/Aberdeen/appelsin.png);\n");
document.write("background-size: 167px 114px;\n");
document.write("}\n");
document.write("@media only screen and (min-width: 200px) and (max-width: 499px) {\n");
document.write("#Appelsin {\n");
document.write("background-image: url(http://annonsestyring.finn.no/landing/--Mobilbannere--/2013/Eiendom/Aberdeen/appelsin.png);\n");
document.write("background-size: 167px 114px;\n");
document.write("}\n");
document.write("#Header {\n");
document.write("position: absolute;\n");
document.write("top: 30px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._header {\n");
document.write("font-size: 20px;\n");
document.write("font-weight: 600;\n");
document.write("}\n");
document.write("#Ingress {\n");
document.write("top: 65px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._ingress {\n");
document.write("font-size: 16px;\n");
document.write("}\n");
document.write("#Lenke {\n");
document.write("top: 100px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._lenke {\n");
document.write("font-size: 15px;\n");
document.write("}\n");
document.write("#Lenke2 {\n");
document.write("top: 120px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._lenke2 {\n");
document.write("font-size: 15px;\n");
document.write("}\n");
document.write("#Appelsin {\n");
document.write("background-image: url(http://annonsestyring.finn.no/landing/--Mobilbannere--/2013/Eiendom/Aberdeen/appelsin.png);\n");
document.write("width: 100px;\n");
document.write("height: 68px;\n");
document.write("top: 150px;\n");
document.write("left: 15px;\n");
document.write("background-size: 80px 53px;\n");
document.write("background-repeat: no-repeat;\n");
document.write("}\n");
document.write("}\n");
document.write("@media only screen and (min-width: 400px) and (max-width: 500px) {\n");
document.write("#Header {\n");
document.write("position: absolute;\n");
document.write("top: 30px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._header {\n");
document.write("font-size: 25px;\n");
document.write("font-weight: 600;\n");
document.write("}\n");
document.write("#Ingress {\n");
document.write("top: 65px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._ingress {\n");
document.write("font-size: 21px;\n");
document.write("}\n");
document.write("#Lenke {\n");
document.write("top: 100px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._lenke {\n");
document.write("font-size: 20px;\n");
document.write("}\n");
document.write("#Lenke2 {\n");
document.write("top: 120px;\n");
document.write("left: 15px;\n");
document.write("}\n");
document.write("._lenke2 {\n");
document.write("font-size: 20px;\n");
document.write("}\n");
document.write("#Appelsin {\n");
document.write("background-image: url(http://annonsestyring.finn.no/landing/--Mobilbannere--/2013/Eiendom/Aberdeen/appelsin.png);\n");
document.write("width: 100px;\n");
document.write("height: 68px;\n");
document.write("top: 160px;\n");
document.write("left: 15px;\n");
document.write("background-size: 70px 47px;\n");
document.write("background-repeat: no-repeat;\n");
document.write("}\n");
document.write("}\n");
document.write("@media only screen and (min-width: 501px) and (max-width: 699px) {\n");
document.write("#Appelsin {\n");
document.write("position: absolute;\n");
document.write("right: 13px;\n");
document.write("top: 80px;\n");
document.write("background-image: url(http://annonsestyring.finn.no/landing/--Mobilbannere--/2013/Eiendom/Aberdeen/appelsin.png);\n");
document.write("background-size: 80px 53px;\n");
document.write("background-repeat: no-repeat;\n");
document.write("width: 167px;\n");
document.write("height: 114px;\n");
document.write("background-position: center;\n");
document.write("}\n");
document.write("}\n");
document.write("@media only screen and (min-width: 501px) and (max-width: 549px) {\n");
document.write("#Appelsin {\n");
document.write("position: absolute;\n");
document.write("right: -20px;\n");
document.write("top: 80px;\n");
document.write("background-image: url(http://annonsestyring.finn.no/landing/--Mobilbannere--/2013/Eiendom/Aberdeen/appelsin.png);\n");
document.write("background-size: 80px 53px;\n");
document.write("background-repeat: no-repeat;\n");
document.write("width: 167px;\n");
document.write("height: 114px;\n");
document.write("background-position: center;\n");
document.write("}\n");
document.write("}\n");
document.write("@media only screen and (min-width: 700px) and (max-width: 1500px) {\n");
document.write("#Appelsin {\n");
document.write("position: absolute;\n");
document.write("right: 200px;\n");
document.write("top: 115px;\n");
document.write("background-image: url(http://annonsestyring.finn.no/landing/--Mobilbannere--/2013/Eiendom/Aberdeen/appelsin.png);\n");
document.write("background-size: 120px 80px;\n");
document.write("background-repeat: no-repeat;\n");
document.write("width: 167px;\n");
document.write("height: 114px;\n");
document.write("background-position: center;\n");
document.write("}\n");
document.write("}\n");
document.write("</style>\n");
document.write("</head>\n");

document.write("<body>\n");
document.write("<div id=\"Wrapper\" class=\"bilde\" onclick=\"window.open(&quot;http://helios.finn.no/adlink|989|4140240|0|1744|AdId=9253626;BnId=13;itime=167004888;key=+B09809_10001+B09809_10447+B09809_11086+B09809_11104+B09809_10870+B09809_11117+C11162_10198+C11162_10197+C11162_10196+C11162_10194;kr334=2885798;kp=173320;nodecode=yes;link=http://finn-no.c.richmetrics.com/log?type=click&si=MRXGV082WKCT&pi=MRXGV0G4D5CI&ui=MO9RPPWRG8AY&av=w3.2.9-JS&mk=FINNEBDSCTTY&wn=finn.no&rd=&quot;+'http://www.aberdeen-asset.no','new_window');\">\n");
document.write("  <div id=\"Header\" class=\"_header\">Vi har ikke tro p? tilsetninger.</div>\n");
document.write("  <div id=\"Ingress\" class=\"_ingress\">Kun 100% investeringskompetanse.</div>\n");
document.write("  <div id=\"Lenke\" class=\"_lenke\">For mer informasjon bes?k</div>\n");
document.write("  <div id=\"Lenke2\" class=\"_lenke2\">www.aberdeen-asset.no</div>\n");
document.write("  <div id=\"Logo\"><img src=\"http://annonsestyring.finn.no/landing/--Mobilbannere--/2013/Eiendom/Aberdeen/logo.jpg\" /></div>\n");
document.write("  <div id=\"Appelsin\"></div>\n");
document.write("</div>\n");
document.write("</body>\n");
document.write("</html>\n");
function cleanUp() {
 if (typeof __parent.swappedRefs4140240 == "undefined") {
   __parent.swappedRefs4140240 = new Array();
 }
   
 while (__parent.swappedRefs4140240.length > 0) {
   var ref = __parent.swappedRefs4140240.pop();
   if (ref != "swappedRefs4140240") {
     __parent[ref] = null;
   }
 }
}

if (typeof inFIF != "undefined" && inFIF == true) {
 __parent = window.parent;
 window.onunload = cleanUp;
 cleanUp();

 for (var ref in window) {
   if ((typeof __parent[ref] == "undefined" || __parent[ref] == null) 
         && ref != "frameElement" && ref != "event" && ref != "swappedRefs4140240" && ref != "onunload") {
     try {__parent[ref] = window[ref]; __parent.swappedRefs4140240.push(ref);} catch (e) {}
  } 
 }  
}


if (typeof inFIF != "undefined" && inFIF) {
  __flushCode();
}

if (typeof inFIF != "undefined" && inFIF == true) {
try {parent.write = write;
} catch (e) {}try {parent.writeln = writeln;
} catch (e) {}try {parent.__flushCode = __flushCode;
} catch (e) {}}


