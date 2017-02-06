/** 
 * HubSpot Analytics Tracking Code Build Number 1.120
 * Copyright 2016 HubSpot, Inc.  http://www.hubspot.com
 */
var _hsq = _hsq || [];
var _paq = _paq || [];
_hsq.push(['setPortalId', 330046]);
_hsq.push(['trackPageView']);
_hsq.push(["trackClick", "#tower-trial-download", "000000421658"]);
_hsq.push(["trackClick", "#tower-trial-vagrant", "000000421662"]);
_hsq.push(["trackClick", "#tower-trial-amazon", "000000421663"]);
_hsq.push(['setLegacy', false]);
_hsq.push(['addCookieDomain', '.ansible.com']);
_hsq.push(['addCookieDomain', '.hs-sites.com']);
_hsq.push(['addCookieDomain', '.hubspot.com']);
_hsq.push(['addCookieDomain', '.ansibleworks.com']);
_hsq.push(['enableAutomaticLinker', true]);
/** _anon_wrapper_ **/
(function() {
    var hstc = hstc || {};
    hstc.JS_VERSION = 1.1;
    var domain = ".hubspot.com";
    hstc.ANALYTICS_HOST = "track" + domain, hstc.A20_HOST = "tracking" + domain, Math.uuid = function() {
        var e = "0123456789abcdef".split("");
        return function() {
            var n = [];
            for (var r = 0; r < 32; r++) n[r] = e[Math.floor(Math.random() * 16)];
            return n.join("")
        }
    }();
    var hstc = hstc || {};
    hstc.debug = !1, hstc.log = function() {
        try {
            var e = new hstc.cookies.Cookie,
                t = "hs_dbg",
                n = document.location.hash.indexOf("#hsdbg") > -1;
            if (hstc.debug || n || e.get(t) === "1") {
                var r = window.console;
                r && typeof r.log == "function" && r.log.apply(r, arguments), e.set(t, 1)
            }
        } catch (i) {}
    };
    var hstc = hstc || {};
    hstc.global = {}, hstc.global.Context = function(e, t, n, r, i, s, o) {
        this.doc = e || document, this.nav = t || navigator, this.scr = n || screen, this.win = r || window, this.loc = i || this.win.location, this.top = s || top, this.parent = o || parent
    }, hstc.global.Context.prototype.getDocument = function() {
        return this.doc
    }, hstc.global.Context.prototype.getNavigator = function() {
        return this.nav
    }, hstc.global.Context.prototype.getScreen = function() {
        return this.scr
    }, hstc.global.Context.prototype.getWindow = function() {
        return this.win
    }, hstc.global.Context.prototype.getLocation = function() {
        return this.loc
    }, hstc.global.Context.prototype.getHostName = function() {
        try {
            return this.loc.hostname
        } catch (e) {
            return this.doc.domain
        }
    }, hstc.global.Context.prototype.getTop = function() {
        return this.top
    }, hstc.global.Context.prototype.getParent = function() {
        return this.parent
    }, hstc.global.Context.prototype.getReferrer = function() {
        var e = "";
        try {
            e = this.top.document.referrer
        } catch (t) {
            if (parent) try {
                e = this.parent.document.referrer
            } catch (n) {
                e = ""
            }
        }
        return e === "" && (e = this.doc.referrer), e
    }, hstc.global.Context.prototype.getCharacterSet = function() {
        return this.doc.characterSet ? this.doc.characterSet : this.doc.charset ? this.doc.charset : ""
    }, hstc.global.Context.prototype.getLanguage = function() {
        return this.nav.language ? this.nav.language : this.nav.browserLanguage ? this.nav.browserLanguage : ""
    };
    var hstc = hstc || {};
    hstc.utils = {}, hstc.utils.tostr = function() {
        return Object.prototype.toString
    }(), hstc.utils.getNextWeekStart = function(e) {
        var t = e || new Date,
            n = t.getDay(),
            r = t.getDate() + (n == 0 ? 7 : 7 - n);
        return hstc.utils.clearTimePart(new Date(t.setDate(r)))
    }, hstc.utils.getNextMonthStart = function(e) {
        var t = e || new Date,
            n = t.getMonth(),
            r = 0;
        while (n == t.getMonth()) r++, t.setDate(t.getDate() + 1);
        return hstc.utils.clearTimePart(t)
    }, hstc.utils.clearTimePart = function(e) {
        return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e
    }, hstc.utils.truncateString = function(e, t) {
        return e ? e.length > t ? e.substr(0, t) : e : ""
    }, hstc.utils.search2dArray = function(e, t, n, r) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s && hstc.utils.isArray(s) && hstc.utils.inArray(s[t - 1], n) !== -1 && (r(s, i), e.splice(i--, 1))
        }
    }, hstc.utils.removeDomain = function(e) {
        return "/" + e.split("//")[1].split("/").slice(1).join("/")
    }, hstc.utils.removeItem = function(e, t, n) {
        var r = e.slice((n || t) + 1 || this.length);
        return this.length = t < 0 ? e.length + t : t, e.push.apply(e, r)
    }, hstc.utils.isArray = function(e) {
        return hstc.utils.tostr.call(e) === "[object Array]"
    }, hstc.utils.inArray = function(e, t) {
        for (var n = 0, r = t.length; n < r; n++)
            if (t[n] === e) return n;
        return -1
    }, hstc.utils.extend = function() {
        var e = arguments[0] || {}, t = 1,
            n = arguments.length,
            r = !1,
            i;
        typeof e == "boolean" && (r = e, e = arguments[1] || {}, t = 2), typeof e != "object" && !hstc.utils.isFunction(e) && (e = {}), n == t && (e = this, --t);
        for (; t < n; t++)
            if ((i = arguments[t]) != null)
                for (var s in i) {
                    var o = e[s],
                        u = i[s];
                    if (e === u) continue;
                    r && u && typeof u == "object" && !u.nodeType ? e[s] = hstc.utils.extend(r, o || (u.length !== null ? [] : {}), u) : u !== undefined && (e[s] = u)
                }
            return e
    }, hstc.utils.each = function(e, t) {
        var n, r = 0,
            i = e.length;
        if (i === undefined) {
            for (n in e)
                if (t.call(e[n], n, e[n]) === !1) break
        } else
            for (var s = e[0]; r < i && t.call(s, r, s) !== !1; s = e[++r]);
        return e
    }, hstc.utils.isDefined = function(e) {
        return typeof e != "undefined"
    }, hstc.utils.addEventListener = function(e, t, n, r) {
        if (e.addEventListener) return e.addEventListener(t, n, r), !0;
        if (e.attachEvent) return e.attachEvent("on" + t, n);
        e["on" + t] = n
    }, hstc.utils.preventDefault = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }, hstc.utils.loadImage = function(e, t, n) {
        var r = new Date,
            i = new Image(1, 1);
        expireDateTime = r.getTime() + t, i.onload = function() {
            n && n()
        }, i.src = e
    }, hstc.utils.isEmpty = function(e) {
        return undefined == e || "-" == e || "" == e
    }, hstc.utils.isEmptyObject = function(e) {
        for (var t in e) return !1;
        return !0
    }, hstc.utils.safeString = function(e) {
        return hstc.utils.isEmpty(e) ? "" : e
    }, hstc.utils.makeLowerCase = function(e) {
        return hstc.utils.safeString(e).toLowerCase()
    }, hstc.utils.encodeParam = function(e, t) {
        var n = encodeURIComponent;
        return n instanceof Function ? t ? encodeURI(e) : n(e) : escape(e)
    }, hstc.utils.decodeParam = function(e, t) {
        var n = decodeURIComponent,
            r;
        e = e.split("+").join(" ");
        if (n instanceof Function) try {
            r = t ? decodeURI(e) : n(e)
        } catch (i) {
            r = unescape(e)
        } else r = unescape(e);
        return r
    }, hstc.utils.isFunction = function(e) {
        return hstc.utils.tostr.call(e) === "[object Function]"
    }, hstc.utils.utcnow = function() {
        return (new Date).getTime()
    }, hstc.utils.hashDomain = function(e) {
        var n = 0;
        for (t = e.length - 1; t >= 0; t--) {
            var r = e.charCodeAt(t);
            n = (n << 6 & 268435455) + r + (r << 14), r = n & 266338304, n = r !== 0 ? n ^ r >> 21 : n
        }
        return n
    }, hstc.utils.extractDomain = function(e) {
        var t = e.split(".");
        return t.length > 2 && (t = t.slice(1)), "." + t.join(".")
    }, hstc.utils.createElement = function(e) {
        var t = document.createDocumentFragment(),
            n = document.createElement("div");
        n.innerHTML = e;
        while (n.firstChild) t.appendChild(n.firstChild);
        return t
    }, hstc.utils.deparam = function(e, t) {
        var n = {}, r = {
                "true": !0,
                "false": !1,
                "null": null
            };
        e = hstc.utils.trim(hstc.utils.safeString(e));
        if (hstc.utils.startsWith(e, "?") || hstc.utils.startsWith(e, "#")) e = e.slice(1);
        return hstc.utils.each(e.split("+").join(" ").split("&"), function(e, i) {
            var s = i.split("="),
                o = hstc.utils.decodeParam(s[0]),
                u, a = n,
                f = 0,
                l = o.split("]["),
                c = l.length - 1;
            /\[/.test(l[0]) && /\]$/.test(l[c]) ? (l[c] = l[c].replace(/\]$/, ""), l = l.shift().split("[").concat(l), c = l.length - 1) : c = 0;
            if (s.length === 2) {
                u = hstc.utils.decodeParam(s[1]), t && (u = u && !isNaN(u) ? +u : u === "undefined" ? undefined : r[u] !== undefined ? r[u] : u);
                if (c)
                    for (; f <= c; f++) o = l[f] === "" ? a.length : l[f], a = a[o] = f < c ? a[o] || (l[f + 1] && isNaN(l[f + 1]) ? {} : []) : u;
                else hstc.utils.isArray(n[o]) ? n[o].push(u) : n[o] !== undefined ? n[o] = [n[o], u] : n[o] = u
            } else o && (n[o] = t ? undefined : "")
        }), n
    }, hstc.utils.param = function(e, t) {
        function r(e, t) {
            n[n.length] = hstc.utils.encodeParam(e) + "=" + hstc.utils.encodeParam(t)
        }
        var n = [];
        t = t || "&";
        for (var i in e) hstc.utils.isArray(e[i]) ? hstc.utils.each(e[i], function() {
            r(i, this)
        }) : r(i, hstc.utils.isFunction(e[i]) ? e[i]() : e[i]);
        return n.join(t).replace(/%20/g, "+")
    }, hstc.utils.updateQueryStringParameter = function(e, t, n) {
        var r = new RegExp("([?|&])" + t + "=.*?(&|#|$)(.*)", "gi");
        if (r.test(e)) return n ? e.replace(r, "$1" + t + "=" + n + "$2$3") : e.replace(r, "$1$3").replace(/(&|\?)$/, "");
        if (n) {
            var i = e.indexOf("?") !== -1 ? "&" : "?",
                s = e.split("#");
            return e = s[0] + i + t + "=" + n, s[1] && (e += "#" + s[1]), e
        }
        return e
    }, hstc.utils.trim = function(e) {
        return (e || "").replace(/^\s+|\s+$/g, "")
    }, hstc.utils.startsWith = function(e, t) {
        return e.substr(0, t.length) == t
    }, hstc.utils.endsWith = function(e, t) {
        var n = e.length - t.length;
        return n >= 0 && e.lastIndexOf(t) === n
    }, hstc.utils.mergeObject = function(e, t) {
        e = e || {};
        if (!t) return t;
        for (var n in t) e[n] = t[n];
        return e
    }, hstc.utils.hasClass = function(e, t) {
        if (e && e.className) return hstc.utils.inArray(t, e.className.split(" ")) > -1
    }, hstc.utils.stripNumericBrackets = function(e) {
        return (e || "").replace(/(^.+?)\[(.+?)\]/, "$1_$2")
    }, hstc.utils.parseCurrency = function(e, t) {
        if (typeof e == "number") return e;
        var n = e.match(/([^\d]*)([\d\.,]+)([^\d\.,]*)/);
        if (n) {
            var r = n[2],
                i = r.split("."),
                s = r.split(","),
                o;
            i.length > 2 || i.length == 2 && i[1].length > 2 && (s.length === 0 || i[0].length < s[0].length) || s.length == 2 && s[1].length == 2 ? o = s : o = i;
            var u = decimalPart = 0;
            o.length > 1 ? (decimalPart = o.pop(), u = o.join("")) : u = o.join(""), u = u.replace(/[\.,]/g, "");
            var a = parseInt(u);
            return decimalPart && (a += parseFloat(decimalPart) / Math.pow(10, decimalPart.length)), a
        }
        return null
    }, hstc.utils.logError = function(e, t) {
        t = t || {};
        var n = {
            w: hstc.utils.utcnow(),
            m: e.message || e.toString ? e.toString() : "-",
            j: hstc.JS_VERSION
        };
        n = hstc.utils.extend(n, t), e.name && (n.n = e.name), e.fileName && (n.f = e.fileName), e.lineNumber && (n.l = e.lineNumber);
        try {
            n.x = e.stack || e.stacktrace || ""
        } catch (r) {}
        hstc.log("Encountered a JS error"), hstc.log(n), hstc.utils.loadImage("//" + hstc.ANALYTICS_HOST + "/__pto.gif?" + hstc.utils.param(n))
    }, hstc.utils.objectsAreEqual = function(e, t) {
        return eq(e, t, [])
    }, hstc.utils.eq = function(e, t, n) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e._chain && (e = e._wrapped), t._chain && (t = t._wrapped);
        if (e.isEqual && _.isFunction(e.isEqual)) return e.isEqual(t);
        if (t.isEqual && _.isFunction(t.isEqual)) return t.isEqual(e);
        var r = toString.call(e);
        if (r != toString.call(t)) return !1;
        switch (r) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var i = n.length;
        while (i--)
            if (n[i] == e) return !0;
        n.push(e);
        var s = 0,
            o = !0;
        if (r == "[object Array]") {
            s = e.length, o = s == t.length;
            if (o)
                while (s--)
                    if (!(o = s in e == s in t && eq(e[s], t[s], n))) break
        } else {
            if ("constructor" in e != "constructor" in t || e.constructor != t.constructor) return !1;
            for (var u in e)
                if (_.has(e, u)) {
                    s++;
                    if (!(o = _.has(t, u) && eq(e[u], t[u], n))) break
                }
            if (o) {
                for (u in t)
                    if (_.has(t, u) && !(s--)) break;
                o = !s
            }
        }
        return n.pop(), o
    };
    var hstc = hstc || {};
    hstc.cookies = {}, hstc.cookies.Cookie = function(e) {
        this.context = e || new hstc.global.Context, this.cookies = [], this.currentDomain = null, this.domains = []
    }, hstc.cookies.Cookie.prototype.addDomain = function(e) {
        hstc.utils.endsWith("." + this.context.getHostName(), e) && (!this.currentDomain || e.length < this.currentDomain.length) && (this.currentDomain = e), this.domains.push(e)
    }, hstc.cookies.Cookie.prototype.getDomains = function() {
        return this.domains
    }, hstc.cookies.Cookie.prototype.set = function(e, t, n) {
        n = n || {};
        var r, i, s = !1;
        n.minsToExpire ? (r = new Date, r.setTime(r.getTime() + n.minsToExpire * 1e3 * 60)) : n.daysToExpire ? (r = new Date, r.setTime(r.getTime() + n.daysToExpire * 1e3 * 60 * 60 * 24)) : n.expiryDate && n.expiryDate.toGMTString ? r = n.expiryDate : n.expiryDate && (r = new Date(n.expiryDate)), r !== undefined && (i = r.toGMTString(), s = !0), this._set(e, n.alreadyEncoded ? t : hstc.utils.encodeParam(t, !0), {
            expires: s ? ";expires=" + i : "",
            expiresTime: s ? r : null,
            path: ";path=" + (n.path ? n.path : "/"),
            domain: !this.setCookiesToSubdomain && this.currentDomain ? ";domain=" + this.currentDomain : "",
            secure: n.secure ? ";secure" : ""
        })
    }, hstc.cookies.Cookie.prototype._set = function(e, t, n) {
        var r = n.expires + n.path + n.domain + n.secure;
        this._writeCookie(e + "=" + t + r);
        var i = this.get(e);
        (!i || i != t) && n.domain != "" && (!n.expiresTime || n.expiresTime - new Date > 0) && (r = n.expires + n.path + n.secure, this._writeCookie(e + "=" + t + r)), this.get(e) && this.cookies.push({
            name: e,
            value: t,
            extras: r
        })
    }, hstc.cookies.Cookie.prototype._writeCookie = function(e) {
        this.context.getDocument().cookie = e
    }, hstc.cookies.Cookie.prototype.get = function(e) {
        var t = new RegExp("(^|;)[ ]*" + e + "=([^;]*)"),
            n = t.exec(this.context.getDocument().cookie);
        return n ? hstc.utils.decodeParam(n[2], !0) : ""
    }, hstc.cookies.Cookie.prototype.has = function(e) {
        if (hstc.utils.isDefined(this.context.getNavigator().cookieEnabled) || "cookie" in this.context.getDocument() && this.context.getDocument().cookie.length > 0) return !0;
        if (e) return !1;
        var t = "__hs_testcookie";
        return this.set(t, "1"), this.get(t) === "1"
    }, hstc.cookies.Cookie.prototype.remove = function(e) {
        this.set(e, "", {
            expiryDate: "Thu, 01-Jan-1970 00:00:01 GMT"
        })
    }, hstc.cookies.Cookie.prototype.removeAll = function() {
        for (var e = 0; e < this.cookies.length; e++) this.remove(this.cookies[e].name);
        this.cookies = []
    };
    var hstc = hstc || {};
    hstc.identities = {}, hstc.identities.Identity = function(e) {
        this.raw = e
    }, hstc.identities.Identity.prototype.get = function() {
        return this.raw
    }, hstc.identities.Identity.prototype.equals = function(e) {
        return hstc.utils.objectsAreEqual(this, e)
    }, hstc.identities.Identity.prototype.merge = function(e) {
        this.raw = hstc.utils.mergeObject(this.raw, e)
    };
    var hstc = hstc || {};
    hstc.migrations = {}, hstc.migrations.MigrationHelper = function(e, t) {
        this.context = e, this.cookie = t || new hstc.cookies.Cookie(this.context), this.injectedKeys = {}, this.hsTimeStamp = hstc.utils.utcnow()
    }, hstc.migrations.MigrationHelper.HS_UTK_COOKIE = "hubspotutk", hstc.migrations.MigrationHelper.EXPIRATION = 3650, hstc.migrations.MigrationHelper.DATE_TIME_PATTERN = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/, hstc.migrations.MigrationHelper.prototype.getAnalytics20Utk = function(e) {
        var t = this.cookie.get(hstc.migrations.MigrationHelper.HS_UTK_COOKIE);
        return hstc.utils.isEmpty(t) ? null : [t].join(".").toLowerCase()
    }, hstc.migrations.MigrationHelper.prototype.ensureAnalytics20Utk = function(e) {
        this.cookie.set(hstc.migrations.MigrationHelper.HS_UTK_COOKIE, e, {
            daysToExpire: hstc.migrations.MigrationHelper.EXPIRATION
        })
    }, hstc.migrations.MigrationHelper.prototype.insertUserTokenIntoForms = function(e) {
        this.injectKeyValueIntoForms("hsUserToken", e)
    }, hstc.migrations.MigrationHelper.prototype.insertFirstVisitDataIntoForm = function() {
        this.firstVisitValue && this.injectKeyValueIntoForms("hsFirstVisitHidden", this.firstVisitValue)
    }, hstc.migrations.MigrationHelper.prototype.injectKeyValueIntoForms = function(e, t) {
        if (this.injectedKeys[e] && this.injectedKeys[e].length > 0) {
            hstc.log("Updating existing " + e + " hidden fields with new value");
            for (var n = 0; n < this.injectedKeys[e].length; n++) this.injectedKeys[e][n].setAttribute("value", t);
            return
        }
        var r = [];
        for (var i = 0; i < document.forms.length; i++) {
            var s = document.forms[i];
            if (s.ContactFormId) {
                var o = document.createElement("input");
                o.setAttribute("type", "hidden"), o.setAttribute("value", t), o.setAttribute("name", e), r.push(o), s.appendChild(o)
            }
        }
        this.injectedKeys[e] = r, hstc.log("Injected " + e + " into " + r.length + " forms.")
    }, hstc.migrations.MigrationHelper.prototype.trackLegacyPageView = function(e) {
        this.portalId = e.portalId;
        var t = this.context.getWindow(),
            n = this.context.getDocument(),
            r = this.context.getLocation();
        this.setLocationAttributes(t, n), e.canonicalUrl && (this.canonicalUrl = e.canonicalUrl.replace(/\.{2}/g, "")), e.pageId && (this.pageId = e.pageId), e.contentType && (this.contentType = e.contentType);
        var i = this.generateQueryString(),
            s = "//" + hstc.A20_HOST + "/track?" + i;
        s = s.replace(/'/g, "%27"), hstc.utils.loadImage(s)
    }, hstc.migrations.MigrationHelper.prototype.setLocationAttributes = function(e, t) {
        e = e || this.context.getWindow(), t = t || this.context.getDocument();
        var n = "" + t.referrer,
            r = typeof e.hs_title != "string" ? "" + t.title : e.hs_title,
            i = "" + t.location;
        this.referer = n.replace(/\.{2}/g, ""), this.title = r.replace(/\.{2}/g, ""), this.url = i.replace(/\.{2}/g, "")
    }, hstc.migrations.MigrationHelper.prototype.generateQueryString = function() {
        var e = {
            g: this.guid,
            n: this.isNewVisit,
            u: this.url,
            r: this.referer,
            t: this.title,
            p: this.portalId,
            lvt: this.lastVisitTimeStamp,
            cvt: this.hsTimeStamp,
            v: hstc.JS_VERSION
        };
        return this.isNewDailyVisitor && (e.nD = 1), this.isNewWeeklyVisitor && (e.nW = 1), this.isNewMonthlyVisitor && (e.nM = 1), this.canonicalUrl && (e.ccu = this.canonicalUrl), this.pageId && (e.pi = this.pageId), this.contentType && (e.ct = this.contentType), hstc.utils.param(e)
    }, hstc.migrations.MigrationHelper.prototype.manageLegacyCookies = function(e) {
        this.guid = e.utk.visitor, this.lastVisitTimeStamp = this.convertTimestampToDateTime(e.utk.previous), this.isNewVisit = e.utk.recovered ? 0 : 1, this.isNewDailyVisitor = !1, this.isNewWeeklyVisitor = !1, this.isNewMonthlyVisitor = !1, this.managePeriodicCookies(e), this.manageFirstVisitCookie(e)
    }, hstc.migrations.MigrationHelper.prototype.managePeriodicCookies = function(e) {
        if (!e.cookiesEnabled) {
            this.isNewDailyVisitor = !0, this.isNewWeeklyVisitor = !0, this.isNewMonthlyVisitor = !0;
            return
        }
        var t = this.cookie.get("hubspotvd");
        t || (this.cookie.set("hubspotvd", this.guid, {
            daysToExpire: 1
        }), this.isNewDailyVisitor = !0);
        var n = this.cookie.get("hubspotvw");
        n || (this.cookie.set("hubspotvw", this.guid, {
            expiryDate: hstc.utils.getNextWeekStart()
        }), this.isNewWeeklyVisitor = !0);
        var r = this.cookie.get("hubspotvm");
        r || (this.cookie.set("hubspotvm", this.guid, {
            expiryDate: hstc.utils.getNextMonthStart()
        }), this.isNewMonthlyVisitor = !0)
    }, hstc.migrations.MigrationHelper.prototype.manageFirstVisitCookie = function(e) {
        if (this.isNewVisit || !this.cookie.get("hsfirstvisit")) {
            this.setLocationAttributes();
            var t = [hstc.utils.encodeParam(hstc.utils.truncateString(this.url, 750)), hstc.utils.encodeParam(hstc.utils.truncateString(this.referer, 750)), hstc.utils.encodeParam(this.hsTimeStamp)].join("|");
            if (!e.cookiesEnabled) {
                this.firstVisitValue = t, this.insertFirstVisitDataIntoForm();
                return
            }
            this.cookie.set("hsfirstvisit", t, {
                daysToExpire: hstc.migrations.MigrationHelper.EXPIRATION,
                alreadyEncoded: !0
            })
        }
        var n = this.cookie.get("hsfirstvisit");
        this.firstVisitValue = this.parseFirstValue(n), n != this.firstVisitValue && this.cookie.set("hsfirstvisit", this.firstVisitValue, {
            daysToExpire: hstc.migrations.MigrationHelper.EXPIRATION,
            alreadyEncoded: !0
        }), this.insertFirstVisitDataIntoForm()
    }, hstc.migrations.MigrationHelper.prototype.parseFirstValue = function(e) {
        try {
            var t = e.split("|"),
                n = hstc.utils.decodeParam(t[2]);
            return dt = this.convertDateTimeToTimestamp(n), [t[0], t[1], hstc.utils.encodeParam(dt)].join("|")
        } catch (r) {
            return e
        }
    }, hstc.migrations.MigrationHelper.prototype.convertTimestampToDateTime = function(e) {
        var t = new Date(parseInt(e));
        t.setMonth(t.getUTCMonth()), t.setDate(t.getUTCDate()), t.setHours(t.getUTCHours() - 5);
        var n = function(e) {
            e ? e = "" + e : e = "";
            while (e.length < 2) e = "0" + e;
            return e
        };
        return t.getFullYear() + "-" + n(t.getMonth() + 1) + "-" + n(t.getDate()) + " " + n(t.getHours()) + ":" + n(t.getMinutes()) + ":" + n(t.getSeconds())
    }, hstc.migrations.MigrationHelper.prototype.convertDateTimeToTimestamp = function(e) {
        try {
            var t = hstc.migrations.MigrationHelper.DATE_TIME_PATTERN.exec(e),
                n = new Date(parseInt(t[1]), parseInt(t[2]) - 1, parseInt(t[3]), parseInt(t[4]), parseInt(t[5]), parseInt(t[6]), 0);
            return n.setUTCMonth(n.getMonth()), n.setUTCDate(n.getDate()), n.setUTCHours(n.getHours() + 4), n.getTime()
        } catch (r) {
            return e
        }
    };
    var hstc = hstc || {};
    hstc.browser = function(e) {
        e = e || new hstc.global.Context;
        var t = e.getNavigator(),
            n = t.userAgent.toLowerCase(),
            r = {
                init: function() {
                    this.browser = this.searchString(this.dataBrowser) || "", this.version = this.searchVersion(t.userAgent) || this.searchVersion(t.appVersion) || "", this.OS = this.searchString(this.dataOS) || ""
                },
                searchString: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t].string,
                            r = e[t].prop;
                        this.versionSearchString = e[t].versionSearch || e[t].identity;
                        if (n) {
                            if (n.indexOf(e[t].subString) !== -1) return e[t].identity;
                            if (r) return e[t].identity
                        }
                    }
                },
                searchVersion: function(e) {
                    var t = e.indexOf(this.versionSearchString);
                    if (t === -1) return;
                    return parseFloat(e.substring(t + this.versionSearchString.length + 1))
                },
                dataBrowser: [{
                    string: t.userAgent,
                    subString: "Chrome",
                    identity: "Chrome"
                }, {
                    string: t.userAgent,
                    subString: "OmniWeb",
                    versionSearch: "OmniWeb/",
                    identity: "OmniWeb"
                }, {
                    string: t.vendor,
                    subString: "Apple",
                    identity: "Safari",
                    versionSearch: "Version"
                }, {
                    prop: window.opera,
                    identity: "Opera"
                }, {
                    string: t.vendor,
                    subString: "iCab",
                    identity: "iCab"
                }, {
                    string: t.vendor,
                    subString: "KDE",
                    identity: "Konqueror"
                }, {
                    string: t.userAgent,
                    subString: "Firefox",
                    identity: "Firefox"
                }, {
                    string: t.vendor,
                    subString: "Camino",
                    identity: "Camino"
                }, {
                    string: t.userAgent,
                    subString: "Netscape",
                    identity: "Netscape"
                }, {
                    string: t.userAgent,
                    subString: "MSIE",
                    identity: "Explorer",
                    versionSearch: "MSIE"
                }, {
                    string: t.userAgent,
                    subString: "Gecko",
                    identity: "Mozilla",
                    versionSearch: "rv"
                }, {
                    string: t.userAgent,
                    subString: "Mozilla",
                    identity: "Netscape",
                    versionSearch: "Mozilla"
                }],
                dataOS: [{
                    string: t.platform,
                    subString: "Win",
                    identity: "Windows"
                }, {
                    string: t.platform,
                    subString: "Mac",
                    identity: "Mac"
                }, {
                    string: t.userAgent,
                    subString: "iPhone",
                    identity: "iPhone/iPod"
                }, {
                    string: t.platform,
                    subString: "Linux",
                    identity: "Linux"
                }]
            };
        r.init(), this.version = (n.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1], this.os = r.OS, this.brand = r.browser, this.webkit = /webkit/.test(n), this.opera = /opera/.test(n), this.msie = /msie/.test(n) && !/opera/.test(n), this.mozilla = /mozilla/.test(n) && !/(compatible|webkit)/.test(n)
    };
    var hstc = hstc || {};
    hstc.tracking = {}, hstc.tracking.Tracker = function(e, t) {
        this.context = e || new hstc.global.Context, this.cookie = t || new hstc.cookies.Cookie(this.context), this.now = hstc.utils.utcnow(), this.session = null, this.utk = null, this.managedCookies = !1, this.cookiesEnabled = !0, this.legacyEnabled = !0, this.limitTrackingToCookieDomains = !1, this.clickSelectors = [], this.userTokenListeners = [], this.cookieListeners = [], this.pageIdListeners = [], this.contentMetadataListeners = [], this.contentTypeListeners = []
    }, hstc.tracking.Tracker.DO_NOT_TRACK = "__hs_do_not_track", hstc.tracking.Tracker.DO_NOT_TRACK_EXPIRATION = 730, hstc.tracking.Tracker.prototype.setPortalId = function(e) {
        this.portalId = e, this._manageCookies()
    }, hstc.tracking.Tracker.prototype.setLegacy = function(e) {
        this.legacyEnabled = e
    }, hstc.tracking.Tracker.prototype.setCanonicalUrl = function(e) {
        this.canonicalUrl = e
    }, hstc.tracking.Tracker.prototype.setRelCanonicalUrl = function() {
        var e = document.getElementsByTagName("link");
        for (var t = 0; t < e.length; t++)
            if (e[t].rel === "canonical") {
                this.relCanonicalUrl = e[t].href;
                return
            }
    }, hstc.tracking.Tracker.prototype.setContentType = function(e) {
        this.contentType = e;
        for (var t = 0; t < this.contentTypeListeners.length; t++) this.contentTypeListeners[t](this.contentType)
    }, hstc.tracking.Tracker.prototype.setPageId = function(e) {
        this.pageId = e;
        for (var t = 0; t < this.pageIdListeners.length; t++) this.pageIdListeners[t](this.pageId)
    }, hstc.tracking.Tracker.prototype.setContentMetadata = function(e) {
        this.contentMetadata = e;
        for (var t = 0; t < this.contentMetadataListeners.length; t++) this.contentMetadataListeners[t](this.contentMetadata)
    }, hstc.tracking.Tracker.prototype.setTargetedContentMetadata = function(e) {
        this.targetedContentMetadata = e
    }, hstc.tracking.Tracker.prototype.setDebugMode = function(e) {
        hstc.debug = e
    }, hstc.tracking.Tracker.prototype.setIsLegacy = function(e) {
        this.isLegacySnippet = e
    }, hstc.tracking.Tracker.prototype.setCookiesToSubdomain = function(e) {
        this.cookie.setCookiesToSubdomain = e
    }, hstc.tracking.Tracker.prototype.setLimitTrackingToCookieDomains = function(e) {
        this.limitTrackingToCookieDomains = e
    }, hstc.tracking.Tracker.prototype.addUserTokenListener = function(e) {
        this.utk && this.utk.visitor && e(this.utk.visitor), this.userTokenListeners.push(e)
    }, hstc.tracking.Tracker.prototype.addCookieListener = function(e) {
        var t = null,
            n = null;
        this.utk && this.utk.visitor && (t = this.utk.get()), this.session && (n = this.session.get()), (t || n) && e(t, n, this._getFingerprint()), this.cookieListeners.push(e)
    }, hstc.tracking.Tracker.prototype.addPageIdListener = function(e) {
        this.pageId && e(this.pageId), this.pageIdListeners.push(e)
    }, hstc.tracking.Tracker.prototype.addContentMetadataListener = function(e) {
        this.contentMetadata && e(this.contentMetadata), this.contentMetadataListeners.push(e)
    }, hstc.tracking.Tracker.prototype.addContentTypeListener = function(e) {
        this.contentType && e(this.contentType), this.contentTypeListeners.push(e)
    }, hstc.tracking.Tracker.prototype.addCookieDomain = function(e) {
        this.cookie.addDomain(e)
    }, hstc.tracking.Tracker.prototype.enableAutomaticLinker = function() {
        var e = this;
        e._manageCookies();
        if (!this.cookie.getDomains() || this.cookie.getDomains().length <= 0) return;
        var t = [];
        hstc.utils.each(this.cookie.getDomains(), function(n, r) {
            if (!e.cookie.currentDomain || e.cookie.currentDomain !== r) {
                var i = r.replace(/\./g, "\\.");
                i.indexOf("\\.") === 0 ? i = i.replace(/^\\\./, "(^|\\.)") : i = "^" + i, t.push(i)
            }
        });
        var n = new RegExp("(" + t.join("|") + ")$");
        hstc.utils.each(hstc.find("a"), function(t, r) {
            if (!e.utk || !e.utk.visitor) return;
            try {
                if (r.hostname && r.hostname !== e.context.getHostName() && r.hostname.match(n)) try {
                    r.href = e.handleLink(r.href, r.target, !0)
                } catch (i) {
                    r && r.href && hstc.utils.logError("Unable to modify link to " + r.href)
                }
            } catch (s) {
                hstc.log("Can't modify a link without a hostname")
            }
        })
    }, hstc.tracking.Tracker.prototype.handleLink = function(e, t, n) {
        var r = e,
            i = this._getFingerprint();
        i !== null && (r = hstc.utils.updateQueryStringParameter(r, "__hstc", this.utk.get()), r = hstc.utils.updateQueryStringParameter(r, "__hssc", this.session.get()), r = hstc.utils.updateQueryStringParameter(r, "__hsfp", i));
        if (n) return r;
        this.context.getWindow().open(r, t || "_self")
    }, hstc.tracking.Tracker.prototype.identify = function(e, t) {
        t || this._manageCookies(), this.identity ? this.identity.merge(e) : this.identity = new hstc.identities.Identity(e)
    }, hstc.tracking.Tracker.prototype.trackPageView = function(e) {
        this._manageCookies(), this.migrationHelper && this.legacyEnabled && this.migrationHelper.trackLegacyPageView(this);
        var t = hstc.utils.mergeObject(e, {
            k: 1
        });
        this._loadImage(t)
    }, hstc.tracking.Tracker.prototype.trackConversion = function(e, t) {
        this._manageCookies();
        if (typeof e == "string" || typeof e == "number") e = {
            id: hstc.utils.safeString(e)
        }, hstc.utils.isDefined(t) && (e = hstc.utils.mergeObject(e, t));
        hstc.utils.isFunction(e.value) && (e.value = e.value(hstc));
        var n = hstc.utils.mergeObject(e, {
            k: 3,
            n: hstc.utils.safeString(e.id),
            m: hstc.utils.safeString(e.value)
        });
        this._loadImage(n)
    }, hstc.tracking.Tracker.prototype.trackEvent = hstc.tracking.Tracker.prototype.trackConversion, hstc.tracking.Tracker.prototype.trackClick = function(e, t, n) {
        hstc.log("trackClick", arguments), this._manageCookies();
        var r = this;
        this.clickSelectors.push(e);
        try {
            hstc.utils.each(hstc.find(e), function(e, i) {
                hstc.log("Attaching mousedown listener to:"), hstc.log(i), hstc.utils.addEventListener(i, "mousedown", function() {
                    try {
                        r.trackEvent(t, n)
                    } catch (e) {
                        hstc.utils.logError(e)
                    }
                })
            })
        } catch (i) {
            hstc.log("Bad selector for " + this.portalId + ": " + e + ", for event " + t)
        }
    }, hstc.tracking.Tracker.prototype.trackFormView = function(e, t) {
        var n = hstc.utils.mergeObject(t, {
            k: 15,
            fi: hstc.utils.safeString(e)
        });
        this._loadImage(n)
    }, hstc.tracking.Tracker.prototype.doNotTrack = function(e) {
        e && e.track ? this.cookie.remove(hstc.tracking.Tracker.DO_NOT_TRACK) : this.cookie.set(hstc.tracking.Tracker.DO_NOT_TRACK, "yes", {
            daysToExpire: hstc.tracking.Tracker.DO_NOT_TRACK_EXPIRATION
        })
    }, hstc.tracking.Tracker.prototype.urlMatches = function(e, t) {
        t || (t = this.context.getDocument().location.toString().toLowerCase()), e = e.toLowerCase();
        if (t == e) return !0;
        if (e.indexOf("?") === -1) {
            var n = t.indexOf("?");
            n !== -1 && (t = t.substring(0, n))
        }
        if (e.indexOf("*") == -1) return e = e.replace(/\/$/, ""), t = t.replace(/\/$/, ""), e == t ? !0 : e.indexOf("/") === 0 ? hstc.utils.removeDomain(t) == e : !1;
        if (e == t) return !0;
        if (e.length === 0) return !1;
        var r = new RegExp("[.+?|()\\[\\]{}\\\\]", "g");
        return regex = e.replace(r, "\\$&").replace(new RegExp("\\*", "g"), "(.*?)"), regex = /\/$/.test(regex) ? "^" + regex + "$" : "^" + regex + "/?$", regex = new RegExp(regex, "i"), regex.test(t) ? !0 : e.indexOf("/") === 0 ? (t = "/" + t.split("//")[1].split("/").splice(1).join("/"), regex.test(t)) : !1
    }, hstc.tracking.Tracker.prototype._manageCookies = function(e, t, n) {
        if (this.managedCookies && !n) return;
        this._extractIdentitiesFromQueryString(), this.utk || (this.utk = e || hstc.tracking.Utk.parse(this.cookie)), this.session || (this.session = t || hstc.tracking.Session.parse(this.cookie)), this.session.isNew() && !n ? this.utk.isNew() || this.utk.rotate(this.session.start) : n || this.session.increment(), this.cookiesEnabled && (this.utk.save(), this.session.save()), this.migrationHelper && this.migrationHelper.manageFirstVisitCookie(this);
        for (var r = 0; r < this.userTokenListeners.length; r++) this.userTokenListeners[r](this.utk.visitor);
        for (var i = 0; i < this.cookieListeners.length; i++) this.cookieListeners[i](this.utk.get(), this.session.get(), this._getFingerprint());
        this.managedCookies = !0
    }, hstc.tracking.Tracker.prototype._extractIdentitiesFromQueryString = function() {
        var e = this.context.getLocation(),
            t, n;
        try {
            t = e.search, n = e.hash
        } catch (r) {
            t = window.location.search, n = window.location.hash
        }
        var i = hstc.utils.deparam(t || n);
        i.__hs_email && this.identify({
            email: hstc.utils.decodeParam(i.__hs_email)
        }, !0);
        if (this.cookie.getDomains().length === 0) return;
        var s = this;
        if (i.__hsfp) {
            var o = parseInt(hstc.utils.safeString(i.__hsfp), 10),
                u = this._getFingerprint();
            if (u === null || u != o) return;
            if (i.__hstc) {
                var a = hstc.tracking.Utk.parse(this.cookie, hstc.utils.safeString(i.__hstc));
                hstc.utils.each(this.cookie.getDomains(), function(e, t) {
                    if (hstc.utils.hashDomain(t) == a.domain) {
                        var n = hstc.tracking.Utk.parse(s.cookie);
                        return !n || !n.recovered ? (s.utk = a, s.utk.resetDomain()) : n.visitor !== a.visitor && (s.utk = n, s.identify({
                            visitor: a.visitor
                        }, !0)), !1
                    }
                })
            }
            if (i.__hssc) {
                var f = hstc.tracking.Session.parse(this.cookie, hstc.utils.safeString(i.__hssc));
                hstc.utils.each(this.cookie.getDomains(), function(e, t) {
                    if (hstc.utils.hashDomain(t) == f.domain) {
                        var n = hstc.tracking.Session.parse(s.cookie);
                        return !n || !n.recovered ? (s.session = f, s.session.resetDomain(), s.session.recovered = !0) : s.session = n.merge(f), !1
                    }
                })
            }
        }
    }, hstc.tracking.Tracker.prototype._loadImage = function(e, t) {
        if (this.limitTrackingToCookieDomains && !this.cookie.currentDomain) {
            try {
                hstc.log("Invalid domain for portal " + this.portalId + ": " + this.context.getHostName())
            } catch (n) {}
            return
        }
        try {
            if (this.cookie.get(hstc.tracking.Tracker.DO_NOT_TRACK) && this.cookie.get(hstc.tracking.Tracker.DO_NOT_TRACK) == "yes") return
        } catch (n) {}
        hstc.log("Sending Request"), e && hstc.log(e), t = t || this._generateURL(e), hstc.log(t), hstc.utils.loadImage(t, 0)
    }, hstc.tracking.Tracker.prototype._generateURL = function(e) {
        var t = "//" + hstc.ANALYTICS_HOST + "/__ptq.gif",
            n = hstc.utils.extend(e, this._getClientInfo(), this._getPageInfo(), this._getUserData());
        return t + "?" + hstc.utils.param(n)
    }, hstc.tracking.Tracker.prototype._getUserData = function() {
        var e = {};
        e.cts = hstc.utils.utcnow(), this.identity && (e.i = hstc.utils.param(this.identity.get())), e.vi = this.utk.visitor, e.nc = this.utk.isNew();
        var t = this.cookie.get(hstc.tracking.Utk.COOKIE);
        hstc.utils.isEmpty(t) || (e.u = t);
        var n = this.cookie.get(hstc.tracking.Session.COOKIE);
        return hstc.utils.isEmpty(n) || (e.b = n), e
    }, hstc.tracking.Tracker.prototype._getPageInfo = function() {
        var e = {};
        e.v = hstc.JS_VERSION, e.a = this.portalId, hstc.utils.isEmpty(this.pageId) || (e.pi = this.pageId), hstc.utils.isEmpty(this.contentType) || (e.ct = this.contentType), hstc.utils.isEmpty(this.canonicalUrl) || (e.ccu = this.canonicalUrl), hstc.utils.isEmpty(this.relCanonicalUrl) || (e.rcu = this.relCanonicalUrl);
        if (!hstc.utils.isEmpty(this.contentMetadata)) {
            var t = this.contentMetadata;
            hstc.utils.isEmpty(t.contentPageId) || (e.cpi = t.contentPageId), hstc.utils.isEmpty(t.contentGroupId) || (e.cgi = t.contentGroupId), hstc.utils.isEmpty(t.legacyPageId) || (e.lpi = t.legacyPageId), hstc.utils.isEmpty(t.abTestId) || (e.abi = t.abTestId), hstc.utils.isEmpty(t.languageVariantId) || (e.lvi = t.languageVariantId), hstc.utils.isEmpty(t.languageCode) || (e.lvc = t.languageCode)
        }
        if (hstc.utils.isArray(this.targetedContentMetadata) && this.targetedContentMetadata.length === 3) {
            e.tc = [];
            for (var n = 0; n < this.targetedContentMetadata.length; n++) {
                var r = this.targetedContentMetadata[n];
                e.tc.push(r[0] + "-" + r[1] + "-" + r[2])
            }
        }
        var i = this.context.getReferrer();
        hstc.utils.isEmpty(i) || (e.r = i);
        var s = this.context.getDocument().title;
        return hstc.utils.isEmpty(s) || (e.t = s), e
    }, hstc.tracking.Tracker.prototype._getClientInfo = function() {
        var e = {}, t = this.context.getScreen();
        t && (e.sd = t.width + "x" + t.height, e.cd = t.colorDepth + "-bit");
        var n = this.context.getCharacterSet();
        hstc.utils.isEmpty(n) || (e.cs = n);
        var r = this.context.getNavigator(),
            i = r.language ? r.language : r.browserLanguage ? r.browserLanguage : "";
        return hstc.utils.isEmpty(i) || (e.ln = hstc.utils.makeLowerCase(i)), hstc.utils.isEmpty(this.isLegacySnippet) || (e.sl = 1), e
    }, hstc.tracking.Tracker.prototype.showTargetedElements = function() {
        hstc.utils.each(this.clickSelectors, function(e, t) {
            hstc.utils.each(hstc.find(t), function(e, t) {
                t._hs_oldStyle = t.style.border, t.style.border = "dotted 2px red"
            })
        })
    }, hstc.tracking.Tracker.prototype.hideTargetedElements = function() {
        var e = function(e, t) {
            hstc.utils.each(hstc.find(t), function(e, t) {
                hstc.utils.isDefined(t._hs_oldStyle) && (t.style.border = t._hs_oldStyle)
            })
        };
        hstc.utils.each(this.clickSelectors, e)
    }, hstc.tracking.Tracker.prototype._handleMigrations = function() {
        var e = new hstc.migrations.MigrationHelper(this.context, this.cookie);
        this.migrationHelper = e, this.addUserTokenListener(function(t) {
            e.insertUserTokenIntoForms.call(e, t)
        });
        if (!this.cookiesEnabled) return;
        this.addUserTokenListener(function(t) {
            e.ensureAnalytics20Utk.call(e, t)
        });
        var t = e.getAnalytics20Utk() || window.hubspotutk,
            n = this.cookie.get(hstc.tracking.Utk.COOKIE);
        if (!hstc.utils.isEmpty(t) && /[0123456789abcdef]{32}/.test(t) && hstc.utils.isEmpty(n)) {
            hstc.log("Migrating utk from a20.");
            var r = hstc.tracking.Utk.parse(this.cookie, t);
            this._manageCookies(r)
        }
    }, hstc.tracking.Tracker.prototype._handlePrivacy = function(e) {
        var t = null,
            n = null,
            r = null,
            i = null,
            s = !1,
            o = !1;
        hstc.utils.search2dArray(e, 1, ["setPrivacyPolicyWording", "setPrivacyAcceptWording", "setPrivacyDismissWording", "setPrivacyDisclaimerWording", "setPrivacyActive", "setPrivacyHideDecline"], function(u, a) {
            var f = u[0];
            f === "setPrivacyPolicyWording" ? t = u[1] : f === "setPrivacyAcceptWording" ? n = u[1] : f === "setPrivacyDismissWording" ? r = u[1] : f == "setPrivacyDisclaimerWording" ? i = u[1] : f == "setPrivacyActive" ? s = u[1] : f == "setPrivacyHideDecline" && (o = u[1]), delete e[a]
        });
        var u = this;
        hstc.utils.search2dArray(e, 1, ["setPrivacyPolicy"], function(a, f) {
            a[1](u, hstc, s, t, n, r, i, o), delete e[f]
        })
    }, hstc.tracking.Tracker.prototype._getFingerprint = function() {
        try {
            return (new hstc.Fingerprint).get()
        } catch (e) {
            return hstc.utils.logError(e), null
        }
    }, hstc.tracking.Utk = function(e, t, n, r, i, s, o, u) {
        this.context = e ? e.context : new hstc.global.Context, this.cookie = e || new hstc.cookies.Cookie(this.context), this.rawDomain = this.cookie.currentDomain || hstc.utils.extractDomain(this.context.getHostName()), this.domain = t && !u ? t : hstc.utils.hashDomain(this.rawDomain), this.visitor = n ? n.toLowerCase() : Math.uuid(), this.initial = r || hstc.utils.utcnow(), this.previous = i || hstc.utils.utcnow(), this.current = s || hstc.utils.utcnow(), this.session = o || 1, this.recovered = u
    }, hstc.tracking.Utk.COOKIE = "__hstc", hstc.tracking.Utk.EXPIRATION = 730, hstc.tracking.Utk.parse = function(e, t) {
        var n = e ? e.context : new hstc.global.Context;
        e = e || new hstc.cookies.Cookie(n);
        var r = t ? !1 : !0;
        t = t || e.get(hstc.tracking.Utk.COOKIE);
        try {
            var i = t.split(".");
            if (i.length == 6 && i[1].length > 0) return i[5] = parseInt(i[5], 10), new hstc.tracking.Utk(e, i[0], i[1], i[2], i[3], i[4], i[5], r);
            if (i.length == 1 && i[0].length > 0) return new hstc.tracking.Utk(e, null, i[0], null, null, null, null, !0)
        } catch (s) {}
        return new hstc.tracking.Utk(e)
    }, hstc.tracking.Utk.prototype.isNew = function() {
        return !this.recovered
    }, hstc.tracking.Utk.prototype.rotate = function(e) {
        this.previous = this.current || e, this.current = e, this.session += 1
    }, hstc.tracking.Utk.prototype.get = function() {
        var e = [this.domain, this.visitor, this.initial, this.previous, this.current, this.session];
        return e.join(".")
    }, hstc.tracking.Utk.prototype.save = function() {
        this.cookie.set(hstc.tracking.Utk.COOKIE, this.get(), {
            daysToExpire: hstc.tracking.Utk.EXPIRATION
        })
    }, hstc.tracking.Utk.prototype.resetDomain = function() {
        this.domain = hstc.utils.hashDomain(this.rawDomain)
    }, hstc.tracking.Session = function(e, t, n, r, i) {
        this.context = e ? e.context : new hstc.global.Context, this.cookie = e || new hstc.cookies.Cookie(this.context), this.rawDomain = this.cookie.currentDomain || hstc.utils.extractDomain(this.context.getHostName()), this.domain = t && !i ? t : hstc.utils.hashDomain(this.rawDomain), this.viewCount = n || 1, this.start = r || hstc.utils.utcnow(), this.recovered = i
    }, hstc.tracking.Session.COOKIE = "__hssc", hstc.tracking.Session.RESTART_COOKIE = "__hssrc", hstc.tracking.Session.prototype.isNew = function() {
        return this.recovered !== !0
    }, hstc.tracking.Session.parse = function(e, t) {
        var n = e ? e.context : new hstc.global.Context;
        e = e || new hstc.cookies.Cookie(n);
        var r = t ? !1 : !0;
        if (t || e.get(hstc.tracking.Session.RESTART_COOKIE) === "1") {
            t = t || e.get(hstc.tracking.Session.COOKIE);
            try {
                var i = t.split(".");
                if (i.length == 3) return new hstc.tracking.Session(e, i[0], i[1], i[2], r)
            } catch (s) {}
        }
        return new hstc.tracking.Session(e)
    }, hstc.tracking.Session.prototype.increment = function() {
        try {
            this.viewCount = parseInt(this.viewCount || 1, 10) + 1
        } catch (e) {
            this.viewCount = 1
        }
    }, hstc.tracking.Session.prototype.get = function() {
        var e = [this.domain, this.viewCount, this.start];
        return e.join(".")
    }, hstc.tracking.Session.prototype.save = function() {
        this.cookie.set(hstc.tracking.Session.RESTART_COOKIE, "1"), this.cookie.set(hstc.tracking.Session.COOKIE, this.get(), {
            minsToExpire: 30
        })
    }, hstc.tracking.Session.prototype.merge = function(e) {
        return e.start && e.start < this.start && (this.start = e.start), e.viewCount && (this.viewCount += e.viewCount), this
    }, hstc.tracking.Session.prototype.resetDomain = function() {
        this.domain = hstc.utils.hashDomain(this.rawDomain)
    },
    function(e) {
        function it(e, t, r, i) {
            var s, o, u, a, f, h, v, m, w, E;
            (t ? t.ownerDocument || t : b) !== c && l(t), t = t || c, r = r || [];
            if (!e || typeof e != "string") return r;
            if ((a = t.nodeType) !== 1 && a !== 9) return [];
            if (p && !i) {
                if (s = G.exec(e))
                    if (u = s[1]) {
                        if (a === 9) {
                            o = t.getElementById(u);
                            if (!o || !o.parentNode) return r;
                            if (o.id === u) return r.push(o), r
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) return r.push(o), r
                    } else {
                        if (s[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                        if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(r, t.getElementsByClassName(u)), r
                    }
                if (n.qsa && (!d || !d.test(e))) {
                    m = v = y, w = t, E = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        h = dt(e), (v = t.getAttribute("id")) ? m = v.replace(et, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = h.length;
                        while (f--) h[f] = m + vt(h[f]);
                        w = X.test(e) && t.parentNode || t, E = h.join(",")
                    }
                    if (E) try {
                        return D.apply(r, w.querySelectorAll(E)), r
                    } catch (S) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return xt(e.replace(U, "$1"), t, r, i)
        }

        function st() {
            function t(n, r) {
                return e.push(n += " ") > i.cacheLength && delete t[e.shift()], t[n] = r
            }
            var e = [];
            return t
        }

        function ot(e) {
            return e[y] = !0, e
        }

        function ut(e) {
            var t = c.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function at(e, t) {
            var n = e.split("|"),
                r = e.length;
            while (r--) i.attrHandle[n[r]] = t
        }

        function ft(e, t) {
            var n = t && e,
                r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || L) - (~e.sourceIndex || L);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function ct(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function ht(e) {
            return ot(function(t) {
                return t = +t, ot(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function pt() {}

        function dt(e, t) {
            var n, r, s, o, u, a, f, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                if (!n || (r = z.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = W.exec(u)) n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(U, " ")
                }), u = u.slice(n.length);
                for (o in i.filter)(r = K[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? it.error(e) : x(e, a).slice(0)
        }

        function vt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function mt(e, t, n) {
            var i = t.dir,
                s = n && i === "parentNode",
                o = E++;
            return t.first ? function(t, n, r) {
                while (t = t[i])
                    if (t.nodeType === 1 || s) return e(t, n, r)
            } : function(t, n, u) {
                var a, f, l, c = w + " " + o;
                if (u) {
                    while (t = t[i])
                        if (t.nodeType === 1 || s)
                            if (e(t, n, u)) return !0
                } else
                    while (t = t[i])
                        if (t.nodeType === 1 || s) {
                            l = t[y] || (t[y] = {});
                            if ((f = l[i]) && f[0] === c) {
                                if ((a = f[1]) === !0 || a === r) return a === !0
                            } else {
                                f = l[i] = [c], f[1] = e(t, n, u) || r;
                                if (f[1] === !0) return !0
                            }
                        }
            }
        }

        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function yt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function bt(e, t, n, r, i, s) {
            return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, s)), ot(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || St(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? yt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = yt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? H.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = yt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : D.apply(o, g)
            })
        }

        function wt(e) {
            var t, n, r, s = e.length,
                o = i.relative[e[0].type],
                u = o || i.relative[" "],
                f = o ? 1 : 0,
                l = mt(function(e) {
                    return e === t
                }, u, !0),
                c = mt(function(e) {
                    return H.call(t, e) > -1
                }, u, !0),
                h = [
                    function(e, n, r) {
                        return !o && (r || n !== a) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }
                ];
            for (; f < s; f++)
                if (n = i.relative[e[f].type]) h = [mt(gt(h), n)];
                else {
                    n = i.filter[e[f].type].apply(null, e[f].matches);
                    if (n[y]) {
                        r = ++f;
                        for (; r < s; r++)
                            if (i.relative[e[r].type]) break;
                        return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
                            value: e[f - 2].type === " " ? "*" : ""
                        })).replace(U, "$1"), n, f < r && wt(e.slice(f, r)), r < s && wt(e = e.slice(r)), r < s && vt(e))
                    }
                    h.push(n)
                }
            return gt(h)
        }

        function Et(e, t) {
            var n = 0,
                s = t.length > 0,
                o = e.length > 0,
                u = function(u, f, l, h, p) {
                    var d, v, m, g = [],
                        y = 0,
                        b = "0",
                        E = u && [],
                        S = p != null,
                        x = a,
                        T = u || o && i.find.TAG("*", p && f.parentNode || f),
                        N = w += x == null ? 1 : Math.random() || .1,
                        C = T.length;
                    S && (a = f !== c && f, r = n);
                    for (; b !== C && (d = T[b]) != null; b++) {
                        if (o && d) {
                            v = 0;
                            while (m = e[v++])
                                if (m(d, f, l)) {
                                    h.push(d);
                                    break
                                }
                            S && (w = N, r = ++n)
                        }
                        s && ((d = !m && d) && y--, u && E.push(d))
                    }
                    y += b;
                    if (s && b !== y) {
                        v = 0;
                        while (m = t[v++]) m(E, g, f, l);
                        if (u) {
                            if (y > 0)
                                while (b--)!E[b] && !g[b] && (g[b] = M.call(h));
                            g = yt(g)
                        }
                        D.apply(h, g), S && !u && g.length > 0 && y + t.length > 1 && it.uniqueSort(h)
                    }
                    return S && (w = N, a = x), E
                };
            return s ? ot(u) : u
        }

        function St(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) it(e, t[r], n);
            return n
        }

        function xt(e, t, r, s) {
            var o, a, f, l, c, h = dt(e);
            if (!s && h.length === 1) {
                a = h[0] = h[0].slice(0);
                if (a.length > 2 && (f = a[0]).type === "ID" && n.getById && t.nodeType === 9 && p && i.relative[a[1].type]) {
                    t = (i.find.ID(f.matches[0].replace(tt, nt), t) || [])[0];
                    if (!t) return r;
                    e = e.slice(a.shift().value.length)
                }
                o = K.needsContext.test(e) ? 0 : a.length;
                while (o--) {
                    f = a[o];
                    if (i.relative[l = f.type]) break;
                    if (c = i.find[l])
                        if (s = c(f.matches[0].replace(tt, nt), X.test(a[0].type) && t.parentNode || t)) {
                            a.splice(o, 1), e = s.length && vt(a);
                            if (!e) return D.apply(r, s), r;
                            break
                        }
                }
            }
            return u(e, h)(s, t, !p, r, X.test(e)), r
        }

        function Tt(e) {
            if (!e) return null;
            var t = /\[\w+(\*|\$|\||~|!|\^)?=(.+)]/,
                n = t.test(e);
            if (n) {
                n = t.exec(e);
                if (n && n.length == 3) {
                    var r = /'.+'/,
                        i = /".+"/;
                    if (!r.test(n[2]) && !i.test(n[2])) return e.replace("=" + n[2], "='" + n[2] + "'")
                }
            }
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date),
            b = e.document,
            w = 0,
            E = 0,
            S = st(),
            x = st(),
            T = st(),
            N = !1,
            C = function(e, t) {
                return e === t ? (N = !0, 0) : 0
            }, k = typeof undefined,
            L = 1 << 31,
            A = {}.hasOwnProperty,
            O = [],
            M = O.pop,
            _ = O.push,
            D = O.push,
            P = O.slice,
            H = O.indexOf || function(e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            I = F.replace("w", "w#"),
            q = "\\[" + j + "*(" + F + ")" + j + "*(?:([*^$|!~]?=)" + j + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + I + ")|)|)" + j + "*\\]",
            R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + q.replace(3, 8) + ")*)|.*)\\)|)",
            U = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            z = new RegExp("^" + j + "*," + j + "*"),
            W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            X = new RegExp(j + "*[+~]"),
            V = new RegExp("=" + j + "*([^\\]'\"]*)" + j + "*\\]", "g"),
            $ = new RegExp(R),
            J = new RegExp("^" + I + "$"),
            K = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + B + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            }, Q = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            et = /'|\\/g,
            tt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
            nt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            D.apply(O = P.call(b.childNodes), b.childNodes), O[b.childNodes.length].nodeType
        } catch (rt) {
            D = {
                apply: O.length ? function(e, t) {
                    _.apply(e, P.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        o = it.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, n = it.support = {}, l = it.setDocument = function(e) {
            var t = e ? e.ownerDocument || e : b,
                r = t.defaultView;
            if (t === c || t.nodeType !== 9 || !t.documentElement) return c;
            c = t, h = t.documentElement, p = !o(t), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function() {
                l()
            }), n.attributes = ut(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ut(function(e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
            }), n.getById = ut(function(e) {
                return h.appendChild(e).id = y, !t.getElementsByName || !t.getElementsByName(y).length
            }), n.getById ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== k && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(tt, nt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete i.find.ID, i.filter.ID = function(e) {
                var t = e.replace(tt, nt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== k && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== k) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== k && p) return t.getElementsByClassName(e)
            }, v = [], d = [];
            if (n.qsa = Q.test(t.querySelectorAll)) ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + j + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ut(function(e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            });
            return (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ut(function(e) {
                n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", R)
            }), d = d.length && new RegExp(d.join("|")), v = v.length && new RegExp(v.join("|")), g = Q.test(h.contains) || h.compareDocumentPosition ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !! r && r.nodeType === 1 && !! (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, C = h.compareDocumentPosition ? function(e, r) {
                if (e === r) return N = !0, 0;
                var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
                if (i) return i & 1 || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || g(b, e) ? -1 : r === t || g(b, r) ? 1 : f ? H.call(f, e) - H.call(f, r) : 0 : i & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1
            } : function(e, n) {
                var r, i = 0,
                    s = e.parentNode,
                    o = n.parentNode,
                    u = [e],
                    a = [n];
                if (e === n) return N = !0, 0;
                if (!s || !o) return e === t ? -1 : n === t ? 1 : s ? -1 : o ? 1 : f ? H.call(f, e) - H.call(f, n) : 0;
                if (s === o) return ft(e, n);
                r = e;
                while (r = r.parentNode) u.unshift(r);
                r = n;
                while (r = r.parentNode) a.unshift(r);
                while (u[i] === a[i]) i++;
                return i ? ft(u[i], a[i]) : u[i] === b ? -1 : a[i] === b ? 1 : 0
            }, t
        }, it.matches = function(e, t) {
            return it(e, null, null, t)
        }, it.matchesSelector = function(e, t) {
            (e.ownerDocument || e) !== c && l(e), t = t.replace(V, "='$1']");
            if (n.matchesSelector && p && (!v || !v.test(t)) && (!d || !d.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
            } catch (i) {}
            return it(t, c, null, [e]).length > 0
        }, it.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, it.attr = function(e, t) {
            (e.ownerDocument || e) !== c && l(e);
            var r = i.attrHandle[t.toLowerCase()],
                s = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !p) : undefined;
            return s === undefined ? n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null : s
        }, it.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, it.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                s = 0;
            N = !n.detectDuplicates, f = !n.sortStable && e.slice(0), e.sort(C);
            if (N) {
                while (t = e[s++]) t === e[s] && (i = r.push(s));
                while (i--) e.splice(r[i], 1)
            }
            return e
        }, s = it.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                for (; t = e[r]; r++) n += s(t);
            else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
            } else if (i === 3 || i === 4) return e.nodeValue;
            return n
        }, i = it.selectors = {
            cacheLength: 50,
            createPseudo: ot,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(tt, nt), e[3] = (e[4] || e[5] || "").replace(tt, nt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || it.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && it.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return K.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && $.test(n) && (t = dt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(tt, nt).toLowerCase();
                    return e === "*" ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && S(e, function(e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== k && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = it.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                        o = e.slice(-4) !== "last",
                        u = t === "of-type";
                    return r === 1 && i === 0 ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            b = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && b) {
                                l = m[y] || (m[y] = {}), f = l[e] || [], p = f[0] === w && f[1], h = f[0] === w && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [w, p, h];
                                        break
                                    }
                            } else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        b && ((c[y] || (c[y] = {}))[e] = [w, h]);
                                        if (c === t) break
                                    } return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || it.error("unsupported pseudo: " + e);
                    return r[y] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = H.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ot(function(e) {
                    var t = [],
                        n = [],
                        r = u(e.replace(U, "$1"));
                    return r[y] ? ot(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: ot(function(e) {
                    return function(t) {
                        return it(e, t).length > 0
                    }
                }),
                contains: ot(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                lang: ot(function(e) {
                    return J.test(e || "") || it.error("unsupported lang: " + e), e = e.replace(tt, nt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !! e.checked || t === "option" && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return Z.test(e.nodeName)
                },
                input: function(e) {
                    return Y.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        }, i.pseudos.nth = i.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = lt(t);
        for (t in {
            submit: !0,
            reset: !0
        }) i.pseudos[t] = ct(t);
        pt.prototype = i.filters = i.pseudos, i.setFilters = new pt, u = it.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = T[e + " "];
            if (!s) {
                t || (t = dt(e)), n = t.length;
                while (n--) s = wt(t[n]), s[y] ? r.push(s) : i.push(s);
                s = T(e, Et(i, r))
            }
            return s
        }, n.sortStable = y.split("").sort(C).join("") === y, n.detectDuplicates = N, l(), n.sortDetached = ut(function(e) {
            return e.compareDocumentPosition(c.createElement("div")) & 1
        }), ut(function(e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || at("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!n.attributes || !ut(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && at("value", function(e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        }), ut(function(e) {
            return e.getAttribute("disabled") == null
        }) || at(B, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), hstc.find = function() {
            try {
                return it.apply(null, arguments)
            } catch (e) {
                var t = Tt(arguments[0]);
                if (t) return arguments[0] = t, it.apply(null, arguments);
                throw e
            }
        }, hstc.expr = it.selectors, hstc.expr[":"] = hstc.expr.filters, hstc.unique = it.uniqueSort, hstc.text = it.getText, hstc.isXMLDoc = it.isXML, hstc.contains = it.contains
    }(window),
    function(e) {
        "use strict";
        var t = function(e) {
            var t = Array.prototype.forEach,
                n = Array.prototype.map;
            this.each = function(e, n, r) {
                if (e === null) return;
                if (t && e.forEach === t) e.forEach(n, r);
                else if (e.length === +e.length) {
                    for (var i = 0, s = e.length; i < s; i++)
                        if (n.call(r, e[i], i, e) === {}) return
                } else
                    for (var o in e)
                        if (e.hasOwnProperty(o) && n.call(r, e[o], o, e) === {}) return
            }, this.map = function(e, t, r) {
                var i = [];
                return e == null ? i : n && e.map === n ? e.map(t, r) : (this.each(e, function(e, n, s) {
                    i[i.length] = t.call(r, e, n, s)
                }), i)
            }, typeof e == "object" ? this.hasher = e.hasher : typeof e == "function" && (this.hasher = e)
        };
        t.prototype = {
            get: function() {
                var e = [];
                e.push(navigator.userAgent), e.push(navigator.language), e.push(screen.colorDepth), e.push((new Date).getTimezoneOffset()), e.push( !! window.sessionStorage), e.push(this.hasLocalStorage()), e.push( !! window.indexedDB), e.push(typeof document.body.addBehavior), e.push(typeof window.openDatabase), e.push(navigator.cpuClass), e.push(navigator.platform), e.push(navigator.doNotTrack);
                var t = this.map(navigator.plugins, function(e) {
                    var t = this.map(e, function(e) {
                        return [e.type, e.suffixes].join("~")
                    }).join(",");
                    return [e.name, e.description, t].join("::")
                }, this).join(";");
                return e.push(t), this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31)
            },
            murmurhash3_32_gc: function(e, t) {
                var n, r, i, s, o, u, a, f;
                n = e.length & 3, r = e.length - n, i = t, o = 3432918353, u = 461845907, f = 0;
                while (f < r) a = e.charCodeAt(f) & 255 | (e.charCodeAt(++f) & 255) << 8 | (e.charCodeAt(++f) & 255) << 16 | (e.charCodeAt(++f) & 255) << 24, ++f, a = (a & 65535) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = (a & 65535) * u + (((a >>> 16) * u & 65535) << 16) & 4294967295, i ^= a, i = i << 13 | i >>> 19, s = (i & 65535) * 5 + (((i >>> 16) * 5 & 65535) << 16) & 4294967295, i = (s & 65535) + 27492 + (((s >>> 16) + 58964 & 65535) << 16);
                a = 0;
                switch (n) {
                    case 3:
                        a ^= (e.charCodeAt(f + 2) & 255) << 16;
                    case 2:
                        a ^= (e.charCodeAt(f + 1) & 255) << 8;
                    case 1:
                        a ^= e.charCodeAt(f) & 255, a = (a & 65535) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = (a & 65535) * u + (((a >>> 16) * u & 65535) << 16) & 4294967295, i ^= a
                }
                return i ^= e.length, i ^= i >>> 16, i = (i & 65535) * 2246822507 + (((i >>> 16) * 2246822507 & 65535) << 16) & 4294967295, i ^= i >>> 13, i = (i & 65535) * 3266489909 + (((i >>> 16) * 3266489909 & 65535) << 16) & 4294967295, i ^= i >>> 16, i >>> 0
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            }
        }, e.Fingerprint = t
    }(hstc);
    var PRIORITY_FUNCTIONS = ["setPortalId", "setCanonicalUrl", "setContentType", "setPageId", "identify", "setDebugMode", "setLegacy", "setLimitTrackingToCookieDomains"],
        hsq = "_hsq",
        ran_param = "_hstc_ran",
        loaded_param = "_hstc_loaded";
    try {
        var context = new hstc.global.Context,
            tracker = new hstc.tracking.Tracker(context);

        function __push(e) {
            try {
                if (typeof e == "function") e(tracker, hstc);
                else if (e && hstc.utils.isArray(e) && tracker[e[0]]) return tracker[e[0]].apply(tracker, e.slice(1))
            } catch (t) {
                hstc.utils.logError(t)
            }
        }
        var win = context.getWindow(),
            queue = win[hsq];
        hstc.utils.isArray(queue) || (queue = []), win[loaded_param] = !0;
        var ran = win[ran_param] || !1;

        function process() {
            if (!ran) {
                ran = win[ran_param] = !0, hstc.log("Processing HSQ"), hstc.utils.search2dArray(queue, 1, ["setCookiesToSubdomain", "addCookieDomain"], __push), tracker._handlePrivacy(queue), tracker._handleMigrations(), tracker.setRelCanonicalUrl(), hstc.utils.search2dArray(queue, 1, PRIORITY_FUNCTIONS, __push);
                while (queue.length) __push(queue.shift());
                queue.push = __push
            }
        }

        function run() {
            var e = context.getDocument();
            return !e.readyState || e.readyState == "complete" || e.addEventListener && e.readyState == "loaded" ? (process(), !0) : !1
        }
        run() || hstc.utils.addEventListener(win, "load", process, !0)
    } catch (err2) {
        hstc.utils.logError(err2)
    };

})(); /** _anon_wrapper_ **/