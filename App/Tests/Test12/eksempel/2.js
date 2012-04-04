(function(Adform, _w, _d) {
  if (Adform.Log) {
    return
  }
  Adform.Log = {
    Host: Adform.host,
    sendEvent: function(source, severity, message) {
      try {
        var arr = [];
        arr.push(this.Host);
        arr.push("/Serving/JsLog/?src=");
        arr.push(encodeURIComponent(source));
        arr.push("&severity=");
        arr.push(encodeURIComponent(severity));
        arr.push("&msg=");
        arr.push(encodeURIComponent(message));
        var img = _w.Image ? new Image(1, 1) : _d.createElement("img");
        img.src = arr.join("")
      } catch(e) {}
    }
  }
})(Adform = window.Adform || {},
window, document);
Adform.ADFBannerUtils = function() {
  this.tagID = 0;
  this.banners = {};
  this.compoundBanners = {};
  this.addCompoundBannerInfo = function(bn, rotID) {
    this.compoundBanners["c" + bn] = "r" + rotID
  };
  this.getCompoundBannerInfo = function(bn) {
    if (this.compoundBanners["c" + bn]) {
      return this.compoundBanners["c" + bn]
    }
    return null
  };
  this.ADFCreateObjectCallback = function(obj, fn) {
    return function() {
      fn.apply(obj, arguments)
    }
  };
  this.eventRegister = function(name, fname, object, obj) {
    if (object.addEventListener) {
      object.addEventListener(name, this.ADFCreateObjectCallback(eval(obj), eval(fname)), false)
    } else {
      if (object.attachEvent) {
        object.attachEvent("on" + name, this.ADFCreateObjectCallback(eval(obj), eval(fname)), false)
      }
    }
  };
  this.addNewBanner = function(id, type) {
    try {
      var banner = new Object({
        id: id,
        type: type
      });
      this.banners[id] = banner
    } catch(e) {}
  };
  this.addBannerAttribute = function(id, name, value) {
    try {
      this.banners[id][name] = value
    } catch(e) {}
  };
  this.initialize = function() {
    try {
      if (document.body == null) {
        document.write("<html><body></body></html>")
      }
      this.ADFBrLa = typeof navigator.browserLanguage != "undefined" ? navigator.browserLanguage : typeof navigator.language != "undefined" ? navigator.language : 0;
      this.ADFOsLa = typeof navigator.systemLanguage != "undefined" ? navigator.systemLanguage : this.ADFBrLa;
      try {
        this.ADFSS = screen ? screen.width + "X" + screen.height : 0;
        this.ADFSC = screen ? screen.colorDepth : 0
      } catch(e) {
        this.ADFSS = 0;
        this.ADFSC = 0
      }
      this.set1 = escape(this.ADFOsLa) + "|" + escape(this.ADFBrLa) + "|" + this.ADFSS + "|" + this.getFlashVersion();
      this.set2 = 50 * Math.round(this.getWin().w / 50) + "|" + 50 * Math.round(this.getWin().h / 50) + "|" + this.ADFSC + "|" + this.getJSVersion() + "|" + this.getFlashVersion() + "|0|" + this.getCT() + "|" + this.getCPU() + "|0|0"
    } catch(e) {}
  };
  this.getTagID = function() {
    try {
      this.tagID++;
      return this.tagID + "x"
    } catch(e) {}
  };
  this.getJSVersion = function() {
    try {
      document.write('<span id="ADFtemp"></span>');
      for (var i = 1; i < 10; i++) {
        var adserveScript = document.createElement("script");
        adserveScript.setAttribute("language", "javascript1." + i);
        adserveScript.text = "ADFJSVersion=" + (i + 1) + ";";
        try {
          document.getElementById("ADFtemp").appendChild(adserveScript)
        } catch(e) {}
      }
      try {
        document.getElementById("ADFtemp").parentNode.removeChild(document.getElementById("ADFtemp"))
      } catch(e) {}
      return typeof ADFJSVersion != "undefined" ? ADFJSVersion : 1
    } catch(e) {}
  };
  this.getFlashVersion = function() {
    try {
      var SF = "Shockwave Flash";
      var SFA = "ShockwaveFlash.ShockwaveFlash";
      var FMT = "application/x-shockwave-flash";
      var plug = navigator.plugins;
      var mt = navigator.mimeTypes;
      var AXO = window.ActiveXObject;
      var rex = /^.*?(\d+)[\.,].*$/;
      var desc, flashVersion = 0,
        i = 16;
      try {
        desc = plug && plug[SF] && (!mt || !mt[FMT] || mt[FMT].enabledPlugin) && plug[SF].description || AXO && new AXO(SFA).GetVariable("$version")
      } catch(ex) {}
      if (desc) {
        flashVersion = parseInt(desc.replace(rex, "$1"), 10)
      } else {
        if (AXO) {
          while (i -->
          = 6) {
            try {
              flashVersion = 0;
              new AXO(SFA + "." + i);
              flashVersion = i;
              break
            } catch(ex) {}
          }
        }
      }
      return flashVersion
    } catch(e) {}
  };
  this.getWin = function() {
    try {
      var retV = {};
      var d = window.document;
      if (typeof(window.innerWidth) == "number") {
        retV.h = window.innerHeight;
        retV.w = window.innerWidth
      } else {
        if (d.documentElement && d.documentElement.clientHeight) {
          retV.h = d.documentElement.clientHeight;
          retV.w = d.documentElement.clientWidth
        } else {
          if (d.body && d.body.clientHeight) {
            retV.h = d.body.clientHeight;
            retV.w = d.body.clientWidth
          }
        }
      }
      return retV
    } catch(e) {}
  };
  this.getCT = function() {
    try {
      var retV = {};
      retV["lan"] = "1";
      retV["modem"] = "2";
      var ADFCT = "3";
      try {
        if (document.body.addBehavior) {
          document.body.addBehavior("#default#clientCaps");
          ADFCT = document.body.connectionType.toLowerCase();
          ADFCT = typeof retV[ADFCT] != "undefined" ? retV[ADFCT] : ADFCT
        }
      } catch(e) {}
      return ADFCT
    } catch(e) {}
  };
  this.getCPU = function() {
    try {
      var retV = {};
      retV["x86"] = "1";
      retV["68k"] = "2";
      retV["PPC"] = "3";
      retV["Alpha"] = "4";
      retV["Arm"] = "5";
      retV["Other"] = "6";
      retV["7"] = "7";
      var ADFCPU = (typeof(navigator.cpuClass) != "undefined") ? navigator.cpuClass.toLowerCase() : "7";
      return retV[ADFCPU] != "undefined" ? retV[ADFCPU] : "8"
    } catch(e) {}
  };
  this.getSet1 = function() {
    return this.set1
  };
  this.getSet2 = function() {
    return this.set2
  };
  this.getPosition = function(temPlace) {
    try {
      var retV = {};
      retV.y = temPlace.offsetTop;
      retV.x = temPlace.offsetLeft;
      var objParent;
      while (temPlace.offsetParent != null) {
        objParent = temPlace.offsetParent;
        retV.y += (objParent.offsetTop);
        retV.x += objParent.offsetLeft;
        temPlace = objParent
      }
      return retV
    } catch(e) {}
  };
  this.getScrollXY = function() {
    try {
      var retV = {
        x: 0,
        y: 0
      };
      if (typeof(window.pageYOffset) == "number") {
        retV.y = window.pageYOffset;
        retV.x = window.pageXOffset
      } else {
        if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
          retV.y = document.body.scrollTop;
          retV.x = document.body.scrollLeft
        } else {
          if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            retV.y = document.documentElement.scrollTop;
            retV.x = document.documentElement.scrollLeft
          }
        }
      }
      return retV
    } catch(e) {}
  };
  this.getBrowser = function() {
    try {
      if (navigator.appVersion.indexOf("MSIE") != -1 && navigator.userAgent.indexOf("Opera") < 0) {
        return "MSIE"
      }
      if (navigator.userAgent.indexOf("Safari") != -1) {
        return "Safari"
      }
      if (navigator.userAgent.indexOf("Opera") != -1) {
        return "Opera"
      }
      if (navigator.appName.indexOf("Netscape") != -1) {
        if ((navigator.product.indexOf("Gecko") != -1) && ((navigator.vendor.indexOf("Firefox") != -1) || navigator.userAgent.indexOf("Firefox") != -1)) {
          return "Firefox"
        } else {
          return "Netscape"
        }
      }
    } catch(e) {}
  };
  this.setBannerRegisteredStatus = function(bannerId) {
    try {
      this.addBannerAttribute(bannerId, "registered", 1);
      if (typeof Adform.ADFEventsInstance != "undefined") {
        if (Adform.ADFEventsInstance != null) {
          Adform.ADFEventsInstance.register(this.banners[bannerId])
        }
      }
    } catch(e) {}
  };
  this.fireTargAdPixel = function(url) {
    if (!this.TargAd) {
      this.TargAd = {}
    }
    this.TargAd.gmtr = Math.floor(Math.random() * 9999999999);
    this.TargAd.gmttzd = (new Date()).getTimezoneOffset();
    url = url.replace("{gmtr}", this.TargAd.gmtr);
    url = url.replace("{gmttzd}", this.TargAd.gmttzd);
    if (!this.TargAd.gmtimg) {
      this.TargAd.gmtimg = (typeof(window.Image) == "undefined") ? document.createElement("img") : new window.Image();
      this.TargAd.gmtimg.src = url
    }
  };
  this.initialize()
};
typeof Adform.ADFUtilInstance == "undefined" ? Adform.ADFUtilInstance = null : Adform.ADFUtilInstance = Adform.ADFUtilInstance;
Adform.ADFBannerUtils.getInstance = function() {
  if (Adform.ADFUtilInstance == null) {
    Adform.ADFUtilInstance = new Adform.ADFBannerUtils()
  }
  return Adform.ADFUtilInstance
};
Adform.ADFBanner = function() {
  try {
    var OOBClickTrack = "";
    var URL = "";
    var CREFURL = "";
    var BN = null;
    if (!Adform.ADFBannerParams) {
      URL = Adform.ADFBannerData.URL;
      CREFURL = Adform.ADFBannerData.CREFURL;
      BN = Adform.ADFBannerData.BN
    } else {
      var params = Adform.ADFBannerParams.shift();
      URL = params.URL;
      CREFURL = params.CREFURL;
      BN = params.BN
    }
    typeof Adform.ADFIframe == "undefined" ? this.iframeMode = 0 : this.iframeMode = 1;
    this.utilsInstance = Adform.ADFBannerUtils.getInstance();
    var tagID = this.utilsInstance.getTagID();
    this.utilsInstance.addNewBanner(tagID, this.iframeMode);
    if (URL.indexOf("OOBClickTrack=") != -1) {
      OOBClickTrack = URL.split(";OOBClickTrack=")[1];
      if (OOBClickTrack != null) {
        OOBClickTrack = encodeURIComponent(OOBClickTrack)
      }
      URL = URL.split(";OOBClickTrack=")[0];
      this.utilsInstance.addBannerAttribute(tagID, "msn", 1)
    }
    var rotID = this.utilsInstance.getCompoundBannerInfo(BN);
    rotID = (rotID ? rotID.replace("r", ";rotseqno=") : "");
    document.write("<scr" + 'ipt type="text/javascript" src="' + URL + ";js=1;adfxid=" + tagID + ";" + Math.floor(Math.random() * 11000) + ";set1=" + this.utilsInstance.getSet1() + ";set2=" + this.utilsInstance.getSet2() + rotID + (OOBClickTrack != "" ? ";OOBClickTrack=" + OOBClickTrack : "") + ((typeof Adform.CDNHost != "undefined") ? ";cdnhost=" + encodeURIComponent(Adform.CDNHost) : "") + "&CREFURL=" + CREFURL + '"></scr' + "ipt>")
  } catch(e) {}
};
new Adform.ADFBanner();
