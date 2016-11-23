/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
! function(t, e) {
    function i(t) {
        var e = t.length,
            i = ue.type(t);
        return ue.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t) {
        var e = De[t] = {};
        return ue.each(t.match(de) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function s(t, i, n, s) {
        if (ue.acceptData(t)) {
            var o, r, a = ue.expando,
                l = t.nodeType,
                h = l ? ue.cache : t,
                u = l ? t[a] : t[a] && a;
            if (u && h[u] && (s || h[u].data) || n !== e || "string" != typeof i) return u || (u = l ? t[a] = ee.pop() || ue.guid++ : a), h[u] || (h[u] = l ? {} : {
                toJSON: ue.noop
            }), ("object" == typeof i || "function" == typeof i) && (s ? h[u] = ue.extend(h[u], i) : h[u].data = ue.extend(h[u].data, i)), r = h[u], s || (r.data || (r.data = {}), r = r.data), n !== e && (r[ue.camelCase(i)] = n), "string" == typeof i ? (o = r[i], null == o && (o = r[ue.camelCase(i)])) : o = r, o
        }
    }

    function o(t, e, i) {
        if (ue.acceptData(t)) {
            var n, s, o = t.nodeType,
                r = o ? ue.cache : t,
                l = o ? t[ue.expando] : ue.expando;
            if (r[l]) {
                if (e && (n = i ? r[l] : r[l].data)) {
                    ue.isArray(e) ? e = e.concat(ue.map(e, ue.camelCase)) : e in n ? e = [e] : (e = ue.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !a(n) : !ue.isEmptyObject(n)) return
                }(i || (delete r[l].data, a(r[l]))) && (o ? ue.cleanData([t], !0) : ue.support.deleteExpando || r != r.window ? delete r[l] : r[l] = null)
            }
        }
    }

    function r(t, i, n) {
        if (n === e && 1 === t.nodeType) {
            var s = "data-" + i.replace(Se, "-$1").toLowerCase();
            if (n = t.getAttribute(s), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Te.test(n) ? ue.parseJSON(n) : n
                } catch (o) {}
                ue.data(t, i, n)
            } else n = e
        }
        return n
    }

    function a(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ue.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function h() {
        return !1
    }

    function u() {
        try {
            return Q.activeElement
        } catch (t) {}
    }

    function c(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function d(t, e, i) {
        if (ue.isFunction(e)) return ue.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return ue.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (Be.test(e)) return ue.filter(e, t, i);
            e = ue.filter(e, t)
        }
        return ue.grep(t, function(t) {
            return ue.inArray(t, e) >= 0 !== i
        })
    }

    function p(t) {
        var e = Ue.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function f(t, e) {
        return ue.nodeName(t, "table") && ue.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function g(t) {
        return t.type = (null !== ue.find.attr(t, "type")) + "/" + t.type, t
    }

    function m(t) {
        var e = si.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function v(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) ue._data(i, "globalEval", !e || ue._data(e[n], "globalEval"))
    }

    function b(t, e) {
        if (1 === e.nodeType && ue.hasData(t)) {
            var i, n, s, o = ue._data(t),
                r = ue._data(e, o),
                a = o.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a)
                    for (n = 0, s = a[i].length; s > n; n++) ue.event.add(e, i, a[i][n])
            }
            r.data && (r.data = ue.extend({}, r.data))
        }
    }

    function y(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ue.support.noCloneEvent && e[ue.expando]) {
                s = ue._data(e);
                for (n in s.events) ue.removeEvent(e, n, s.handle);
                e.removeAttribute(ue.expando)
            }
            "script" === i && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ue.support.html5Clone && t.innerHTML && !ue.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ei.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function _(t, i) {
        var n, s, o = 0,
            r = typeof t.getElementsByTagName !== X ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== X ? t.querySelectorAll(i || "*") : e;
        if (!r)
            for (r = [], n = t.childNodes || t; null != (s = n[o]); o++) !i || ue.nodeName(s, i) ? r.push(s) : ue.merge(r, _(s, i));
        return i === e || i && ue.nodeName(t, i) ? ue.merge([t], r) : r
    }

    function w(t) {
        ei.test(t.type) && (t.defaultChecked = t.checked)
    }

    function x(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = Ci.length; s--;)
            if (e = Ci[s] + i, e in t) return e;
        return n
    }

    function k(t, e) {
        return t = e || t, "none" === ue.css(t, "display") || !ue.contains(t.ownerDocument, t)
    }

    function C(t, e) {
        for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (o[r] = ue._data(n, "olddisplay"), i = n.style.display, e ? (!o[r] && "none" === i && (n.style.display = ""), "" === n.style.display && k(n) && (o[r] = ue._data(n, "olddisplay", I(n.nodeName)))) : o[r] || (s = k(n), (i && "none" !== i || !s) && ue._data(n, "olddisplay", s ? i : ue.css(n, "display"))));
        for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
        return t
    }

    function D(t, e, i) {
        var n = vi.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function T(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += ue.css(t, i + ki[o], !0, s)), n ? ("content" === i && (r -= ue.css(t, "padding" + ki[o], !0, s)), "margin" !== i && (r -= ue.css(t, "border" + ki[o] + "Width", !0, s))) : (r += ue.css(t, "padding" + ki[o], !0, s), "padding" !== i && (r += ue.css(t, "border" + ki[o] + "Width", !0, s)));
        return r
    }

    function S(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = ui(t),
            r = ue.support.boxSizing && "border-box" === ue.css(t, "boxSizing", !1, o);
        if (0 >= s || null == s) {
            if (s = ci(t, e, o), (0 > s || null == s) && (s = t.style[e]), bi.test(s)) return s;
            n = r && (ue.support.boxSizingReliable || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + T(t, e, i || (r ? "border" : "content"), n, o) + "px"
    }

    function I(t) {
        var e = Q,
            i = _i[t];
        return i || (i = M(t, e), "none" !== i && i || (hi = (hi || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (hi[0].contentWindow || hi[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = M(t, e), hi.detach()), _i[t] = i), i
    }

    function M(t, e) {
        var i = ue(e.createElement(t)).appendTo(e.body),
            n = ue.css(i[0], "display");
        return i.remove(), n
    }

    function P(t, e, i, n) {
        var s;
        if (ue.isArray(e)) ue.each(e, function(e, s) {
            i || Ti.test(t) ? n(t, s) : P(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== ue.type(e)) n(t, e);
        else
            for (s in e) P(t + "[" + s + "]", e[s], i, n)
    }

    function N(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                o = e.toLowerCase().match(de) || [];
            if (ue.isFunction(i))
                for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function E(t, e, i, n) {
        function s(a) {
            var l;
            return o[a] = !0, ue.each(t[a] || [], function(t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
            }), l
        }
        var o = {},
            r = t === qi;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function A(t, i) {
        var n, s, o = ue.ajaxSettings.flatOptions || {};
        for (s in i) i[s] !== e && ((o[s] ? t : n || (n = {}))[s] = i[s]);
        return n && ue.extend(!0, t, n), t
    }

    function H(t, i, n) {
        for (var s, o, r, a, l = t.contents, h = t.dataTypes;
            "*" === h[0];) h.shift(), o === e && (o = t.mimeType || i.getResponseHeader("Content-Type"));
        if (o)
            for (a in l)
                if (l[a] && l[a].test(o)) {
                    h.unshift(a);
                    break
                }
        if (h[0] in n) r = h[0];
        else {
            for (a in n) {
                if (!h[0] || t.converters[a + " " + h[0]]) {
                    r = a;
                    break
                }
                s || (s = a)
            }
            r = r || s
        }
        return r ? (r !== h[0] && h.unshift(r), n[r]) : void 0
    }

    function z(t, e, i, n) {
        var s, o, r, a, l, h = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
        for (o = u.shift(); o;)
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift(), o)
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (r = h[l + " " + o] || h["* " + o], !r)
                for (s in h)
                    if (a = s.split(" "), a[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                        r === !0 ? r = h[s] : h[s] !== !0 && (o = a[0], u.unshift(a[1]));
                        break
                    }
            if (r !== !0)
                if (r && t["throws"]) e = r(e);
                else try {
                    e = r(e)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: r ? c : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function W() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function O() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function j() {
        return setTimeout(function() {
            Ji = e
        }), Ji = ue.now()
    }

    function L(t, e, i) {
        for (var n, s = (on[e] || []).concat(on["*"]), o = 0, r = s.length; r > o; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function F(t, e, i) {
        var n, s, o = 0,
            r = sn.length,
            a = ue.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Ji || j(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, r = 0, l = h.tweens.length; l > r; r++) h.tweens[r].run(o);
                return a.notifyWith(t, [h, o, i]), 1 > o && l ? i : (a.resolveWith(t, [h]), !1)
            },
            h = a.promise({
                elem: t,
                props: ue.extend({}, e),
                opts: ue.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Ji || j(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = ue.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? h.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) h.tweens[i].run(1);
                    return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                }
            }),
            u = h.props;
        for (R(u, h.opts.specialEasing); r > o; o++)
            if (n = sn[o].call(h, t, u, h.opts)) return n;
        return ue.map(u, L, h), ue.isFunction(h.opts.start) && h.opts.start.call(t, h), ue.fx.timer(ue.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function R(t, e) {
        var i, n, s, o, r;
        for (i in t)
            if (n = ue.camelCase(i), s = e[n], o = t[i], ue.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = ue.cssHooks[n], r && "expand" in r) {
                o = r.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = s)
            } else e[n] = s
    }

    function B(t, e, i) {
        var n, s, o, r, a, l, h = this,
            u = {},
            c = t.style,
            d = t.nodeType && k(t),
            p = ue._data(t, "fxshow");
        i.queue || (a = ue._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, ue.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [c.overflow, c.overflowX, c.overflowY], "inline" === ue.css(t, "display") && "none" === ue.css(t, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== I(t.nodeName) ? c.zoom = 1 : c.display = "inline-block")), i.overflow && (c.overflow = "hidden", ue.support.shrinkWrapBlocks || h.always(function() {
            c.overflow = i.overflow[0], c.overflowX = i.overflow[1], c.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (s = e[n], tn.exec(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (d ? "hide" : "show")) continue;
                u[n] = p && p[n] || ue.style(t, n)
            }
        if (!ue.isEmptyObject(u)) {
            p ? "hidden" in p && (d = p.hidden) : p = ue._data(t, "fxshow", {}), o && (p.hidden = !d), d ? ue(t).show() : h.done(function() {
                ue(t).hide()
            }), h.done(function() {
                var e;
                ue._removeData(t, "fxshow");
                for (e in u) ue.style(t, e, u[e])
            });
            for (n in u) r = L(d ? p[n] : 0, n, h), n in p || (p[n] = r.start, d && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function q(t, e, i, n, s) {
        return new q.prototype.init(t, e, i, n, s)
    }

    function Y(t, e) {
        var i, n = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = ki[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function $(t) {
        return ue.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var U, K, X = typeof e,
        V = t.location,
        Q = t.document,
        G = Q.documentElement,
        J = t.jQuery,
        Z = t.$,
        te = {},
        ee = [],
        ie = "1.10.2",
        ne = ee.concat,
        se = ee.push,
        oe = ee.slice,
        re = ee.indexOf,
        ae = te.toString,
        le = te.hasOwnProperty,
        he = ie.trim,
        ue = function(t, e) {
            return new ue.fn.init(t, e, K)
        },
        ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        de = /\S+/g,
        pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        me = /^[\],:{}\s]*$/,
        ve = /(?:^|:|,)(?:\s*\[)+/g,
        be = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        _e = /^-ms-/,
        we = /-([\da-z])/gi,
        xe = function(t, e) {
            return e.toUpperCase()
        },
        ke = function(t) {
            (Q.addEventListener || "load" === t.type || "complete" === Q.readyState) && (Ce(), ue.ready())
        },
        Ce = function() {
            Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", ke, !1), t.removeEventListener("load", ke, !1)) : (Q.detachEvent("onreadystatechange", ke), t.detachEvent("onload", ke))
        };
    ue.fn = ue.prototype = {
            jquery: ie,
            constructor: ue,
            init: function(t, i, n) {
                var s, o;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (s = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : fe.exec(t), s && (s[1] || !i)) {
                        if (s[1]) {
                            if (i = i instanceof ue ? i[0] : i, ue.merge(this, ue.parseHTML(s[1], i && i.nodeType ? i.ownerDocument || i : Q, !0)), ge.test(s[1]) && ue.isPlainObject(i))
                                for (s in i) ue.isFunction(this[s]) ? this[s](i[s]) : this.attr(s, i[s]);
                            return this
                        }
                        if (o = Q.getElementById(s[2]), o && o.parentNode) {
                            if (o.id !== s[2]) return n.find(t);
                            this.length = 1, this[0] = o
                        }
                        return this.context = Q, this.selector = t, this
                    }
                    return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t)
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ue.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ue.makeArray(t, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return oe.call(this)
            },
            get: function(t) {
                return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
            },
            pushStack: function(t) {
                var e = ue.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return ue.each(this, t, e)
            },
            ready: function(t) {
                return ue.ready.promise().done(t), this
            },
            slice: function() {
                return this.pushStack(oe.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            map: function(t) {
                return this.pushStack(ue.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: se,
            sort: [].sort,
            splice: [].splice
        }, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function() {
            var t, i, n, s, o, r, a = arguments[0] || {},
                l = 1,
                h = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" != typeof a && !ue.isFunction(a) && (a = {}), h === l && (a = this, --l); h > l; l++)
                if (null != (o = arguments[l]))
                    for (s in o) t = a[s], n = o[s], a !== n && (u && n && (ue.isPlainObject(n) || (i = ue.isArray(n))) ? (i ? (i = !1, r = t && ue.isArray(t) ? t : []) : r = t && ue.isPlainObject(t) ? t : {}, a[s] = ue.extend(u, r, n)) : n !== e && (a[s] = n));
            return a
        }, ue.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            noConflict: function(e) {
                return t.$ === ue && (t.$ = Z), e && t.jQuery === ue && (t.jQuery = J), ue
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ue.readyWait++ : ue.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--ue.readyWait : !ue.isReady) {
                    if (!Q.body) return setTimeout(ue.ready);
                    ue.isReady = !0, t !== !0 && --ue.readyWait > 0 || (U.resolveWith(Q, [ue]), ue.fn.trigger && ue(Q).trigger("ready").off("ready"))
                }
            },
            isFunction: function(t) {
                return "function" === ue.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === ue.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function(t) {
                return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? te[ae.call(t)] || "object" : typeof t
            },
            isPlainObject: function(t) {
                var i;
                if (!t || "object" !== ue.type(t) || t.nodeType || ue.isWindow(t)) return !1;
                try {
                    if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ue.support.ownLast)
                    for (i in t) return le.call(t, i);
                for (i in t);
                return i === e || le.call(t, i)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            error: function(t) {
                throw new Error(t)
            },
            parseHTML: function(t, e, i) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (i = e, e = !1), e = e || Q;
                var n = ge.exec(t),
                    s = !i && [];
                return n ? [e.createElement(n[1])] : (n = ue.buildFragment([t], e, s), s && ue(s).remove(), ue.merge([], n.childNodes))
            },
            parseJSON: function(e) {
                return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ue.trim(e), e && me.test(e.replace(be, "@").replace(ye, "]").replace(ve, ""))) ? new Function("return " + e)() : void ue.error("Invalid JSON: " + e)
            },
            parseXML: function(i) {
                var n, s;
                if (!i || "string" != typeof i) return null;
                try {
                    t.DOMParser ? (s = new DOMParser, n = s.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
                } catch (o) {
                    n = e
                }
                return (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && ue.error("Invalid XML: " + i), n
            },
            noop: function() {},
            globalEval: function(e) {
                e && ue.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(_e, "ms-").replace(we, xe)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; r > o && (s = e.apply(t[o], n), s !== !1); o++);
                    else
                        for (o in t)
                            if (s = e.apply(t[o], n), s === !1) break
                } else if (a)
                    for (; r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.call(t[o], o, t[o]), s === !1) break; return t
            },
            trim: he && !he.call("") ? function(t) {
                return null == t ? "" : he.call(t)
            } : function(t) {
                return null == t ? "" : (t + "").replace(pe, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ue.merge(n, "string" == typeof t ? [t] : t) : se.call(n, t)), n
            },
            inArray: function(t, e, i) {
                var n;
                if (e) {
                    if (re) return re.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function(t, i) {
                var n = i.length,
                    s = t.length,
                    o = 0;
                if ("number" == typeof n)
                    for (; n > o; o++) t[s++] = i[o];
                else
                    for (; i[o] !== e;) t[s++] = i[o++];
                return t.length = s, t
            },
            grep: function(t, e, i) {
                var n, s = [],
                    o = 0,
                    r = t.length;
                for (i = !!i; r > o; o++) n = !!e(t[o], o), i !== n && s.push(t[o]);
                return s
            },
            map: function(t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t),
                    l = [];
                if (a)
                    for (; r > o; o++) s = e(t[o], o, n), null != s && (l[l.length] = s);
                else
                    for (o in t) s = e(t[o], o, n), null != s && (l[l.length] = s);
                return ne.apply([], l)
            },
            guid: 1,
            proxy: function(t, i) {
                var n, s, o;
                return "string" == typeof i && (o = t[i], i = t, t = o), ue.isFunction(t) ? (n = oe.call(arguments, 2), s = function() {
                    return t.apply(i || this, n.concat(oe.call(arguments)))
                }, s.guid = t.guid = t.guid || ue.guid++, s) : e
            },
            access: function(t, i, n, s, o, r, a) {
                var l = 0,
                    h = t.length,
                    u = null == n;
                if ("object" === ue.type(n)) {
                    o = !0;
                    for (l in n) ue.access(t, i, l, n[l], !0, r, a)
                } else if (s !== e && (o = !0, ue.isFunction(s) || (a = !0), u && (a ? (i.call(t, s), i = null) : (u = i, i = function(t, e, i) {
                        return u.call(ue(t), i)
                    })), i))
                    for (; h > l; l++) i(t[l], n, a ? s : s.call(t[l], l, i(t[l], n)));
                return o ? t : u ? i.call(t) : h ? i(t[0], n) : r
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(t, e, i, n) {
                var s, o, r = {};
                for (o in e) r[o] = t.style[o], t.style[o] = e[o];
                s = i.apply(t, n || []);
                for (o in e) t.style[o] = r[o];
                return s
            }
        }), ue.ready.promise = function(e) {
            if (!U)
                if (U = ue.Deferred(), "complete" === Q.readyState) setTimeout(ue.ready);
                else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", ke, !1), t.addEventListener("load", ke, !1);
            else {
                Q.attachEvent("onreadystatechange", ke), t.attachEvent("onload", ke);
                var i = !1;
                try {
                    i = null == t.frameElement && Q.documentElement
                } catch (n) {}
                i && i.doScroll && function s() {
                    if (!ue.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(s, 50)
                        }
                        Ce(), ue.ready()
                    }
                }()
            }
            return U.promise(e)
        }, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            te["[object " + e + "]"] = e.toLowerCase()
        }), K = ue(Q),
        function(t, e) {
            function i(t, e, i, n) {
                var s, o, r, a, l, h, u, c, f, g;
                if ((e ? e.ownerDocument || e : F) !== E && N(e), e = e || E, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (H && !n) {
                    if (s = ye.exec(t))
                        if (r = s[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(r), !o || !o.parentNode) return i;
                                if (o.id === r) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && j(e, o) && o.id === r) return i.push(o), i
                        } else {
                            if (s[2]) return te.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = s[3]) && k.getElementsByClassName && e.getElementsByClassName) return te.apply(i, e.getElementsByClassName(r)), i
                        }
                    if (k.qsa && (!z || !z.test(t))) {
                        if (c = u = L, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (h = d(t), (u = e.getAttribute("id")) ? c = u.replace(xe, "\\$&") : e.setAttribute("id", c), c = "[id='" + c + "'] ", l = h.length; l--;) h[l] = c + p(h[l]);
                            f = pe.test(t) && e.parentNode || e, g = h.join(",")
                        }
                        if (g) try {
                            return te.apply(i, f.querySelectorAll(g)), i
                        } catch (m) {} finally {
                            u || e.removeAttribute("id")
                        }
                    }
                }
                return w(t.replace(he, "$1"), e, i, n)
            }

            function n() {
                function t(i, n) {
                    return e.push(i += " ") > D.cacheLength && delete t[e.shift()], t[i] = n
                }
                var e = [];
                return t
            }

            function s(t) {
                return t[L] = !0, t
            }

            function o(t) {
                var e = E.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) D.attrHandle[i[n]] = e
            }

            function a(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function h(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function u(t) {
                return s(function(e) {
                    return e = +e, s(function(i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function c() {}

            function d(t, e) {
                var n, s, o, r, a, l, h, u = Y[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (a = t, l = [], h = D.preFilter; a;) {
                    (!n || (s = ce.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = de.exec(a)) && (n = s.shift(), o.push({
                        value: n,
                        type: s[0].replace(he, " ")
                    }), a = a.slice(n.length));
                    for (r in D.filter)(s = ve[r].exec(a)) && (!h[r] || (s = h[r](s))) && (n = s.shift(), o.push({
                        value: n,
                        type: r,
                        matches: s
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return e ? a.length : a ? i.error(t) : Y(t, l).slice(0)
            }

            function p(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function f(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    o = B++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o)
                } : function(e, i, r) {
                    var a, l, h, u = R + " " + o;
                    if (r) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, r)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s)
                                if (h = e[L] || (e[L] = {}), (l = h[n]) && l[0] === u) {
                                    if ((a = l[1]) === !0 || a === C) return a === !0
                                } else if (l = h[n] = [u], l[1] = t(e, i, r) || C, l[1] === !0) return !0
                }
            }

            function g(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, h = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, s)) && (r.push(o), h && e.push(a));
                return r
            }

            function v(t, e, i, n, o, r) {
                return n && !n[L] && (n = v(n)), o && !o[L] && (o = v(o, r)), s(function(s, r, a, l) {
                    var h, u, c, d = [],
                        p = [],
                        f = r.length,
                        g = s || _(e || "*", a.nodeType ? [a] : a, []),
                        v = !t || !s && e ? g : m(g, d, t, a, l),
                        b = i ? o || (s ? t : f || n) ? [] : r : v;
                    if (i && i(v, b, a, l), n)
                        for (h = m(b, p), n(h, [], a, l), u = h.length; u--;)(c = h[u]) && (b[p[u]] = !(v[p[u]] = c));
                    if (s) {
                        if (o || t) {
                            if (o) {
                                for (h = [], u = b.length; u--;)(c = b[u]) && h.push(v[u] = c);
                                o(null, b = [], h, l)
                            }
                            for (u = b.length; u--;)(c = b[u]) && (h = o ? ie.call(s, c) : d[u]) > -1 && (s[h] = !(r[h] = c))
                        }
                    } else b = m(b === r ? b.splice(f, b.length) : b), o ? o(null, r, b, l) : te.apply(r, b)
                })
            }

            function b(t) {
                for (var e, i, n, s = t.length, o = D.relative[t[0].type], r = o || D.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, r, !0), h = f(function(t) {
                        return ie.call(e, t) > -1
                    }, r, !0), u = [function(t, i, n) {
                        return !o && (n || i !== M) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n))
                    }]; s > a; a++)
                    if (i = D.relative[t[a].type]) u = [f(g(u), i)];
                    else {
                        if (i = D.filter[t[a].type].apply(null, t[a].matches), i[L]) {
                            for (n = ++a; s > n && !D.relative[t[n].type]; n++);
                            return v(a > 1 && g(u), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(he, "$1"), i, n > a && b(t.slice(a, n)), s > n && b(t = t.slice(n)), s > n && p(t))
                        }
                        u.push(i)
                    }
                return g(u)
            }

            function y(t, e) {
                var n = 0,
                    o = e.length > 0,
                    r = t.length > 0,
                    a = function(s, a, l, h, u) {
                        var c, d, p, f = [],
                            g = 0,
                            v = "0",
                            b = s && [],
                            y = null != u,
                            _ = M,
                            w = s || r && D.find.TAG("*", u && a.parentNode || a),
                            x = R += null == _ ? 1 : Math.random() || .1;
                        for (y && (M = a !== E && a, C = n); null != (c = w[v]); v++) {
                            if (r && c) {
                                for (d = 0; p = t[d++];)
                                    if (p(c, a, l)) {
                                        h.push(c);
                                        break
                                    }
                                y && (R = x, C = ++n)
                            }
                            o && ((c = !p && c) && g--, s && b.push(c))
                        }
                        if (g += v, o && v !== g) {
                            for (d = 0; p = e[d++];) p(b, f, a, l);
                            if (s) {
                                if (g > 0)
                                    for (; v--;) !b[v] && !f[v] && (f[v] = J.call(h));
                                f = m(f)
                            }
                            te.apply(h, f), y && !s && f.length > 0 && g + e.length > 1 && i.uniqueSort(h)
                        }
                        return y && (R = x, M = _), b
                    };
                return o ? s(a) : a
            }

            function _(t, e, n) {
                for (var s = 0, o = e.length; o > s; s++) i(t, e[s], n);
                return n
            }

            function w(t, e, i, n) {
                var s, o, r, a, l, h = d(t);
                if (!n && 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && k.getById && 9 === e.nodeType && H && D.relative[o[1].type]) {
                        if (e = (D.find.ID(r.matches[0].replace(ke, Ce), e) || [])[0], !e) return i;
                        t = t.slice(o.shift().value.length)
                    }
                    for (s = ve.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !D.relative[a = r.type]);)
                        if ((l = D.find[a]) && (n = l(r.matches[0].replace(ke, Ce), pe.test(o[0].type) && e.parentNode || e))) {
                            if (o.splice(s, 1), t = n.length && p(o), !t) return te.apply(i, n), i;
                            break
                        }
                }
                return I(t, h)(n, e, !H, i, pe.test(t)), i
            }
            var x, k, C, D, T, S, I, M, P, N, E, A, H, z, W, O, j, L = "sizzle" + -new Date,
                F = t.document,
                R = 0,
                B = 0,
                q = n(),
                Y = n(),
                $ = n(),
                U = !1,
                K = function(t, e) {
                    return t === e ? (U = !0, 0) : 0
                },
                X = typeof e,
                V = 1 << 31,
                Q = {}.hasOwnProperty,
                G = [],
                J = G.pop,
                Z = G.push,
                te = G.push,
                ee = G.slice,
                ie = G.indexOf || function(t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                se = "[\\x20\\t\\r\\n\\f]",
                oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = oe.replace("w", "w#"),
                ae = "\\[" + se + "*(" + oe + ")" + se + "*(?:([*^$|!~]?=)" + se + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + se + "*\\]",
                le = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
                he = new RegExp("^" + se + "+|((?:^|[^\\\\])(?:\\\\.)*)" + se + "+$", "g"),
                ce = new RegExp("^" + se + "*," + se + "*"),
                de = new RegExp("^" + se + "*([>+~]|" + se + ")" + se + "*"),
                pe = new RegExp(se + "*[+~]"),
                fe = new RegExp("=" + se + "*([^\\]'\"]*)" + se + "*\\]", "g"),
                ge = new RegExp(le),
                me = new RegExp("^" + re + "$"),
                ve = {
                    ID: new RegExp("^#(" + oe + ")"),
                    CLASS: new RegExp("^\\.(" + oe + ")"),
                    TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + le),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + se + "*(even|odd|(([+-]|)(\\d*)n|)" + se + "*(?:([+-]|)" + se + "*(\\d+)|))" + se + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + se + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + se + "*((?:-\\d)?\\d*)" + se + "*\\)|)(?=[^-]|$)", "i")
                },
                be = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _e = /^(?:input|select|textarea|button)$/i,
                we = /^h\d$/i,
                xe = /'|\\/g,
                ke = new RegExp("\\\\([\\da-f]{1,6}" + se + "?|(" + se + ")|.)", "ig"),
                Ce = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                };
            try {
                te.apply(G = ee.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
            } catch (De) {
                te = {
                    apply: G.length ? function(t, e) {
                        Z.apply(t, ee.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            S = i.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, k = i.support = {}, N = i.setDocument = function(t) {
                var e = t ? t.ownerDocument || t : F,
                    i = e.defaultView;
                return e !== E && 9 === e.nodeType && e.documentElement ? (E = e, A = e.documentElement, H = !S(e), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                    N()
                }), k.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), k.getElementsByTagName = o(function(t) {
                    return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
                }), k.getElementsByClassName = o(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), k.getById = o(function(t) {
                    return A.appendChild(t).id = L, !e.getElementsByName || !e.getElementsByName(L).length
                }), k.getById ? (D.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && H) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, D.filter.ID = function(t) {
                    var e = t.replace(ke, Ce);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete D.find.ID, D.filter.ID = function(t) {
                    var e = t.replace(ke, Ce);
                    return function(t) {
                        var i = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), D.find.TAG = k.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, D.find.CLASS = k.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== X && H ? e.getElementsByClassName(t) : void 0
                }, W = [], z = [], (k.qsa = be.test(e.querySelectorAll)) && (o(function(t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || z.push("\\[" + se + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || z.push(":checked")
                }), o(function(t) {
                    var i = e.createElement("input");
                    i.setAttribute("type", "hidden"), t.appendChild(i).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && z.push("[*^$]=" + se + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), z.push(",.*:")
                })), (k.matchesSelector = be.test(O = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function(t) {
                    k.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), W.push("!=", le)
                }), z = z.length && new RegExp(z.join("|")), W = W.length && new RegExp(W.join("|")), j = be.test(A.contains) || A.compareDocumentPosition ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !!n && 1 === n.nodeType && !!(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, K = A.compareDocumentPosition ? function(t, i) {
                    if (t === i) return U = !0, 0;
                    var n = i.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(i);
                    return n ? 1 & n || !k.sortDetached && i.compareDocumentPosition(t) === n ? t === e || j(F, t) ? -1 : i === e || j(F, i) ? 1 : P ? ie.call(P, t) - ie.call(P, i) : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function(t, i) {
                    var n, s = 0,
                        o = t.parentNode,
                        r = i.parentNode,
                        l = [t],
                        h = [i];
                    if (t === i) return U = !0, 0;
                    if (!o || !r) return t === e ? -1 : i === e ? 1 : o ? -1 : r ? 1 : P ? ie.call(P, t) - ie.call(P, i) : 0;
                    if (o === r) return a(t, i);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = i; n = n.parentNode;) h.unshift(n);
                    for (; l[s] === h[s];) s++;
                    return s ? a(l[s], h[s]) : l[s] === F ? -1 : h[s] === F ? 1 : 0
                }, e) : E
            }, i.matches = function(t, e) {
                return i(t, null, null, e)
            }, i.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== E && N(t), e = e.replace(fe, "='$1']"), !(!k.matchesSelector || !H || W && W.test(e) || z && z.test(e))) try {
                    var n = O.call(t, e);
                    if (n || k.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (s) {}
                return i(e, E, null, [t]).length > 0
            }, i.contains = function(t, e) {
                return (t.ownerDocument || t) !== E && N(t), j(t, e)
            }, i.attr = function(t, i) {
                (t.ownerDocument || t) !== E && N(t);
                var n = D.attrHandle[i.toLowerCase()],
                    s = n && Q.call(D.attrHandle, i.toLowerCase()) ? n(t, i, !H) : e;
                return s === e ? k.attributes || !H ? t.getAttribute(i) : (s = t.getAttributeNode(i)) && s.specified ? s.value : null : s
            }, i.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, i.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (U = !k.detectDuplicates, P = !k.sortStable && t.slice(0), t.sort(K), U) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return t
            }, T = i.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n]; n++) i += T(e);
                return i
            }, D = i.selectors = {
                cacheLength: 50,
                createPseudo: s,
                match: ve,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(ke, Ce), t[3] = (t[4] || t[5] || "").replace(ke, Ce), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || i.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && i.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var i, n = !t[5] && t[2];
                        return ve.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : n && ge.test(n) && (i = d(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (t[0] = t[0].slice(0, i), t[2] = n.slice(0, i)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(ke, Ce).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = q[t + " "];
                        return e || (e = new RegExp("(^|" + se + ")" + t + "(" + se + "|$)")) && q(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(s) {
                            var o = i.attr(s, t);
                            return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o + " ").indexOf(n) > -1 : "|=" === e ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var h, u, c, d, p, f, g = o !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                b = !l && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (c = e; c = c[g];)
                                            if (a ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? m.firstChild : m.lastChild], r && b) {
                                    for (u = m[L] || (m[L] = {}), h = u[t] || [], p = h[0] === R && h[1], d = h[0] === R && h[2], c = p && m.childNodes[p]; c = ++p && c && c[g] || (d = p = 0) || f.pop();)
                                        if (1 === c.nodeType && ++d && c === e) {
                                            u[t] = [R, p, d];
                                            break
                                        }
                                } else if (b && (h = (e[L] || (e[L] = {}))[t]) && h[0] === R) d = h[1];
                                else
                                    for (;
                                        (c = ++p && c && c[g] || (d = p = 0) || f.pop()) && ((a ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++d || (b && ((c[L] || (c[L] = {}))[t] = [R, d]), c !== e)););
                                return d -= s, d === n || d % n === 0 && d / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, o = D.pseudos[t] || D.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t);
                        return o[L] ? o(e) : o.length > 1 ? (n = [t, t, "", e], D.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function(t, i) {
                            for (var n, s = o(t, e), r = s.length; r--;) n = ie.call(t, s[r]), t[n] = !(i[n] = s[r])
                        }) : function(t) {
                            return o(t, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: s(function(t) {
                        var e = [],
                            i = [],
                            n = I(t.replace(he, "$1"));
                        return n[L] ? s(function(t, e, i, s) {
                            for (var o, r = n(t, null, s, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, s, o) {
                            return e[0] = t, n(e, null, o, i), !i.pop()
                        }
                    }),
                    has: s(function(t) {
                        return function(e) {
                            return i(t, e).length > 0
                        }
                    }),
                    contains: s(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }),
                    lang: s(function(t) {
                        return me.test(t || "") || i.error("unsupported lang: " + t), t = t.replace(ke, Ce).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === A
                    },
                    focus: function(t) {
                        return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !D.pseudos.empty(t)
                    },
                    header: function(t) {
                        return we.test(t.nodeName)
                    },
                    input: function(t) {
                        return _e.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: u(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: u(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: u(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, D.pseudos.nth = D.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) D.pseudos[x] = l(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) D.pseudos[x] = h(x);
            c.prototype = D.filters = D.pseudos, D.setFilters = new c, I = i.compile = function(t, e) {
                var i, n = [],
                    s = [],
                    o = $[t + " "];
                if (!o) {
                    for (e || (e = d(t)), i = e.length; i--;) o = b(e[i]), o[L] ? n.push(o) : s.push(o);
                    o = $(t, y(s, n))
                }
                return o
            }, k.sortStable = L.split("").sort(K).join("") === L, k.detectDuplicates = U, N(), k.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(E.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), (!k.attributes || !o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            })) && r("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(ne, function(t, e, i) {
                var n;
                return i ? void 0 : (n = t.getAttributeNode(e)) && n.specified ? n.value : t[e] === !0 ? e.toLowerCase() : null
            }), ue.find = i, ue.expr = i.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = i.uniqueSort, ue.text = i.getText, ue.isXMLDoc = i.isXML, ue.contains = i.contains
        }(t);
    var De = {};
    ue.Callbacks = function(t) {
        t = "string" == typeof t ? De[t] || n(t) : ue.extend({}, t);
        var i, s, o, r, a, l, h = [],
            u = !t.once && [],
            c = function(e) {
                for (s = t.memory && e, o = !0, a = l || 0, l = 0, r = h.length, i = !0; h && r > a; a++)
                    if (h[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        s = !1;
                        break
                    }
                i = !1, h && (u ? u.length && c(u.shift()) : s ? h = [] : d.disable())
            },
            d = {
                add: function() {
                    if (h) {
                        var e = h.length;
                        ! function n(e) {
                            ue.each(e, function(e, i) {
                                var s = ue.type(i);
                                "function" === s ? (!t.unique || !d.has(i)) && h.push(i) : i && i.length && "string" !== s && n(i)
                            })
                        }(arguments), i ? r = h.length : s && (l = e, c(s))
                    }
                    return this
                },
                remove: function() {
                    return h && ue.each(arguments, function(t, e) {
                        for (var n;
                            (n = ue.inArray(e, h, n)) > -1;) h.splice(n, 1), i && (r >= n && r--, a >= n && a--)
                    }), this
                },
                has: function(t) {
                    return t ? ue.inArray(t, h) > -1 : !!h && !!h.length
                },
                empty: function() {
                    return h = [], r = 0, this
                },
                disable: function() {
                    return h = u = s = e, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return u = e, s || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, e) {
                    return h && (!o || u) && (e = e || [], e = [t, e.slice ? e.slice() : e], i ? u.push(e) : c(e)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, ue.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ue.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ue.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ue.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ue.Deferred(function(i) {
                            ue.each(e, function(e, o) {
                                var r = o[0],
                                    a = ue.isFunction(t[e]) && t[e];
                                s[o[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && ue.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ue.extend(t, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, ue.each(e, function(t, o) {
                var r = o[2],
                    a = o[3];
                n[o[1]] = r.add, a && r.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this
                }, s[o[0] + "With"] = r.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                o = oe.call(arguments),
                r = o.length,
                a = 1 !== r || t && ue.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : ue.Deferred(),
                h = function(t, i, n) {
                    return function(s) {
                        i[t] = this, n[t] = arguments.length > 1 ? oe.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (r > 1)
                for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) o[s] && ue.isFunction(o[s].promise) ? o[s].promise().done(h(s, n, o)).fail(l.reject).progress(h(s, i, e)) : --a;
            return a || l.resolveWith(n, o), l.promise()
        }
    }), ue.support = function(e) {
        var i, n, s, o, r, a, l, h, u, c = Q.createElement("div");
        if (c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = c.getElementsByTagName("*") || [], n = c.getElementsByTagName("a")[0], !n || !n.style || !i.length) return e;
        o = Q.createElement("select"), a = o.appendChild(Q.createElement("option")), s = c.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== c.className, e.leadingWhitespace = 3 === c.firstChild.nodeType, e.tbody = !c.getElementsByTagName("tbody").length, e.htmlSerialize = !!c.getElementsByTagName("link").length, e.style = /top/.test(n.getAttribute("style")), e.hrefNormalized = "/a" === n.getAttribute("href"), e.opacity = /^0.5/.test(n.style.opacity), e.cssFloat = !!n.style.cssFloat, e.checkOn = !!s.value, e.optSelected = a.selected, e.enctype = !!Q.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, s.checked = !0, e.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !a.disabled;
        try {
            delete c.test
        } catch (d) {
            e.deleteExpando = !1
        }
        s = Q.createElement("input"), s.setAttribute("value", ""), e.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), e.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), r = Q.createDocumentFragment(), r.appendChild(s), e.appendChecked = s.checked, e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, c.attachEvent && (c.attachEvent("onclick", function() {
            e.noCloneEvent = !1
        }), c.cloneNode(!0).click());
        for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c.setAttribute(l = "on" + u, "t"), e[u + "Bubbles"] = l in t || c.attributes[l].expando === !1;
        c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === c.style.backgroundClip;
        for (u in ue(e)) break;
        return e.ownLast = "0" !== u, ue(function() {
            var i, n, s, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                r = Q.getElementsByTagName("body")[0];
            r && (i = Q.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(i).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = c.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", h = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", e.reliableHiddenOffsets = h && 0 === s[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ue.swap(r, null != r.style.zoom ? {
                zoom: 1
            } : {}, function() {
                e.boxSizing = 4 === c.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(c, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(c, null) || {
                width: "4px"
            }).width, n = c.appendChild(Q.createElement("div")), n.style.cssText = c.style.cssText = o, n.style.marginRight = n.style.width = "0", c.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), typeof c.style.zoom !== X && (c.innerHTML = "", c.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== c.offsetWidth, e.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(i), i = c = s = n = null)
        }), i = o = r = a = n = s = null, e
    }({});
    var Te = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Se = /([A-Z])/g;
    ue.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? ue.cache[t[ue.expando]] : t[ue.expando], !!t && !a(t)
        },
        data: function(t, e, i) {
            return s(t, e, i)
        },
        removeData: function(t, e) {
            return o(t, e)
        },
        _data: function(t, e, i) {
            return s(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return o(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && ue.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), ue.fn.extend({
        data: function(t, i) {
            var n, s, o = null,
                a = 0,
                l = this[0];
            if (t === e) {
                if (this.length && (o = ue.data(l), 1 === l.nodeType && !ue._data(l, "parsedAttrs"))) {
                    for (n = l.attributes; a < n.length; a++) s = n[a].name, 0 === s.indexOf("data-") && (s = ue.camelCase(s.slice(5)), r(l, s, o[s]));
                    ue._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                ue.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                ue.data(this, t, i)
            }) : l ? r(l, t, ue.data(l, t)) : null
        },
        removeData: function(t) {
            return this.each(function() {
                ue.removeData(this, t)
            })
        }
    }), ue.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = ue._data(t, e), i && (!n || ue.isArray(i) ? n = ue._data(t, e, ue.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = ue.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = ue._queueHooks(t, e),
                r = function() {
                    ue.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return ue._data(t, i) || ue._data(t, i, {
                empty: ue.Callbacks("once memory").add(function() {
                    ue._removeData(t, e + "queue"), ue._removeData(t, i)
                })
            })
        }
    }), ue.fn.extend({
        queue: function(t, i) {
            var n = 2;
            return "string" != typeof t && (i = t, t = "fx", n--), arguments.length < n ? ue.queue(this[0], t) : i === e ? this : this.each(function() {
                var e = ue.queue(this, t, i);
                ue._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ue.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ue.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = ue.fx ? ue.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, i) {
            var n, s = 1,
                o = ue.Deferred(),
                r = this,
                a = this.length,
                l = function() {
                    --s || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--;) n = ue._data(r[a], t + "queueHooks"), n && n.empty && (s++, n.empty.add(l));
            return l(), o.promise(i)
        }
    });
    var Ie, Me, Pe = /[\t\r\n\f]/g,
        Ne = /\r/g,
        Ee = /^(?:input|select|textarea|button|object)$/i,
        Ae = /^(?:a|area)$/i,
        He = /^(?:checked|selected)$/i,
        ze = ue.support.getSetAttribute,
        We = ue.support.input;
    ue.fn.extend({
        attr: function(t, e) {
            return ue.access(this, ue.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ue.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return ue.access(this, ue.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ue.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t]
                } catch (i) {}
            })
        },
        addClass: function(t) {
            var e, i, n, s, o, r = 0,
                a = this.length,
                l = "string" == typeof t && t;
            if (ue.isFunction(t)) return this.each(function(e) {
                ue(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(de) || []; a > r; r++)
                    if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Pe, " ") : " ")) {
                        for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        i.className = ue.trim(n)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, o, r = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (ue.isFunction(t)) return this.each(function(e) {
                ue(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(de) || []; a > r; r++)
                    if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Pe, " ") : "")) {
                        for (o = 0; s = e[o++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        i.className = t ? ue.trim(n) : ""
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(ue.isFunction(t) ? function(i) {
                ue(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, s = ue(this), o = t.match(de) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(i === X || "boolean" === i) && (this.className && ue._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ue._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Pe, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function(t) {
            var i, n, s, o = this[0]; {
                if (arguments.length) return s = ue.isFunction(t), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (o = s ? t.call(this, i, ue(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), n = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== e || (this.value = o))
                });
                if (o) return n = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== e ? i : (i = o.value, "string" == typeof i ? i.replace(Ne, "") : null == i ? "" : i)
            }
        }
    }), ue.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ue.find.attr(t, "value");
                    return null != e ? e : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== s || (ue.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ue.nodeName(i.parentNode, "optgroup"))) {
                            if (e = ue(i).val(), o) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = ue.makeArray(e), r = s.length; r--;) n = s[r], (n.selected = ue.inArray(ue(n).val(), o) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        },
        attr: function(t, i, n) {
            var s, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === X ? ue.prop(t, i, n) : (1 === r && ue.isXMLDoc(t) || (i = i.toLowerCase(), s = ue.attrHooks[i] || (ue.expr.match.bool.test(i) ? Me : Ie)), n === e ? s && "get" in s && null !== (o = s.get(t, i)) ? o : (o = ue.find.attr(t, i), null == o ? e : o) : null !== n ? s && "set" in s && (o = s.set(t, n, i)) !== e ? o : (t.setAttribute(i, n + ""), n) : void ue.removeAttr(t, i))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                o = e && e.match(de);
            if (o && 1 === t.nodeType)
                for (; i = o[s++];) n = ue.propFix[i] || i, ue.expr.match.bool.test(i) ? We && ze || !He.test(i) ? t[n] = !1 : t[ue.camelCase("default-" + i)] = t[n] = !1 : ue.attr(t, i, ""), t.removeAttribute(ze ? i : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ue.support.radioValue && "radio" === e && ue.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, i, n) {
            var s, o, r, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !ue.isXMLDoc(t), r && (i = ue.propFix[i] || i, o = ue.propHooks[i]), n !== e ? o && "set" in o && (s = o.set(t, n, i)) !== e ? s : t[i] = n : o && "get" in o && null !== (s = o.get(t, i)) ? s : t[i]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ue.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ee.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), Me = {
        set: function(t, e, i) {
            return e === !1 ? ue.removeAttr(t, i) : We && ze || !He.test(i) ? t.setAttribute(!ze && ue.propFix[i] || i, i) : t[ue.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, ue.each(ue.expr.match.bool.source.match(/\w+/g), function(t, i) {
        var n = ue.expr.attrHandle[i] || ue.find.attr;
        ue.expr.attrHandle[i] = We && ze || !He.test(i) ? function(t, i, s) {
            var o = ue.expr.attrHandle[i],
                r = s ? e : (ue.expr.attrHandle[i] = e) != n(t, i, s) ? i.toLowerCase() : null;
            return ue.expr.attrHandle[i] = o, r
        } : function(t, i, n) {
            return n ? e : t[ue.camelCase("default-" + i)] ? i.toLowerCase() : null
        }
    }), We && ze || (ue.attrHooks.value = {
        set: function(t, e, i) {
            return ue.nodeName(t, "input") ? void(t.defaultValue = e) : Ie && Ie.set(t, e, i)
        }
    }), ze || (Ie = {
        set: function(t, i, n) {
            var s = t.getAttributeNode(n);
            return s || t.setAttributeNode(s = t.ownerDocument.createAttribute(n)), s.value = i += "", "value" === n || i === t.getAttribute(n) ? i : e
        }
    }, ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function(t, i, n) {
        var s;
        return n ? e : (s = t.getAttributeNode(i)) && "" !== s.value ? s.value : null
    }, ue.valHooks.button = {
        get: function(t, i) {
            var n = t.getAttributeNode(i);
            return n && n.specified ? n.value : e
        },
        set: Ie.set
    }, ue.attrHooks.contenteditable = {
        set: function(t, e, i) {
            Ie.set(t, "" === e ? !1 : e, i)
        }
    }, ue.each(["width", "height"], function(t, e) {
        ue.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), ue.support.hrefNormalized || ue.each(["href", "src"], function(t, e) {
        ue.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ue.support.style || (ue.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }), ue.support.optSelected || (ue.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ue.propFix[this.toLowerCase()] = this
    }), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.each(["radio", "checkbox"], function() {
        ue.valHooks[this] = {
            set: function(t, e) {
                return ue.isArray(e) ? t.checked = ue.inArray(ue(t).val(), e) >= 0 : void 0
            }
        }, ue.support.checkOn || (ue.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Oe = /^(?:input|select|textarea)$/i,
        je = /^key/,
        Le = /^(?:mouse|contextmenu)|click/,
        Fe = /^(?:focusinfocus|focusoutblur)$/,
        Re = /^([^.]*)(?:\.(.+)|)$/;
    ue.event = {
        global: {},
        add: function(t, i, n, s, o) {
            var r, a, l, h, u, c, d, p, f, g, m, v = ue._data(t);
            if (v) {
                for (n.handler && (h = n, n = h.handler, o = h.selector), n.guid || (n.guid = ue.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || (c = v.handle = function(t) {
                        return typeof ue === X || t && ue.event.triggered === t.type ? e : ue.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), i = (i || "").match(de) || [""], l = i.length; l--;) r = Re.exec(i[l]) || [], f = m = r[1], g = (r[2] || "").split(".").sort(), f && (u = ue.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = ue.event.special[f] || {}, d = ue.extend({
                    type: f,
                    origType: m,
                    data: s,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ue.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, h), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(t, s, g, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ue.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, h, u, c, d, p, f, g, m = ue.hasData(t) && ue._data(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(de) || [""], h = e.length; h--;)
                    if (a = Re.exec(e[h]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (c = ue.event.special[p] || {}, p = (n ? c.delegateType : c.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o], !(!s && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, !c.remove || !c.remove.call(t, r)));
                        l && !d.length && ((!c.teardown || c.teardown.call(t, f, m.handle) === !1) && ue.removeEvent(t, p, m.handle), delete u[p])
                    } else
                        for (p in u) ue.event.remove(t, p + e[h], i, n, !0);
                ue.isEmptyObject(u) && (delete m.handle, ue._removeData(t, "events"))
            }
        },
        trigger: function(i, n, s, o) {
            var r, a, l, h, u, c, d, p = [s || Q],
                f = le.call(i, "type") ? i.type : i,
                g = le.call(i, "namespace") ? i.namespace.split(".") : [];
            if (l = c = s = s || Q, 3 !== s.nodeType && 8 !== s.nodeType && !Fe.test(f + ue.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = f.indexOf(":") < 0 && "on" + f, i = i[ue.expando] ? i : new ue.Event(f, "object" == typeof i && i), i.isTrigger = o ? 2 : 3, i.namespace = g.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = s), n = null == n ? [i] : ue.makeArray(n, [i]), u = ue.event.special[f] || {}, o || !u.trigger || u.trigger.apply(s, n) !== !1)) {
                if (!o && !u.noBubble && !ue.isWindow(s)) {
                    for (h = u.delegateType || f, Fe.test(h + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l), c = l;
                    c === (s.ownerDocument || Q) && p.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0;
                    (l = p[d++]) && !i.isPropagationStopped();) i.type = d > 1 ? h : u.bindType || f, r = (ue._data(l, "events") || {})[i.type] && ue._data(l, "handle"), r && r.apply(l, n), r = a && l[a], r && ue.acceptData(l) && r.apply && r.apply(l, n) === !1 && i.preventDefault();
                if (i.type = f, !o && !i.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && ue.acceptData(s) && a && s[f] && !ue.isWindow(s)) {
                    c = s[a], c && (s[a] = null), ue.event.triggered = f;
                    try {
                        s[f]()
                    } catch (m) {}
                    ue.event.triggered = e, c && (s[a] = c)
                }
                return i.result
            }
        },
        dispatch: function(t) {
            t = ue.event.fix(t);
            var i, n, s, o, r, a = [],
                l = oe.call(arguments),
                h = (ue._data(this, "events") || {})[t.type] || [],
                u = ue.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (a = ue.event.handlers.call(this, t, h), i = 0;
                    (o = a[i++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, r = 0;
                        (s = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, n = ((ue.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), n !== e && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, i) {
            var n, s, o, r, a = [],
                l = i.delegateCount,
                h = t.target;
            if (l && h.nodeType && (!t.button || "click" !== t.type))
                for (; h != this; h = h.parentNode || this)
                    if (1 === h.nodeType && (h.disabled !== !0 || "click" !== t.type)) {
                        for (o = [], r = 0; l > r; r++) s = i[r], n = s.selector + " ", o[n] === e && (o[n] = s.needsContext ? ue(n, this).index(h) >= 0 : ue.find(n, this, null, [h]).length), o[n] && o.push(s);
                        o.length && a.push({
                            elem: h,
                            handlers: o
                        })
                    }
            return l < i.length && a.push({
                elem: this,
                handlers: i.slice(l)
            }), a
        },
        fix: function(t) {
            if (t[ue.expando]) return t;
            var e, i, n, s = t.type,
                o = t,
                r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = Le.test(s) ? this.mouseHooks : je.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new ue.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
            return t.target || (t.target = o.srcElement || Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, i) {
                var n, s, o, r = i.button,
                    a = i.fromElement;
                return null == t.pageX && null != i.clientX && (s = t.target.ownerDocument || Q, o = s.documentElement, n = s.body, t.pageX = i.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = i.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? i.toElement : a), !t.which && r !== e && (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== u() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return ue.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = ue.extend(new ue.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? ue.event.trigger(s, null, e) : ue.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, ue.removeEvent = Q.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === X && (t[n] = null), t.detachEvent(n, i))
    }, ue.Event = function(t, e) {
        return this instanceof ue.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : h) : this.type = t, e && ue.extend(this, e), this.timeStamp = t && t.timeStamp || ue.now(), this[ue.expando] = !0, void 0) : new ue.Event(t, e)
    }, ue.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ue.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        ue.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    o = t.handleObj;
                return (!s || s !== n && !ue.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ue.support.submitBubbles || (ue.event.special.submit = {
        setup: function() {
            return ue.nodeName(this, "form") ? !1 : void ue.event.add(this, "click._submit keypress._submit", function(t) {
                var i = t.target,
                    n = ue.nodeName(i, "input") || ue.nodeName(i, "button") ? i.form : e;
                n && !ue._data(n, "submitBubbles") && (ue.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), ue._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ue.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return ue.nodeName(this, "form") ? !1 : void ue.event.remove(this, "._submit")
        }
    }), ue.support.changeBubbles || (ue.event.special.change = {
        setup: function() {
            return Oe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), ue.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, t, !0)
            })), !1) : void ue.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Oe.test(e.nodeName) && !ue._data(e, "changeBubbles") && (ue.event.add(e, "change._change", function(t) {
                    this.parentNode && !t.isSimulated && !t.isTrigger && ue.event.simulate("change", this.parentNode, t, !0)
                }), ue._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ue.event.remove(this, "._change"), !Oe.test(this.nodeName)
        }
    }), ue.support.focusinBubbles || ue.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = 0,
            n = function(t) {
                ue.event.simulate(e, t.target, ue.event.fix(t), !0)
            };
        ue.event.special[e] = {
            setup: function() {
                0 === i++ && Q.addEventListener(t, n, !0)
            },
            teardown: function() {
                0 === --i && Q.removeEventListener(t, n, !0)
            }
        }
    }), ue.fn.extend({
        on: function(t, i, n, s, o) {
            var r, a;
            if ("object" == typeof t) {
                "string" != typeof i && (n = n || i, i = e);
                for (r in t) this.on(r, i, n, t[r], o);
                return this
            }
            if (null == n && null == s ? (s = i, n = i = e) : null == s && ("string" == typeof i ? (s = n, n = e) : (s = n, n = i, i = e)), s === !1) s = h;
            else if (!s) return this;
            return 1 === o && (a = s, s = function(t) {
                return ue().off(t), a.apply(this, arguments)
            }, s.guid = a.guid || (a.guid = ue.guid++)), this.each(function() {
                ue.event.add(this, t, s, n, i)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, i, n) {
            var s, o;
            if (t && t.preventDefault && t.handleObj) return s = t.handleObj, ue(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, i, t[o]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = e), n === !1 && (n = h), this.each(function() {
                ue.event.remove(this, t, n, i)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ue.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? ue.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Be = /^.[^:#\[\.,]*$/,
        qe = /^(?:parents|prev(?:Until|All))/,
        Ye = ue.expr.match.needsContext,
        $e = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ue.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                s = n.length;
            if ("string" != typeof t) return this.pushStack(ue(t).filter(function() {
                for (e = 0; s > e; e++)
                    if (ue.contains(n[e], this)) return !0
            }));
            for (e = 0; s > e; e++) ue.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? ue.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        has: function(t) {
            var e, i = ue(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++)
                    if (ue.contains(this, i[e])) return !0
            })
        },
        not: function(t) {
            return this.pushStack(d(this, t || [], !0))
        },
        filter: function(t) {
            return this.pushStack(d(this, t || [], !1))
        },
        is: function(t) {
            return !!d(this, "string" == typeof t && Ye.test(t) ? ue(t) : t || [], !1).length
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], r = Ye.test(t) || "string" != typeof t ? ue(t, e || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && ue.find.matchesSelector(i, t))) {
                        i = o.push(i);
                        break
                    }
            return this.pushStack(o.length > 1 ? ue.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ue.inArray(this[0], ue(t)) : ue.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            var i = "string" == typeof t ? ue(t, e) : ue.makeArray(t && t.nodeType ? [t] : t),
                n = ue.merge(this.get(), i);
            return this.pushStack(ue.unique(n))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ue.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ue.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return ue.dir(t, "parentNode", i)
        },
        next: function(t) {
            return c(t, "nextSibling")
        },
        prev: function(t) {
            return c(t, "previousSibling")
        },
        nextAll: function(t) {
            return ue.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return ue.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return ue.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return ue.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return ue.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ue.sibling(t.firstChild)
        },
        contents: function(t) {
            return ue.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ue.merge([], t.childNodes)
        }
    }, function(t, e) {
        ue.fn[t] = function(i, n) {
            var s = ue.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = ue.filter(n, s)), this.length > 1 && ($e[t] || (s = ue.unique(s)), qe.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    }), ue.extend({
        filter: function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ue.find.matchesSelector(n, t) ? [n] : [] : ue.find.matches(t, ue.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        },
        dir: function(t, i, n) {
            for (var s = [], o = t[i]; o && 9 !== o.nodeType && (n === e || 1 !== o.nodeType || !ue(o).is(n));) 1 === o.nodeType && s.push(o), o = o[i];
            return s
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    });
    var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ke = / jQuery\d+="(?:null|\d+)"/g,
        Xe = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
        Ve = /^\s+/,
        Qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ge = /<([\w:]+)/,
        Je = /<tbody/i,
        Ze = /<|&#?\w+;/,
        ti = /<(?:script|style|link)/i,
        ei = /^(?:checkbox|radio)$/i,
        ii = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ni = /^$|\/(?:java|ecma)script/i,
        si = /^true\/(.*)/,
        oi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ri = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ai = p(Q),
        li = ai.appendChild(Q.createElement("div"));
    ri.optgroup = ri.option, ri.tbody = ri.tfoot = ri.colgroup = ri.caption = ri.thead, ri.th = ri.td, ue.fn.extend({
        text: function(t) {
            return ue.access(this, function(t) {
                return t === e ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = f(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = f(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? ue.filter(t, this) : this, s = 0; null != (i = n[s]); s++) !e && 1 === i.nodeType && ue.cleanData(_(i)), i.parentNode && (e && ue.contains(i.ownerDocument, i) && v(_(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ue.cleanData(_(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ue.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return ue.clone(this, t, e)
            })
        },
        html: function(t) {
            return ue.access(this, function(t) {
                var i = this[0] || {},
                    n = 0,
                    s = this.length;
                if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(Ke, "") : e;
                if (!("string" != typeof t || ti.test(t) || !ue.support.htmlSerialize && Xe.test(t) || !ue.support.leadingWhitespace && Ve.test(t) || ri[(Ge.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Qe, "<$1></$2>");
                    try {
                        for (; s > n; n++) i = this[n] || {}, 1 === i.nodeType && (ue.cleanData(_(i, !1)), i.innerHTML = t);
                        i = 0
                    } catch (o) {}
                }
                i && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = ue.map(this, function(t) {
                    return [t.nextSibling, t.parentNode]
                }),
                e = 0;
            return this.domManip(arguments, function(i) {
                var n = t[e++],
                    s = t[e++];
                s && (n && n.parentNode !== s && (n = this.nextSibling), ue(this).remove(), s.insertBefore(i, n))
            }, !0), e ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e, i) {
            t = ne.apply([], t);
            var n, s, o, r, a, l, h = 0,
                u = this.length,
                c = this,
                d = u - 1,
                p = t[0],
                f = ue.isFunction(p);
            if (f || !(1 >= u || "string" != typeof p || ue.support.checkClone) && ii.test(p)) return this.each(function(n) {
                var s = c.eq(n);
                f && (t[0] = p.call(this, n, s.html())), s.domManip(t, e, i)
            });
            if (u && (l = ue.buildFragment(t, this[0].ownerDocument, !1, !i && this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (r = ue.map(_(l, "script"), g), o = r.length; u > h; h++) s = l, h !== d && (s = ue.clone(s, !0, !0), o && ue.merge(r, _(s, "script"))), e.call(this[h], s, h);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, ue.map(r, m), h = 0; o > h; h++) s = r[h], ni.test(s.type || "") && !ue._data(s, "globalEval") && ue.contains(a, s) && (s.src ? ue._evalUrl(s.src) : ue.globalEval((s.text || s.textContent || s.innerHTML || "").replace(oi, "")));
                l = n = null
            }
            return this
        }
    }), ue.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ue.fn[t] = function(t) {
            for (var i, n = 0, s = [], o = ue(t), r = o.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0), ue(o[n])[e](i), se.apply(s, i.get());
            return this.pushStack(s)
        }
    }), ue.extend({
        clone: function(t, e, i) {
            var n, s, o, r, a, l = ue.contains(t.ownerDocument, t);
            if (ue.support.html5Clone || ue.isXMLDoc(t) || !Xe.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (li.innerHTML = t.outerHTML, li.removeChild(o = li.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ue.isXMLDoc(t)))
                for (n = _(o), a = _(t), r = 0; null != (s = a[r]); ++r) n[r] && y(s, n[r]);
            if (e)
                if (i)
                    for (a = a || _(t), n = n || _(o), r = 0; null != (s = a[r]); r++) b(s, n[r]);
                else b(t, o);
            return n = _(o, "script"), n.length > 0 && v(n, !l && _(t, "script")), n = a = s = null, o
        },
        buildFragment: function(t, e, i, n) {
            for (var s, o, r, a, l, h, u, c = t.length, d = p(e), f = [], g = 0; c > g; g++)
                if (o = t[g], o || 0 === o)
                    if ("object" === ue.type(o)) ue.merge(f, o.nodeType ? [o] : o);
                    else if (Ze.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (Ge.exec(o) || ["", ""])[1].toLowerCase(), u = ri[l] || ri._default, a.innerHTML = u[1] + o.replace(Qe, "<$1></$2>") + u[2], s = u[0]; s--;) a = a.lastChild;
                if (!ue.support.leadingWhitespace && Ve.test(o) && f.push(e.createTextNode(Ve.exec(o)[0])), !ue.support.tbody)
                    for (o = "table" !== l || Je.test(o) ? "<table>" !== u[1] || Je.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;) ue.nodeName(h = o.childNodes[s], "tbody") && !h.childNodes.length && o.removeChild(h);
                for (ue.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else f.push(e.createTextNode(o));
            for (a && d.removeChild(a), ue.support.appendChecked || ue.grep(_(f, "input"), w), g = 0; o = f[g++];)
                if ((!n || -1 === ue.inArray(o, n)) && (r = ue.contains(o.ownerDocument, o), a = _(d.appendChild(o), "script"), r && v(a), i))
                    for (s = 0; o = a[s++];) ni.test(o.type || "") && i.push(o);
            return a = null, d
        },
        cleanData: function(t, e) {
            for (var i, n, s, o, r = 0, a = ue.expando, l = ue.cache, h = ue.support.deleteExpando, u = ue.event.special; null != (i = t[r]); r++)
                if ((e || ue.acceptData(i)) && (s = i[a], o = s && l[s])) {
                    if (o.events)
                        for (n in o.events) u[n] ? ue.event.remove(i, n) : ue.removeEvent(i, n, o.handle);
                    l[s] && (delete l[s], h ? delete i[a] : typeof i.removeAttribute !== X ? i.removeAttribute(a) : i[a] = null, ee.push(s))
                }
        },
        _evalUrl: function(t) {
            return ue.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ue.fn.extend({
        wrapAll: function(t) {
            if (ue.isFunction(t)) return this.each(function(e) {
                ue(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ue(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(ue.isFunction(t) ? function(e) {
                ue(this).wrapInner(t.call(this, e))
            } : function() {
                var e = ue(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ue.isFunction(t);
            return this.each(function(i) {
                ue(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var hi, ui, ci, di = /alpha\([^)]*\)/i,
        pi = /opacity\s*=\s*([^)]*)/,
        fi = /^(top|right|bottom|left)$/,
        gi = /^(none|table(?!-c[ea]).+)/,
        mi = /^margin/,
        vi = new RegExp("^(" + ce + ")(.*)$", "i"),
        bi = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
        yi = new RegExp("^([+-])=(" + ce + ")", "i"),
        _i = {
            BODY: "block"
        },
        wi = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        xi = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ki = ["Top", "Right", "Bottom", "Left"],
        Ci = ["Webkit", "O", "Moz", "ms"];
    ue.fn.extend({
        css: function(t, i) {
            return ue.access(this, function(t, i, n) {
                var s, o, r = {},
                    a = 0;
                if (ue.isArray(i)) {
                    for (o = ui(t), s = i.length; s > a; a++) r[i[a]] = ue.css(t, i[a], !1, o);
                    return r
                }
                return n !== e ? ue.style(t, i, n) : ue.css(t, i)
            }, t, i, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                k(this) ? ue(this).show() : ue(this).hide()
            })
        }
    }), ue.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ci(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ue.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, i, n, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, l = ue.camelCase(i),
                    h = t.style;
                if (i = ue.cssProps[l] || (ue.cssProps[l] = x(h, l)), a = ue.cssHooks[i] || ue.cssHooks[l], n === e) return a && "get" in a && (o = a.get(t, !1, s)) !== e ? o : h[i];
                if (r = typeof n, "string" === r && (o = yi.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ue.css(t, i)), r = "number"), !(null == n || "number" === r && isNaN(n) || ("number" === r && !ue.cssNumber[l] && (n += "px"), !ue.support.clearCloneStyle && "" === n && 0 === i.indexOf("background") && (h[i] = "inherit"), a && "set" in a && (n = a.set(t, n, s)) === e))) try {
                    h[i] = n
                } catch (u) {}
            }
        },
        css: function(t, i, n, s) {
            var o, r, a, l = ue.camelCase(i);
            return i = ue.cssProps[l] || (ue.cssProps[l] = x(t.style, l)), a = ue.cssHooks[i] || ue.cssHooks[l], a && "get" in a && (r = a.get(t, !0, n)), r === e && (r = ci(t, i, s)), "normal" === r && i in xi && (r = xi[i]), "" === n || n ? (o = parseFloat(r), n === !0 || ue.isNumeric(o) ? o || 0 : r) : r
        }
    }), t.getComputedStyle ? (ui = function(e) {
        return t.getComputedStyle(e, null)
    }, ci = function(t, i, n) {
        var s, o, r, a = n || ui(t),
            l = a ? a.getPropertyValue(i) || a[i] : e,
            h = t.style;
        return a && ("" === l && !ue.contains(t.ownerDocument, t) && (l = ue.style(t, i)), bi.test(l) && mi.test(i) && (s = h.width, o = h.minWidth, r = h.maxWidth, h.minWidth = h.maxWidth = h.width = l, l = a.width, h.width = s, h.minWidth = o, h.maxWidth = r)), l
    }) : Q.documentElement.currentStyle && (ui = function(t) {
        return t.currentStyle
    }, ci = function(t, i, n) {
        var s, o, r, a = n || ui(t),
            l = a ? a[i] : e,
            h = t.style;
        return null == l && h && h[i] && (l = h[i]), bi.test(l) && !fi.test(i) && (s = h.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), h.left = "fontSize" === i ? "1em" : l, l = h.pixelLeft + "px", h.left = s, r && (o.left = r)), "" === l ? "auto" : l
    }), ue.each(["height", "width"], function(t, e) {
        ue.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? 0 === t.offsetWidth && gi.test(ue.css(t, "display")) ? ue.swap(t, wi, function() {
                    return S(t, e, n)
                }) : S(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var s = n && ui(t);
                return D(t, i, n ? T(t, e, n, ue.support.boxSizing && "border-box" === ue.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), ue.support.opacity || (ue.cssHooks.opacity = {
        get: function(t, e) {
            return pi.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = ue.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === ue.trim(o.replace(di, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = di.test(o) ? o.replace(di, s) : o + " " + s)
        }
    }), ue(function() {
        ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
            get: function(t, e) {
                return e ? ue.swap(t, {
                    display: "inline-block"
                }, ci, [t, "marginRight"]) : void 0
            }
        }), !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function(t, e) {
            ue.cssHooks[e] = {
                get: function(t, i) {
                    return i ? (i = ci(t, e), bi.test(i) ? ue(t).position()[e] + "px" : i) : void 0
                }
            }
        })
    }), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ue.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ue.css(t, "display"))
    }, ue.expr.filters.visible = function(t) {
        return !ue.expr.filters.hidden(t)
    }), ue.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ue.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + ki[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, mi.test(t) || (ue.cssHooks[t + e].set = D)
    });
    var Di = /%20/g,
        Ti = /\[\]$/,
        Si = /\r?\n/g,
        Ii = /^(?:submit|button|image|reset|file)$/i,
        Mi = /^(?:input|select|textarea|keygen)/i;
    ue.fn.extend({
        serialize: function() {
            return ue.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ue.prop(this, "elements");
                return t ? ue.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ue(this).is(":disabled") && Mi.test(this.nodeName) && !Ii.test(t) && (this.checked || !ei.test(t))
            }).map(function(t, e) {
                var i = ue(this).val();
                return null == i ? null : ue.isArray(i) ? ue.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Si, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Si, "\r\n")
                }
            }).get()
        }
    }), ue.param = function(t, i) {
        var n, s = [],
            o = function(t, e) {
                e = ue.isFunction(e) ? e() : null == e ? "" : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (i === e && (i = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(t) || t.jquery && !ue.isPlainObject(t)) ue.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) P(n, t[n], i, o);
        return s.join("&").replace(Di, "+")
    }, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ue.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), ue.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Pi, Ni, Ei = ue.now(),
        Ai = /\?/,
        Hi = /#.*$/,
        zi = /([?&])_=[^&]*/,
        Wi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Oi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ji = /^(?:GET|HEAD)$/,
        Li = /^\/\//,
        Fi = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Ri = ue.fn.load,
        Bi = {},
        qi = {},
        Yi = "*/".concat("*");
    try {
        Ni = V.href
    } catch ($i) {
        Ni = Q.createElement("a"), Ni.href = "", Ni = Ni.href
    }
    Pi = Fi.exec(Ni.toLowerCase()) || [], ue.fn.load = function(t, i, n) {
        if ("string" != typeof t && Ri) return Ri.apply(this, arguments);
        var s, o, r, a = this,
            l = t.indexOf(" ");
        return l >= 0 && (s = t.slice(l, t.length), t = t.slice(0, l)), ue.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (r = "POST"), a.length > 0 && ue.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: i
        }).done(function(t) {
            o = arguments, a.html(s ? ue("<div>").append(ue.parseHTML(t)).find(s) : t)
        }).complete(n && function(t, e) {
            a.each(n, o || [t.responseText, e, t])
        }), this
    }, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ue.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ue.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ni,
            type: "GET",
            isLocal: Oi.test(Pi[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ue.parseJSON,
                "text xml": ue.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? A(A(t, ue.ajaxSettings), e) : A(ue.ajaxSettings, t)
        },
        ajaxPrefilter: N(Bi),
        ajaxTransport: N(qi),
        ajax: function(t, i) {
            function n(t, i, n, s) {
                var o, c, b, y, w, k = i;
                2 !== _ && (_ = 2, l && clearTimeout(l), u = e, a = s || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = H(d, x, n)), y = z(d, y, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ue.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (ue.etag[r] = w)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, c = y.data, b = y.error, o = !b)) : (b = k, (t || !k) && (k = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (i || k) + "", o ? g.resolveWith(p, [c, k, x]) : g.rejectWith(p, [x, k, b]), x.statusCode(v), v = e, h && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? c : b]), m.fireWith(p, [x, k]), h && (f.trigger("ajaxComplete", [x, d]), --ue.active || ue.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = e), i = i || {};
            var s, o, r, a, l, h, u, c, d = ue.ajaxSetup({}, i),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? ue(p) : ue.event,
                g = ue.Deferred(),
                m = ue.Callbacks("once memory"),
                v = d.statusCode || {},
                b = {},
                y = {},
                _ = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === _) {
                            if (!c)
                                for (c = {}; e = Wi.exec(a);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === _ ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return _ || (t = y[i] = y[i] || t, b[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return _ || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > _)
                                for (e in t) v[e] = [v[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return u && u.abort(e), n(0, e), this
                    }
                };
            if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Ni) + "").replace(Hi, "").replace(Li, Pi[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = ue.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (s = Fi.exec(d.url.toLowerCase()), d.crossDomain = !(!s || s[1] === Pi[1] && s[2] === Pi[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (Pi[3] || ("http:" === Pi[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ue.param(d.data, d.traditional)), E(Bi, d, i, x), 2 === _) return x;
            h = d.global, h && 0 === ue.active++ && ue.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ji.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (Ai.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = zi.test(r) ? r.replace(zi, "$1_=" + Ei++) : r + (Ai.test(r) ? "&" : "?") + "_=" + Ei++)), d.ifModified && (ue.lastModified[r] && x.setRequestHeader("If-Modified-Since", ue.lastModified[r]), ue.etag[r] && x.setRequestHeader("If-None-Match", ue.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Yi + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (!d.beforeSend || d.beforeSend.call(p, x, d) !== !1 && 2 !== _) {
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[o](d[o]);
                if (u = E(qi, d, i, x)) {
                    x.readyState = 1, h && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        _ = 1, u.send(b, n)
                    } catch (k) {
                        if (!(2 > _)) throw k;
                        n(-1, k)
                    }
                } else n(-1, "No Transport");
                return x
            }
            return x.abort()
        },
        getJSON: function(t, e, i) {
            return ue.get(t, e, i, "json")
        },
        getScript: function(t, i) {
            return ue.get(t, e, i, "script")
        }
    }), ue.each(["get", "post"], function(t, i) {
        ue[i] = function(t, n, s, o) {
            return ue.isFunction(n) && (o = o || s, s = n, n = e), ue.ajax({
                url: t,
                type: i,
                dataType: o,
                data: n,
                success: s
            })
        }
    }), ue.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return ue.globalEval(t), t
            }
        }
    }), ue.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ue.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, n = Q.head || ue("head")[0] || Q.documentElement;
            return {
                send: function(e, s) {
                    i = Q.createElement("script"), i.async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(t, e) {
                        (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || s(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                },
                abort: function() {
                    i && i.onload(e, !0)
                }
            }
        }
    });
    var Ui = [],
        Ki = /(=)\?(?=&|$)|\?\?/;
    ue.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ui.pop() || ue.expando + "_" + Ei++;
            return this[t] = !0, t
        }
    }), ue.ajaxPrefilter("json jsonp", function(i, n, s) {
        var o, r, a, l = i.jsonp !== !1 && (Ki.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ki.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (o = i.jsonpCallback = ue.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Ki, "$1" + o) : i.jsonp !== !1 && (i.url += (Ai.test(i.url) ? "&" : "?") + i.jsonp + "=" + o), i.converters["script json"] = function() {
            return a || ue.error(o + " was not called"), a[0]
        }, i.dataTypes[0] = "json", r = t[o], t[o] = function() {
            a = arguments
        }, s.always(function() {
            t[o] = r, i[o] && (i.jsonpCallback = n.jsonpCallback, Ui.push(o)), a && ue.isFunction(r) && r(a[0]), a = r = e
        }), "script") : void 0
    });
    var Xi, Vi, Qi = 0,
        Gi = t.ActiveXObject && function() {
            var t;
            for (t in Xi) Xi[t](e, !0)
        };
    ue.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && W() || O()
    } : W, Vi = ue.ajaxSettings.xhr(), ue.support.cors = !!Vi && "withCredentials" in Vi, Vi = ue.support.ajax = !!Vi, Vi && ue.ajaxTransport(function(i) {
        if (!i.crossDomain || ue.support.cors) {
            var n;
            return {
                send: function(s, o) {
                    var r, a, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                        for (a in i.xhrFields) l[a] = i.xhrFields[a];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), !i.crossDomain && !s["X-Requested-With"] && (s["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in s) l.setRequestHeader(a, s[a])
                    } catch (h) {}
                    l.send(i.hasContent && i.data || null), n = function(t, s) {
                        var a, h, u, c;
                        try {
                            if (n && (s || 4 === l.readyState))
                                if (n = e, r && (l.onreadystatechange = ue.noop, Gi && delete Xi[r]), s) 4 !== l.readyState && l.abort();
                                else {
                                    c = {}, a = l.status, h = l.getAllResponseHeaders(), "string" == typeof l.responseText && (c.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (d) {
                                        u = ""
                                    }
                                    a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                                }
                        } catch (p) {
                            s || o(-1, p)
                        }
                        c && o(a, u, c, h)
                    }, i.async ? 4 === l.readyState ? setTimeout(n) : (r = ++Qi, Gi && (Xi || (Xi = {}, ue(t).unload(Gi)), Xi[r] = n), l.onreadystatechange = n) : n()
                },
                abort: function() {
                    n && n(e, !0)
                }
            }
        }
    });
    var Ji, Zi, tn = /^(?:toggle|show|hide)$/,
        en = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
        nn = /queueHooks$/,
        sn = [B],
        on = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    s = en.exec(e),
                    o = s && s[3] || (ue.cssNumber[t] ? "" : "px"),
                    r = (ue.cssNumber[t] || "px" !== o && +n) && en.exec(ue.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== o) {
                    o = o || r[3], s = s || [], r = +n || 1;
                    do a = a || ".5", r /= a, ue.style(i.elem, t, r + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return s && (r = i.start = +r || +n || 0, i.unit = o, i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), i
            }]
        };
    ue.Animation = ue.extend(F, {
        tweener: function(t, e) {
            ue.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, s = t.length; s > n; n++) i = t[n], on[i] = on[i] || [], on[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? sn.unshift(t) : sn.push(t)
        }
    }), ue.Tween = q, q.prototype = {
        constructor: q,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ue.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = q.propHooks[this.prop];
            return t && t.get ? t.get(this) : q.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = q.propHooks[this.prop];
            return this.pos = e = this.options.duration ? ue.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ue.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                ue.fx.step[t.prop] ? ue.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ue.cssProps[t.prop]] || ue.cssHooks[t.prop]) ? ue.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ue.each(["toggle", "show", "hide"], function(t, e) {
        var i = ue.fn[e];
        ue.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(Y(e, !0), t, n, s)
        }
    }), ue.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(k).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var s = ue.isEmptyObject(t),
                o = ue.speed(e, i, n),
                r = function() {
                    var e = F(this, ue.extend({}, t), o);
                    (s || ue._data(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(t, i, n) {
            var s = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    i = null != t && t + "queueHooks",
                    o = ue.timers,
                    r = ue._data(this);
                if (i) r[i] && r[i].stop && s(r[i]);
                else
                    for (i in r) r[i] && r[i].stop && nn.test(i) && s(r[i]);
                for (i = o.length; i--;) o[i].elem === this && (null == t || o[i].queue === t) && (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                (e || !n) && ue.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, i = ue._data(this),
                    n = i[t + "queue"],
                    s = i[t + "queueHooks"],
                    o = ue.timers,
                    r = n ? n.length : 0;
                for (i.finish = !0, ue.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), ue.each({
        slideDown: Y("show"),
        slideUp: Y("hide"),
        slideToggle: Y("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ue.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), ue.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? ue.extend({}, t) : {
            complete: i || !i && e || ue.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !ue.isFunction(e) && e
        };
        return n.duration = ue.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ue.fx.speeds ? ue.fx.speeds[n.duration] : ue.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ue.isFunction(n.old) && n.old.call(this), n.queue && ue.dequeue(this, n.queue)
        }, n
    }, ue.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, ue.timers = [], ue.fx = q.prototype.init, ue.fx.tick = function() {
        var t, i = ue.timers,
            n = 0;
        for (Ji = ue.now(); n < i.length; n++) t = i[n], !t() && i[n] === t && i.splice(n--, 1);
        i.length || ue.fx.stop(), Ji = e
    }, ue.fx.timer = function(t) {
        t() && ue.timers.push(t) && ue.fx.start()
    }, ue.fx.interval = 13, ue.fx.start = function() {
        Zi || (Zi = setInterval(ue.fx.tick, ue.fx.interval))
    }, ue.fx.stop = function() {
        clearInterval(Zi), Zi = null
    }, ue.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ue.fx.step = {}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function(t) {
        return ue.grep(ue.timers, function(e) {
            return t === e.elem
        }).length
    }), ue.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            ue.offset.setOffset(this, t, e)
        });
        var i, n, s = {
                top: 0,
                left: 0
            },
            o = this[0],
            r = o && o.ownerDocument;
        if (r) return i = r.documentElement, ue.contains(i, o) ? (typeof o.getBoundingClientRect !== X && (s = o.getBoundingClientRect()), n = $(r), {
            top: s.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
            left: s.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
        }) : s
    }, ue.offset = {
        setOffset: function(t, e, i) {
            var n = ue.css(t, "position");
            "static" === n && (t.style.position = "relative");
            var s, o, r = ue(t),
                a = r.offset(),
                l = ue.css(t, "top"),
                h = ue.css(t, "left"),
                u = ("absolute" === n || "fixed" === n) && ue.inArray("auto", [l, h]) > -1,
                c = {},
                d = {};
            u ? (d = r.position(), s = d.top, o = d.left) : (s = parseFloat(l) || 0, o = parseFloat(h) || 0), ue.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (c.top = e.top - a.top + s), null != e.left && (c.left = e.left - a.left + o), "using" in e ? e.using.call(t, c) : r.css(c)
        }
    }, ue.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === ue.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ue.nodeName(t[0], "html") || (i = t.offset()), i.top += ue.css(t[0], "borderTopWidth", !0), i.left += ue.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - ue.css(n, "marginTop", !0),
                    left: e.left - i.left - ue.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || G; t && !ue.nodeName(t, "html") && "static" === ue.css(t, "position");) t = t.offsetParent;
                return t || G
            })
        }
    }), ue.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var n = /Y/.test(i);
        ue.fn[t] = function(s) {
            return ue.access(this, function(t, s, o) {
                var r = $(t);
                return o === e ? r ? i in r ? r[i] : r.document.documentElement[s] : t[s] : void(r ? r.scrollTo(n ? ue(r).scrollLeft() : o, n ? o : ue(r).scrollTop()) : t[s] = o)
            }, t, s, arguments.length, null)
        }
    }), ue.each({
        Height: "height",
        Width: "width"
    }, function(t, i) {
        ue.each({
            padding: "inner" + t,
            content: i,
            "": "outer" + t
        }, function(n, s) {
            ue.fn[s] = function(s, o) {
                var r = arguments.length && (n || "boolean" != typeof s),
                    a = n || (s === !0 || o === !0 ? "margin" : "border");
                return ue.access(this, function(i, n, s) {
                    var o;
                    return ue.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (o = i.documentElement, Math.max(i.body["scroll" + t], o["scroll" + t], i.body["offset" + t], o["offset" + t], o["client" + t])) : s === e ? ue.css(i, n, a) : ue.style(i, n, s, a)
                }, i, r ? s : e, r, null)
            }
        })
    }), ue.fn.size = function() {
        return this.length
    }, ue.fn.andSelf = ue.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ue : (t.jQuery = t.$ = ue, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ue
    }))
}(window),
/*! jQuery UI - v1.10.3 - 2013-05-03
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function(t, e) {
    function i(e, i) {
        var s, o, r, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (r = t("img[usemap=#" + o + "]")[0], !!r && n(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
    }

    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    var s = 0,
        o = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function(e) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), n && n.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length)
                for (var n, s, o = t(this[0]); o.length && o[0] !== document;) {
                    if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    o = o.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, n) {
            return !!t.data(e, n[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var n = t.attr(e, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && i(e, !s)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, n) {
        function s(e, i, n, s) {
            return t.each(o, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            r = n.toLowerCase(),
            a = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + n] = function(i) {
            return i === e ? a["inner" + n].call(this) : this.each(function() {
                t(this).css(r, s(this, i) + "px")
            })
        }, t.fn["outer" + n] = function(e, i) {
            return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function() {
                t(this).css(r, s(this, e, !0, i) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i) {
                var n, s = t.plugins[e];
                if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (n = 0; s.length > n; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
            }
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        }
    })
}(jQuery),
function(t, e) {
    var i = 0,
        n = Array.prototype.slice,
        s = t.cleanData;
    t.cleanData = function(e) {
        for (var i, n = 0; null != (i = e[n]); n++) try {
            t(i).triggerHandler("remove")
        } catch (o) {}
        s(e)
    }, t.widget = function(i, n, s) {
        var o, r, a, l, h = {},
            u = i.split(".")[0];
        i = i.split(".")[1], o = u + "-" + i, s || (s = n, n = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }, t[u] = t[u] || {}, r = t[u][i], a = t[u][i] = function(t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new a(t, i)
        }, t.extend(a, r, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), l = new n, l.options = t.widget.extend({}, l.options), t.each(s, function(i, s) {
            return t.isFunction(s) ? (h[i] = function() {
                var t = function() {
                        return n.prototype[i].apply(this, arguments)
                    },
                    e = function(t) {
                        return n.prototype[i].apply(this, t)
                    };
                return function() {
                    var i, n = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = e, i = s.apply(this, arguments), this._super = n, this._superApply = o, i
                }
            }(), e) : (h[i] = s, e)
        }), a.prototype = t.widget.extend(l, {
            widgetEventPrefix: r ? l.widgetEventPrefix : i
        }, h, {
            constructor: a,
            namespace: u,
            widgetName: i,
            widgetFullName: o
        }), r ? (t.each(r._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, a, i._proto)
        }), delete r._childConstructors) : n._childConstructors.push(a), t.widget.bridge(i, a)
    }, t.widget.extend = function(i) {
        for (var s, o, r = n.call(arguments, 1), a = 0, l = r.length; l > a; a++)
            for (s in r[a]) o = r[a][s], r[a].hasOwnProperty(s) && o !== e && (i[s] = t.isPlainObject(o) ? t.isPlainObject(i[s]) ? t.widget.extend({}, i[s], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function(i, s) {
        var o = s.prototype.widgetFullName || i;
        t.fn[i] = function(r) {
            var a = "string" == typeof r,
                l = n.call(arguments, 1),
                h = this;
            return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r, this.each(a ? function() {
                var n, s = t.data(this, o);
                return s ? t.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, l), n !== s && n !== e ? (h = n && n.jquery ? h.pushStack(n.get()) : n, !1) : e) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'")
            } : function() {
                var e = t.data(this, o);
                e ? e.option(r || {})._init() : t.data(this, o, new s(r, this))
            }), h
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, n) {
            var s, o, r, a = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (a = {}, s = i.split("."), i = s.shift(), s.length) {
                    for (o = a[i] = t.widget.extend({}, this.options[i]), r = 0; s.length - 1 > r; r++) o[s[r]] = o[s[r]] || {}, o = o[s[r]];
                    if (i = s.pop(), n === e) return o[i] === e ? null : o[i];
                    o[i] = n
                } else {
                    if (n === e) return this.options[i] === e ? null : this.options[i];
                    a[i] = n
                }
            return this._setOptions(a), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, n, s) {
            var o, r = this;
            "boolean" != typeof i && (s = n, n = i, i = !1), s ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (s = n, n = this.element, o = this.widget()), t.each(s, function(s, a) {
                function l() {
                    return i || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? r[a] : a).apply(r, arguments) : e
                }
                "string" != typeof a && (l.guid = a.guid = a.guid || l.guid || t.guid++);
                var h = s.match(/^(\w+)\s*(.*)$/),
                    u = h[1] + r.eventNamespace,
                    c = h[2];
                c ? o.delegate(c, u, l) : n.bind(u, l)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i()
            })
        }
    })
}(jQuery),
function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var n = this,
                    s = 1 === i.which,
                    o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    n.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return n._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return n._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", e, n) === !1) return this._mouseUp({}), !1;
                this.position = n.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            return s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: s.scrollTop(),
                left: s.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * n
            }
        },
        _generatePosition: function(e) {
            var i, n, s, o, r = this.options,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = e.pageX,
                h = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (n = this.relative_container.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, n) {
            return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, n)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var n = t(this).data("ui-draggable"),
                s = n.options,
                o = t.extend({}, i, {
                    item: n.element
                });
            n.sortables = [], t(s.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (n.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o))
            })
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable"),
                s = t.extend({}, i, {
                    item: n.element
                });
            t.each(n.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === n.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, s))
            })
        },
        drag: function(e, i) {
            var n = t(this).data("ui-draggable"),
                s = this;
            t.each(n.sortables, function() {
                var o = !1,
                    r = this;
                this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(n.sortables, function() {
                    return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this !== r && this.instance._intersectsWith(this.instance.containerCache) && t.contains(r.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", e), n.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body"),
                i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },
        stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var n = t(i.helper),
                s = t(this).data("ui-draggable").options;
            n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable").options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function(e) {
            var i = t(this).data("ui-draggable"),
                n = i.options,
                s = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), s !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("ui-draggable"),
                i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = t(this),
                    n = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function(e, i) {
            var n, s, o, r, a, l, h, u, c, d, p = t(this).data("ui-draggable"),
                f = p.options,
                g = f.snapTolerance,
                m = i.offset.left,
                v = m + p.helperProportions.width,
                b = i.offset.top,
                y = b + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--) a = p.snapElements[c].left, l = a + p.snapElements[c].width, h = p.snapElements[c].top, u = h + p.snapElements[c].height, a - g > v || m > l + g || h - g > y || b > u + g || !t.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item) ? (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[c].item
            })), p.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(h - y), s = g >= Math.abs(u - b), o = g >= Math.abs(a - v), r = g >= Math.abs(l - m), n && (i.position.top = p._convertPositionTo("relative", {
                top: h - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), s && (i.position.top = p._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: a - p.helperProportions.width
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - p.margins.left)), d = n || s || o || r, "outer" !== f.snapMode && (n = g >= Math.abs(h - b), s = g >= Math.abs(u - y), o = g >= Math.abs(a - m), r = g >= Math.abs(l - v), n && (i.position.top = p._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - p.margins.top), s && (i.position.top = p._convertPositionTo("relative", {
                top: u - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: a
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[c].snapping && (n || s || o || r || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[c].item
            })), p.snapElements[c].snapping = n || s || o || r || d)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e, i = this.data("ui-draggable").options,
                n = t.makeArray(t(i.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            n.length && (e = parseInt(t(n[0]).css("zIndex"), 10) || 0, t(n).each(function(i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + n.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var n = t(i.helper),
                s = t(this).data("ui-draggable").options;
            n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable").options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    })
}(jQuery),
function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    t.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e = this.options,
                i = e.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++) i[e] === this && i.splice(e, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(e, i) {
            "accept" === e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var n = i || t.ui.ddmanager.current,
                s = !1;
            return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var e = t.data(this, "ui-droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope === n.options.scope && e.accept.call(e.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(e, {
                    offset: e.element.offset()
                }), e.options.tolerance) ? (s = !0, !1) : void 0
            }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1) : !1
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.ui.intersect = function(t, i, n) {
        if (!i.offset) return !1;
        var s, o, r = (t.positionAbs || t.position.absolute).left,
            a = r + t.helperProportions.width,
            l = (t.positionAbs || t.position.absolute).top,
            h = l + t.helperProportions.height,
            u = i.offset.left,
            c = u + i.proportions.width,
            d = i.offset.top,
            p = d + i.proportions.height;
        switch (n) {
            case "fit":
                return r >= u && c >= a && l >= d && p >= h;
            case "intersect":
                return r + t.helperProportions.width / 2 > u && c > a - t.helperProportions.width / 2 && l + t.helperProportions.height / 2 > d && p > h - t.helperProportions.height / 2;
            case "pointer":
                return s = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, o = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(o, d, i.proportions.height) && e(s, u, i.proportions.width);
            case "touch":
                return (l >= d && p >= l || h >= d && p >= h || d > l && h > p) && (r >= u && c >= r || a >= u && c >= a || u > r && a > c);
            default:
                return !1
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(e, i) {
            var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                r = i ? i.type : null,
                a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (n = 0; o.length > n; n++)
                if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                    for (s = 0; a.length > s; s++)
                        if (a[s] === o[n].element[0]) {
                            o[n].proportions.height = 0;
                            continue t
                        }
                    o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions = {
                        width: o[n].element[0].offsetWidth,
                        height: o[n].element[0].offsetHeight
                    })
                }
        },
        drop: function(e, i) {
            var n = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), n
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, r = t.ui.intersect(e, this, this.options.tolerance),
                        a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                    a && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t.data(this, "ui-droppable").options.scope === s
                    }), o.length && (n = t.data(o[0], "ui-droppable"), n.greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
}(jQuery),
function(t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }

    function i(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, i, n, s, o, r = this,
                a = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!a.aspectRatio,
                    aspectRatio: a.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++) n = t.trim(e[i]), o = "ui-resizable-" + n, s = t("<div class='ui-resizable-handle " + o + "'></div>"), s.css({
                    zIndex: a.zIndex
                }), "se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(s);
            this._renderAxis = function(e) {
                var i, n, s, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                r.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = s && s[1] ? s[1] : "se")
            }), a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                a.disabled || (t(this).removeClass("ui-resizable-autohide"), r._handles.show())
            }).mouseleave(function() {
                a.disabled || r.resizing || (t(this).addClass("ui-resizable-autohide"), r._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i, n, s = !1;
            for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(i) {
            var n, s, o, r = this.options,
                a = this.element.position(),
                l = this.element;
            return this.resizing = !0, /absolute/.test(l.css("position")) ? l.css({
                position: "absolute",
                top: l.css("top"),
                left: l.css("left")
            }) : l.is(".ui-draggable") && l.css({
                position: "absolute",
                top: a.top,
                left: a.left
            }), this._renderProxy(), n = e(this.helper.css("left")), s = e(this.helper.css("top")), r.containment && (n += t(r.containment).scrollLeft() || 0, s += t(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: n,
                top: s
            }, this.size = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalSize = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalPosition = {
                left: n,
                top: s
            }, this.sizeDiff = {
                width: l.outerWidth() - l.width(),
                height: l.outerHeight() - l.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), l.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function(e) {
            var i, n = this.helper,
                s = {},
                o = this.originalMousePosition,
                r = this.axis,
                a = this.position.top,
                l = this.position.left,
                h = this.size.width,
                u = this.size.height,
                c = e.pageX - o.left || 0,
                d = e.pageY - o.top || 0,
                p = this._change[r];
            return p ? (i = p.apply(this, [e, c, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== a && (s.top = this.position.top + "px"), this.position.left !== l && (s.left = this.position.left + "px"), this.size.width !== h && (s.width = this.size.width + "px"), this.size.height !== u && (s.height = this.size.height + "px"), n.css(s), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || this._trigger("resize", e, this.ui()), !1) : !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, n, s, o, r, a, l, h = this.options,
                u = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && t.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = n ? 0 : u.sizeDiff.width, r = {
                width: u.helper.width() - o,
                height: u.helper.height() - s
            }, a = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, l = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, {
                top: l,
                left: a
            })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, n, s, o, r, a = this.options;
            r = {
                minWidth: i(a.minWidth) ? a.minWidth : 0,
                maxWidth: i(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: i(a.minHeight) ? a.minHeight : 0,
                maxHeight: i(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, s = r.minWidth / this.aspectRatio, n = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), s > r.minHeight && (r.minHeight = s), r.maxWidth > n && (r.maxWidth = n), r.maxHeight > o && (r.maxHeight = o)), this._vBoundaries = r
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                n = this.size,
                s = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (n.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (n.height - t.height), t.left = e.left + (n.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                n = this.axis,
                s = i(t.width) && e.maxWidth && e.maxWidth < t.width,
                o = i(t.height) && e.maxHeight && e.maxHeight < t.height,
                r = i(t.width) && e.minWidth && e.minWidth > t.width,
                a = i(t.height) && e.minHeight && e.minHeight > t.height,
                l = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                u = /sw|nw|w/.test(n),
                c = /nw|ne|n/.test(n);
            return r && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), o && (t.height = e.maxHeight), r && u && (t.left = l - e.minWidth), s && u && (t.left = l - e.maxWidth), a && c && (t.top = h - e.minHeight), o && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, n, s, o = this.helper || this.element;
                for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                    if (s = this._proportionallyResizeElements[t], !this.borderDif)
                        for (this.borderDif = [], i = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")], n = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")], e = 0; i.length > e; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(n[e], 10) || 0);
                    s.css({
                        height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                    n = this.originalPosition;
                return {
                    left: n.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var n = this.originalSize,
                    s = this.originalPosition;
                return {
                    top: s.top + i,
                    height: n.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            sw: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            },
            ne: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            nw: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("ui-resizable"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                r = o && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                a = o ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - a,
                    height: i.size.height - r
                },
                h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, u && h ? {
                top: u,
                left: h
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    s && s.length && t(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, n, s, o, r, a, l, h = t(this).data("ui-resizable"),
                u = h.options,
                c = h.element,
                d = u.containment,
                p = d instanceof t ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            p && (h.containerElement = t(p), /document/.test(d) || d === document ? (h.containerOffset = {
                left: 0,
                top: 0
            }, h.containerPosition = {
                left: 0,
                top: 0
            }, h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (i = t(p), n = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                n[t] = e(i.css("padding" + s))
            }), h.containerOffset = i.offset(), h.containerPosition = i.position(), h.containerSize = {
                height: i.innerHeight() - n[3],
                width: i.innerWidth() - n[1]
            }, s = h.containerOffset, o = h.containerSize.height, r = h.containerSize.width, a = t.ui.hasScroll(p, "left") ? p.scrollWidth : r, l = t.ui.hasScroll(p) ? p.scrollHeight : o, h.parentData = {
                element: p,
                left: s.left,
                top: s.top,
                width: a,
                height: l
            }))
        },
        resize: function(e) {
            var i, n, s, o, r = t(this).data("ui-resizable"),
                a = r.options,
                l = r.containerOffset,
                h = r.position,
                u = r._aspectRatio || e.shiftKey,
                c = {
                    top: 0,
                    left: 0
                },
                d = r.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (c = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - c.left), u && (r.size.height = r.size.width / r.aspectRatio), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), u && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? l.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top, i = Math.abs((r._helper ? r.offset.left - c.left : r.offset.left - c.left) + r.sizeDiff.width), n = Math.abs((r._helper ? r.offset.top - c.top : r.offset.top - l.top) + r.sizeDiff.height), s = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), s && o && (i -= r.parentData.left), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, u && (r.size.height = r.size.width / r.aspectRatio)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, u && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = e.containerOffset,
                s = e.containerPosition,
                o = e.containerElement,
                r = t(e.helper),
                a = r.offset(),
                l = r.outerWidth() - e.sizeDiff.width,
                h = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: h
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: h
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = function(e) {
                    t(e).each(function() {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                n(t)
            })
        },
        resize: function(e, i) {
            var n = t(this).data("ui-resizable"),
                s = n.options,
                o = n.originalSize,
                r = n.originalPosition,
                a = {
                    height: n.size.height - o.height || 0,
                    width: n.size.width - o.width || 0,
                    top: n.position.top - r.top || 0,
                    left: n.position.left - r.left || 0
                },
                l = function(e, n) {
                    t(e).each(function() {
                        var e = t(this),
                            s = t(this).data("ui-resizable-alsoresize"),
                            o = {},
                            r = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(r, function(t, e) {
                            var i = (s[e] || 0) + (a[e] || 0);
                            i && i >= 0 && (o[e] = i || null)
                        }), e.css(o)
                    })
                };
            "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function(t, e) {
                l(t, e)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                n = e.size,
                s = e.originalSize,
                o = e.originalPosition,
                r = e.axis,
                a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                l = a[0] || 1,
                h = a[1] || 1,
                u = Math.round((n.width - s.width) / l) * l,
                c = Math.round((n.height - s.height) / h) * h,
                d = s.width + u,
                p = s.height + c,
                f = i.maxWidth && d > i.maxWidth,
                g = i.maxHeight && p > i.maxHeight,
                m = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = a, m && (d += l), v && (p += h), f && (d -= l), g && (p -= h), /^(se|s|e)$/.test(r) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - c) : /^(sw)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - u) : (e.size.width = d, e.size.height = p, e.position.top = o.top - c, e.position.left = o.left - u)
        }
    })
}(jQuery),
function(t) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this,
                n = this.options;
            this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var n = t.data(this, "selectable-item");
                n.startselected = !0, e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: n.element
                }))
            }), t(e.target).parents().addBack().each(function() {
                var n, s = t.data(this, "selectable-item");
                return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                    selecting: s.element
                }) : i._trigger("unselecting", e, {
                    unselecting: s.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this,
                    s = this.options,
                    o = this.opos[0],
                    r = this.opos[1],
                    a = e.pageX,
                    l = e.pageY;
                return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({
                    left: o,
                    top: r,
                    width: a - o,
                    height: l - r
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        h = !1;
                    i && i.element !== n.element[0] && ("touch" === s.tolerance ? h = !(i.left > a || o > i.right || i.top > l || r > i.bottom) : "fit" === s.tolerance && (h = i.left > o && a > i.right && i.top > r && l > i.bottom), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                    unselected: n.element
                })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                    selected: n.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    })
}(jQuery),
function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var n = null,
                s = !1,
                o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
            }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function() {
                this === e.target && (s = !0)
            }), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(e, i, n) {
            var s, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s, o, r = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - t(document).scrollTop() < r.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - r.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < r.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + r.scrollSpeed)), e.pageX - t(document).scrollLeft() < r.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - r.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < r.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + r.scrollSpeed))), a !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        o = this.options.axis,
                        r = {};
                    o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                        n._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function() {
                n.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = t.left,
                r = o + t.width,
                a = t.top,
                l = a + t.height,
                h = this.offset.click.top,
                u = this.offset.click.left,
                c = "x" === this.options.axis || n + h > a && l > n + h,
                d = "y" === this.options.axis || e + u > o && r > e + u,
                p = c && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                s = i && n,
                o = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return s ? this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                n = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && n || "left" === o && !n : s && ("down" === s && i || "up" === s && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i, n, s, o, r = [],
                a = [],
                l = this._connectWith();
            if (l && e)
                for (i = l.length - 1; i >= 0; i--)
                    for (s = t(l[i]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && a.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(function() {
                r.push(this)
            });
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, n, s, o, r, a, l, h, u = this.items,
                c = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = t(d[i]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (c.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = c.length - 1; i >= 0; i--)
                for (r = c[i][1], a = c[i][0], n = 0, h = a.length; h > n; n++) l = t(a[n]), l.data(this.widgetName + "-item", r), u.push({
                    item: l,
                    instance: r,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, o;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === n ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s)
                    }) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function(t, s) {
                    (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(n) {
            var s, o, r, a, l, h, u, c, d, p, f = null,
                g = null;
            for (s = this.containers.length - 1; s >= 0; s--)
                if (!t.contains(this.currentItem[0], this.containers[s].element[0]))
                    if (this._intersectsWith(this.containers[s].containerCache)) {
                        if (f && t.contains(this.containers[s].element[0], f.element[0])) continue;
                        f = this.containers[s], g = s
                    } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", n, this._uiHash(this)), this.containers[s].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", n, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (r = 1e4, a = null, p = f.floating || i(this.currentItem), l = p ? "left" : "top", h = p ? "width" : "height", u = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (c = this.items[o].item.offset()[l], d = !1, Math.abs(c - u) > Math.abs(c + this.items[o][h] - u) && (d = !0, c += this.items[o][h]), r > Math.abs(c - u) && (r = Math.abs(c - u), a = this.items[o], this.direction = d ? "up" : "down"));
                    if (!a && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[g]) return;
                    a ? this._rearrange(n, a, null, !0) : this._rearrange(n, null, this.containers[g].element, !0), this._trigger("change", n, this._uiHash()), this.containers[g]._trigger("change", n, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", n, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            }
        },
        _generatePosition: function(e) {
            var i, n, s = this.options,
                o = e.pageX,
                r = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function(t, e) {
            this.reverting = !1;
            var i, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (n.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), n.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), n.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || n.push(function(t) {
                return function(e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (n.push(function(t) {
                return function(e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), i = 0; n.length > i; i++) n[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (i = 0; n.length > i; i++) n[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery),
function(t, e) {
    var i = "ui-effects-";
    t.effects = {
            effect: {}
        },
        function(t, e) {
            function i(t, e, i) {
                var n = c[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t)
            }

            function n(i) {
                var n = h(),
                    s = n._rgba = [];
                return i = i.toLowerCase(), f(l, function(t, o) {
                    var r, a = o.re.exec(i),
                        l = a && o.parse(a),
                        h = o.space || "rgba";
                    return l ? (r = n[h](l), n[u[h].cache] = r[u[h].cache], s = n._rgba = r._rgba, !1) : e
                }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i]
            }

            function s(t, e, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                a = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                h = t.Color = function(e, i, n, s) {
                    return new t.Color.fn.parse(e, i, n, s)
                },
                u = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                c = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                d = h.support = {},
                p = t("<p>")[0],
                f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), h.fn = t.extend(h.prototype, {
                parse: function(s, r, a, l) {
                    if (s === e) return this._rgba = [null, null, null, null], this;
                    (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                    var c = this,
                        d = t.type(s),
                        p = this._rgba = [];
                    return r !== e && (s = [s, r, a, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(u.rgba.props, function(t, e) {
                        p[e.idx] = i(s[e.idx], e)
                    }), this) : "object" === d ? (s instanceof h ? f(u, function(t, e) {
                        s[e.cache] && (c[e.cache] = s[e.cache].slice())
                    }) : f(u, function(e, n) {
                        var o = n.cache;
                        f(n.props, function(t, e) {
                            if (!c[o] && n.to) {
                                if ("alpha" === t || null == s[t]) return;
                                c[o] = n.to(c._rgba)
                            }
                            c[o][e.idx] = i(s[t], e, !0)
                        }), c[o] && 0 > t.inArray(null, c[o].slice(0, 3)) && (c[o][3] = 1, n.from && (c._rgba = n.from(c[o])))
                    }), this) : e
                },
                is: function(t) {
                    var i = h(t),
                        n = !0,
                        s = this;
                    return f(u, function(t, o) {
                        var r, a = i[o.cache];
                        return a && (r = s[o.cache] || o.to && o.to(s._rgba) || [], f(o.props, function(t, i) {
                            return null != a[i.idx] ? n = a[i.idx] === r[i.idx] : e
                        })), n
                    }), n
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return f(u, function(i, n) {
                        e[n.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function(t, e) {
                    var n = h(t),
                        s = n._space(),
                        o = u[s],
                        r = 0 === this.alpha() ? h("transparent") : this,
                        a = r[o.cache] || o.to(r._rgba),
                        l = a.slice();
                    return n = n[o.cache], f(o.props, function(t, s) {
                        var o = s.idx,
                            r = a[o],
                            h = n[o],
                            u = c[s.type] || {};
                        null !== h && (null === r ? l[o] = h : (u.mod && (h - r > u.mod / 2 ? r += u.mod : r - h > u.mod / 2 && (r -= u.mod)), l[o] = i((h - r) * e + r, s)))
                    }), this[s](l)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = h(e)._rgba;
                    return h(t.map(i, function(t, e) {
                        return (1 - n) * s[e] + n * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), h.fn.parse.prototype = h.fn, u.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, n = t[0] / 255,
                    s = t[1] / 255,
                    o = t[2] / 255,
                    r = t[3],
                    a = Math.max(n, s, o),
                    l = Math.min(n, s, o),
                    h = a - l,
                    u = a + l,
                    c = .5 * u;
                return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= c ? h / u : h / (2 - u), [Math.round(e) % 360, i, c, null == r ? 1 : r]
            }, u.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    n = t[2],
                    o = t[3],
                    r = .5 >= n ? n * (1 + i) : n + i - n * i,
                    a = 2 * n - r;
                return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
            }, f(u, function(n, s) {
                var o = s.props,
                    r = s.cache,
                    l = s.to,
                    u = s.from;
                h.fn[n] = function(n) {
                    if (l && !this[r] && (this[r] = l(this._rgba)), n === e) return this[r].slice();
                    var s, a = t.type(n),
                        c = "array" === a || "object" === a ? n : arguments,
                        d = this[r].slice();
                    return f(o, function(t, e) {
                        var n = c["object" === a ? t : e.idx];
                        null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                    }), u ? (s = h(u(d)), s[r] = d, s) : h(d)
                }, f(o, function(e, i) {
                    h.fn[e] || (h.fn[e] = function(s) {
                        var o, r = t.type(s),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                            h = this[l](),
                            u = h[i.idx];
                        return "undefined" === r ? u : ("function" === r && (s = s.call(this, u), r = t.type(s)), null == s && i.empty ? this : ("string" === r && (o = a.exec(s), o && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                    })
                })
            }), h.hook = function(e) {
                var i = e.split(" ");
                f(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, s) {
                            var o, r, a = "";
                            if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                if (s = h(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                    for (r = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === a || "transparent" === a) && r && r.style;) try {
                                        a = t.css(r, "backgroundColor"), r = r.parentNode
                                    } catch (l) {}
                                    s = s.blend(a && "transparent" !== a ? a : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try {
                                e.style[i] = s
                            } catch (l) {}
                        }
                    }, t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, h.hook(r), t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                        e["border" + n + "Color"] = t
                    }), e
                }
            }, o = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function() {
            function i(e) {
                var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }

            function n(e, i) {
                var n, s, r = {};
                for (n in i) s = i[n], e[n] !== s && (o[n] || (t.fx.step[n] || !isNaN(parseFloat(s))) && (r[n] = s));
                return r
            }
            var s = ["add", "remove", "toggle"],
                o = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function(e, o, r, a) {
                var l = t.speed(o, r, a);
                return this.queue(function() {
                    var o, r = t(this),
                        a = r.attr("class") || "",
                        h = l.children ? r.find("*").addBack() : r;
                    h = h.map(function() {
                        var e = t(this);
                        return {
                            el: e,
                            start: i(this)
                        }
                    }), o = function() {
                        t.each(s, function(t, i) {
                            e[i] && r[i + "Class"](e[i])
                        })
                    }, o(), h = h.map(function() {
                        return this.end = i(this.el[0]), this.diff = n(this.start, this.end), this
                    }), r.attr("class", a), h = h.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            n = t.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, h.get()).done(function() {
                        o(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(r[0])
                    })
                })
            }, t.fn.extend({
                addClass: function(e) {
                    return function(i, n, s, o) {
                        return n ? t.effects.animateClass.call(this, {
                            add: i
                        }, n, s, o) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function(e) {
                    return function(i, n, s, o) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, n, s, o) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(i) {
                    return function(n, s, o, r, a) {
                        return "boolean" == typeof s || s === e ? o ? t.effects.animateClass.call(this, s ? {
                            add: n
                        } : {
                            remove: n
                        }, o, r, a) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: n
                        }, s, o, r)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, i, n, s, o) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, n, s, o)
                }
            })
        }(),
        function() {
            function n(e, i, n, s) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
            }

            function s(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
            }
            t.extend(t.effects, {
                version: "1.10.3",
                save: function(t, e) {
                    for (var n = 0; e.length > n; n++) null !== e[n] && t.data(i + e[n], t[0].style[e[n]])
                },
                restore: function(t, n) {
                    var s, o;
                    for (o = 0; n.length > o; o++) null !== n[o] && (s = t.data(i + n[o]), s === e && (s = ""), t.css(n[o], s))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function(t, e) {
                    var i, n;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            "float": e.css("float")
                        },
                        n = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        s = {
                            width: e.width(),
                            height: e.height()
                        },
                        o = document.activeElement;
                    try {
                        o.id
                    } catch (r) {
                        o = document.body
                    }
                    return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                        i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(s), n.css(i).show()
                },
                removeWrapper: function(e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                },
                setTransition: function(e, i, n, s) {
                    return s = s || {}, t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }), s
                }
            }), t.fn.extend({
                effect: function() {
                    function e(e) {
                        function n() {
                            t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e()
                        }
                        var s = t(this),
                            o = i.complete,
                            a = i.mode;
                        (s.is(":hidden") ? "hide" === a : "show" === a) ? (s[a](), n()) : r.call(s[0], i, n)
                    }
                    var i = n.apply(this, arguments),
                        s = i.mode,
                        o = i.queue,
                        r = t.effects.effect[i.effect];
                    return t.fx.off || !r ? s ? this[s](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
                },
                show: function(t) {
                    return function(e) {
                        if (s(e)) return t.apply(this, arguments);
                        var i = n.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(e) {
                        if (s(e)) return t.apply(this, arguments);
                        var i = n.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(e) {
                        if (s(e) || "boolean" == typeof e) return t.apply(this, arguments);
                        var i = n.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        n = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) {
                        i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                    }), n
                }
            })
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                e[i] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }()
}(jQuery),
function(t) {
    var e = 0,
        i = {},
        n = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show", t.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t(),
                content: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)))
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    n = this.headers.length,
                    s = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(s + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(s - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[n - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var i, n = this.options,
                s = n.heightStyle,
                o = this.element.parent(),
                r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
            this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(e) {
                var i = t(this),
                    n = i.attr("id"),
                    s = i.next(),
                    o = s.attr("id");
                n || (n = r + "-header-" + e, i.attr("id", n)), o || (o = r + "-panel-" + e, s.attr("id", o)), i.attr("aria-controls", o), s.attr("aria-labelledby", n)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(n.event), "fill" === s ? (i = o.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.headers.each(function() {
                i -= t(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (i = 0, this.headers.next().each(function() {
                i = Math.max(i, t(this).css("height", "").height())
            }).height(i))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i = this.options,
                n = this.active,
                s = t(e.currentTarget),
                o = s[0] === n[0],
                r = o && i.collapsible,
                a = r ? t() : s.next(),
                l = n.next(),
                h = {
                    oldHeader: n,
                    oldPanel: l,
                    newHeader: r ? t() : s,
                    newPanel: a
                };
            e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = o ? t() : s, this._toggle(h), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                n = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, e, s) {
            var o, r, a, l = this,
                h = 0,
                u = t.length && (!e.length || t.index() < e.index()),
                c = this.options.animate || {},
                d = u && c.down || c,
                p = function() {
                    l._toggleComplete(s)
                };
            return "number" == typeof d && (a = d), "string" == typeof d && (r = d), r = r || d.easing || c.easing, a = a || d.duration || c.duration, e.length ? t.length ? (o = t.show().outerHeight(), e.animate(i, {
                duration: a,
                easing: r,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(n, {
                duration: a,
                easing: r,
                complete: p,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? h += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - h), h = 0)
                }
            })) : e.animate(i, a, r, p) : t.animate(n, a, r, p)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    })
}(jQuery),
function(t) {
    var e = 0;
    t.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === s,
                r = "input" === s;
            this.isMultiLine = o ? !0 : r ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                    e = !1, n = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (s.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", s);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", s);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", s);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", s);
                            break;
                        case o.ENTER:
                        case o.NUMPAD_ENTER:
                            this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(s)
                    }
                },
                keypress: function(n) {
                    if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                        }
                    }
                },
                input: function(t) {
                    return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown", function(n) {
                            n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                        })
                    })
                },
                menufocus: function(e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent)
                    });
                    var n = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item"),
                        n = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                        this.previous = n, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        },
        _initSource: function() {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                n(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        s(t)
                    },
                    error: function() {
                        s([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var t = this,
                i = ++e;
            return function(n) {
                i === e && t.__response(n), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var n = this;
            t.each(i, function(t, i) {
                n._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return n.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }
    })
}(jQuery),
function(t) {
    var e, i, n, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
        r = "ui-state-hover ui-state-active ",
        a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        l = function() {
            var e = t(this);
            setTimeout(function() {
                e.find(":ui-button").button("refresh")
            }, 1)
        },
        h = function(e) {
            var i = e.name,
                n = e.form,
                s = t([]);
            return i && (i = i.replace(/'/g, "\\'"), s = n ? t(n).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
                return !this.form
            })), s
        };
    t.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var r = this,
                a = this.options,
                u = "checkbox" === this.type || "radio" === this.type,
                c = u ? "" : "ui-state-active",
                d = "ui-state-focus";
            null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                a.disabled || this === e && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                a.disabled || t(this).removeClass(c)
            }).bind("click" + this.eventNamespace, function(t) {
                a.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function() {
                r.buttonElement.addClass(d)
            }).bind("blur" + this.eventNamespace, function() {
                r.buttonElement.removeClass(d)
            }), u && (this.element.bind("change" + this.eventNamespace, function() {
                s || r.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
                a.disabled || (s = !1, i = t.pageX, n = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function(t) {
                a.disabled || (i !== t.pageX || n !== t.pageY) && (s = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return a.disabled || s ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (a.disabled || s) return !1;
                t(this).addClass("ui-state-active"), r.buttonElement.attr("aria-pressed", "true");
                var e = r.element[0];
                h(e).not(e).map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return a.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, void r.document.one("mouseup", function() {
                    e = null
                }))
            }).bind("mouseup" + this.eventNamespace, function() {
                return a.disabled ? !1 : void t(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(e) {
                return a.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", a.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + r + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            return this._super(t, e), "disabled" === t ? void(e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? h(this.element[0]).each(function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var e = this.buttonElement.removeClass(a),
                i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                n = this.options.icons,
                s = n.primary && n.secondary,
                o = [];
            n.primary || n.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function(t, e) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function n(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            t.datepicker._isDisabledDatepicker(o.inline ? e.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function s(e, i) {
        t.extend(e, i);
        for (var n in i) null == i[n] && (e[n] = i[n]);
        return e
    }
    t.extend(t.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var o, r = "datepicker";
    t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return s(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
            var n, s, o;
            n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) {
            var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var n, s, o, r = this._get(i, "appendText"),
                a = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.focus(this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: s,
                title: s
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: s,
                title: s
            }) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, o = new Date(2009, 11, 20),
                    r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function(t) {
                    for (i = 0, n = 0, s = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s);
                    return n
                }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, n, o, a) {
            var l, h, u, c, d, p = this._dialogInst;
            return p || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), s(p.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, u = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, u / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this
        },
        _destroyDatepicker: function(e) {
            var i, n = t(e),
                s = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, r);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, r);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, r)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, n, o) {
            var r, a, l, h, u = this._getInst(i);
            return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? t.extend({}, t.datepicker._defaults) : u ? "all" === n ? t.extend({}, u.settings) : this._get(u, n) : null : (r = n || {}, "string" == typeof n && (r = {}, r[n] = o), u && (this._curInst === u && this._hideDatepicker(), a = this._getDateDatepicker(i, !0), l = this._getMinMaxDate(u, "min"), h = this._getMinMaxDate(u, "max"), s(u.settings, r), null !== l && r.dateFormat !== e && r.minDate === e && (u.settings.minDate = this._formatDate(u, l)), null !== h && r.dateFormat !== e && r.maxDate === e && (u.settings.maxDate = this._formatDate(u, h)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), u), this._autoSize(u), this._setDate(u, a), this._updateAlternate(u), this._updateDatepicker(u)), e)
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, n, s, o = t.datepicker._getInst(e.target),
                r = !0,
                a = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(i) {
            var n, s, o = t.datepicker._getInst(i.target);
            return t.datepicker._get(o, "constrainInput") ? (n = t.datepicker._possibleChars(t.datepicker._get(o, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > s || !n || n.indexOf(s) > -1) : e
        },
        _doKeyUp: function(e) {
            var i, n = t.datepicker._getInst(e.target);
            if (n.input.val() !== n.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
            } catch (s) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, n, o, r, a, l, h;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(i, "beforeShow"), o = n ? n.apply(e, [e, i]) : {}, o !== !1 && (s(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
                    return r |= "fixed" === t(this).css("position"), !r
                }), a = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, r), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: a.left + "px",
                    top: a.top + "px"
                }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, n = this._getNumberOfMonths(e),
                s = n[1],
                r = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, n) {
            var s = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                r = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? s - r : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + a) : 0), i
        },
        _findPos: function(e) {
            for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, n, s, o, a = this._curInst;
            !a || e && a !== t.data(e, r) || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function() {
                t.datepicker._tidyDialog(a)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    n = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, n = t(e),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
        },
        _selectDay: function(e, i, n, s) {
            var o, r = t(e);
            t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (o = this._getInst(r[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var n, s = t(e),
                o = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, n, s, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).each(function() {
                t(this).val(s)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(i, n, s) {
            if (null == i || null == n) throw "Invalid arguments";
            if (n = "object" == typeof n ? "" + n : n + "", "" === n) return null;
            var o, r, a, l, h = 0,
                u = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (s ? s.dayNames : null) || this._defaults.dayNames,
                f = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                g = (s ? s.monthNames : null) || this._defaults.monthNames,
                m = -1,
                v = -1,
                b = -1,
                y = -1,
                _ = !1,
                w = function(t) {
                    var e = i.length > o + 1 && i.charAt(o + 1) === t;
                    return e && o++, e
                },
                x = function(t) {
                    var e = w(t),
                        i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        s = RegExp("^\\d{1," + i + "}"),
                        o = n.substring(h).match(s);
                    if (!o) throw "Missing number at position " + h;
                    return h += o[0].length, parseInt(o[0], 10)
                },
                k = function(i, s, o) {
                    var r = -1,
                        a = t.map(w(i) ? o : s, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(a, function(t, i) {
                            var s = i[1];
                            return n.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], h += s.length, !1) : e
                        }), -1 !== r) return r + 1;
                    throw "Unknown name at position " + h
                },
                C = function() {
                    if (n.charAt(h) !== i.charAt(o)) throw "Unexpected literal at position " + h;
                    h++
                };
            for (o = 0; i.length > o; o++)
                if (_) "'" !== i.charAt(o) || w("'") ? C() : _ = !1;
                else switch (i.charAt(o)) {
                    case "d":
                        b = x("d");
                        break;
                    case "D":
                        k("D", d, p);
                        break;
                    case "o":
                        y = x("o");
                        break;
                    case "m":
                        v = x("m");
                        break;
                    case "M":
                        v = k("M", f, g);
                        break;
                    case "y":
                        m = x("y");
                        break;
                    case "@":
                        l = new Date(x("@")), m = l.getFullYear(), v = l.getMonth() + 1, b = l.getDate();
                        break;
                    case "!":
                        l = new Date((x("!") - this._ticksTo1970) / 1e4), m = l.getFullYear(), v = l.getMonth() + 1, b = l.getDate();
                        break;
                    case "'":
                        w("'") ? C() : _ = !0;
                        break;
                    default:
                        C()
                }
                if (n.length > h && (a = n.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), y > -1)
                for (v = 1, b = y; r = this._getDaysInMonth(m, v - 1), !(r >= b);) v++, b -= r;
            if (l = this._daylightSavingAdjust(new Date(m, v - 1, b)), l.getFullYear() !== m || l.getMonth() + 1 !== v || l.getDate() !== b) throw "Invalid date";
            return l
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(e) {
                    var i = t.length > n + 1 && t.charAt(n + 1) === e;
                    return i && n++, i
                },
                h = function(t, e, i) {
                    var n = "" + e;
                    if (l(t))
                        for (; i > n.length;) n = "0" + n;
                    return n
                },
                u = function(t, e, i, n) {
                    return l(t) ? n[e] : i[e]
                },
                c = "",
                d = !1;
            if (e)
                for (n = 0; t.length > n; n++)
                    if (d) "'" !== t.charAt(n) || l("'") ? c += t.charAt(n) : d = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            c += h("d", e.getDate(), 2);
                            break;
                        case "D":
                            c += u("D", e.getDay(), s, o);
                            break;
                        case "o":
                            c += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            c += h("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            c += u("M", e.getMonth(), r, a);
                            break;
                        case "y":
                            c += l("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            c += e.getTime();
                            break;
                        case "!":
                            c += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? c += "'" : d = !0;
                            break;
                        default:
                            c += t.charAt(n)
                    }
                    return c
        },
        _possibleChars: function(t) {
            var e, i = "",
                n = !1,
                s = function(i) {
                    var n = t.length > e + 1 && t.charAt(e + 1) === i;
                    return n && e++, n
                };
            for (e = 0; t.length > e; e++)
                if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
                return i
        },
        _get: function(t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    n = t.lastVal = t.input ? t.input.val() : null,
                    s = this._getDefaultDate(t),
                    o = s,
                    r = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, n, r) || s
                } catch (a) {
                    n = e ? "" : n
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, n) {
            var s = function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                },
                o = function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (n) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = s.getFullYear(), r = s.getMonth(), a = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
                        switch (h[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(h[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(h[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r));
                                break;
                            case "y":
                            case "Y":
                                o += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r))
                        }
                        h = l.exec(i)
                    }
                    return new Date(o, r, a)
                },
                r = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? n : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var n = !e,
                s = t.selectedMonth,
                o = t.selectedYear,
                r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(n)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, n, s, o, r, a, l, h, u, c, d, p, f, g, m, v, b, y, _, w, x, k, C, D, T, S, I, M, P, N, E, A, H, z, W, O, j, L, F = new Date,
                R = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                B = this._get(t, "isRTL"),
                q = this._get(t, "showButtonPanel"),
                Y = this._get(t, "hideIfNoPrevNext"),
                $ = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                K = this._get(t, "showCurrentAtPos"),
                X = this._get(t, "stepMonths"),
                V = 1 !== U[0] || 1 !== U[1],
                Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - K,
                te = t.drawYear;
            if (0 > Z && (Z += 12, te--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = $ ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - X, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = $ ? this.formatDate(s, this._daylightSavingAdjust(new Date(te, Z + X, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? Q : R, r = $ ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (B ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), _ = "", x = 0; U[0] > x; x++) {
                for (k = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", S = "", V) {
                        if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                S += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");
                                break;
                            case U[1] - 1:
                                S += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");
                                break;
                            default:
                                S += " ui-datepicker-group-middle", T = ""
                        }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? B ? o : n : "") + (/all|right/.test(T) && 0 === x ? B ? n : o : "") + this._generateMonthYearHeader(t, Z, te, G, J, x > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + u) % 7, I += "<th" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M] + "'>" + p[M] + "</span></th>";
                    for (S += I + "</tr></thead><tbody>", P = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), N = (this._getFirstDayOfMonth(te, Z) - u + 7) % 7, E = Math.ceil((N + P) / 7), A = V && this.maxRows > E ? this.maxRows : E, this.maxRows = A, H = this._daylightSavingAdjust(new Date(te, Z, 1 - N)), z = 0; A > z; z++) {
                        for (S += "<tr>", W = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; 7 > w; w++) O = m ? m.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], j = H.getMonth() !== Z, L = j && !b || !O[0] || G && G > H || J && H > J, W += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (H.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || y.getTime() === H.getTime() && y.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (H.getTime() === Q.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === Q.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        S += W + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, te++), S += "</tbody></table>" + (V ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += S
                }
                _ += k
            }
            return _ += h, t._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
            var l, h, u, c, d, p, f, g, m = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                b = this._get(t, "showMonthAfterYear"),
                y = "<div class='ui-datepicker-title'>",
                _ = "";
            if (o || !m) _ += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!l || u >= n.getMonth()) && (!h || s.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
                _ += "</select>"
            }
            if (b || (y += _ + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (c = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, f = p(c[0]), g = Math.max(f, p(c[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
                }
            return y += this._get(t, "yearSuffix"), b && (y += (!o && m && v ? "" : "&#xa0;") + _), y += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.drawYear + ("Y" === i ? e : 0),
                s = t.drawMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                n = this._getMinMaxDate(t, "max"),
                s = i && i > e ? i : e;
            return n && s > n ? n : s
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                r = null,
                a = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.3"
}(jQuery),
function(t) {
    var e = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    t.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, e) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !e && this._trigger("focus", t), i
        },
        open: function() {
            var e = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus")
            }), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this.element.find("[autofocus]");
            t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
        },
        _keepFocus: function(e) {
            function i() {
                var e = this.document[0].activeElement,
                    i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (s.focus(1), e.preventDefault()) : (n.focus(1), e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = t("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title || t.html("&#160;"), t.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, n) {
                var s, o;
                n = t.isFunction(n) ? {
                    click: n,
                    text: i
                } : n, n = t.extend({
                    type: "button"
                }, n), s = n.click, n.click = function() {
                    s.apply(e.element[0], arguments)
                }, o = {
                    icons: n.icons,
                    text: n.showText
                }, delete n.icons, delete n.showText, t("<button></button>", n).button(o).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, s) {
                    t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                },
                drag: function(t, n) {
                    i._trigger("drag", t, e(n))
                },
                stop: function(s, o) {
                    n.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this,
                n = this.options,
                s = n.resizable,
                o = this.uiDialog.css("position"),
                r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function(n, s) {
                    t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                },
                resize: function(t, n) {
                    i._trigger("resize", t, e(n))
                },
                stop: function(s, o) {
                    n.height = t(this).height(), n.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                }
            }).css("position", o)
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(n) {
            var s = this,
                o = !1,
                r = {};
            t.each(n, function(t, n) {
                s._setOption(t, n), t in e && (o = !0), t in i && (r[t] = n)
            }), o && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
        },
        _setOption: function(t, e) {
            var i, n, s = this.uiDialog;
            "dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                label: "" + e
            }), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = this,
                    i = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function() {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(n) {
                        e._allowInteraction(n) || (n.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), t.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        _position: function() {
            var e, i = this.options.position,
                n = [],
                s = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (n = i.split ? i.split(" ") : [i[0], i[1]], 1 === n.length && (n[1] = n[0]), t.each(["left", "top"], function(t, e) {
                +n[t] === n[t] && (s[t] = n[t], n[t] = e)
            }), i = {
                my: n[0] + (0 > s[0] ? s[0] : "+" + s[0]) + " " + n[1] + (0 > s[1] ? s[1] : "+" + s[1]),
                at: n.join(" ")
            }), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
        }
    })
}(jQuery),
function(t) {
    var e = /up|down|vertical/,
        i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(n, s) {
        var o, r, a, l = t(this),
            h = ["position", "top", "bottom", "left", "right", "height", "width"],
            u = t.effects.setMode(l, n.mode || "hide"),
            c = n.direction || "up",
            d = e.test(c),
            p = d ? "height" : "width",
            f = d ? "top" : "left",
            g = i.test(c),
            m = {},
            v = "show" === u;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), o = t.effects.createWrapper(l).css({
            overflow: "hidden"
        }), r = o[p](), a = parseFloat(o.css(f)) || 0, m[p] = v ? r : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }), m[f] = v ? a : r + a), v && (o.css(p, 0), g || o.css(f, a + r)), o.animate(m, {
            duration: n.duration,
            easing: n.easing,
            queue: !1,
            complete: function() {
                "hide" === u && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), s()
            }
        })
    }
}(jQuery),
function(t) {
    t.effects.effect.bounce = function(e, i) {
        var n, s, o, r = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(r, e.mode || "effect"),
            h = "hide" === l,
            u = "show" === l,
            c = e.direction || "up",
            d = e.distance,
            p = e.times || 5,
            f = 2 * p + (u || h ? 1 : 0),
            g = e.duration / f,
            m = e.easing,
            v = "up" === c || "down" === c ? "top" : "left",
            b = "up" === c || "left" === c,
            y = r.queue(),
            _ = y.length;
        for ((u || h) && a.push("opacity"), t.effects.save(r, a), r.show(), t.effects.createWrapper(r), d || (d = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (o = {
                opacity: 1
            }, o[v] = 0, r.css("opacity", 0).css(v, b ? 2 * -d : 2 * d).animate(o, g, m)), h && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, n = 0; p > n; n++) s = {}, s[v] = (b ? "-=" : "+=") + d, r.animate(s, g, m).animate(o, g, m), d = h ? 2 * d : d / 2;
        h && (s = {
            opacity: 0
        }, s[v] = (b ? "-=" : "+=") + d, r.animate(s, g, m)), r.queue(function() {
            h && r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i()
        }), _ > 1 && y.splice.apply(y, [1, 0].concat(y.splice(_, f + 1))), r.dequeue()
    }
}(jQuery),
function(t) {
    t.effects.effect.clip = function(e, i) {
        var n, s, o, r = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(r, e.mode || "hide"),
            h = "show" === l,
            u = e.direction || "vertical",
            c = "vertical" === u,
            d = c ? "height" : "width",
            p = c ? "top" : "left",
            f = {};
        t.effects.save(r, a), r.show(), n = t.effects.createWrapper(r).css({
            overflow: "hidden"
        }), s = "IMG" === r[0].tagName ? n : r, o = s[d](), h && (s.css(d, 0), s.css(p, o / 2)), f[d] = h ? o : 0, f[p] = h ? 0 : o / 2, s.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                h || r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i()
            }
        })
    }
}(jQuery),
function(t) {
    t.effects.effect.drop = function(e, i) {
        var n, s = t(this),
            o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            r = t.effects.setMode(s, e.mode || "hide"),
            a = "show" === r,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            u = "up" === l || "left" === l ? "pos" : "neg",
            c = {
                opacity: a ? 1 : 0
            };
        t.effects.save(s, o), s.show(), t.effects.createWrapper(s), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, a && s.css("opacity", 0).css(h, "pos" === u ? -n : n), c[h] = (a ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + n, s.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
            }
        })
    }
}(jQuery),
function(t) {
    t.effects.effect.explode = function(e, i) {
        function n() {
            y.push(this), y.length === c * d && s()
        }

        function s() {
            p.css({
                visibility: "visible"
            }), t(y).remove(), g || p.hide(), i()
        }
        var o, r, a, l, h, u, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = c,
            p = t(this),
            f = t.effects.setMode(p, e.mode || "hide"),
            g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / d),
            b = Math.ceil(p.outerHeight() / c),
            y = [];
        for (o = 0; c > o; o++)
            for (l = m.top + o * b, u = o - (c - 1) / 2, r = 0; d > r; r++) a = m.left + r * v, h = r - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -r * v,
                top: -o * b
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: b,
                left: a + (g ? h * v : 0),
                top: l + (g ? u * b : 0),
                opacity: g ? 0 : 1
            }).animate({
                left: a + (g ? 0 : h * v),
                top: l + (g ? 0 : u * b),
                opacity: g ? 1 : 0
            }, e.duration || 500, e.easing, n)
    }
}(jQuery),
function(t) {
    t.effects.effect.fade = function(e, i) {
        var n = t(this),
            s = t.effects.setMode(n, e.mode || "toggle");
        n.animate({
            opacity: s
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
}(jQuery),
function(t) {
    t.effects.effect.fold = function(e, i) {
        var n, s, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            a = t.effects.setMode(o, e.mode || "hide"),
            l = "show" === a,
            h = "hide" === a,
            u = e.size || 15,
            c = /([0-9]+)%/.exec(u),
            d = !!e.horizFirst,
            p = l !== d,
            f = p ? ["width", "height"] : ["height", "width"],
            g = e.duration / 2,
            m = {},
            v = {};
        t.effects.save(o, r), o.show(), n = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), s = p ? [n.width(), n.height()] : [n.height(), n.width()], c && (u = parseInt(c[1], 10) / 100 * s[h ? 0 : 1]), l && n.css(d ? {
            height: 0,
            width: u
        } : {
            height: u,
            width: 0
        }), m[f[0]] = l ? s[0] : u, v[f[1]] = l ? s[1] : 0, n.animate(m, g, e.easing).animate(v, g, e.easing, function() {
            h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        })
    }
}(jQuery),
function(t) {
    t.effects.effect.highlight = function(e, i) {
        var n = t(this),
            s = ["backgroundImage", "backgroundColor", "opacity"],
            o = t.effects.setMode(n, e.mode || "show"),
            r = {
                backgroundColor: n.css("backgroundColor")
            };
        "hide" === o && (r.opacity = 0), t.effects.save(n, s), n.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, s), i()
            }
        })
    }
}(jQuery),
function(t) {
    t.effects.effect.pulsate = function(e, i) {
        var n, s = t(this),
            o = t.effects.setMode(s, e.mode || "show"),
            r = "show" === o,
            a = "hide" === o,
            l = r || "hide" === o,
            h = 2 * (e.times || 5) + (l ? 1 : 0),
            u = e.duration / h,
            c = 0,
            d = s.queue(),
            p = d.length;
        for ((r || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1), n = 1; h > n; n++) s.animate({
            opacity: c
        }, u, e.easing), c = 1 - c;
        s.animate({
            opacity: c
        }, u, e.easing), s.queue(function() {
            a && s.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), s.dequeue()
    }
}(jQuery),
function(t) {
    t.effects.effect.puff = function(e, i) {
        var n = t(this),
            s = t.effects.setMode(n, e.mode || "hide"),
            o = "hide" === s,
            r = parseInt(e.percent, 10) || 150,
            a = r / 100,
            l = {
                height: n.height(),
                width: n.width(),
                outerHeight: n.outerHeight(),
                outerWidth: n.outerWidth()
            };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: s,
            complete: i,
            percent: o ? r : 100,
            from: o ? l : {
                height: l.height * a,
                width: l.width * a,
                outerHeight: l.outerHeight * a,
                outerWidth: l.outerWidth * a
            }
        }), n.effect(e)
    }, t.effects.effect.scale = function(e, i) {
        var n = t(this),
            s = t.extend(!0, {}, e),
            o = t.effects.setMode(n, e.mode || "effect"),
            r = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
            a = e.direction || "both",
            l = e.origin,
            h = {
                height: n.height(),
                width: n.width(),
                outerHeight: n.outerHeight(),
                outerWidth: n.outerWidth()
            },
            u = {
                y: "horizontal" !== a ? r / 100 : 1,
                x: "vertical" !== a ? r / 100 : 1
            };
        s.effect = "size", s.queue = !1, s.complete = i, "effect" !== o && (s.origin = l || ["middle", "center"], s.restore = !0), s.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : h), s.to = {
            height: h.height * u.y,
            width: h.width * u.x,
            outerHeight: h.outerHeight * u.y,
            outerWidth: h.outerWidth * u.x
        }, s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, s.to.opacity = 0)), n.effect(s)
    }, t.effects.effect.size = function(e, i) {
        var n, s, o, r = t(this),
            a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            h = ["width", "height", "overflow"],
            u = ["fontSize"],
            c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = t.effects.setMode(r, e.mode || "effect"),
            f = e.restore || "effect" !== p,
            g = e.scale || "both",
            m = e.origin || ["middle", "center"],
            v = r.css("position"),
            b = f ? a : l,
            y = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === p && r.show(), n = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        }, "toggle" === e.mode && "show" === p ? (r.from = e.to || y, r.to = e.from || n) : (r.from = e.from || ("show" === p ? y : n), r.to = e.to || ("hide" === p ? y : n)), o = {
            from: {
                y: r.from.height / n.height,
                x: r.from.width / n.width
            },
            to: {
                y: r.to.height / n.height,
                x: r.to.width / n.width
            }
        }, ("box" === g || "both" === g) && (o.from.y !== o.to.y && (b = b.concat(c), r.from = t.effects.setTransition(r, c, o.from.y, r.from), r.to = t.effects.setTransition(r, c, o.to.y, r.to)), o.from.x !== o.to.x && (b = b.concat(d), r.from = t.effects.setTransition(r, d, o.from.x, r.from), r.to = t.effects.setTransition(r, d, o.to.x, r.to))), ("content" === g || "both" === g) && o.from.y !== o.to.y && (b = b.concat(u).concat(h), r.from = t.effects.setTransition(r, u, o.from.y, r.from), r.to = t.effects.setTransition(r, u, o.to.y, r.to)), t.effects.save(r, b), r.show(), t.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), m && (s = t.effects.getBaseline(m, n), r.from.top = (n.outerHeight - r.outerHeight()) * s.y, r.from.left = (n.outerWidth - r.outerWidth()) * s.x, r.to.top = (n.outerHeight - r.to.outerHeight) * s.y, r.to.left = (n.outerWidth - r.to.outerWidth) * s.x), r.css(r.from), ("content" === g || "both" === g) && (c = c.concat(["marginTop", "marginBottom"]).concat(u), d = d.concat(["marginLeft", "marginRight"]), h = a.concat(c).concat(d), r.find("*[width]").each(function() {
            var i = t(this),
                n = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            f && t.effects.save(i, h), i.from = {
                height: n.height * o.from.y,
                width: n.width * o.from.x,
                outerHeight: n.outerHeight * o.from.y,
                outerWidth: n.outerWidth * o.from.x
            }, i.to = {
                height: n.height * o.to.y,
                width: n.width * o.to.x,
                outerHeight: n.height * o.to.y,
                outerWidth: n.width * o.to.x
            }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, c, o.from.y, i.from), i.to = t.effects.setTransition(i, c, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                f && t.effects.restore(i, h)
            })
        })), r.animate(r.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === p && r.hide(), t.effects.restore(r, b), f || ("static" === v ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : t.each(["top", "left"], function(t, e) {
                    r.css(e, function(e, i) {
                        var n = parseInt(i, 10),
                            s = t ? r.to.left : r.to.top;
                        return "auto" === i ? s + "px" : n + s + "px"
                    })
                })), t.effects.removeWrapper(r), i()
            }
        })
    }
}(jQuery),
function(t) {
    t.effects.effect.shake = function(e, i) {
        var n, s = t(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = t.effects.setMode(s, e.mode || "effect"),
            a = e.direction || "left",
            l = e.distance || 20,
            h = e.times || 3,
            u = 2 * h + 1,
            c = Math.round(e.duration / u),
            d = "up" === a || "down" === a ? "top" : "left",
            p = "up" === a || "left" === a,
            f = {},
            g = {},
            m = {},
            v = s.queue(),
            b = v.length;
        for (t.effects.save(s, o), s.show(), t.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, c, e.easing), n = 1; h > n; n++) s.animate(g, c, e.easing).animate(m, c, e.easing);
        s.animate(g, c, e.easing).animate(f, c / 2, e.easing).queue(function() {
            "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
        }), b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, u + 1))), s.dequeue()
    }
}(jQuery),
function(t) {
    t.effects.effect.slide = function(e, i) {
        var n, s = t(this),
            o = ["position", "top", "bottom", "left", "right", "width", "height"],
            r = t.effects.setMode(s, e.mode || "show"),
            a = "show" === r,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            u = "up" === l || "left" === l,
            c = {};
        t.effects.save(s, o), s.show(), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(s).css({
            overflow: "hidden"
        }), a && s.css(h, u ? isNaN(n) ? "-" + n : -n : n), c[h] = (a ? u ? "+=" : "-=" : u ? "-=" : "+=") + n, s.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
            }
        })
    }
}(jQuery),
function(t) {
    t.effects.effect.transfer = function(e, i) {
        var n = t(this),
            s = t(e.to),
            o = "fixed" === s.css("position"),
            r = t("body"),
            a = o ? r.scrollTop() : 0,
            l = o ? r.scrollLeft() : 0,
            h = s.offset(),
            u = {
                top: h.top - a,
                left: h.left - l,
                height: s.innerHeight(),
                width: s.innerWidth()
            },
            c = n.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                top: c.top - a,
                left: c.left - l,
                height: n.innerHeight(),
                width: n.innerWidth(),
                position: o ? "fixed" : "absolute"
            }).animate(u, e.duration, e.easing, function() {
                d.remove(), i()
            })
    }
}(jQuery),
function(t) {
    t.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, s, o, r, a, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, s = this.previousFilter || "", o = String.fromCharCode(e.keyCode), r = !1, clearTimeout(this.filterTimer), o === s ? r = !0 : o = s + o, a = RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return a.test(t(this).children("a").text())
                    }), n = r && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (o = String.fromCharCode(e.keyCode), a = RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return a.test(t(this).children("a").text())
                    })), n.length ? (this.focus(e, n), n.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu,
                n = this.element.find(this.options.menus);
            n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                    n = e.prev("a"),
                    s = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                n.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", n.attr("id"))
            }), e = n.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function(t, e) {
            var i, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, n, s, o, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.height(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, n)
        },
        nextPage: function(e) {
            var i, n, s;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), 0 > i.offset().top - n - s
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function(e) {
            var i, n, s;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - n + s > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function n(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function s(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var o, r = Math.max,
        a = Math.abs,
        l = Math.round,
        h = /left|center|right/,
        u = /top|center|bottom/,
        c = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
            scrollbarWidth: function() {
                if (o !== e) return o;
                var i, n, s = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    r = s.children()[0];
                return t("body").append(s), i = r.offsetWidth, s.css("overflow", "scroll"), n = r.offsetWidth, i === n && (n = s[0].clientWidth), s.remove(), o = i - n
            },
            getScrollInfo: function(e) {
                var i = e.isWindow ? "" : e.element.css("overflow-x"),
                    n = e.isWindow ? "" : e.element.css("overflow-y"),
                    s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                return {
                    width: o ? t.position.scrollbarWidth() : 0,
                    height: s ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window),
                    n = t.isWindow(i[0]);
                return {
                    element: i,
                    isWindow: n,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: n ? i.width() : i.outerWidth(),
                    height: n ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function(e) {
            if (!e || !e.of) return f.apply(this, arguments);
            e = t.extend({}, e);
            var o, p, g, m, v, b, y = t(e.of),
                _ = t.position.getWithinInfo(e.within),
                w = t.position.getScrollInfo(_),
                x = (e.collision || "flip").split(" "),
                k = {};
            return b = s(y), y[0].preventDefault && (e.at = "left top"), p = b.width, g = b.height, m = b.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
                var t, i, n = (e[this] || "").split(" ");
                1 === n.length && (n = h.test(n[0]) ? n.concat(["center"]) : u.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = h.test(n[0]) ? n[0] : "center", n[1] = u.test(n[1]) ? n[1] : "center", t = c.exec(n[0]), i = c.exec(n[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(n[0])[0], d.exec(n[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), o = i(k.at, p, g), v.left += o[0], v.top += o[1], this.each(function() {
                var s, h, u = t(this),
                    c = u.outerWidth(),
                    d = u.outerHeight(),
                    f = n(this, "marginLeft"),
                    b = n(this, "marginTop"),
                    C = c + f + n(this, "marginRight") + w.width,
                    D = d + b + n(this, "marginBottom") + w.height,
                    T = t.extend({}, v),
                    S = i(k.my, u.outerWidth(), u.outerHeight());
                "right" === e.my[0] ? T.left -= c : "center" === e.my[0] && (T.left -= c / 2), "bottom" === e.my[1] ? T.top -= d : "center" === e.my[1] && (T.top -= d / 2), T.left += S[0], T.top += S[1], t.support.offsetFractions || (T.left = l(T.left), T.top = l(T.top)), s = {
                    marginLeft: f,
                    marginTop: b
                }, t.each(["left", "top"], function(i, n) {
                    t.ui.position[x[i]] && t.ui.position[x[i]][n](T, {
                        targetWidth: p,
                        targetHeight: g,
                        elemWidth: c,
                        elemHeight: d,
                        collisionPosition: s,
                        collisionWidth: C,
                        collisionHeight: D,
                        offset: [o[0] + S[0], o[1] + S[1]],
                        my: e.my,
                        at: e.at,
                        within: _,
                        elem: u
                    })
                }), e.using && (h = function(t) {
                    var i = m.left - T.left,
                        n = i + p - c,
                        s = m.top - T.top,
                        o = s + g - d,
                        l = {
                            target: {
                                element: y,
                                left: m.left,
                                top: m.top,
                                width: p,
                                height: g
                            },
                            element: {
                                element: u,
                                left: T.left,
                                top: T.top,
                                width: c,
                                height: d
                            },
                            horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > o ? "top" : s > 0 ? "bottom" : "middle"
                        };
                    c > p && p > a(i + n) && (l.horizontal = "center"), d > g && g > a(s + o) && (l.vertical = "middle"), l.important = r(a(i), a(n)) > r(a(s), a(o)) ? "horizontal" : "vertical", e.using.call(this, t, l)
                }), u.offset(t.extend(T, {
                    using: h
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollLeft : n.offset.left,
                        o = n.width,
                        a = t.left - e.collisionPosition.marginLeft,
                        l = s - a,
                        h = a + e.collisionWidth - o - s;
                    e.collisionWidth > o ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + o - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = r(t.left - a, t.left)
                },
                top: function(t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollTop : n.offset.top,
                        o = e.within.height,
                        a = t.top - e.collisionPosition.marginTop,
                        l = s - a,
                        h = a + e.collisionHeight - o - s;
                    e.collisionHeight > o ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + o - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = r(t.top - a, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, n, s = e.within,
                        o = s.offset.left + s.scrollLeft,
                        r = s.width,
                        l = s.isWindow ? s.scrollLeft : s.offset.left,
                        h = t.left - e.collisionPosition.marginLeft,
                        u = h - l,
                        c = h + e.collisionWidth - r - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > u ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(u) > i) && (t.left += d + p + f)) : c > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || c > a(n)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, n, s = e.within,
                        o = s.offset.top + s.scrollTop,
                        r = s.height,
                        l = s.isWindow ? s.scrollTop : s.offset.top,
                        h = t.top - e.collisionPosition.marginTop,
                        u = h - l,
                        c = h + e.collisionHeight - r - l,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        g = -2 * e.offset[1];
                    0 > u ? (n = t.top + p + f + g + e.collisionHeight - r - o, t.top + p + f + g > u && (0 > n || a(u) > n) && (t.top += p + f + g)) : c > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > c && (i > 0 || c > a(i)) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var e, i, n, s, o, r = document.getElementsByTagName("body")[0],
                a = document.createElement("div");
            e = document.createElement(r ? "div" : "body"), n = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, r && t.extend(n, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (o in n) e.style[o] = n[o];
            e.appendChild(a), i = r || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", s = t(a).offset().left, t.support.offsetFractions = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e)
        }()
}(jQuery),
function(t, e) {
    t.widget("ui.progressbar", {
        version: "1.10.3",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
        },
        _constrainedValue: function(t) {
            return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    })
}(jQuery),
function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, i, n = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                r = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) r.push(o);
            this.handles = s.add(t(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options,
                i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, n, s, o, r, a, l, h, u = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(n - u.values(e));
                (s > i || s === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (s = i, o = t(this), r = e)
            }), a = this._start(e, r), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, n, s, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var n, s, o;
            this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: s
            }), n = this.values(e ? 0 : 1), o !== !1 && this.values(e, i, !0))) : i !== this.value() && (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), o !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, n, s, o, r = this.options.range,
                a = this.options,
                l = this,
                h = this._animateOff ? !1 : a.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(n) {
                i = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))), e = i
            }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? 100 * ((n - s) / (o - s)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: a.animate
            }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, a.animate), "max" === r && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: a.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var n, s, o, r, a = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), n = this._start(i, a), n === !1)) return
                }
                switch (r = this.options.step, s = o = this.options.values && this.options.values.length ? this.values(a) : this.value(), i.keyCode) {
                    case t.ui.keyCode.HOME:
                        o = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        o = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        o = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        o = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        o = this._trimAlignValue(s + r);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        o = this._trimAlignValue(s - r)
                }
                this._slide(i, a, o)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery),
function(t) {
    function e(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = {},
                i = this.element;
            return t.each(["min", "max", "step"], function(t, n) {
                var s = i.attr(n);
                void 0 !== s && s.length && (e[n] = s)
            }), e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = n, this._delay(function() {
                        this.previous = n
                    }))
                }
                var n;
                n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this)
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        },
        _keydown: function(e) {
            var i = this.options,
                n = t.ui.keyCode;
            switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e), !0;
                case n.DOWN:
                    return this._repeat(null, -1, e), !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e, i, n = this.options;
            return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, void this.element.val(this._format(i))
            }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: e(function(t) {
            this._super(t), this._value(this.element.val())
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery),
function(t, e) {
    function i() {
        return ++s
    }

    function n(t) {
        return t.hash.length > 1 && decodeURIComponent(t.href.replace(o, "")) === decodeURIComponent(location.href.replace(o, ""))
    }
    var s = 0,
        o = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var i = this.options.active,
                n = this.options.collapsible,
                s = location.hash.substring(1);
            return null === i && (s && this.tabs.each(function(n, o) {
                return t(o).attr("aria-controls") === s ? (i = n, !1) : e
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = n ? !1 : 0)), !n && i === !1 && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(i) {
            var n = t(this.document[0].activeElement).closest("li"),
                s = this.tabs.index(n),
                o = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        o = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(s), e;
                    case t.ui.keyCode.ENTER:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), e;
                    default:
                        return
                }
                i.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, o), i.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", s)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
        },
        _findNextTab: function(e, i) {
            function n() {
                return e > s && (e = 0), 0 > e && (e = s), e
            }
            for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function(t, i) {
            return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function(i, s) {
                var o, r, a, l = t(s).uniqueId().attr("id"),
                    h = t(s).closest("li"),
                    u = h.attr("aria-controls");
                n(s) ? (o = s.hash, r = e.element.find(e._sanitizeSelector(o))) : (a = e._tabId(h), o = "#" + a, r = e.element.find(o), r.length || (r = e._createPanel(a), r.insertAfter(e.panels[i - 1] || e.tablist)), r.attr("aria-live", "polite")), r.length && (e.panels = e.panels.add(r)), u && h.data("ui-tabs-aria-controls", u), h.attr({
                    "aria-controls": o.substring(1),
                    "aria-labelledby": l
                }), r.attr("aria-labelledby", l)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function(e) {
            var i = {
                click: function(t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                n = this.active,
                s = t(e.currentTarget),
                o = s.closest("li"),
                r = o[0] === n[0],
                a = r && i.collapsible,
                l = a ? t() : this._getPanelForTab(o),
                h = n.length ? this._getPanelForTab(n) : t(),
                u = {
                    oldTab: n,
                    oldPanel: h,
                    newTab: a ? t() : o,
                    newPanel: l
                };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = a ? !1 : this.tabs.index(o), this.active = r ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, u))
        },
        _toggle: function(e, i) {
            function n() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function s() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n())
            }
            var o = this,
                r = i.newPanel,
                a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), s()), a.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var n = this.options.disabled;
            n !== !1 && (i === e ? n = !1 : (i = this._getIndex(i), n = t.isArray(n) ? t.map(n, function(t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(n))
        },
        disable: function(i) {
            var n = this.options.disabled;
            if (n !== !0) {
                if (i === e) n = !0;
                else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, n)) return;
                    n = t.isArray(n) ? t.merge([i], n).sort() : [i]
                }
                this._setupDisabled(n)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this,
                o = this.tabs.eq(e),
                r = o.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(o),
                l = {
                    tab: o,
                    panel: a
                };
            n(r[0]) || (this.xhr = t.ajax(this._ajaxSettings(r, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.success(function(t) {
                setTimeout(function() {
                    a.html(t), s._trigger("load", i, l)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && s.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, n) {
            var s = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, o) {
                    return s._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, n))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}(jQuery),
function(t) {
    function e(e, i) {
        var n = (e.attr("aria-describedby") || "").split(/\s+/);
        n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
    }

    function i(e) {
        var i = e.data("ui-tooltip-id"),
            n = (e.attr("aria-describedby") || "").split(/\s+/),
            s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
    }
    var n = 0;
    t.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function(e, i) {
            var n = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function(t, e) {
                n._updateContent(e)
            })))
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n[0], e.close(s, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },
        open: function(e) {
            var i = this,
                n = t(e ? e.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                var e, n = t(this);
                n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: n.attr("title")
                }, n.attr("title", ""))
            }), this._updateContent(n, e))
        },
        _updateContent: function(t, e) {
            var i, n = this.options.content,
                s = this,
                o = e ? e.type : null;
            return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function(i) {
                t.data("ui-tooltip-open") && s._delay(function() {
                    e && (e.type = o), this._open(e, t, i)
                })
            }), void(i && this._open(e, t, i)))
        },
        _open: function(i, n, s) {
            function o(t) {
                h.of = t, r.is(":hidden") || r.position(h)
            }
            var r, a, l, h = t.extend({}, this.options.position);
            if (s) {
                if (r = this._find(n), r.length) return void r.find(".ui-tooltip-content").html(s);
                n.is("[title]") && (i && "mouseover" === i.type ? n.attr("title", "") : n.removeAttr("title")), r = this._tooltip(n), e(n, r.attr("id")), r.find(".ui-tooltip-content").html(s), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                    mousemove: o
                }), o(i)) : r.position(t.extend({
                    of: n
                }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.show && this.options.show.delay && (l = this.delayedShow = setInterval(function() {
                    r.is(":visible") && (o(h.of), clearInterval(l))
                }, t.fx.interval)), this._trigger("open", i, {
                    tooltip: r
                }), a = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = n[0], this.close(i, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(r)
                    }
                }, i && "mouseover" !== i.type || (a.mouseleave = "close"), i && "focusin" !== i.type || (a.focusout = "close"), this._on(!0, n, a)
            }
        },
        close: function(e) {
            var n = this,
                s = t(e ? e.currentTarget : this.element),
                o = this._find(s);
            this.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && s.attr("title", s.data("ui-tooltip-title")), i(s), o.stop(!0), this._hide(o, this.options.hide, function() {
                n._removeTooltip(t(this))
            }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete n.parents[e]
            }), this.closing = !0, this._trigger("close", e, {
                tooltip: o
            }), this.closing = !1)
        },
        _tooltip: function(e) {
            var i = "ui-tooltip-" + n++,
                s = t("<div>").attr({
                    id: i,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(s), s.appendTo(this.document[0].body), this.tooltips[i] = e, s
        },
        _find: function(e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n[0], e.close(s, !0), t("#" + i).remove(), n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery);