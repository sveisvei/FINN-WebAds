/*
 Adform Serving Scripts, version 1.121441

 Copyright Adform
 http://www.adform.com

 Date: 2011-12-21
*/
(function(c) {
  function d() {
    var h = c.Data;
    if (h && (delete c.Data, h.videoSources && h.streamingVideo && !(h.clicktags.indexOf("&detectBW=true") < 0))) {
      for (var m = h.videoSources, n = m[0].file.replace(/^[^:]+:\/\/[^\/]+|[^\/]+$/g, ""), i = {}, p, g = 0, d = m.length, q, a, b; g < d; g++) if (m[g] && (q = m[g].file) && q.indexOf(n) >= 0 && (a = q.match(/([^\/]+?)(\d+)\.flv$/))) {
        b = i[a[1]] || [];
        b.push(a[2]);
        if (!p || i[p].length <= b.length) p = a[1];
        i[a[1]] = b
      }
      p && (i[p].sort(function(a, b) {
        return a - b
      }), h.clicktags += "&streamBaseName=" + encodeURIComponent(p) + "&streamBitrates=" + i[p].join(","))
    }
  }
  c.BWDetect = d;
  d()
})(Adform = window.Adform || {},
window, document);
(function(c, d, h) {
  function m(j, a) {
    j.super_ = a;
    n.prototype = a.prototype;
    j.prototype = new n;
    j.prototype.constructor = j
  }

  function n() {}

  function i(j, a) {
    return (a || h).getElementById(j)
  }

  function p(j, a) {
    var b = !a ? h : j.substr ? i(j) : j;
    return b ? b.getElementsByTagName(a || j) : []
  }

  function g(j) {
    var a = j.offsetTop,
      f = j.offsetLeft,
      e, k = b.curCSS,
      l = k(j, "position") != "static";
    a || (a = (parseFloat(k(j, "marginTop")) || 0) + (l ? parseFloat(k(j, "top")) || 0 : 0));
    f || (f = (parseFloat(k(j, "marginLeft")) || 0) + (l ? parseFloat(k(j, "left")) || 0 : 0));
    l && j.getBoundingClientRect && (e = b.offset(j, !0));
    if (!a && e) a = e.top;
    if (!f && e) f = e.left;
    return {
      top: a,
      left: f
    }
  }

  function s(j) {
    var a = {
      relativeX: j[y[0]],
      relativeY: j[y[1]]
    };
    if (j.pageX == null && j.clientX != null) {
      var b = h.documentElement,
        e = h.body;
      a.pageX = j.clientX + (b && b.scrollLeft || e.scrollLeft || 0);
      a.pageY = j.clientY + (b && b.scrollTop || e.scrollTop || 0)
    } else a.pageX = j.pageX,
    a.pageY = j.pageY;
    return a
  }

  function q() {
    for (var j = 0, a = []; j < v.length; j++) v[j].document.readyState != "complete" && a.push(v[j]);
    if (! (v = a).length || (new Date).getTime() - A > 4E3) {
      w = clearInterval(w);
      for (j = 0; j < z.length; j++) z[j]();
      z = [];
      v = []
    }
  }
  c.RMB = c.RMB || {};
  var a = c.RMB,
    b = a.lib || (a.lib = {});
  if (!c.lib) c.lib = b;
  b.inherit = m;
  b.define = function(j, a, b) {
    b && m(j, a);
    b(j, j.prototype)
  };
  b.gid = function(a) {
    var b = +new Date;
    return (a || "") + (b + b * ~~ (Math.random() * 1E4)).toString(36)
  };
  b.byId = i;
  b.byTag = p;
  b.bind = function(a, b) {
    return function() {
      return b.apply(a, arguments)
    }
  };
  b.extend = function(a, b) {
    for (var f in b) b.hasOwnProperty(f) && (a[f] = b[f]);
    return a
  };
  b.isMouseLeave = function(a, b) {
    if (!a || a.type != "mouseout") return !0;
    for (var f = a.relatedTarget || a.toElement, e, k = b.length; f;) {
      for (e = 0; e < k; e++) if (b[e] == f) return !1;
      f = f.parentNode
    }
    return !0
  };
  b.singleCall = function(a) {
    function b() {
      l = !1;
      var a = e,
        j = f,
        k = c;
      f = e = c = null;
      a && a.apply(j, k)
    }
    var f, e, c, l;
    return function(C, g) {
      f = C;
      e = g;
      c = k.call(arguments, 2);
      g && !l ? l = setTimeout(b, a) : !g && l && (clearTimeout(l), l = !1)
    }
  };
  b.onload = function(a, b) {
    try {
      do {
        if (a[r]) break;
        a[r] = !0;
        a.document.readyState != "complete" && (v.push(a), w || (A = (new Date).getTime(), w = setInterval(q, 10)))
      } while (a != a.parent && (a = a.parent))
    } catch(f) {}
    w ? z.push(b) : setTimeout(b, 0)
  };
  var k = Array.prototype.slice,
    u = /([A-Z])/g,
    t = /^-?\d+(?:px)?$/i,
    I = /^-?\d/;
  c = h.defaultView;
  b.curCSS = c && c.getComputedStyle ?
  function(a, b) {
    var f = a.ownerDocument.defaultView;
    if (f && (f = f.getComputedStyle(a, null))) return f.getPropertyValue(b.replace(u, "-$1").toLowerCase()) || a.style[b]
  } : h.documentElement.currentStyle &&
  function(a, b) {
    var f, e, k, l = a.currentStyle && a.currentStyle[b];
    if (!t.test(l) && I.test(l)) {
      f = (k = a.style).left;
      if (e = a.runtimeStyle && a.runtimeStyle.left) a.runtimeStyle.left = a.currentStyle.left;
      k.left = b === "fontSize" ? "1em" : l || 0;
      l = k.pixelLeft + "px";
      k.left = f;
      if (e) a.runtimeStyle.left = e
    }
    return l === "" ? "auto" : l
  };
  var F = function() {
    function a() {
      return a
    }
    var b = h.body,
      f = h.createElement("div"),
      e;
    e = ["position:absolute;top:0;left:0;margin:0;padding:0;border:0;width:1px;height:1px;"].pop();
    f.innerHTML = '<div style="' + e + 'visibility:hidden"><div style="' + e + 'border:5px solid #000"><div style="margin:0"></div></div><div style="' + e + '"><div style="' + e + 'position:fixed;top:20px;"></div></div><div style="' + e + 'position:relative;border:5px solid #000;overflow:hidden"><div style="margin:0"></div></div><table style="' + e + 'border:5px solid #000" cellpadding="0" cellspacing="0"><tr><td></td></tr></table></div>';
    b.insertBefore(f = f.firstChild, b.firstChild);
    e = f.childNodes;
    a.dnab = e[0].firstChild.offsetTop !== 5;
    a.sfp = e[1].firstChild.offsetTop === 20;
    a.sbfonv = e[2].firstChild.offsetTop === -5;
    a.dabftac = p(f, "td").offsetTop === 5;
    b.removeChild(f);
    b = f = e = null;
    return F = a
  },
    J = /^t(?:able|d|h)$/i;
  b.offset = "getBoundingClientRect" in h.documentElement ?
  function(a, b) {
    var f, e = a && a.ownerDocument;
    if (!e) return null;
    if (!b && a === e.body) return g(a);
    try {
      f = a.getBoundingClientRect()
    } catch(k) {}
    if (!f) return {
      top: 0,
      left: 0
    };
    var l = e.body,
      c = e.documentElement;
    e = e.defaultView || e.parentWindow;
    return {
      top: f.top + (e.pageYOffset || c.scrollTop || l.scrollTop) - (c.clientTop || l.clientTop || 0),
      left: f.left + (e.pageXOffset || c.scrollLeft || l.scrollLeft) - (c.clientLeft || l.clientLeft || 0)
    }
  } : function(a) {
    var b = a && a.ownerDocument;
    if (!b) return null;
    if (a === b.body) return g(a);
    var f, e = a.offsetParent,
      k = b.documentElement,
      l = b.body;
    f = (b = b.defaultView) ? b.getComputedStyle(a, null) : a.currentStyle;
    for (var c = a.offsetTop, m = a.offsetLeft, h = F();
    (a = a.parentNode) && a !== l && a !== k;) {
      if (h.sfp && f.position === "fixed") break;
      f = b ? b.getComputedStyle(a, null) : a.currentStyle;
      c -= a.scrollTop;
      m -= a.scrollLeft;
      if (a === e) {
        c += a.offsetTop;
        m += a.offsetLeft;
        if (h.dnab && (!h.dabftac || !J.test(a.nodeName))) c += parseFloat(f.borderTopWidth) || 0,
        m += parseFloat(f.borderLeftWidth) || 0;
        e = a.offsetParent
      }
      h.sbfonv && f.overflow !== "visible" && (c += parseFloat(f.borderTopWidth) || 0, m += parseFloat(f.borderLeftWidth) || 0)
    }
    if (f.position === "relative" || f.position === "static") c += l.offsetTop,
    m += l.offsetLeft;
    h.sfp && f.position === "fixed" && (c += Math.max(k.scrollTop, l.scrollTop), m += Math.max(k.scrollLeft, l.scrollLeft));
    return {
      top: c,
      left: m
    }
  };
  b.addEvent = d.addEventListener ?
  function(a, b, f) {
    return a.addEventListener(b, f, !1)
  } : d.attachEvent ?
  function(a, b, f) {
    return a.attachEvent("on" + b, f)
  } : function() {
    throw Error("Add listener fail!");
  };
  b.removeEvent = d.removeEventListener ?
  function(a, b, f) {
    return a.removeEventListener(b, f, !1)
  } : d.detachEvent ?
  function(a, b, f) {
    return a.detachEvent("on" + b, f)
  } : function() {
    throw Error("Remove listener fail!");
  };
  b.isArray = Array.isArray ||
  function(a) {
    return Object.prototype.toString.call(a) == "[object Array]"
  };
  var y = [
    ["offsetX", "offsetY"],
    ["layerX", "layerY"]];
  b.getMousePos = function(a) {
    for (var k; k = y.shift();) if (typeof a[k[0]] != "undefined") {
      y = k;
      break
    }
    k || (y = ["x", "y"]);
    b.getMousePos = s;
    return s(a)
  };
  var G = h.createElement("div");
  b.html = function(a, b) {
    var f = !b && G || b.createElement("div");
    f.innerHTML = a;
    return f.removeChild(f.firstChild)
  };
  b.browser = function() {
    var a = d.navigator.userAgent.toLowerCase();
    if (a.indexOf("msie") > -1) return "msie";
    else if (a.indexOf("firefox") > -1) return "firefox";
    else if (a.indexOf("opera") > -1) return "opera";
    else if (a.indexOf("chrome") > -1) return "chrome";
    else if (a.indexOf("safari") > -1) return "safari";
    return !1
  };
  var v = [],
    z = [],
    r = "__adform_onload",
    w, A
})(Adform = window.Adform || {},
window, document);
(function(c) {
  function d() {}
  var h = c.lib.isArray;
  c.EventEmitter = d;
  c = d.prototype;
  c.emit = function(c) {
    if (!this._events) return !1;
    var n = this._events[c];
    if (!n) return !1;
    if (typeof n == "function") {
      switch (arguments.length) {
      case 1:
        n.call(this);
        break;
      case 2:
        n.call(this, arguments[1]);
        break;
      case 3:
        n.call(this, arguments[1], arguments[2]);
        break;
      default:
        var i = Array.prototype.slice.call(arguments, 1);
        n.apply(this, i)
      }
      return !0
    } else if (h(n)) {
      i = Array.prototype.slice.call(arguments, 1);
      n = n.slice();
      for (var d = 0, g = n.length; d < g; d++) n[d].apply(this, i);
      return !0
    } else return !1
  };
  c.addListener = function(c, n) {
    if ("function" !== typeof n) throw Error("addListener only takes instances of Function");
    if (!this._events) this._events = {};
    this.emit("newListener", c, n);
    this._events[c] ? h(this._events[c]) ? this._events[c].push(n) : this._events[c] = [this._events[c], n] : this._events[c] = n;
    return this
  };
  c.on = c.addListener;
  c.once = function(c, h) {
    function i() {
      d.removeListener(c, i);
      h.apply(this, arguments)
    }
    if ("function" !== typeof h) throw Error(".once only takes instances of Function");
    var d = this;
    i.listener = h;
    d.on(c, i);
    return this
  };
  c.removeListener = function(c, d) {
    if ("function" !== typeof d) throw Error("removeListener only takes instances of Function");
    if (!this._events || !this._events[c]) return this;
    var i = this._events[c];
    if (h(i)) {
      for (var p = -1, g = 0, s = i.length; g < s; g++) if (i[g] === d || i[g].listener && i[g].listener === d) {
        p = g;
        break
      }
      if (p < 0) return this;
      i.splice(p, 1);
      i.length == 0 && delete this._events[c]
    } else(i === d || i.listener && i.listener === d) && delete this._events[c];
    return this
  };
  c.removeAllListeners = function(c) {
    c && this._events && this._events[c] && (this._events[c] = null);
    return this
  };
  c.listeners = function(c) {
    if (!this._events) this._events = {};
    this._events[c] || (this._events[c] = []);
    h(this._events[c]) || (this._events[c] = [this._events[c]]);
    return this._events[c]
  }
})(Adform = window.Adform || {});
(function(c, d, h) {
  function m(b) {
    function d(a) {
      var b = o.muted;
      f(!b);
      f(b);
      K = a;
      x.className = x.className.replace(N, " " + I + a)
    }

    function f(a) {
      if (!G) o.muted = a,
      x.className = x.className.replace(O, " " + F + (a ? "off" : "on"))
    }

    function e(a, b) {
      if (E.length) {
        if (!b && a != H) {
          var c = H * 100,
            f = (H - a > 0.5 ? 1.1 : a) * 100;
          0 >= c && 0 < f ? m.emit("start") : 100 >= c && 100 < f && m.emit("end");
          for (var e = 0, k = E.length; e < k; e++) if (E[e] >= c && E[e] < f) {
            D(u["progr" + E[e]]);
            E.splice(e, 1);
            break
          }
        }
        H = a
      }
    }
    k.call(this);
    var i = new n(b),
      l = b.document || h,
      C = l.createElement("link");
    C.rel = "stylesheet";
    C.type = "text/css";
    C.href = b.css;
    q.byTag(l, "head")[0].appendChild(C);
    C = b.closeButtonAlign;
    var m = this,
      x = q.html('<div class="' + t + "container " + t + "device-" + (y ? "iphone" : J ? "ipad" : v ? "android" : "default") + '"></div>', l),
      o = i.element;
    x.appendChild(o);
    if (z) {
      if (b.link && b.poster) i.on("state", function M(a) {
        if (a == "playing") i.removeListener("state", M),
        o.style.display = "none",
        x.appendChild(q.html('<a href="' + b.link + '" target="_blank"><img src="' + b.poster + '" width="' + b.width + '" height="' + b.height + '"></a>'))
      })
    } else {
      var p = t + "stop",
        r = t + "sound",
        w = new s({
        className: t + "play-pause",
        document: l
      });
      p = new s({
        className: p,
        document: l
      });
      r = new s({
        className: r,
        document: l
      });
      var B = new g({
        container: x
      });
      b.link && x.appendChild(q.html('<a style="position:absolute;top:0;left:0;right:0;bottom:0;background:black;opacity:0" href="' + b.link + '" target="_blank"></a>'));
      x.appendChild(w.element);
      x.appendChild(p.element);
      x.appendChild(r.element);
      x.appendChild(B.element)
    }
    if (C) {
      var A = new s({
        className: t + "close",
        document: l
      });
      A.element.appendChild(q.html('<div><div class="adform-video-close-icon">&times;</div></div>', l));
      x.className += " " + t + "stopAlign-" + C;
      x.appendChild(A.element);
      A.on("buttonClick", function() {
        o.pause();
        m.emit("close");
        D(u.close)
      })
    }
    var K = i.playbackState,
      L = !1,
      P = b.assetId,
      Q = b.xid,
      N = RegExp("\\s*" + I + "\\S+|$"),
      O = RegExp("\\s*" + F + "\\S+|$");
    f(b.muted);
    d("stoped");
    i.on("state", function(a) {
      L || d(a)
    });
    var H = 0,
      E = [0, 25, 50, 75, 100];
    if (z) i.on("timeupdate", e),
    a(o, "ended", function() {
      H = 0.9;
      e(0)
    }),
    v && a(o, "click", function() {
      o.play()
    });
    else {
      a(o, "volumechange", function() {
        f(o.muted)
      });
      i.on("timeupdate", function(a) {
        L || (e(a), B.setProgress(a))
      });
      i.on("loadProgress", B.setLoadProgress);
      w.on("buttonClick", function() {
        K == "playing" ? (o.pause(), D(u.pause)) : (o.play(), D(u.play))
      });
      p.on("buttonClick", function() {
        K == "playing" && o.pause();
        i.setProgress(0);
        D(u.stop)
      });
      B.on("seek", function(a) {
        i.setProgress(a);
        e(a, !0)
      });
      B.on("startSeek", function() {
        L = !0;
        o.pause()
      });
      B.on("endSeek", function() {
        L = !1;
        K == "playing" && o.play()
      });
      r.on("buttonClick", function() {
        f(!o.muted);
        o.muted ? D(u.soundOff) : D(u.soundOn)
      });
      var D = function(a) {
        a && c.Events && c.Events.sendEvent && c.Events.sendEvent(Q, a.id, P, a.name, "")
      }
    }
    this.pause = function() {
      o.pause()
    };
    this.play = function() {
      if (!o.src) o.src = i.source.src,
      o.load();
      o.play()
    };
    this.element = x
  }

  function n(b) {
    function c() {
      var a = d.currentTime,
        b = d.duration,
        e = +new Date,
        k = e - t,
        j = a - s;
      t = e;
      s = a;
      if (b) {
        e = !1;
        if (j && (j = k / (j * 1E3))) e = Math.round(Math.abs(d.playbackRate / j)) > 2;
        a /= b;
        o != a ? (o = a, m = 5, B.emit("timeupdate", o, e)) : u == "playing" && !--m && o > 0.9 && (f({
          type: "ended"
        }), m = 5)
      }
    }

    function f(a) {
      if (a.type == "ended" && b.loop) g(0),
      d.play();
      else if (a.type == "ended" && (g(0), d.pause()), a = d.paused || a.type == "ended" ? !o || o === 1 ? "stoped" : "paused" : "playing", a != u) B.playbackState = u = a,
      B.emit("state", a)
    }

    function e(a) {
      var b = a.total || d.duration;
      if (b > 0) try {
        var c = (a.loaded || d.buffered && d.buffered.end(0) || 0) / b;
        c > n && (n = c, B.emit("loadProgress", n))
      } catch(e) {}
    }

    function g(a) {
      try {
        d.currentTime = a * d.duration
      } catch(b) {}
    }
    typeof r == "undefined" && (w = h.createElement("video"), r = !!w.canPlayType);
    if (!r) throw Error("Video tag not supported");
    var l = i(b.sources);
    if (!l) throw Error("No supported video format found");
    k.call(this);
    b.controls = z;
    var d = q.html("<video " + p(b) + ' preload="none" style="float:left"><source src="' + l.src + '"></video>', b.document);
    d.loop = !1;
    this.source = l;
    this.element = d;
    var u, m, o = -1,
      n = -1,
      t = 0,
      s = 0,
      B = this;
    a(d, "timeupdate", c);
    setInterval(function() {
      c()
    },
    500);
    l = "play,pause,playing,seeking,seeked,stalled,ended,timeupdate".split(",");
    for (var y = 0; y < l.length; y++) a(d, l[y], f);
    f({});
    if (d.buffered) var v = setInterval(function() {
      e({});
      n >= 1 && clearInterval(v)
    },
    500);
    else a(d, "progress", e);
    this.setProgress = g;
    b.autoplay && d.play()
  }

  function i(a) {
    if (a && a.length) for (var b = w, c = 0; c < a.length; c++) {
      var e = a[c];
      if (e) {
        var k = e.file;
        if (k) {
          var d = !1;
          if (e.mime && e.codecs) e = e.mime + '; codecs="' + e.codecs + '"';
          else {
            d = k.match(/\.(mp4|webm|mkv|ogv|ogg|avi)/i);
            if (!d) continue;
            d = d[1].toLowerCase();
            e = {
              mp4: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
              avi: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
              mkv: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
              webm: 'video/webm; codecs="vp8, vorbis"',
              ogv: 'video/ogg; codecs="theora, vorbis"',
              ogg: 'video/ogg; codecs="theora, vorbis"'
            } [d]
          }
          if (e) {
            var g;
            if (! (g = b.canPlayType(e))) if (g = d) g = v && (d == "mp4" || d == "m4v") || G && d == "m3u8" ? "maybe" : void 0;
            d = g;
            if (d == "probably" || d == "maybe") return {
              src: k,
              type: e
            }
          }
        }
      }
    }
  }

  function p(a) {
    for (var b = [], c = 0, e, k; c < A.length; c++) e = A[c],
    (k = a[e]) && (k === !0 ? b.push(e) : b.push(e + '="' + k + '"'));
    return b.join(" ")
  }

  function g(c) {
    function d(a) {
      a = (q.getMousePos(a).pageX - u.pageX + u.relativeX) / n.offsetWidth;
      f(a)
    }

    function f(a) {
      a = a < 0 ? 0 : a > 1 ? 1 : a;
      l(a);
      i.emit("seek", a)
    }

    function e() {
      b(h, "mousemove", d);
      b(h, "mouseup", e);
      b(h, "mouseout", g);
      i.emit("endSeek")
    }


    function g(a) {
      for (a = a.relatedTarget; a && a != this;) a = a.parentNode;
      a != this && e()
    }

    function l(a) {
      p.style.width = a * 100 + "%"
    }
    k.call(this);
    var h = c.container,
      i = this,
      u = null,
      o = q.html('<div class="' + t + 'seek"><div class="' + t + 'seek-border"><div class="' + t + 'seek-background"><div class="' + t + 'seek-loaded"></div><div class="' + t + 'seek-played"></div></div></div></div>', h.ownerDocument),
      n = o.firstChild.firstChild,
      m = n.firstChild,
      p = m.nextSibling;
    p.style.width = 0;
    this.element = o;
    a(o, "mousedown", function(b) {
      i.emit("startSeek");
      b.preventDefault ? b.preventDefault() : b.returnValue = !1;
      u = q.getMousePos(b);
      f(u.relativeX / o.offsetWidth);
      a(h, "mousemove", d);
      a(h, "mouseup", e);
      a(h, "mouseout", g)
    });
    this.setProgress = l;
    this.setLoadProgress = function(a) {
      m.style.width = a * 100 + "%"
    }
  }

  function s(b) {
    k.call(this);
    var c = b.className,
      f = this;
    b = this.element = q.html('<div class="' + c + '"></div>', b.document);
    a(b, "click", function(a) {
      a.preventDefault ? a.preventDefault() : a.returnValue = !1;
      f.emit("buttonClick", c)
    })
  }
  var q = c.lib,
    a = q.addEvent,
    b = q.removeEvent,
    k = c.EventEmitter,
    u = {
    progr0: {
      id: "25",
      name: "Video Play Start"
    },
    progr25: {
      id: "26",
      name: "Played 25% Of Video"
    },
    progr50: {
      id: "27",
      name: "Played 50% Of Video"
    },
    progr75: {
      id: "28",
      name: "Played 75% Of Video"
    },
    progr100: {
      id: "29",
      name: "Video Playback Complete"
    },
    play: {
      id: "30",
      name: "Play Button Press"
    },
    pause: {
      id: "31",
      name: "Pause Button Press"
    },
    stop: {
      id: "32",
      name: "Stop Button Press"
    },
    soundOn: {
      id: "33",
      name: "Sound ON Button Press"
    },
    soundOff: {
      id: "34",
      name: "Sound OFF Button Press"
    },
    close: {
      id: "23",
      name: "Close Button Press"
    }
  },
    t = "adform-video-",
    I = t + "state-",
    F = t + "sound-";
  d = navigator.userAgent.toLowerCase();
  var J = d.indexOf("ipad") > 0,
    y = d.indexOf("iphone") > 0,
    G = y || J,
    v = !G && (d.indexOf("android") > 0 || typeof orientation != "undefined" && "ontouchstart" in h.documentElement && !/series60|symbian|windows ce|blackberry/.test(d)),
    z = y || v;
  c.VideoPlayer = m;
  m.create = function(a) {
    try {
      return new m(a)
    } catch(b) {
      return !1
    }
  };
  q.inherit(m, k);
  q.inherit(n, k);
  var r, w, A = "id,class,width,height,controls,autoplay,poster".split(",");
  q.inherit(g, k);
  q.inherit(s, k)
})(Adform, window, document);
(function(c, d, h) {
  function m() {
    this.isPoliteCallbackFired = this.isPageLoaded = this.isSWFInited = !1;
    this.targetWin = this.getTargetWin();
    this.adFunctionCallPingCount = 20;
    this.politeFunctionName = "pageLoadComplete";
    this.BANNER_TYPE = "Standard Banner";
    this.ROLL_OUT_EVENT_ID = "142";
    this.ROLL_OUT_EVENT_NAME = "Mouse Out from Banner";
    this.ROLL_OVER_EVENT_ID = "141";
    this.ROLL_OVER_EVENT_NAME = "Mouse Over on Banner";
    this.WMODE_OPAQUE = "opaque";
    this.WMODE_WINDOW = "window";
    this.rollOverEventSent = !1;
    this.collapsedAssetId = 0;
    this.messenger = !1;
    var a = +new Date;
    this.rand = (a + a * ~~ (Math.random() * 1E4)).toString(36);
    this.placeId = "ADFdiv_";
    this.placeId += Math.floor(+new Date * Math.random()).toString();
    this.id = this.placeId + "_swf";
    a = c.BannerData;
    c.BannerList && c.BannerList.length && (a = c.BannerList.shift());
    for (var b in a) a.hasOwnProperty(b) && b != "placeId" && (this[b] = a[b]);
    b = !(this.videoSources && this.videoSources.toString() == "false");
    a = typeof this.ADFBuckup != "undefined";
    (s.getVersion() >= this.fVer || b || a) && d.write('<div id="' + this.placeId + '" style="visibility:hidden;">.</div>');
    (this.ADFStandardBanner = d.getElementById(this.placeId)) ? this.init() : this.placeDivReadyTimeout = setTimeout(i(this, this.checkIfPlaceDivReady), 0)
  }

  function n() {
    var a = c.ADFBannerUtils;
    if (a && a.getInstance) return a.getInstance()
  }

  function i(a, b) {
    return function() {
      return b.apply(a, arguments)
    }
  }
  var p = c.lib,
    g = m.prototype;
  c.ADFStandardBanner = m;
  g.checkIfPlaceDivReady = function() {
    if (this.ADFStandardBanner = d.getElementById(this.placeId)) clearTimeout(this.placeDivReadyTimeout),
    this.init()
  };
  g.init = function() {
    if (c.Wallpaper && c.Wallpaper.setup) {
      this.element = this.ADFStandardBanner;
      var a = this.utils = (a = n()) && a.banners && a.banners[this.ADFid];
      this.bn = this.ADFban;
      c.Wallpaper.setup(this)
    }
    if (this.clicktags != null) this.clicktags += "&ADFBuckupClickURL=" + encodeURIComponent(this.ADFBuckupClickURL),
    this.clickURLs = this.fixClickTags(this.clicktags),
    this.clickURLs.adId = this.rand,
    this.ADFBuckupClickURL = decodeURIComponent(this.clickURLs.ADFBuckupClickURL),
    delete this.clickURLs.ADFBuckupClickURL;
    try {
      this.messenger = location.host.indexOf("rad.msn.com") > -1
    } catch(b) {}
    if (this.messenger && this.wmode == this.WMODE_WINDOW) this.wmode = this.clickURLs.wmode = this.WMODE_OPAQUE;
    if (typeof this.clickURLs.ADFassetID != "undefined") this.collapsedAssetId = this.clickURLs.ADFassetID;
    else if (this.ADFFlash.indexOf("ADFassetID=") > -1) this.collapsedAssetId = this.ADFFlash.split("ADFassetID=")[1].split("&")[0];
    a = this.bannerAlign == "left" ? "0" : "auto";
    if (this.bannerAlign != "" && this.bannerAlign != void 0) {
      if (this.bannerAlign == "left") this.ADFStandardBanner.style.marginRight = "auto";
      if (this.bannerAlign == "right") this.ADFStandardBanner.style.marginLeft = "auto";
      if (this.bannerAlign == "center") this.ADFStandardBanner.style.margin = "0 " + a;
      this.ADFStandardBanner.style.textAlign = this.bannerAlign
    }
    this.ADFStandardBanner.style.width = this.width.indexOf("%") > -1 ? this.width : this.width + "px";
    this.ADFStandardBanner.style.height = this.height + "px";
    this.ADFStandardBanner.style.visibility = "visible";
    a = this.ADFStandardBanner.style.position;
    if (!a || !~"absolute|fixed".indexOf(a)) this.ADFStandardBanner.style.position = "relative";
    if (this.useInScreen == 1) a = d.createElement("script"),
    a.src = location.protocol + "//track.adform.net/banners/scripts/ADFInScreen/ADFInScreenv1.0.js",
    d.body.insertBefore(a, d.body.firstChild),
    this.initInScreen();
    if (typeof h.ADFiInstances == "undefined") h.ADFiInstances = {};
    h.ADFiInstances[this.id] = this;
    this.politeTimeout >>= 0;
    this.addOnLoadEvent();
    this.insertContent();
    if ((a = this.ADFStandardBanner.getElementsByTagName("embed")[0]) && a.offsetWidth) a.width++,
    a.width--;
    this.initSwfCallbacks();
    this.initMouseInteraction()
  };
  g.initSwfCallbacks = function() {
    c.swfCallbacks = c.swfCallbacks || {};
    c.swfCallbacks["ad" + this.rand] = c.swfCallbacks["ad" + this.rand] || {};
    c.swfCallbacks["ad" + this.rand].initPoliteMode = i(this, this.initPoliteMode)
  };
  g.initMouseInteraction = function() {
    this.addEventListenerToElement("mouseover", this.handleMouseOver, this.ADFStandardBanner, this);
    this.addEventListenerToElement("mouseout", this.handleMouseOut, this.ADFStandardBanner, this);
    this.addEventListenerToElement("blur", this.handleMouseOut, h, this)
  };
  g.overed = !1;
  g.handleMouseOver = function() {
    if (!this.overed) this.overed = !0,
    this.rollOverEventTimeout = setTimeout(i(this, this.sendRollOverEvent), 1E3)
  };
  g.handleMouseOut = function(a) {
    a = a || h.event;
    a = a.relatedTarget || a.toElement;
    for (var b = this.ADFStandardBanner; a && a != b;) a = a.parentNode;
    if (a != b && (this.overed = !1, clearTimeout(this.rollOverEventTimeout), this.rollOverEventSent == !0)) this.sendEvent(this.clickURLs.ADFid, this.ROLL_OUT_EVENT_ID, this.collapsedAssetId, this.ROLL_OUT_EVENT_NAME, ""),
    this.rollOverEventSent = !1
  };
  g.sendRollOverEvent = function() {
    clearTimeout(this.rollOverEventTimeout);
    if (this.rollOverEventSent == !1) this.rollOverEventSent = this.sendEvent(this.clickURLs.ADFid, this.ROLL_OVER_EVENT_ID, this.collapsedAssetId, this.ROLL_OVER_EVENT_NAME, "")
  };
  g.addEventListenerToElement = function(a, b, c, d) {
    h.attachEvent ? c.attachEvent("on" + a, i(d, b)) : h.addEventListener && c.addEventListener(a, i(d, b), !1)
  };
  g.sendEvent = function(a, b, k, d, g) {
    if (c.Events && typeof c.Events.sendEvent == "function") return c.Events.sendEvent(a, b, k, d, g, this.BANNER_TYPE),
    !0;
    return !1
  };
  g.getTargetWin = function() {
    var a = h;
    if (typeof inDapMgrIf !== "undefined" || typeof inDapIF !== "undefined") try {
      a = parent
    } catch(b) {
      a = h
    }
    return a
  };
  g.addOnLoadEvent = function() {
    var a = i(this, this.onLoad),
      b = this.politeTimeout;
    this.politeTimeout = setTimeout(a, b || 3E4);
    b || (p.addEvent(this.targetWin, "load", a), p.addEvent(d.body, "load", a))
  };
  g.onLoad = function() {
    clearTimeout(this.politeTimeout);
    this.isPageLoaded = !0;
    this.ADFPoliteSrc ? (delete this.ADFPoliteSrc, this.insertContent(!0)) : this.callPoliteFn();
    this.registerBannerProperties()
  };
  g.callPoliteFn = function() {
    if (this.isPageLoaded && !this.isPoliteCallbackFired) if (this.getBrowser().toLowerCase() == "safari") {
      var a = this;
      setTimeout(function() {
        a.callAdFunction(a.politeFunctionName)
      },
      100)
    } else this.callAdFunction(this.politeFunctionName)
  };
  g.callAdFunction = function(a) {
    var b = this.getFlashMovieObject(this.placeId + "_swf");
    if (b) if (typeof b[a] != "undefined") try {
      b[a](),
      this.isPoliteCallbackFired = !0
    } catch(c) {} else if (this.adFunctionCallPingCount != 0) {
      var d = this;
      setTimeout(function() {
        d.callAdFunction(d.politeFunctionName)
      },
      100);
      this.adFunctionCallPingCount--
    }
  };
  g.getFlashMovieObject = function(a) {
    try {
      if (h.document[a]) return h.document[a];
      if (navigator.appName.indexOf("Microsoft Internet") == -1 && d.embeds && d.embeds[a]) return d.embeds[a];
      return d.getElementById(a)
    } catch(b) {}
    return !1
  };
  g.insertContent = function(a) {
    function b() {
      r.style.left = 0;
      r.style.top = 0;
      j.updateInscreen(d, A);
      j.clearElement(j.ADFStandardBanner, r)
    }
    var k = this.id,
      d = this.ADFid,
      g = this.ADFFlash,
      h = this.ADFPoliteSrc,
      i = this.ADFBuckup,
      n = s.getVersion() >= this.fVer,
      m = this.getVideoPlayerSettings();
    m = !n && m && c.VideoPlayer.create(m);
    var q = this.ADFBuckupClickURL,
      v = this.ADFStandardBanner.ownerDocument,
      z = "",
      r, w = !1,
      A = this.ADFStandardBanner.id;
    if (h) / \.swf$ / i.test(h) ? n ? (r = p.html(this.createFlash(h), v), w = !0) : i && (z = this.createImage(i, q)) : z = this.createImage(h, q);
    else if (n) r = p.html(this.createFlash(g), v),
    w = !0;
    else if (m) r = m.element;
    else if (i) z = this.createImage(i, q);
    else if (a) return;
    var j = this;
    if (w) {
      try {
        r.style.position = "absolute"
      } catch(R) {
        r.style.position = "absolute"
      }
      this.ADFStandardBanner.appendChild(r);
      if (a) {
        r.style.left = "-9999px";
        r.style.top = "-9999px";
        var f = 10;
        setTimeout(function() {
          f--;
          var a = p.byId(k, v),
            c = a && p.byTag(a, "embed")[0],
            d = null;
          try {
            a.PercentLoaded(),
            d = a
          } catch(g) {
            try {
              c.PercentLoaded(),
              d = c
            } catch(h) {}
          }
          if (d) {
            f = 3;
            var i = setInterval(function() {
              var a = !1;
              try {
                a = d.PercentLoaded()
              } catch(c) {}
              if (a === !1 || a == 100 || !a && !--f) clearInterval(i),
              b()
            },
            100)
          } else f > 0 ? setTimeout(arguments.callee, 50) : b()
        },
        50)
      } else b()
    } else this.ADFStandardBanner.innerHTML = z,
    r && this.ADFStandardBanner.appendChild(r),
    this.updateInscreen(d, A)
  };
  g.updateInscreen = function(a, b) {
    var c = n();
    c && b && (c.addBannerAttribute(a, "trackElements", [b]), c.addBannerAttribute(a, "relativeTargetSWFID", b), s.getVersion() >= this.fVer && c.addBannerAttribute(a, "trackHeatMap", b))
  };
  g.createFlash = function(a) {
    var b = new q(this.rand);
    b.src = a;
    b.version = this.ADFFlashVer;
    b.id = this.id;
    b.width = this.width;
    b.height = this.height;
    b.allowScriptAccess = "always";
    b.vars = this.clickURLs;
    b.wmode = this.wmode;
    b.version = this.fVer;
    b.quality = this.quality || "autohigh";
    return b.getHtml() || ""
  };
  g.createImage = function(a, b) {
    var c = '<img src="' + a + '" border="0" id="FlashID' + this.ADFid + '" width="' + this.width + '" height="' + this.height + '" alt="" />';
    b && (c = '<a href="' + b + '" target="_blank">' + c + "</a>");
    return c || ""
  };
  g.clearElement = function(a, b) {
    for (var c = 0, d = a.childNodes.length; c < d; c++) {
      var g = a.childNodes[c];
      if (g != b) try {
        a.removeChild(g)
      } catch(h) {}
    }
  };
  g.initInScreen = function() {
    if (typeof ADFInScreenLoaded != "undefined") {
      var a = new ADFInScreen;
      a.placeId = this.placeId;
      a.ADFid = this.ADFid;
      a.init()
    } else self.setTimeout(i(this, this.initInScreen), 100)
  };
  g.getBrowser = function() {
    if (this.browser) return this.browser;
    var a = h.navigator.userAgent.toLowerCase(),
      b = "Unknown";
    a.indexOf("msie") > -1 ? b = "MSIE" : a.indexOf("chrome") > -1 ? b = "Chrome" : a.indexOf("safari") > -1 ? b = "Safari" : a.indexOf("opera") > -1 ? b = "Opera" : a.indexOf("firefox") > -1 && (b = "Firefox");
    return this.browser = b
  };
  g.initPoliteMode = function() {
    this.isSWFInited = !0;
    this.callPoliteFn()
  };
  g.registerBannerProperties = function() {
    var a = this.getADFEventsInstance();
    a != null && a.registerBannerProperties(this.ADFid, this)
  };
  g.getADFEventsInstance = function() {
    if (c.ADFEvents && typeof c.ADFEvents.getInstance == "function") {
      var a = c.ADFEvents.getInstance();
      if (typeof a == "undefined") return null;
      return a
    }
    return null
  };
  g.fixClickTags = function(a) {
    a = a.split("&");
    for (var b = {}, c = 0; c < a.length; c++) {
      b[a[c].split("=")[0]] = a[c].split("=")[1];
      a[c].split("=").length == 3 && (b[a[c].split("=")[0]] += "=" + a[c].split("=")[2]);
      var d = b[a[c].split("=")[0]] = decodeURIComponent(b[a[c].split("=")[0]]);
      d.indexOf("&") != -1 && (b[a[c].split("=")[0]] = encodeURIComponent(d));
      b[a[c].split("=")[0]].indexOf("CREFURL=") != -1 && (d = d.split("CREFURL=")[1].split(";C="), b[a[c].split("=")[0]] = b[a[c].split("=")[0]].split("CREFURL=")[0] + "CREFURL=" + (typeof d[0] != "undefined" ? encodeURIComponent(d[0]) : ";") + (typeof d[1] != "undefined" ? ";C=" + d[1] : ""))
    }
    return b
  };
  g.getVideoPlayerSettings = function() {
    return this.videoSources && {
      width: this.width,
      height: this.height,
      loop: this.clickURLs.loopVideo == "true",
      muted: this.clickURLs.soundOn != "true",
      autoplay: this.clickURLs.autoPlay == "true",
      poster: this.ADFBuckup || null,
      sources: this.videoSources,
      assetId: this.collapsedAssetId,
      link: this.ADFBuckupClickURL,
      xid: this.ADFid,
      css: this.css || null
    }
  };
  var s = {
    version: -1,
    initialized: !1,
    initialize: function() {
      if (h.ActiveXObject) for (var a = 6; a < 12; a++) try {
        new h.ActiveXObject("ShockwaveFlash.ShockwaveFlash." + a),
        s.version = a
      } catch(b) {} else if (navigator.plugins && navigator.plugins["Shockwave Flash"] && navigator.plugins["Shockwave Flash"].description && (a = navigator.plugins["Shockwave Flash"].description.match(/([0-9]+)\.[0-9]+/), a[1] && !isNaN(parseInt(a[1], 10)))) s.version = parseInt(a[1], 10)
    },
    getVersion: function() {
      if (!s.initialized) s.initialize(),
      s.initialized = !0;
      return s.version
    }
  },
    q = function(a) {
    this.version = 7;
    this.src = null;
    this.height = this.width = 1;
    this.id = null;
    this.vars = {};
    this.play = !0;
    this.menu = !1;
    this.loop = !0;
    this.quality = "autohigh";
    this.wmode = "window";
    this.base = this.bgcolor = null;
    this.allowScriptAccess = "never";
    this.allowFullScreen = "true";
    this.rand = a || (Math.random() * 1E4).toString(36)
  };
  q.prototype = {
    getHtml: function() {
      var a = "";
      if (s.getVersion() >= this.version) {
        a = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" align="middle"';
        var b = "",
          c = '<embed type="application/x-shockwave-flash" pluginspage="' + location.protocol + '//www.macromedia.com/go/getflashplayer"',
          d = ' width="' + this.width + '" height="' + this.height + '"';
        a += d;
        c += d;
        a += ' codebase="' + location.protocol + "//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=" + this.version + ',0,0,0"';
        this.allowScriptAccess && (b += '<param name="allowScriptAccess" value="' + this.allowScriptAccess + '" />', c += ' allowScriptAccess="' + this.allowScriptAccess + '"');
        this.src && (b += '<param name="movie" value="' + this.src + '" />', c += ' src="' + this.src + '"');
        this.id && (a += ' id="' + this.id + '"', c += ' name="' + this.id + '" id="' + this.id + '"');
        this.bgcolor && (b += '<param name="bgcolor" value="' + this.bgcolor + '" />', c += ' bgcolor="' + this.bgcolor + '"');
        this.menu || (b += '<param name="menu" value="false" />', c += ' menu="false"');
        this.quality && (b += '<param name="quality" value="' + this.quality + '" />', c += ' quality="' + this.quality + '"');
        this.allowFullScreen && (b += '<param name="allowFullScreen" value="' + this.allowFullScreen + '" />', c += ' allowFullScreen="' + this.allowFullScreen + '"');
        this.play || (b += '<param name="play" value="false" />', c += ' play="false"');
        this.wmode && (b += '<param name="wmode" value="' + this.wmode + '" />', c += ' wmode="' + this.wmode + '"');
        this.base && (b += '<param name="base" value="' + this.base + '" />', c += ' base="' + this.base + '"');
        if (this.vars) {
          d = [];
          for (var g in this.vars) d.push(g + "=" + this.vars[g]);
          d.length > 0 && (d = d.join("&"), b += '<param name="flashvars" value="' + d + '">', c += ' flashvars="' + d + '"')
        }
        a = a + ">" + b + c + " /></object>"
      }
      return a
    }
  };
  new m
})(Adform = window.Adform || {},
document, window);
