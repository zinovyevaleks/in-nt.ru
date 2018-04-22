function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
        ? module.exports = e.document
            ? t(e, !0)
            : function (e) {
                if (!e.document) 
                    throw new Error("jQuery requires a window with a document");
                return t(e)
            }
        : t(e)
}(
    "undefined" != typeof window
        ? window
        : this,
    function (e, t) {
        function n(e) {
            var t = e.length,
                n = oe.type(e);
            return "function" !== n && !oe.isWindow(e) && (
                !(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            )
        }
        function r(e, t, n) {
            if (oe.isFunction(t)) 
                return oe.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                });
            if (t.nodeType) 
                return oe.grep(e, function (e) {
                    return e === t !== n
                });
            if ("string" == typeof t) {
                if (pe.test(t)) 
                    return oe.filter(t, e, n);
                t = oe.filter(t, e)
            }
            return oe.grep(e, function (e) {
                return oe.inArray(e, t) >= 0 !== n
            })
        }
        function i(e, t) {
            do 
                e = e[t];
            while (e && 1 !== e.nodeType);
            return e
        }
        function o(e) {
            var t = xe[e] = {};
            return oe.each(e.match(we) || [], function (e, n) {
                t[n] = !0
            }),
            t
        }
        function a() {
            me.addEventListener
                ? (
                    me.removeEventListener("DOMContentLoaded", l, !1),
                    e.removeEventListener("load", l, !1)
                )
                : (me.detachEvent("onreadystatechange", l), e.detachEvent("onload", l))
        }
        function l() {
            (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (
                a(),
                oe.ready()
            )
        }
        function s(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var r = "data-" + t
                    .replace(je, "-$1")
                    .toLowerCase();
                if (n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && (
                            "null" === n
                                ? null
                                : +n + "" === n
                                    ? +n
                                    : Ce.test(n)
                                        ? oe.parseJSON(n)
                                        : n
                        )
                    } catch (i) {}
                    oe.data(e, t, n)
                } else 
                    n = void 0
            }
            return n
        }
        function u(e) {
            var t;
            for (t in e) 
                if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) 
                    return !1;
        return !0
        }
        function c(e, t, n, r) {
            if (oe.acceptData(e)) {
                var i,
                    o,
                    a = oe.expando,
                    l = e.nodeType,
                    s = l
                        ? oe.cache
                        : e,
                    u = l
                        ? e[a]
                        : e[a] && a;
                if (u && s[u] && (r || s[u].data) || void 0 !== n || "string" != typeof t) 
                    return u || (
                        u = l
                            ? e[a] = V.pop() || oe.guid++
                            : a
                    ),
                    s[u] || (
                        s[u] = l
                            ? {}
                            : {
                                toJSON: oe.noop
                            }
                    ),
                    "object" != typeof t && "function" != typeof t || (
                        r
                            ? s[u] = oe.extend(s[u], t)
                            : s[u].data = oe.extend(s[u].data, t)
                    ),
                    o = s[u],
                    r || (o.data || (o.data = {}), o = o.data),
                    void 0 !== n && (o[oe.camelCase(t)] = n),
                    "string" == typeof t
                        ? (i = o[t], null == i && (i = o[oe.camelCase(t)]))
                        : i = o,
                    i
            }
        }
        function d(e, t, n) {
            if (oe.acceptData(e)) {
                var r,
                    i,
                    o = e.nodeType,
                    a = o
                        ? oe.cache
                        : e,
                    l = o
                        ? e[oe.expando]
                        : oe.expando;
                if (a[l]) {
                    if (t && (
                        r = n
                            ? a[l]
                            : a[l].data
                    )) {
                        oe.isArray(t)
                            ? t = t.concat(oe.map(t, oe.camelCase))
                            : t in r
                                ? t = [t]
                                : (
                                    t = oe.camelCase(t),
                                    t = t in r
                                        ? [t]
                                        : t.split(" ")
                                ),
                        i = t.length;
                        for (; i--;) 
                            delete r[t[i]];
                        if (
                            n
                                ? !u(r)
                                : !oe.isEmptyObject(r)
                        ) 
                            return
                    }
                    (n || (delete a[l].data, u(a[l]))) && (
                        o
                            ? oe.cleanData([e], !0)
                            : re.deleteExpando || a != a.window
                                ? delete a[l]
                                : a[l] = null
                    )
                }
            }
        }
        function f() {
            return !0
        }
        function p() {
            return !1
        }
        function h() {
            try {
                return me.activeElement
            } catch (e) {}
        }
        function m(e) {
            var t = Ne.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement) 
                for (; t.length;) 
                    n.createElement(t.pop());
        return n
        }
        function y(e, t) {
            var n,
                r,
                i = 0,
                o = typeof e.getElementsByTagName !== ke
                    ? e.getElementsByTagName(t || "*")
                    : typeof e.querySelectorAll !== ke
                        ? e.querySelectorAll(t || "*")
                        : void 0;
            if (!o) 
                for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) 
                    !t || oe.nodeName(r, t)
                        ? o.push(r)
                        : oe.merge(o, y(r, t));
            return void 0 === t || t && oe.nodeName(e, t)
                ? oe.merge([e], o)
                : o
        }
        function v(e) {
            Ae.test(e.type) && (e.defaultChecked = e.checked)
        }
        function g(e, t) {
            return oe.nodeName(e, "table") && oe.nodeName(
                11 !== t.nodeType
                    ? t
                    : t.firstChild,
                "tr"
            )
                ? e.getElementsByTagName("tbody")[0] || e.appendChild(
                    e.ownerDocument.createElement("tbody")
                )
                : e
        }
        function b(e) {
            return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type,
            e
        }
        function w(e) {
            var t = Ve.exec(e.type);
            return t
                ? e.type = t[1]
                : e.removeAttribute("type"),
            e
        }
        function x(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) 
                oe._data(n, "globalEval", !t || oe._data(t[r], "globalEval"))
        }
        function T(e, t) {
            if (1 === t.nodeType && oe.hasData(e)) {
                var n,
                    r,
                    i,
                    o = oe._data(e),
                    a = oe._data(t, o),
                    l = o.events;
                if (l) {
                    delete a.handle,
                    a.events = {};
                    for (n in l) 
                        for (r = 0, i = l[n].length; r < i; r++) 
                            oe
                                .event
                                .add(t, n, l[n][r])
                    }
                a.data && (a.data = oe.extend({}, a.data))
            }
        }
        function P(e, t) {
            var n,
                r,
                i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !re.noCloneEvent && t[oe.expando]) {
                    i = oe._data(t);
                    for (r in i.events) 
                        oe.removeEvent(t, r, i.handle);
                    t.removeAttribute(oe.expando)
                }
                "script" === n && t.text !== e.text
                    ? (b(t).text = e.text, w(t))
                    : "object" === n
                        ? (
                            t.parentNode && (t.outerHTML = e.outerHTML),
                            re.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)
                        )
                        : "input" === n && Ae.test(e.type)
                            ? (
                                t.defaultChecked = t.checked = e.checked,
                                t.value !== e.value && (t.value = e.value)
                            )
                            : "option" === n
                                ? t.defaultSelected = t.selected = e.defaultSelected
                                : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }
        function k(t, n) {
            var r = oe(n.createElement(t)).appendTo(n.body),
                i = e.getDefaultComputedStyle
                    ? e
                        .getDefaultComputedStyle(r[0])
                        .display
                    : oe.css(r[0], "display");
            return r.detach(),
            i
        }
        function C(e) {
            var t = me,
                n = et[e];
            return n || (
                n = k(e, t),
                "none" !== n && n || (
                    Ze = (Ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                    t = (Ze[0].contentWindow || Ze[0].contentDocument).document,
                    t.write(),
                    t.close(),
                    n = k(e, t),
                    Ze.detach()
                ),
                et[e] = n
            ),
            n
        }
        function j(e, t) {
            return {
                get: function () {
                    var n = e();
                    if (null != n) 
                        return n
                            ? void delete this.get
                            : (this.get = t).apply(this, arguments)
                    }
            }
        }
        function S(e, t) {
            if (t in e) 
                return t;
            for (
                var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = t,
                i = pt.length;
                i--;
            ) 
                if (t = pt[i] + n, t in e) 
                    return t;
        return r
        }
        function _(e, t) {
            for (var n, r, i, o = [], a = 0, l = e.length; a < l; a++) 
                r = e[a],
                r.style && (
                    o[a] = oe._data(r, "olddisplay"),
                    n = r.style.display,
                    t
                        ? (
                            o[a] || "none" !== n || (r.style.display = ""),
                            "" === r.style.display && Ye(r) && (o[a] = oe._data(r, "olddisplay", C(r.nodeName)))
                        )
                        : o[a] || (i = Ye(r), (n && "none" !== n || !i) && oe._data(
                            r,
                            "olddisplay",
                            i
                                ? n
                                : oe.css(r, "display")
                        ))
                );
            for (a = 0; a < l; a++) 
                r = e[a],
                r.style && (t && "none" !== r.style.display && "" !== r.style.display || (
                    r.style.display = t
                        ? o[a] || ""
                        : "none"
                ));
            return e
        }
        function Y(e, t, n) {
            var r = ut.exec(t);
            return r
                ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px")
                : t
        }
        function E(e, t, n, r, i) {
            for (
                var o = n === (
                        r
                            ? "border"
                            : "content"
                    )
                    ? 4
                    : "width" === t
                        ? 1
                        : 0,
                a = 0; o < 4; o += 2
            ) 
                "margin" === n && (a += oe.css(e, n + _e[o], !0, i)),
                r
                    ? (
                        "content" === n && (a -= oe.css(e, "padding" + _e[o], !0, i)),
                        "margin" !== n && (a -= oe.css(e, "border" + _e[o] + "Width", !0, i))
                    )
                    : (
                        a += oe.css(e, "padding" + _e[o], !0, i),
                        "padding" !== n && (a += oe.css(e, "border" + _e[o] + "Width", !0, i))
                    );
            return a
        }
        function A(e, t, n) {
            var r = !0,
                i = "width" === t
                    ? e.offsetWidth
                    : e.offsetHeight,
                o = tt(e),
                a = re.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, o);
            if (i <= 0 || null == i) {
                if (i = nt(e, t, o), (i < 0 || null == i) && (i = e.style[t]), it.test(i)) 
                    return i;
                r = a && (re.boxSizingReliable() || i === e.style[t]),
                i = parseFloat(i) || 0
            }
            return i + E(e, t, n || (
                a
                    ? "border"
                    : "content"
            ), r, o) + "px"
        }
        function Q(e, t, n, r, i) {
            return new Q
                .prototype
                .init(e, t, n, r, i)
        }
        function $() {
            return setTimeout(function () {
                ht = void 0
            }),
            ht = oe.now()
        }
        function I(e, t) {
            var n,
                r = {
                    height: e
                },
                i = 0;
            for (
                t = t
                    ? 1
                    : 0; i < 4; i += 2 - t
            ) 
                n = _e[i],
                r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e),
            r
        }
        function D(e, t, n) {
            for (var r, i = (wt[t] || []).concat(wt["*"]), o = 0, a = i.length; o < a; o++) 
                if (r = i[o].call(n, t, e)) 
                    return r
        }
        function O(e, t, n) {
            var r,
                i,
                o,
                a,
                l,
                s,
                u,
                c,
                d = this,
                f = {},
                p = e.style,
                h = e.nodeType && Ye(e),
                m = oe._data(e, "fxshow");
            n.queue || (
                l = oe._queueHooks(e, "fx"),
                null == l.unqueued && (l.unqueued = 0, s = l.empty.fire, l.empty.fire = function () {
                    l.unqueued || s()
                }),
                l.unqueued++,
                d.always(function () {
                    d.always(function () {
                        l.unqueued--,
                        oe
                            .queue(e, "fx")
                            .length || l
                            .empty
                            .fire()
                    })
                })
            ),
            1 === e.nodeType && ("height" in t || "width" in t) && (
                n.overflow = [
                    p.overflow, p.overflowX, p.overflowY
                ],
                u = oe.css(e, "display"),
                c = C(e.nodeName),
                "none" === u && (u = c),
                "inline" === u && "none" === oe.css(e, "float") && (
                    re.inlineBlockNeedsLayout && "inline" !== c
                        ? p.zoom = 1
                        : p.display = "inline-block"
                )
            ),
            n.overflow && (
                p.overflow = "hidden",
                re.shrinkWrapBlocks() || d.always(function () {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })
            );
            for (r in t) 
                if (i = t[r], yt.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (
                        h
                            ? "hide"
                            : "show"
                    )) {
                        if ("show" !== i || !m || void 0 === m[r]) 
                            continue;
                        h = !0
                    }
                    f[r] = m && m[r] || oe.style(e, r)
                }
            if (!oe.isEmptyObject(f)) {
                m
                    ? "hidden" in m && (h = m.hidden)
                    : m = oe._data(e, "fxshow", {}),
                o && (m.hidden = !h),
                h
                    ? oe(e).show()
                    : d.done(function () {
                        oe(e).hide()
                    }),
                d.done(function () {
                    var t;
                    oe._removeData(e, "fxshow");
                    for (t in f) 
                        oe.style(e, t, f[t])
                });
                for (r in f) 
                    a = D(
                        h
                            ? m[r]
                            : 0,
                        r,
                        d
                    ),
                    r in m || (m[r] = a.start, h && (
                        a.end = a.start,
                        a.start = "width" === r || "height" === r
                            ? 1
                            : 0
                    ))
            }
        }
        function N(e, t) {
            var n,
                r,
                i,
                o,
                a;
            for (n in e) 
                if (
                    r = oe.camelCase(n),
                    i = t[r],
                    o = e[n],
                    oe.isArray(o) && (i = o[1], o = e[n] = o[0]),
                    n !== r && (e[r] = o, delete e[n]),
                    a = oe.cssHooks[r],
                    a && "expand" in a
                ) {
                    o = a.expand(o),
                    delete e[r];
                    for (n in o) 
                        n in e || (e[n] = o[n], t[n] = i)
                }
            else 
                t[r] = i
        }
        function M(e, t, n) {
            var r,
                i,
                o = 0,
                a = bt.length,
                l = oe
                    .Deferred()
                    .always(function () {
                        delete s.elem
                    }),
                s = function () {
                    if (i) 
                        return !1;
                    for (
                        var t = ht || $(),
                        n = Math.max(0, u.startTime + u.duration - t),
                        r = n / u.duration || 0,
                        o = 1 - r,
                        a = 0,
                        s = u.tweens.length;
                        a < s;
                        a++
                    ) 
                        u
                            .tweens[a]
                            .run(o);
                    return l.notifyWith(e, [u, o, n]),
                    o < 1 && s
                        ? n
                        : (l.resolveWith(e, [u]), !1)
                },
                u = l.promise({
                    elem: e,
                    props: oe.extend({}, t),
                    opts: oe.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ht || $(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u
                            .tweens
                            .push(r),
                        r
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t
                                ? u.tweens.length
                                : 0;
                        if (i) 
                            return this;
                        for (i = !0; n < r; n++) 
                            u
                                .tweens[n]
                                .run(1);
                        return t
                            ? l.resolveWith(e, [u, t])
                            : l.rejectWith(e, [u, t]),
                        this
                    }
                }),
                c = u.props;
            for (N(c, u.opts.specialEasing); o < a; o++) 
                if (r = bt[o].call(u, e, c, u.opts)) 
                    return r;
        return oe.map(c, D, u),
            oe.isFunction(u.opts.start) && u
                .opts
                .start
                .call(e, u),
            oe
                .fx
                .timer(oe.extend(s, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })),
            u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always)
        }
        function L(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r,
                    i = 0,
                    o = t
                        .toLowerCase()
                        .match(we) || [];
                if (oe.isFunction(n)) 
                    for (; r = o[i++];) 
                        "+" === r.charAt(0)
                            ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n))
                            : (e[r] = e[r] || []).push(n)
                }
        }
        function z(e, t, n, r) {
            function i(l) {
                var s;
                return o[l] = !0,
                oe.each(e[l] || [], function (e, l) {
                    var u = l(t, n, r);
                    return "string" != typeof u || a || o[u]
                        ? a
                            ? !(s = u)
                            : void 0
                        : (t.dataTypes.unshift(u), i(u), !1)
                }),
                s
            }
            var o = {},
                a = e === qt;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }
        function B(e, t) {
            var n,
                r,
                i = oe.ajaxSettings.flatOptions || {};
            for (r in t) 
                void 0 !== t[r] && ((
                    i[r]
                        ? e
                        : n || (n = {})
                )[r] = t[r]);
            return n && oe.extend(!0, e, n),
            e
        }
        function R(e, t, n) {
            for (var r, i, o, a, l = e.contents, s = e.dataTypes; "*" === s[0];) 
                s.shift(),
                void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i) 
                for (a in l) 
                    if (l[a] && l[a].test(i)) {
                        s.unshift(a);
                        break
                    }
                if (s[0] in n) 
                o = s[0];
            else {
                for (a in n) {
                    if (!s[0] || e.converters[a + " " + s[0]]) {
                        o = a;
                        break
                    }
                    r || (r = a)
                }
                o = o || r
            }
            if (o) 
                return o !== s[0] && s.unshift(o),
                n[o]
        }
        function F(e, t, n, r) {
            var i,
                o,
                a,
                l,
                s,
                u = {},
                c = e
                    .dataTypes
                    .slice();
            if (c[1]) 
                for (a in e.converters) 
                    u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) 
                if (
                    e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    s = o,
                    o = c.shift()
                ) 
                    if ("*" === o) 
                        o = s;
                    else if ("*" !== s && s !== o) {
                        if (a = u[s + " " + o] || u["* " + o], !a) 
                            for (i in u) 
                                if (l = i.split(" "), l[1] === o && (a = u[s + " " + l[0]] || u["* " + l[0]])) {
                                    a === !0
                                        ? a = u[i]
                                        : u[i] !== !0 && (o = l[0], c.unshift(l[1]));
                                    break
                                }
                            if (a !== !0) 
                            if (a && e["throws"]) 
                                t = a(t);
                            else 
                                try {
                                    t = a(t)
                                } catch (d) {
                                    return {
                                        state: "parsererror",
                                        error: a
                                            ? d
                                            : "No conversion from " + s + " to " + o
                                    }
                                }
                            }
                return {state: "success", data: t}
        }
        function q(e, t, n, r) {
            var i;
            if (oe.isArray(t)) 
                oe.each(t, function (t, i) {
                    n || Vt.test(e)
                        ? r(e, i)
                        : q(e + "[" + (
                            "object" == typeof i
                                ? t
                                : ""
                        ) + "]", i, n, r)
                });
            else if (n || "object" !== oe.type(t)) 
                r(e, t);
            else 
                for (i in t) 
                    q(e + "[" + i + "]", t[i], n, r)
        }
        function H() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
        function U() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }
        function W(e) {
            return oe.isWindow(e)
                ? e
                : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var V = [],
            X = V.slice,
            J = V.concat,
            K = V.push,
            G = V.indexOf,
            Z = {},
            ee = Z.toString,
            te = Z.hasOwnProperty,
            ne = "".trim,
            re = {},
            ie = "1.11.0",
            oe = function (e, t) {
                return new oe
                    .fn
                    .init(e, t)
            },
            ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            le = /^-ms-/,
            se = /-([\da-z])/gi,
            ue = function (e, t) {
                return t.toUpperCase()
            };
        oe.fn = oe.prototype = {
            jquery: ie,
            constructor: oe,
            selector: "",
            length: 0,
            toArray: function () {
                return X.call(this)
            },
            get: function (e) {
                return null != e
                    ? e < 0
                        ? this[e + this.length]
                        : this[e]
                    : X.call(this)
            },
            pushStack: function (e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this,
                t.context = this.context,
                t
            },
            each: function (e, t) {
                return oe.each(this, e, t)
            },
            map: function (e) {
                return this.pushStack(oe.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (
                        e < 0
                            ? t
                            : 0
                    );
                return this.pushStack(
                    n >= 0 && n < t
                        ? [this[n]]
                        : []
                )
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: K,
            sort: V.sort,
            splice: V.splice
        },
        oe.extend = oe.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                l = 1,
                s = arguments.length,
                u = !1;
            for (
                "boolean" == typeof a && (u = a, a = arguments[l] || {}, l++),
                "object" == typeof a || oe.isFunction(a) || (a = {}),
                l === s && (a = this, l--);
                l < s;
                l++
            ) 
                if (null != (i = arguments[l])) 
                    for (r in i) 
                        e = a[r],
                        n = i[r],
                        a !== n && (
                            u && n && (oe.isPlainObject(n) || (t = oe.isArray(n)))
                                ? (
                                    t
                                        ? (
                                            t = !1,
                                            o = e && oe.isArray(e)
                                                ? e
                                                : []
                                        )
                                        : o = e && oe.isPlainObject(e)
                                            ? e
                                            : {},
                                    a[r] = oe.extend(u, o, n)
                                )
                                : void 0 !== n && (a[r] = n)
                        );
        return a
        },
        oe.extend({
            expando: "jQuery" + (
                ie + Math.random()
            ).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === oe.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === oe.type(e)
            },
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                return e - parseFloat(e) >= 0
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) 
                    return !1;
                return !0
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) 
                    return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) 
                        return !1
                } catch (n) {
                    return !1
                }
                if (re.ownLast) 
                    for (t in e) 
                        return te.call(e, t);
            for (t in e) 
                ;
                return void 0 === t || te.call(e, t)
            },
            type: function (e) {
                return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                        ? Z[ee.call(e)] || "object"
                        : typeof e
            },
            globalEval: function (t) {
                t && oe.trim(t) && (e.execScript || function (t) {
                    e
                        .eval
                        .call(e, t)
                })(t)
            },
            camelCase: function (e) {
                return e
                    .replace(le, "ms-")
                    .replace(se, ue)
            },
            nodeName: function (e, t) {
                return e.nodeName && e
                    .nodeName
                    .toLowerCase() === t.toLowerCase()
            },
            each: function (e, t, r) {
                var i,
                    o = 0,
                    a = e.length,
                    l = n(e);
                if (r) {
                    if (l) 
                        for (; o < a && (i = t.apply(e[o], r), i !== !1); o++) 
                        ;
                        else 
                            for (o in e) 
                                if (i = t.apply(e[o], r), i === !1) 
                                    break
                            }
                        else if (l) 
                        for (; o < a && (i = t.call(e[o], o, e[o]), i !== !1); o++) 
                        ;
                        else 
                            for (o in e) 
                                if (i = t.call(e[o], o, e[o]), i === !1) 
                                    break;
            return e
            },
            trim: ne && !ne.call("\ufeff ")
                ? function (e) {
                    return null == e
                        ? ""
                        : ne.call(e)
                }
                : function (e) {
                    return null == e
                        ? ""
                        : (e + "").replace(ae, "")
                },
            makeArray: function (e, t) {
                var r = t || [];
                return null != e && (
                    n(Object(e))
                        ? oe.merge(
                            r,
                            "string" == typeof e
                                ? [e]
                                : e
                        )
                        : K.call(r, e)
                ),
                r
            },
            inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (G) 
                        return G.call(t, e, n);
                    for (
                        r = t.length,
                        n = n
                            ? n < 0
                                ? Math.max(0, r + n)
                                : n
                            : 0; n < r; n++
                    ) 
                        if (n in t && t[n] === e) 
                            return n
                }
                return -1
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n;) 
                    e[i++] = t[r++];
                if (n !== n) 
                    for (; void 0 !== t[r];) 
                        e[i++] = t[r++];
            return e.length = i,
                e
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, l = !n; o < a; o++) 
                    r = !t(e[o], o),
                    r !== l && i.push(e[o]);
                return i
            },
            map: function (e, t, r) {
                var i,
                    o = 0,
                    a = e.length,
                    l = n(e),
                    s = [];
                if (l) 
                    for (; o < a; o++) 
                        i = t(e[o], o, r),
                        null != i && s.push(i);
            else 
                    for (o in e) 
                        i = t(e[o], o, r),
                        null != i && s.push(i);
            return J.apply([], s)
            },
            guid: 1,
            proxy: function (e, t) {
                var n,
                    r,
                    i;
                if ("string" == typeof t && (i = e[t], t = e, e = i), oe.isFunction(e)) 
                    return n = X.call(arguments, 2),
                    r = function () {
                        return e.apply(t || this, n.concat(X.call(arguments)))
                    }
                ,
                r.guid = e.guid = e.guid || oe.guid++,
                r
            },
            now: function () {
                return + new Date
            },
            support: re
        }),
        oe.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(" "),
            function (e, t) {
                Z["[object " + t + "]"] = t.toLowerCase()
            }
        );
        var ce = function (e) {
            function t(e, t, n, r) {
                var i,
                    o,
                    a,
                    l,
                    s,
                    u,
                    d,
                    h,
                    m,
                    y;
                if ((
                    t
                        ? t.ownerDocument || t
                        : z
                ) !== Q && A(t), t = t || Q, n = n || [], !e || "string" != typeof e) 
                    return n;
                if (1 !== (l = t.nodeType) && 9 !== l) 
                    return [];
                if (I && !r) {
                    if (i = ge.exec(e)) 
                        if (a = i[1]) {
                            if (9 === l) {
                                if (o = t.getElementById(a), !o || !o.parentNode) 
                                    return n;
                                if (o.id === a) 
                                    return n.push(o),
                                    n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && M(t, o) && o.id === a) 
                                return n.push(o),
                                n
                        }
                    else {
                        if (i[2]) 
                            return Z.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = i[3]) && P.getElementsByClassName && t.getElementsByClassName) 
                            return Z.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                    if (P.qsa && (!D || !D.test(e))) {
                        if (
                            h = d = L,
                            m = t,
                            y = 9 === l && e,
                            1 === l && "object" !== t.nodeName.toLowerCase()
                        ) {
                            for (
                                u = f(e),
                                (d = t.getAttribute("id"))
                                    ? h = d.replace(we, "\\$&")
                                    : t.setAttribute("id", h),
                                h = "[id='" + h + "'] ",
                                s = u.length; s--;
                            ) 
                                u[s] = h + p(u[s]);
                            m = be.test(e) && c(t.parentNode) || t,
                            y = u.join(",")
                        }
                        if (y) 
                            try {
                                return Z.apply(n, m.querySelectorAll(y)),
                                n
                            } catch (v) {}
                        finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return x(e.replace(se, "$1"), t, n, r)
            }
            function n() {
                function e(n, r) {
                    return t.push(n + " ") > k.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
                }
                var t = [];
                return e
            }
            function r(e) {
                return e[L] = !0,
                e
            }
            function i(e) {
                var t = Q.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t
                        .parentNode
                        .removeChild(t),
                    t = null
                }
            }
            function o(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) 
                    k.attrHandle[n[r]] = t
            }
            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~ t.sourceIndex || V) - (
                        ~ e.sourceIndex || V
                    );
                if (r) 
                    return r;
                if (n) 
                    for (; n = n.nextSibling;) 
                        if (n === t) 
                            return -1;
            return e
                    ? 1
                    : -1
            }
            function l(e) {
                return function (t) {
                    var n = t
                        .nodeName
                        .toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function s(e) {
                return function (t) {
                    var n = t
                        .nodeName
                        .toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function u(e) {
                return r(function (t) {
                    return t = +t,
                    r(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) 
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function c(e) {
                return e && typeof e.getElementsByTagName !== W && e
            }
            function d() {}
            function f(e, n) {
                var r,
                    i,
                    o,
                    a,
                    l,
                    s,
                    u,
                    c = q[e + " "];
                if (c) 
                    return n
                        ? 0
                        : c.slice(0);
                for (l = e, s = [], u = k.preFilter; l;) {
                    r && !(i = ue.exec(l)) || (
                        i && (l = l.slice(i[0].length) || l),
                        s.push(o = [])
                    ),
                    r = !1,
                    (i = ce.exec(l)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(se, " ")
                    }), l = l.slice(r.length));
                    for (a in k.filter) 
                        !(i = he[a].exec(l)) || u[a] && !(i = u[a](i)) || (
                            r = i.shift(),
                            o.push({value: r, type: a, matches: i}),
                            l = l.slice(r.length)
                        );
                    if (!r) 
                        break
                }
                return n
                    ? l.length
                    : l
                        ? t.error(e)
                        : q(e, s).slice(0)
            }
            function p(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) 
                    r += e[t].value;
                return r
            }
            function h(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = R++;
                return t.first
                    ? function (t, n, o) {
                        for (; t = t[r];) 
                            if (1 === t.nodeType || i) 
                                return e(t, n, o)
                    }
                    : function (t, n, a) {
                        var l,
                            s,
                            u = [B, o];
                        if (a) {
                            for (; t = t[r];) 
                                if ((1 === t.nodeType || i) && e(t, n, a)) 
                                    return !0
                            }
                        else 
                            for (; t = t[r];) 
                                if (1 === t.nodeType || i) {
                                    if (s = t[L] || (t[L] = {}), (l = s[r]) && l[0] === B && l[1] === o) 
                                        return u[2] = l[2];
                                    if (s[r] = u, u[2] = e(t, n, a)) 
                                        return !0
                                }
                            }
            }
            function m(e) {
                return e.length > 1
                    ? function (t, n, r) {
                        for (var i = e.length; i--;) 
                            if (!e[i](t, n, r)) 
                                return !1;
                    return !0
                    }
                    : e[0]
            }
            function y(e, t, n, r, i) {
                for (var o, a = [], l = 0, s = e.length, u = null != t; l < s; l++) 
                    (o = e[l]) && (n && !n(o, r, i) || (a.push(o), u && t.push(l)));
                return a
            }
            function v(e, t, n, i, o, a) {
                return i && !i[L] && (i = v(i)),
                o && !o[L] && (o = v(o, a)),
                r(function (r, a, l, s) {
                    var u,
                        c,
                        d,
                        f = [],
                        p = [],
                        h = a.length,
                        m = r || w(
                            t || "*",
                            l.nodeType
                                ? [l]
                                : l,
                            []
                        ),
                        v = !e || !r && t
                            ? m
                            : y(m, f, e, l, s),
                        g = n
                            ? o || (
                                r
                                    ? e
                                    : h || i
                            )
                                ? []
                                : a
                            : v;
                    if (n && n(v, g, l, s), i) 
                        for (u = y(g, p), i(u, [], l, s), c = u.length; c--;) 
                            (d = u[c]) && (g[p[c]] = !(v[p[c]] = d));
                if (r) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = g.length; c--;) 
                                    (d = g[c]) && u.push(v[c] = d);
                                o(null, g = [], u, s)
                            }
                            for (c = g.length; c--;) 
                                (d = g[c]) && (
                                    u = o
                                        ? te.call(r, d)
                                        : f[c]
                                ) > -1 && (r[u] = !(a[u] = d))
                        }
                    } else 
                        g = y(
                            g === a
                                ? g.splice(h, g.length)
                                : g
                        ),
                        o
                            ? o(null, a, g, s)
                            : Z.apply(a, g)
                    })
            }
            function g(e) {
                for (
                    var t,
                    n,
                    r,
                    i = e.length,
                    o = k.relative[e[0].type],
                    a = o || k.relative[" "],
                    l = o
                        ? 1
                        : 0,
                    s = h(function (e) {
                        return e === t
                    }, a, !0),
                    u = h(function (e) {
                        return te.call(t, e) > -1
                    }, a, !0),
                    c = [
                        function (e, n, r) {
                            return !o && (r || n !== _) || (
                                (t = n).nodeType
                                    ? s(e, n, r)
                                    : u(e, n, r)
                            )
                        }
                    ]; l < i; l++
                ) 
                    if (n = k.relative[e[l].type]) 
                        c = [h(m(c), n)];
                    else {
                        if (n = k.filter[e[l].type].apply(null, e[l].matches), n[L]) {
                            for (r = ++l; r < i && !k.relative[e[r].type]; r++) 
                            ;
                            return v(
                                l > 1 && m(c),
                                l > 1 && p(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type
                                        ? "*"
                                        : ""
                                })).replace(se, "$1"),
                                n,
                                l < r && g(e.slice(l, r)),
                                r < i && g(e = e.slice(r)),
                                r < i && p(e)
                            )
                        }
                        c.push(n)
                    }
                return m(c)
            }
            function b(e, n) {
                var i = n.length > 0,
                    o = e.length > 0,
                    a = function (r, a, l, s, u) {
                        var c,
                            d,
                            f,
                            p = 0,
                            h = "0",
                            m = r && [],
                            v = [],
                            g = _,
                            b = r || o && k
                                .find
                                .TAG("*", u),
                            w = B += null == g
                                ? 1
                                : Math.random() || .1,
                            x = b.length;
                        for (u && (_ = a !== Q && a); h !== x && null != (c = b[h]); h++) {
                            if (o && c) {
                                for (d = 0; f = e[d++];) 
                                    if (f(c, a, l)) {
                                        s.push(c);
                                        break
                                    }
                                u && (B = w)
                            }
                            i && ((c = !f && c) && p--, r && m.push(c))
                        }
                        if (p += h, i && h !== p) {
                            for (d = 0; f = n[d++];) 
                                f(m, v, a, l);
                            if (r) {
                                if (p > 0) 
                                    for (; h--;) 
                                        m[h] || v[h] || (v[h] = K.call(s));
                            v = y(v)
                            }
                            Z.apply(s, v),
                            u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(s)
                        }
                        return u && (B = w, _ = g),
                        m
                    };
                return i
                    ? r(a)
                    : a
            }
            function w(e, n, r) {
                for (var i = 0, o = n.length; i < o; i++) 
                    t(e, n[i], r);
                return r
            }
            function x(e, t, n, r) {
                var i,
                    o,
                    a,
                    l,
                    s,
                    u = f(e);
                if (!r && 1 === u.length) {
                    if (
                        o = u[0] = u[0].slice(0),
                        o.length > 2 && "ID" === (a = o[0]).type && P.getById && 9 === t.nodeType && I && k.relative[o[1].type]
                    ) {
                        if (t = (k.find.ID(a.matches[0].replace(xe, Te), t) || [])[0], !t) 
                            return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (
                        i = he.needsContext.test(e)
                            ? 0
                            : o.length; i = &&(a = o[i], !k.relative[l = a.type]) + 1;
                    ) 
                        if ((s = k.find[l]) && (r = s(a.matches[0].replace(xe, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && p(o), !e) 
                                return Z.apply(n, r),
                                n;
                            break
                        }
                    }
                return S(e, u)(r, t, !I, n, be.test(e) && c(t.parentNode) || t),
                n
            }
            var T,
                P,
                k,
                C,
                j,
                S,
                _,
                Y,
                E,
                A,
                Q,
                $,
                I,
                D,
                O,
                N,
                M,
                L = "sizzle" + -new Date,
                z = e.document,
                B = 0,
                R = 0,
                F = n(),
                q = n(),
                H = n(),
                U = function (e, t) {
                    return e === t && (E = !0),
                    0
                },
                W = "undefined",
                V = 1 << 31,
                X = {}.hasOwnProperty,
                J = [],
                K = J.pop,
                G = J.push,
                Z = J.push,
                ee = J.slice,
                te = J.indexOf || function (e) {
                    for (var t = 0, n = this.length; t < n; t++) 
                        if (this[t] === e) 
                            return t;
                return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap" +
                        "|loop|multiple|open|readonly|required|scoped",
                re = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = ie.replace("w", "w#"),
                ae = "\\[" + re + "*(" + ie + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])" +
                        "((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + re + "*\\]",
                le = ":(" + ie + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\"" +
                        "\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
                se = new RegExp(
                    "^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$",
                    "g"
                ),
                ue = new RegExp("^" + re + "*," + re + "*"),
                ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
                de = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
                fe = new RegExp(le),
                pe = new RegExp("^" + oe + "$"),
                he = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + le),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([" +
                                "+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)",
                        "i"
                    ),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp(
                        "^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d" +
                                ")?\\d*)" + re + "*\\)|)(?=[^-]|$)",
                        "i"
                    )
                },
                me = /^(?:input|select|textarea|button)$/i,
                ye = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                we = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
                Te = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n
                        ? t
                        : r < 0
                            ? String.fromCharCode(r + 65536)
                            : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                };
            try {
                Z.apply(J = ee.call(z.childNodes), z.childNodes),
                J[z.childNodes.length].nodeType
            } catch (Pe) {
                Z = {
                    apply: J.length
                        ? function (e, t) {
                            G.apply(e, ee.call(t))
                        }
                        : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];) 
                            ;
                            e.length = n - 1
                        }
                }
            }
            P = t.support = {},
            j = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            },
            A = t.setDocument = function (e) {
                var t,
                    n = e
                        ? e.ownerDocument || e
                        : z,
                    r = n.defaultView;
                return n !== Q && 9 === n.nodeType && n.documentElement
                    ? (
                        Q = n,
                        $ = n.documentElement,
                        I = !j(n),
                        r && r !== r.top && (
                            r.addEventListener
                                ? r.addEventListener("unload", function () {
                                    A()
                                }, !1)
                                : r.attachEvent && r.attachEvent("onunload", function () {
                                    A()
                                })
                        ),
                        P.attributes = i(function (e) {
                            return e.className = "i",
                            !e.getAttribute("className")
                        }),
                        P.getElementsByTagName = i(function (e) {
                            return e.appendChild(n.createComment("")),
                            !e
                                .getElementsByTagName("*")
                                .length
                        }),
                        P.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function (e) {
                            return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                            e.firstChild.className = "i",
                            2 === e
                                .getElementsByClassName("i")
                                .length
                        }),
                        P.getById = i(function (e) {
                            return $
                                .appendChild(e)
                                .id = L,
                            !n.getElementsByName || !n
                                .getElementsByName(L)
                                .length
                        }),
                        P.getById
                            ? (k.find.ID = function (e, t) {
                                if (typeof t.getElementById !== W && I) {
                                    var n = t.getElementById(e);
                                    return n && n.parentNode
                                        ? [n]
                                        : []
                                }
                            }, k.filter.ID = function (e) {
                                var t = e.replace(xe, Te);
                                return function (e) {
                                    return e.getAttribute("id") === t
                                }
                            })
                            : (delete k.find.ID, k.filter.ID = function (e) {
                                var t = e.replace(xe, Te);
                                return function (e) {
                                    var n = typeof e.getAttributeNode !== W && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }),
                        k.find.TAG = P.getElementsByTagName
                            ? function (e, t) {
                                if (typeof t.getElementsByTagName !== W) 
                                    return t.getElementsByTagName(e)
                            }
                            : function (e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[i++];) 
                                        1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return o
                            },
                        k.find.CLASS = P.getElementsByClassName && function (e, t) {
                            if (typeof t.getElementsByClassName !== W && I) 
                                return t.getElementsByClassName(e)
                        },
                        O = [],
                        D = [],
                        (P.qsa = ve.test(n.querySelectorAll)) && (i(function (e) {
                            e.innerHTML = "<select t=''><option selected=''></option></select>",
                            e
                                .querySelectorAll("[t^='']")
                                .length && D.push("[*^$]=" + re + "*(?:''|\"\")"),
                            e
                                .querySelectorAll("[selected]")
                                .length || D.push("\\[" + re + "*(?:value|" + ne + ")"),
                            e
                                .querySelectorAll(":checked")
                                .length || D.push(":checked")
                        }), i(function (e) {
                            var t = n.createElement("input");
                            t.setAttribute("type", "hidden"),
                            e
                                .appendChild(t)
                                .setAttribute("name", "D"),
                            e
                                .querySelectorAll("[name=d]")
                                .length && D.push("name" + re + "*[*^$|!~]?="),
                            e
                                .querySelectorAll(":enabled")
                                .length || D.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            D.push(",.*:")
                        })),
                        (
                            P.matchesSelector = ve.test(N = $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)
                        ) && i(function (e) {
                            P.disconnectedMatch = N.call(e, "div"),
                            N.call(e, "[s!='']:x"),
                            O.push("!=", le)
                        }),
                        D = D.length && new RegExp(D.join("|")),
                        O = O.length && new RegExp(O.join("|")),
                        t = ve.test($.compareDocumentPosition),
                        M = t || ve.test($.contains)
                            ? function (e, t) {
                                var n = 9 === e.nodeType
                                        ? e.documentElement
                                        : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(
                                    n.contains
                                        ? n.contains(r)
                                        : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)
                                ))
                            }
                            : function (e, t) {
                                if (t) 
                                    for (; t = t.parentNode;) 
                                        if (t === e) 
                                            return !0;
                            return !1
                            },
                        U = t
                            ? function (e, t) {
                                if (e === t) 
                                    return E = !0,
                                    0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return r
                                    ? r
                                    : (
                                        r = (e.ownerDocument || e) === (t.ownerDocument || t)
                                            ? e.compareDocumentPosition(t)
                                            : 1,
                                        1 & r || !P.sortDetached && t.compareDocumentPosition(e) === r
                                            ? e === n || e.ownerDocument === z && M(z, e)
                                                ? -1
                                                : t === n || t.ownerDocument === z && M(z, t)
                                                    ? 1
                                                    : Y
                                                        ? te.call(Y, e) - te.call(Y, t)
                                                        : 0
                                            : 4 & r
                                                ? -1
                                                : 1
                                    )
                            }
                            : function (e, t) {
                                if (e === t) 
                                    return E = !0,
                                    0;
                                var r,
                                    i = 0,
                                    o = e.parentNode,
                                    l = t.parentNode,
                                    s = [e],
                                    u = [t];
                                if (!o || !l) 
                                    return e === n
                                        ? -1
                                        : t === n
                                            ? 1
                                            : o
                                                ? -1
                                                : l
                                                    ? 1
                                                    : Y
                                                        ? te.call(Y, e) - te.call(Y, t)
                                                        : 0;
                                if (o === l) 
                                    return a(e, t);
                                for (r = e; r = r.parentNode;) 
                                    s.unshift(r);
                                for (r = t; r = r.parentNode;) 
                                    u.unshift(r);
                                for (; s[i] === u[i];) 
                                    i++;
                                return i
                                    ? a(s[i], u[i])
                                    : s[i] === z
                                        ? -1
                                        : u[i] === z
                                            ? 1
                                            : 0
                            },
                        n
                    )
                    : Q
            },
            t.matches = function (e, n) {
                return t(e, null, null, n)
            },
            t.matchesSelector = function (e, n) {
                if (
                    (e.ownerDocument || e) !== Q && A(e),
                    n = n.replace(de, "='$1']"),
                    P.matchesSelector && I && (!O || !O.test(n)) && (!D || !D.test(n))
                ) 
                    try {
                        var r = N.call(e, n);
                        if (r || P.disconnectedMatch || e.document && 11 !== e.document.nodeType) 
                            return r
                    } catch (i) {}
                return t(n, Q, null, [e]).length > 0
            },
            t.contains = function (e, t) {
                return (e.ownerDocument || e) !== Q && A(e),
                M(e, t)
            },
            t.attr = function (e, t) {
                (e.ownerDocument || e) !== Q && A(e);
                var n = k.attrHandle[t.toLowerCase()],
                    r = n && X.call(k.attrHandle, t.toLowerCase())
                        ? n(e, t, !I)
                        : void 0;
                return void 0 !== r
                    ? r
                    : P.attributes || !I
                        ? e.getAttribute(t)
                        : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null
            },
            t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            },
            t.uniqueSort = function (e) {
                var t,
                    n = [],
                    r = 0,
                    i = 0;
                if (E = !P.detectDuplicates, Y = !P.sortStable && e.slice(0), e.sort(U), E) {
                    for (; t = e[i++];) 
                        t === e[i] && (r = n.push(i));
                    for (; r--;) 
                        e.splice(n[r], 1)
                }
                return Y = null,
                e
            },
            C = t.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) 
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) 
                            n += C(e)
                    } else if (3 === i || 4 === i) 
                        return e.nodeValue
                } else 
                    for (; t = e[r++];) 
                        n += C(t);
            return n
            },
            k = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
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
                    ATTR: function (e) {
                        return e[1] = e[1].replace(xe, Te),
                        e[3] = (e[4] || e[5] || "").replace(xe, Te),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3)
                            ? (e[3] || t.error(e[0]), e[4] = + (
                                e[4]
                                    ? e[5] + (e[6] || 1)
                                    : 2 * ("even" === e[3] || "odd" === e[3])
                            ), e[5] = +(e[7] + e[8] || "odd" === e[3]))
                            : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[5] && e[2];
                        return he
                            .CHILD
                            .test(e[0])
                                ? null
                                : (
                                    e[3] && void 0 !== e[4]
                                        ? e[2] = e[4]
                                        : n && fe.test(n) && (t = f(n, !0)) && (
                                            t = n.indexOf(")", n.length - t) - n.length
                                        ) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)),
                                    e.slice(0, 3)
                                )
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e
                            .replace(xe, Te)
                            .toLowerCase();
                        return "*" === e
                            ? function () {
                                return !0
                            }
                            : function (e) {
                                return e.nodeName && e
                                    .nodeName
                                    .toLowerCase() === t
                            }
                    },
                    CLASS: function (e) {
                        var t = F[e + " "];
                        return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && F(
                            e,
                            function (e) {
                                return t.test(
                                    "string" == typeof e.className && e.className || typeof e.getAttribute !== W && e.getAttribute("class") || ""
                                )
                            }
                        )
                    },
                    ATTR: function (e, n, r) {
                        return function (i) {
                            var o = t.attr(i, e);
                            return null == o
                                ? "!=" === n
                                : !n || (
                                    o += "",
                                    "=" === n
                                        ? o === r
                                        : "!=" === n
                                            ? o !== r
                                            : "^=" === n
                                                ? r && 0 === o.indexOf(r)
                                                : "*=" === n
                                                    ? r && o.indexOf(r) > -1
                                                    : "$=" === n
                                                        ? r && o.slice(-r.length) === r
                                                        : "~=" === n
                                                            ? (" " + o + " ").indexOf(r) > -1
                                                            : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-")
                                )
                        }
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            l = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                return !!e.parentNode
                            }
                            : function (t, n, s) {
                                var u,
                                    c,
                                    d,
                                    f,
                                    p,
                                    h,
                                    m = o !== a
                                        ? "nextSibling"
                                        : "previousSibling",
                                    y = t.parentNode,
                                    v = l && t
                                        .nodeName
                                        .toLowerCase(),
                                    g = !s && !l;
                                if (y) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];) 
                                                if (
                                                    l
                                                        ? d.nodeName.toLowerCase() === v
                                                        : 1 === d.nodeType
                                                ) 
                                                    return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [
                                        a
                                            ? y.firstChild
                                            : y.lastChild
                                    ], a && g) {
                                        for (
                                            c = y[L] || (y[L] = {}),
                                            u = c[e] || [],
                                            p = u[0] === B && u[1],
                                            f = u[0] === B && u[2],
                                            d = p && y.childNodes[p];
                                            d = ++p && d && d[m] || (f = p = 0) || h.pop();
                                        ) 
                                            if (1 === d.nodeType && ++f && d === t) {
                                                c[e] = [B, p, f];
                                                break
                                            }
                                        } else if (g && (u = (t[L] || (t[L] = {}))[e]) && u[0] === B) 
                                        f = u[1];
                                    else 
                                        for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((
                                            l
                                                ? d.nodeName.toLowerCase() !== v
                                                : 1 !== d.nodeType
                                        ) || !++f || (g && ((d[L] || (d[L] = {}))[e] = [B, f]), d !== t));) 
                                        ;
                                        return f -= i,
                                        f === r || f % r === 0 && f / r >= 0
                                }
                            }
                    },
                    PSEUDO: function (e, n) {
                        var i,
                            o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error(
                                "unsupported pseudo: " + e
                            );
                        return o[L]
                            ? o(n)
                            : o.length > 1
                                ? (
                                    i = [
                                        e, e, "", n
                                    ],
                                    k.setFilters.hasOwnProperty(e.toLowerCase())
                                        ? r(function (e, t) {
                                            for (var r, i = o(e, n), a = i.length; a--;) 
                                                r = te.call(e, i[a]),
                                                e[r] = !(t[r] = i[a])
                                        })
                                        : function (e) {
                                            return o(e, 0, i)
                                        }
                                )
                                : o
                    }
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [],
                            n = [],
                            i = S(e.replace(se, "$1"));
                        return i[L]
                            ? r(function (e, t, n, r) {
                                for (var o, a = i(e, null, r, []), l = e.length; l--;) 
                                    (o = a[l]) && (e[l] = !(t[l] = o))
                            })
                            : function (e, r, o) {
                                return t[0] = e,
                                i(t, null, o, n),
                                !n.pop()
                            }
                    }),
                    has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function (e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e),
                        e = e
                            .replace(xe, Te)
                            .toLowerCase(),
                        function (t) {
                            var n;
                            do 
                                if (
                                    n = I
                                        ? t.lang
                                        : t.getAttribute("xml:lang") || t.getAttribute("lang")
                                ) 
                                    return n = n.toLowerCase(),
                                    n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === $
                    },
                    focus: function (e) {
                        return e === Q.activeElement && (!Q.hasFocus || Q.hasFocus()) && !!(
                            e.type || e.href ||~ e.tabIndex
                        )
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e
                            .nodeName
                            .toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) 
                            if (e.nodeType < 6) 
                                return !1;
                    return !0
                    },
                    parent: function (e) {
                        return !k
                            .pseudos
                            .empty(e)
                    },
                    header: function (e) {
                        return ye.test(e.nodeName)
                    },
                    input: function (e) {
                        return me.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e
                            .nodeName
                            .toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e
                            .nodeName
                            .toLowerCase() && "text" === e.type && (
                                null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()
                            );
                    },
                    first: u(function () {
                        return [0]
                    }),
                    last: u(function (e, t) {
                        return [t - 1]
                    }),
                    eq: u(function (e, t, n) {
                        return [
                            n < 0
                                ? n + t
                                : n
                        ]
                    }),
                    even: u(function (e, t) {
                        for (var n = 0; n < t; n += 2) 
                            e.push(n);
                        return e
                    }),
                    odd: u(function (e, t) {
                        for (var n = 1; n < t; n += 2) 
                            e.push(n);
                        return e
                    }),
                    lt: u(function (e, t, n) {
                        for (
                            var r = n < 0
                                ? n + t
                                : n; --r >= 0;
                        ) 
                            e.push(r);
                        return e
                    }),
                    gt: u(function (e, t, n) {
                        for (
                            var r = n < 0
                                ? n + t
                                : n; ++r < t;
                        ) 
                            e.push(r);
                        return e
                    })
                }
            },
            k.pseudos.nth = k.pseudos.eq;
            for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) 
                k.pseudos[T] = l(T);
            for (T in {
                submit: !0,
                reset: !0
            }) 
                k.pseudos[T] = s(T);
            return d.prototype = k.filters = k.pseudos,
            k.setFilters = new d,
            S = t.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = H[e + " "];
                if (!o) {
                    for (t || (t = f(e)), n = t.length; n--;) 
                        o = g(t[n]),
                        o[L]
                            ? r.push(o)
                            : i.push(o);
                    o = H(e, b(i, r))
                }
                return o
            },
            P.sortStable = L
                .split("")
                .sort(U)
                .join("") === L,
            P.detectDuplicates = !!E,
            A(),
            P.sortDetached = i(function (e) {
                return 1 & e.compareDocumentPosition(Q.createElement("div"))
            }),
            i(function (e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e
                    .firstChild
                    .getAttribute("href")
            }) || o("type|href|height|width", function (e, t, n) {
                if (!n) 
                    return e.getAttribute(
                        t,
                        "type" === t.toLowerCase()
                            ? 1
                            : 2
                    )
            }),
            P.attributes && i(function (e) {
                return e.innerHTML = "<input/>",
                e
                    .firstChild
                    .setAttribute("value", ""),
                "" === e
                    .firstChild
                    .getAttribute("value")
            }) || o("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) 
                    return e.defaultValue
            }),
            i(function (e) {
                return null == e.getAttribute("disabled")
            }) || o(ne, function (e, t, n) {
                var r;
                if (!n) 
                    return e[t] === !0
                        ? t.toLowerCase()
                        : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null
                    }),
            t
        }(e);
        oe.find = ce,
        oe.expr = ce.selectors,
        oe.expr[":"] = oe.expr.pseudos,
        oe.unique = ce.uniqueSort,
        oe.text = ce.getText,
        oe.isXMLDoc = ce.isXML,
        oe.contains = ce.contains;
        var de = oe.expr.match.needsContext,
            fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pe = /^.[^:#\[\.,]*$/;
        oe.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? oe
                    .find
                    .matchesSelector(r, e)
                        ? [r]
                        : []
                : oe
                    .find
                    .matches(e, oe.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
        },
        oe
            .fn
            .extend({
                find: function (e) {
                    var t,
                        n = [],
                        r = this,
                        i = r.length;
                    if ("string" != typeof e) 
                        return this.pushStack(oe(e).filter(function () {
                            for (t = 0; t < i; t++) 
                                if (oe.contains(r[t], this)) 
                                    return !0
                        }));
                    for (t = 0; t < i; t++) 
                        oe.find(e, r[t], n);
                    return n = this.pushStack(
                        i > 1
                            ? oe.unique(n)
                            : n
                    ),
                    n.selector = this.selector
                        ? this.selector + " " + e
                        : e,
                    n
                },
                filter: function (e) {
                    return this.pushStack(r(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(r(this, e || [], !0))
                },
                is: function (e) {
                    return !!r(
                        this,
                        "string" == typeof e && de.test(e)
                            ? oe(e)
                            : e || [],
                        !1
                    ).length
                }
            });
        var he,
            me = e.document,
            ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ve = oe.fn.init = function (e, t) {
                var n,
                    r;
                if (!e) 
                    return this;
                if ("string" == typeof e) {
                    if (
                        n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3
                            ? [null, e, null]
                            : ye.exec(e),
                        !n || !n[1] && t
                    ) 
                        return !t || t.jquery
                            ? (t || he).find(e)
                            : this
                                .constructor(t)
                                .find(e);
                    if (n[1]) {
                        if (
                            t = t instanceof oe
                                ? t[0]
                                : t,
                            oe.merge(this, oe.parseHTML(
                                n[1],
                                t && t.nodeType
                                    ? t.ownerDocument || t
                                    : me,
                                !0
                            )),
                            fe.test(n[1]) && oe.isPlainObject(t)
                        ) 
                            for (n in t) 
                                oe.isFunction(this[n])
                                    ? this[n](t[n])
                                    : this.attr(n, t[n]);
                        return this
                    }
                    if (r = me.getElementById(n[2]), r && r.parentNode) {
                        if (r.id !== n[2]) 
                            return he.find(e);
                        this.length = 1,
                        this[0] = r
                    }
                    return this.context = me,
                    this.selector = e,
                    this
                }
                return e.nodeType
                    ? (this.context = this[0] = e, this.length = 1, this)
                    : oe.isFunction(e)
                        ? "undefined" != typeof he.ready
                            ? he.ready(e)
                            : e(oe)
                        : (
                            void 0 !== e.selector && (this.selector = e.selector, this.context = e.context),
                            oe.makeArray(e, this)
                        )
            };
        ve.prototype = oe.fn,
        he = oe(me);
        var ge = /^(?:parents|prev(?:Until|All))/,
            be = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oe.extend({
            dir: function (e, t, n) {
                for (
                    var r = [],
                    i = e[t];
                    i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !oe(i).is(n));
                ) 
                    1 === i.nodeType && r.push(i),
                    i = i[t];
                return r
            },
            sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }),
        oe
            .fn
            .extend({
                has: function (e) {
                    var t,
                        n = oe(e, this),
                        r = n.length;
                    return this.filter(function () {
                        for (t = 0; t < r; t++) 
                            if (oe.contains(this, n[t])) 
                                return !0
                    })
                },
                closest: function (e, t) {
                    for (
                        var n,
                        r = 0,
                        i = this.length,
                        o = [],
                        a = de.test(e) || "string" != typeof e
                            ? oe(e, t || this.context)
                            : 0; r < i; r++
                    ) 
                        for (n = this[r]; n && n !== t; n = n.parentNode) 
                            if (n.nodeType < 11 && (
                                a
                                    ? a.index(n) > -1
                                    : 1 === n.nodeType && oe.find.matchesSelector(n, e)
                            )) {
                                o.push(n);
                                break
                            }
                        return this.pushStack(
                        o.length > 1
                            ? oe.unique(o)
                            : o
                    )
                },
                index: function (e) {
                    return e
                        ? "string" == typeof e
                            ? oe.inArray(this[0], oe(e))
                            : oe.inArray(
                                e.jquery
                                    ? e[0]
                                    : e,
                                this
                            )
                        : this[0] && this[0].parentNode
                            ? this
                                .first()
                                .prevAll()
                                .length
                            : -1
                },
                add: function (e, t) {
                    return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
                },
                addBack: function (e) {
                    return this.add(
                        null == e
                            ? this.prevObject
                            : this.prevObject.filter(e)
                    )
                }
            }),
        oe.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType
                    ? t
                    : null
            },
            parents: function (e) {
                return oe.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return oe.dir(e, "parentNode", n)
            },
            next: function (e) {
                return i(e, "nextSibling")
            },
            prev: function (e) {
                return i(e, "previousSibling")
            },
            nextAll: function (e) {
                return oe.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return oe.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return oe.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return oe.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return oe.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return oe.sibling(e.firstChild)
            },
            contents: function (e) {
                return oe.nodeName(e, "iframe")
                    ? e.contentDocument || e.contentWindow.document
                    : oe.merge([], e.childNodes)
            }
        }, function (e, t) {
            oe.fn[e] = function (n, r) {
                var i = oe.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = oe.filter(r, i)),
                this.length > 1 && (
                    be[e] || (i = oe.unique(i)),
                    ge.test(e) && (i = i.reverse())
                ),
                this.pushStack(i)
            }
        });
        var we = /\S+/g,
            xe = {};
        oe.Callbacks = function (e) {
            e = "string" == typeof e
                ? xe[e] || o(e)
                : oe.extend({}, e);
            var t,
                n,
                r,
                i,
                a,
                l,
                s = [],
                u = !e.once && [],
                c = function (o) {
                    for (
                        n = e.memory && o,
                        r = !0,
                        a = l || 0,
                        l = 0,
                        i = s.length,
                        t = !0;
                        s && a < i;
                        a++
                    ) 
                        if (s[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1,
                    s && (
                        u
                            ? u.length && c(u.shift())
                            : n
                                ? s = []
                                : d.disable()
                    )
                },
                d = {
                    add: function () {
                        if (s) {
                            var r = s.length;
                            !function o(t) {
                                oe.each(t, function (t, n) {
                                    var r = oe.type(n);
                                    "function" === r
                                        ? e.unique && d.has(n) || s.push(n)
                                        : n && n.length && "string" !== r && o(n)
                                })
                            }(arguments),
                            t
                                ? i = s.length
                                : n && (l = r, c(n))
                        }
                        return this
                    },
                    remove: function () {
                        return s && oe.each(arguments, function (e, n) {
                            for (var r; (r = oe.inArray(n, s, r)) > -1;) 
                                s.splice(r, 1),
                                t && (r <= i && i--, r <= a && a--)
                        }),
                        this
                    },
                    has: function (e) {
                        return e
                            ? oe.inArray(e, s) > -1
                            : !(!s || !s.length)
                    },
                    empty: function () {
                        return s = [],
                        i = 0,
                        this
                    },
                    disable: function () {
                        return s = u = n = void 0,
                        this
                    },
                    disabled: function () {
                        return !s
                    },
                    lock: function () {
                        return u = void 0,
                        n || d.disable(),
                        this
                    },
                    locked: function () {
                        return !u
                    },
                    fireWith: function (e, n) {
                        return !s || r && !u || (
                            n = n || [],
                            n = [
                                e, n.slice
                                    ? n.slice()
                                    : n
                            ],
                            t
                                ? u.push(n)
                                : c(n)
                        ),
                        this
                    },
                    fire: function () {
                        return d.fireWith(this, arguments),
                        this
                    },
                    fired: function () {
                        return !!r
                    }
                };
            return d
        },
        oe.extend({
            Deferred: function (e) {
                var t = [
                        [
                            "resolve", "done", oe.Callbacks("once memory"), "resolved"
                        ],
                        [
                            "reject", "fail", oe.Callbacks("once memory"), "rejected"
                        ],
                        [
                            "notify", "progress", oe.Callbacks("memory")
                        ]
                    ],
                    n = "pending",
                    r = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return i
                                .done(arguments)
                                .fail(arguments),
                            this
                        },
                        then: function () {
                            var e = arguments;
                            return oe
                                .Deferred(function (n) {
                                    oe.each(t, function (t, o) {
                                        var a = oe.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e = a && a.apply(this, arguments);
                                            e && oe.isFunction(e.promise)
                                                ? e
                                                    .promise()
                                                    .done(n.resolve)
                                                    .fail(n.reject)
                                                    .progress(n.notify)
                                                : n[o[0] + "With"](
                                                    this === r
                                                        ? n.promise()
                                                        : this,
                                                    a
                                                        ? [e]
                                                        : arguments
                                                )
                                        })
                                    }),
                                    e = null
                                })
                                .promise()
                        },
                        promise: function (e) {
                            return null != e
                                ? oe.extend(e, r)
                                : r
                        }
                    },
                    i = {};
                return r.pipe = r.then,
                oe.each(t, function (e, o) {
                    var a = o[2],
                        l = o[3];
                    r[o[1]] = a.add,
                    l && a.add(function () {
                        n = l
                    }, t[1 ^ e][2].disable, t[2][2].lock),
                    i[o[0]] = function () {
                        return i[o[0] + "With"](
                            this === i
                                ? r
                                : this,
                            arguments
                        ),
                        this
                    },
                    i[o[0] + "With"] = a.fireWith
                }),
                r.promise(i),
                e && e.call(i, i),
                i
            },
            when: function (e) {
                var t,
                    n,
                    r,
                    i = 0,
                    o = X.call(arguments),
                    a = o.length,
                    l = 1 !== a || e && oe.isFunction(e.promise)
                        ? a
                        : 0,
                    s = 1 === l
                        ? e
                        : oe.Deferred(),
                    u = function (e, n, r) {
                        return function (i) {
                            n[e] = this,
                            r[e] = arguments.length > 1
                                ? X.call(arguments)
                                : i,
                            r === t
                                ? s.notifyWith(n, r)
                                : --l || s.resolveWith(n, r)
                        }
                    };
                if (a > 1) 
                    for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) 
                        o[i] && oe.isFunction(o[i].promise)
                            ? o[i]
                                .promise()
                                .done(u(i, r, o))
                                .fail(s.reject)
                                .progress(u(i, n, t))
                            : --l;
                return l || s.resolveWith(r, o),
                s.promise()
            }
        });
        var Te;
        oe.fn.ready = function (e) {
            return oe
                .ready
                .promise()
                .done(e),
            this
        },
        oe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e
                    ? oe.readyWait++
                    : oe.ready(!0)
            },
            ready: function (e) {
                if (
                    e === !0
                        ? !--oe.readyWait
                        : !oe.isReady
                ) {
                    if (!me.body) 
                        return setTimeout(oe.ready);
                    oe.isReady = !0,
                    e !== !0 && --oe.readyWait > 0 || (
                        Te.resolveWith(me, [oe]),
                        oe.fn.trigger && oe(me).trigger("ready").off("ready")
                    )
                }
            }
        }),
        oe.ready.promise = function (t) {
            if (!Te) 
                if (Te = oe.Deferred(), "complete" === me.readyState) 
                    setTimeout(oe.ready);
                else if (me.addEventListener) 
                    me.addEventListener("DOMContentLoaded", l, !1),
                    e.addEventListener("load", l, !1);
                else {
                    me.attachEvent("onreadystatechange", l),
                    e.attachEvent("onload", l);
                    var n = !1;
                    try {
                        n = null == e.frameElement && me.documentElement
                    } catch (r) {}
                    n && n.doScroll && !function i() {
                        if (!oe.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(i, 50)
                            }
                            a(),
                            oe.ready()
                        }
                    }()
                }
            return Te.promise(t)
        };
        var Pe,
            ke = "undefined";
        for (Pe in oe(re)) 
            break;
        re.ownLast = "0" !== Pe,
        re.inlineBlockNeedsLayout = !1,
        oe(function () {
            var e,
                t,
                n = me.getElementsByTagName("body")[0];
            n && (
                e = me.createElement("div"),
                e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                t = me.createElement("div"),
                n.appendChild(e).appendChild(t),
                typeof t.style.zoom !== ke && (
                    t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
                    (re.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)
                ),
                n.removeChild(e),
                e = t = null
            )
        }),
        function () {
            var e = me.createElement("div");
            if (null == re.deleteExpando) {
                re.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    re.deleteExpando = !1
                }
            }
            e = null
        }(),
        oe.acceptData = function (e) {
            var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (
                !t || t !== !0 && e.getAttribute("classid") === t
            )
        };
        var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            je = /([A-Z])/g;
        oe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (e) {
                return e = e.nodeType
                    ? oe.cache[e[oe.expando]]
                    : e[oe.expando],
                !!e && !u(e)
            },
            data: function (e, t, n) {
                return c(e, t, n)
            },
            removeData: function (e, t) {
                return d(e, t)
            },
            _data: function (e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return d(e, t, !0)
            }
        }),
        oe
            .fn
            .extend({
                data: function (e, t) {
                    var n,
                        r,
                        i,
                        o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
                            for (n = a.length; n--;) 
                                r = a[n].name,
                                0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)), s(o, r, i[r]));
                            oe._data(o, "parsedAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e
                        ? this.each(function () {
                            oe.data(this, e)
                        })
                        : arguments.length > 1
                            ? this.each(function () {
                                oe.data(this, e, t)
                            })
                            : o
                                ? s(o, e, oe.data(o, e))
                                : void 0
                },
                removeData: function (e) {
                    return this.each(function () {
                        oe.removeData(this, e)
                    })
                }
            }),
        oe.extend({
            queue: function (e, t, n) {
                var r;
                if (e) 
                    return t = (t || "fx") + "queue",
                    r = oe._data(e, t),
                    n && (
                        !r || oe.isArray(n)
                            ? r = oe._data(e, t, oe.makeArray(n))
                            : r.push(n)
                    ),
                    r || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = oe.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = oe._queueHooks(e, t),
                    a = function () {
                        oe.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--),
                i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
                !r && o && o
                    .empty
                    .fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return oe._data(e, n) || oe._data(e, n, {
                    empty: oe
                        .Callbacks("once memory")
                        .add(function () {
                            oe._removeData(e, t + "queue"),
                            oe._removeData(e, n)
                        })
                })
            }
        }),
        oe
            .fn
            .extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--),
                    arguments.length < n
                        ? oe.queue(this[0], e)
                        : void 0 === t
                            ? this
                            : this.each(function () {
                                var n = oe.queue(this, e, t);
                                oe._queueHooks(this, e),
                                "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
                            })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        oe.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n,
                        r = 1,
                        i = oe.Deferred(),
                        o = this,
                        a = this.length,
                        l = function () {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) 
                        n = oe._data(o[a], e + "queueHooks"),
                        n && n.empty && (r++, n.empty.add(l));
                    return l(),
                    i.promise(t)
                }
            });
        var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            _e = [
                "Top", "Right", "Bottom", "Left"
            ],
            Ye = function (e, t) {
                return e = t || e,
                "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
            },
            Ee = oe.access = function (e, t, n, r, i, o, a) {
                var l = 0,
                    s = e.length,
                    u = null == n;
                if ("object" === oe.type(n)) {
                    i = !0;
                    for (l in n) 
                        oe.access(e, t, l, n[l], !0, o, a)
                } else if (void 0 !== r && (i = !0, oe.isFunction(r) || (a = !0), u && (
                    a
                        ? (t.call(e, r), t = null)
                        : (u = t, t = function (e, t, n) {
                            return u.call(oe(e), n)
                        })
                ), t)) 
                    for (; l < s; l++) 
                        t(
                            e[l],
                            n,
                            a
                                ? r
                                : r.call(e[l], l, t(e[l], n))
                        );
            return i
                    ? e
                    : u
                        ? t.call(e)
                        : s
                            ? t(e[0], n)
                            : o
            },
            Ae = /^(?:checkbox|radio)$/i;
        !function () {
            var e = me.createDocumentFragment(),
                t = me.createElement("div"),
                n = me.createElement("input");
            if (
                t.setAttribute("className", "t"),
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a>",
                re.leadingWhitespace = 3 === t.firstChild.nodeType,
                re.tbody = !t.getElementsByTagName("tbody").length,
                re.htmlSerialize = !!t.getElementsByTagName("link").length,
                re.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML,
                n.type = "checkbox",
                n.checked = !0,
                e.appendChild(n),
                re.appendChecked = n.checked,
                t.innerHTML = "<textarea>x</textarea>",
                re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
                e.appendChild(t),
                t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
                re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                re.noCloneEvent = !0,
                t.attachEvent && (t.attachEvent("onclick", function () {
                    re.noCloneEvent = !1
                }), t.cloneNode(!0).click()),
                null == re.deleteExpando
            ) {
                re.deleteExpando = !0;
                try {
                    delete t.test
                } catch (r) {
                    re.deleteExpando = !1
                }
            }
            e = t = n = null
        }(),
        function () {
            var t,
                n,
                r = me.createElement("div");
            for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) 
                n = "on" + t,
                (re[t + "Bubbles"] = n in e) || (
                    r.setAttribute(n, "t"),
                    re[t + "Bubbles"] = r.attributes[n].expando === !1
                );
            r = null
        }();
        var Qe = /^(?:input|select|textarea)$/i,
            $e = /^key/,
            Ie = /^(?:mouse|contextmenu)|click/,
            De = /^(?:focusinfocus|focusoutblur)$/,
            Oe = /^([^.]*)(?:\.(.+)|)$/;
        oe.event = {
            global: {},
            add: function (e, t, n, r, i) {
                var o,
                    a,
                    l,
                    s,
                    u,
                    c,
                    d,
                    f,
                    p,
                    h,
                    m,
                    y = oe._data(e);
                if (y) {
                    for (
                        n.handler && (s = n, n = s.handler, i = s.selector),
                        n.guid || (n.guid = oe.guid++),
                        (a = y.events) || (a = y.events = {}),
                        (c = y.handle) || (c = y.handle = function (e) {
                            return typeof oe === ke || e && oe.event.triggered === e.type
                                ? void 0
                                : oe
                                    .event
                                    .dispatch
                                    .apply(c.elem, arguments)
                        }, c.elem = e),
                        t = (t || "").match(we) || [""],
                        l = t.length;
                        l--;
                    ) 
                        o = Oe.exec(t[l]) || [],
                        p = m = o[1],
                        h = (o[2] || "")
                            .split(".")
                            .sort(),
                        p && (
                            u = oe.event.special[p] || {},
                            p = (
                                i
                                    ? u.delegateType
                                    : u.bindType
                            ) || p,
                            u = oe.event.special[p] || {},
                            d = oe.extend({
                                type: p,
                                origType: m,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && oe
                                    .expr
                                    .match
                                    .needsContext
                                    .test(i),
                                namespace: h.join(".")
                            }, s),
                            (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (
                                e.addEventListener
                                    ? e.addEventListener(p, c, !1)
                                    : e.attachEvent && e.attachEvent("on" + p, c)
                            )),
                            u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                            i
                                ? f.splice(f.delegateCount++, 0, d)
                                : f.push(d),
                            oe.event.global[p] = !0
                        );
                    e = null
                }
            },
            remove: function (e, t, n, r, i) {
                var o,
                    a,
                    l,
                    s,
                    u,
                    c,
                    d,
                    f,
                    p,
                    h,
                    m,
                    y = oe.hasData(e) && oe._data(e);
                if (y && (c = y.events)) {
                    for (t = (t || "").match(we) || [""], u = t.length; u--;) 
                        if (
                            l = Oe.exec(t[u]) || [],
                            p = m = l[1],
                            h = (l[2] || "").split(".").sort(),
                            p
                        ) {
                            for (d = oe.event.special[p] || {}, p = (
                                r
                                    ? d.delegateType
                                    : d.bindType
                            ) || p, f = c[p] || [], l = l[2] && new RegExp(
                                "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                            ), s = o = f.length; o--;) 
                                a = f[o],
                                !i && m !== a.origType || n && n.guid !== a.guid || l && !l.test(a.namespace) || r && r !== a.selector && (
                                    "**" !== r || !a.selector
                                ) || (
                                    f.splice(o, 1),
                                    a.selector && f.delegateCount--,
                                    d.remove && d.remove.call(e, a)
                                );
                            s && !f.length && (
                                d.teardown && d.teardown.call(e, h, y.handle) !== !1 || oe.removeEvent(e, p, y.handle),
                                delete c[p]
                            )
                        }
                    else 
                        for (p in c) 
                            oe
                                .event
                                .remove(e, p + t[u], n, r, !0);
                    oe.isEmptyObject(c) && (delete y.handle, oe._removeData(e, "events"))
                }
            },
            trigger: function (t, n, r, i) {
                var o,
                    a,
                    l,
                    s,
                    u,
                    c,
                    d,
                    f = [r || me],
                    p = te.call(t, "type")
                        ? t.type
                        : t,
                    h = te.call(t, "namespace")
                        ? t
                            .namespace
                            .split(".")
                        : [];
                if (l = c = r = r || me, 3 !== r.nodeType && 8 !== r.nodeType && !De.test(
                    p + oe.event.triggered
                ) && (
                    p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()),
                    a = p.indexOf(":") < 0 && "on" + p,
                    t = t[oe.expando]
                        ? t
                        : new oe.Event(p, "object" == typeof t && t),
                    t.isTrigger = i
                        ? 2
                        : 3,
                    t.namespace = h.join("."),
                    t.namespace_re = t.namespace
                        ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                        : null,
                    t.result = void 0,
                    t.target || (t.target = r),
                    n = null == n
                        ? [t]
                        : oe.makeArray(n, [t]),
                    u = oe.event.special[p] || {},
                    i || !u.trigger || u.trigger.apply(r, n) !== !1
                )) {
                    if (!i && !u.noBubble && !oe.isWindow(r)) {
                        for (
                            s = u.delegateType || p,
                            De.test(s + p) || (l = l.parentNode);
                            l;
                            l = l.parentNode
                        ) 
                            f.push(l),
                            c = l;
                        c === (r.ownerDocument || me) && f.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0; (l = f[d++]) && !t.isPropagationStopped();) 
                        t.type = d > 1
                            ? s
                            : u.bindType || p,
                        o = (oe._data(l, "events") || {})[t.type] && oe._data(l, "handle"),
                        o && o.apply(l, n),
                        o = a && l[a],
                        o && o.apply && oe.acceptData(l) && (
                            t.result = o.apply(l, n),
                            t.result === !1 && t.preventDefault()
                        );
                    if (
                        t.type = p,
                        !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && oe.acceptData(r) && a && r[p] && !oe.isWindow(r)
                    ) {
                        c = r[a],
                        c && (r[a] = null),
                        oe.event.triggered = p;
                        try {
                            r[p]()
                        } catch (m) {}
                        oe.event.triggered = void 0,
                        c && (r[a] = c)
                    }
                    return t.result
                }
            },
            dispatch: function (e) {
                e = oe
                    .event
                    .fix(e);
                var t,
                    n,
                    r,
                    i,
                    o,
                    a = [],
                    l = X.call(arguments),
                    s = (oe._data(this, "events") || {})[e.type] || [],
                    u = oe
                        .event
                        .special[e.type] || {};
                if (
                    l[0] = e,
                    e.delegateTarget = this,
                    !u.preDispatch || u.preDispatch.call(this, e) !== !1
                ) {
                    for (
                        a = oe.event.handlers.call(this, e, s),
                        t = 0;
                        (i = a[t++]) && !e.isPropagationStopped();
                    ) 
                        for (
                            e.currentTarget = i.elem,
                            o = 0;
                            (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();
                        ) 
                            e.namespace_re && !e
                                .namespace_re
                                .test(r.namespace) || (
                                    e.handleObj = r,
                                    e.data = r.data,
                                    n = ((oe.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, l),
                                    void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation())
                                );
                    return u.postDispatch && u
                        .postDispatch
                        .call(this, e),
                    e.result
                }
            },
            handlers: function (e, t) {
                var n,
                    r,
                    i,
                    o,
                    a = [],
                    l = t.delegateCount,
                    s = e.target;
                if (l && s.nodeType && (!e.button || "click" !== e.type)) 
                    for (; s != this; s = s.parentNode || this) 
                        if (1 === s.nodeType && (s.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], o = 0; o < l; o++) 
                                r = t[o],
                                n = r.selector + " ",
                                void 0 === i[n] && (
                                    i[n] = r.needsContext
                                        ? oe(n, this).index(s) >= 0
                                        : oe.find(n, this, null, [s]).length
                                ),
                                i[n] && i.push(r);
                            i.length && a.push({elem: s, handlers: i})
                        }
                    return l < t.length && a.push({elem: this, handlers: t.slice(l)}),
                a
            },
            fix: function (e) {
                if (e[oe.expando]) 
                    return e;
                var t,
                    n,
                    r,
                    i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (
                    a || (
                        this.fixHooks[i] = a = Ie.test(i)
                            ? this.mouseHooks
                            : $e.test(i)
                                ? this.keyHooks
                                : {}
                    ),
                    r = a.props
                        ? this.props.concat(a.props)
                        : this.props,
                    e = new oe.Event(o),
                    t = r.length; t--;
                ) 
                    n = r[t],
                    e[n] = o[n];
                return e.target || (e.target = o.srcElement || me),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                a.filter
                    ? a.filter(e, o)
                    : e
            },
            props: (
                "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarg" +
                "et shiftKey target timeStamp view which"
            ).split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (
                        e.which = null != t.charCode
                            ? t.charCode
                            : t.keyCode
                    ),
                    e
                }
            },
            mouseHooks: {
                props: (
                    "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX" +
                    " screenY toElement"
                ).split(" "),
                filter: function (e, t) {
                    var n,
                        r,
                        i,
                        o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (
                        r = e.target.ownerDocument || me,
                        i = r.documentElement,
                        n = r.body,
                        e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                        e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)
                    ),
                    !e.relatedTarget && a && (
                        e.relatedTarget = a === e.target
                            ? t.toElement
                            : a
                    ),
                    e.which || void 0 === o || (
                        e.which = 1 & o
                            ? 1
                            : 2 & o
                                ? 3
                                : 4 & o
                                    ? 2
                                    : 0
                    ),
                    e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== h() && this.focus) 
                            try {
                                return this.focus(),
                                !1
                            } catch (e) {}
                        },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === h() && this.blur) 
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if (oe.nodeName(this, "input") && "checkbox" === this.type && this.click) 
                            return this.click(),
                            !1
                    },
                    _default: function (e) {
                        return oe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var i = oe.extend(new oe.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r
                    ? oe
                        .event
                        .trigger(i, null, t)
                    : oe
                        .event
                        .dispatch
                        .call(t, i),
                i.isDefaultPrevented() && n.preventDefault()
            }
        },
        oe.removeEvent = me.removeEventListener
            ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }
            : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] === ke && (e[r] = null), e.detachEvent(r, n))
            },
        oe.Event = function (e, t) {
            return this instanceof oe.Event
                ? (
                    e && e.type
                        ? (
                            this.originalEvent = e,
                            this.type = e.type,
                            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault())
                                ? f
                                : p
                        )
                        : this.type = e,
                    t && oe.extend(this, t),
                    this.timeStamp = e && e.timeStamp || oe.now(),
                    void(this[oe.expando] = !0)
                )
                : new oe.Event(e, t)
        },
        oe.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = f,
                e && (
                    e.preventDefault
                        ? e.preventDefault()
                        : e.returnValue = !1
                )
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = f,
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = f,
                this.stopPropagation()
            }
        },
        oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (e, t) {
            oe
                .event
                .special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return i && (i === r || oe.contains(r, i)) || (
                            e.type = o.origType,
                            n = o.handler.apply(this, arguments),
                            e.type = t
                        ),
                        n
                    }
                }
        }),
        re.submitBubbles || (oe.event.special.submit = {
            setup: function () {
                return !oe.nodeName(this, "form") && void oe
                    .event
                    .add(this, "click._submit keypress._submit", function (e) {
                        var t = e.target,
                            n = oe.nodeName(t, "input") || oe.nodeName(t, "button")
                                ? t.form
                                : void 0;
                        n && !oe._data(n, "submitBubbles") && (
                            oe.event.add(n, "submit._submit", function (e) {
                                e._submit_bubble = !0
                            }),
                            oe._data(n, "submitBubbles", !0)
                        )
                    })
            },
            postDispatch: function (e) {
                e._submit_bubble && (
                    delete e._submit_bubble,
                    this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0)
                )
            },
            teardown: function () {
                return !oe.nodeName(this, "form") && void oe
                    .event
                    .remove(this, "._submit")
            }
        }),
        re.changeBubbles || (oe.event.special.change = {
            setup: function () {
                return Qe.test(this.nodeName)
                    ? ("checkbox" !== this.type && "radio" !== this.type || (
                        oe.event.add(this, "propertychange._change", function (e) {
                            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                        }),
                        oe.event.add(this, "click._change", function (e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1),
                            oe
                                .event
                                .simulate("change", this, e, !0)
                        })
                    ), !1)
                    : void oe
                        .event
                        .add(this, "beforeactivate._change", function (e) {
                            var t = e.target;
                            Qe.test(t.nodeName) && !oe._data(t, "changeBubbles") && (
                                oe.event.add(t, "change._change", function (e) {
                                    !this.parentNode || e.isSimulated || e.isTrigger || oe
                                        .event
                                        .simulate("change", this.parentNode, e, !0)
                                }),
                                oe._data(t, "changeBubbles", !0)
                            )
                        })
            },
            handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) 
                    return e
                        .handleObj
                        .handler
                        .apply(this, arguments)
                },
            teardown: function () {
                return oe
                    .event
                    .remove(this, "._change"),
                !Qe.test(this.nodeName)
            }
        }),
        re.focusinBubbles || oe.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                oe
                    .event
                    .simulate(t, e.target, oe.event.fix(e), !0)
            };
            oe
                .event
                .special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = oe._data(r, t);
                        i || r.addEventListener(e, n, !0),
                        oe._data(r, t, (i || 0) + 1)
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = oe._data(r, t) - 1;
                        i
                            ? oe._data(r, t, i)
                            : (r.removeEventListener(e, n, !0), oe._removeData(r, t))
                    }
                }
        }),
        oe
            .fn
            .extend({
                on: function (e, t, n, r, i) {
                    var o,
                        a;
                    if ("object" == typeof e) {
                        "string" != typeof t && (n = n || t, t = void 0);
                        for (o in e) 
                            this.on(o, t, n, e[o], i);
                        return this
                    }
                    if (
                        null == n && null == r
                            ? (r = t, n = t = void 0)
                            : null == r && (
                                "string" == typeof t
                                    ? (r = n, n = void 0)
                                    : (r = n, n = t, t = void 0)
                            ),
                        r === !1
                    ) 
                        r = p;
                    else if (!r) 
                        return this;
                    return 1 === i && (a = r, r = function (e) {
                        return oe().off(e),
                        a.apply(this, arguments)
                    }, r.guid = a.guid || (a.guid = oe.guid++)),
                    this.each(function () {
                        oe
                            .event
                            .add(this, e, r, n, t)
                    })
                },
                one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function (e, t, n) {
                    var r,
                        i;
                    if (e && e.preventDefault && e.handleObj) 
                        return r = e.handleObj,
                        oe(e.delegateTarget).off(
                            r.namespace
                                ? r.origType + "." + r.namespace
                                : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this;
                    if ("object" == typeof e) {
                        for (i in e) 
                            this.off(i, t, e[i]);
                        return this
                    }
                    return t !== !1 && "function" != typeof t || (n = t, t = void 0),
                    n === !1 && (n = p),
                    this.each(function () {
                        oe
                            .event
                            .remove(this, e, n, t)
                    })
                },
                trigger: function (e, t) {
                    return this.each(function () {
                        oe
                            .event
                            .trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) 
                        return oe
                            .event
                            .trigger(e, t, n, !0)
                    }
            });
        var Ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|fo" +
                    "oter|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Me = / jQuery\d+="(?:null|\d+)"/g,
            Le = new RegExp("<(?:" + Ne + ")[\\s/>]", "i"),
            ze = /^\s+/,
            Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Re = /<([\w:]+)/,
            Fe = /<tbody/i,
            qe = /<|&#?\w+;/,
            He = /<(?:script|style|link)/i,
            Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
            We = /^$|\/(?:java|ecma)script/i,
            Ve = /^true\/(.*)/,
            Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Je = {
                option: [
                    1, "<select multiple='multiple'>", "</select>"
                ],
                legend: [
                    1, "<fieldset>", "</fieldset>"
                ],
                area: [
                    1, "<map>", "</map>"
                ],
                param: [
                    1, "<object>", "</object>"
                ],
                thead: [
                    1, "<table>", "</table>"
                ],
                tr: [
                    2, "<table><tbody>", "</tbody></table>"
                ],
                col: [
                    2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"
                ],
                td: [
                    3, "<table><tbody><tr>", "</tr></tbody></table>"
                ],
                _default: re.htmlSerialize
                    ? [0, "", ""]
                    : [1, "X<div>", "</div>"]
            },
            Ke = m(me),
            Ge = Ke.appendChild(me.createElement("div"));
        Je.optgroup = Je.option,
        Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead,
        Je.th = Je.td,
        oe.extend({
            clone: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    l,
                    s = oe.contains(e.ownerDocument, e);
                if (
                    re.html5Clone || oe.isXMLDoc(e) || !Le.test("<" + e.nodeName + ">")
                        ? o = e.cloneNode(!0)
                        : (Ge.innerHTML = e.outerHTML, Ge.removeChild(o = Ge.firstChild)),
                    !(
                        re.noCloneEvent && re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)
                    )
                ) 
                    for (r = y(o), l = y(e), a = 0; null != (i = l[a]); ++a) 
                        r[a] && P(i, r[a]);
            if (t) 
                    if (n) 
                        for (l = l || y(e), r = r || y(o), a = 0; null != (i = l[a]); a++) 
                            T(i, r[a]);
            else 
                    T(e, o);
                return r = y(o, "script"),
                r.length > 0 && x(r, !s && y(e, "script")),
                r = l = i = null,
                o
            },
            buildFragment: function (e, t, n, r) {
                for (
                    var i,
                    o,
                    a,
                    l,
                    s,
                    u,
                    c,
                    d = e.length,
                    f = m(t),
                    p = [],
                    h = 0;
                    h < d;
                    h++
                ) 
                    if (o = e[h], o || 0 === o) 
                        if ("object" === oe.type(o)) 
                            oe.merge(
                                p,
                                o.nodeType
                                    ? [o]
                                    : o
                            );
                        else if (qe.test(o)) {
                            for (
                                l = l || f.appendChild(t.createElement("div")),
                                s = (Re.exec(o) || ["", ""])[1].toLowerCase(),
                                c = Je[s] || Je._default,
                                l.innerHTML = c[1] + o.replace(
                                    Be,
                                    "<$1></$2>"
                                ) + c[2],
                                i = c[0];
                                i--;
                            ) 
                                l = l.lastChild;
                            if (
                                !re.leadingWhitespace && ze.test(o) && p.push(t.createTextNode(ze.exec(o)[0])),
                                !re.tbody
                            ) 
                                for (
                                    o = "table" !== s || Fe.test(o)
                                        ? "<table>" !== c[1] || Fe.test(o)
                                            ? 0
                                            : l
                                        : l.firstChild,
                                    i = o && o.childNodes.length; i--;
                                ) 
                                    oe.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(
                                        u
                                    );
                        for (oe.merge(p, l.childNodes), l.textContent = ""; l.firstChild;) 
                                l.removeChild(l.firstChild);
                            l = f.lastChild
                        }
                    else 
                    p.push(t.createTextNode(o));
                for (
                    l && f.removeChild(l),
                    re.appendChecked || oe.grep(y(p, "input"), v),
                    h = 0;
                    o = p[h++];
                ) 
                    if ((!r || oe.inArray(o, r) === -1) && (
                        a = oe.contains(o.ownerDocument, o),
                        l = y(f.appendChild(o), "script"),
                        a && x(l),
                        n
                    )) 
                        for (i = 0; o = l[i++];) 
                            We.test(o.type || "") && n.push(o);
            return l = null,
                f
            },
            cleanData: function (e, t) {
                for (
                    var n,
                    r,
                    i,
                    o,
                    a = 0,
                    l = oe.expando,
                    s = oe.cache,
                    u = re.deleteExpando,
                    c = oe.event.special;
                    null != (n = e[a]);
                    a++
                ) 
                    if ((t || oe.acceptData(n)) && (i = n[l], o = i && s[i])) {
                        if (o.events) 
                            for (r in o.events) 
                                c[r]
                                    ? oe
                                        .event
                                        .remove(n, r)
                                    : oe.removeEvent(n, r, o.handle);
                        s[i] && (
                            delete s[i],
                            u
                                ? delete n[l]
                                : typeof n.removeAttribute !== ke
                                    ? n.removeAttribute(l)
                                    : n[l] = null,
                            V.push(i)
                        )
                    }
                }
        }),
        oe
            .fn
            .extend({
                text: function (e) {
                    return Ee(this, function (e) {
                        return void 0 === e
                            ? oe.text(this)
                            : this
                                .empty()
                                .append((this[0] && this[0].ownerDocument || me).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = g(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = g(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this
                            .parentNode
                            .insertBefore(e, this)
                    })
                },
                after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this
                            .parentNode
                            .insertBefore(e, this.nextSibling)
                    })
                },
                remove: function (e, t) {
                    for (
                        var n,
                        r = e
                            ? oe.filter(e, this)
                            : this,
                        i = 0; null != (n = r[i]); i++
                    ) 
                        t || 1 !== n.nodeType || oe.cleanData(y(n)),
                        n.parentNode && (
                            t && oe.contains(n.ownerDocument, n) && x(y(n, "script")),
                            n.parentNode.removeChild(n)
                        );
                    return this
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && oe.cleanData(y(e, !1)); e.firstChild;) 
                            e.removeChild(e.firstChild);
                        e.options && oe.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e,
                    t = null == t
                        ? e
                        : t,
                    this.map(function () {
                        return oe.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return Ee(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e) 
                            return 1 === t.nodeType
                                ? t
                                    .innerHTML
                                    .replace(Me, "")
                                : void 0;
                        if ("string" == typeof e && !He.test(e) && (re.htmlSerialize || !Le.test(e)) && (re.leadingWhitespace || !ze.test(e)) && !Je[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(Be, "<$1></$2>");
                            try {
                                for (; n < r; n++) 
                                    t = this[n] || {}
                                ,
                                1 === t.nodeType && (oe.cleanData(y(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (i) {}
                        }
                        t && this
                            .empty()
                            .append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = arguments[0];
                    return this.domManip(arguments, function (t) {
                        e = this.parentNode,
                        oe.cleanData(y(this)),
                        e && e.replaceChild(t, this)
                    }),
                    e && (e.length || e.nodeType)
                        ? this
                        : this.remove()
                },
                detach: function (e) {
                    return this.remove(e, !0)
                },
                domManip: function (e, t) {
                    e = J.apply([], e);
                    var n,
                        r,
                        i,
                        o,
                        a,
                        l,
                        s = 0,
                        u = this.length,
                        c = this,
                        d = u - 1,
                        f = e[0],
                        p = oe.isFunction(f);
                    if (p || u > 1 && "string" == typeof f && !re.checkClone && Ue.test(f)) 
                        return this.each(function (n) {
                            var r = c.eq(n);
                            p && (e[0] = f.call(this, n, r.html())),
                            r.domManip(e, t)
                        });
                    if (u && (
                        l = oe.buildFragment(e, this[0].ownerDocument, !1, this),
                        n = l.firstChild,
                        1 === l.childNodes.length && (l = n),
                        n
                    )) {
                        for (o = oe.map(y(l, "script"), b), i = o.length; s < u; s++) 
                            r = l,
                            s !== d && (r = oe.clone(r, !0, !0), i && oe.merge(o, y(r, "script"))),
                            t.call(this[s], r, s);
                        if (i) 
                            for (a = o[o.length - 1].ownerDocument, oe.map(o, w), s = 0; s < i; s++) 
                                r = o[s],
                                We.test(r.type || "") && !oe._data(r, "globalEval") && oe.contains(a, r) && (
                                    r.src
                                        ? oe._evalUrl && oe._evalUrl(r.src)
                                        : oe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Xe, ""))
                                );
                    l = n = null
                    }
                    return this
                }
            }),
        oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            oe.fn[e] = function (e) {
                for (var n, r = 0, i = [], o = oe(e), a = o.length - 1; r <= a; r++) 
                    n = r === a
                        ? this
                        : this.clone(!0),
                    oe(o[r])[t](n),
                    K.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ze,
            et = {};
        !function () {
            var e,
                t,
                n = me.createElement("div"),
                r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-" +
                        "box;display:block;padding:0;margin:0;border:0";
            n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            e = n.getElementsByTagName("a")[0],
            e.style.cssText = "float:left;opacity:.5",
            re.opacity = /^0.5/.test(e.style.opacity),
            re.cssFloat = !!e.style.cssFloat,
            n.style.backgroundClip = "content-box",
            n
                .cloneNode(!0)
                .style
                .backgroundClip = "",
            re.clearCloneStyle = "content-box" === n.style.backgroundClip,
            e = n = null,
            re.shrinkWrapBlocks = function () {
                var e,
                    n,
                    i,
                    o;
                if (null == t) {
                    if (e = me.getElementsByTagName("body")[0], !e) 
                        return;
                    o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                    n = me.createElement("div"),
                    i = me.createElement("div"),
                    e
                        .appendChild(n)
                        .appendChild(i),
                    t = !1,
                    typeof i.style.zoom !== ke && (
                        i.style.cssText = r + ";width:1px;padding:1px;zoom:1",
                        i.innerHTML = "<div></div>",
                        i.firstChild.style.width = "5px",
                        t = 3 !== i.offsetWidth
                    ),
                    e.removeChild(n),
                    e = n = i = null
                }
                return t
            }
        }();
        var tt,
            nt,
            rt = /^margin/,
            it = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
            ot = /^(top|right|bottom|left)$/;
        e.getComputedStyle
            ? (tt = function (e) {
                return e
                    .ownerDocument
                    .defaultView
                    .getComputedStyle(e, null)
            }, nt = function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    l = e.style;
                return n = n || tt(e),
                a = n
                    ? n.getPropertyValue(t) || n[t]
                    : void 0,
                n && (
                    "" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)),
                    it.test(a) && rt.test(t) && (
                        r = l.width,
                        i = l.minWidth,
                        o = l.maxWidth,
                        l.minWidth = l.maxWidth = l.width = a,
                        a = n.width,
                        l.width = r,
                        l.minWidth = i,
                        l.maxWidth = o
                    )
                ),
                void 0 === a
                    ? a
                    : a + ""
            })
            : me.documentElement.currentStyle && (tt = function (e) {
                return e.currentStyle
            }, nt = function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    l = e.style;
                return n = n || tt(e),
                a = n
                    ? n[t]
                    : void 0,
                null == a && l && l[t] && (a = l[t]),
                it.test(a) && !ot.test(t) && (
                    r = l.left,
                    i = e.runtimeStyle,
                    o = i && i.left,
                    o && (i.left = e.currentStyle.left),
                    l.left = "fontSize" === t
                        ? "1em"
                        : a,
                    a = l.pixelLeft + "px",
                    l.left = r,
                    o && (i.left = o)
                ),
                void 0 === a
                    ? a
                    : a + "" || "auto"
            }),
        function () {
            function t() {
                var t,
                    n,
                    r = me.getElementsByTagName("body")[0];
                r && (
                    t = me.createElement("div"),
                    n = me.createElement("div"),
                    t.style.cssText = u,
                    r.appendChild(t).appendChild(n),
                    n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box" +
                            ";position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1" +
                            "%;top:1%",
                    oe.swap(
                        r,
                        null != r.style.zoom
                            ? {
                                zoom: 1
                            }
                            : {},
                        function () {
                            i = 4 === n.offsetWidth
                        }
                    ),
                    o = !0,
                    a = !1,
                    l = !0,
                    e.getComputedStyle && (
                        a = "1%" !== (e.getComputedStyle(n, null) || {}).top,
                        o = "4px" === (e.getComputedStyle(n, null) || {
                            width: "4px"
                        }).width
                    ),
                    r.removeChild(t),
                    n = r = null
                )
            }
            var n,
                r,
                i,
                o,
                a,
                l,
                s = me.createElement("div"),
                u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-" +
                        "box;display:block;padding:0;margin:0;border:0";
            s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            n = s.getElementsByTagName("a")[0],
            n.style.cssText = "float:left;opacity:.5",
            re.opacity = /^0.5/.test(n.style.opacity),
            re.cssFloat = !!n.style.cssFloat,
            s.style.backgroundClip = "content-box",
            s
                .cloneNode(!0)
                .style
                .backgroundClip = "",
            re.clearCloneStyle = "content-box" === s.style.backgroundClip,
            n = s = null,
            oe.extend(re, {
                reliableHiddenOffsets: function () {
                    if (null != r) 
                        return r;
                    var e,
                        t,
                        n,
                        i = me.createElement("div"),
                        o = me.getElementsByTagName("body")[0];
                    if (o) 
                        return i.setAttribute("className", "t"),
                        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                        e = me.createElement("div"),
                        e.style.cssText = u,
                        o
                            .appendChild(e)
                            .appendChild(i),
                        i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        t = i.getElementsByTagName("td"),
                        t[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                        n = 0 === t[0].offsetHeight,
                        t[0].style.display = "",
                        t[1].style.display = "none",
                        r = n && 0 === t[0].offsetHeight,
                        o.removeChild(e),
                        i = o = null,
                        r
                },
                boxSizing: function () {
                    return null == i && t(),
                    i
                },
                boxSizingReliable: function () {
                    return null == o && t(),
                    o
                },
                pixelPosition: function () {
                    return null == a && t(),
                    a
                },
                reliableMarginRight: function () {
                    var t,
                        n,
                        r,
                        i;
                    if (null == l && e.getComputedStyle) {
                        if (t = me.getElementsByTagName("body")[0], !t) 
                            return;
                        n = me.createElement("div"),
                        r = me.createElement("div"),
                        n.style.cssText = u,
                        t
                            .appendChild(n)
                            .appendChild(r),
                        i = r.appendChild(me.createElement("div")),
                        i.style.cssText = r.style.cssText = c,
                        i.style.marginRight = i.style.width = "0",
                        r.style.width = "1px",
                        l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight),
                        t.removeChild(n)
                    }
                    return l
                }
            })
        }(),
        oe.swap = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) 
                a[o] = e.style[o],
                e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) 
                e.style[o] = a[o];
            return i
        };
        var at = /alpha\([^)]*\)/i,
            lt = /opacity\s*=\s*([^)]*)/,
            st = /^(none|table(?!-c[ea]).+)/,
            ut = new RegExp("^(" + Se + ")(.*)$", "i"),
            ct = new RegExp("^([+-])=(" + Se + ")", "i"),
            dt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ft = {
                letterSpacing: 0,
                fontWeight: 400
            },
            pt = ["Webkit", "O", "Moz", "ms"];
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = nt(e, "opacity");
                            return "" === n
                                ? "1"
                                : n
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
                "float": re.cssFloat
                    ? "cssFloat"
                    : "styleFloat"
            },
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i,
                        o,
                        a,
                        l = oe.camelCase(t),
                        s = e.style;
                    if (
                        t = oe.cssProps[l] || (oe.cssProps[l] = S(s, l)),
                        a = oe.cssHooks[t] || oe.cssHooks[l],
                        void 0 === n
                    ) 
                        return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                            ? i
                            : s[t];
                    if (
                        o = typeof n,
                        "string" === o && (i = ct.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(oe.css(e, t)), o = "number"),
                        null != n && n === n && (
                            "number" !== o || oe.cssNumber[l] || (n += "px"),
                            re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"),
                            !(a && "set" in a && void 0 === (n = a.set(e, n, r)))
                        )
                    ) 
                        try {
                            s[t] = "",
                            s[t] = n
                        } catch (u) {}
                    }
            },
            css: function (e, t, n, r) {
                var i,
                    o,
                    a,
                    l = oe.camelCase(t);
                return t = oe.cssProps[l] || (oe.cssProps[l] = S(e.style, l)),
                a = oe.cssHooks[t] || oe.cssHooks[l],
                a && "get" in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = nt(e, t, r)),
                "normal" === o && t in ft && (o = ft[t]),
                "" === n || n
                    ? (
                        i = parseFloat(o),
                        n === !0 || oe.isNumeric(i)
                            ? i || 0
                            : o
                    )
                    : o
            }
        }),
        oe.each([
            "height", "width"
        ], function (e, t) {
            oe.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) 
                        return 0 === e.offsetWidth && st.test(oe.css(e, "display"))
                            ? oe.swap(e, dt, function () {
                                return A(e, t, r)
                            })
                            : A(e, t, r)
                    },
                set: function (e, n, r) {
                    var i = r && tt(e);
                    return Y(
                        e,
                        n,
                        r
                            ? E(
                                e,
                                t,
                                r,
                                re.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, i),
                                i
                            )
                            : 0
                    )
                }
            }
        }),
        re.opacity || (oe.cssHooks.opacity = {
            get: function (e, t) {
                return lt.test((
                    t && e.currentStyle
                        ? e.currentStyle.filter
                        : e.style.filter
                ) || "")
                    ? .01 * parseFloat(RegExp.$1) + ""
                    : t
                        ? "1"
                        : ""
            },
            set: function (e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = oe.isNumeric(t)
                        ? "alpha(opacity=" + 100 * t + ")"
                        : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1,
                (t >= 1 || "" === t) && "" === oe.trim(o.replace(at, "")) && n.removeAttribute && (
                    n.removeAttribute("filter"),
                    "" === t || r && !r.filter
                ) || (
                    n.filter = at.test(o)
                        ? o.replace(at, i)
                        : o + " " + i
                )
            }
        }),
        oe.cssHooks.marginRight = j(re.reliableMarginRight, function (e, t) {
            if (t) 
                return oe.swap(e, {
                    display: "inline-block"
                }, nt, [e, "marginRight"])
        }),
        oe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            oe.cssHooks[e + t] = {
                expand: function (n) {
                    for (
                        var r = 0,
                        i = {},
                        o = "string" == typeof n
                            ? n.split(" ")
                            : [n]; r < 4; r++
                    ) 
                        i[e + _e[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            rt.test(e) || (oe.cssHooks[e + t].set = Y)
        }),
        oe
            .fn
            .extend({
                css: function (e, t) {
                    return Ee(this, function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (oe.isArray(t)) {
                            for (r = tt(e), i = t.length; a < i; a++) 
                                o[t[a]] = oe.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n
                            ? oe.style(e, t, n)
                            : oe.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function () {
                    return _(this, !0)
                },
                hide: function () {
                    return _(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                            Ye(this)
                                ? oe(this).show()
                                : oe(this).hide()
                        })
                }
            }),
        oe.Tween = Q,
        Q.prototype = {
            constructor: Q,
            init: function (e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || "swing",
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (
                    oe.cssNumber[n]
                        ? ""
                        : "px"
                )
            },
            cur: function () {
                var e = Q.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : Q
                        .propHooks
                        ._default
                        .get(this)
            },
            run: function (e) {
                var t,
                    n = Q.propHooks[this.prop];
                return this.options.duration
                    ? this.pos = t = oe.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                    )
                    : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this
                    .options
                    .step
                    .call(this.elem, this.now, this),
                n && n.set
                    ? n.set(this)
                    : Q
                        .propHooks
                        ._default
                        .set(this),
                this
            }
        },
        Q.prototype.init.prototype = Q.prototype,
        Q.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e
                        .elem
                        .style[e.prop]
                            ? (
                                t = oe.css(e.elem, e.prop, ""),
                                t && "auto" !== t
                                    ? t
                                    : 0
                            )
                            : e.elem[e.prop]
                },
                set: function (e) {
                    oe
                        .fx
                        .step[e.prop]
                            ? oe
                                .fx
                                .step[e.prop](e)
                            : e.elem.style && (
                                null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]
                            )
                                ? oe.style(e.elem, e.prop, e.now + e.unit)
                                : e.elem[e.prop] = e.now
                }
            }
        },
        Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        oe.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return.5 - Math.cos(e * Math.PI) / 2
            }
        },
        oe.fx = Q.prototype.init,
        oe.fx.step = {};
        var ht,
            mt,
            yt = /^(?:toggle|show|hide)$/,
            vt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
            gt = /queueHooks$/,
            bt = [O],
            wt = {
                "*": [
                    function (e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = vt.exec(t),
                            o = i && i[3] || (
                                oe.cssNumber[e]
                                    ? ""
                                    : "px"
                            ),
                            a = (oe.cssNumber[e] || "px" !== o &&+ r) && vt.exec(oe.css(n.elem, e)),
                            l = 1,
                            s = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3],
                            i = i || [],
                            a = +r || 1;
                            do 
                                l = l || ".5",
                                a /= l,
                                oe.style(n.elem, e, a + o);
                            while (l !== (l = n.cur() / r) && 1 !== l && --s)
                        }
                        return i && (
                            a = n.start = +a ||+ r || 0,
                            n.unit = o,
                            n.end = i[1]
                                ? a + (i[1] + 1) * i[2]
                                : +i[2]
                        ),
                        n
                    }
                ]
            };
        oe.Animation = oe.extend(M, {
            tweener: function (e, t) {
                oe.isFunction(e)
                    ? (t = e, e = ["*"])
                    : e = e.split(" ");
                for (var n, r = 0, i = e.length; r < i; r++) 
                    n = e[r],
                    wt[n] = wt[n] || [],
                    wt[n].unshift(t)
            },
            prefilter: function (e, t) {
                t
                    ? bt.unshift(e)
                    : bt.push(e)
            }
        }),
        oe.speed = function (e, t, n) {
            var r = e && "object" == typeof e
                ? oe.extend({}, e)
                : {
                    complete: n || !n && t || oe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !oe.isFunction(t) && t
                };
            return r.duration = oe.fx.off
                ? 0
                : "number" == typeof r.duration
                    ? r.duration
                    : r.duration in oe.fx.speeds
                        ? oe
                            .fx
                            .speeds[r.duration]
                        : oe.fx.speeds._default,
            null != r.queue && r.queue !== !0 || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function () {
                oe.isFunction(r.old) && r
                    .old
                    .call(this),
                r.queue && oe.dequeue(this, r.queue)
            },
            r
        },
        oe
            .fn
            .extend({
                fadeTo: function (e, t, n, r) {
                    return this
                        .filter(Ye)
                        .css("opacity", 0)
                        .show()
                        .end()
                        .animate({
                            opacity: t
                        }, e, n, r)
                },
                animate: function (e, t, n, r) {
                    var i = oe.isEmptyObject(e),
                        o = oe.speed(t, n, r),
                        a = function () {
                            var t = M(this, oe.extend({}, e), o);
                            (i || oe._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a,
                    i || o.queue === !1
                        ? this.each(a)
                        : this.queue(o.queue, a)
                },
                stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0),
                    t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = oe.timers,
                            a = oe._data(this);
                        if (i) 
                            a[i] && a[i].stop && r(a[i]);
                        else 
                            for (i in a) 
                                a[i] && a[i].stop && gt.test(i) && r(a[i]);
                    for (i = o.length; i--;) 
                            o[i].elem !== this || null != e && o[i].queue !== e || (
                                o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1)
                            );
                        
                        !t && n || oe.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return e !== !1 && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = oe._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = oe.timers,
                            a = r
                                ? r.length
                                : 0;
                        for (
                            n.finish = !0,
                            oe.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length;
                            t--;
                        ) 
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) 
                            r[t] && r[t].finish && r[t]
                                .finish
                                .call(this);
                        delete n.finish
                    })
                }
            }),
        oe.each([
            "toggle", "show", "hide"
        ], function (e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(I(t, !0), e, r, i)
            }
        }),
        oe.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            oe.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        oe.timers = [],
        oe.fx.tick = function () {
            var e,
                t = oe.timers,
                n = 0;
            for (ht = oe.now(); n < t.length; n++) 
                e = t[n],
                e() || t[n] !== e || t.splice(n--, 1);
            t.length || oe
                .fx
                .stop(),
            ht = void 0
        },
        oe.fx.timer = function (e) {
            oe
                .timers
                .push(e),
            e()
                ? oe
                    .fx
                    .start()
                : oe
                    .timers
                    .pop()
        },
        oe.fx.interval = 13,
        oe.fx.start = function () {
            mt || (mt = setInterval(oe.fx.tick, oe.fx.interval))
        },
        oe.fx.stop = function () {
            clearInterval(mt),
            mt = null
        },
        oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        oe.fn.delay = function (e, t) {
            return e = oe.fx
                ? oe
                    .fx
                    .speeds[e] || e
                : e,
            t = t || "fx",
            this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        function () {
            var e,
                t,
                n,
                r,
                i = me.createElement("div");
            i.setAttribute("className", "t"),
            i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            e = i.getElementsByTagName("a")[0],
            n = me.createElement("select"),
            r = n.appendChild(me.createElement("option")),
            t = i.getElementsByTagName("input")[0],
            e.style.cssText = "top:1px",
            re.getSetAttribute = "t" !== i.className,
            re.style = /top/.test(e.getAttribute("style")),
            re.hrefNormalized = "/a" === e.getAttribute("href"),
            re.checkOn = !!t.value,
            re.optSelected = r.selected,
            re.enctype = !!me
                .createElement("form")
                .enctype,
            n.disabled = !0,
            re.optDisabled = !r.disabled,
            t = me.createElement("input"),
            t.setAttribute("value", ""),
            re.input = "" === t.getAttribute("value"),
            t.value = "t",
            t.setAttribute("type", "radio"),
            re.radioValue = "t" === t.value,
            e = t = n = r = i = null
        }();
        var xt = /\r/g;
        oe
            .fn
            .extend({
                val: function (e) {
                    var t,
                        n,
                        r,
                        i = this[0];
                    {
                        if (arguments.length) 
                            return r = oe.isFunction(e),
                            this.each(function (n) {
                                var i;
                                1 === this.nodeType && (
                                    i = r
                                        ? e.call(this, n, oe(this).val())
                                        : e,
                                    null == i
                                        ? i = ""
                                        : "number" == typeof i
                                            ? i += ""
                                            : oe.isArray(i) && (i = oe.map(i, function (e) {
                                                return null == e
                                                    ? ""
                                                    : e + ""
                                            })),
                                    t = oe.valHooks[this.type] || oe.valHooks[
                                        this
                                            .nodeName
                                            .toLowerCase()
                                    ],
                                    t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)
                                )
                            });
                        if (i) 
                            return t = oe.valHooks[i.type] || oe.valHooks[
                                i
                                    .nodeName
                                    .toLowerCase()
                            ],
                            t && "get" in t && void 0 !== (n = t.get(i, "value"))
                                ? n
                                : (
                                    n = i.value,
                                    "string" == typeof n
                                        ? n.replace(xt, "")
                                        : null == n
                                            ? ""
                                            : n
                                )
                        }
                }
            }),
        oe.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = oe
                            .find
                            .attr(e, "value");
                        return null != t
                            ? t
                            : oe.text(e)
                    }
                },
                select: {
                    get: function (e) {
                        for (
                            var t,
                            n,
                            r = e.options,
                            i = e.selectedIndex,
                            o = "select-one" === e.type || i < 0,
                            a = o
                                ? null
                                : [],
                            l = o
                                ? i + 1
                                : r.length,
                            s = i < 0
                                ? l
                                : o
                                    ? i
                                    : 0; s < l; s++
                        ) 
                            if (n = r[s], (n.selected || s === i) && (
                                re.optDisabled
                                    ? !n.disabled
                                    : null === n.getAttribute("disabled")
                            ) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = oe(n).val(), o) 
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = oe.makeArray(t), a = i.length; a--;) 
                            if (r = i[a], oe.inArray(oe.valHooks.option.get(r), o) >= 0) 
                                try {
                                    r.selected = n = !0
                                } catch (l) {
                                    r.scrollHeight
                                }
                            else 
                            r.selected = !1;
                        return n || (e.selectedIndex = -1),
                        i
                    }
                }
            }
        }),
        oe.each([
            "radio", "checkbox"
        ], function () {
            oe.valHooks[this] = {
                set: function (e, t) {
                    if (oe.isArray(t)) 
                        return e.checked = oe.inArray(oe(e).val(), t) >= 0
                }
            },
            re.checkOn || (oe.valHooks[this].get = function (e) {
                return null === e.getAttribute("value")
                    ? "on"
                    : e.value
            })
        });
        var Tt,
            Pt,
            kt = oe.expr.attrHandle,
            Ct = /^(?:checked|selected)$/i,
            jt = re.getSetAttribute,
            St = re.input;
        oe
            .fn
            .extend({
                attr: function (e, t) {
                    return Ee(this, oe.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        oe.removeAttr(this, e)
                    })
                }
            }),
        oe.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) 
                    return typeof e.getAttribute === ke
                        ? oe.prop(e, t, n)
                        : (
                            1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (
                                oe.expr.match.bool.test(t)
                                    ? Pt
                                    : Tt
                            )),
                            void 0 === n
                                ? r && "get" in r && null !== (i = r.get(e, t))
                                    ? i
                                    : (
                                        i = oe.find.attr(e, t),
                                        null == i
                                            ? void 0
                                            : i
                                    )
                                : null !== n
                                    ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                        ? i
                                        : (e.setAttribute(t, n + ""), n)
                                    : void oe.removeAttr(e, t)
                        )
                },
            removeAttr: function (e, t) {
                var n,
                    r,
                    i = 0,
                    o = t && t.match(we);
                if (o && 1 === e.nodeType) 
                    for (; n = o[i++];) 
                        r = oe.propFix[n] || n,
                        oe
                            .expr
                            .match
                            .bool
                            .test(n)
                                ? St && jt || !Ct.test(n)
                                    ? e[r] = !1
                                    : e[oe.camelCase("default-" + n)] = e[r] = !1
                                : oe.attr(e, n, ""),
                        e.removeAttribute(
                            jt
                                ? n
                                : r
                        )
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            }
        }),
        Pt = {
            set: function (e, t, n) {
                return t === !1
                    ? oe.removeAttr(e, n)
                    : St && jt || !Ct.test(n)
                        ? e.setAttribute(!jt && oe.propFix[n] || n, n)
                        : e[oe.camelCase("default-" + n)] = e[n] = !0,
                n
            }
        },
        oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = kt[t] || oe.find.attr;
            kt[t] = St && jt || !Ct.test(t)
                ? function (e, t, r) {
                    var i,
                        o;
                    return r || (
                        o = kt[t],
                        kt[t] = i,
                        i = null != n(e, t, r)
                            ? t.toLowerCase()
                            : null,
                        kt[t] = o
                    ),
                    i
                }
                : function (e, t, n) {
                    if (!n) 
                        return e[oe.camelCase("default-" + t)]
                            ? t.toLowerCase()
                            : null
                    }
        }),
        St && jt || (oe.attrHooks.value = {
            set: function (e, t, n) {
                return oe.nodeName(e, "input")
                    ? void(e.defaultValue = t)
                    : Tt && Tt.set(e, t, n)
            }
        }),
        jt || (
            Tt = {
                set: function (e, t, n) {
                    var r = e.getAttributeNode(n);
                    if (
                        r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
                        r.value = t += "",
                        "value" === n || t === e.getAttribute(n)
                    ) 
                        return t
                }
            },
            kt.id = kt.name = kt.coords = function (e, t, n) {
                var r;
                if (!n) 
                    return (r = e.getAttributeNode(t)) && "" !== r.value
                        ? r.value
                        : null
                },
            oe.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    if (n && n.specified) 
                        return n.value
                },
                set: Tt.set
            },
            oe.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    Tt.set(e, "" !== t && t, n)
                }
            },
            oe.each([
                "width", "height"
            ], function (e, t) {
                oe.attrHooks[t] = {
                    set: function (e, n) {
                        if ("" === n) 
                            return e.setAttribute(t, "auto"),
                            n
                    }
                }
            })
        ),
        re.style || (oe.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var _t = /^(?:input|select|textarea|button|object)$/i,
            Yt = /^(?:a|area)$/i;
        oe
            .fn
            .extend({
                prop: function (e, t) {
                    return Ee(this, oe.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return e = oe.propFix[e] || e,
                    this.each(function () {
                        try {
                            this[e] = void 0,
                            delete this[e]
                        } catch (t) {}
                    })
                }
            }),
        oe.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (e, t, n) {
                var r,
                    i,
                    o,
                    a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) 
                    return o = 1 !== a || !oe.isXMLDoc(e),
                    o && (t = oe.propFix[t] || t, i = oe.propHooks[t]),
                    void 0 !== n
                        ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                            ? r
                            : e[t] = n
                        : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = oe
                            .find
                            .attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : _t.test(e.nodeName) || Yt.test(e.nodeName) && e.href
                                ? 0
                                : -1
                    }
                }
            }
        }),
        re.hrefNormalized || oe.each([
            "href", "src"
        ], function (e, t) {
            oe.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }),
        re.optSelected || (oe.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                null
            }
        }),
        oe.each([
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable"
        ], function () {
            oe.propFix[this.toLowerCase()] = this
        }),
        re.enctype || (oe.propFix.enctype = "encoding");
        var Et = /[\t\r\n\f]/g;
        oe
            .fn
            .extend({
                addClass: function (e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        l = 0,
                        s = this.length,
                        u = "string" == typeof e && e;
                    if (oe.isFunction(e)) 
                        return this.each(function (t) {
                            oe(this).addClass(e.call(this, t, this.className))
                        });
                    if (u) 
                        for (t = (e || "").match(we) || []; l < s; l++) 
                            if (n = this[l], r = 1 === n.nodeType && (
                                n.className
                                    ? (" " + n.className + " ").replace(Et, " ")
                                    : " "
                            )) {
                                for (o = 0; i = t[o++];) 
                                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                a = oe.trim(r),
                                n.className !== a && (n.className = a)
                            }
                        return this
                },
                removeClass: function (e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        l = 0,
                        s = this.length,
                        u = 0 === arguments.length || "string" == typeof e && e;
                    if (oe.isFunction(e)) 
                        return this.each(function (t) {
                            oe(this).removeClass(e.call(this, t, this.className))
                        });
                    if (u) 
                        for (t = (e || "").match(we) || []; l < s; l++) 
                            if (n = this[l], r = 1 === n.nodeType && (
                                n.className
                                    ? (" " + n.className + " ").replace(Et, " ")
                                    : ""
                            )) {
                                for (o = 0; i = t[o++];) 
                                    for (; r.indexOf(" " + i + " ") >= 0;) 
                                        r = r.replace(" " + i + " ", " ");
                            a = e
                                    ? oe.trim(r)
                                    : "",
                                n.className !== a && (n.className = a)
                            }
                        return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n
                        ? t
                            ? this.addClass(e)
                            : this.removeClass(e)
                        : oe.isFunction(e)
                            ? this.each(function (n) {
                                oe(this).toggleClass(e.call(this, n, this.className, t), t)
                            })
                            : this.each(function () {
                                if ("string" === n) 
                                    for (var t, r = 0, i = oe(this), o = e.match(we) || []; t = o[r++];) 
                                        i.hasClass(t)
                                            ? i.removeClass(t)
                                            : i.addClass(t);
                                else 
                                    n !== ke && "boolean" !== n || (
                                        this.className && oe._data(this, "__className__", this.className),
                                        this.className = this.className || e === !1
                                            ? ""
                                            : oe._data(this, "__className__") || ""
                                    )
                            })
                },
                hasClass: function (e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) 
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) 
                            return !0;
                return !1
                }
            }),
        oe.each(
            (
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown" +
                " mouseup mousemove mouseover mouseout mouseenter mouseleave change select subm" +
                "it keydown keypress keyup error contextmenu"
            ).split(" "),
            function (e, t) {
                oe.fn[t] = function (e, n) {
                    return arguments.length > 0
                        ? this.on(t, null, e, n)
                        : this.trigger(t)
                }
            }
        ),
        oe
            .fn
            .extend({
                hover: function (e, t) {
                    return this
                        .mouseenter(e)
                        .mouseleave(t || e)
                },
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length
                        ? this.off(e, "**")
                        : this.off(t, e || "**", n)
                }
            });
        var At = oe.now(),
            Qt = /\?/,
            $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        oe.parseJSON = function (t) {
            if (e.JSON && e.JSON.parse) 
                return e
                    .JSON
                    .parse(t + "");
            var n,
                r = null,
                i = oe.trim(t + "");
            return i && !oe.trim(i.replace($t, function (e, t, i, o) {
                return n && t && (r = 0),
                0 === r
                    ? e
                    : (n = i || t, r += !o - !i, "")
            }))
                ? Function("return " + i)()
                : oe.error("Invalid JSON: " + t)
        },
        oe.parseXML = function (t) {
            var n,
                r;
            if (!t || "string" != typeof t) 
                return null;
            try {
                e.DOMParser
                    ? (r = new DOMParser, n = r.parseFromString(t, "text/xml"))
                    : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (i) {
                n = void 0
            }
            return n && n.documentElement && !n
                .getElementsByTagName("parsererror")
                .length || oe.error("Invalid XML: " + t),
            n
        };
        var It,
            Dt,
            Ot = /#.*$/,
            Nt = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            zt = /^(?:GET|HEAD)$/,
            Bt = /^\/\//,
            Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ft = {},
            qt = {},
            Ht = "*/".concat("*");
        try {
            Dt = location.href
        } catch (Ut) {
            Dt = me.createElement("a"),
            Dt.href = "",
            Dt = Dt.href
        }
        It = Rt.exec(Dt.toLowerCase()) || [],
        oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dt,
                type: "GET",
                isLocal: Lt.test(It[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ht,
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
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t
                    ? B(B(e, oe.ajaxSettings), t)
                    : B(oe.ajaxSettings, e)
            },
            ajaxPrefilter: L(Ft),
            ajaxTransport: L(qt),
            ajax: function (e, t) {
                function n(e, t, n, r) {
                    var i,
                        c,
                        v,
                        g,
                        w,
                        T = t;
                    2 !== b && (
                        b = 2,
                        l && clearTimeout(l),
                        u = void 0,
                        a = r || "",
                        x.readyState = e > 0
                            ? 4
                            : 0,
                        i = e >= 200 && e < 300 || 304 === e,
                        n && (g = R(d, x, n)),
                        g = F(d, g, x, i),
                        i
                            ? (
                                d.ifModified && (
                                    w = x.getResponseHeader("Last-Modified"),
                                    w && (oe.lastModified[o] = w),
                                    w = x.getResponseHeader("etag"),
                                    w && (oe.etag[o] = w)
                                ),
                                204 === e || "HEAD" === d.type
                                    ? T = "nocontent"
                                    : 304 === e
                                        ? T = "notmodified"
                                        : (T = g.state, c = g.data, v = g.error, i = !v)
                            )
                            : (v = T, !e && T || (T = "error", e < 0 && (e = 0))),
                        x.status = e,
                        x.statusText = (t || T) + "",
                        i
                            ? h.resolveWith(f, [c, T, x])
                            : h.rejectWith(f, [x, T, v]),
                        x.statusCode(y),
                        y = void 0,
                        s && p.trigger(
                            i
                                ? "ajaxSuccess"
                                : "ajaxError",
                            [
                                x, d, i
                                    ? c
                                    : v
                            ]
                        ),
                        m.fireWith(f, [x, T]),
                        s && (
                            p.trigger("ajaxComplete", [x, d]),
                            --oe.active || oe.event.trigger("ajaxStop")
                        )
                    )
                }
                "object" == typeof e && (t = e, e = void 0),
                t = t || {};
                var r,
                    i,
                    o,
                    a,
                    l,
                    s,
                    u,
                    c,
                    d = oe.ajaxSetup({}, t),
                    f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery)
                        ? oe(f)
                        : oe.event,
                    h = oe.Deferred(),
                    m = oe.Callbacks("once memory"),
                    y = d.statusCode || {},
                    v = {},
                    g = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!c) 
                                    for (c = {}; t = Mt.exec(a);) 
                                        c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                            }
                            return null == t
                                ? null
                                : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b
                                ? a
                                : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return b || (e = g[n] = g[n] || e, v[e] = t),
                            this
                        },
                        overrideMimeType: function (e) {
                            return b || (d.mimeType = e),
                            this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e) 
                                if (b < 2) 
                                    for (t in e) 
                                        y[t] = [
                                            y[t], e[t]
                                        ];
                        else 
                                x.always(e[x.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || w;
                            return u && u.abort(t),
                            n(0, t),
                            this
                        }
                    };
                if (
                    h.promise(x).complete = m.add,
                    x.success = x.done,
                    x.error = x.fail,
                    d.url = ((e || d.url || Dt) + "").replace(Ot, "").replace(Bt, It[1] + "//"),
                    d.type = t.method || t.type || d.method || d.type,
                    d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(we) || [""],
                    null == d.crossDomain && (
                        r = Rt.exec(d.url.toLowerCase()),
                        d.crossDomain = !(!r || r[1] === It[1] && r[2] === It[2] && (r[3] || (
                            "http:" === r[1]
                                ? "80"
                                : "443"
                        )) === (It[3] || (
                            "http:" === It[1]
                                ? "80"
                                : "443"
                        )))
                    ),
                    d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)),
                    z(Ft, d, t, x),
                    2 === b
                ) 
                    return x;
                s = d.global,
                s && 0 === oe.active++ && oe
                    .event
                    .trigger("ajaxStart"),
                d.type = d
                    .type
                    .toUpperCase(),
                d.hasContent = !zt.test(d.type),
                o = d.url,
                d.hasContent || (d.data && (o = d.url += (
                    Qt.test(o)
                        ? "&"
                        : "?"
                ) + d.data, delete d.data), d.cache === !1 && (
                    d.url = Nt.test(o)
                        ? o.replace(Nt, "$1_=" + At++)
                        : o + (
                            Qt.test(o)
                                ? "&"
                                : "?"
                        ) + "_=" + At++
                )),
                d.ifModified && (
                    oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]),
                    oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])
                ),
                (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader(
                    "Content-Type",
                    d.contentType
                ),
                x.setRequestHeader(
                    "Accept",
                    d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                        ? d.accepts[d.dataTypes[0]] + (
                            "*" !== d.dataTypes[0]
                                ? ", " + Ht + "; q=0.01"
                                : ""
                        )
                        : d.accepts["*"]
                );
                for (i in d.headers) 
                    x.setRequestHeader(i, d.headers[i]);
                if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b)) 
                    return x.abort();
                w = "abort";
                for (i in {success: 1, error: 1, complete: 1}) 
                    x[i](d[i]);
                if (u = z(qt, d, t, x)) {
                    x.readyState = 1,
                    s && p.trigger("ajaxSend", [x, d]),
                    d.async && d.timeout > 0 && (l = setTimeout(function () {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1,
                        u.send(v, n)
                    } catch (T) {
                        if (!(b < 2)) 
                            throw T;
                        n(-1, T)
                    }
                } else 
                    n(-1, "No Transport");
                return x
            },
            getJSON: function (e, t, n) {
                return oe.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return oe.get(e, void 0, t, "script")
            }
        }),
        oe.each([
            "get", "post"
        ], function (e, t) {
            oe[t] = function (e, n, r, i) {
                return oe.isFunction(n) && (i = i || r, r = n, n = void 0),
                oe.ajax({url: e, type: t, dataType: i, data: n, success: r})
            }
        }),
        oe.each([
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend"
        ], function (e, t) {
            oe.fn[t] = function (e) {
                return this.on(t, e)
            }
        }),
        oe._evalUrl = function (e) {
            return oe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        },
        oe
            .fn
            .extend({
                wrapAll: function (e) {
                    if (oe.isFunction(e)) 
                        return this.each(function (t) {
                            oe(this).wrapAll(e.call(this, t))
                        });
                    if (this[0]) {
                        var t = oe(e, this[0].ownerDocument)
                            .eq(0)
                            .clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) 
                                    e = e.firstChild;
                                return e
                            })
                            .append(this)
                    }
                    return this
                },
                wrapInner: function (e) {
                    return oe.isFunction(e)
                        ? this.each(function (t) {
                            oe(this).wrapInner(e.call(this, t))
                        })
                        : this.each(function () {
                            var t = oe(this),
                                n = t.contents();
                            n.length
                                ? n.wrapAll(e)
                                : t.append(e)
                        })
                },
                wrap: function (e) {
                    var t = oe.isFunction(e);
                    return this.each(function (n) {
                        oe(this).wrapAll(
                            t
                                ? e.call(this, n)
                                : e
                        )
                    })
                },
                unwrap: function () {
                    return this
                        .parent()
                        .each(function () {
                            oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
                        })
                        .end()
                }
            }),
        oe.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !re.reliableHiddenOffsets() && "none" === (
                e.style && e.style.display || oe.css(e, "display")
            )
        },
        oe.expr.filters.visible = function (e) {
            return !oe
                .expr
                .filters
                .hidden(e)
        };
        var Wt = /%20/g,
            Vt = /\[\]$/,
            Xt = /\r?\n/g,
            Jt = /^(?:submit|button|image|reset|file)$/i,
            Kt = /^(?:input|select|textarea|keygen)/i;
        oe.param = function (e, t) {
            var n,
                r = [],
                i = function (e, t) {
                    t = oe.isFunction(t)
                        ? t()
                        : null == t
                            ? ""
                            : t,
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (
                void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
                oe.isArray(e) || e.jquery && !oe.isPlainObject(e)
            ) 
                oe.each(e, function () {
                    i(this.name, this.value)
                });
            else 
                for (n in e) 
                    q(n, e[n], t, i);
        return r
                .join("&")
                .replace(Wt, "+")
        },
        oe
            .fn
            .extend({
                serialize: function () {
                    return oe.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this
                        .map(function () {
                            var e = oe.prop(this, "elements");
                            return e
                                ? oe.makeArray(e)
                                : this
                        })
                        .filter(function () {
                            var e = this.type;
                            return this.name && !oe(this).is(":disabled") && Kt.test(this.nodeName) && !Jt.test(
                                e
                            ) && (this.checked || !Ae.test(e))
                        })
                        .map(function (e, t) {
                            var n = oe(this).val();
                            return null == n
                                ? null
                                : oe.isArray(n)
                                    ? oe.map(n, function (e) {
                                        return {
                                            name: t.name,
                                            value: e.replace(Xt, "\r\n")
                                        }
                                    })
                                    : {
                                        name: t.name,
                                        value: n.replace(Xt, "\r\n")
                                    }
                        })
                        .get()
                }
            }),
        oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject
            ? function () {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && H() || U()
            }
            : H;
        var Gt = 0,
            Zt = {},
            en = oe
                .ajaxSettings
                .xhr();
        e.ActiveXObject && oe(e).on("unload", function () {
            for (var e in Zt) 
                Zt[e](void 0, !0)
        }),
        re.cors = !!en && "withCredentials" in en,
        en = re.ajax = !!en,
        en && oe.ajaxTransport(function (e) {
            if (!e.crossDomain || re.cors) {
                var t;
                return {
                    send: function (n, r) {
                        var i,
                            o = e.xhr(),
                            a = ++Gt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) 
                            for (i in e.xhrFields) 
                                o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                        e.crossDomain || n["X-Requested-With"] || (
                            n["X-Requested-With"] = "XMLHttpRequest"
                        );
                        for (i in n) 
                            void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                        o.send(e.hasContent && e.data || null),
                        t = function (n, i) {
                            var l,
                                s,
                                u;
                            if (t && (i || 4 === o.readyState)) 
                                if (delete Zt[a], t = void 0, o.onreadystatechange = oe.noop, i) 
                                    4 !== o.readyState && o.abort();
                                else {
                                    u = {},
                                    l = o.status,
                                    "string" == typeof o.responseText && (u.text = o.responseText);
                                    try {
                                        s = o.statusText
                                    } catch (c) {
                                        s = ""
                                    }
                                    l || !e.isLocal || e.crossDomain
                                        ? 1223 === l && (l = 204)
                                        : l = u.text
                                            ? 200
                                            : 404
                                }
                            u && r(l, s, u, o.getAllResponseHeaders())
                        },
                        e.async
                            ? 4 === o.readyState
                                ? setTimeout(t)
                                : o.onreadystatechange = Zt[a] = t
                            : t()
                    },
                    abort: function () {
                        t && t(void 0, !0)
                    }
                }
            }
        }),
        oe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x" +
                        "-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (e) {
                    return oe.globalEval(e),
                    e
                }
            }
        }),
        oe.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET", e.global = !1)
        }),
        oe.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t,
                    n = me.head || oe("head")[0] || me.documentElement;
                return {
                    send: function (r, i) {
                        t = me.createElement("script"),
                        t.async = !0,
                        e.scriptCharset && (t.charset = e.scriptCharset),
                        t.src = e.url,
                        t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (
                                t.onload = t.onreadystatechange = null,
                                t.parentNode && t.parentNode.removeChild(t),
                                t = null,
                                n || i(200, "success")
                            )
                        },
                        n.insertBefore(t, n.firstChild)
                    },
                    abort: function () {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = tn.pop() || oe.expando + "_" + At++;
                return this[e] = !0,
                e
            }
        }),
        oe.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                l = t.jsonp !== !1 && (
                    nn.test(t.url)
                        ? "url"
                        : "string" == typeof t.data && !(t.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) && nn.test(t.data) && "data"
                );
            if (l || "jsonp" === t.dataTypes[0]) 
                return i = t.jsonpCallback = oe.isFunction(t.jsonpCallback)
                    ? t.jsonpCallback()
                    : t.jsonpCallback,
                l
                    ? t[l] = t[l].replace(nn, "$1" + i)
                    : t.jsonp !== !1 && (t.url += (
                        Qt.test(t.url)
                            ? "&"
                            : "?"
                    ) + t.jsonp + "=" + i),
                t.converters["script json"] = function () {
                    return a || oe.error(i + " was not called"),
                    a[0]
                }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function () {
                a = arguments
            },
            r.always(function () {
                e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback, tn.push(i)),
                a && oe.isFunction(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
        }),
        oe.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) 
                return null;
            
            "boolean" == typeof t && (n = t, t = !1),
            t = t || me;
            var r = fe.exec(e),
                i = !n && [];
            return r
                ? [t.createElement(r[1])]
                : (
                    r = oe.buildFragment([e], t, i),
                    i && i.length && oe(i).remove(),
                    oe.merge([], r.childNodes)
                )
        };
        var rn = oe.fn.load;
        oe.fn.load = function (e, t, n) {
            if ("string" != typeof e && rn) 
                return rn.apply(this, arguments);
            var r,
                i,
                o,
                a = this,
                l = e.indexOf(" ");
            return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)),
            oe.isFunction(t)
                ? (n = t, t = void 0)
                : t && "object" == typeof t && (o = "POST"),
            a.length > 0 && oe
                .ajax({url: e, type: o, dataType: "html", data: t})
                .done(function (e) {
                    i = arguments,
                    a.html(
                        r
                            ? oe("<div>").append(oe.parseHTML(e)).find(r)
                            : e
                    )
                })
                .complete(n && function (e, t) {
                    a.each(n, i || [e.responseText, t, e])
                }),
            this
        },
        oe.expr.filters.animated = function (e) {
            return oe
                .grep(oe.timers, function (t) {
                    return e === t.elem
                })
                .length
        };
        var on = e.document.documentElement;
        oe.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    l,
                    s,
                    u,
                    c = oe.css(e, "position"),
                    d = oe(e),
                    f = {};
                "static" === c && (e.style.position = "relative"),
                l = d.offset(),
                o = oe.css(e, "top"),
                s = oe.css(e, "left"),
                u = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [o, s]) > -1,
                u
                    ? (r = d.position(), a = r.top, i = r.left)
                    : (a = parseFloat(o) || 0, i = parseFloat(s) || 0),
                oe.isFunction(t) && (t = t.call(e, n, l)),
                null != t.top && (f.top = t.top - l.top + a),
                null != t.left && (f.left = t.left - l.left + i),
                "using" in t
                    ? t
                        .using
                        .call(e, f)
                    : d.css(f)
            }
        },
        oe
            .fn
            .extend({
                offset: function (e) {
                    if (arguments.length) 
                        return void 0 === e
                            ? this
                            : this.each(function (t) {
                                oe
                                    .offset
                                    .setOffset(this, e, t)
                            });
                    var t,
                        n,
                        r = {
                            top: 0,
                            left: 0
                        },
                        i = this[0],
                        o = i && i.ownerDocument;
                    if (o) 
                        return t = o.documentElement,
                        oe.contains(t, i)
                            ? (
                                typeof i.getBoundingClientRect !== ke && (r = i.getBoundingClientRect()),
                                n = W(o),
                                {
                                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                                }
                            )
                            : r
                    },
                position: function () {
                    if (this[0]) {
                        var e,
                            t,
                            n = {
                                top: 0,
                                left: 0
                            },
                            r = this[0];
                        return "fixed" === oe.css(r, "position")
                            ? t = r.getBoundingClientRect()
                            : (
                                e = this.offsetParent(),
                                t = this.offset(),
                                oe.nodeName(e[0], "html") || (n = e.offset()),
                                n.top += oe.css(e[0], "borderTopWidth", !0),
                                n.left += oe.css(e[0], "borderLeftWidth", !0)
                            ), {
                            top: t.top - n.top - oe.css(r, "marginTop", !0),
                            left: t.left - n.left - oe.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (
                            var e = this.offsetParent || on;
                            e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");
                        ) 
                            e = e.offsetParent;
                        return e || on
                    })
                }
            }),
        oe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = /Y/.test(t);
            oe.fn[e] = function (r) {
                return Ee(this, function (e, r, i) {
                    var o = W(e);
                    return void 0 === i
                        ? o
                            ? t in o
                                ? o[t]
                                : o
                                    .document
                                    .documentElement[r]
                            : e[r]
                        : void(
                            o
                                ? o.scrollTo(
                                    n
                                        ? oe(o).scrollLeft()
                                        : i,
                                    n
                                        ? i
                                        : oe(o).scrollTop()
                                )
                                : e[r] = i
                        )
                }, e, r, arguments.length, null);
            }
        }),
        oe.each([
            "top", "left"
        ], function (e, t) {
            oe.cssHooks[t] = j(re.pixelPosition, function (e, n) {
                if (n) 
                    return n = nt(e, t),
                    it.test(n)
                        ? oe(e).position()[t] + "px"
                        : n
                })
        }),
        oe.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            oe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, r) {
                oe.fn[r] = function (r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (
                            r === !0 || i === !0
                                ? "margin"
                                : "border"
                        );
                    return Ee(
                        this,
                        function (t, n, r) {
                            var i;
                            return oe.isWindow(t)
                                ? t
                                    .document
                                    .documentElement["client" + e]
                                : 9 === t.nodeType
                                    ? (i = t.documentElement, Math.max(
                                        t.body["scroll" + e],
                                        i["scroll" + e],
                                        t.body["offset" + e],
                                        i["offset" + e],
                                        i["client" + e]
                                    ))
                                    : void 0 === r
                                        ? oe.css(t, n, a)
                                        : oe.style(t, n, r, a)
                        },
                        t,
                        o
                            ? r
                            : void 0,
                        o,
                        null
                    )
                }
            })
        }),
        oe.fn.size = function () {
            return this.length
        },
        oe.fn.andSelf = oe.fn.addBack,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return oe
        });
        var an = e.jQuery,
            ln = e.$;
        return oe.noConflict = function (t) {
            return e.$ === oe && (e.$ = ln),
            t && e.jQuery === oe && (e.jQuery = an),
            oe
        },
        typeof t === ke && (e.jQuery = e.$ = oe),
        oe
    }
),
function (e) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : e(
            "undefined" != typeof jQuery
                ? jQuery
                : window.Zepto
        )
}(function (e) {
    "use strict";
    function t(t) {
        var n = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n))
    }
    function n(t) {
        var n = t.target,
            r = e(n);
        if (!r.is("[type=submit],[type=image]")) {
            var i = r.closest("[type=submit]");
            if (0 === i.length) 
                return;
            n = i[0]
        }
        var o = this;
        if (o.clk = n, "image" == n.type) 
            if (void 0 !== t.offsetX) 
                o.clk_x = t.offsetX,
                o.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
                var a = r.offset();
                o.clk_x = t.pageX - a.left,
                o.clk_y = t.pageY - a.top
            } else 
                o.clk_x = t.pageX - n.offsetLeft,
                o.clk_y = t.pageY - n.offsetTop;
    setTimeout(function () {
            o.clk = o.clk_x = o.clk_y = null
        }, 100)
    }
    function r() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array
                .prototype
                .join
                .call(arguments, "");
            window.console && window.console.log
                ? window
                    .console
                    .log(t)
                : window.opera && window.opera.postError && window
                    .opera
                    .postError(t)
        }
    }
    var i = {};
    i.fileapi = void 0 !== e("<input type='file'/>")
        .get(0)
        .files,
    i.formdata = void 0 !== window.FormData;
    var o = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!o) 
            return this
                .attr
                .apply(this, arguments);
        var e = this
            .prop
            .apply(this, arguments);
        return e && e.jquery || "string" == typeof e
            ? e
            : this
                .attr
                .apply(this, arguments)
    },
    e.fn.ajaxSubmit = function (t) {
        function n(n) {
            var r,
                i,
                o = e
                    .param(n, t.traditional)
                    .split("&"),
                a = o.length,
                l = [];
            for (r = 0; r < a; r++) 
                o[r] = o[r].replace(/\+/g, " "),
                i = o[r].split("="),
                l.push([
                    decodeURIComponent(i[0]),
                    decodeURIComponent(i[1])
                ]);
            return l
        }
        function a(r) {
            for (var i = new FormData, o = 0; o < r.length; o++) 
                i.append(r[o].name, r[o].value);
            if (t.extraData) {
                var a = n(t.extraData);
                for (o = 0; o < a.length; o++) 
                    a[o] && i.append(a[o][0], a[o][1])
            }
            t.data = null;
            var l = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: s || "POST"
            });
            t.uploadProgress && (l.xhr = function () {
                var n = e
                    .ajaxSettings
                    .xhr();
                return n.upload && n
                    .upload
                    .addEventListener("progress", function (e) {
                        var n = 0,
                            r = e.loaded || e.position,
                            i = e.total;
                        e.lengthComputable && (n = Math.ceil(r / i * 100)),
                        t.uploadProgress(e, r, i, n)
                    }, !1),
                n
            }),
            l.data = null;
            var u = l.beforeSend;
            return l.beforeSend = function (e, n) {
                t.formData
                    ? n.data = t.formData
                    : n.data = i,
                u && u.call(this, e, n)
            },
            e.ajax(l)
        }
        function l(n) {
            function i(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (n) {
                    r("cannot get iframe.contentWindow document: " + n)
                }
                if (t) 
                    return t;
                try {
                    t = e.contentDocument
                        ? e.contentDocument
                        : e.document
                } catch (n) {
                    r("cannot get iframe.contentDocument: " + n),
                    t = e.document
                }
                return t
            }
            function a() {
                function t() {
                    try {
                        var e = i(v).readyState;
                        r("state = " + e),
                        e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (n) {
                        r("Server abort: ", n, " (", n.name, ")"),
                        l(j),
                        T && clearTimeout(T),
                        T = void 0
                    }
                }
                var n = d.attr2("target"),
                    o = d.attr2("action"),
                    a = "multipart/form-data",
                    u = d.attr("enctype") || d.attr("encoding") || a;
                P.setAttribute("target", h),
                s && !/post/i.test(s) || P.setAttribute("method", "POST"),
                o != f.url && P.setAttribute("action", f.url),
                f.skipEncodingOverride || s && !/post/i.test(s) || d.attr(
                    {encoding: "multipart/form-data", enctype: "multipart/form-data"}
                ),
                f.timeout && (T = setTimeout(function () {
                    x = !0,
                    l(C)
                }, f.timeout));
                var c = [];
                try {
                    if (f.extraData) 
                        for (var p in f.extraData) 
                            f
                                .extraData
                                .hasOwnProperty(p) && (
                                    e.isPlainObject(f.extraData[p]) && f.extraData[p].hasOwnProperty("name") && f.extraData[p].hasOwnProperty("value")
                                        ? c.push(
                                            e('<input type="hidden" name="' + f.extraData[p].name + '">').val(f.extraData[p].value).appendTo(P)[0]
                                        )
                                        : c.push(
                                            e('<input type="hidden" name="' + p + '">').val(f.extraData[p]).appendTo(P)[0]
                                        )
                                );
                    f.iframeTarget || y.appendTo("body"),
                    v.attachEvent
                        ? v.attachEvent("onload", l)
                        : v.addEventListener("load", l, !1),
                    setTimeout(t, 15);
                    try {
                        P.submit()
                    } catch (m) {
                        var g = document
                            .createElement("form")
                            .submit;
                        g.apply(P)
                    }
                } finally {
                    P.setAttribute("action", o),
                    P.setAttribute("enctype", u),
                    n
                        ? P.setAttribute("target", n)
                        : d.removeAttr("target"),
                    e(c).remove()
                }
            }
            function l(t) {
                if (!g.aborted && !A) {
                    if (E = i(v), E || (r("cannot access response document"), t = j), t === C && g) 
                        return g.abort("timeout"),
                        void k.reject(g, "timeout");
                    if (t == j && g) 
                        return g.abort("server abort"),
                        void k.reject(g, "error", "server abort");
                    if (E && E.location.href != f.iframeSrc || x) {
                        v.detachEvent
                            ? v.detachEvent("onload", l)
                            : v.removeEventListener("load", l, !1);
                        var n,
                            o = "success";
                        try {
                            if (x) 
                                throw "timeout";
                            var a = "xml" == f.dataType || E.XMLDocument || e.isXMLDoc(E);
                            if (
                                r("isXml=" + a),
                                !a && window.opera && (null === E.body || !E.body.innerHTML) && --Q
                            ) 
                                return r("requeing onLoad callback, DOM not available"),
                                void setTimeout(l, 250);
                            var s = E.body
                                ? E.body
                                : E.documentElement;
                            g.responseText = s
                                ? s.innerHTML
                                : null,
                            g.responseXML = E.XMLDocument
                                ? E.XMLDocument
                                : E,
                            a && (f.dataType = "xml"),
                            g.getResponseHeader = function (e) {
                                var t = {
                                    "content-type": f.dataType
                                };
                                return t[e.toLowerCase()]
                            },
                            s && (
                                g.status = Number(s.getAttribute("status")) || g.status,
                                g.statusText = s.getAttribute("statusText") || g.statusText
                            );
                            var u = (f.dataType || "").toLowerCase(),
                                c = /(json|script|text)/.test(u);
                            if (c || f.textarea) {
                                var d = E.getElementsByTagName("textarea")[0];
                                if (d) 
                                    g.responseText = d.value,
                                    g.status = Number(d.getAttribute("status")) || g.status,
                                    g.statusText = d.getAttribute("statusText") || g.statusText;
                                else if (c) {
                                    var h = E.getElementsByTagName("pre")[0],
                                        m = E.getElementsByTagName("body")[0];
                                    h
                                        ? g.responseText = h.textContent
                                            ? h.textContent
                                            : h.innerText
                                        : m && (
                                            g.responseText = m.textContent
                                                ? m.textContent
                                                : m.innerText
                                        )
                                }
                            } else 
                                "xml" == u && !g.responseXML && g.responseText && (
                                    g.responseXML = $(g.responseText)
                                );
                            try {
                                Y = D(g, u, f)
                            } catch (b) {
                                o = "parsererror",
                                g.error = n = b || o
                            }
                        } catch (b) {
                            r("error caught: ", b),
                            o = "error",
                            g.error = n = b || o
                        }
                        g.aborted && (r("upload aborted"), o = null),
                        g.status && (
                            o = g.status >= 200 && g.status < 300 || 304 === g.status
                                ? "success"
                                : "error"
                        ),
                        "success" === o
                            ? (
                                f.success && f.success.call(f.context, Y, "success", g),
                                k.resolve(g.responseText, "success", g),
                                p && e.event.trigger("ajaxSuccess", [g, f])
                            )
                            : o && (
                                void 0 === n && (n = g.statusText),
                                f.error && f.error.call(f.context, g, o, n),
                                k.reject(g, "error", n),
                                p && e.event.trigger("ajaxError", [g, f, n])
                            ),
                        p && e
                            .event
                            .trigger("ajaxComplete", [g, f]),
                        p && !--e.active && e
                            .event
                            .trigger("ajaxStop"),
                        f.complete && f
                            .complete
                            .call(f.context, g, o),
                        A = !0,
                        f.timeout && clearTimeout(T),
                        setTimeout(function () {
                            f.iframeTarget
                                ? y.attr("src", f.iframeSrc)
                                : y.remove(),
                            g.responseXML = null
                        }, 100)
                    }
                }
            }
            var u,
                c,
                f,
                p,
                h,
                y,
                v,
                g,
                b,
                w,
                x,
                T,
                P = d[0],
                k = e.Deferred();
            if (k.abort = function (e) {
                g.abort(e)
            }, n) 
                for (c = 0; c < m.length; c++) 
                    u = e(m[c]),
                    o
                        ? u.prop("disabled", !1)
                        : u.removeAttr("disabled");
            if (
                f = e.extend(!0, {}, e.ajaxSettings, t),
                f.context = f.context || f,
                h = "jqFormIO" + (
                    new Date
                ).getTime(),
                f.iframeTarget
                    ? (
                        y = e(f.iframeTarget),
                        w = y.attr2("name"),
                        w
                            ? h = w
                            : y.attr2("name", h)
                    )
                    : (
                        y = e('<iframe name="' + h + '" src="' + f.iframeSrc + '" />'),
                        y.css({position: "absolute", top: "-1000px", left: "-1000px"})
                    ),
                v = y[0],
                g = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {},
                    getResponseHeader: function () {},
                    setRequestHeader: function () {},
                    abort: function (t) {
                        var n = "timeout" === t
                            ? "timeout"
                            : "aborted";
                        r("aborting upload... " + n),
                        this.aborted = 1;
                        try {
                            v.contentWindow.document.execCommand && v
                                .contentWindow
                                .document
                                .execCommand("Stop")
                        } catch (i) {}
                        y.attr("src", f.iframeSrc),
                        g.error = n,
                        f.error && f
                            .error
                            .call(f.context, g, n, t),
                        p && e
                            .event
                            .trigger("ajaxError", [g, f, n]),
                        f.complete && f
                            .complete
                            .call(f.context, g, n)
                    }
                },
                p = f.global,
                p && 0 === e.active++ && e.event.trigger("ajaxStart"),
                p && e.event.trigger("ajaxSend", [g, f]),
                f.beforeSend && f.beforeSend.call(f.context, g, f) === !1
            ) 
                return f.global && e.active--,
                k.reject(),
                k;
            if (g.aborted) 
                return k.reject(),
                k;
            b = P.clk,
            b && (w = b.name, w && !b.disabled && (
                f.extraData = f.extraData || {},
                f.extraData[w] = b.value,
                "image" == b.type && (f.extraData[w + ".x"] = P.clk_x, f.extraData[w + ".y"] = P.clk_y)
            ));
            var C = 1,
                j = 2,
                S = e("meta[name=csrf-token]").attr("content"),
                _ = e("meta[name=csrf-param]").attr("content");
            _ && S && (f.extraData = f.extraData || {}, f.extraData[_] = S),
            f.forceSync
                ? a()
                : setTimeout(a, 10);
            var Y,
                E,
                A,
                Q = 50,
                $ = e.parseXML || function (e, t) {
                    return window.ActiveXObject
                        ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
                        : t = (new DOMParser).parseFromString(e, "text/xml"),
                    t && t.documentElement && "parsererror" != t.documentElement.nodeName
                        ? t
                        : null
                },
                I = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                },
                D = function (t, n, r) {
                    var i = t.getResponseHeader("content-type") || "",
                        o = "xml" === n || !n && i.indexOf("xml") >= 0,
                        a = o
                            ? t.responseXML
                            : t.responseText;
                    return o && "parsererror" === a.documentElement.nodeName && e.error && e.error(
                        "parsererror"
                    ),
                    r && r.dataFilter && (a = r.dataFilter(a, n)),
                    "string" == typeof a && (
                        "json" === n || !n && i.indexOf("json") >= 0
                            ? a = I(a)
                            : ("script" === n || !n && i.indexOf("javascript") >= 0) && e.globalEval(a)
                    ),
                    a
                };
            return k
        }
        if (!this.length) 
            return r("ajaxSubmit: skipping submit process - no element selected"),
            this;
        var s,
            u,
            c,
            d = this;
        "function" == typeof t
            ? t = {
                success: t
            }
            : void 0 === t && (t = {}),
        s = t.type || this.attr2("method"),
        u = t.url || this.attr2("action"),
        c = "string" == typeof u
            ? e.trim(u)
            : "",
        c = c || window.location.href || "",
        c && (c = (c.match(/^([^#]+)/) || [])[1]),
        t = e.extend(!0, {
            url: c,
            success: e.ajaxSettings.success,
            type: s || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "")
                ? "javascript:false"
                : "about:blank"
        }, t);
        var f = {};
        if (this.trigger("form-pre-serialize", [this, t, f]), f.veto) 
            return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
            this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) 
            return r("ajaxSubmit: submit aborted via beforeSerialize callback"),
            this;
        var p = t.traditional;
        void 0 === p && (p = e.ajaxSettings.traditional);
        var h,
            m = [],
            y = this.formToArray(t.semantic, m);
        if (
            t.data && (t.extraData = t.data, h = e.param(t.data, p)),
            t.beforeSubmit && t.beforeSubmit(y, this, t) === !1
        ) 
            return r("ajaxSubmit: submit aborted via beforeSubmit callback"),
            this;
        if (this.trigger("form-submit-validate", [y, this, t, f]), f.veto) 
            return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this;
        var v = e.param(y, p);
        h && (
            v = v
                ? v + "&" + h
                : h
        ),
        "GET" == t
            .type
            .toUpperCase()
                ? (t.url += (
                    t.url.indexOf("?") >= 0
                        ? "&"
                        : "?"
                ) + v, t.data = null)
                : t.data = v;
        var g = [];
        if (
            t.resetForm && g.push(function () {
                d.resetForm()
            }),
            t.clearForm && g.push(function () {
                d.clearForm(t.includeHidden)
            }),
            !t.dataType && t.target
        ) {
            var b = t.success || function () {};
            g.push(function (n) {
                var r = t.replaceTarget
                    ? "replaceWith"
                    : "html";
                e(t.target)[r](n).each(b, arguments)
            })
        } else 
            t.success && g.push(t.success);
        if (t.success = function (e, n, r) {
            for (var i = t.context || this, o = 0, a = g.length; o < a; o++) 
                g[o].apply(i, [
                    e, n, r || d,
                    d
                ])
        }, t.error) {
            var w = t.error;
            t.error = function (e, n, r) {
                var i = t.context || this;
                w.apply(i, [e, n, r, d])
            }
        }
        if (t.complete) {
            var x = t.complete;
            t.complete = function (e, n) {
                var r = t.context || this;
                x.apply(r, [e, n, d])
            }
        }
        var T = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }),
            P = T.length > 0,
            k = "multipart/form-data",
            C = d.attr("enctype") == k || d.attr("encoding") == k,
            j = i.fileapi && i.formdata;
        r("fileAPI :" + j);
        var S,
            _ = (P || C) && !j;
        t.iframe !== !1 && (t.iframe || _)
            ? t.closeKeepAlive
                ? e.get(t.closeKeepAlive, function () {
                    S = l(y)
                })
                : S = l(y)
            : S = (P || C) && j
                ? a(y)
                : e.ajax(t),
        d
            .removeData("jqxhr")
            .data("jqxhr", S);
        for (var Y = 0; Y < m.length; Y++) 
            m[Y] = null;
        return this.trigger("form-submit-notify", [this, t]),
        this
    },
    e.fn.ajaxForm = function (i) {
        if (
            i = i || {},
            i.delegation = i.delegation && e.isFunction(e.fn.on),
            !i.delegation && 0 === this.length
        ) {
            var o = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && o.s
                ? (r("DOM not ready, queuing ajaxForm"), e(function () {
                    e(o.s, o.c).ajaxForm(i)
                }), this)
                : (r("terminating; zero elements found by selector" + (
                    e.isReady
                        ? ""
                        : " (DOM not ready)"
                )), this)
        }
        return i.delegation
            ? (
                e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, i, t).on("click.form-plugin", this.selector, i, n),
                this
            )
            : this
                .ajaxFormUnbind()
                .bind("submit.form-plugin", i, t)
                .bind("click.form-plugin", i, n)
    },
    e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    },
    e.fn.formToArray = function (t, n) {
        var r = [];
        if (0 === this.length) 
            return r;
        var o,
            a = this[0],
            l = this.attr("id"),
            s = t
                ? a.getElementsByTagName("*")
                : a.elements;
        if (
            s && !/MSIE [678]/.test(navigator.userAgent) && (s = e(s).get()),
            l && (o = e(
                ":input[form=" + l + "]"
            ).get(), o.length && (s = (s || []).concat(o))),
            !s || !s.length
        ) 
            return r;
        var u,
            c,
            d,
            f,
            p,
            h,
            m;
        for (u = 0, h = s.length; u < h; u++) 
            if (p = s[u], d = p.name, d && !p.disabled) 
                if (t && a.clk && "image" == p.type) 
                    a.clk == p && (r.push({name: d, value: e(p).val(), type: p.type}), r.push({
                        name: d + ".x",
                        value: a.clk_x
                    }, {
                        name: d + ".y",
                        value: a.clk_y
                    }));
                else if (f = e.fieldValue(p, !0), f && f.constructor == Array) 
                    for (n && n.push(p), c = 0, m = f.length; c < m; c++) 
                        r.push({name: d, value: f[c]});
    else if (i.fileapi && "file" == p.type) {
            n && n.push(p);
            var y = p.files;
            if (y.length) 
                for (c = 0; c < y.length; c++) 
                    r.push({name: d, value: y[c], type: p.type});
        else 
                r.push({name: d, value: "", type: p.type})
        } else 
            null !== f && "undefined" != typeof f && (
                n && n.push(p),
                r.push({name: d, value: f, type: p.type, required: p.required})
            );
        if (!t && a.clk) {
            var v = e(a.clk),
                g = v[0];
            d = g.name,
            d && !g.disabled && "image" == g.type && (
                r.push({name: d, value: v.val()}),
                r.push({
                    name: d + ".x",
                    value: a.clk_x
                }, {
                    name: d + ".y",
                    value: a.clk_y
                })
            )
        }
        return r
    },
    e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    },
    e.fn.fieldSerialize = function (t) {
        var n = [];
        return this.each(function () {
            var r = this.name;
            if (r) {
                var i = e.fieldValue(this, t);
                if (i && i.constructor == Array) 
                    for (var o = 0, a = i.length; o < a; o++) 
                        n.push({name: r, value: i[o]});
            else 
                    null !== i && "undefined" != typeof i && n.push({name: this.name, value: i})
            }
        }),
        e.param(n)
    },
    e.fn.fieldValue = function (t) {
        for (var n = [], r = 0, i = this.length; r < i; r++) {
            var o = this[r],
                a = e.fieldValue(o, t);
            null === a || "undefined" == typeof a || a.constructor == Array && !a.length || (
                a.constructor == Array
                    ? e.merge(n, a)
                    : n.push(a)
            )
        }
        return n
    },
    e.fieldValue = function (t, n) {
        var r = t.name,
            i = t.type,
            o = t
                .tagName
                .toLowerCase();
        if (
            void 0 === n && (n = !0),
            n && (!r || t.disabled || "reset" == i || "button" == i || ("checkbox" == i || "radio" == i) && !t.checked || ("submit" == i || "image" == i) && t.form && t.form.clk != t || "select" == o && t.selectedIndex == -1)
        ) 
            return null;
        if ("select" == o) {
            var a = t.selectedIndex;
            if (a < 0) 
                return null;
            for (
                var l = [],
                s = t.options,
                u = "select-one" == i,
                c = u
                    ? a + 1
                    : s.length,
                d = u
                    ? a
                    : 0; d < c; d++
            ) {
                var f = s[d];
                if (f.selected) {
                    var p = f.value;
                    if (p || (
                        p = f.attributes && f.attributes.value && !f.attributes.value.specified
                            ? f.text
                            : f.value
                    ), u) 
                        return p;
                    l.push(p)
                }
            }
            return l
        }
        return e(t).val()
    },
    e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    },
    e.fn.clearFields = e.fn.clearInputs = function (t) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var r = this.type,
                i = this
                    .tagName
                    .toLowerCase();
            n.test(r) || "textarea" == i
                ? this.value = ""
                : "checkbox" == r || "radio" == r
                    ? this.checked = !1
                    : "select" == i
                        ? this.selectedIndex = -1
                        : "file" == r
                            ? /MSIE/.test(navigator.userAgent)
                                ? e(this).replaceWith(e(this).clone(!0))
                                : e(this).val("")
                            : t && (t === !0 && /hidden/.test(r) || "string" == typeof t && e(this).is(t)) && (
                                this.value = ""
                            )
        })
    },
    e.fn.resetForm = function () {
        return this.each(function () {
            (
                "function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType
            ) && this.reset()
        })
    },
    e.fn.enable = function (e) {
        return void 0 === e && (e = !0),
        this.each(function () {
            this.disabled = !e
        })
    },
    e.fn.selected = function (t) {
        return void 0 === t && (t = !0),
        this.each(function () {
            var n = this.type;
            if ("checkbox" == n || "radio" == n) 
                this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var r = e(this).parent("select");
                t && r[0] && "select-one" == r[0].type && r
                    .find("option")
                    .selected(!1),
                this.selected = t
            }
        })
    },
    e.fn.ajaxSubmit.debug = !1
}),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        return (t /= i / 2) < 1
            ? r / 2 * t * t + n
            : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        return (t /= i / 2) < 1
            ? r / 2 * t * t * t + n
            : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        return (t /= i / 2) < 1
            ? r / 2 * t * t * t * t + n
            : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        return (t /= i / 2) < 1
            ? r / 2 * t * t * t * t * t + n
            : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return 0 == t
            ? n
            : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i
            ? n + r
            : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        return 0 == t
            ? n
            : t == i
                ? n + r
                : (t /= i / 2) < 1
                    ? r / 2 * Math.pow(2, 10 * (t - 1)) + n
                    : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        return (t /= i / 2) < 1
            ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n
            : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var o = 1.70158,
            a = 0,
            l = r;
        if (0 == t) 
            return n;
        if (1 == (t /= i)) 
            return n + r;
        if (a || (a = .3 * i), l < Math.abs(r)) {
            l = r;
            var o = a / 4
        } else 
            var o = a / (2 * Math.PI) * Math.asin(r / l);
        return -(
            l * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / a)
        ) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var o = 1.70158,
            a = 0,
            l = r;
        if (0 == t) 
            return n;
        if (1 == (t /= i)) 
            return n + r;
        if (a || (a = .3 * i), l < Math.abs(r)) {
            l = r;
            var o = a / 4
        } else 
            var o = a / (2 * Math.PI) * Math.asin(r / l);
        return l * Math.pow(2, -10 * t) * Math.sin((t * i - o) * (2 * Math.PI) / a) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var o = 1.70158,
            a = 0,
            l = r;
        if (0 == t) 
            return n;
        if (2 == (t /= i / 2)) 
            return n + r;
        if (a || (a = i * (.3 * 1.5)), l < Math.abs(r)) {
            l = r;
            var o = a / 4
        } else 
            var o = a / (2 * Math.PI) * Math.asin(r / l);
        return t < 1
            ? -.5 * (
                l * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / a)
            ) + n
            : l * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / a) * .5 + r + n
    },
    easeInBack: function (e, t, n, r, i, o) {
        return void 0 == o && (o = 1.70158),
        r * (t /= i) * t * ((o + 1) * t - o) + n
    },
    easeOutBack: function (e, t, n, r, i, o) {
        return void 0 == o && (o = 1.70158),
        r * ((t = t / i - 1) * t * ((o + 1) * t + o) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, o) {
        return void 0 == o && (o = 1.70158),
        (t /= i / 2) < 1
            ? r / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + n
            : r / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery
            .easing
            .easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        return (t /= i) < 1 / 2.75
            ? r * (7.5625 * t * t) + n
            : t < 2 / 2.75
                ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
                : t < 2.5 / 2.75
                    ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
                    : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, r, i) {
        return t < i / 2
            ? .5 * jQuery
                .easing
                .easeInBounce(e, 2 * t, 0, r, i) + n
            : .5 * jQuery
                .easing
                .easeOutBounce(e, 2 * t - i, 0, r, i) + .5 * r + n
    }
}),
function (e) {
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : e(jQuery)
}(function (e) {
    function t(e) {
        return l.raw
            ? e
            : encodeURIComponent(e)
    }
    function n(e) {
        return l.raw
            ? e
            : decodeURIComponent(e)
    }
    function r(e) {
        return t(
            l.json
                ? JSON.stringify(e)
                : String(e)
        )
    }
    function i(e) {
        0 === e.indexOf('"') && (
            e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        );
        try {
            e = decodeURIComponent(e.replace(a, " "))
        } catch (t) {
            return
        }
        try {
            return l.json
                ? JSON.parse(e)
                : e
        } catch (t) {}
    }
    function o(t, n) {
        var r = l.raw
            ? t
            : i(t);
        return e.isFunction(n)
            ? n(r)
            : r
    }
    var a = /\+/g,
        l = e.cookie = function (i, a, s) {
            if (void 0 !== a && !e.isFunction(a)) {
                if (s = e.extend({}, l.defaults, s), "number" == typeof s.expires) {
                    var u = s.expires,
                        c = s.expires = new Date;
                    c.setDate(c.getDate() + u)
                }
                return document.cookie = [
                    t(i), "=", r(a), s.expires
                        ? "; expires=" + s
                            .expires
                            .toUTCString()
                        : "",
                    s.path
                        ? "; path=" + s.path
                        : "",
                    s.domain
                        ? "; domain=" + s.domain
                        : "",
                    s.secure
                        ? "; secure"
                        : ""
                ].join("")
            }
            for (
                var d = i
                    ? void 0
                    : {},
                f = document.cookie
                    ? document.cookie.split("; ")
                    : [],
                p = 0,
                h = f.length; p < h; p++
            ) {
                var m = f[p].split("="),
                    y = n(m.shift()),
                    v = m.join("=");
                if (i && i === y) {
                    d = o(v, a);
                    break
                }
                i || void 0 === (v = o(v)) || (d[y] = v)
            }
            return d
        };
    l.defaults = {},
    e.removeCookie = function (t, n) {
        return void 0 !== e.cookie(t) && (
            e.cookie(t, "", e.extend({}, n, {expires: -1})),
            !0
        )
    }
}),
function (e, t, n, r) {
    function i(e, t) {
        return e[t] === r
            ? b[t]
            : e[t]
    }
    function o() {
        var e = t.pageYOffset;
        return e === r
            ? v.scrollTop
            : e
    }
    function a(e, t) {
        var n = b["on" + e];
        n && (
            T(n)
                ? n.call(t[0])
                : (
                    n.addClass && t.addClass(n.addClass),
                    n.removeClass && t.removeClass(n.removeClass)
                )
        ),
        t.trigger("lazy" + e, [t]),
        c()
    }
    function l(t) {
        a(t.type, e(this).off(m, l))
    }
    function s(n) {
        if (j.length) {
            n = n || b.forceLoad,
            S = 1 / 0;
            var r,
                i,
                s = o(),
                u = t.innerHeight || v.clientHeight,
                c = t.innerWidth || v.clientWidth;
            for (r = 0, i = j.length; r < i; r++) {
                var d,
                    f = j[r],
                    h = f[0],
                    y = f[p],
                    g = !1,
                    w = n;
                if (C(v, h)) {
                    if (n || !y.visibleOnly || h.offsetWidth || h.offsetHeight) {
                        if (!w) {
                            var x = h.getBoundingClientRect(),
                                P = y.edgeX,
                                k = y.edgeY;
                            d = x.top + s - k - u,
                            w = d <= s && x.bottom > -k && x.left <= c + P && x.right > -P
                        }
                        if (w) {
                            a("show", f);
                            var _ = y.srcAttr,
                                Y = T(_)
                                    ? _(f)
                                    : h.getAttribute(_);
                            Y && (f.on(m, l), h.src = Y),
                            g = !0
                        } else 
                            d < S && (S = d)
                    }
                } else 
                    g = !0;
                g && (j.splice(r--, 1), i--)
            }
            i || a("complete", e(v))
        }
    }
    function u() {
        _ > 1
            ? (_ = 1, s(), setTimeout(u, b.throttle))
            : _ = 0
    }
    function c(e) {
        j.length && (
            e && "scroll" === e.type && e.currentTarget === t && S >= o() || (_ || setTimeout(u, 0), _ = 2)
        )
    }
    function d() {
        x.lazyLoadXT()
    }
    function f() {
        s(!0)
    }
    var p = "lazyLoadXT",
        h = "lazied",
        m = "load error",
        y = "lazy-hidden",
        v = n.documentElement || n.body,
        g = t.onscroll === r || !!t.operamini || !v.getBoundingClientRect,
        b = {
            autoInit: !0,
            selector: "img[data-src]",
            blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            throttle: 99,
            forceLoad: g,
            loadEvent: "pageshow",
            updateEvent: "load orientationchange resize scroll touchmove focus",
            forceEvent: "",
            oninit: {
                removeClass: "lazy"
            },
            onshow: {
                addClass: y
            },
            onload: {
                removeClass: y,
                addClass: "lazy-loaded"
            },
            onerror: {
                removeClass: y
            },
            checkDuplicates: !0
        },
        w = {
            srcAttr: "data-src",
            edgeX: 0,
            edgeY: 0,
            visibleOnly: !0
        },
        x = e(t),
        T = e.isFunction,
        P = e.extend,
        k = e.data || function (t, n) {
            return e(t).data(n)
        },
        C = e.contains || function (e, t) {
            for (; t = t.parentNode;) 
                if (t === e) 
                    return !0;
        return !1
        },
        j = [],
        S = 0,
        _ = 0;
    e[p] = P(b, w, e[p]),
    e.fn[p] = function (n) {
        n = n || {};
        var r,
            o = i(n, "blankImage"),
            l = i(n, "checkDuplicates"),
            s = i(n, "scrollContainer"),
            u = {};
        e(s).on("scroll", c);
        for (r in w) 
            u[r] = i(n, r);
        return this.each(function (r, i) {
            if (i === t) 
                e(b.selector).lazyLoadXT(n);
            else {
                if (l && k(i, h)) 
                    return;
                var s = e(i).data(h, 1);
                o && "IMG" === i.tagName && !i.src && (i.src = o),
                s[p] = P({}, u),
                a("init", s),
                j.push(s)
            }
        })
    },
    e(n).ready(function () {
        a("start", x),
        x
            .on(b.loadEvent, d)
            .on(b.updateEvent, c)
            .on(b.forceEvent, f),
        e(n).on(b.updateEvent, c),
        b.autoInit && d()
    })
}(window.jQuery || window.Zepto || window.$, window, document),
function (e) {
    var t = function (e) {
            return e
                .split("")
                .reverse()
                .join("")
        },
        n = {
            numberStep: function (t, n) {
                var r = Math.floor(t),
                    i = e(n.elem);
                i.text(r)
            }
        },
        r = function (e) {
            var t = e.elem;
            if (t.nodeType && t.parentNode) {
                var r = t._animateNumberSetter;
                r || (r = n.numberStep),
                r(e.now, e)
            }
        };
    e.Tween && e.Tween.propHooks
        ? e.Tween.propHooks.number = {
            set: r
        }
        : e.fx.step.number = r;
    var i = function (e, t) {
            for (
                var n,
                r,
                i,
                o = e.split("").reverse(),
                a = [],
                l = 0,
                s = Math.ceil(e.length / t);
                l < s;
                l++
            ) {
                for (n = "", i = 0; i < t && (r = l * t + i, r !== e.length); i++) 
                    n += o[r];
                a.push(n)
            }
            return a
        },
        o = function (e) {
            var n = e.length - 1,
                r = t(e[n]);
            return e[n] = t(parseInt(r, 10).toString()),
            e
        };
    e.animateNumber = {
        numberStepFactories: {
            append: function (t) {
                return function (n, r) {
                    var i = Math.floor(n),
                        o = e(r.elem);
                    o
                        .prop("number", n)
                        .text(i + t)
                }
            },
            separator: function (n, r, a) {
                return n = n || " ",
                r = r || 3,
                a = a || "",
                function (l, s) {
                    var u = Math.floor(l),
                        c = u.toString(),
                        d = e(s.elem);
                    if (c.length > r) {
                        var f = i(c, r);
                        c = o(f).join(n),
                        c = t(c)
                    }
                    d
                        .prop("number", l)
                        .text(c + a)
                }
            }
        }
    },
    e.fn.animateNumber = function () {
        for (
            var t = arguments[0],
            r = e.extend({}, n, t),
            i = e(this),
            o = [r],
            a = 1,
            l = arguments.length;
            a < l;
            a++
        ) 
            o.push(arguments[a]);
        if (t.numberStep) {
            var s = this.each(function () {
                    this._animateNumberSetter = t.numberStep
                }),
                u = r.complete;
            r.complete = function () {
                s.each(function () {
                    delete this._animateNumberSetter
                }),
                u && u.apply(this, arguments)
            }
        }
        return i
            .animate
            .apply(i, o)
    }
}(jQuery),
function () {
    function e(e, t, n) {
        for (
            var r = (n || 0) - 1,
            i = e
                ? e.length
                : 0; ++r < i;
        ) 
            if (e[r] === t) 
                return r;
    return -1
    }
    function t(t, n) {
        var r = typeof n;
        if (t = t.cache, "boolean" == r || null == n) 
            return t[n]
                ? 0
                : -1;
        
        "number" != r && "string" != r && (r = "object");
        var i = "number" == r
            ? n
            : v + n;
        return t = (t = t[r]) && t[i],
        "object" == r
            ? t && e(t, n) > -1
                ? 0
                : -1
            : t
                ? 0
                : -1
    }
    function n(e) {
        var t = this.cache,
            n = typeof e;
        if ("boolean" == n || null == e) 
            t[e] = !0;
        else {
            "number" != n && "string" != n && (n = "object");
            var r = "number" == n
                    ? e
                    : v + e,
                i = t[n] || (t[n] = {});
            "object" == n
                ? (i[r] || (i[r] = [])).push(e)
                : i[r] = !0
        }
    }
    function r(e) {
        return e.charCodeAt(0)
    }
    function i(e, t) {
        for (var n = e.criteria, r = t.criteria, i = -1, o = n.length; ++i < o;) {
            var a = n[i],
                l = r[i];
            if (a !== l) {
                if (a > l || "undefined" == typeof a) 
                    return 1;
                if (a < l || "undefined" == typeof l) 
                    return -1
            }
        }
        return e.index - t.index
    }
    function o(e) {
        var t = -1,
            r = e.length,
            i = e[0],
            o = e[r / 2 | 0],
            a = e[r - 1];
        if (i && "object" == typeof i && o && "object" == typeof o && a && "object" == typeof a) 
            return !1;
        var l = s();
        l["false"] = l["null"] = l["true"] = l.undefined = !1;
        var u = s();
        for (u.array = e, u.cache = l, u.push = n; ++t < r;) 
            u.push(e[t]);
        return u
    }
    function a(e) {
        return "\\" + W[e]
    }
    function l() {
        return h.pop() || []
    }
    function s() {
        return m.pop() || {
            array: null,
            cache: null,
            criteria: null,
            "false": !1,
            index: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": !1,
            undefined: !1,
            value: null
        }
    }
    function u(e) {
        e.length = 0,
        h.length < b && h.push(e)
    }
    function c(e) {
        var t = e.cache;
        t && c(t),
        e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null,
        m.length < b && m.push(e)
    }
    function d(e, t, n) {
        t || (t = 0),
        "undefined" == typeof n && (
            n = e
                ? e.length
                : 0
        );
        for (var r = -1, i = n - t || 0, o = Array(
            i < 0
                ? 0
                : i
        ); ++r < i;) 
            o[r] = e[t + r];
        return o
    }
    function f(n) {
        function h(e) {
            return e && "object" == typeof e && !Gn(e) && In.call(e, "__wrapped__")
                ? e
                : new m(e)
        }
        function m(e, t) {
            this.__chain__ = !!t,
            this.__wrapped__ = e
        }
        function b(e) {
            function t() {
                if (r) {
                    var e = d(r);
                    Dn.apply(e, arguments)
                }
                if (this instanceof t) {
                    var o = X(n.prototype),
                        a = n.apply(o, e || arguments);
                    return Ee(a)
                        ? a
                        : o
                }
                return n.apply(i, e || arguments)
            }
            var n = e[0],
                r = e[2],
                i = e[4];
            return Kn(t, e),
            t
        }
        function W(e, t, n, r, i) {
            if (n) {
                var o = n(e);
                if ("undefined" != typeof o) 
                    return o
            }
            var a = Ee(e);
            if (!a) 
                return e;
            var s = Sn.call(e);
            if (!F[s]) 
                return e;
            var c = Xn[s];
            switch (s) {
                case O:
                case N:
                    return new c((+e));
                case L:
                case R:
                    return new c(e);
                case B:
                    return o = c(e.source, C.exec(e)),
                    o.lastIndex = e.lastIndex,
                    o
            }
            var f = Gn(e);
            if (t) {
                var p = !r;
                r || (r = l()),
                i || (i = l());
                for (var h = r.length; h--;) 
                    if (r[h] == e) 
                        return i[h];
            o = f
                    ? c(e.length)
                    : {}
            } else 
                o = f
                    ? d(e)
                    : or({}, e);
            return f && (
                In.call(e, "index") && (o.index = e.index),
                In.call(e, "input") && (o.input = e.input)
            ),
            t
                ? (r.push(e), i.push(o), (
                    f
                        ? Je
                        : sr
                )(e, function (e, a) {
                    o[a] = W(e, t, n, r, i)
                }), p && (u(r), u(i)), o)
                : o
        }
        function X(e, t) {
            return Ee(e)
                ? zn(e)
                : {}
        }
        function J(e, t, n) {
            if ("function" != typeof e) 
                return Kt;
            if ("undefined" == typeof t || !("prototype" in e)) 
                return e;
            var r = e.__bindData__;
            if ("undefined" == typeof r && (Jn.funcNames && (r = !e.name), r = r || !Jn.funcDecomp, !r)) {
                var i = Qn.call(e);
                Jn.funcNames || (r = !j.test(i)),
                r || (r = E.test(i), Kn(e, r))
            }
            if (r === !1 || r !== !0 && 1 & r[1]) 
                return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return e.call(t, n, r, i)
                    };
                case 4:
                    return function (n, r, i, o) {
                        return e.call(t, n, r, i, o)
                    }
            }
            return It(e, t)
        }
        function K(e) {
            function t() {
                var e = s
                    ? a
                    : this;
                if (i) {
                    var h = d(i);
                    Dn.apply(h, arguments)
                }
                if ((o || c) && (h || (h = d(arguments)), o && Dn.apply(h, o), c && h.length < l)) 
                    return r |= 16,
                    K([
                        n, f
                            ? r
                            : r & -4,
                        h,
                        null,
                        a,
                        l
                    ]);
                if (h || (h = arguments), u && (n = e[p]), this instanceof t) {
                    e = X(n.prototype);
                    var m = n.apply(e, h);
                    return Ee(m)
                        ? m
                        : e
                }
                return n.apply(e, h)
            }
            var n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = e[4],
                l = e[5],
                s = 1 & r,
                u = 2 & r,
                c = 4 & r,
                f = 8 & r,
                p = n;
            return Kn(t, e),
            t
        }
        function G(n, r) {
            var i = -1,
                a = se(),
                l = n
                    ? n.length
                    : 0,
                s = l >= g && a === e,
                u = [];
            if (s) {
                var d = o(r);
                d
                    ? (a = t, r = d)
                    : s = !1
            }
            for (; ++i < l;) {
                var f = n[i];
                a(r, f) < 0 && u.push(f)
            }
            return s && c(r),
            u
        }
        function ee(e, t, n, r) {
            for (
                var i = (r || 0) - 1,
                o = e
                    ? e.length
                    : 0,
                a = []; ++i < o;
            ) {
                var l = e[i];
                if (l && "object" == typeof l && "number" == typeof l.length && (Gn(l) || fe(l))) {
                    t || (l = ee(l, t, n));
                    var s = -1,
                        u = l.length,
                        c = a.length;
                    for (a.length += u; ++s < u;) 
                        a[c++] = l[s]
                } else 
                    n || a.push(l)
            }
            return a
        }
        function te(e, t, n, r, i, o) {
            if (n) {
                var a = n(e, t);
                if ("undefined" != typeof a) 
                    return !!a
            }
            if (e === t) 
                return 0 !== e || 1 / e == 1 / t;
            var s = typeof e,
                c = typeof t;
            if (!(e !== e || e && U[s] || t && U[c])) 
                return !1;
            if (null == e || null == t) 
                return e === t;
            var d = Sn.call(e),
                f = Sn.call(t);
            if (d == I && (d = z), f == I && (f = z), d != f) 
                return !1;
            switch (d) {
                case O:
                case N:
                    return + e ==+ t;
                case L:
                    return e !=+ e
                        ? t !=+ t
                        : 0 == e
                            ? 1 / e == 1 / t
                            : e ==+ t;
                case B:
                case R:
                    return e == Tn(t)
            }
            var p = d == D;
            if (!p) {
                var h = In.call(e, "__wrapped__"),
                    m = In.call(t, "__wrapped__");
                if (h || m) 
                    return te(
                        h
                            ? e.__wrapped__
                            : e,
                        m
                            ? t.__wrapped__
                            : t,
                        n,
                        r,
                        i,
                        o
                    );
                if (d != z) 
                    return !1;
                var y = e.constructor,
                    v = t.constructor;
                if (y != v && !(Ye(y) && y instanceof y && Ye(v) && v instanceof v) && "constructor" in e && "constructor" in t) 
                    return !1
            }
            var g = !i;
            i || (i = l()),
            o || (o = l());
            for (var b = i.length; b--;) 
                if (i[b] == e) 
                    return o[b] == t;
        var w = 0;
            if (a = !0, i.push(e), o.push(t), p) {
                if (b = e.length, w = t.length, a = w == b, a || r) 
                    for (; w--;) {
                        var x = b,
                            T = t[w];
                        if (r) 
                            for (; x-- && !(a = te(e[x], T, n, r, i, o));) 
                            ;
                            else if (!(a = te(e[w], T, n, r, i, o))) 
                                break
                    }
                } else 
                lr(t, function (t, l, s) {
                    if (In.call(s, l)) 
                        return w++,
                        a = In.call(e, l) && te(e[l], t, n, r, i, o)
                }),
                a && !r && lr(e, function (e, t, n) {
                    if (In.call(n, t)) 
                        return a = --w > -1
                });
            return i.pop(),
            o.pop(),
            g && (u(i), u(o)),
            a
        }
        function ne(e, t, n, r, i) {
            (
                Gn(t)
                    ? Je
                    : sr
            )(t, function (t, o) {
                var a,
                    l,
                    s = t,
                    u = e[o];
                if (t && ((l = Gn(t)) || ur(t))) {
                    for (var c = r.length; c--;) 
                        if (a = r[c] == t) {
                            u = i[c];
                            break
                        }
                    if (!a) {
                        var d;
                        n && (s = n(u, t), (d = "undefined" != typeof s) && (u = s)),
                        d || (
                            u = l
                                ? Gn(u)
                                    ? u
                                    : []
                                : ur(u)
                                    ? u
                                    : {}
                        ),
                        r.push(t),
                        i.push(u),
                        d || ne(u, t, n, r, i)
                    }
                } else 
                    n && (s = n(u, t), "undefined" == typeof s && (s = t)),
                    "undefined" != typeof s && (u = s);
                e[o] = u
            })
        }
        function re(e, t) {
            return e + An(Vn() * (t - e + 1))
        }
        function ie(n, r, i) {
            var a = -1,
                s = se(),
                d = n
                    ? n.length
                    : 0,
                f = [],
                p = !r && d >= g && s === e,
                h = i || p
                    ? l()
                    : f;
            if (p) {
                var m = o(h);
                s = t,
                h = m
            }
            for (; ++a < d;) {
                var y = n[a],
                    v = i
                        ? i(y, a, n)
                        : y;
                (
                    r
                        ? !a || h[h.length - 1] !== v
                        : s(h, v) < 0
                ) && ((i || p) && h.push(v), f.push(y))
            }
            return p
                ? (u(h.array), c(h))
                : i && u(h),
            f
        }
        function oe(e) {
            return function (t, n, r) {
                var i = {};
                n = h.createCallback(n, r, 3);
                var o = -1,
                    a = t
                        ? t.length
                        : 0;
                if ("number" == typeof a) 
                    for (; ++o < a;) {
                        var l = t[o];
                        e(i, l, n(l, o, t), t)
                    }
                else 
                    sr(t, function (t, r, o) {
                        e(i, t, n(t, r, o), o)
                    });
                return i
            }
        }
        function ae(e, t, n, r, i, o) {
            var a = 1 & t,
                l = 2 & t,
                s = 4 & t,
                u = 16 & t,
                c = 32 & t;
            if (!l && !Ye(e)) 
                throw new Pn;
            u && !n.length && (t &= -17, u = n = !1),
            c && !r.length && (t &= -33, c = r = !1);
            var f = e && e.__bindData__;
            if (f && f !== !0) 
                return f = d(f),
                f[2] && (f[2] = d(f[2])),
                f[3] && (f[3] = d(f[3])),
                !a || 1 & f[1] || (f[4] = i),
                !a && 1 & f[1] && (t |= 8),
                !s || 4 & f[1] || (f[5] = o),
                u && Dn.apply(f[2] || (f[2] = []), n),
                c && Mn.apply(f[3] || (f[3] = []), r),
                f[1] |= t,
                ae.apply(null, f);
            var p = 1 == t || 17 === t
                ? b
                : K;
            return p([
                e,
                t,
                n,
                r,
                i,
                o
            ])
        }
        function le(e) {
            return tr[e]
        }
        function se() {
            var t = (t = h.indexOf) === vt
                ? e
                : t;
            return t
        }
        function ue(e) {
            return "function" == typeof e && _n.test(e)
        }
        function ce(e) {
            var t,
                n;
            return !!(
                e && Sn.call(e) == z && (t = e.constructor, !Ye(t) || t instanceof t)
            ) && (lr(e, function (e, t) {
                n = t
            }), "undefined" == typeof n || In.call(e, n))
        }
        function de(e) {
            return nr[e]
        }
        function fe(e) {
            return e && "object" == typeof e && "number" == typeof e.length && Sn.call(e) == I || !1
        }
        function pe(e, t, n, r) {
            return "boolean" != typeof t && null != t && (r = n, n = t, t = !1),
            W(e, t, "function" == typeof n && J(n, r, 1))
        }
        function he(e, t, n) {
            return W(e, !0, "function" == typeof t && J(t, n, 1))
        }
        function me(e, t) {
            var n = X(e);
            return t
                ? or(n, t)
                : n
        }
        function ye(e, t, n) {
            var r;
            return t = h.createCallback(t, n, 3),
            sr(e, function (e, n, i) {
                if (t(e, n, i)) 
                    return r = n,
                    !1
            }),
            r
        }
        function ve(e, t, n) {
            var r;
            return t = h.createCallback(t, n, 3),
            be(e, function (e, n, i) {
                if (t(e, n, i)) 
                    return r = n,
                    !1
            }),
            r
        }
        function ge(e, t, n) {
            var r = [];
            lr(e, function (e, t) {
                r.push(t, e)
            });
            var i = r.length;
            for (t = J(t, n, 3); i-- && t(r[i--], r[i], e) !== !1;) 
            ;
            return e
        }
        function be(e, t, n) {
            var r = er(e),
                i = r.length;
            for (t = J(t, n, 3); i--;) {
                var o = r[i];
                if (t(e[o], o, e) === !1) 
                    break
            }
            return e
        }
        function we(e) {
            var t = [];
            return lr(e, function (e, n) {
                Ye(e) && t.push(n)
            }),
            t.sort()
        }
        function xe(e, t) {
            return !!e && In.call(e, t)
        }
        function Te(e) {
            for (var t = -1, n = er(e), r = n.length, i = {}; ++t < r;) {
                var o = n[t];
                i[e[o]] = o
            }
            return i
        }
        function Pe(e) {
            return e === !0 || e === !1 || e && "object" == typeof e && Sn.call(e) == O || !1
        }
        function ke(e) {
            return e && "object" == typeof e && Sn.call(e) == N || !1;
        }
        function Ce(e) {
            return e && 1 === e.nodeType || !1
        }
        function je(e) {
            var t = !0;
            if (!e) 
                return t;
            var n = Sn.call(e),
                r = e.length;
            return n == D || n == R || n == I || n == z && "number" == typeof r && Ye(
                e.splice
            )
                ? !r
                : (sr(e, function () {
                    return t = !1
                }), t)
        }
        function Se(e, t, n, r) {
            return te(e, t, "function" == typeof n && J(n, r, 2))
        }
        function _e(e) {
            return Rn(e) && !Fn(parseFloat(e))
        }
        function Ye(e) {
            return "function" == typeof e
        }
        function Ee(e) {
            return !(!e || !U[typeof e])
        }
        function Ae(e) {
            return $e(e) && e !=+ e
        }
        function Qe(e) {
            return null === e
        }
        function $e(e) {
            return "number" == typeof e || e && "object" == typeof e && Sn.call(e) == L || !1
        }
        function Ie(e) {
            return e && "object" == typeof e && Sn.call(e) == B || !1
        }
        function De(e) {
            return "string" == typeof e || e && "object" == typeof e && Sn.call(e) == R || !1
        }
        function Oe(e) {
            return "undefined" == typeof e
        }
        function Ne(e, t, n) {
            var r = {};
            return t = h.createCallback(t, n, 3),
            sr(e, function (e, n, i) {
                r[n] = t(e, n, i)
            }),
            r
        }
        function Me(e) {
            var t = arguments,
                n = 2;
            if (!Ee(e)) 
                return e;
            if (
                "number" != typeof t[2] && (n = t.length),
                n > 3 && "function" == typeof t[n - 2]
            ) 
                var r = J(t[--n - 1], t[n--], 2);
            else 
                n > 2 && "function" == typeof t[n - 1] && (r = t[--n]);
            for (var i = d(arguments, 1, n), o = -1, a = l(), s = l(); ++o < n;) 
                ne(e, i[o], r, a, s);
            return u(a),
            u(s),
            e
        }
        function Le(e, t, n) {
            var r = {};
            if ("function" != typeof t) {
                var i = [];
                lr(e, function (e, t) {
                    i.push(t)
                }),
                i = G(i, ee(arguments, !0, !1, 1));
                for (var o = -1, a = i.length; ++o < a;) {
                    var l = i[o];
                    r[l] = e[l]
                }
            } else 
                t = h.createCallback(t, n, 3),
                lr(e, function (e, n, i) {
                    t(e, n, i) || (r[n] = e)
                });
            return r
        }
        function ze(e) {
            for (var t = -1, n = er(e), r = n.length, i = hn(r); ++t < r;) {
                var o = n[t];
                i[t] = [
                    o, e[o]
                ]
            }
            return i
        }
        function Be(e, t, n) {
            var r = {};
            if ("function" != typeof t) 
                for (
                    var i = -1,
                    o = ee(arguments, !0, !1, 1),
                    a = Ee(e)
                        ? o.length
                        : 0; ++i < a;
                ) {
                    var l = o[i];
                    l in e && (r[l] = e[l])
                }
            else 
                t = h.createCallback(t, n, 3),
                lr(e, function (e, n, i) {
                    t(e, n, i) && (r[n] = e)
                });
            return r
        }
        function Re(e, t, n, r) {
            var i = Gn(e);
            if (null == n) 
                if (i) 
                    n = [];
                else {
                    var o = e && e.constructor,
                        a = o && o.prototype;
                    n = X(a)
                }
            return t && (t = h.createCallback(t, r, 4), (
                i
                    ? Je
                    : sr
            )(e, function (e, r, i) {
                return t(n, e, r, i)
            })),
            n
        }
        function Fe(e) {
            for (var t = -1, n = er(e), r = n.length, i = hn(r); ++t < r;) 
                i[t] = e[n[t]];
            return i
        }
        function qe(e) {
            for (
                var t = arguments,
                n = -1,
                r = ee(t, !0, !1, 1),
                i = t[2] && t[2][t[1]] === e
                    ? 1
                    : r.length,
                o = hn(i); ++n < i;
            ) 
                o[n] = e[r[n]];
            return o
        }
        function He(e, t, n) {
            var r = -1,
                i = se(),
                o = e
                    ? e.length
                    : 0,
                a = !1;
            return n = (
                n < 0
                    ? Hn(0, o + n)
                    : n
            ) || 0,
            Gn(e)
                ? a = i(e, t, n) > -1
                : "number" == typeof o
                    ? a = (
                        De(e)
                            ? e.indexOf(t, n)
                            : i(e, t, n)
                    ) > -1
                    : sr(e, function (e) {
                        if (++r >= n) 
                            return !(a = e === t)
                    }),
            a
        }
        function Ue(e, t, n) {
            var r = !0;
            t = h.createCallback(t, n, 3);
            var i = -1,
                o = e
                    ? e.length
                    : 0;
            if ("number" == typeof o) 
                for (; ++i < o && (r = !!t(e[i], i, e));) 
                ;
                else 
                    sr(e, function (e, n, i) {
                        return r = !!t(e, n, i)
                    });
        return r
        }
        function We(e, t, n) {
            var r = [];
            t = h.createCallback(t, n, 3);
            var i = -1,
                o = e
                    ? e.length
                    : 0;
            if ("number" == typeof o) 
                for (; ++i < o;) {
                    var a = e[i];
                    t(a, i, e) && r.push(a)
                }
            else 
                sr(e, function (e, n, i) {
                    t(e, n, i) && r.push(e)
                });
            return r
        }
        function Ve(e, t, n) {
            t = h.createCallback(t, n, 3);
            var r = -1,
                i = e
                    ? e.length
                    : 0;
            if ("number" != typeof i) {
                var o;
                return sr(e, function (e, n, r) {
                    if (t(e, n, r)) 
                        return o = e,
                        !1
                }),
                o
            }
            for (; ++r < i;) {
                var a = e[r];
                if (t(a, r, e)) 
                    return a
            }
        }
        function Xe(e, t, n) {
            var r;
            return t = h.createCallback(t, n, 3),
            Ke(e, function (e, n, i) {
                if (t(e, n, i)) 
                    return r = e,
                    !1
            }),
            r
        }
        function Je(e, t, n) {
            var r = -1,
                i = e
                    ? e.length
                    : 0;
            if (
                t = t && "undefined" == typeof n
                    ? t
                    : J(t, n, 3),
                "number" == typeof i
            ) 
                for (; ++r < i && t(e[r], r, e) !== !1;) 
                ;
                else 
                    sr(e, t);
        return e
        }
        function Ke(e, t, n) {
            var r = e
                ? e.length
                : 0;
            if (
                t = t && "undefined" == typeof n
                    ? t
                    : J(t, n, 3),
                "number" == typeof r
            ) 
                for (; r-- && t(e[r], r, e) !== !1;) 
                ;
                else {
                    var i = er(e);
                    r = i.length,
                    sr(e, function (e, n, o) {
                        return n = i
                            ? i[--r]
                            : --r,
                        t(o[n], n, o)
                    })
                }
            return e
        }
        function Ge(e, t) {
            var n = d(arguments, 2),
                r = -1,
                i = "function" == typeof t,
                o = e
                    ? e.length
                    : 0,
                a = hn(
                    "number" == typeof o
                        ? o
                        : 0
                );
            return Je(e, function (e) {
                a[++r] = (
                    i
                        ? t
                        : e[t]
                ).apply(e, n)
            }),
            a
        }
        function Ze(e, t, n) {
            var r = -1,
                i = e
                    ? e.length
                    : 0;
            if (t = h.createCallback(t, n, 3), "number" == typeof i) 
                for (var o = hn(i); ++r < i;) 
                    o[r] = t(e[r], r, e);
        else 
                o = [],
                sr(e, function (e, n, i) {
                    o[++r] = t(e, n, i)
                });
            return o
        }
        function et(e, t, n) {
            var i = -(1 / 0),
                o = i;
            if (
                "function" != typeof t && n && n[t] === e && (t = null),
                null == t && Gn(e)
            ) 
                for (var a = -1, l = e.length; ++a < l;) {
                    var s = e[a];
                    s > o && (o = s)
                }
            else 
                t = null == t && De(e)
                    ? r
                    : h.createCallback(t, n, 3),
                Je(e, function (e, n, r) {
                    var a = t(e, n, r);
                    a > i && (i = a, o = e)
                });
            return o
        }
        function tt(e, t, n) {
            var i = 1 / 0,
                o = i;
            if (
                "function" != typeof t && n && n[t] === e && (t = null),
                null == t && Gn(e)
            ) 
                for (var a = -1, l = e.length; ++a < l;) {
                    var s = e[a];
                    s < o && (o = s)
                }
            else 
                t = null == t && De(e)
                    ? r
                    : h.createCallback(t, n, 3),
                Je(e, function (e, n, r) {
                    var a = t(e, n, r);
                    a < i && (i = a, o = e)
                });
            return o
        }
        function nt(e, t, n, r) {
            if (!e) 
                return n;
            var i = arguments.length < 3;
            t = h.createCallback(t, r, 4);
            var o = -1,
                a = e.length;
            if ("number" == typeof a) 
                for (i && (n = e[++o]); ++o < a;) 
                    n = t(n, e[o], o, e);
        else 
                sr(e, function (e, r, o) {
                    n = i
                        ? (i = !1, e)
                        : t(n, e, r, o)
                });
            return n
        }
        function rt(e, t, n, r) {
            var i = arguments.length < 3;
            return t = h.createCallback(t, r, 4),
            Ke(e, function (e, r, o) {
                n = i
                    ? (i = !1, e)
                    : t(n, e, r, o)
            }),
            n
        }
        function it(e, t, n) {
            return t = h.createCallback(t, n, 3),
            We(e, function (e, n, r) {
                return !t(e, n, r)
            })
        }
        function ot(e, t, n) {
            if (e && "number" != typeof e.length && (e = Fe(e)), null == t || n) 
                return e
                    ? e[re(0, e.length - 1)]
                    : p;
            var r = at(e);
            return r.length = Un(Hn(0, t), r.length),
            r
        }
        function at(e) {
            var t = -1,
                n = e
                    ? e.length
                    : 0,
                r = hn(
                    "number" == typeof n
                        ? n
                        : 0
                );
            return Je(e, function (e) {
                var n = re(0, ++t);
                r[t] = r[n],
                r[n] = e
            }),
            r
        }
        function lt(e) {
            var t = e
                ? e.length
                : 0;
            return "number" == typeof t
                ? t
                : er(e).length
        }
        function st(e, t, n) {
            var r;
            t = h.createCallback(t, n, 3);
            var i = -1,
                o = e
                    ? e.length
                    : 0;
            if ("number" == typeof o) 
                for (; ++i < o && !(r = t(e[i], i, e));) 
                ;
                else 
                    sr(e, function (e, n, i) {
                        return !(r = t(e, n, i))
                    });
        return !!r
        }
        function ut(e, t, n) {
            var r = -1,
                o = Gn(t),
                a = e
                    ? e.length
                    : 0,
                d = hn(
                    "number" == typeof a
                        ? a
                        : 0
                );
            for (
                o || (t = h.createCallback(t, n, 3)),
                Je(e, function (e, n, i) {
                    var a = d[++r] = s();
                    o
                        ? a.criteria = Ze(t, function (t) {
                            return e[t]
                        })
                        : (a.criteria = l())[0] = t(e, n, i),
                    a.index = r,
                    a.value = e
                }),
                a = d.length,
                d.sort(i); a--;
            ) {
                var f = d[a];
                d[a] = f.value,
                o || u(f.criteria),
                c(f)
            }
            return d
        }
        function ct(e) {
            return e && "number" == typeof e.length
                ? d(e)
                : Fe(e)
        }
        function dt(e) {
            for (
                var t = -1,
                n = e
                    ? e.length
                    : 0,
                r = []; ++t < n;
            ) {
                var i = e[t];
                i && r.push(i)
            }
            return r
        }
        function ft(e) {
            return G(e, ee(arguments, !0, !0, 1))
        }
        function pt(e, t, n) {
            var r = -1,
                i = e
                    ? e.length
                    : 0;
            for (t = h.createCallback(t, n, 3); ++r < i;) 
                if (t(e[r], r, e)) 
                    return r;
        return -1
        }
        function ht(e, t, n) {
            var r = e
                ? e.length
                : 0;
            for (t = h.createCallback(t, n, 3); r--;) 
                if (t(e[r], r, e)) 
                    return r;
        return -1
        }
        function mt(e, t, n) {
            var r = 0,
                i = e
                    ? e.length
                    : 0;
            if ("number" != typeof t && null != t) {
                var o = -1;
                for (t = h.createCallback(t, n, 3); ++o < i && t(e[o], o, e);) 
                    r++
            } else if (r = t, null == r || n) 
                return e
                    ? e[0]
                    : p;
            return d(e, 0, Un(Hn(0, r), i))
        }
        function yt(e, t, n, r) {
            return "boolean" != typeof t && null != t && (
                r = n,
                n = "function" != typeof t && r && r[t] === e
                    ? null
                    : t,
                t = !1
            ),
            null != n && (e = Ze(e, n, r)),
            ee(e, t)
        }
        function vt(t, n, r) {
            if ("number" == typeof r) {
                var i = t
                    ? t.length
                    : 0;
                r = r < 0
                    ? Hn(0, i + r)
                    : r || 0
            } else if (r) {
                var o = jt(t, n);
                return t[o] === n
                    ? o
                    : -1
            }
            return e(t, n, r)
        }
        function gt(e, t, n) {
            var r = 0,
                i = e
                    ? e.length
                    : 0;
            if ("number" != typeof t && null != t) {
                var o = i;
                for (t = h.createCallback(t, n, 3); o-- && t(e[o], o, e);) 
                    r++
            } else 
                r = null == t || n
                    ? 1
                    : t || r;
            return d(e, 0, Un(Hn(0, i - r), i))
        }
        function bt() {
            for (
                var n = [],
                r = -1,
                i = arguments.length,
                a = l(),
                s = se(),
                d = s === e,
                f = l();
                ++r < i;
            ) {
                var p = arguments[r];
                (Gn(p) || fe(p)) && (n.push(p), a.push(d && p.length >= g && o(
                    r
                        ? n[r]
                        : f
                )))
            }
            var h = n[0],
                m = -1,
                y = h
                    ? h.length
                    : 0,
                v = [];
            e : for (; ++m < y;) {
                var b = a[0];
                if (p = h[m], (
                    b
                        ? t(b, p)
                        : s(f, p)
                ) < 0) {
                    for (r = i, (b || f).push(p); --r;) 
                        if (b = a[r], (
                            b
                                ? t(b, p)
                                : s(n[r], p)
                        ) < 0) 
                            continue e;
                v.push(p)
                }
            }
            for (; i--;) 
                b = a[i],
                b && c(b);
            return u(a),
            u(f),
            v
        }
        function wt(e, t, n) {
            var r = 0,
                i = e
                    ? e.length
                    : 0;
            if ("number" != typeof t && null != t) {
                var o = i;
                for (t = h.createCallback(t, n, 3); o-- && t(e[o], o, e);) 
                    r++
            } else if (r = t, null == r || n) 
                return e
                    ? e[i - 1]
                    : p;
            return d(e, Hn(0, i - r))
        }
        function xt(e, t, n) {
            var r = e
                ? e.length
                : 0;
            for ("number" == typeof n && (r = (
                n < 0
                    ? Hn(0, r + n)
                    : Un(n, r - 1)
            ) + 1); r--;) 
                if (e[r] === t) 
                    return r;
        return -1
        }
        function Tt(e) {
            for (
                var t = arguments,
                n = 0,
                r = t.length,
                i = e
                    ? e.length
                    : 0; ++n < r;
            ) 
                for (var o = -1, a = t[n]; ++o < i;) 
                    e[o] === a && (Nn.call(e, o--, 1), i--);
        return e
        }
        function Pt(e, t, n) {
            e = +e || 0,
            n = "number" == typeof n
                ? n
                : +n || 1,
            null == t && (t = e, e = 0);
            for (var r = -1, i = Hn(0, Yn((t - e) / (n || 1))), o = hn(i); ++r < i;) 
                o[r] = e,
                e += n;
            return o
        }
        function kt(e, t, n) {
            var r = -1,
                i = e
                    ? e.length
                    : 0,
                o = [];
            for (t = h.createCallback(t, n, 3); ++r < i;) {
                var a = e[r];
                t(a, r, e) && (o.push(a), Nn.call(e, r--, 1), i--)
            }
            return o
        }
        function Ct(e, t, n) {
            if ("number" != typeof t && null != t) {
                var r = 0,
                    i = -1,
                    o = e
                        ? e.length
                        : 0;
                for (t = h.createCallback(t, n, 3); ++i < o && t(e[i], i, e);) 
                    r++
            } else 
                r = null == t || n
                    ? 1
                    : Hn(0, t);
            return d(e, r)
        }
        function jt(e, t, n, r) {
            var i = 0,
                o = e
                    ? e.length
                    : i;
            for (
                n = n
                    ? h.createCallback(n, r, 1)
                    : Kt,
                t = n(t); i < o;
            ) {
                var a = i + o >>> 1;
                n(e[a]) < t
                    ? i = a + 1
                    : o = a
            }
            return i
        }
        function St() {
            return ie(ee(arguments, !0, !0))
        }
        function _t(e, t, n, r) {
            return "boolean" != typeof t && null != t && (
                r = n,
                n = "function" != typeof t && r && r[t] === e
                    ? null
                    : t,
                t = !1
            ),
            null != n && (n = h.createCallback(n, r, 3)),
            ie(e, t, n)
        }
        function Yt(e) {
            return G(e, d(arguments, 1))
        }
        function Et() {
            for (var e = -1, t = arguments.length; ++e < t;) {
                var n = arguments[e];
                if (Gn(n) || fe(n)) 
                    var r = r
                        ? ie(G(r, n).concat(G(n, r)))
                        : n
                }
            return r || []
        }
        function At() {
            for (
                var e = arguments.length > 1
                    ? arguments
                    : arguments[0],
                t = -1,
                n = e
                    ? et(pr(e, "length"))
                    : 0,
                r = hn(
                    n < 0
                        ? 0
                        : n
                ); ++t < n;
            ) 
                r[t] = pr(e, t);
            return r
        }
        function Qt(e, t) {
            var n = -1,
                r = e
                    ? e.length
                    : 0,
                i = {};
            for (t || !r || Gn(e[0]) || (t = []); ++n < r;) {
                var o = e[n];
                t
                    ? i[o] = t[n]
                    : o && (i[o[0]] = o[1])
            }
            return i
        }
        function $t(e, t) {
            if (!Ye(t)) 
                throw new Pn;
            return function () {
                if (--e < 1) 
                    return t.apply(this, arguments)
            }
        }
        function It(e, t) {
            return arguments.length > 2
                ? ae(e, 17, d(arguments, 2), null, t)
                : ae(e, 1, null, null, t)
        }
        function Dt(e) {
            for (
                var t = arguments.length > 1
                    ? ee(arguments, !0, !1, 1)
                    : we(e),
                n = -1,
                r = t.length; ++n < r;
            ) {
                var i = t[n];
                e[i] = ae(e[i], 1, null, null, e)
            }
            return e
        }
        function Ot(e, t) {
            return arguments.length > 2
                ? ae(t, 19, d(arguments, 2), null, e)
                : ae(t, 3, null, null, e)
        }
        function Nt() {
            for (var e = arguments, t = e.length; t--;) 
                if (!Ye(e[t])) 
                    throw new Pn;
        return function () {
                for (var t = arguments, n = e.length; n--;) 
                    t = [e[n].apply(this, t)];
                return t[0]
            }
        }
        function Mt(e, t) {
            return t = "number" == typeof t
                ? t
                : +t || e.length,
            ae(e, 4, null, null, null, t)
        }
        function Lt(e, t, n) {
            var r,
                i,
                o,
                a,
                l,
                s,
                u,
                c = 0,
                d = !1,
                f = !0;
            if (!Ye(e)) 
                throw new Pn;
            if (t = Hn(0, t) || 0, n === !0) {
                var h = !0;
                f = !1
            } else 
                Ee(n) && (
                    h = n.leading,
                    d = "maxWait" in n && (Hn(t, n.maxWait) || 0),
                    f = "trailing" in n
                        ? n.trailing
                        : f
                );
            var m = function () {
                    var n = t - (mr() - a);
                    if (n <= 0) {
                        i && En(i);
                        var d = u;
                        i = s = u = p,
                        d && (c = mr(), o = e.apply(l, r), s || i || (r = l = null))
                    } else 
                        s = On(m, n)
                },
                y = function () {
                    s && En(s),
                    i = s = u = p,
                    (f || d !== t) && (c = mr(), o = e.apply(l, r), s || i || (r = l = null))
                };
            return function () {
                if (r = arguments, a = mr(), l = this, u = f && (s || !h), d === !1) 
                    var n = h && !s;
                else {
                    i || h || (c = a);
                    var p = d - (a - c),
                        v = p <= 0;
                    v
                        ? (i && (i = En(i)), c = a, o = e.apply(l, r))
                        : i || (i = On(y, p))
                }
                return v && s
                    ? s = En(s)
                    : s || t === d || (s = On(m, t)),
                n && (v = !0, o = e.apply(l, r)),
                !v || s || i || (r = l = null),
                o
            }
        }
        function zt(e) {
            if (!Ye(e)) 
                throw new Pn;
            var t = d(arguments, 1);
            return On(function () {
                e.apply(p, t)
            }, 1)
        }
        function Bt(e, t) {
            if (!Ye(e)) 
                throw new Pn;
            var n = d(arguments, 2);
            return On(function () {
                e.apply(p, n)
            }, t)
        }
        function Rt(e, t) {
            if (!Ye(e)) 
                throw new Pn;
            var n = function () {
                var r = n.cache,
                    i = t
                        ? t.apply(this, arguments)
                        : v + arguments[0];
                return In.call(r, i)
                    ? r[i]
                    : r[i] = e.apply(this, arguments)
            };
            return n.cache = {},
            n
        }
        function Ft(e) {
            var t,
                n;
            if (!Ye(e)) 
                throw new Pn;
            return function () {
                return t
                    ? n
                    : (t = !0, n = e.apply(this, arguments), e = null, n)
            }
        }
        function qt(e) {
            return ae(e, 16, d(arguments, 1))
        }
        function Ht(e) {
            return ae(e, 32, null, d(arguments, 1))
        }
        function Ut(e, t, n) {
            var r = !0,
                i = !0;
            if (!Ye(e)) 
                throw new Pn;
            return n === !1
                ? r = !1
                : Ee(n) && (
                    r = "leading" in n
                        ? n.leading
                        : r,
                    i = "trailing" in n
                        ? n.trailing
                        : i
                ),
            q.leading = r,
            q.maxWait = t,
            q.trailing = i,
            Lt(e, t, q)
        }
        function Wt(e, t) {
            return ae(t, 16, [e])
        }
        function Vt(e) {
            return function () {
                return e
            }
        }
        function Xt(e, t, n) {
            var r = typeof e;
            if (null == e || "function" == r) 
                return J(e, t, n);
            if ("object" != r) 
                return tn(e);
            var i = er(e),
                o = i[0],
                a = e[o];
            return 1 != i.length || a !== a || Ee(a)
                ? function (t) {
                    for (var n = i.length, r = !1; n = &&(r = te(t[i[n]], e[i[n]], null, !0)) + 1;) 
                    ;
                    return r
                }
                : function (e) {
                    var t = e[o];
                    return a === t && (0 !== a || 1 / a == 1 / t)
                }
        }
        function Jt(e) {
            return null == e
                ? ""
                : Tn(e).replace(ir, le)
        }
        function Kt(e) {
            return e
        }
        function Gt(e, t, n) {
            var r = !0,
                i = t && we(t);
            t && (n || i.length) || (null == n && (n = t), o = m, t = e, e = h, i = we(t)),
            n === !1
                ? r = !1
                : Ee(n) && "chain" in n && (r = n.chain);
            var o = e,
                a = Ye(o);
            Je(i, function (n) {
                var i = e[n] = t[n];
                a && (o.prototype[n] = function () {
                    var t = this.__chain__,
                        n = this.__wrapped__,
                        a = [n];
                    Dn.apply(a, arguments);
                    var l = i.apply(e, a);
                    if (r || t) {
                        if (n === l && Ee(l)) 
                            return this;
                        l = new o(l),
                        l.__chain__ = t
                    }
                    return l
                })
            })
        }
        function Zt() {
            return n._ = jn,
            this
        }
        function en() {}
        function tn(e) {
            return function (t) {
                return t[e]
            }
        }
        function nn(e, t, n) {
            var r = null == e,
                i = null == t;
            if (
                null == n && (
                    "boolean" == typeof e && i
                        ? (n = e, e = 1)
                        : i || "boolean" != typeof t || (n = t, i = !0)
                ),
                r && i && (t = 1),
                e = +e || 0,
                i
                    ? (t = e, e = 0)
                    : t = +t || 0,
                n || e % 1 || t % 1
            ) {
                var o = Vn();
                return Un(e + o * (t - e + parseFloat("1e-" + (
                    (o + "").length - 1
                ))), t)
            }
            return re(e, t)
        }
        function rn(e, t) {
            if (e) {
                var n = e[t];
                return Ye(n)
                    ? e[t]()
                    : n
            }
        }
        function on(e, t, n) {
            var r = h.templateSettings;
            e = Tn(e || ""),
            n = ar({}, n, r);
            var i,
                o = ar({}, n.imports, r.imports),
                l = er(o),
                s = Fe(o),
                u = 0,
                c = n.interpolate || Y,
                d = "__p += '",
                f = xn((n.escape || Y).source + "|" + c.source + "|" + (
                    c === S
                        ? k
                        : Y
                ).source + "|" + (
                    n.evaluate || Y
                ).source + "|$", "g");
            e.replace(f, function (t, n, r, o, l, s) {
                return r || (r = o),
                d += e
                    .slice(u, s)
                    .replace(A, a),
                n && (d += "' +\n__e(" + n + ") +\n'"),
                l && (i = !0, d += "';\n" + l + ";\n__p += '"),
                r && (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                u = s + t.length,
                t
            }),
            d += "';\n";
            var m = n.variable,
                y = m;
            y || (m = "obj", d = "with (" + m + ") {\n" + d + "\n}\n"),
            d = (
                i
                    ? d.replace(x, "")
                    : d
            )
                .replace(T, "$1")
                .replace(P, "$1;"),
            d = "function(" + m + ") {\n" + (
                y
                    ? ""
                    : m + " || (" + m + " = {});\n"
            ) + "var __t, __p = '', __e = _.escape" + (
                i
                    ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '" +
                            "') }\n"
                    : ";\n"
            ) + d + "return __p\n}";
            var v = "\n/*\n//# sourceURL=" + (
                n.sourceURL || "/lodash/template/source[" + $++ + "]"
            ) + "\n*/";
            try {
                var g = vn(l, "return " + d + v).apply(p, s)
            } catch (b) {
                throw b.source = d,
                b
            }
            return t
                ? g(t)
                : (g.source = d, g)
        }
        function an(e, t, n) {
            e = (e = +e) > -1
                ? e
                : 0;
            var r = -1,
                i = hn(e);
            for (t = J(t, n, 1); ++r < e;) 
                i[r] = t(r);
            return i
        }
        function ln(e) {
            return null == e
                ? ""
                : Tn(e).replace(rr, de)
        }
        function sn(e) {
            var t = ++y;
            return Tn(
                null == e
                    ? ""
                    : e
            ) + t
        }
        function un(e) {
            return e = new m(e),
            e.__chain__ = !0,
            e
        }
        function cn(e, t) {
            return t(e),
            e
        }
        function dn() {
            return this.__chain__ = !0,
            this
        }
        function fn() {
            return Tn(this.__wrapped__)
        }
        function pn() {
            return this.__wrapped__
        }
        n = n
            ? Z.defaults(V.Object(), n, Z.pick(V, Q))
            : V;
        var hn = n.Array,
            mn = n.Boolean,
            yn = n.Date,
            vn = n.Function,
            gn = n.Math,
            bn = n.Number,
            wn = n.Object,
            xn = n.RegExp,
            Tn = n.String,
            Pn = n.TypeError,
            kn = [],
            Cn = wn.prototype,
            jn = n._,
            Sn = Cn.toString,
            _n = xn(
                "^" + Tn(Sn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") +
                "$"
            ),
            Yn = gn.ceil,
            En = n.clearTimeout,
            An = gn.floor,
            Qn = vn.prototype.toString,
            $n = ue($n = wn.getPrototypeOf) && $n,
            In = Cn.hasOwnProperty,
            Dn = kn.push,
            On = n.setTimeout,
            Nn = kn.splice,
            Mn = kn.unshift,
            Ln = function () {
                try {
                    var e = {},
                        t = ue(t = wn.defineProperty) && t,
                        n = t(e, e, e) && t
                } catch (r) {}
                return n
            }(),
            zn = ue(zn = wn.create) && zn,
            Bn = ue(Bn = hn.isArray) && Bn,
            Rn = n.isFinite,
            Fn = n.isNaN,
            qn = ue(qn = wn.keys) && qn,
            Hn = gn.max,
            Un = gn.min,
            Wn = n.parseInt,
            Vn = gn.random,
            Xn = {};
        Xn[D] = hn,
        Xn[O] = mn,
        Xn[N] = yn,
        Xn[M] = vn,
        Xn[z] = wn,
        Xn[L] = bn,
        Xn[B] = xn,
        Xn[R] = Tn,
        m.prototype = h.prototype;
        var Jn = h.support = {};
        Jn.funcDecomp = !ue(n.WinRTError) && E.test(f),
        Jn.funcNames = "string" == typeof vn.name,
        h.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: S,
            variable: "",
            imports: {
                _: h
            }
        },
        zn || (X = function () {
            function e() {}
            return function (t) {
                if (Ee(t)) {
                    e.prototype = t;
                    var r = new e;
                    e.prototype = null
                }
                return r || n.Object()
            }
        }());
        var Kn = Ln
                ? function (e, t) {
                    H.value = t,
                    Ln(e, "__bindData__", H)
                }
                : en,
            Gn = Bn || function (e) {
                return e && "object" == typeof e && "number" == typeof e.length && Sn.call(e) == D || !1
            },
            Zn = function (e) {
                var t,
                    n = e,
                    r = [];
                if (!n) 
                    return r;
                if (!U[typeof e]) 
                    return r;
                for (t in n) 
                    In.call(n, t) && r.push(t);
                return r
            },
            er = qn
                ? function (e) {
                    return Ee(e)
                        ? qn(e)
                        : []
                }
                : Zn,
            tr = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            nr = Te(tr),
            rr = xn("(" + er(nr).join("|") + ")", "g"),
            ir = xn("[" + er(tr).join("") + "]", "g"),
            or = function (e, t, n) {
                var r,
                    i = e,
                    o = i;
                if (!i) 
                    return o;
                var a = arguments,
                    l = 0,
                    s = "number" == typeof n
                        ? 2
                        : a.length;
                if (s > 3 && "function" == typeof a[s - 2]) 
                    var u = J(a[--s - 1], a[s--], 2);
                else 
                    s > 2 && "function" == typeof a[s - 1] && (u = a[--s]);
                for (; ++l < s;) 
                    if (i = a[l], i && U[typeof i]) 
                        for (
                            var c = -1,
                            d = U[typeof i] && er(i),
                            f = d
                                ? d.length
                                : 0; ++c < f;
                        ) 
                            r = d[c],
                            o[r] = u
                                ? u(o[r], i[r])
                                : i[r];
                return o
            },
            ar = function (e, t, n) {
                var r,
                    i = e,
                    o = i;
                if (!i) 
                    return o;
                for (
                    var a = arguments,
                    l = 0,
                    s = "number" == typeof n
                        ? 2
                        : a.length; ++l < s;
                ) 
                    if (i = a[l], i && U[typeof i]) 
                        for (
                            var u = -1,
                            c = U[typeof i] && er(i),
                            d = c
                                ? c.length
                                : 0; ++u < d;
                        ) 
                            r = c[u],
                            "undefined" == typeof o[r] && (o[r] = i[r]);
            return o
            },
            lr = function (e, t, n) {
                var r,
                    i = e,
                    o = i;
                if (!i) 
                    return o;
                if (!U[typeof i]) 
                    return o;
                t = t && "undefined" == typeof n
                    ? t
                    : J(t, n, 3);
                for (r in i) 
                    if (t(i[r], r, e) === !1) 
                        return o;
            return o
            },
            sr = function (e, t, n) {
                var r,
                    i = e,
                    o = i;
                if (!i) 
                    return o;
                if (!U[typeof i]) 
                    return o;
                t = t && "undefined" == typeof n
                    ? t
                    : J(t, n, 3);
                for (
                    var a = -1,
                    l = U[typeof i] && er(i),
                    s = l
                        ? l.length
                        : 0; ++a < s;
                ) 
                    if (r = l[a], t(i[r], r, e) === !1) 
                        return o;
            return o
            },
            ur = $n
                ? function (e) {
                    if (!e || Sn.call(e) != z) 
                        return !1;
                    var t = e.valueOf,
                        n = ue(t) && (n = $n(t)) && $n(n);
                    return n
                        ? e == n || $n(e) == n
                        : ce(e)
                }
                : ce,
            cr = oe(function (e, t, n) {
                In.call(e, n)
                    ? e[n]++
                    : e[n] = 1
            }),
            dr = oe(function (e, t, n) {
                (
                    In.call(e, n)
                        ? e[n]
                        : e[n] = []
                ).push(t)
            }),
            fr = oe(function (e, t, n) {
                e[n] = t
            }),
            pr = Ze,
            hr = We,
            mr = ue(mr = yn.now) && mr || function () {
                return (new yn).getTime()
            },
            yr = 8 == Wn(w + "08")
                ? Wn
                : function (e, t) {
                    return Wn(
                        De(e)
                            ? e.replace(_, "")
                            : e,
                        t || 0
                    )
                };
        return h.after = $t,
        h.assign = or,
        h.at = qe,
        h.bind = It,
        h.bindAll = Dt,
        h.bindKey = Ot,
        h.chain = un,
        h.compact = dt,
        h.compose = Nt,
        h.constant = Vt,
        h.countBy = cr,
        h.create = me,
        h.createCallback = Xt,
        h.curry = Mt,
        h.debounce = Lt,
        h.defaults = ar,
        h.defer = zt,
        h.delay = Bt,
        h.difference = ft,
        h.filter = We,
        h.flatten = yt,
        h.forEach = Je,
        h.forEachRight = Ke,
        h.forIn = lr,
        h.forInRight = ge,
        h.forOwn = sr,
        h.forOwnRight = be,
        h.functions = we,
        h.groupBy = dr,
        h.indexBy = fr,
        h.initial = gt,
        h.intersection = bt,
        h.invert = Te,
        h.invoke = Ge,
        h.keys = er,
        h.map = Ze,
        h.mapValues = Ne,
        h.max = et,
        h.memoize = Rt,
        h.merge = Me,
        h.min = tt,
        h.omit = Le,
        h.once = Ft,
        h.pairs = ze,
        h.partial = qt,
        h.partialRight = Ht,
        h.pick = Be,
        h.pluck = pr,
        h.property = tn,
        h.pull = Tt,
        h.range = Pt,
        h.reject = it,
        h.remove = kt,
        h.rest = Ct,
        h.shuffle = at,
        h.sortBy = ut,
        h.tap = cn,
        h.throttle = Ut,
        h.times = an,
        h.toArray = ct,
        h.transform = Re,
        h.union = St,
        h.uniq = _t,
        h.values = Fe,
        h.where = hr,
        h.without = Yt,
        h.wrap = Wt,
        h.xor = Et,
        h.zip = At,
        h.zipObject = Qt,
        h.collect = Ze,
        h.drop = Ct,
        h.each = Je,
        h.eachRight = Ke,
        h.extend = or,
        h.methods = we,
        h.object = Qt,
        h.select = We,
        h.tail = Ct,
        h.unique = _t,
        h.unzip = At,
        Gt(h),
        h.clone = pe,
        h.cloneDeep = he,
        h.contains = He,
        h.escape = Jt,
        h.every = Ue,
        h.find = Ve,
        h.findIndex = pt,
        h.findKey = ye,
        h.findLast = Xe,
        h.findLastIndex = ht,
        h.findLastKey = ve,
        h.has = xe,
        h.identity = Kt,
        h.indexOf = vt,
        h.isArguments = fe,
        h.isArray = Gn,
        h.isBoolean = Pe,
        h.isDate = ke,
        h.isElement = Ce,
        h.isEmpty = je,
        h.isEqual = Se,
        h.isFinite = _e,
        h.isFunction = Ye,
        h.isNaN = Ae,
        h.isNull = Qe,
        h.isNumber = $e,
        h.isObject = Ee,
        h.isPlainObject = ur,
        h.isRegExp = Ie,
        h.isString = De,
        h.isUndefined = Oe,
        h.lastIndexOf = xt,
        h.mixin = Gt,
        h.noConflict = Zt,
        h.noop = en,
        h.now = mr,
        h.parseInt = yr,
        h.random = nn,
        h.reduce = nt,
        h.reduceRight = rt,
        h.result = rn,
        h.runInContext = f,
        h.size = lt,
        h.some = st,
        h.sortedIndex = jt,
        h.template = on,
        h.unescape = ln,
        h.uniqueId = sn,
        h.all = Ue,
        h.any = st,
        h.detect = Ve,
        h.findWhere = Ve,
        h.foldl = nt,
        h.foldr = rt,
        h.include = He,
        h.inject = nt,
        Gt(function () {
            var e = {};
            return sr(h, function (t, n) {
                h.prototype[n] || (e[n] = t)
            }),
            e
        }(), !1),
        h.first = mt,
        h.last = wt,
        h.sample = ot,
        h.take = mt,
        h.head = mt,
        sr(h, function (e, t) {
            var n = "sample" !== t;
            h.prototype[t] || (h.prototype[t] = function (t, r) {
                var i = this.__chain__,
                    o = e(this.__wrapped__, t, r);
                return i || null != t && (!r || n && "function" == typeof t)
                    ? new m(o, i)
                    : o
            })
        }),
        h.VERSION = "2.4.1",
        h.prototype.chain = dn,
        h.prototype.toString = fn,
        h.prototype.value = pn,
        h.prototype.valueOf = pn,
        Je([
            "join", "pop", "shift"
        ], function (e) {
            var t = kn[e];
            h.prototype[e] = function () {
                var e = this.__chain__,
                    n = t.apply(this.__wrapped__, arguments);
                return e
                    ? new m(n, e)
                    : n
            }
        }),
        Je([
            "push", "reverse", "sort", "unshift"
        ], function (e) {
            var t = kn[e];
            h.prototype[e] = function () {
                return t.apply(this.__wrapped__, arguments),
                this
            }
        }),
        Je([
            "concat", "slice", "splice"
        ], function (e) {
            var t = kn[e];
            h.prototype[e] = function () {
                return new m(t.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }),
        h
    }
    var p,
        h = [],
        m = [],
        y = 0,
        v = +new Date + "",
        g = 75,
        b = 40,
        w = " \t\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　",
        x = /\b__p \+= '';/g,
        T = /\b(__p \+=) '' \+/g,
        P = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        k = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        C = /\w*$/,
        j = /^\s*function[ \n\r\t]+\w/,
        S = /<%=([\s\S]+?)%>/g,
        _ = RegExp("^[" + w + "]*0+(?=.$)"),
        Y = /($^)/,
        E = /\bthis\b/,
        A = /['\n\r\t\u2028\u2029\\]/g,
        Q = [
            "Array",
            "Boolean",
            "Date",
            "Function",
            "Math",
            "Number",
            "Object",
            "RegExp",
            "String",
            "_",
            "attachEvent",
            "clearTimeout",
            "isFinite",
            "isNaN",
            "parseInt",
            "setTimeout"
        ],
        $ = 0,
        I = "[object Arguments]",
        D = "[object Array]",
        O = "[object Boolean]",
        N = "[object Date]",
        M = "[object Function]",
        L = "[object Number]",
        z = "[object Object]",
        B = "[object RegExp]",
        R = "[object String]",
        F = {};
    F[M] = !1,
    F[I] = F[D] = F[O] = F[N] = F[L] = F[z] = F[B] = F[R] = !0;
    var q = {
            leading: !1,
            maxWait: 0,
            trailing: !1
        },
        H = {
            configurable: !1,
            enumerable: !1,
            value: null,
            writable: !1
        },
        U = {
            "boolean": !1,
            "function": !0,
            object: !0,
            number: !1,
            string: !1,
            undefined: !1
        },
        W = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        V = U[typeof window] && window || this,
        X = U[typeof exports] && exports && !exports.nodeType && exports,
        J = U[typeof module] && module && !module.nodeType && module,
        K = J && J.exports === X && X,
        G = U[typeof global] && global;
    !G || G.global !== G && G.window !== G || (V = G);
    var Z = f();
    "function" == typeof define && "object" == typeof define.amd && define.amd
        ? (V._ = Z, define(function () {
            return Z
        }))
        : X && J
            ? K
                ? (J.exports = Z)._ = Z
                : X._ = Z
            : V._ = Z
}.call(this),
window.Modernizr = function (e, t, n) {
    function r(e) {
        v.cssText = e
    }
    function i(e, t) {
        return typeof e === t
    }
    function o(e, t) {
        return ! !~ ("" + e).indexOf(t)
    }
    function a(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!o(i, "-") && v[i] !== n) 
                return "pfx" != t || i
        }
        return !1
    }
    function l(e, t, r) {
        for (var o in e) {
            var a = t[e[o]];
            if (a !== n) 
                return r === !1
                    ? e[o]
                    : i(a, "function")
                        ? a.bind(r || t)
                        : a
                }
        return !1
    }
    function s(e, t, n) {
        var r = e
                .charAt(0)
                .toUpperCase() + e.slice(1),
            o = (e + " " + b.join(r + " ") + r).split(" ");
        return i(t, "string") || i(t, "undefined")
            ? a(o, t)
            : (o = (e + " " + w.join(r + " ") + r).split(" "), l(o, t, n))
    }
    var u,
        c,
        d,
        f = "2.8.3",
        p = {},
        h = t.documentElement,
        m = "modernizr",
        y = t.createElement(m),
        v = y.style,
        g = ({}.toString, "Webkit Moz O ms"),
        b = g.split(" "),
        w = g
            .toLowerCase()
            .split(" "),
        x = {},
        T = [],
        P = T.slice,
        k = {}.hasOwnProperty;
    d = i(k, "undefined") || i(k.call, "undefined")
        ? function (e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        }
        : function (e, t) {
            return k.call(e, t)
        },
    Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) 
            throw new TypeError;
        var n = P.call(arguments, 1),
            r = function () {
                if (this instanceof r) {
                    var i = function () {};
                    i.prototype = t.prototype;
                    var o = new i,
                        a = t.apply(o, n.concat(P.call(arguments)));
                    return Object(a) === a
                        ? a
                        : o
                }
                return t.apply(e, n.concat(P.call(arguments)))
            };
        return r
    }),
    x.cssanimations = function () {
        return s("animationName")
    };
    for (var C in x) 
        d(x, C) && (c = C.toLowerCase(), p[c] = x[C](), T.push((
            p[c]
                ? ""
                : "no-"
        ) + c));
    return p.addTest = function (e, t) {
        if ("object" == typeof e) 
            for (var r in e) 
                d(e, r) && p.addTest(r, e[r]);
            else {
                if (e = e.toLowerCase(), p[e] !== n) 
                    return p;
        t = "function" == typeof t
                ? t()
                : t,
            "undefined" != typeof enableClasses && enableClasses && (h.className += " " + (
                t
                    ? ""
                    : "no-"
            ) + e),
            p[e] = t
        }
        return p
    },
    r(""),
    y = u = null,
    p._version = f,
    p._domPrefixes = w,
    p._cssomPrefixes = b,
    p.testProp = function (e) {
        return a([e])
    },
    p.testAllProps = s,
    p
}(this, this.document), + function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = n,
        this.$element = e(t),
        this.$backdrop = this.isShown = null,
        this.options.remote && this
            .$element
            .find(".modal-content")
            .load(this.options.remote, e.proxy(function () {
                this
                    .$element
                    .trigger("loaded.bs.modal")
            }, this))
    };
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    t.prototype.toggle = function (e) {
        return this[
            this.isShown
                ? "hide"
                : "show"
        ](e)
    },
    t.prototype.show = function (t) {
        var n = this,
            r = e.Event("show.bs.modal", {relatedTarget: t});
        this
            .$element
            .trigger(r),
        this.isShown || r.isDefaultPrevented() || (
            this.isShown = !0,
            this.escape(),
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
            this.backdrop(function () {
                var r = e.support.transition && n
                    .$element
                    .hasClass("fade");
                n
                    .$element
                    .parent()
                    .length || n
                    .$element
                    .appendTo(document.body),
                n
                    .$element
                    .show()
                    .scrollTop(0),
                r && n
                    .$element[0]
                    .offsetWidth,
                n
                    .$element
                    .addClass("in")
                    .attr("aria-hidden", !1),
                n.enforceFocus();
                var i = e.Event("shown.bs.modal", {relatedTarget: t});
                r
                    ? n
                        .$element
                        .find(".modal-dialog")
                        .one(e.support.transition.end, function () {
                            n
                                .$element
                                .focus()
                                .trigger(i)
                        })
                        .emulateTransitionEnd(300)
                    : n
                        .$element
                        .focus()
                        .trigger(i)
            })
        )
    },
    t.prototype.hide = function (t) {
        t && t.preventDefault(),
        t = e.Event("hide.bs.modal"),
        this
            .$element
            .trigger(t),
        this.isShown && !t.isDefaultPrevented() && (
            this.isShown = !1,
            this.escape(),
            e(document).off("focusin.bs.modal"),
            this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
            e.support.transition && this.$element.hasClass("fade")
                ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(
                    300
                )
                : this.hideModal()
        )
    },
    t.prototype.enforceFocus = function () {
        e(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", e.proxy(function (e) {
                this.$element[0] === e.target || this
                    .$element
                    .has(e.target)
                    .length || this
                    .$element
                    .focus()
            }, this))
    },
    t.prototype.escape = function () {
        this.isShown && this.options.keyboard
            ? this
                .$element
                .on("keyup.dismiss.bs.modal", e.proxy(function (e) {
                    27 == e.which && this.hide()
                }, this))
            : this.isShown || this
                .$element
                .off("keyup.dismiss.bs.modal")
    },
    t.prototype.hideModal = function () {
        var e = this;
        this
            .$element
            .hide(),
        this.backdrop(function () {
            e.removeBackdrop(),
            e
                .$element
                .trigger("hidden.bs.modal")
        })
    },
    t.prototype.removeBackdrop = function () {
        this.$backdrop && this
            .$backdrop
            .remove(),
        this.$backdrop = null
    },
    t.prototype.backdrop = function (t) {
        var n = this
            .$element
            .hasClass("fade")
                ? "fade"
                : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && n;
            if (
                this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body),
                this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                    e.target === e.currentTarget && (
                        "static" == this.options.backdrop
                            ? this.$element[0].focus.call(this.$element[0])
                            : this.hide.call(this)
                    )
                }, this)),
                r && this.$backdrop[0].offsetWidth,
                this.$backdrop.addClass("in"),
                !t
            ) 
                return;
            r
                ? this
                    .$backdrop
                    .one(e.support.transition.end, t)
                    .emulateTransitionEnd(150)
                : t()
        } else 
            !this.isShown && this.$backdrop
                ? (
                    this.$backdrop.removeClass("in"),
                    e.support.transition && this.$element.hasClass("fade")
                        ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150)
                        : t()
                )
                : t && t()
        };
    var n = e.fn.modal;
    e.fn.modal = function (n, r) {
        return this.each(function () {
            var i = e(this),
                o = i.data("bs.modal"),
                a = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
            o || i.data("bs.modal", o = new t(this, a)),
            "string" == typeof n
                ? o[n](r)
                : a.show && o.show(r)
        })
    },
    e.fn.modal.Constructor = t,
    e.fn.modal.noConflict = function () {
        return e.fn.modal = n,
        this
    },
    e(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (t) {
            var n = e(this),
                r = n.attr("href"),
                i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                o = i.data("bs.modal")
                    ? "toggle"
                    : e.extend({
                        remote: !/#/.test(r) && r
                    }, i.data(), n.data());
            n.is("a") && t.preventDefault(),
            i
                .modal(o, this)
                .one("hide", function () {
                    n.is(":visible") && n.focus()
                })
        }
    ),
    e(document)
        .on("show.bs.modal", ".modal", function () {
            e(document.body).addClass("modal-open")
        })
        .on("hidden.bs.modal", ".modal", function () {
            e(document.body).removeClass("modal-open")
        })
}(jQuery),
plp._screen = function () {
    if (!plp.screen) {
        var e = document.body.clientWidth;
        "screens-xs" === plp.screens
            ? plp.screen = "xs"
            : "screens-sm" === plp.screens
                ? plp.screen = "sm"
                : "screens-md" === plp.screens
                    ? plp.screen = "md"
                    : "screens-lg" === plp.screens
                        ? plp.screen = "lg"
                        : "screens-xs-sm" === plp.screens
                            ? e > 768
                                ? plp.screen = "sm"
                                : e <= 767 && (plp.screen = "xs")
                            : "screens-xs-md" === plp.screens
                                ? e > 992
                                    ? plp.screen = "md"
                                    : e <= 991 && (plp.screen = "xs")
                                : "screens-xs-lg" === plp.screens
                                    ? e > 1200
                                        ? plp.screen = "lg"
                                        : e <= 1199 && (plp.screen = "xs")
                                    : "screens-sm-md" === plp.screens
                                        ? e > 992
                                            ? plp.screen = "md"
                                            : e <= 991 && (plp.screen = "sm")
                                        : "screens-sm-lg" === plp.screens
                                            ? e > 1200
                                                ? plp.screen = "lg"
                                                : e <= 1199 && (plp.screen = "sm")
                                            : "screens-md-lg" === plp.screens
                                                ? e > 1200
                                                    ? plp.screen = "lg"
                                                    : e <= 1199 && (plp.screen = "md")
                                                : "screens-xs-sm-md" === plp.screens
                                                    ? e > 992
                                                        ? plp.screen = "md"
                                                        : e > 768 && e <= 991
                                                            ? plp.screen = "sm"
                                                            : e <= 767 && (plp.screen = "xs")
                                                    : "screens-xs-sm-lg" === plp.screens
                                                        ? e > 1200
                                                            ? plp.screen = "lg"
                                                            : e > 768 && e <= 1199
                                                                ? plp.screen = "sm"
                                                                : e <= 767 && (plp.screen = "xs")
                                                        : "screens-xs-md-lg" === plp.screens
                                                            ? e > 1200
                                                                ? plp.screen = "lg"
                                                                : e > 992 && e <= 1199
                                                                    ? plp.screen = "md"
                                                                    : e <= 991 && (plp.screen = "xs")
                                                            : "screens-sm-md-lg" === plp.screens
                                                                ? e > 1200
                                                                    ? plp.screen = "lg"
                                                                    : e > 992 && e <= 1199
                                                                        ? plp.screen = "md"
                                                                        : e <= 991 && (plp.screen = "sm")
                                                                : "screens-xs-sm-md-lg" === plp.screens && (
                                                                    e > 1200
                                                                        ? plp.screen = "lg"
                                                                        : e > 992 && e <= 1199
                                                                            ? plp.screen = "md"
                                                                            : e > 768 && e <= 991
                                                                                ? plp.screen = "sm"
                                                                                : e <= 767 && (plp.screen = "xs")
                                                                ),
        []
            .slice
            .call(document.body.childNodes)
            .forEach(function (e) {
                e.className && e
                    .className
                    .indexOf("area") >= 0 && e
                    .classList
                    .add("screen-" + plp.screen)
            })
    }
},
$(function () {
    plp._screen(),
    $("script.adaptive").each(function () {
        var e = $(this)
                .parent()
                .contents(),
            t = e[e.index(this) + 1];
        8 === t.nodeType && t
            .parentNode
            .removeChild(t),
        this
            .parentNode
            .removeChild(this)
    })
}),
function () {
    var e,
        t,
        n,
        r,
        i,
        o = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        },
        a = [].indexOf || function (e) {
            for (var t = 0, n = this.length; t < n; t++) 
                if (t in this && this[t] === e) 
                    return t;
        return -1
        };
    t = function () {
        function e() {}
        return e.prototype.extend = function (e, t) {
            var n,
                r;
            for (n in t) 
                r = t[n],
                null == e[n] && (e[n] = r);
            return e
        },
        e.prototype.isMobile = function (e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        },
        e.prototype.createEvent = function (e, t, n, r) {
            var i;
            return null == t && (t = !1),
            null == n && (n = !1),
            null == r && (r = null),
            null != document.createEvent
                ? (i = document.createEvent("CustomEvent"), i.initCustomEvent(e, t, n, r))
                : null != document.createEventObject
                    ? (i = document.createEventObject(), i.eventType = e)
                    : i.eventName = e,
            i
        },
        e.prototype.emitEvent = function (e, t) {
            return null != e.dispatchEvent
                ? e.dispatchEvent(t)
                : t in (null != e)
                    ? e[t]()
                    : "on" + t in (null != e)
                        ? e["on" + t]()
                        : void 0
        },
        e.prototype.addEvent = function (e, t, n) {
            return null != e.addEventListener
                ? e.addEventListener(t, n, !1)
                : null != e.attachEvent
                    ? e.attachEvent("on" + t, n)
                    : e[t] = n
        },
        e.prototype.removeEvent = function (e, t, n) {
            return null != e.removeEventListener
                ? e.removeEventListener(t, n, !1)
                : null != e.detachEvent
                    ? e.detachEvent("on" + t, n)
                    : delete e[t]
        },
        e.prototype.innerHeight = function () {
            return "innerHeight" in window
                ? window.innerHeight
                : document.documentElement.clientHeight
        },
        e
    }(),
    n = this.WeakMap || this.MozWeakMap || (n = function () {
        function e() {
            this.keys = [],
            this.values = []
        }
        return e.prototype.get = function (e) {
            var t,
                n,
                r,
                i,
                o;
            for (o = this.keys, t = r = 0, i = o.length; r < i; t = ++r) 
                if (n = o[t], n === e) 
                    return this.values[t]
        },
        e.prototype.set = function (e, t) {
            var n,
                r,
                i,
                o,
                a;
            for (a = this.keys, n = i = 0, o = a.length; i < o; n = ++i) 
                if (r = a[n], r === e) 
                    return void(this.values[n] = t);
        return this
                .keys
                .push(e),
            this
                .values
                .push(t)
        },
        e
    }()),
    e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (
        e = function () {
            function e() {
                "undefined" != typeof console && null !== console && console.warn(
                    "MutationObserver is not supported by your browser."
                ),
                "undefined" != typeof console && null !== console && console.warn(
                    "WOW.js cannot detect dom mutations, please call .sync() after loading new cont" +
                    "ent."
                )
            }
            return e.notSupported = !0,
            e.prototype.observe = function () {},
            e
        }()
    ),
    r = this.getComputedStyle || function (e, t) {
        return this.getPropertyValue = function (t) {
            var n;
            return "float" === t && (t = "styleFloat"),
            i.test(t) && t.replace(i, function (e, t) {
                return t.toUpperCase()
            }),
            (
                null != (n = e.currentStyle)
                    ? n[t]
                    : void 0
            ) || null
        },
        this
    },
    i = /(\-([a-z]){1})/g,
    this.WOW = function () {
        function i(e) {
            null == e && (e = {}),
            this.scrollCallback = o(this.scrollCallback, this),
            this.scrollHandler = o(this.scrollHandler, this),
            this.resetAnimation = o(this.resetAnimation, this),
            this.start = o(this.start, this),
            this.scrolled = !0,
            this.config = this
                .util()
                .extend(e, this.defaults),
            null != e.scrollContainer && (
                this.config.scrollContainer = document.querySelector(e.scrollContainer)
            ),
            this.animationNameCache = new n,
            this.wowEvent = this
                .util()
                .createEvent(this.config.boxClass)
        }
        return i.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        i.prototype.init = function () {
            var e;
            return this.element = window.document.documentElement,
            "interactive" === (e = document.readyState) || "complete" === e
                ? this.start()
                : this
                    .util()
                    .addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        },
        i.prototype.start = function () {
            var t,
                n,
                r,
                i;
            if (
                this.stopped = !1,
                this.boxes = function () {
                    var e,
                        n,
                        r,
                        i;
                    for (
                        r = this.element.querySelectorAll("." + this.config.boxClass),
                        i = [],
                        e = 0,
                        n = r.length;
                        e < n;
                        e++
                    ) 
                        t = r[e],
                        i.push(t);
                    return i
                }.call(this),
                this.all = function () {
                    var e,
                        n,
                        r,
                        i;
                    for (r = this.boxes, i = [], e = 0, n = r.length; e < n; e++) 
                        t = r[e],
                        i.push(t);
                    return i
                }.call(this),
                this.boxes.length
            ) 
                if (this.disabled()) 
                    this.resetStyle();
                else 
                    for (i = this.boxes, n = 0, r = i.length; n < r; n++) 
                        t = i[n],
                        this.applyStyle(t, !0);
        if (
                this.disabled() || (
                    this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                    this.util().addEvent(window, "resize", this.scrollHandler),
                    this.interval = setInterval(this.scrollCallback, 50)
                ),
                this.config.live
            ) 
                return new e(function (e) {
                    return function (t) {
                        var n,
                            r,
                            i,
                            o,
                            a;
                        for (a = [], n = 0, r = t.length; n < r; n++) 
                            o = t[n],
                            a.push(function () {
                                var e,
                                    t,
                                    n,
                                    r;
                                for (n = o.addedNodes || [], r = [], e = 0, t = n.length; e < t; e++) 
                                    i = n[e],
                                    r.push(this.doSync(i));
                                return r
                            }.call(e));
                        return a
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
        },
        i.prototype.stop = function () {
            if (
                this.stopped = !0,
                this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                this.util().removeEvent(window, "resize", this.scrollHandler),
                null != this.interval
            ) 
                return clearInterval(this.interval)
        },
        i.prototype.sync = function (t) {
            if (e.notSupported) 
                return this.doSync(this.element)
        },
        i.prototype.doSync = function (e) {
            var t,
                n,
                r,
                i,
                o;
            if (null == e && (e = this.element), 1 === e.nodeType) {
                for (
                    e = e.parentNode || e,
                    i = e.querySelectorAll("." + this.config.boxClass),
                    o = [],
                    n = 0,
                    r = i.length;
                    n < r;
                    n++
                ) 
                    t = i[n],
                    a.call(this.all, t) < 0
                        ? (
                            this.boxes.push(t),
                            this.all.push(t),
                            this.stopped || this.disabled()
                                ? this.resetStyle()
                                : this.applyStyle(t, !0),
                            o.push(this.scrolled = !0)
                        )
                        : o.push(void 0);
                return o
            }
        },
        i.prototype.show = function (e) {
            return this.applyStyle(e),
            e.className = e.className + " " + this.config.animateClass,
            null != this.config.callback && this
                .config
                .callback(e),
            this
                .util()
                .emitEvent(e, this.wowEvent),
            this
                .util()
                .addEvent(e, "animationend", this.resetAnimation),
            this
                .util()
                .addEvent(e, "oanimationend", this.resetAnimation),
            this
                .util()
                .addEvent(e, "webkitAnimationEnd", this.resetAnimation),
            this
                .util()
                .addEvent(e, "MSAnimationEnd", this.resetAnimation),
            e
        },
        i.prototype.applyStyle = function (e, t) {
            var n,
                r,
                i;
            return r = e.getAttribute("data-wow-duration"),
            n = e.getAttribute("data-wow-delay"),
            i = e.getAttribute("data-wow-iteration"),
            this.animate(function (o) {
                return function () {
                    return o.customStyle(e, t, r, n, i)
                }
            }(this))
        },
        i.prototype.animate = function () {
            return "requestAnimationFrame" in window
                ? function (e) {
                    return window.requestAnimationFrame(e)
                }
                : function (e) {
                    return e()
                }
        }(),
        i.prototype.resetStyle = function () {
            var e,
                t,
                n,
                r,
                i;
            for (r = this.boxes, i = [], t = 0, n = r.length; t < n; t++) 
                e = r[t],
                i.push(e.style.visibility = "visible");
            return i
        },
        i.prototype.resetAnimation = function (e) {
            var t;
            if (e.type.toLowerCase().indexOf("animationend") >= 0) 
                return t = e.target || e.srcElement,
                t.className = t
                    .className
                    .replace(this.config.animateClass, "")
                    .trim()
            },
        i.prototype.customStyle = function (e, t, n, r, i) {
            return t && this.cacheAnimationName(e),
            e.style.visibility = t
                ? "hidden"
                : "visible",
            n && this.vendorSet(e.style, {animationDuration: n}),
            r && this.vendorSet(e.style, {animationDelay: r}),
            i && this.vendorSet(e.style, {animationIterationCount: i}),
            this.vendorSet(e.style, {
                animationName: t
                    ? "none"
                    : this.cachedAnimationName(e)
            }),
            e
        },
        i.prototype.vendors = [
            "moz", "webkit"
        ],
        i.prototype.vendorSet = function (e, t) {
            var n,
                r,
                i,
                o;
            r = [];
            for (n in t) 
                i = t[n],
                e["" + n] = i,
                r.push(function () {
                    var t,
                        r,
                        a,
                        l;
                    for (a = this.vendors, l = [], t = 0, r = a.length; t < r; t++) 
                        o = a[t],
                        l.push(e[
                            "" + o + n
                                .charAt(0)
                                .toUpperCase() + n.substr(1)
                        ] = i);
                    return l
                }.call(this));
            return r
        },
        i.prototype.vendorCSS = function (e, t) {
            var n,
                i,
                o,
                a,
                l,
                s;
            for (
                l = r(e),
                a = l.getPropertyCSSValue(t),
                o = this.vendors,
                n = 0,
                i = o.length;
                n < i;
                n++
            ) 
                s = o[n],
                a = a || l.getPropertyCSSValue("-" + s + "-" + t);
            return a
        },
        i.prototype.animationName = function (e) {
            var t;
            try {
                t = this
                    .vendorCSS(e, "animation-name")
                    .cssText
            } catch (n) {
                t = r(e).getPropertyValue("animation-name")
            }
            return "none" === t
                ? ""
                : t
        },
        i.prototype.cacheAnimationName = function (e) {
            return this
                .animationNameCache
                .set(e, this.animationName(e))
        },
        i.prototype.cachedAnimationName = function (e) {
            return this
                .animationNameCache
                .get(e)
        },
        i.prototype.scrollHandler = function () {
            return this.scrolled = !0
        },
        i.prototype.scrollCallback = function () {
            var e;
            if (this.scrolled && (
                this.scrolled = !1,
                this.boxes = function () {
                    var t,
                        n,
                        r,
                        i;
                    for (r = this.boxes, i = [], t = 0, n = r.length; t < n; t++) 
                        e = r[t],
                        e && (
                            this.isVisible(e)
                                ? this.show(e)
                                : i.push(e)
                        );
                    return i
                }.call(this),
                !this.boxes.length && !this.config.live
            )) 
                return this.stop()
        },
        i.prototype.offsetTop = function (e) {
            for (var t; void 0 === e.offsetTop;) 
                e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent;) 
                t += e.offsetTop;
            return t
        },
        i.prototype.isVisible = function (e) {
            var t,
                n,
                r,
                i,
                o;
            return n = e.getAttribute("data-wow-offset") || this.config.offset,
            o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            i = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n,
            r = this.offsetTop(e),
            t = r + e.clientHeight,
            r <= i && t >= o
        },
        i.prototype.util = function () {
            return null != this._util
                ? this._util
                : this._util = new t
        },
        i.prototype.disabled = function () {
            return !this.config.mobile && this
                .util()
                .isMobile(navigator.userAgent)
        },
        i
    }()
}.call(this),
$.lazyLoadXT.autoInit = !1,
$.lazyLoadXT.edgeY = 1e3,
$.lazyLoadXT.updateEvent += " lazyupdate",
$.lazyLoadXT.oninit = {},
$.lazyLoadXT.onshow = {},
$.lazyLoadXT.onload = {},
$.lazyLoadXT.onerror = {},
plp.lazy = {
    add: function (e, t, n) {
        return e
            .addClass("lazy")
            .lazyLoadXT({
                edgeY: void 0 !== n
                    ? n
                    : plp
                        .lazy
                        .distance()
            })
            .one("lazyshow", function (e) {
                var n = $(this);
                n.removeClass("lazy"),
                t(n),
                e.stopPropagation()
            }),
        plp
            .lazy
            .update(),
        e
    },
    trigger: function (e) {
        return e.trigger("lazyshow")
    },
    force: function (e) {
        e = e || $("div.area");
        var t = e
            .find(".lazy")
            .filter(function () {
                return 0 === $(this)
                    .parentsUntil(e)
                    .filter(".modal")
                    .length
            });
        return plp
            .lazy
            .trigger(t),
        e
    },
    update: function () {
        $(document).trigger("lazyupdate")
    },
    distance: function (e) {
        return e && ($.lazyLoadXT.edgeY = 1 * e, plp.lazy.update()),
        $.lazyLoadXT.edgeY
    }
},
$(function () {
    function e(e) {
        var t = e.w << 16 | e.h << 2 | e.c,
            n = e.b << 16 | e.q << 6,
            r = t.toString(29),
            i = n.toString(29),
            o = +t
                .toString()
                .substring(0, 1) + +n
                .toString()
                .substring(0, 1);
        return o.toString(29) + r + i + (r.length.toString(29) + i.length.toString(29))
    }
    function t(e) {
        return /\/\/u\d*\.platformalp\.ru/.test(e) || /\/\/u\d*\.filesonload\.ru/.test(
            e
        )
    }
    function n(t, n) {
        plp.isRetina() && n.retina && (n.width2 *= 2, n.height2 *= 2);
        var r = Math.min(n.width1, 2e3),
            i = Math.min(n.height1, 2e3);
        n.width2 > r && (n.height2 = r / n.width2 * n.height2, n.width2 = r),
        n.height2 > i && (n.width2 = i / n.height2 * n.width2, n.height2 = i);
        var o = e({h: n.height2, w: n.width2});
        return t.replace(/(.+?.\w+)\/(.+)/, "$1/s/" + o + "/$2")
    }
    plp
        .lazy
        .add($("[data-lazy-iframe]"), function (e) {
            e.attr("src", e.attr("data-lazy-iframe")),
            e.removeAttr("data-lazy-iframe"),
            e.addClass("lazy-loading"),
            e
                .on("load", function () {
                    e.removeClass("lazy-loading"),
                    e.trigger("lazyload")
                })
                .on("error", function () {
                    e.removeClass("lazy-loading"),
                    e.trigger("lazyerror")
                })
        }),
    plp
        .lazy
        .add($("[data-lazy-image]"), function (e) {
            var r = e.attr("data-lazy-image");
            if (t(r) && "true" !== e.attr("data-lazy-image_noscale")) {
                var i = e
                        .attr("data-lazy-image_size")
                        .split(","),
                    o = {
                        retina: "true" !== e.attr("data-lazy-image_nohd"),
                        width1: 1 *i[0],
                        width2: 1 *i[0],
                        height1: 1 *i[1],
                        height2: 1 *i[1]
                    },
                    a = e.attr("data-lazy-image_detect");
                if ("xs" === plp.screen) {
                    var l = e.attr("data-lazy-image_detect-xs");
                    l && (a = l)
                }
                if ("css-width" === a) 
                    o.width2 = e.width(),
                    o.width2 < o.width1 && (o.height2 = o.width2 / o.width1 * o.height1);
                else if ("css-width-height" === a) 
                    o.width2 = e.width(),
                    o.height2 = e.height();
                else if ("css-max-height" === a) {
                    var s = parseInt(e.css("max-height"));
                    o.height1 > s
                        ? (o.height2 = s, o.width2 = s / o.height1 * o.width1)
                        : e.css("max-height", o.height2)
                } else if ("css-max-width-max-height" === a) {
                    var u = parseInt(e.css("max-width")),
                        c = parseInt(e.css("max-height"));
                    o.width2 > u && (o.width2 = u, o.height2 = u / o.width1 * o.height1),
                    o.height2 > c && (o.width2 = c / o.height2 * o.width2, o.height2 = c),
                    o.width2 < u && e.css("max-width", o.width2),
                    o.height2 < c && e.css("max-height", o.height2)
                } else if ("css-width-max-height" === a) {
                    o.width2 = e.width(),
                    o.width2 < o.width1 && (o.height2 = o.width2 / o.width1 * o.height1);
                    var c = parseInt(e.css("max-height"));
                    o.height2 > c
                        ? o.height2 = c
                        : e.css("max-height", o.height2)
                } else 
                    "fill-width" === a && (
                        o.width2 = e.parent().width(),
                        o.height2 = o.width2 / o.width1 * o.height1
                    );
                r = n(r, o)
            }
            e.data(),
            e.removeAttr("data-lazy-image"),
            e.removeAttr("data-lazy-image_size"),
            e.removeAttr("data-lazy-image_detect"),
            e.removeAttr("data-lazy-image_nohd"),
            e.removeAttr("data-lazy-image_noscale"),
            e.addClass("lazy-loading"),
            $("<img>")
                .attr("src", r)
                .on("load", function () {
                    e.attr("src", r),
                    e.removeClass("lazy-loading"),
                    e.trigger("lazyload")
                })
                .on("error", function () {
                    e.removeClass("lazy-loading"),
                    e.trigger("lazyerror")
                })
        }),
    plp
        .lazy
        .add($("[data-lazy-bgimage]"), function (e) {
            var r = e.attr("data-lazy-bgimage");
            if (t(r) && "true" !== e.attr("data-lazy-bgimage_noscale")) {
                var i = e
                        .attr("data-lazy-bgimage_size")
                        .split(","),
                    o = {
                        retina: "true" !== e.attr("data-lazy-bgimage_nohd"),
                        width1: 1 *i[0],
                        width2: 1 *i[0],
                        height1: 1 *i[1],
                        height2: 1 *i[1]
                    },
                    a = e.width(),
                    l = e.height(),
                    s = e.css("background-size");
                "cover" === s
                    ? (
                        o.width1 > a && (o.width2 = a, o.height2 = a / o.width1 * o.height1),
                        o.height2 < l && (o.height2 = l, o.width2 = l / o.height1 * o.width1)
                    )
                    : "contain" === s && (
                        o.width2 > a && (o.width2 = a, o.height2 = a / o.width1 * o.height1),
                        o.height2 > l && (o.height2 = l, o.width2 = l / o.height1 * o.width1)
                    );
                var r = n(r, o)
            }
            e.data(),
            e.removeAttr("data-lazy-bgimage"),
            e.removeAttr("data-lazy-bgimage_size"),
            e.removeAttr("data-lazy-bgimage_nohd"),
            e.removeAttr("data-lazy-bgimage_noscale"),
            e.addClass("lazy-loading"),
            $("<img>")
                .attr("src", r)
                .on("load", function () {
                    e.css("background-image", "url(" + r + ")"),
                    e.removeClass("lazy-loading"),
                    e.trigger("lazyload")
                })
                .on("error", function () {
                    e.removeClass("lazy-loading"),
                    e.trigger("lazyerror")
                })
        }),
    plp
        .lazy
        .add($("[data-lazy-all], .lazy-all"), function (e) {
            plp
                .lazy
                .force(e)
        })
}),
plp.isRetina = function () {
    if (window.devicePixelRatio > 1) 
        return !0;
    var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o" +
            "-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
    return !(!window.matchMedia || !window.matchMedia(e).matches)
},
$(function () {
    plp.cart = {};
    var e = function (e) {
            var t = e.match(/\d/g);
            if (!t) 
                return 0;
            var n = e.indexOf(t[0]),
                r = e.lastIndexOf(t[t.length - 1]),
                i = (e[n], e[r], e.substring(n, r + 1));
            i = i.replace(/[^\d\.\,]+/g, "");
            var o = i.indexOf(".") >= 0,
                a = i.indexOf(",") >= 0;
            if (o || a) {
                var t = i.match(/(.+)[\,\.](\d\d)$/);
                if (t) 
                    var l = 1 * t[1].replace(/[\,\.]/g, ""),
                        s = 1 * ("0." + t[2]),
                        u = l + s;
                else 
                    var u = 1 * i.replace(/[\,\.]/g, "")
            } else 
                var u = 1 * i;
            return u
        },
        t = function (e) {
            var t = e.match(/\d/g);
            if (!t) 
                return "%s%";
            e = e.replace(/\&nbsp\;/g, " ");
            var n = e.match(/[\:\-]/);
            n && (e = e.replace(/.*[\:\-]\s*(.*)/, "$1"));
            var r = e.indexOf(t[0]),
                i = e.lastIndexOf(t[t.length - 1]),
                o = (e[r], e[i], e.substring(r, i + 1));
            return e.replace(o, "%s%")
        },
        n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        r = $('[data-modal="cart"]'),
        i = r
            .find(".cont")
            .first(),
        o = i.next();
    i
        .find('[data-role="itemphoto"]')
        .attr("data-lazy-bgimage", n),
    plp
        .lazy
        .add(r, function () {
            plp
                .lazy
                .force(i),
            plp
                .lazy
                .force(o)
        });
    var a = i
            .find(".node.widget-cart-list")
            .first(),
        l = a
            .children(".wrapper1")
            .children(".wrapper2"),
        s = l.children(".cont");
    plp
        .lazy
        .force(s),
    a.data("template", s.parent().html()),
    s.remove();
    var u = $();
    plp.cart.add = function (e) {
        var t = _.filter(e, {type: "title"})[0],
            r = _.filter(e, {type: "price"})[0],
            i = _.filter(e, {type: "amount"})[0],
            o = _.filter(e, {type: "photo"})[0],
            s = !1;
        if (_.each(plp.cart.list, function (e, n) {
            var o = _.filter(e, {type: "title"})[0],
                a = _.filter(e, {type: "price"})[0],
                u = _.filter(e, {type: "amount"})[0];
            t.value === o.value && r.value === a.value && (
                u.value += 1 * i.value,
                l.children().eq(n).trigger("setamount", [u.value]),
                s = !0
            )
        }), s) 
            return store.set("cart", plp.cart.list),
            void plp
                .cart
                .update();
        plp
            .cart
            .list
            .push(e),
        store.set("cart", plp.cart.list),
        plp
            .cart
            .update();
        var c = $(a.data("template"));
        l.append(c),
        c
            .find('[data-role="setamount"]')
            .val(i.value),
        c
            .find('[data-role="itemprice"]')
            .html(r.value),
        c
            .find('[data-role="itemname"]')
            .html(t.value),
        c
            .find('[data-role="itemphoto"]')
            .css("backgroundImage", 'url("' + (
                o.value || n
            ) + '")'),
        u = u.add(c),
        c.on("setamount", function (e, t) {
            i.value = t,
            store.set("cart", plp.cart.list),
            c
                .find('[data-role="setamount"]')
                .val(t),
            i.value
                ? plp
                    .cart
                    .update()
                : c.trigger("removefromcart")
        }),
        c.on("removefromcart", function (t) {
            plp
                .cart
                .list
                .splice(plp.cart.list.indexOf(e), 1),
            store.set("cart", plp.cart.list),
            c.slideUp(250, function () {
                c.remove(),
                u = u.not(c),
                plp
                    .cart
                    .update()
            })
        }),
        c
            .find('[data-role="removefromcart"]')
            .on("click", function () {
                c.trigger("removefromcart")
            }),
        c
            .find('[data-role="setamount"]')
            .on("change", function () {
                var e = 1 * $(this).val();
                c.trigger("setamount", [e])
            }),
        c
            .find('[data-role="increaseamount"]')
            .on("click", function () {
                var e = i.value + 1;
                c.trigger("setamount", [e])
            }),
        c
            .find('[data-role="decreaseamount"]')
            .on("click", function () {
                var e = i.value - 1;
                c.trigger("setamount", [e])
            })
    },
    plp.cart.update = function () {
        var n,
            r = 0,
            a = 0;
        return _.each(plp.cart.list, function (i) {
            var o = 1 * _
                    .filter(i, {type: "amount"})[0]
                    .value,
                l = _
                    .filter(i, {type: "price"})[0]
                    .value;
            r += o,
            a += e(l) * o,
            n = n || t(l)
        }),
        $('.btn[data-modal="cart"] *').each(function () {
            $(this)
                .contents()
                .each(function () {
                    3 === this.nodeType && this
                        .data
                        .match(/\d/) && (this.data = this.data.replace(/\d+/, r))
                })
        }),
        plp.cart.list.length
            ? (
                i.show(),
                o.hide(),
                void $('[data-role="carttotal"] span').html(n.replace("%s%", a))
            )
            : ($('[data-role="carttotal"] span').html("-"), o.show(), void i.hide())
    },
    plp.cart.empty = function () {
        u.trigger("removefromcart")
    },
    plp.cart.list = [],
    (store.get("cart") || []).forEach(function (e) {
        plp
            .cart
            .add(e)
    }),
    plp
        .cart
        .update(),
    $(document.body).on("click", '[data-action="addtocart"]', function (e) {
        var t = $(e.currentTarget).closest("[data-item]");
        if (!t.length) 
            return void swal(
                "Товар не найден",
                "Кнопка должна находиться в карточке товара.",
                "error"
            );
        var n = _.cloneDeep(t.data("item")),
            r = t.find('[data-role="setamount"]');
        if (r.length) 
            var i = {
                name: "Количество",
                type: "amount",
                value: 1 *r.val() || 1
            };
        else 
            var i = {
                name: "Количество",
                type: "amount",
                value: 1
            };
        if (n.push(i), !t.find('[data-role="image"]').length) {
            var o = _.filter(n, {type: "photo"})[0];
            o.value = !1
        }
        plp
            .cart
            .add(n),
        swal({
            title: "Добавлено в корзину!",
            type: "success",
            showCancelButton: !0,
            cancelButtonText: "ОК",
            confirmButtonText: "Открыть корзину"
        }, function () {
            $('.btn[data-modal="cart"]')
                .first()
                .click()
        })
    })
}),
function (e, t) {
    "function" == typeof define && define.amd
        ? define([], t)
        : "object" == typeof exports
            ? module.exports = t()
            : e.store = t()
}(this, function () {
    function e() {
        try {
            return o in r && r[o]
        } catch (e) {
            return !1
        }
    }
    var t,
        n = {},
        r = "undefined" != typeof window
            ? window
            : global,
        i = r.document,
        o = "localStorage",
        a = "script";
    if (
        n.disabled = !1,
        n.version = "1.3.20",
        n.set = function (e, t) {},
        n.get = function (
            e,
            t
        ) {},
        n.has = function (e) {
            return void 0 !== n.get(e)
        },
        n.remove = function (e) {},
        n.clear = function () {},
        n.transact = function (
            e,
            t,
            r
        ) {
            null == r && (r = t, t = null),
            null == t && (t = {});
            var i = n.get(e, t);
            r(i),
            n.set(e, i)
        },
        n.getAll = function () {},
        n.forEach = function () {},
        n.serialize = function (
            e
        ) {
            return JSON.stringify(e)
        },
        n.deserialize = function (e) {
            if ("string" == typeof e) 
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e || void 0
                }
            },
        e()
    ) 
        t = r[o],
        n.set = function (e, r) {
            return void 0 === r
                ? n.remove(e)
                : (t.setItem(e, n.serialize(r)), r)
        }
    ,
    n.get = function (e, r) {
        var i = n.deserialize(t.getItem(e));
        return void 0 === i
            ? r
            : i
    },
    n.remove = function (e) {
        t.removeItem(e)
    },
    n.clear = function () {
        t.clear()
    },
    n.getAll = function () {
        var e = {};
        return n.forEach(function (t, n) {
            e[t] = n
        }),
        e
    },
    n.forEach = function (e) {
        for (var r = 0; r < t.length; r++) {
            var i = t.key(r);
            e(i, n.get(i))
        }
    };
    else if (i && i.documentElement.addBehavior) {
        var l,
            s;
        try {
            s = new ActiveXObject("htmlfile"),
            s.open(),
            s.write(
                "<" + a + ">document.w=window</" + a +
                '><iframe src="/favicon.ico"></iframe>'
            ),
            s.close(),
            l = s
                .w
                .frames[0]
                .document,
            t = l.createElement("div")
        } catch (u) {
            t = i.createElement("div"),
            l = i.body
        }
        var c = function (e) {
                return function () {
                    var r = Array
                        .prototype
                        .slice
                        .call(arguments, 0);
                    r.unshift(t),
                    l.appendChild(t),
                    t.addBehavior("#default#userData"),
                    t.load(o);
                    var i = e.apply(n, r);
                    return l.removeChild(t),
                    i
                }
            },
            d = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
            f = function (e) {
                return e
                    .replace(/^d/, "___$&")
                    .replace(d, "___")
            };
        n.set = c(function (e, t, r) {
            return t = f(t),
            void 0 === r
                ? n.remove(t)
                : (e.setAttribute(t, n.serialize(r)), e.save(o), r)
        }),
        n.get = c(function (e, t, r) {
            t = f(t);
            var i = n.deserialize(e.getAttribute(t));
            return void 0 === i
                ? r
                : i
        }),
        n.remove = c(function (e, t) {
            t = f(t),
            e.removeAttribute(t),
            e.save(o)
        }),
        n.clear = c(function (e) {
            var t = e.XMLDocument.documentElement.attributes;
            e.load(o);
            for (var n = t.length - 1; n >= 0; n--) 
                e.removeAttribute(t[n].name);
            e.save(o)
        }),
        n.getAll = function (e) {
            var t = {};
            return n.forEach(function (e, n) {
                t[e] = n
            }),
            t
        },
        n.forEach = c(function (e, t) {
            for (var r, i = e.XMLDocument.documentElement.attributes, o = 0; r = i[o]; ++o) 
                t(r.name, n.deserialize(e.getAttribute(r.name)))
        })
    }
    try {
        var p = "__storejs__";
        n.set(p, p),
        n.get(p) != p && (n.disabled = !0),
        n.remove(p)
    } catch (u) {
        n.disabled = !0
    }
    return n.enabled = !n.disabled,
    n
}),
function (e, t, n) {
    function r(n, r, i) {
        var o = t.createElement(n);
        return r && (o.id = Z + r),
        i && (o.style.cssText = i),
        e(o)
    }
    function i() {
        return n.innerHeight
            ? n.innerHeight
            : e(n).height()
    }
    function o(t, n) {
        n !== Object(n) && (n = {}),
        this.cache = {},
        this.el = t,
        this.value = function (t) {
            var r;
            return void 0 === this.cache[t] && (
                r = e(this.el).attr("data-cbox-" + t),
                void 0 !== r
                    ? this.cache[t] = r
                    : void 0 !== n[t]
                        ? this.cache[t] = n[t]
                        : void 0 !== K[t] && (this.cache[t] = K[t])
            ),
            this.cache[t]
        },
        this.get = function (t) {
            var n = this.value(t);
            return e.isFunction(n)
                ? n.call(this.el, this)
                : n
        }
    }
    function a(e) {
        var t = j.length,
            n = (F + e) % t;
        return n < 0
            ? t + n
            : n
    }
    function l(e, t) {
        return Math.round((
            /%/.test(e)
                ? (
                    "x" === t
                        ? S.width()
                        : i()
                ) / 100
                : 1
        ) * parseInt(e, 10))
    }
    function s(e, t) {
        return e.get("photo") || e
            .get("photoRegex")
            .test(t)
    }
    function u(e, t) {
        return e.get("retinaUrl") && n.devicePixelRatio > 1
            ? t.replace(e.get("photoRegex"), e.get("retinaSuffix"))
            : t
    }
    function c(e) {
        "contains" in b[0] && !b[0].contains(e.target) && e.target !== g[0] && (
            e.stopPropagation(),
            b.focus()
        )
    }
    function d(e) {
        d.str !== e && (b.add(g).removeClass(d.str).addClass(e), d.str = e)
    }
    function f(t) {
        F = 0,
        t && t !== !1 && "nofollow" !== t
            ? (
                j = e("." + ee).filter(function () {
                    var n = e.data(this, G),
                        r = new o(this, n);
                    return r.get("rel") === t
                }),
                F = j.index(M.el),
                F === -1 && (j = j.add(M.el), F = j.length - 1)
            )
            : j = e(M.el)
    }
    function p(n) {
        e(t).trigger(n),
        le.triggerHandler(n)
    }
    function h(n) {
        var i;
        if (!W) {
            if (i = e(n).data("colorbox"), M = new o(n, i), f(M.get("rel")), !H) {
                H = U = !0,
                d(M.get("className")),
                b.css({visibility: "hidden", display: "block", opacity: ""}),
                _ = r(
                    se,
                    "LoadedContent",
                    "width:0; height:0; overflow:hidden; visibility:hidden"
                ),
                x
                    .css({width: "", height: ""})
                    .append(_),
                L = T.height() + C.height() + x.outerHeight(!0) - x.height(),
                z = P.width() + k.width() + x.outerWidth(!0) - x.width(),
                B = _.outerHeight(!0),
                R = _.outerWidth(!0);
                var a = l(M.get("initialWidth"), "x"),
                    s = l(M.get("initialHeight"), "y"),
                    u = M.get("maxWidth"),
                    h = M.get("maxHeight");
                M.w = (
                    u !== !1
                        ? Math.min(a, l(u, "x"))
                        : a
                ) - R - z,
                M.h = (
                    h !== !1
                        ? Math.min(s, l(h, "y"))
                        : s
                ) - B - L,
                _.css({width: "", height: M.h}),
                X.position(),
                p(te),
                M.get("onOpen"),
                N
                    .add(A)
                    .hide(),
                b.focus(),
                M.get("trapFocus") && t.addEventListener && (
                    t.addEventListener("focus", c, !0),
                    le.one(oe, function () {
                        t.removeEventListener("focus", c, !0)
                    })
                ),
                M.get("returnFocus") && le.one(oe, function () {
                    e(M.el).focus()
                })
            }
            g
                .css({
                    opacity: parseFloat(M.get("opacity")) || "",
                    cursor: M.get("overlayClose")
                        ? "pointer"
                        : "",
                    visibility: "visible"
                })
                .show(),
            M.get("closeButton")
                ? O
                    .html(M.get("close"))
                    .appendTo(x)
                : O.appendTo("<div/>"),
            v()
        }
    }
    function m() {
        !b && t.body && (
            J = !1,
            S = e(n),
            b = r(se).attr({
                id: G,
                "class": e.support.opacity === !1
                    ? Z + "IE"
                    : "",
                role: "dialog",
                tabindex: "-1"
            }).hide(),
            g = r(se, "Overlay").hide(),
            E = e([
                r(se, "LoadingOverlay")[0],
                r(se, "LoadingGraphic")[0]
            ]),
            w = r(se, "Wrapper"),
            x = r(se, "Content").append(A = r(se, "Title"), Q = r(se, "Current"), D = e('<button type="button"/>').attr({
                id: Z + "Previous"
            }), I = e('<button type="button"/>').attr({
                id: Z + "Next"
            }), $ = r("button", "Slideshow"), E),
            O = e('<button type="button"/>').attr({
                id: Z + "Close"
            }),
            w.append(
                r(se).append(r(se, "TopLeft"), T = r(se, "TopCenter"), r(se, "TopRight")),
                r(se, !1, "clear:left").append(P = r(se, "MiddleLeft"), x, k = r(se, "MiddleRight")),
                r(se, !1, "clear:left").append(r(se, "BottomLeft"), C = r(se, "BottomCenter"), r(se, "BottomRight"))
            ).find("div div").css({"float": "left"}),
            Y = r(
                se,
                !1,
                "position:absolute; width:9999px; visibility:hidden; display:none; max-width:no" +
                        "ne;"
            ),
            N = I.add(D).add(Q).add($),
            e(t.body).append(g, b.append(w, Y))
        )
    }
    function y() {
        function n(e) {
            e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (
                e.preventDefault(),
                h(this)
            )
        }
        return !!b && (J || (
            J = !0,
            I.click(function () {
                X.next()
            }),
            D.click(function () {
                X.prev()
            }),
            O.click(function () {
                X.close()
            }),
            g.click(function () {
                M.get("overlayClose") && X.close()
            }),
            e(t).bind("keydown." + Z, function (e) {
                var t = e.keyCode;
                H && M.get("escKey") && 27 === t && (e.preventDefault(), X.close()),
                H && M.get("arrowKey") && j[1] && !e.altKey && (
                    37 === t
                        ? (e.preventDefault(), D.click())
                        : 39 === t && (e.preventDefault(), I.click())
                )
            }),
            e.isFunction(e.fn.on)
                ? e(t).on("click." + Z, "." + ee, n)
                : e("." + ee).live("click." + Z, n)
        ), !0)
    }
    function v() {
        var t,
            i,
            o,
            a = X.prep,
            c = ++ue;
        if (
            U = !0,
            q = !1,
            p(ae),
            p(ne),
            M.get("onLoad"),
            M.h = M.get("height")
                ? l(M.get("height"), "y") - B - L
                : M.get("innerHeight") && l(M.get("innerHeight"), "y"),
            M.w = M.get("width")
                ? l(M.get("width"), "x") - R - z
                : M.get("innerWidth") && l(M.get("innerWidth"), "x"),
            M.mw = M.w,
            M.mh = M.h,
            M.get("maxWidth") && (
                M.mw = l(M.get("maxWidth"), "x") - R - z,
                M.mw = M.w && M.w < M.mw
                    ? M.w
                    : M.mw
            ),
            M.get("maxHeight") && (
                M.mh = l(M.get("maxHeight"), "y") - B - L,
                M.mh = M.h && M.h < M.mh
                    ? M.h
                    : M.mh
            ),
            t = M.get("href"),
            V = setTimeout(function () {
                E.show()
            }, 100),
            M.get("inline")
        ) {
            var d = e(t);
            o = e("<div>")
                .hide()
                .insertBefore(d),
            le.one(ae, function () {
                o.replaceWith(d)
            }),
            a(d)
        } else 
            M.get("iframe")
                ? a(" ")
                : M.get("html")
                    ? a(M.get("html"))
                    : s(M, t)
                        ? (
                            t = u(M, t),
                            q = new Image,
                            e(q).addClass(Z + "Photo").bind("error", function () {
                                a(r(se, "Error").html(M.get("imgError")))
                            }).one("load", function () {
                                c === ue && setTimeout(function () {
                                    var t;
                                    e.each([
                                        "alt", "longdesc", "aria-describedby"
                                    ], function (t, n) {
                                        var r = e(M.el).attr(n) || e(M.el).attr("data-" + n);
                                        r && q.setAttribute(n, r)
                                    }),
                                    M.get("retinaImage") && n.devicePixelRatio > 1 && (
                                        q.height = q.height / n.devicePixelRatio,
                                        q.width = q.width / n.devicePixelRatio
                                    ),
                                    M.get("scalePhotos") && (
                                        i = function () {
                                            q.height -= q.height * t,
                                            q.width -= q.width * t
                                        },
                                        M.mw && q.width > M.mw && (t = (q.width - M.mw) / q.width, i()),
                                        M.mh && q.height > M.mh && (
                                            t = (q.height - M.mh) / q.height,
                                            i()
                                        )
                                    ),
                                    M.h && (q.style.marginTop = Math.max(M.mh - q.height, 0) / 2 + "px"),
                                    j[1] && (M.get("loop") || j[F + 1]) && (
                                        q.style.cursor = "pointer",
                                        q.onclick = function () {
                                            X.next()
                                        }
                                    ),
                                    q.style.width = q.width + "px",
                                    q.style.height = q.height + "px",
                                    a(q)
                                }, 1)
                            }),
                            q.src = t
                        )
                        : t && Y.load(t, M.get("data"), function (t, n) {
                            c === ue && a(
                                "error" === n
                                    ? r(se, "Error").html(M.get("xhrError"))
                                    : e(this).contents()
                            )
                        })
                }
    var g,
        b,
        w,
        x,
        T,
        P,
        k,
        C,
        j,
        S,
        _,
        Y,
        E,
        A,
        Q,
        $,
        I,
        D,
        O,
        N,
        M,
        L,
        z,
        B,
        R,
        F,
        q,
        H,
        U,
        W,
        V,
        X,
        J,
        K = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function () {
                return this.rel
            },
            href: function () {
                return e(this).attr("href")
            },
            title: function () {
                return this.title
            }
        },
        G = "colorbox",
        Z = "cbox",
        ee = Z + "Element",
        te = Z + "_open",
        ne = Z + "_load",
        re = Z + "_complete",
        ie = Z + "_cleanup",
        oe = Z + "_closed",
        ae = Z + "_purge",
        le = e("<a/>"),
        se = "div",
        ue = 0,
        ce = {},
        de = function () {
            function e() {
                clearTimeout(a)
            }
            function t() {
                (M.get("loop") || j[F + 1]) && (
                    e(),
                    a = setTimeout(X.next, M.get("slideshowSpeed"))
                )
            }
            function n() {
                $
                    .html(M.get("slideshowStop"))
                    .unbind(s)
                    .one(s, r),
                le
                    .bind(re, t)
                    .bind(ne, e),
                b
                    .removeClass(l + "off")
                    .addClass(l + "on")
            }
            function r() {
                e(),
                le
                    .unbind(re, t)
                    .unbind(ne, e),
                $
                    .html(M.get("slideshowStart"))
                    .unbind(s)
                    .one(s, function () {
                        X.next(),
                        n()
                    }),
                b
                    .removeClass(l + "on")
                    .addClass(l + "off")
            }
            function i() {
                o = !1,
                $.hide(),
                e(),
                le
                    .unbind(re, t)
                    .unbind(ne, e),
                b.removeClass(l + "off " + l + "on")
            }
            var o,
                a,
                l = Z + "Slideshow_",
                s = "click." + Z;
            return function () {
                o
                    ? M.get("slideshow") || (le.unbind(ie, i), i())
                    : M.get("slideshow") && j[1] && (
                        o = !0,
                        le.one(ie, i),
                        M.get("slideshowAuto")
                            ? n()
                            : r(),
                        $.show()
                    )
            }
        }();
    e.colorbox || (
        e(m),
        X = e.fn[G] = e[G] = function (t, n) {
            var r,
                i = this;
            if (t = t || {}, e.isFunction(i)) 
                i = e("<a/>"),
                t.open = !0;
            else if (!i[0]) 
                return i;
            return i[0]
                ? (m(), y() && (
                    n && (t.onComplete = n),
                    i.each(function () {
                        var n = e.data(this, G) || {};
                        e.data(this, G, e.extend(n, t))
                    }).addClass(ee),
                    r = new o(i[0], t),
                    r.get("open") && h(i[0])
                ), i)
                : i
        },
        X.position = function (t, n) {
            function r() {
                T[0].style.width = C[0].style.width = x[0].style.width = parseInt(
                    b[0].style.width,
                    10
                ) - z + "px",
                x[0].style.height = P[0].style.height = k[0].style.height = parseInt(
                    b[0].style.height,
                    10
                ) - L + "px"
            }
            var o,
                a,
                s,
                u = 0,
                c = 0,
                d = b.offset();
            if (
                S.unbind("resize." + Z),
                b.css({top: -9e4, left: -9e4}),
                a = S.scrollTop(),
                s = S.scrollLeft(),
                M.get("fixed")
                    ? (d.top -= a, d.left -= s, b.css({position: "fixed"}))
                    : (u = a, c = s, b.css({position: "absolute"})),
                c += M.get("right") !== !1
                    ? Math.max(S.width() - M.w - R - z - l(M.get("right"), "x"), 0)
                    : M.get("left") !== !1
                        ? l(M.get("left"), "x")
                        : Math.round(Math.max(S.width() - M.w - R - z, 0) / 2),
                u += M.get("bottom") !== !1
                    ? Math.max(i() - M.h - B - L - l(M.get("bottom"), "y"), 0)
                    : M.get("top") !== !1
                        ? l(M.get("top"), "y")
                        : Math.round(Math.max(i() - M.h - B - L, 0) / 2),
                b.css({top: d.top, left: d.left, visibility: "visible"}),
                w[0].style.width = w[0].style.height = "9999px",
                o = {
                    width: M.w + R + z,
                    height: M.h + B + L,
                    top: u,
                    left: c
                },
                t
            ) {
                var f = 0;
                e.each(o, function (e) {
                    if (o[e] !== ce[e]) 
                        return void(f = t)
                }),
                t = f
            }
            ce = o,
            t || b.css(o),
            b
                .dequeue()
                .animate(o, {
                    duration: t || 0,
                    complete: function () {
                        r(),
                        U = !1,
                        w[0].style.width = M.w + R + z + "px",
                        w[0].style.height = M.h + B + L + "px",
                        M.get("reposition") && setTimeout(function () {
                            S.bind("resize." + Z, X.position)
                        }, 1),
                        n && n()
                    },
                    step: r
                })
        },
        X.resize = function (e) {
            var t;
            H && (
                e = e || {},
                e.width && (M.w = l(e.width, "x") - R - z),
                e.innerWidth && (M.w = l(e.innerWidth, "x")),
                _.css({width: M.w}),
                e.height && (M.h = l(e.height, "y") - B - L),
                e.innerHeight && (M.h = l(e.innerHeight, "y")),
                e.innerHeight || e.height || (t = _.scrollTop(), _.css({height: "auto"}), M.h = _.height()),
                _.css({height: M.h}),
                t && _.scrollTop(t),
                X.position(
                    "none" === M.get("transition")
                        ? 0
                        : M.get("speed")
                )
            )
        },
        X.prep = function (n) {
            function i() {
                return M.w = M.w || _.width(),
                M.w = M.mw && M.mw < M.w
                    ? M.mw
                    : M.w,
                M.w
            }
            function l() {
                return M.h = M.h || _.height(),
                M.h = M.mh && M.mh < M.h
                    ? M.mh
                    : M.h,
                M.h
            }
            if (H) {
                var c,
                    f = "none" === M.get("transition")
                        ? 0
                        : M.get("speed");
                _.remove(),
                _ = r(se, "LoadedContent").append(n),
                _
                    .hide()
                    .appendTo(Y.show())
                    .css({
                        width: i(),
                        overflow: M.get("scrolling")
                            ? "auto"
                            : "hidden"
                    })
                    .css({height: l()})
                    .prependTo(x),
                Y.hide(),
                e(q).css({"float": "none"}),
                d(M.get("className")),
                c = function () {
                    function n() {
                        e.support.opacity === !1 && b[0]
                            .style
                            .removeAttribute("filter")
                    }
                    var r,
                        i,
                        l = j.length;
                    H && (
                        i = function () {
                            clearTimeout(V),
                            E.hide(),
                            p(re),
                            M.get("onComplete")
                        },
                        A.html(M.get("title")).show(),
                        _.show(),
                        l > 1
                            ? (
                                "string" == typeof M.get("current") && Q.html(M.get("current").replace("{current}", F + 1).replace("{total}", l)).show(),
                                I[
                                    M.get("loop") || F < l - 1
                                        ? "show"
                                        : "hide"
                                ]().html(M.get("next")),
                                D[
                                    M.get("loop") || F
                                        ? "show"
                                        : "hide"
                                ]().html(M.get("previous")),
                                de(),
                                M.get("preloading") && e.each([
                                    a(-1), a(1)
                                ], function () {
                                    var n,
                                        r = j[this],
                                        i = new o(r, e.data(r, G)),
                                        a = i.get("href");
                                    a && s(i, a) && (a = u(i, a), n = t.createElement("img"), n.src = a)
                                })
                            )
                            : N.hide(),
                        M.get("iframe")
                            ? (
                                r = t.createElement("iframe"),
                                "frameBorder" in r && (r.frameBorder = 0),
                                "allowTransparency" in r && (r.allowTransparency = "true"),
                                M.get("scrolling") || (r.scrolling = "no"),
                                e(r).attr({
                                    src: M.get("href"),
                                    name: (new Date).getTime(),
                                    "class": Z + "Iframe",
                                    allowFullScreen: !0
                                }).one("load", i).appendTo(_),
                                le.one(ae, function () {
                                    r.src = "//about:blank"
                                }),
                                M.get("fastIframe") && e(r).trigger("load")
                            )
                            : i(),
                        "fade" === M.get("transition")
                            ? b.fadeTo(f, 1, n)
                            : n()
                    )
                },
                "fade" === M.get("transition")
                    ? b.fadeTo(f, 0, function () {
                        X.position(0, c)
                    })
                    : X.position(f, c)
            }
        },
        X.next = function () {
            !U && j[1] && (M.get("loop") || j[F + 1]) && (F = a(1), h(j[F]))
        },
        X.prev = function () {
            !U && j[1] && (M.get("loop") || F) && (F = a(-1), h(j[F]))
        },
        X.close = function () {
            H && !W && (
                W = !0,
                H = !1,
                p(ie),
                M.get("onCleanup"),
                S.unbind("." + Z),
                g.fadeTo(M.get("fadeOut") || 0, 0),
                b.stop().fadeTo(M.get("fadeOut") || 0, 0, function () {
                    b.hide(),
                    g.hide(),
                    p(ae),
                    _.remove(),
                    setTimeout(function () {
                        W = !1,
                        p(oe),
                        M.get("onClosed")
                    }, 1)
                })
            )
        },
        X.remove = function () {
            b && (
                b.stop(),
                e.colorbox.close(),
                b.stop().remove(),
                g.remove(),
                W = !1,
                b = null,
                e(
                    "." + ee
                ).removeData(G).removeClass(ee),
                e(t).unbind("click." + Z).unbind("keydown." + Z)
            )
        },
        X.element = function () {
            return e(M.el)
        },
        X.settings = K
    )
}(jQuery, document, window),
function (e, t) {
    function n() {
        function n(t) {
            var n = t || e.event,
                r = n.keyCode || n.which;
            if ([9, 13, 32, 27].indexOf(r) !== -1) {
                for (var i = n.target || n.srcElement, o = -1, a = 0; a < k.length; a++) 
                    if (i === k[a]) {
                        o = a;
                        break
                    }
                9 === r
                    ? (
                        i = o === -1
                            ? T
                            : o === k.length - 1
                                ? k[0]
                                : k[o + 1],
                        I(n),
                        i.focus(),
                        l(i, d.confirmButtonColor)
                    )
                    : (
                        i = 13 === r || 32 === r
                            ? o === -1
                                ? T
                                : void 0
                            : 27 !== r || P.hidden || "none" === P.style.display
                                ? void 0
                                : P,
                        void 0 !== i && $(i, n)
                    )
            }
        }
        function a(t) {
            var n = t || e.event,
                r = n.target || n.srcElement,
                i = n.relatedTarget,
                o = x(m, "visible");
            if (o) {
                var a = -1;
                if (null !== i) {
                    for (var l = 0; l < k.length; l++) 
                        if (i === k[l]) {
                            a = l;
                            break
                        }
                    a === -1 && r.focus()
                } else 
                    h = r
            }
        }
        if (void 0 === arguments[0]) 
            return e
                .console
                .error("sweetAlert expects at least 1 attribute!"),
            !1;
        var d = o({}, g);
        switch (typeof arguments[0]) {
            case "string":
                d.title = arguments[0],
                d.text = arguments[1] || "",
                d.type = arguments[2] || "";
                break;
            case "object":
                if (void 0 === arguments[0].title) 
                    return e
                        .console
                        .error('Missing "title" argument!'),
                    !1;
                d.title = arguments[0].title,
                d.text = arguments[0].text || g.text,
                d.type = arguments[0].type || g.type,
                d.customClass = arguments[0].customClass || d.customClass,
                d.allowOutsideClick = arguments[0].allowOutsideClick || g.allowOutsideClick,
                d.showCancelButton = void 0 !== arguments[0].showCancelButton
                    ? arguments[0].showCancelButton
                    : g.showCancelButton,
                d.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm
                    ? arguments[0].closeOnConfirm
                    : g.closeOnConfirm,
                d.closeOnCancel = void 0 !== arguments[0].closeOnCancel
                    ? arguments[0].closeOnCancel
                    : g.closeOnCancel,
                d.timer = arguments[0].timer || g.timer,
                d.confirmButtonText = g.showCancelButton
                    ? "Confirm"
                    : g.confirmButtonText,
                d.confirmButtonText = arguments[0].confirmButtonText || g.confirmButtonText,
                d.confirmButtonColor = arguments[0].confirmButtonColor || g.confirmButtonColor,
                d.cancelButtonText = arguments[0].cancelButtonText || g.cancelButtonText,
                d.imageUrl = arguments[0].imageUrl || g.imageUrl,
                d.imageSize = arguments[0].imageSize || g.imageSize,
                d.doneFunction = arguments[1] || null;
                break;
            default:
                return e
                    .console
                    .error(
                        'Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]
                    ),
                !1
        }
        r(d),
        c(),
        s();
        for (
            var m = b(),
            y = function (t) {
                var n = t || e.event,
                    r = n.target || n.srcElement,
                    o = "confirm" === r.className,
                    a = x(m, "visible"),
                    l = d.doneFunction && "true" === m.getAttribute("data-has-done-function");
                switch (n.type) {
                    case "mouseover":
                        o && (r.style.backgroundColor = i(d.confirmButtonColor, -.04));
                        break;
                    case "mouseout":
                        o && (r.style.backgroundColor = d.confirmButtonColor);
                        break;
                    case "mousedown":
                        o && (r.style.backgroundColor = i(d.confirmButtonColor, -.14));
                        break;
                    case "mouseup":
                        o && (r.style.backgroundColor = i(d.confirmButtonColor, -.04));
                        break;
                    case "focus":
                        var s = m.querySelector("button.confirm"),
                            c = m.querySelector("button.cancel");
                        o
                            ? c.style.boxShadow = "none"
                            : s.style.boxShadow = "none";
                        break;
                    case "click":
                        if (o && l && a) 
                            d.doneFunction(!0),
                            d.closeOnConfirm && u();
                        else if (l && a) {
                            var f = String(d.doneFunction).replace(/\s/g, ""),
                                p = "function(" === f.substring(0, 9) && ")" !== f.substring(9, 10);
                            p && d.doneFunction(!1),
                            d.closeOnCancel && u()
                        } else 
                            u()
                    }
            },
            v = m.querySelectorAll("button"),
            w = 0; w < v.length; w++
        ) 
            v[w].onclick = y,
            v[w].onmouseover = y,
            v[w].onmouseout = y,
            v[w].onmousedown = y,
            v[w].onfocus = y;
        f = t.onclick,
        t.onclick = function (t) {
            var n = t || e.event,
                r = n.target || n.srcElement,
                i = m === r,
                o = Y(m, r),
                a = x(m, "visible"),
                l = "true" === m.getAttribute("data-allow-ouside-click");
            !i && !o && a && l && u()
        };
        var T = m.querySelector("button.confirm"),
            P = m.querySelector("button.cancel"),
            k = m.querySelectorAll("button:not([type=hidden])");
        p = e.onkeydown,
        e.onkeydown = n,
        T.onblur = a,
        P.onblur = a,
        e.onfocus = function () {
            e.setTimeout(function () {
                void 0 !== h && (h.focus(), h = void 0)
            }, 0)
        }
    }
    function r(t) {
        var n = b(),
            r = n.querySelector("h2"),
            i = n.querySelector("p"),
            o = n.querySelector("button.cancel"),
            a = n.querySelector("button.confirm");
        if (
            r.innerHTML = k(t.title).split("\n").join("<br>"),
            i.innerHTML = k(t.text || "").split("\n").join("<br>"),
            t.text && j(i),
            t.customClass && T(n, t.customClass),
            _(n.querySelectorAll(".icon")),
            t.type
        ) {
            for (var s = !1, u = 0; u < v.length; u++) 
                if (t.type === v[u]) {
                    s = !0;
                    break
                }
            if (!s) 
                return e
                    .console
                    .error("Unknown alert type: " + t.type),
                !1;
            var c = n.querySelector(".icon." + t.type);
            switch (j(c), t.type) {
                case "success":
                    T(c, "animate"),
                    T(c.querySelector(".tip"), "animateSuccessTip"),
                    T(c.querySelector(".long"), "animateSuccessLong");
                    break;
                case "error":
                    T(c, "animateErrorIcon"),
                    T(c.querySelector(".x-mark"), "animateXMark");
                    break;
                case "warning":
                    T(c, "pulseWarning"),
                    T(c.querySelector(".body"), "pulseWarningIns"),
                    T(c.querySelector(".dot"), "pulseWarningIns")
            }
        }
        if (t.imageUrl) {
            var d = n.querySelector(".icon.custom");
            d.style.backgroundImage = "url(" + t.imageUrl + ")",
            j(d);
            var f = 80,
                p = 80;
            if (t.imageSize) {
                var h = t
                        .imageSize
                        .split("x")[0],
                    m = t
                        .imageSize
                        .split("x")[1];
                h && m
                    ? (f = h, p = m, d.css({
                        width: h + "px",
                        height: m + "px"
                    }))
                    : e
                        .console
                        .error(
                            "Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize
                        )
            }
            d.setAttribute(
                "style",
                d.getAttribute("style") + "width:" + f + "px; height:" + p + "px"
            )
        }
        n.setAttribute("data-has-cancel-button", t.showCancelButton),
        t.showCancelButton
            ? o.style.display = "inline-block"
            : _(o),
        t.cancelButtonText && (o.innerHTML = k(t.cancelButtonText)),
        t.confirmButtonText && (a.innerHTML = k(t.confirmButtonText)),
        a.style.backgroundColor = t.confirmButtonColor,
        l(a, t.confirmButtonColor),
        n.setAttribute("data-allow-ouside-click", t.allowOutsideClick);
        var y = !!t.doneFunction;
        n.setAttribute("data-has-done-function", y),
        n.setAttribute("data-timer", t.timer)
    }
    function i(e, t) {
        e = String(e).replace(/[^0-9a-f]/gi, ""),
        e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
        t = t || 0;
        var n,
            r,
            i = "#";
        for (r = 0; r < 3; r++) 
            n = parseInt(e.substr(2 * r, 2), 16),
            n = Math
                .round(Math.min(Math.max(0, n + n * t), 255))
                .toString(16),
            i += ("00" + n).substr(n.length);
        return i
    }
    function o(e, t) {
        for (var n in t) 
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    function a(e) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t
            ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16)
            : null
    }
    function l(e, t) {
        var n = a(t);
        e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0" +
                ", 0.05)"
    }
    function s() {
        var e = b();
        A(w(), 10),
        j(e),
        T(e, "showSweetAlert"),
        P(e, "hideSweetAlert"),
        d = t.activeElement;
        var n = e.querySelector("button.confirm");
        n.focus(),
        setTimeout(function () {
            T(e, "visible")
        }, 500);
        var r = e.getAttribute("data-timer");
        "null" !== r && "" !== r && (e.timeout = setTimeout(function () {
            u()
        }, r))
    }
    function u() {
        var n = b();
        Q(w(), 5),
        Q(n, 5),
        P(n, "showSweetAlert"),
        T(n, "hideSweetAlert"),
        P(n, "visible");
        var r = n.querySelector(".icon.success");
        P(r, "animate"),
        P(r.querySelector(".tip"), "animateSuccessTip"),
        P(r.querySelector(".long"), "animateSuccessLong");
        var i = n.querySelector(".icon.error");
        P(i, "animateErrorIcon"),
        P(i.querySelector(".x-mark"), "animateXMark");
        var o = n.querySelector(".icon.warning");
        P(o, "pulseWarning"),
        P(o.querySelector(".body"), "pulseWarningIns"),
        P(o.querySelector(".dot"), "pulseWarningIns"),
        e.onkeydown = p,
        t.onclick = f,
        d && d.focus(),
        h = void 0,
        clearTimeout(n.timeout)
    }
    function c() {
        var e = b();
        e.style.marginTop = E(b())
    }
    var d,
        f,
        p,
        h,
        m = ".sweet-alert",
        y = ".sweet-overlay",
        v = [
            "error", "warning", "info", "success"
        ],
        g = {
            title: "",
            text: "",
            type: null,
            allowOutsideClick: !1,
            showCancelButton: !1,
            closeOnConfirm: !0,
            closeOnCancel: !0,
            confirmButtonText: "OK",
            confirmButtonColor: "#AEDEF4",
            cancelButtonText: "Cancel",
            imageUrl: null,
            imageSize: null,
            timer: null
        },
        b = function () {
            return t.querySelector(m)
        },
        w = function () {
            return t.querySelector(y)
        },
        x = function (e, t) {
            return new RegExp(" " + t + " ").test(" " + e.className + " ")
        },
        T = function (e, t) {
            x(e, t) || (e.className += " " + t)
        },
        P = function (e, t) {
            var n = " " + e
                .className
                .replace(/[\t\r\n]/g, " ") + " ";
            if (x(e, t)) {
                for (; n.indexOf(" " + t + " ") >= 0;) 
                    n = n.replace(" " + t + " ", " ");
                e.className = n.replace(/^\s+|\s+$/g, "")
            }
        },
        k = function (e) {
            var n = t.createElement("div");
            return n.appendChild(t.createTextNode(e)),
            n.innerHTML
        },
        C = function (e) {
            e.style.opacity = "",
            e.style.display = "block"
        },
        j = function (e) {
            if (e && !e.length) 
                return C(e);
            for (var t = 0; t < e.length; ++t) 
                C(e[t])
        },
        S = function (e) {
            e.style.opacity = "",
            e.style.display = "none"
        },
        _ = function (e) {
            if (e && !e.length) 
                return S(e);
            for (var t = 0; t < e.length; ++t) 
                S(e[t])
        },
        Y = function (e, t) {
            for (var n = t.parentNode; null !== n;) {
                if (n === e) 
                    return !0;
                n = n.parentNode
            }
            return !1
        },
        E = function (e) {
            e.style.left = "-9999px",
            e.style.display = "block";
            var t,
                n = e.clientHeight;
            return t = "undefined" != typeof getComputedStyle
                ? parseInt(getComputedStyle(e).getPropertyValue("padding"), 10)
                : parseInt(e.currentStyle.padding),
            e.style.left = "",
            e.style.display = "none",
            "-" + parseInt(n / 2 + t) + "px"
        },
        A = function (e, t) {
            if (+e.style.opacity < 1) {
                t = t || 16,
                e.style.opacity = 0,
                e.style.display = "block";
                var n = +new Date,
                    r = function () {
                        e.style.opacity = +e.style.opacity + (new Date - n) / 100,
                        n = +new Date, + e.style.opacity < 1 && setTimeout(r, t)
                    };
                r()
            }
            e.style.display = "block"
        },
        Q = function (e, t) {
            t = t || 16,
            e.style.opacity = 1;
            var n = +new Date,
                r = function () {
                    e.style.opacity = +e.style.opacity - (new Date - n) / 100,
                    n = +new Date, + e.style.opacity > 0
                        ? setTimeout(r, t)
                        : e.style.display = "none"
                };
            r()
        },
        $ = function (n) {
            if (MouseEvent) {
                var r = new MouseEvent("click", {
                    view: e,
                    bubbles: !1,
                    cancelable: !0
                });
                n.dispatchEvent(r)
            } else if (t.createEvent) {
                var i = t.createEvent("MouseEvents");
                i.initEvent("click", !1, !1),
                n.dispatchEvent(i)
            } else 
                t.createEventObject
                    ? n.fireEvent("onclick")
                    : "function" == typeof n.onclick && n.onclick()
            },
        I = function (t) {
            "function" == typeof t.stopPropagation
                ? (t.stopPropagation(), t.preventDefault())
                : e.event && e
                    .event
                    .hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
        };
    e.sweetAlertInitialize = function () {
        var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabInd' +
                    'ex="-1"><div class="icon error"><span class="x-mark"><span class="line left"><' +
                    '/span><span class="line right"></span></span></div><div class="icon warning"> ' +
                    '<span class="body"></span> <span class="dot"></span> </div> <div class="icon i' +
                    'nfo"></div> <div class="icon success"> <span class="line tip"></span> <span cl' +
                    'ass="line long"></span> <div class="placeholder"></div> <div class="fix"></div' +
                    '> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button clas' +
                    's="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK' +
                    '</button></div>',
            n = t.createElement("div");
        n.innerHTML = e,
        t
            .body
            .appendChild(n)
    },
    e.sweetAlert = e.swal = function () {
        var e = arguments;
        if (null !== b()) 
            n.apply(this, e);
        else 
            var t = setInterval(function () {
                null !== b() && (clearInterval(t), n.apply(this, e))
            }, 100)
    },
    e.swal.setDefaults = function (e) {
        if (!e) 
            throw new Error("userParams is required");
        if ("object" != typeof e) 
            throw new Error("userParams has to be a object");
        o(g, e)
    },
    function () {
        "complete" === t.readyState || "interactive" === t.readyState && t.body
            ? e.sweetAlertInitialize()
            : t.addEventListener
                ? t.addEventListener("DOMContentLoaded", function n() {
                    t.removeEventListener("DOMContentLoaded", n, !1),
                    e.sweetAlertInitialize()
                }, !1)
                : t.attachEvent && t.attachEvent("onreadystatechange", function r() {
                    "complete" === t.readyState && (
                        t.detachEvent("onreadystatechange", r),
                        e.sweetAlertInitialize()
                    )
                })
    }()
}(window, document);
var ytp = ytp || {};
!function (jQuery, ytp) {
    var nAgt = navigator.userAgent;
    if (!jQuery.browser) {
        jQuery.browser = {},
        jQuery.browser.mozilla = !1,
        jQuery.browser.webkit = !1,
        jQuery.browser.opera = !1,
        jQuery.browser.safari = !1,
        jQuery.browser.chrome = !1,
        jQuery.browser.msie = !1,
        jQuery.browser.ua = nAgt,
        jQuery.browser.name = navigator.appName,
        jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
        jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset,
            verOffset,
            ix;
        if (-1 != (verOffset = nAgt.indexOf("Opera"))) 
            jQuery.browser.opera = !0,
            jQuery.browser.name = "Opera",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
            -1 != (verOffset = nAgt.indexOf("Version")) && (
                jQuery.browser.fullVersion = nAgt.substring(
                    verOffset + 8
                )
            );
        else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) 
            jQuery.browser.msie = !0,
            jQuery.browser.name = "Microsoft Internet Explorer",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
        else if (-1 != nAgt.indexOf("Trident")) {
            jQuery.browser.msie = !0,
            jQuery.browser.name = "Microsoft Internet Explorer";
            var start = nAgt.indexOf("rv:") + 3,
                end = start + 4;
            jQuery.browser.fullVersion = nAgt.substring(start, end)
        } else - 1 != (verOffset = nAgt.indexOf("Chrome"))
                ? (
                    jQuery.browser.webkit = !0,
                    jQuery.browser.chrome = !0,
                    jQuery.browser.name = "Chrome",
                    jQuery.browser.fullVersion = nAgt.substring(
                        verOffset + 7
                    )
                )
                : -1 != (verOffset = nAgt.indexOf("Safari"))
                    ? (
                        jQuery.browser.webkit = !0,
                        jQuery.browser.safari = !0,
                        jQuery.browser.name = "Safari",
                        jQuery.browser.fullVersion = nAgt.substring(
                            verOffset + 7
                        ),
                        -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(
                            verOffset + 8
                        ))
                    )
                    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
                        ? (
                            jQuery.browser.webkit = !0,
                            jQuery.browser.name = "Safari",
                            jQuery.browser.fullVersion = nAgt.substring(
                                verOffset + 7
                            ),
                            -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(
                                verOffset + 8
                            ))
                        )
                        : -1 != (verOffset = nAgt.indexOf("Firefox"))
                            ? (
                                jQuery.browser.mozilla = !0,
                                jQuery.browser.name = "Firefox",
                                jQuery.browser.fullVersion = nAgt.substring(
                                    verOffset + 8
                                )
                            )
                            : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (
                                verOffset = nAgt.lastIndexOf("/")
                            ) && (
                                jQuery.browser.name = nAgt.substring(nameOffset, verOffset),
                                jQuery.browser.fullVersion = nAgt.substring(
                                    verOffset + 1
                                ),
                                jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)
                            );
        
- 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (
            jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)
        ),
        -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (
            jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)
        ),
        jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
        isNaN(jQuery.browser.majorVersion) && (
            jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
            jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)
        ),
        jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.browser.android = /Android/i.test(nAgt),
    jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt),
    jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt),
    jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
    jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt),
    jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt),
    jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle,
    jQuery.fn.CSSAnimate = function (e, t, n, r, i) {
        function o(e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            })
        }
        function a(e, t) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/)
                ? "" + e + t
                : e
        }
        return jQuery.support.CSStransition = function () {
            var e = (document.body || document.documentElement).style;
            return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
        }(),
        this.each(function () {
            var l = this,
                s = jQuery(this);
            l.id = l.id || "CSSA_" + (
                new Date
            ).getTime();
            var u = u || {
                type: "noEvent"
            };
            if (l.CSSAIsRunning && l.eventType == u.type) 
                l.CSSqueue = function () {
                    s.CSSAnimate(e, t, n, r, i)
                };
            else if (l.CSSqueue = null, l.eventType = u.type, 0 !== s.length && e) {
                if (
                    l.CSSAIsRunning = !0,
                    "function" == typeof t && (i = t, t = jQuery.fx.speeds._default),
                    "function" == typeof n && (i = n, n = 0),
                    "function" == typeof r && (i = r, r = "cubic-bezier(0.65,0.03,0.36,0.72)"),
                    "string" == typeof t
                ) 
                    for (var c in jQuery.fx.speeds) {
                        if (t == c) {
                            t = jQuery
                                .fx
                                .speeds[c];
                            break
                        }
                        t = jQuery.fx.speeds._default
                    }
                if (t || (t = jQuery.fx.speeds._default), jQuery.support.CSStransition) {
                    u = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    },
                    u[r] && (r = u[r]);
                    var d = "",
                        f = "transitionEnd";
                    jQuery.browser.webkit
                        ? (d = "-webkit-", f = "webkitTransitionEnd")
                        : jQuery.browser.mozilla
                            ? (d = "-moz-", f = "transitionend")
                            : jQuery.browser.opera
                                ? (d = "-o-", f = "otransitionend")
                                : jQuery.browser.msie && (d = "-ms-", f = "msTransitionEnd"),
                    u = [];
                    for (p in e) 
                        c = p,
                        "transform" === c && (c = d + "transform", e[c] = e[p], delete e[p]),
                        "filter" === c && (c = d + "filter", e[c] = e[p], delete e[p]),
                        "transform-origin" !== c && "origin" !== c || (
                            c = d + "transform-origin",
                            e[c] = e[p],
                            delete e[p]
                        ),
                        "x" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " translateX(" + a(e[p], "px") + ")",
                            delete e[p]
                        ),
                        "y" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " translateY(" + a(e[p], "px") + ")",
                            delete e[p]
                        ),
                        "z" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " translateZ(" + a(e[p], "px") + ")",
                            delete e[p]
                        ),
                        "rotate" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " rotate(" + a(e[p], "deg") + ")",
                            delete e[p]
                        ),
                        "rotateX" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " rotateX(" + a(e[p], "deg") + ")",
                            delete e[p]
                        ),
                        "rotateY" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " rotateY(" + a(e[p], "deg") + ")",
                            delete e[p]
                        ),
                        "rotateZ" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " rotateZ(" + a(e[p], "deg") + ")",
                            delete e[p]
                        ),
                        "scale" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " scale(" + a(e[p], "") + ")",
                            delete e[p]
                        ),
                        "scaleX" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " scaleX(" + a(e[p], "") + ")",
                            delete e[p]
                        ),
                        "scaleY" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " scaleY(" + a(e[p], "") + ")",
                            delete e[p]
                        ),
                        "scaleZ" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " scaleZ(" + a(e[p], "") + ")",
                            delete e[p]
                        ),
                        "skew" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " skew(" + a(e[p], "deg") + ")",
                            delete e[p]
                        ),
                        "skewX" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " skewX(" + a(e[p], "deg") + ")",
                            delete e[p]
                        ),
                        "skewY" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " skewY(" + a(e[p], "deg") + ")",
                            delete e[p]
                        ),
                        "perspective" === c && (
                            c = d + "transform",
                            e[c] = e[c] || "",
                            e[c] += " perspective(" + a(e[p], "px") + ")",
                            delete e[p]
                        ),
                        0 > u.indexOf(c) && u.push(o(c));
                    var p = u.join(","),
                        h = function () {
                            s.off(f + "." + l.id),
                            clearTimeout(l.timeout),
                            s.css(d + "transition", ""),
                            "function" == typeof i && i(s),
                            l.called = !0,
                            l.CSSAIsRunning = !1,
                            "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null)
                        },
                        m = {};
                    jQuery.extend(m, e),
                    m[d + "transition-property"] = p,
                    m[d + "transition-duration"] = t + "ms",
                    m[d + "transition-delay"] = n + "ms",
                    m[d + "transition-style"] = "preserve-3d",
                    m[d + "transition-timing-function"] = r,
                    setTimeout(function () {
                        s.one(f + "." + l.id, h),
                        s.css(m)
                    }, 1),
                    l.timeout = setTimeout(function () {
                        s.called || !i
                            ? (s.called = !1, l.CSSAIsRunning = !1)
                            : (
                                s.css(d + "transition", ""),
                                i(s),
                                l.CSSAIsRunning = !1,
                                "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null)
                            )
                    }, t + n + 100)
                } else {
                    for (var p in e) 
                        "transform" === p && delete e[p],
                        "filter" === p && delete e[p],
                        "transform-origin" === p && delete e[p],
                        "auto" === e[p] && delete e[p];
                    i && "string" != typeof i || (i = "linear"),
                    s.animate(e, t, i)
                }
            }
        })
    },
    !function (e) {
        e.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            init: function (t) {
                return this.each(function () {
                    var n = this,
                        r = e(n);
                    r.addClass("simpleSlider"),
                    n.opt = {},
                    e.extend(n.opt, e.simpleSlider.defaults, t),
                    e.extend(n.opt, r.data());
                    var i = "h" == n.opt.orientation
                            ? "horizontal"
                            : "vertical",
                        o = e("<div/>")
                            .addClass("level")
                            .addClass(i);
                    r.prepend(o),
                    n.level = o,
                    r.css({cursor: "default"}),
                    "auto" == n.opt.scale && (n.opt.scale = e(n).outerWidth()),
                    r.updateSliderVal(),
                    n.opt.readonly || (
                        r.on("mousedown", function (e) {
                            n.canSlide = !0,
                            r.updateSliderVal(e)
                        }),
                        e(document).on("mousemove", function (t) {
                            n.canSlide && (
                                e(document).css({cursor: "default"}),
                                r.updateSliderVal(t),
                                t.preventDefault(),
                                t.stopPropagation()
                            )
                        }).on("mouseup", function () {
                            e(document).css({cursor: "auto"}),
                            n.canSlide = !1
                        })
                    )
                })
            },
            updateSliderVal: function (t) {
                function n(e, t) {
                    return Math.floor(100 * e / t)
                }
                var r = this,
                    i = r.get(0);
                i.opt.initialval = "number" == typeof i.opt.initialval
                    ? i.opt.initialval
                    : i
                        .opt
                        .initialval(i);
                var o = e(i).outerWidth(),
                    a = e(i).outerHeight();
                i.x = "object" == typeof t
                    ? t.clientX + document.body.scrollLeft - r
                        .offset()
                        .left
                    : "number" == typeof t
                        ? t * o / i.opt.scale
                        : i.opt.initialval * o / i.opt.scale,
                i.y = "object" == typeof t
                    ? t.clientY + document.body.scrollTop - r
                        .offset()
                        .top
                    : "number" == typeof t
                        ? (i.opt.scale - i.opt.initialval - t) * a / i.opt.scale
                        : i.opt.initialval * a / i.opt.scale,
                i.y = r.outerHeight() - i.y,
                i.scaleX = i.x * i.opt.scale / o,
                i.scaleY = i.y * i.opt.scale / a,
                i.outOfRangeX = i.scaleX > i.opt.scale
                    ? i.scaleX - i.opt.scale
                    : i.scaleX < 0
                        ? i.scaleX
                        : 0,
                i.outOfRangeY = i.scaleY > i.opt.scale
                    ? i.scaleY - i.opt.scale
                    : i.scaleY < 0
                        ? i.scaleY
                        : 0,
                i.outOfRange = "h" == i.opt.orientation
                    ? i.outOfRangeX
                    : i.outOfRangeY,
                i.value = "undefined" != typeof t
                    ? "h" == i.opt.orientation
                        ? i.x >= r.outerWidth()
                            ? i.opt.scale
                            : i.x <= 0
                                ? 0
                                : i.scaleX
                        : i.y >= r.outerHeight()
                            ? i.opt.scale
                            : i.y <= 0
                                ? 0
                                : i.scaleY
                    : "h" == i.opt.orientation
                        ? i.scaleX
                        : i.scaleY,
                "h" == i.opt.orientation
                    ? i
                        .level
                        .width(n(i.x, o) + "%")
                    : i
                        .level
                        .height(n(i.y, a)),
                "function" == typeof i.opt.callback && i
                    .opt
                    .callback(i)
            }
        },
        e.fn.simpleSlider = e.simpleSlider.init,
        e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
    }(jQuery),
    jQuery.mbStorage = {
        set: function (e, t) {
            t = JSON.stringify(t),
            localStorage.setItem(e, t)
        },
        get: function (e) {
            return localStorage[e]
                ? JSON.parse(localStorage[e])
                : null
        },
        remove: function (e) {
            e
                ? localStorage.removeItem(e)
                : localStorage.clear()
        }
    };
    var getYTPVideoID = function (e) {
        var t,
            n;
        return e.indexOf("youtu.be") > 0
            ? (
                t = e.substr(e.lastIndexOf("/") + 1, e.length),
                n = t.indexOf("?list=") > 0
                    ? t.substr(t.lastIndexOf("="), t.length)
                    : null,
                t = n
                    ? t.substr(0, t.lastIndexOf("?"))
                    : t
            )
            : e.indexOf("http") > -1
                ? (
                    t = e.match(/[\\?&]v=([^&#]*)/)[1],
                    n = e.indexOf("list=") > 0
                        ? e.match(/[\\?&]list=([^&#]*)/)[1]
                        : null
                )
                : (
                    t = e.length > 15
                        ? null
                        : e,
                    n = t
                        ? null
                        : e
                ), {
            videoID: t,
            playlistID: n
        }
    };
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.9.1",
        author: "Matteo Bicocchi",
        defaults: {
            apiKey: "",
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            gaTrack: !0,
            optimizeDisplay: !0,
            onReady: function (e) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        locationProtocol: "https:",
        buildPlayer: function (options) {
            return this.each(function () {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0,
                YTPlayer.opt = {},
                YTPlayer.state = {},
                YTPlayer.filtersEnabled = !0,
                YTPlayer.filters = {
                    grayscale: {
                        value: 0,
                        unit: "%"
                    },
                    hue_rotate: {
                        value: 0,
                        unit: "deg"
                    },
                    invert: {
                        value: 0,
                        unit: "%"
                    },
                    opacity: {
                        value: 0,
                        unit: "%"
                    },
                    saturate: {
                        value: 0,
                        unit: "%"
                    },
                    sepia: {
                        value: 0,
                        unit: "%"
                    },
                    brightness: {
                        value: 0,
                        unit: "%"
                    },
                    contrast: {
                        value: 0,
                        unit: "%"
                    },
                    blur: {
                        value: 0,
                        unit: "px"
                    }
                },
                $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data(
                    "property"
                )
                    ? eval("(" + $YTPlayer.data("property") + ")")
                    : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && (
                    property.vol = 0 == property.vol
                        ? property.vol = 1
                        : property.vol
                ),
                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property),
                YTPlayer.hasChanged || (
                    YTPlayer.defaultOpt = {},
                    jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)
                ),
                YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function () {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.canGoFullScreen = !(
                    jQuery.browser.msie || jQuery.browser.opera || isIframe()
                ),
                YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1),
                $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (
                    new Date
                ).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1,
                YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL
                        ? getYTPVideoID(this.opt.videoURL).videoID
                        : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID,
                    playlistID = this.opt.videoURL
                        ? getYTPVideoID(this.opt.videoURL).playlistID
                        : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
                YTPlayer.videoID = videoID,
                YTPlayer.playlistID = playlistID,
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations
                    ? "0"
                    : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                document
                    .createElement("video")
                    .canPlayType && jQuery.extend(playerVars, {html5: 1}),
                jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>")
                        .attr("id", playerID)
                        .addClass("playerBox"),
                    overlay = jQuery("<div/>")
                        .css(
                            {position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}
                        )
                        .addClass("YTPOverlay");
                if (
                    YTPlayer.isSelf = "self" == YTPlayer.opt.containment,
                    YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery(
                        "self" == YTPlayer.opt.containment
                            ? this
                            : YTPlayer.opt.containment
                    ),
                    YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(),
                    !YTPlayer.isBackground || !ytp.backgroundIsInited
                ) {
                    var isPlayer = YTPlayer
                        .opt
                        .containment
                        .is(jQuery(this));
                    if (
                        YTPlayer.canPlayOnMobile = isPlayer && 0 == jQuery(this).children().length,
                        isPlayer
                            ? YTPlayer.isPlayer = !0
                            : $YTPlayer.hide(),
                        jQuery.browser.mobile && !YTPlayer.canPlayOnMobile
                    ) 
                        return void $YTPlayer.remove();
                    var wrapper = jQuery("<div/>")
                        .addClass("mbYTP_wrapper")
                        .attr("id", "wrapper_" + playerID);
                    if (
                        wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }),
                        playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }),
                        wrapper.append(playerBox),
                        YTPlayer.opt.containment.children().not("script, style").each(function () {
                            "static" == jQuery(this).css("position") && jQuery(this).css(
                                "position",
                                "relative"
                            )
                        }),
                        YTPlayer.isBackground
                            ? (
                                jQuery("body").css({boxSizing: "border-box"}),
                                wrapper.css({position: "fixed", top: 0, left: 0, zIndex: 0}),
                                $YTPlayer.hide()
                            )
                            : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css(
                                {position: "relative"}
                            ),
                        YTPlayer.opt.containment.prepend(wrapper),
                        YTPlayer.wrapper = wrapper,
                        playerBox.css({opacity: 1}),
                        jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay),
                        YTPlayer.isBackground || overlay.on("mouseenter", function () {
                            YTPlayer.controlBar && YTPlayer
                                .controlBar
                                .addClass("visible")
                        }).on("mouseleave", function () {
                            YTPlayer.controlBar && YTPlayer
                                .controlBar
                                .removeClass("visible")
                        }),
                        ytp.YTAPIReady
                    ) 
                        setTimeout(function () {
                            jQuery(document).trigger("YTAPIReady")
                        }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" +
                                    jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery(document).on("YTAPIReady", function () {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (
                            YTPlayer.isBackground && (ytp.backgroundIsInited = !0),
                            YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay
                                ? !!YTPlayer.isBackground
                                : YTPlayer.opt.autoPlay,
                            YTPlayer.opt.vol = YTPlayer.opt.vol
                                ? YTPlayer.opt.vol
                                : 100,
                            jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),
                            jQuery(YTPlayer).on("YTPChanged", function () {
                                if (!YTPlayer.isInit) {
                                    if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                        if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                            YTPlayer
                                                .opt
                                                .containment
                                                .css({maxWidth: "100%"});
                                            var h = .6 * YTPlayer
                                                .opt
                                                .containment
                                                .outerWidth();
                                            YTPlayer
                                                .opt
                                                .containment
                                                .css({maxHeight: h})
                                        }
                                        return void new YT.Player(playerID, {
                                            videoId: YTPlayer
                                                .videoID
                                                .toString(),
                                            height: "100%",
                                            width: "100%",
                                            events: {
                                                onReady: function (e) {
                                                    YTPlayer.player = e.target,
                                                    playerBox.css({opacity: 1}),
                                                    YTPlayer
                                                        .wrapper
                                                        .css({opacity: 1})
                                                }
                                            }
                                        })
                                    }
                                    new YT.Player(playerID, {
                                        videoId: YTPlayer
                                            .videoID
                                            .toString(),
                                        playerVars: playerVars,
                                        events: {
                                            onReady: function (e) {
                                                if (YTPlayer.player = e.target, !YTPlayer.isReady) {
                                                    YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay),
                                                    YTPlayer.playerEl = YTPlayer
                                                        .player
                                                        .getIframe(),
                                                    $YTPlayer.optimizeDisplay(),
                                                    YTPlayer.videoID = videoID,
                                                    jQuery(window).on("resize.YTP", function () {
                                                        $YTPlayer.optimizeDisplay()
                                                    }),
                                                    jQuery
                                                        .mbYTPlayer
                                                        .checkForState(YTPlayer);
                                                    var t = jQuery.Event("YTPUnstarted");
                                                    t.time = YTPlayer.player.time,
                                                    YTPlayer.canTrigger && jQuery(YTPlayer).trigger(t)
                                                }
                                            },
                                            onStateChange: function (event) {
                                                if ("function" == typeof event.target.getPlayerState) {
                                                    var state = event
                                                        .target
                                                        .getPlayerState();
                                                    if (YTPlayer.state != state) {
                                                        YTPlayer.state = state;
                                                        var eventType;
                                                        switch (state) {
                                                            case - 1:
                                                                eventType = "YTPUnstarted";
                                                                break;
                                                            case 0:
                                                                eventType = "YTPEnd";
                                                                break;
                                                            case 1:
                                                                eventType = "YTPStart",
                                                                YTPlayer.controlBar && YTPlayer
                                                                    .controlBar
                                                                    .find(".mb_YTPPlaypause")
                                                                    .html(jQuery.mbYTPlayer.controls.pause),
                                                                "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push([
                                                                    "_trackEvent", "YTPlayer", "Play", YTPlayer.videoData.title || YTPlayer
                                                                        .videoID
                                                                        .toString()
                                                                ]),
                                                                "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga(
                                                                    "send",
                                                                    "event",
                                                                    "YTPlayer",
                                                                    "play",
                                                                    YTPlayer.videoData.title || YTPlayer.videoID.toString()
                                                                );
                                                                break;
                                                            case 2:
                                                                eventType = "YTPPause",
                                                                YTPlayer.controlBar && YTPlayer
                                                                    .controlBar
                                                                    .find(".mb_YTPPlaypause")
                                                                    .html(jQuery.mbYTPlayer.controls.play);
                                                                break;
                                                            case 3:
                                                                YTPlayer
                                                                    .player
                                                                    .setPlaybackQuality(YTPlayer.opt.quality),
                                                                eventType = "YTPBuffering",
                                                                YTPlayer.controlBar && YTPlayer
                                                                    .controlBar
                                                                    .find(".mb_YTPPlaypause")
                                                                    .html(jQuery.mbYTPlayer.controls.play);
                                                                break;
                                                            case 5:
                                                                eventType = "YTPCued"
                                                        }
                                                        var YTPevent = jQuery.Event(eventType);
                                                        YTPevent.time = YTPlayer.player.time,
                                                        YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPevent)
                                                    }
                                                }
                                            },
                                            onPlaybackQualityChange: function (e) {
                                                var t = e
                                                        .target
                                                        .getPlaybackQuality(),
                                                    n = jQuery.Event("YTPQualityChange");
                                                n.quality = t,
                                                jQuery(YTPlayer).trigger(n)
                                            },
                                            onError: function (e) {
                                                150 == e.data && (
                                                    console.log("Embedding this video is restricted by Youtube."),
                                                    YTPlayer.isPlayList && jQuery(YTPlayer).playNext()
                                                ),
                                                2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(),
                                                "function" == typeof YTPlayer.opt.onError && YTPlayer
                                                    .opt
                                                    .onError($YTPlayer, e)
                                            }
                                        }
                                    })
                                }
                            })
                        )
                    })
                }
            })
        },
        getDataFromAPI: function (e) {
            if (
                e.videoData = jQuery.mbStorage.get("YYTPlayer_data_" + e.videoID),
                e.videoData
            ) 
                setTimeout(function () {
                    "auto" == e.opt.ratio
                        ? e.opt.ratio = "16/9"
                        : e.opt.ratio,
                    e.dataReceived = !0,
                    jQuery(e).trigger("YTPChanged");
                    var t = jQuery.Event("YTPData");
                    t.prop = {};
                    for (var n in e.videoData) 
                        t.prop[n] = e.videoData[n];
                    jQuery(e).trigger(t)
                }, 500);
            else if (e.opt.apiKey) 
                jQuery.getJSON(
                    "https://www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + e.opt.apiKey +
                            "&part=snippet",
                    function (t) {
                        function n(t) {
                            e.videoData = {},
                            e.videoData.id = e.videoID,
                            e.videoData.channelTitle = t.channelTitle,
                            e.videoData.title = t.title,
                            e.videoData.description = t.description.length < 400
                                ? t.description
                                : t
                                    .description
                                    .substring(0, 400) + " ...",
                            e.videoData.aspectratio = "auto" == e.opt.ratio
                                ? "16/9"
                                : "4/3",
                            e.opt.ratio = e.videoData.aspectratio,
                            e.videoData.thumb_max = t.thumbnails.maxres
                                ? t.thumbnails.maxres.url
                                : null,
                            e.videoData.thumb_high = t.thumbnails.high
                                ? t.thumbnails.high.url
                                : null,
                            e.videoData.thumb_medium = t.thumbnails.medium
                                ? t.thumbnails.medium.url
                                : null,
                            jQuery
                                .mbStorage
                                .set("YYTPlayer_data_" + e.videoID, e.videoData)
                        }
                        e.dataReceived = !0,
                        jQuery(e).trigger("YTPChanged"),
                        n(t.items[0].snippet);
                        var r = jQuery.Event("YTPData");
                        r.prop = {};
                        for (var i in e.videoData) 
                            r.prop[i] = e.videoData[i];
                        jQuery(e).trigger(r)
                    }
                );
            else {
                if (e.hasData = !1, setTimeout(function () {
                    jQuery(e).trigger("YTPChanged")
                }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var t = "https://i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                    e
                        .opt
                        .containment
                        .css({
                            background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                            backgroundSize: "cover"
                        })
                }
                e.videoData = null,
                "auto" == e.opt.ratio
                    ? "16/9"
                    : "4/3"
            }
            jQuery(e)
                .off("YTPData.YTPlayer")
                .on("YTPData.YTPlayer", function () {
                    if (!e.hasData && (e.hasData = !0, e.isPlayer && !e.opt.autoPlay)) {
                        var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                        e
                            .opt
                            .containment
                            .css({
                                background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                                backgroundSize: "cover"
                            })
                    }
                }),
            e.isPlayer && !e.opt.autoPlay && (
                e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(),
                jQuery(e).append(e.loading),
                e.loading.fadeIn()
            )
        },
        removeStoredData: function () {
            jQuery
                .mbStorage
                .remove()
        },
        getVideoData: function () {
            var e = this.get(0);
            return e.videoData
        },
        getVideoID: function () {
            var e = this.get(0);
            return e.videoID || !1
        },
        setVideoQuality: function (e) {
            var t = this.get(0);
            jQuery.browser.chrome || t
                .player
                .setPlaybackQuality(e)
        },
        playlist: function (e, t, n) {
            var r = this,
                i = r.get(0);
            return i.isPlayList = !0,
            t && (e = jQuery.shuffle(e)),
            i.videoID || (
                i.videos = e,
                i.videoCounter = 0,
                i.videoLength = e.length,
                jQuery(i).data("property", e[0]),
                jQuery(i).mb_YTPlayer()
            ),
            "function" == typeof n && jQuery(i).on("YTPChanged", function () {
                n(i)
            }),
            jQuery(i).on("YTPEnd", function () {
                jQuery(i).playNext()
            }),
            r
        },
        playNext: function () {
            var e = this.get(0);
            e.videoCounter++,
            e.videoCounter >= e.videoLength && (e.videoCounter = 0),
            jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        playPrev: function () {
            var e = this.get(0);
            e.videoCounter--,
            e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1),
            jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        changeMovie: function (e) {
            var t = this.get(0);
            t.opt.startAt = 0,
            t.opt.stopAt = 0,
            t.opt.mute = !0,
            t.hasData = !1,
            t.hasChanged = !0,
            e && jQuery.extend(t.opt, t.defaultOpt, e),
            t.videoID = getYTPVideoID(t.opt.videoURL).videoID,
            jQuery(t.playerEl).CSSAnimate({
                opacity: 0
            }, 200, function () {
                jQuery(t)
                    .YTPGetPlayer()
                    .cueVideoByUrl(encodeURI(
                        jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID
                    ), 1, t.opt.quality),
                jQuery
                    .mbYTPlayer
                    .checkForState(t),
                jQuery(t).optimizeDisplay(),
                jQuery
                    .mbYTPlayer
                    .getDataFromAPI(t)
            })
        },
        getPlayer: function () {
            return jQuery(this)
                .get(0)
                .player
        },
        playerDestroy: function () {
            var e = this.get(0);
            ytp.YTAPIReady = !1,
            ytp.backgroundIsInited = !1,
            e.isInit = !1,
            e.videoID = null;
            var t = e.wrapper;
            t.remove(),
            jQuery("#controlBar_" + e.id).remove(),
            clearInterval(e.checkForStartAt),
            clearInterval(e.getState)
        },
        fullscreen: function (real) {
            function hideMouse() {
                YTPlayer
                    .overlay
                    .css({cursor: "none"})
            }
            function RunPrefixMethod(e, t) {
                for (var n, r, i = [
                    "webkit", "moz", "ms", "o", ""
                ], o = 0; o < i.length && !e[n];) {
                    if (
                        n = t,
                        "" == i[o] && (n = n.substr(0, 1).toLowerCase() + n.substr(1)),
                        n = i[o] + n,
                        r = typeof e[n],
                        "undefined" != r
                    ) 
                        return i = [i[o]],
                        "function" == r
                            ? e[n]()
                            : e[n];
                    o++
                }
            }
            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }
            function cancelFullscreen() {
                (
                    RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")
                ) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen),
            real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isSelf
                    ? YTPlayer.opt.containment
                    : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla
                    ? "mozfullscreenchange"
                    : jQuery.browser.webkit
                        ? "webkitfullscreenchange"
                        : "fullscreenchange";
                jQuery(document)
                    .off(fullscreenchange)
                    .on(fullscreenchange, function () {
                        var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(
                            document,
                            "FullScreen"
                        );
                        e
                            ? (
                                jQuery(YTPlayer).YTPSetVideoQuality("default"),
                                jQuery(YTPlayer).trigger("YTPFullScreenStart")
                            )
                            : (
                                YTPlayer.isAlone = !1,
                                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                                jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                                videoWrapper.removeClass("fullscreen"),
                                videoWrapper.CSSAnimate({
                                    opacity: YTPlayer.opt.opacity
                                }, 500),
                                videoWrapper.css({zIndex: 0}),
                                YTPlayer.isBackground
                                    ? jQuery("body").after(controls)
                                    : YTPlayer.wrapper.before(controls),
                                jQuery(window).resize(),
                                jQuery(YTPlayer).trigger("YTPFullScreenEnd")
                            )
                    })
            }
            YTPlayer.isAlone
                ? (
                    jQuery(document).off("mousemove.YTPlayer"),
                    YTPlayer.overlay.css({cursor: "auto"}),
                    real
                        ? cancelFullscreen()
                        : (videoWrapper.CSSAnimate({
                            opacity: YTPlayer.opt.opacity
                        }, 500), videoWrapper.css({zIndex: 0})),
                    fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                    YTPlayer.isAlone = !1
                )
                : (
                    jQuery(document).on("mousemove.YTPlayer", function (e) {
                        YTPlayer
                            .overlay
                            .css({cursor: "auto"}),
                        clearTimeout(YTPlayer.hideCursor),
                        jQuery(e.target)
                            .parents()
                            .is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
                    }),
                    hideMouse(),
                    real
                        ? (
                            videoWrapper.css({opacity: 0}),
                            videoWrapper.addClass("fullscreen"),
                            launchFullscreen(videoWrapper.get(0)),
                            setTimeout(function () {
                                videoWrapper.CSSAnimate({
                                    opacity: 1
                                }, 1e3),
                                YTPlayer
                                    .wrapper
                                    .append(controls),
                                jQuery(YTPlayer).optimizeDisplay(),
                                YTPlayer
                                    .player
                                    .seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                            }, 500)
                        )
                        : videoWrapper.css({zIndex: 1e4}).CSSAnimate({
                            opacity: 1
                        }, 1e3),
                    fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
                    YTPlayer.isAlone = !0
                )
        },
        toggleLoops: function () {
            var e = this.get(0),
                t = e.opt;
            1 == t.loop
                ? t.loop = 0
                : (
                    t.startAt
                        ? e.player.seekTo(t.startAt)
                        : e.player.playVideo(),
                    t.loop = 1
                )
        },
        play: function () {
            var e = this.get(0);
            if (e.isReady) {
                var t = jQuery("#controlBar_" + e.id),
                    n = t.find(".mb_YTPPlaypause");
                n.html(jQuery.mbYTPlayer.controls.pause),
                e
                    .player
                    .playVideo(),
                e
                    .wrapper
                    .CSSAnimate({
                        opacity: e.isAlone
                            ? 1
                            : e.opt.opacity
                    }, 2e3),
                jQuery(e.playerEl).CSSAnimate({
                    opacity: 1
                }, 1e3),
                jQuery(e).css("background-image", "none")
            }
        },
        togglePlay: function (e) {
            var t = this.get(0);
            1 == t.state
                ? this.YTPPause()
                : this.YTPPlay(),
            "function" == typeof e && e(t.state)
        },
        stop: function () {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPPlaypause");
            n.html(jQuery.mbYTPlayer.controls.play),
            e
                .player
                .stopVideo();
        },
        pause: function () {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPPlaypause");
            n.html(jQuery.mbYTPlayer.controls.play),
            e
                .player
                .pauseVideo()
        },
        seekTo: function (e) {
            var t = this.get(0);
            t
                .player
                .seekTo(e, !0)
        },
        setVolume: function (e) {
            var t = this.get(0);
            e || t.opt.vol || 0 != t
                .player
                .getVolume()
                    ? !e && t
                        .player
                        .getVolume() > 0 || e && t
                        .opt
                        .vol == e
                            ? t.isMute
                                ? jQuery(t).YTPUnmute()
                                : jQuery(t).YTPMute()
                            : (
                                t.opt.vol = e,
                                t.player.setVolume(t.opt.vol),
                                t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)
                            )
                    : jQuery(t).YTPUnmute()
        },
        mute: function () {
            var e = this.get(0);
            if (!e.isMute) {
                e
                    .player
                    .mute(),
                e.isMute = !0,
                e
                    .player
                    .setVolume(0),
                e.volumeBar && e.volumeBar.length && e
                    .volumeBar
                    .updateSliderVal(0);
                var t = jQuery("#controlBar_" + e.id),
                    n = t.find(".mb_YTPMuteUnmute");
                n.html(jQuery.mbYTPlayer.controls.unmute),
                jQuery(e).addClass("isMuted"),
                e.volumeBar && e.volumeBar.length && e
                    .volumeBar
                    .addClass("muted");
                var r = jQuery.Event("YTPMuted");
                r.time = e.player.time,
                e.canTrigger && jQuery(e).trigger(r)
            }
        },
        unmute: function () {
            var e = this.get(0);
            if (e.isMute) {
                e
                    .player
                    .unMute(),
                e.isMute = !1,
                e
                    .player
                    .setVolume(e.opt.vol),
                e.volumeBar && e.volumeBar.length && e
                    .volumeBar
                    .updateSliderVal(
                        e.opt.vol > 10
                            ? e.opt.vol
                            : 10
                    );
                var t = jQuery("#controlBar_" + e.id),
                    n = t.find(".mb_YTPMuteUnmute");
                n.html(jQuery.mbYTPlayer.controls.mute),
                jQuery(e).removeClass("isMuted"),
                e.volumeBar && e.volumeBar.length && e
                    .volumeBar
                    .removeClass("muted");
                var r = jQuery.Event("YTPUnmuted");
                r.time = e.player.time,
                e.canTrigger && jQuery(e).trigger(r)
            }
        },
        applyFilter: function (e, t) {
            var n = this.get(0);
            return n
                .filters[e]
                .value = t,
            n.filtersEnabled && this.YTPEnableFilters(),
            this
        },
        applyFilters: function (e) {
            var t = this.get(0);
            return this.on("YTPReady", function () {
                for (var n in e) 
                    t
                        .filters[n]
                        .value = e[n],
                    jQuery(t).YTPApplyFilter(n, e[n]);
                jQuery(t).trigger("YTPFiltersApplied")
            }),
            this
        },
        toggleFilter: function (e, t) {
            var n = this.get(0);
            return n
                .filters[e]
                .value
                    ? n
                        .filters[e]
                        .value = 0
                    : n
                        .filters[e]
                        .value = t,
            n.filtersEnabled && this.YTPEnableFilters(),
            this
        },
        disableFilters: function () {
            var e = this.get(0),
                t = jQuery(e.playerEl);
            return t.css("-webkit-filter", ""),
            t.css("filter", ""),
            e.filtersEnabled = !1,
            this
        },
        enableFilters: function () {
            var e = this.get(0),
                t = jQuery(e.playerEl),
                n = "";
            for (var r in e.filters) 
                e
                    .filters[r]
                    .value && (
                        n += r.replace("_", "-") + "(" + e.filters[r].value + e.filters[r].unit + ") "
                    );
            return t.css("-webkit-filter", n),
            t.css("filter", n),
            e.filtersEnabled = !0,
            this
        },
        toggleFilters: function (e) {
            var t = this.get(0);
            return t.filtersEnabled
                ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters())
                : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")),
            "function" == typeof e && e(t.filtersEnabled),
            this
        },
        removeFilter: function (e, t) {
            "function" == typeof e && (t = e, e = null);
            var n = this.get(0);
            if (e) 
                this.YTPApplyFilter(e, 0),
                "function" == typeof t && t(e);
            else 
                for (var r in n.filters) 
                    this.YTPApplyFilter(r, 0),
                    "function" == typeof t && t(r);
        return this
        },
        manageProgress: function () {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPProgress"),
                r = t.find(".mb_YTPLoaded"),
                i = t.find(".mb_YTPseekbar"),
                o = n.outerWidth(),
                a = Math.floor(e.player.getCurrentTime()),
                l = Math.floor(e.player.getDuration()),
                s = a * o / l,
                u = 0,
                c = 100 * e
                    .player
                    .getVideoLoadedFraction();
            return r.css({
                left: u,
                width: c + "%"
            }),
            i.css({left: 0, width: s}), {
                totalTime: l,
                currentTime: a
            }
        },
        buildControls: function (YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery(
                "#controlBar_" + YTPlayer.id
            ).length) {
                YTPlayer.controlBar = jQuery("<span/>")
                    .attr("id", "controlBar_" + YTPlayer.id)
                    .addClass("mb_YTPBar")
                    .css({
                        whiteSpace: "noWrap",
                        position: YTPlayer.isBackground
                            ? "fixed"
                            : "absolute",
                        zIndex: YTPlayer.isBackground
                            ? 1e4
                            : 1e3
                    })
                    .hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery(
                        "<span>" + jQuery.mbYTPlayer.controls.play + "</span>"
                    )
                        .addClass("mb_YTPPlaypause ytpicon")
                        .click(function () {
                            1 == YTPlayer
                                .player
                                .getPlayerState()
                                    ? jQuery(YTPlayer).YTPPause()
                                    : jQuery(YTPlayer).YTPPlay()
                        }),
                    MuteUnmute = jQuery(
                        "<span>" + jQuery.mbYTPlayer.controls.mute + "</span>"
                    )
                        .addClass("mb_YTPMuteUnmute ytpicon")
                        .click(function () {
                            0 == YTPlayer
                                .player
                                .getVolume()
                                    ? jQuery(YTPlayer).YTPUnmute()
                                    : jQuery(YTPlayer).YTPMute()
                        }),
                    volumeBar = jQuery("<div/>")
                        .addClass("mb_YTPVolumeBar")
                        .css({display: "inline-block"});
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                    vURL = data.videoURL
                        ? data.videoURL
                        : "";
                vURL.indexOf("http") < 0 && (
                    vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" +
                        data.videoURL
                );
                var movieUrl = jQuery("<span/>")
                        .html(jQuery.mbYTPlayer.controls.ytLogo)
                        .addClass("mb_YTPUrl ytpicon")
                        .attr("title", "view on YouTube")
                        .on("click", function () {
                            window.open(vURL, "viewOnYT")
                        }),
                    onlyVideo = jQuery("<span/>")
                        .html(jQuery.mbYTPlayer.controls.onlyYT)
                        .addClass("mb_OnlyYT ytpicon")
                        .on("click", function () {
                            jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                        }),
                    progressBar = jQuery("<div/>")
                        .addClass("mb_YTPProgress")
                        .css("position", "absolute")
                        .click(function (e) {
                            timeBar.css({
                                width: e.clientX - timeBar
                                    .offset()
                                    .left
                            }),
                            YTPlayer.timeW = e.clientX - timeBar
                                .offset()
                                .left,
                            YTPlayer
                                .controlBar
                                .find(".mb_YTPLoaded")
                                .css({width: 0});
                            var t = Math.floor(YTPlayer.player.getDuration());
                            YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(),
                            YTPlayer
                                .player
                                .seekTo(parseFloat(YTPlayer["goto"]), !0),
                            YTPlayer
                                .controlBar
                                .find(".mb_YTPLoaded")
                                .css({width: 0})
                        }),
                    loadedBar = jQuery("<div/>")
                        .addClass("mb_YTPLoaded")
                        .css("position", "absolute"),
                    timeBar = jQuery("<div/>")
                        .addClass("mb_YTPseekbar")
                        .css("position", "absolute");
                progressBar
                    .append(loadedBar)
                    .append(timeBar),
                buttonBar
                    .append(playpause)
                    .append(MuteUnmute)
                    .append(volumeBar)
                    .append(idx),
                data.showYTLogo && buttonBar.append(movieUrl),
                (
                    YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground
                ) && buttonBar.append(onlyVideo),
                YTPlayer
                    .controlBar
                    .append(buttonBar)
                    .append(progressBar),
                YTPlayer.isBackground
                    ? jQuery("body").after(YTPlayer.controlBar)
                    : (
                        YTPlayer.controlBar.addClass("inlinePlayer"),
                        YTPlayer.wrapper.before(YTPlayer.controlBar)
                    ),
                volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function (e) {
                        0 == e.value
                            ? jQuery(YTPlayer).YTPMute()
                            : jQuery(YTPlayer).YTPUnmute(),
                        YTPlayer
                            .player
                            .setVolume(e.value),
                        YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function (YTPlayer) {
            var interval = YTPlayer.opt.showControls
                ? 100
                : 1e3;
            return clearInterval(YTPlayer.getState),
            jQuery.contains(document, YTPlayer)
                ? (
                    jQuery.mbYTPlayer.checkForStart(YTPlayer),
                    void(YTPlayer.getState = setInterval(function () {
                        var prog = jQuery(YTPlayer).YTPManageProgress(),
                            $YTPlayer = jQuery(YTPlayer),
                            data = YTPlayer.opt,
                            startAt = YTPlayer.opt.startAt
                                ? YTPlayer.opt.startAt
                                : 0,
                            stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt
                                ? YTPlayer.opt.stopAt
                                : 0;
                        if (
                            stopAt = stopAt < YTPlayer.player.getDuration()
                                ? stopAt
                                : 0,
                            YTPlayer.player.time != prog.currentTime
                        ) {
                            var YTPevent = jQuery.Event("YTPTime");
                            YTPevent.time = YTPlayer.player.time,
                            jQuery(YTPlayer).trigger(YTPevent)
                        }
                        if (
                            YTPlayer.player.time = prog.currentTime,
                            0 == YTPlayer.player.getVolume()
                                ? $YTPlayer.addClass("isMuted")
                                : $YTPlayer.removeClass("isMuted"),
                            YTPlayer.opt.showControls && (
                                prog.totalTime
                                    ? YTPlayer.controlBar.find(".mb_YTPTime").html(
                                        jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)
                                    )
                                    : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")
                            ),
                            eval(YTPlayer.opt.stopMovieOnBlur) && (
                                document.hasFocus()
                                    ? document.hasFocus() && !YTPlayer.hasFocus && YTPlayer.state != -1 && 0 != YTPlayer.state && (
                                        YTPlayer.hasFocus = !0,
                                        $YTPlayer.YTPPlay()
                                    )
                                    : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())
                            ),
                            YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact
                                ? (
                                    YTPlayer.controlBar.addClass("compact"),
                                    YTPlayer.isCompact = !0,
                                    !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)
                                )
                                : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (
                                    YTPlayer.controlBar.removeClass("compact"),
                                    YTPlayer.isCompact = !1,
                                    !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)
                                ),
                            1 == YTPlayer.player.getPlayerState() && (
                                parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt
                            )
                        ) {
                            if (YTPlayer.isEnded) 
                                return;
                            if (YTPlayer.isEnded = !0, setTimeout(function () {
                                YTPlayer.isEnded = !1
                            }, 2e3), YTPlayer.isPlayList) {
                                clearInterval(YTPlayer.getState);
                                var YTPEnd = jQuery.Event("YTPEnd");
                                return YTPEnd.time = YTPlayer.player.time,
                                void jQuery(YTPlayer).trigger(YTPEnd)
                            }
                            data.loop
                                ? YTPlayer
                                    .player
                                    .seekTo(startAt, !0)
                                : (YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({
                                    opacity: 0
                                }, 1e3, function () {
                                    var e = jQuery.Event("YTPEnd");
                                    if (
                                        e.time = YTPlayer.player.time,
                                        jQuery(YTPlayer).trigger(e),
                                        YTPlayer.player.seekTo(startAt, !0),
                                        !YTPlayer.isBackground
                                    ) {
                                        var t = YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
                                        YTPlayer
                                            .opt
                                            .containment
                                            .css({
                                                background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                                                backgroundSize: "cover"
                                            })
                                    }
                                }))
                        }
                    }, interval))
                )
                : (
                    jQuery(YTPlayer).YTPPlayerDestroy(),
                    clearInterval(YTPlayer.getState),
                    void clearInterval(YTPlayer.checkForStartAt)
                )
        },
        checkForStart: function (e) {
            var t = jQuery(e);
            if (!jQuery.contains(document, e)) 
                return void jQuery(e).YTPPlayerDestroy();
            if (
                jQuery.browser.chrome && (e.opt.quality = "default"),
                e.player.pauseVideo(),
                jQuery(e).muteYTPVolume(),
                jQuery(
                    "#controlBar_" + e.id
                ).remove(),
                e.opt.showControls && jQuery.mbYTPlayer.buildControls(e),
                e.opt.addRaster
            ) {
                var n = "dot" == e.opt.addRaster
                    ? "raster-dot"
                    : "raster";
                e
                    .overlay
                    .addClass(
                        e.isRetina
                            ? n + " retina"
                            : n
                    )
            } else 
                e
                    .overlay
                    .removeClass(function (e, t) {
                        var n = t.split(" "),
                            r = [];
                        return jQuery.each(n, function (e, t) {
                            /raster.*/.test(t) && r.push(t)
                        }),
                        r.push("retina"),
                        r.join(" ")
                    });
            e.checkForStartAt = setInterval(function () {
                jQuery(e).YTPMute();
                var n = e.opt.startAt
                        ? e.opt.startAt
                        : 1,
                    r = e
                        .player
                        .getVideoLoadedFraction() > n / e
                        .player
                        .getDuration();
                if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= n && r) {
                    clearInterval(e.checkForStartAt),
                    e.isReady = !0,
                    "function" == typeof e.opt.onReady && e
                        .opt
                        .onReady(e);
                    var i = jQuery.Event("YTPReady");
                    jQuery(e).trigger(i),
                    e
                        .player
                        .pauseVideo(),
                    e.opt.mute || jQuery(e).YTPUnmute(),
                    e.canTrigger = !0,
                    e.opt.autoPlay
                        ? (
                            t.YTPPlay(),
                            t.css("background-image", "none"),
                            jQuery(e.playerEl).CSSAnimate({
                                opacity: 1
                            }, 1e3),
                            e.wrapper.CSSAnimate({
                                opacity: e.isAlone
                                    ? 1
                                    : e.opt.opacity
                            }, 1e3)
                        )
                        : e
                            .player
                            .pauseVideo(),
                    e.isPlayer && !e.opt.autoPlay && (
                        e.loading.html("Ready"),
                        setTimeout(function () {
                            e
                                .loading
                                .fadeOut()
                        }, 100)
                    ),
                    e.controlBar && e
                        .controlBar
                        .slideDown(1e3)
                } else 
                    n >= 0 && e
                        .player
                        .seekTo(n, !0)
                }, 1e3)
        },
        formatTime: function (e) {
            var t = Math.floor(e / 60),
                n = Math.floor(e - 60 * t);
            return (
                t <= 9
                    ? "0" + t
                    : t
            ) + " : " + (
                n <= 9
                    ? "0" + n
                    : n
            )
        }
    },
    jQuery.fn.toggleVolume = function () {
        var e = this.get(0);
        if (e) 
            return e
                .player
                .isMuted()
                    ? (jQuery(e).YTPUnmute(), !0)
                    : (jQuery(e).YTPMute(), !1)
            },
    jQuery.fn.optimizeDisplay = function () {
        var e = this.get(0),
            t = e.opt,
            n = jQuery(e.playerEl),
            r = {},
            i = e.wrapper;
        r.width = i.outerWidth(),
        r.height = i.outerHeight();
        var o = 24,
            a = 100,
            l = {};
        t.optimizeDisplay
            ? (
                l.width = r.width + r.width * o / 100,
                l.height = "16/9" == t.ratio
                    ? Math.ceil(9 * r.width / 16)
                    : Math.ceil(3 * r.width / 4),
                l.marginTop = -((l.height - r.height) / 2),
                l.marginLeft = -(r.width * (o / 2) / 100),
                l.height < r.height && (
                    l.height = r.height + r.height * o / 100,
                    l.width = "16/9" == t.ratio
                        ? Math.floor(16 * r.height / 9)
                        : Math.floor(4 * r.height / 3),
                    l.marginTop = -(r.height * (o / 2) / 100),
                    l.marginLeft = -((l.width - r.width) / 2)
                ),
                l.width += a,
                l.height += a,
                l.marginTop -= a / 2,
                l.marginLeft -= a / 2
            )
            : (l.width = "100%", l.height = "100%", l.marginTop = 0, l.marginLeft -= 0),
        n.css(
            {width: l.width, height: l.height, marginTop: l.marginTop, marginLeft: l.marginLeft}
        )
    },
    jQuery.shuffle = function (e) {
        for (var t = e.slice(), n = t.length, r = n; r--;) {
            var i = parseInt(Math.random() * n),
                o = t[r];
            t[r] = t[i],
            t[i] = o
        }
        return t
    },
    jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist,
    jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext,
    jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev,
    jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie,
    jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID,
    jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer,
    jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy,
    jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen,
    jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play,
    jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay,
    jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops,
    jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop,
    jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause,
    jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo,
    jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute,
    jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute,
    jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume,
    jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume,
    jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
    jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress,
    jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData,
    jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter,
    jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters,
    jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter,
    jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters,
    jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter,
    jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters,
    jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters,
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext,
    jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev,
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie,
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID,
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer,
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy,
    jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen,
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls,
    jQuery.fn.playYTP = jQuery.mbYTPlayer.play,
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops,
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop,
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause,
    jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo,
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute,
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute,
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume,
    jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress,
    jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp),
!function (e, t) {
    "function" == typeof define && define.amd
        ? define(["jquery"], t)
        : t(
            "object" == typeof exports
                ? require("jquery")
                : e.jQuery
        )
}(this, function (e) {
    "use strict";
    function t(e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            l,
            s = {};
        for (
            o = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","),
            l = 0,
            a = o.length;
            l < a && (n = o[l], n.search(/^(http|https|ftp):\/\//) === -1 && n.search(":") !== -1);
            l++
        ) 
            t = n.indexOf(":"),
            r = n.substring(0, t),
            i = n.substring(t + 1),
            i || (i = void 0),
            "string" == typeof i && (i = "true" === i || "false" !== i && i),
            "string" == typeof i && (
                i = isNaN(i)
                    ? i
                    : +i
            ),
            s[r] = i;
        return null == r && null == i
            ? e
            : s
    }
    function n(e) {
        e = "" + e;
        var t,
            n,
            r,
            i = e.split(/\s+/),
            o = "50%",
            a = "50%";
        for (r = 0, t = i.length; r < t; r++) 
            n = i[r],
            "left" === n
                ? o = "0%"
                : "right" === n
                    ? o = "100%"
                    : "top" === n
                        ? a = "0%"
                        : "bottom" === n
                            ? a = "100%"
                            : "center" === n
                                ? 0 === r
                                    ? o = "50%"
                                    : a = "50%"
                                : 0 === r
                                    ? o = n
                                    : a = n;
        return {x: o, y: a}
    }
    function r(t, n) {
        var r = function () {
            n(this.src)
        };
        e('<img src="' + t + '.gif">').load(r),
        e('<img src="' + t + '.jpg">').load(r),
        e('<img src="' + t + '.jpeg">').load(r),
        e('<img src="' + t + '.png">').load(r)
    }
    function i(n, r, i) {
        if (
            this.$element = e(n),
            "string" == typeof r && (r = t(r)),
            i
                ? "string" == typeof i && (i = t(i))
                : i = {},
            "string" == typeof r
        ) 
            r = r.replace(/\.\w*$/, "");
        else if ("object" == typeof r) 
            for (var o in r) 
                r.hasOwnProperty(o) && (r[o] = r[o].replace(/\.\w*$/, ""));
    this.settings = e.extend({}, a, i),
        this.path = r,
        this.init()
    }
    var o = "vide",
        a = {
            volume: 1,
            playbackRate: 1,
            muted: !0,
            loop: !0,
            autoplay: !0,
            position: "50% 50%",
            posterType: "detect",
            resizing: !0
        };
    i.prototype.init = function () {
        var t,
            i = this,
            o = n(i.settings.position),
            a = "";
        i.$wrapper = e("<div>").css({
            position: "absolute",
            "z-index": -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": o.x + " " + o.y
        }),
        t = i.path,
        "object" == typeof i.path && (
            i.path.poster
                ? t = i.path.poster
                : i.path.mp4
                    ? t = i.path.mp4
                    : i.path.webm
                        ? t = i.path.webm
                        : i.path.ogv && (t = i.path.ogv)
        ),
        "detect" === i.settings.posterType
            ? r(t, function (e) {
                i
                    .$wrapper
                    .css("background-image", "url(" + e + ")")
            })
            : "none" !== i.settings.posterType && i
                .$wrapper
                .css("background-image", "url(" + t + "." + i.settings.posterType + ")"),
        "static" === i
            .$element
            .css("position") && i
            .$element
            .css("position", "relative"),
        i
            .$element
            .prepend(i.$wrapper),
        "object" == typeof i.path
            ? (
                i.path.mp4 && (a += '<source src="' + i.path.mp4 + '.mp4" type="video/mp4">'),
                i.path.webm && (a += '<source src="' + i.path.webm + '.webm" type="video/webm">'),
                i.path.ogv && (a += '<source src="' + i.path.ogv + '.ogv" type="video/ogv">'),
                i.$video = e(
                    "<video>" + a + "</video>"
                )
            )
            : i.$video = e(
                '<video><source src="' + i.path + '.mp4" type="video/mp4"><source src="' + i.path +
                '.webm" type="video/webm"><source src="' + i.path + '.ogv" type="video/ogg"></v' +
                'ideo>'
            ),
        i
            .$video
            .prop({
                autoplay: i.settings.autoplay,
                loop: i.settings.loop,
                volume: i.settings.volume,
                muted: i.settings.muted,
                defaultMuted: i.settings.muted,
                playbackRate: i.settings.playbackRate,
                defaultPlaybackRate: i.settings.playbackRate
            })
            .css({
                margin: "auto",
                position: "absolute",
                "z-index": -1,
                top: o.y,
                left: o.x,
                "-webkit-transform": "translate(-" + o.x + ", -" + o.y + ")",
                "-ms-transform": "translate(-" + o.x + ", -" + o.y + ")",
                "-moz-transform": "translate(-" + o.x + ", -" + o.y + ")",
                transform: "translate(-" + o.x + ", -" + o.y + ")",
                visibility: "hidden"
            })
            .one("canplaythrough.vide", function () {
                i.resize()
            })
            .one("playing.vide", function () {
                i
                    .$video
                    .css("visibility", "visible"),
                i
                    .$wrapper
                    .css("background-image", "none")
            }),
        i
            .$element
            .on("resize.vide", function () {
                i.settings.resizing && i.resize()
            }),
        i
            .$wrapper
            .append(i.$video)
    },
    i.prototype.getVideoObject = function () {
        return this.$video[0]
    },
    i.prototype.resize = function () {
        if (this.$video) {
            var e = this
                    .$video[0]
                    .videoHeight,
                t = this
                    .$video[0]
                    .videoWidth,
                n = this
                    .$wrapper
                    .height(),
                r = this
                    .$wrapper
                    .width();
            r / t > n / e
                ? this
                    .$video
                    .css({
                        width: r + 2,
                        height: "auto"
                    })
                : this
                    .$video
                    .css({
                        width: "auto",
                        height: n + 2
                    })
        }
    },
    i.prototype.destroy = function () {
        this
            .$element
            .off(o),
        this.$video && this
            .$video
            .off(o),
        delete e[o].lookup[this.index],
        this
            .$element
            .removeData(o),
        this
            .$wrapper
            .remove()
    },
    e[o] = {
        lookup: []
    },
    e.fn[o] = function (t, n) {
        var r;
        return this.each(function () {
            r = e.data(this, o),
            r && r.destroy(),
            r = new i(this, t, n),
            r.index = e[o]
                .lookup
                .push(r) - 1,
            e.data(this, o, r)
        }),
        this
    },
    e(document).ready(function () {
        var t = e(window);
        t.on("resize.vide", function () {
            for (var t, n = e[o].lookup.length, r = 0; r < n; r++) 
                t = e[o].lookup[r],
                t && t.settings.resizing && t.resize()
        }),
        t.on("unload.vide", function () {
            return !1
        }),
        e(document)
            .find("[data-vide-bg]")
            .each(function (t, n) {
                var r = e(n),
                    i = r.data("vide-options"),
                    a = r.data("vide-bg");
                r[o](a, i)
            })
    })
}),
function (e, t, n) {
    "use strict";
    function r(e) {
        var n = e
                .charAt(0)
                .toUpperCase() + e.slice(1),
            r = t.createElement("div"),
            i = r.style,
            o = ["Webkit", "Moz", "ms", "O"];
        if (e in i) 
            return e;
        for (var a = 0, l = o.length; a < l; a++) {
            var s = o[a] + n;
            if (s in i) 
                return s
        }
        return null
    }
    function i(e, t, n) {
        return n
            ? (n *= t, t += n, e = t - n)
            : e = e || 0,
        parseInt(Math.random() * (t - e + 1) + e)
    }
    function o(e, t) {
        for (var n in t) 
            e[n] = t[n];
        return e
    }
    function a(e, t) {
        for (var n in t) 
            e.style[d[n] || n] = t[n]
    }
    function l(n) {
        function r() {
            var e = h.cloneNode();
            return "solid" != g.type && (
                e[
                    d
                        ? "src"
                        : "innerHTML"
                ] = "string" == typeof g.content
                    ? g.content
                    : g.content[
                        0 == p
                            ? 0
                            : Math.floor(Math.random() * p)
                    ]
            ),
            e
        }
        function l() {
            var e,
                t = i(g.minSize, g.maxSize),
                n = -2 * t,
                o = i(0, w - t),
                l = i(5, 10) / 10,
                s = i(null, .8 * x, 1),
                u = i(-100, 100),
                c = x + 2 * t,
                d = i(null, 20 * x, .2);
            v.length
                ? (e = v.shift(), e.dataset.type != g.type && (e = new r))
                : e = new r;
            var f = {
                top: n + "px",
                left: o + "px",
                opacity: l,
                transform: "none",
                transition: d + "ms linear"
            };
            switch (g.type) {
                case "solid":
                    f.width = f.height = t + "px";
                    break;
                case "text":
                    f["font-size"] = t + "px";
                    break;
                case "image":
                    f.width = t + "px"
            }
            a(e, f),
            b.appendChild(e),
            setTimeout(function () {
                a(e, {
                    transform: "translate(" + u + "px," + c + "px) rotate(" + s + "deg)",
                    opacity: g.fadeOut
                        ? 0
                        : l
                })
            }, 100)
        }
        var d,
            p,
            h,
            m,
            y = this,
            v = [],
            g = c,
            b = t.createElement("div");
        y.config = function (e) {
            o(g, e),
            d = "image" == g.type,
            p = g.content.length,
            h = d
                ? new Image
                : t.createElement("div"),
            h.className = "snowflake snowflake-" + g.type,
            h.dataset.type = g.type
        },
        y.config(n);
        var w = g.root.scrollWidth,
            x = g.root.scrollHeight;
        return e.addEventListener("resize", function () {
            w = g.root.scrollWidth,
            x = g.root.scrollHeight
        }, !1),
        y.playing = 0,
        y.play = function () {
            y.playing || (m = setInterval(l, g.interval), y.playing = 1)
        },
        y.stop = function () {
            y.playing && (clearInterval(m), m = null, y.playing = 0)
        },
        t.addEventListener(u, function () {
            t[s]
                ? y.stop()
                : y.play()
        }, !1),
        b.addEventListener(f, function (e) {
            var t = e.target || e.srcElement;
            b.removeChild(t),
            v.push(t)
        }, !1),
        b.className = "snowfield",
        g.root.firstChild
            ? g
                .root
                .insertBefore(b, g.root.firstChild)
            : g
                .root
                .appendChild(b),
        g.autoplay && y.play(),
        y
    }
    var s,
        u,
        c = {
            minSize: 10,
            maxSize: 30,
            type: "text",
            content: "&#10052",
            fadeOut: !0,
            autoplay: !0,
            interval: 200,
            root: t.body
        },
        d = {
            transform: r("transform"),
            transition: r("transition")
        },
        f = {
            WebkitTransition: "webkitTransitionEnd",
            OTransition: "oTransitionEnd",
            Moztransition: "transitionend",
            transition: "transitionend"
        }[d.transition];
    "undefined" != typeof t.hidden
        ? (s = "hidden", u = "visibilitychange")
        : "undefined" != typeof t.mozHidden
            ? (s = "mozHidden", u = "mozvisibilitychange")
            : "undefined" != typeof t.msHidden
                ? (s = "msHidden", u = "msvisibilitychange")
                : "undefined" != typeof t.webkitHidden && (
                    s = "webkitHidden",
                    u = "webkitvisibilitychange"
                ),
    e.Snowfall = l
}(window, document),
function (e, t, n, r) {
    "use strict";
    e.fn.pagepiling = function (i) {
        function o(e) {
            e
                .addClass("pp-table")
                .wrapInner('<div class="pp-tableCell" style="height:100%" />')
        }
        function a(t) {
            var n = e(".pp-section.active").index(".pp-section"),
                r = t.index(".pp-section");
            return n > r
                ? "up"
                : "down"
        }
        function l(t, n) {
            var r = {
                destination: t,
                animated: n,
                activeSection: e(".pp-section.active"),
                anchorLink: t.data("anchor"),
                sectionIndex: t.index(".pp-section"),
                toMove: t,
                yMovement: a(t),
                leavingSection: e(".pp-section.active").index(".pp-section") + 1
            };
            if (!r.activeSection.is(t)) {
                "undefined" == typeof r.animated && (r.animated = !0),
                "undefined" != typeof r.anchorLink && p(r.anchorLink, r.sectionIndex),
                r
                    .destination
                    .addClass("active")
                    .siblings()
                    .removeClass("active"),
                r.sectionsToMove = c(r),
                "down" === r.yMovement
                    ? (
                        r.translate3d = M(),
                        r.scrolling = "-100%",
                        X.css3 || r.sectionsToMove.each(function (t) {
                            t != r
                                .activeSection
                                .index(".pp-section") && e(this).css(f(r.scrolling))
                        }),
                        r.animateSection = r.activeSection
                    )
                    : (
                        r.translate3d = "translate3d(0px, 0px, 0px)",
                        r.scrolling = "0",
                        r.animateSection = t
                    ),
                e.isFunction(X.onLeave) && X
                    .onLeave
                    .call(this, r.leavingSection, r.sectionIndex + 1, r.yMovement),
                s(r),
                O(r.anchorLink),
                D(r.anchorLink, r.sectionIndex),
                L = r.anchorLink;
                var i = (new Date).getTime();
                R = i
            }
        }
        function s(t) {
            X.css3
                ? (
                    b(t.animateSection, t.translate3d, t.animated),
                    t.sectionsToMove.each(function () {
                        b(e(this), t.translate3d, t.animated)
                    }),
                    setTimeout(function () {
                        u(t)
                    }, X.scrollingSpeed)
                )
                : (
                    t.scrollOptions = f(t.scrolling),
                    t.animated
                        ? t.animateSection.animate(
                            t.scrollOptions,
                            X.scrollingSpeed,
                            X.easing,
                            function () {
                                d(t),
                                u(t)
                            }
                        )
                        : (t.animateSection.css(f(t.scrolling)), setTimeout(function () {
                            d(t),
                            u(t)
                        }, 400))
                )
        }
        function u(t) {
            e.isFunction(X.afterLoad) && X
                .afterLoad
                .call(this, t.anchorLink, t.sectionIndex + 1)
        }
        function c(t) {
            var n;
            return n = "down" === t.yMovement
                ? e(".pp-section").map(function (n) {
                    if (n < t.destination.index(".pp-section")) 
                        return e(this)
                })
                : e(".pp-section").map(function (n) {
                    if (n > t.destination.index(".pp-section")) 
                        return e(this)
                })
        }
        function d(t) {
            "up" === t.yMovement && t
                .sectionsToMove
                .each(function (n) {
                    e(this).css(f(t.scrolling))
                })
        }
        function f(e) {
            return "vertical" === X.direction
                ? {
                    top: e
                }
                : {
                    left: e
                }
        }
        function p(e, t) {
            X.anchors.length
                ? (location.hash = e, h(location.hash))
                : h(String(t))
        }
        function h(t) {
            t = t.replace("#", ""),
            e("body")[0].className = e("body")[0]
                .className
                .replace(/\b\s?pp-viewing-[^\s]+\b/g, ""),
            e("body").addClass("pp-viewing-" + t)
        }
        function m() {
            var r = n
                    .location
                    .hash
                    .replace("#", ""),
                i = r,
                o = e(t).find('.pp-section[data-anchor="' + i + '"]');
            o.length > 0 && l(o, X.animateAnchor)
        }
        function y() {
            var e = (new Date).getTime();
            return e - R < V + X.scrollingSpeed
        }
        function v() {
            var r = n
                    .location
                    .hash
                    .replace("#", "")
                    .split("/"),
                i = r[0];
            if (i.length && i && i !== L) {
                var o;
                o = isNaN(i)
                    ? e(t).find('[data-anchor="' + i + '"]')
                    : e(".pp-section").eq(i - 1),
                l(o)
            }
        }
        function g(e) {
            return {"-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e}
        }
        function b(e, t, n) {
            e.toggleClass("pp-easing", n),
            e.css(g(t))
        }
        function w(t) {
            if (!y()) {
                t = n.event || t;
                var r = Math.max(-1, Math.min(1, t.wheelDelta || -t.deltaY || -t.detail)),
                    i = e(".pp-section.active"),
                    o = P(i);
                return r < 0
                    ? x("down", o)
                    : x("up", o),
                !1
            }
        }
        function x(e, t) {
            var n,
                r;
            if (
                "down" == e
                    ? (n = "bottom", r = z.moveSectionDown)
                    : (n = "top", r = z.moveSectionUp),
                t.length > 0
            ) {
                if (!T(n, t)) 
                    return !0;
                r()
            } else 
                r()
        }
        function T(e, t) {
            return "top" === e
                ? !t.scrollTop()
                : "bottom" === e
                    ? t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight
                    : void 0
        }
        function P(e) {
            return e.filter(".pp-scrollable")
        }
        function k() {
            B
                .get(0)
                .addEventListener
                    ? (
                        B.get(0).removeEventListener("mousewheel", w, !1),
                        B.get(0).removeEventListener("wheel", w, !1)
                    )
                    : B
                        .get(0)
                        .detachEvent("onmousewheel", w)
        }
        function C() {
            B
                .get(0)
                .addEventListener
                    ? (
                        B.get(0).addEventListener("mousewheel", w, !1),
                        B.get(0).addEventListener("wheel", w, !1)
                    )
                    : B
                        .get(0)
                        .attachEvent("onmousewheel", w)
        }
        function j() {
            if (F) {
                var e = _();
                B
                    .off("touchstart " + e.down)
                    .on("touchstart " + e.down, A),
                B
                    .off("touchmove " + e.move)
                    .on("touchmove " + e.move, Q)
            }
        }
        function S() {
            if (F) {
                var e = _();
                B.off("touchstart " + e.down),
                B.off("touchmove " + e.move)
            }
        }
        function _() {
            var e;
            return e = n.PointerEvent
                ? {
                    down: "pointerdown",
                    move: "pointermove",
                    up: "pointerup"
                }
                : {
                    down: "MSPointerDown",
                    move: "MSPointerMove",
                    up: "MSPointerUp"
                }
        }
        function Y(e) {
            var t = new Array;
            return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX)
                ? e.pageY
                : e
                    .touches[0]
                    .pageY,
            t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX)
                ? e.pageX
                : e
                    .touches[0]
                    .pageX,
            t
        }
        function E(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }
        function A(e) {
            var t = e.originalEvent;
            if (E(t)) {
                var n = Y(t);
                q = n.y,
                H = n.x
            }
        }
        function Q(t) {
            var n = t.originalEvent;
            if (!$(t.target) && E(n)) {
                var r = e(".pp-section.active"),
                    i = P(r);
                if (i.length || t.preventDefault(), !y()) {
                    var o = Y(n);
                    U = o.y,
                    W = o.x,
                    "horizontal" === X.direction && Math.abs(H - W) > Math.abs(q - U)
                        ? Math.abs(H - W) > B.width() / 100 * X.touchSensitivity && (
                            H > W
                                ? x("down", i)
                                : W > H && x("up", i)
                        )
                        : Math.abs(q - U) > B.height() / 100 * X.touchSensitivity && (
                            q > U
                                ? x("down", i)
                                : U > q && x("up", i)
                        )
                }
            }
        }
        function $(t, n) {
            n = n || 0;
            var r = e(t).parent();
            return !!(
                n < X.normalScrollElementTouchThreshold && r.is(X.normalScrollElements)
            ) || n != X.normalScrollElementTouchThreshold && $(r, ++n)
        }
        function I() {
            e("body").append('<div id="pp-nav"><ul></ul></div>');
            var t = e("#pp-nav");
            t.css("color", X.navigation.textColor),
            t.addClass(X.navigation.position);
            for (var n = 0; n < e(".pp-section").length; n++) {
                var r = "";
                if (
                    X.anchors.length && (r = X.anchors[n]),
                    "undefined" !== X.navigation.tooltips
                ) {
                    var i = X
                        .navigation
                        .tooltips[n];
                    "undefined" == typeof i && (i = "")
                }
                t
                    .find("ul")
                    .append(
                        '<li data-tooltip="' + i + '"><a href="#' + r + '"><span></span></a></li>'
                    )
            }
            t
                .find("span")
                .css("border-color", X.navigation.bulletsColor)
        }
        function D(t, n) {
            X.navigation && (
                e("#pp-nav").find(".active").removeClass("active"),
                t
                    ? e("#pp-nav").find('a[href="#' + t + '"]').addClass("active")
                    : e("#pp-nav").find("li").eq(n).find("a").addClass("active")
            )
        }
        function O(t) {
            X.menu && (e(X.menu).find(".active").removeClass("active"), e(X.menu).find(
                '[data-menuanchor="' + t + '"]'
            ).addClass("active"))
        }
        function N() {
            var e,
                i = t.createElement("p"),
                o = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            t
                .body
                .insertBefore(i, null);
            for (var a in o) 
                i.style[a] !== r && (
                    i.style[a] = "translate3d(1px,1px,1px)",
                    e = n.getComputedStyle(i).getPropertyValue(o[a])
                );
            return t
                .body
                .removeChild(i),
            e !== r && e.length > 0 && "none" !== e
        }
        function M() {
            return "vertical" !== X.direction
                ? "translate3d(-100%, 0px, 0px)"
                : "translate3d(0px, -100%, 0px)"
        }
        var L,
            z = e.fn.pagepiling,
            B = e(this),
            R = 0,
            F = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            q = 0,
            H = 0,
            U = 0,
            W = 0,
            V = 600,
            X = e.extend(!0, {
                direction: "vertical",
                menu: null,
                verticalCentered: !0,
                sectionsColor: [],
                anchors: [],
                scrollingSpeed: 700,
                easing: "easeInQuart",
                loopBottom: !1,
                loopTop: !1,
                css3: !0,
                navigation: {
                    textColor: "#000",
                    bulletsColor: "#000",
                    position: "right",
                    tooltips: []
                },
                normalScrollElements: null,
                normalScrollElementTouchThreshold: 5,
                touchSensitivity: 5,
                keyboardScrolling: !0,
                sectionSelector: ".section",
                animateAnchor: !1,
                afterLoad: null,
                onLeave: null,
                afterRender: null
            }, i);
        e.extend(e.easing, {
            easeInQuart: function (e, t, n, r, i) {
                return r * (t /= i) * t * t * t + n
            }
        }),
        z.setScrollingSpeed = function (e) {
            X.scrollingSpeed = e
        },
        z.setMouseWheelScrolling = function (e) {
            e
                ? C()
                : k()
        },
        z.setAllowScrolling = function (e) {
            e
                ? (z.setMouseWheelScrolling(!0), j())
                : (z.setMouseWheelScrolling(!1), S())
        },
        z.setKeyboardScrolling = function (e) {
            X.keyboardScrolling = e
        },
        z.moveSectionUp = function () {
            var t = e(".pp-section.active").prev(".pp-section");
            !t.length && X.loopTop && (t = e(".pp-section").last()),
            t.length && l(t)
        },
        z.moveSectionDown = function () {
            var t = e(".pp-section.active").next(".pp-section");
            !t.length && X.loopBottom && (t = e(".pp-section").first()),
            t.length && l(t)
        },
        z.moveTo = function (n) {
            var r = "";
            r = isNaN(n)
                ? e(t).find('[data-anchor="' + n + '"]')
                : e(".pp-section").eq(n - 1),
            r.length > 0 && l(r)
        },
        e(X.sectionSelector).each(function () {
            e(this).addClass("pp-section")
        }),
        X.css3 && (X.css3 = N()),
        e(B).css(
            {overflow: "hidden", "-ms-touch-action": "none", "touch-action": "none"}
        ),
        z.setAllowScrolling(!0),
        e.isEmptyObject(X.navigation) || I();
        var J = e(".pp-section").length;
        e(".pp-section")
            .each(function (t) {
                e(this).data("data-index", t),
                e(this).css("z-index", J),
                t || 0 !== e(".pp-section.active").length || e(this).addClass("active"),
                "undefined" != typeof X.anchors[t] && e(this).attr("data-anchor", X.anchors[t]),
                "undefined" != typeof X.sectionsColor[t] && e(this).css(
                    "background-color",
                    X.sectionsColor[t]
                ),
                X.verticalCentered && !e(this).hasClass("pp-scrollable") && o(e(this)),
                J -= 1
            })
            .promise()
            .done(function () {
                X.navigation && (
                    e("#pp-nav").css("margin-top", "-" + e("#pp-nav").height() / 2 + "px"),
                    e("#pp-nav").find("li").eq(e(".pp-section.active").index(".pp-section")).find("a").addClass("active")
                ),
                e(n).on("load", function () {
                    m()
                }),
                e.isFunction(X.afterRender) && X
                    .afterRender
                    .call(this)
            }),
        e(n).on("hashchange", v),
        e(t).keydown(function (t) {
            if (X.keyboardScrolling && !y()) 
                switch (t.which) {
                    case 38:
                    case 33:
                        z.moveSectionUp();
                        break;
                    case 40:
                    case 34:
                        z.moveSectionDown();
                        break;
                    case 36:
                        z.moveTo(1);
                        break;
                    case 35:
                        z.moveTo(e(".pp-section").length);
                        break;
                    case 37:
                        z.moveSectionUp();
                        break;
                    case 39:
                        z.moveSectionDown();
                        break;
                    default:
                        return
                }
            }),
        X.normalScrollElements && (
            e(t).on("mouseenter", X.normalScrollElements, function () {
                z.setMouseWheelScrolling(!1)
            }),
            e(t).on("mouseleave", X.normalScrollElements, function () {
                z.setMouseWheelScrolling(!0)
            })
        ),
        e(t).on("click touchstart", "#pp-nav a", function (t) {
            t.preventDefault();
            var n = e(this)
                .parent()
                .index();
            l(e(".pp-section").eq(n))
        }),
        e(t).on({
            mouseenter: function () {
                var t = e(this).data("tooltip");
                e('<div class="pp-tooltip ' + X.navigation.position + '">' + t + "</div>")
                    .hide()
                    .appendTo(e(this))
                    .fadeIn(200)
            },
            mouseleave: function () {
                e(this)
                    .find(".pp-tooltip")
                    .fadeOut(200, function () {
                        e(this).remove()
                    })
            }
        }, "#pp-nav li")
    }
}(jQuery, document, window),
$(document).ready(function () {
    function e(e, t, n) {
        var r = $.cookie(e);
        r
            ? (r = JSON.parse(r), r[t] || (r[t] = []), r[t].push(n), r = JSON.stringify(r))
            : r = '{"' + t + '":["' + n + '"]}',
        $.cookie(e, r)
    }
    function t(t) {
        _.remove(f, function (n) {
            var r = n.modal == t;
            if (r) {
                t
                    .parent(".macros-modal")
                    .remove();
                var i = _.filter(n.section[0].classList, function (e) {
                    return e.match(/node./gi)
                });
                "page" == n.type && (i = "section-helper"),
                e(n.type + "_events", i, n.name)
            }
            return r
        })
    }
    function n(e) {
        c && ($.fn.pagepiling.setAllowScrolling(!1), $("#pp-nav ul").hide()),
        e.before('<div class="modal-backdrop fade in"></div>'),
        e.modal({
            show: !0,
            backdrop: !1,
            keyboard: !1
        }),
        e
            .find("button.close")
            .eq(0)
            .on("click", function () {
                e.modal("hide"),
                t(e),
                c && ($.fn.pagepiling.setAllowScrolling(!0), $("#pp-nav ul").show())
            })
    }
    function r(e) {
        d.count || (d.count = setTimeout(function () {
            n(e)
        }, 6e4))
    }
    function i() {
        d.count && (d.count = clearTimeout(d.count))
    }
    function o() {
        d.update.doubleback && (d.update.doubleback.status = 1),
        d.update = {
            doubleback: null
        }
    }
    function a(e) {
        d.section != e && (i(), o()),
        d.section = e
    }
    function l(e, t, r) {
        var i,
            o,
            a = localStorage.user_visit;
        a
            ? (a = JSON.parse(a), i = {
                first: a.first,
                last: Date.now(),
                count: a.count + 1
            }, o = {
                first: (Date.now() - a.first) / 1e3,
                last: (Date.now() - a.last) / 1e3
            }, o.last < e && i.count === t && n(r))
            : i = {
                first: Date.now(),
                last: Date.now(),
                count: 1
            },
        localStorage.user_visit = JSON.stringify(i)
    }
    function s(e, t) {
        var r = parseInt(localStorage.user_lead);
        Date.now() - r < 1e3 * e
            ? n(t)
            : d.formTracking || (
                _.each($(".section:not(.section-helper) .wrapper2 form"), function (e) {
                    $(e).on("done", function () {
                        localStorage.user_lead = Date.now()
                    })
                }),
                d.formTracking = !0
            )
    }
    function u(e) {
        if (e) 
            var i = _.filter(f, function (e) {
                return e.section[0] == d.section[0]
            });
        else 
            var o = {
                top: $(document).scrollTop(),
                height: document.documentElement.clientHeight,
                bottom: $(document).scrollTop() + document.documentElement.clientHeight
            }
        ,
        i = _.filter(f, function (e) {
            var t,
                n = e.height() <= o.height;
            return t = n
                ? e.bottom() <= o.bottom && e.top() >= o.top
                : e.top() <= o.top && e.bottom() >= o.bottom
        });
    var u = {
        inview: _.filter(i, {name: "inview"})[0],
        longview: _.filter(i, {name: "longview"})[0],
        doubleback: _.filter(i, {name: "doubleback"})[0],
        doublecancel: _.filter(i, {name: "doublecancel"})[0],
        leave: _.filter(f, {name: "leave"})[0],
        pagelongview: _.filter(f, {name: "pagelongview"})[0],
        scrollend: _.filter(f, {name: "scrollend"})[0],
        doubleerror: _.filter(f, {name: "doubleerror"})[0],
        hourlyvisit: _.filter(f, {name: "hourlyvisit"})[0],
        weeklyvisit: _.filter(f, {name: "weeklyvisit"})[0],
        leadback_hour: _.filter(f, {name: "leadback_hour"})[0],
        leadback_day: _.filter(f, {name: "leadback_day"})[0],
        leadback_week: _.filter(f, {name: "leadback_week"})[0],
        leadback_month: _.filter(f, {name: "leadback_month"})[0]
    };
    if (!$(".modal:visible").length) {
        if (!e) {
            var c = i.length
                ? i[0].section
                : null;
            a(c)
        }
        if (
            u.inview && n(u.inview.modal),
            u.longview && r(u.longview.modal),
            u.doubleback && (
                u.doubleback.status
                    ? n(u.doubleback.modal)
                    : d.update.doubleback || (d.update.doubleback = u.doubleback)
            ),
            u.doublecancel && !u.doublecancel.status
        ) {
            var p = $(u.doublecancel.section).find(".wrapper2 .modal"),
                h = _.remove(p, function (e) {
                    var t = $(e).find("form");
                    return t.length
                });
            h.length && (_.each(h, function (e) {
                var r = 0;
                $(e)
                    .on("hide.bs.modal", function () {
                        1 === r
                            ? (_.each(h, function (e) {
                                $(e)
                                    .off("hide.bs.modal")
                                    .off("done")
                            }), n(u.doublecancel.modal))
                            : r++
                    })
                    .on("done", function () {
                        u.doublecancel.status = u.doublecancel.status - 1,
                        u.doublecancel.status || t(u.doublecancel.modal),
                        $(e)
                            .off("hide.bs.modal")
                            .off("done")
                    })
            }), u.doublecancel.status = h.length)
        }
        if (
            u.leave && !u.leave.status && (u.leave.status = 1, $(document).on("mouseleave", function (e) {
                if (3 != e.which) {
                    var t = document.documentElement.clientWidth - e.pageX > 0;
                    t && ($(document).off("mouseleave"), n(u.leave.modal))
                }
            })),
            u.pagelongview && !u.pagelongview.status && (u.pagelongview.status = 1, setTimeout(function () {
                n(u.pagelongview.modal)
            }, 6e4)),
            u.scrollend
        ) {
            var m = $(".section-helper").index(".section") - 1,
                y = !1;
            if (e) 
                y = m === d
                    .section
                    .index(".section");
            else {
                var v = $(".section")
                        .eq(m)
                        .offset()
                        .top,
                    g = $(".section")
                        .eq(m)
                        .height(),
                    b = $(document).scrollTop() + document.documentElement.clientHeight;
                y = v + g == b
            }
            y && n(u.scrollend.modal)
        }
        if (u.doubleerror) {
            var w = $(".section:not(.section-helper) .wrapper2 form");
            _.each(w, function (e) {
                var t = 0;
                $(e).on("error", function () {
                    1 === t
                        ? (
                            _.each(w, function (e) {
                                $(e).off("error")
                            }),
                            $(".modal:visible").find(".close").click(),
                            n(u.doubleerror.modal)
                        )
                        : t++
                })
            })
        }
        u.hourlyvisit && l(1800, 2, u.hourlyvisit.modal),
        u.weeklyvisit && l(604800, 3, u.weeklyvisit.modal),
        u.leadback_hour && s(3600, u.leadback_hour.modal),
        u.leadback_day && s(25200, u.leadback_day.modal),
        u.leadback_week && s(604800, u.leadback_week.modal),
        u.leadback_month && s(18748800, u.leadback_month.modal)
    }
}
window.plp.events = [];
var c = "slider" == window.plp.animations.section.type,
    d = {
        count: null,
        section: null,
        update: {
            doubleback: null
        },
        formTracking: !1
    };
_.each($(".section"), function (e, t) {
    var n = $(e);
    if (n.hasClass("section-helper")) 
        var r = n.find(".eventmodals .modal"),
            i = "page";
    else 
        var r = n.find("> .macros-modal > .modal"),
            i = "section";
    var o = $.cookie(i + "_events"),
        a = [];
    o && (o = JSON.parse(o), _.map(_.keys(o), function (e) {
        n.hasClass(e) && (a = o[e])
    })),
    _.each(r, function (e, t) {
        var o = {
            name: $(e).attr("data-modal"),
            section: n,
            modal: $(e),
            type: i
        };
        c || _.merge(o, {
            top: function () {
                return n
                    .offset()
                    .top
            },
            height: function () {
                return n.outerHeight()
            },
            bottom: function () {
                return n.outerHeight() + n
                    .offset()
                    .top
            }
        });
        var l = !1;
        if ("section" == i && "inview" == o.name) {
            var s = !c && o.bottom() < document.documentElement.clientHeight;
            l = o
                .section
                .is($(".section").eq(0)) || s
        }
        if ("page" == i) {
            var u = _.filter(window.plp.events, {type: "section"}),
                d = _.map(r, function (e) {
                    return $(e).attr("data-modal")
                }),
                f = {
                    first: $(".section").eq(0),
                    last: $(".section").eq($(".section-helper").index(".section") - 1)
                };
            if ("hourlyvisit" == o.name) {
                var p = (_.indexOf(d, "weeklyvisit") != -1, "leadback_hour"),
                    h = _.indexOf(d, p) != -1;
                l = m || h
            }
            if ("weeklyvisit" == o.name) {
                var p = "leadback_hour",
                    h = _.indexOf(d, p) != -1;
                l = h
            }
            if ("leadback_hour" == o.name) {
                var m = _.indexOf(d, "leadback_day") != -1;
                l = m
            }
            if ("leadback_day" == o.name) {
                var m = _.indexOf(d, "leadback_week") != -1;
                l = m
            }
            if ("leadback_week" == o.name) {
                var m = _.indexOf(d, "leadback_month") != -1;
                l = m
            }
            "scrollend" == o.name && (l = _.filter(u, function (e) {
                return "inview" == e.name && e
                    .section
                    .is(f.last)
            }).length),
            "pagelongview" == o.name && (l = _.filter(u, function (e) {
                return "longview" == e.name && e
                    .section
                    .is(f.first)
            }).length)
        }
        _.indexOf(a, o.name) != -1 || l
            ? $(e)
                .parent(".macros-modal")
                .remove()
            : window
                .plp
                .events
                .push(o)
    })
});
var f = window.plp.events;
c
    ? (
        a($(".pp-section.active")),
        $("div.area").on("leave", function (e, t) {
            a($(".section").eq(t - 1))
        }),
        $("div.area").on("afterLoad", function (e, t) {
            u(c)
        })
    )
    : $(window).on("scroll", function () {
        u(c)
    }),
$(window).on("resize", function () {
    u(c)
}),
u(c)
}),
$(function () {
$(".section-slider").each(function () {
    var e = $(this),
        t = function () {
            return $(this).closest(".node")[0] === e[0]
        },
        n = e
            .find(".swiper-container")
            .filter(t),
        r = e
            .find("[plp-slider-next]")
            .filter(t),
        i = e
            .find("[plp-slider-previous]")
            .filter(t),
        o = e
            .find("[plp-slider-pagination]")
            .filter(t),
        a = e
            .find("[plp-slider-index]")
            .filter(t),
        l = (e.find(".metahtml > .code").filter(t), new Swiper(n.get(0), {
            autoHeight: !1,
            autoplay: {
                delay: 1 *n.attr("data-pause")
            },
            effect: "true" === n.attr("data-animated")
                ? "slide"
                : "fade",
            fadeEffect: {
                crossFade: !0
            },
            touchEventsTarget: "wrapper",
            mousewheelEventsTarged: "wrapper",
            on: {
                slideChange: function () {
                    o.each(function () {
                        $(this)
                            .children()
                            .filter(".is-active")
                            .removeClass("is-active"),
                        $(this)
                            .children()
                            .eq(l.activeIndex)
                            .addClass("is-active")
                    }),
                    a.text(l.activeIndex + 1)
                }
            }
        }));
    r.on("click", function () {
        l.isEnd
            ? l.slideTo(0)
            : l.slideNext()
    }),
    i.on("click", function () {
        l.isBeginning
            ? l.slideTo(l.slides.length - 1)
            : l.slidePrev()
    }),
    o
        .children()
        .on("click", function () {
            l.slideTo($(this).index())
        }),
    plp
        .lazy
        .add(e, function () {
            l.update()
        }),
    e
        .find(".lazy")
        .on("lazyload", function () {
            l.update()
        }),
    l.params.autoHeight && !function s() {
        if (!l.animating && l.slides.length) {
            var e = l.wrapperEl.clientHeight,
                t = l
                    .slides[l.activeIndex]
                    .clientHeight;
            e !== t && l.update(),
            setTimeout(s, 40)
        }
    }()
})
}),
$(function () {
function e() {
    return "ontouchstart" in window || navigator.maxTouchPoints
}
$(".widget-before-after").each(function () {
    var t = $(this),
        n = t.find(".root"),
        r = n.find("> img"),
        i = n.find("> .handler");
    r.on("load", _.after(r.length, function () {
        n.css("height", n.height());
        var t = n.find("> .layer-before"),
            o = t.find("> .wrap"),
            a = r.eq(0),
            l = a.width(),
            s = a.height();
        a
            .removeAttr("style")
            .appendTo(o);
        var u = n.find("> .layer-after"),
            c = u.find("> .wrap"),
            d = r.eq(1),
            f = d.width(),
            p = d.height();
        d
            .removeAttr("style")
            .appendTo(c),
        o
            .add(c)
            .css({
                width: Math.max(l, f),
                height: Math.max(s, p),
                "max-width": "none"
            });
        var h = n.width(),
            m = n
                .offset()
                .left,
            y = o
                .offset()
                .left,
            v = o.width(),
            g = 0,
            b = function (e) {
                var n = e.pageX - m - g;
                n < 0 && (n = 0),
                n > h && (n = h),
                t.css("width", n),
                u.css("width", h - n),
                o.css("right", -(h / 2 - n)),
                c.css("left", h / 2 - n),
                i.css("left", n);
                var r = i
                    .offset()
                    .left + 2;
                r < y && i.css("left", n + y - r),
                r > y + v && i.css("left", n - (r - (y + v)))
            };
        e()
            ? n.on("move", b)
            : "hover" === n.data("trigger")
                ? (n.on("mousemove", b), n.on("mousedown", function (e) {
                    e.preventDefault()
                }))
                : "drag" === n.data("trigger") && n.on("mousedown", function (e) {
                    g = $(e.target)
                        .closest(i)
                        .length
                            ? e.pageX - i
                                .offset()
                                .left
                            : 0,
                    $(document).on("mousemove.beforeafter", b),
                    $(document).one("mouseup", function () {
                        $(document).off("mousemove.beforeafter")
                    }),
                    e.preventDefault()
                })
    }))
})
}),
$(function () {
return $(".widget-gallery").each(function () {
    var e = $(this).find(".colorbox");
    if (e.length) {
        var t = _.uniqueId("group");
        return e.attr("data-rel", t),
        e.colorbox({rel: t, maxWidth: "80%", maxHeight: "80%"})
    }
})
}),
$(function () {
$(".widget-hamburger").each(function () {
    var e = $(this),
        t = function () {
            return $(this).closest(".widget-hamburger")[0] === e[0]
        },
        n = e
            .find("[plp-hamburger-toggle]")
            .filter(t),
        r = e
            .find("[plp-hamburger-menu]")
            .filter(t);
    r.hasClass("is-collapsed") && plp
        .lazy
        .add(e, function (e) {
            r.show(),
            plp
                .lazy
                .force(r),
            r.hide()
        }),
    n.on("click", function () {
        r.is(":animated") || (
            n.toggleClass("is-collapsed"),
            r.toggleClass("is-collapsed"),
            n.toggleClass("is-expanded"),
            r.toggleClass("is-expanded"),
            r.slideToggle()
        )
    })
})
}),
$(function () {
$(".widget-hover").each(function () {
    var e = $(this),
        t = e
            .find("[plp-hover]")
            .filter(function () {
                return $(this).closest(".widget-hover")[0] === e[0]
            });
    t.on("mouseenter", function () {
        t.addClass("hover"),
        t.addClass("animated"),
        setTimeout(function () {
            t.removeClass("animated")
        }, t.data("duration"))
    }),
    t.on("mouseleave", function () {
        t.removeClass("hover"),
        t.addClass("animated"),
        setTimeout(function () {
            t.removeClass("animated")
        }, t.data("duration"))
    })
})
}),
$(function () {
$(".widget-increasingdigits").each(function () {
    var e = new RegExp("([0-9]+)", "g"),
        t = "<span class='digits-wrapper'>$1</span>",
        n = $(this).find(".digits"),
        r = 1e3 * parseFloat(n.attr("data-animation-duration")) || 0;
    n
        .find("*")
        .andSelf()
        .each(function () {
            var n = 3;
            $(this)
                .contents()
                .filter(function () {
                    return this.nodeType === n
                })
                .each(function () {
                    var n = $(this).parent(),
                        r = this
                            .textContent
                            .replace(e, t);
                    $(this).replaceWith(r),
                    n
                        .find(".digits-wrapper")
                        .each(function () {
                            $(this)
                                .data("data-number", $(this).text())
                                .text("0")
                        })
                })
        }),
    plp
        .lazy
        .add($(this), function (e) {
            e
                .find(".digits-wrapper")
                .each(function () {
                    $(this).animateNumber({
                        number: $(this).data("data-number")
                    }, r)
                })
        }, 0)
})
}),
$(function () {
$(".widget-slide-share").each(function () {
    var e = $(this).find(".slide"),
        t = e.attr("data-iframe-string");
    if (t) {
        var n = t.match(/.*?src="(.*?)"/);
        if (n) {
            var r = n[1];
            r && e.append(
                '<iframe class="slide-share" src=' + r + " allowfullscreen></iframe>"
            )
        }
    }
})
}),
$(function () {
$(".widget-slider").each(function () {
    var e = $(this),
        t = function () {
            return $(this).closest(".widget-slider")[0] === e[0]
        },
        n = e
            .find(".swiper-container")
            .filter(t),
        r = e
            .find("[plp-slider-next]")
            .filter(t),
        i = e
            .find("[plp-slider-previous]")
            .filter(t),
        o = e
            .find("[plp-slider-page]")
            .filter(t),
        a = e
            .find("[plp-slider-index]")
            .filter(t),
        l = new Swiper(n.get(0), {
            autoHeight: "false" === n.attr("data-fixheight"),
            autoplay: {
                delay: 1 *n.attr("data-pause")
            },
            effect: "true" === n.attr("data-animated")
                ? "slide"
                : "fade",
            fadeEffect: {
                crossFade: !0
            },
            touchEventsTarget: "wrapper",
            mousewheelEventsTarged: "wrapper",
            on: {
                slideChange: function () {
                    o
                        .filter(".is-active")
                        .removeClass("is-active"),
                    o
                        .eq(l.activeIndex)
                        .addClass("is-active"),
                    a.text(l.activeIndex + 1)
                }
            }
        });
    r.on("click", function () {
        l.isEnd
            ? l.slideTo(0)
            : l.slideNext()
    }),
    i.on("click", function () {
        l.isBeginning
            ? l.slideTo(l.slides.length - 1)
            : l.slidePrev()
    }),
    o.on("click", function () {
        l.slideTo($(this).index())
    }),
    plp
        .lazy
        .add(e, function () {
            l.update()
        }),
    e
        .find(".lazy")
        .on("lazyload", function () {
            l.update()
        }),
    l.params.autoHeight && !function s() {
        if (!l.animating && l.slides.length) {
            var e = l.wrapperEl.clientHeight,
                t = l
                    .slides[l.activeIndex]
                    .clientHeight;
            e !== t && l.update(),
            setTimeout(s, 40)
        }
    }()
})
}),
function (e, t, n, r) {
e(n).ready(function () {
    var i = e('meta[property="og:description"]').attr("content") || "",
        o = e('meta[property="og:image"]').attr("content") || "";
    goodshare = {
        init: function (t, r) {
            var a = goodshare,
                l = e.extend({
                    type: "vk",
                    url: location.href,
                    title: n.title,
                    text: i,
                    image: o
                }, e(t).data(), r);
            if (null !== a.popup(link = a[l.type](l))) 
                return !1
        },
        vk: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                text: i,
                image: o
            }, t);
            return "http://vk.com/share.php?url=" + encodeURIComponent(r.url) + "&title=" +
                    encodeURIComponent(r.title) + "&description=" +
                    encodeURIComponent(r.text) + "&image=" + encodeURIComponent(r.image)
        },
        ok: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments=" +
                    encodeURIComponent(r.title) + "&st._surl=" + encodeURIComponent(r.url)
        },
        fb: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "https://facebook.com/sharer/sharer.php?u=" +
                    encodeURIComponent(r.url)
        },
        lj: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                text: i
            }, t);
            return "http://livejournal.com/update.bml?subject=" +
                    encodeURIComponent(r.title) + "&event=" + encodeURIComponent(
                '<a href="' + r.url + '">' + r.title + "</a> " + r.text
            )
        },
        tw: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "http://twitter.com/share?url=" + encodeURIComponent(r.url) + "&text=" +
                    encodeURIComponent(r.title)
        },
        gp: function (t) {
            var n = e.extend({
                url: location.href
            }, t);
            return "https://plus.google.com/share?url=" +
                    encodeURIComponent(n.url)
        },
        mr: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                text: i,
                image: o
            }, t);
            return "http://connect.mail.ru/share?url=" + encodeURIComponent(r.url) + "&titl" +
                    "e=" + encodeURIComponent(r.title) + "&description=" +
                    encodeURIComponent(r.text) + "&imageurl=" + encodeURIComponent(r.image)
        },
        li: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                text: i
            }, t);
            return "http://www.linkedin.com/shareArticle?url=" +
                    encodeURIComponent(r.url) + "&text=" + encodeURIComponent(r.title) +
                    "&summary=" + encodeURIComponent(r.text) + "&mini=true"
        },
        tm: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                text: i
            }, t);
            return "https://www.tumblr.com/widgets/share/tool?canonicalUrl=" +
                    encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title) +
                    "&caption=" + encodeURIComponent(r.text) + "&posttype=link"
        },
        bl: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "https://www.blogger.com/blog-this.g?u=" +
                    encodeURIComponent(r.url) + "&n=" + encodeURIComponent(r.title)
        },
        pt: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                image: e('meta[property="og:image"]').attr("content")
            }, t);
            return "https://www.pinterest.com/pin/create/button/?url=" +
                    encodeURIComponent(r.url) + "&media=" + encodeURIComponent(r.image) + "&descrip" +
                    "tion=" + encodeURIComponent(r.title)
        },
        en: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                text: i
            }, t);
            return "https://www.evernote.com/clip.action?url=" +
                    encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title) +
                    "&body=" + encodeURIComponent(
                r.text + '<br/><a href="' + r.url + '">' + r.title + "</a>"
            )
        },
        di: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "http://digg.com/submit?url=" + encodeURIComponent(r.url) + "&title=" +
                    encodeURIComponent(r.title)
        },
        rd: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "http://www.reddit.com/submit?url=" + encodeURIComponent(r.url) + "&titl" +
                    "e=" + encodeURIComponent(r.title)
        },
        de: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "https://delicious.com/save?url=" + encodeURIComponent(r.url) +
                    "&title=" + encodeURIComponent(r.title)
        },
        su: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "http://www.stumbleupon.com/submit?url=" +
                    encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
        },
        po: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "https://getpocket.com/save?url=" + encodeURIComponent(r.url) +
                    "&title=" + encodeURIComponent(r.title)
        },
        sb: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                text: i
            }, t);
            return "http://surfingbird.ru/share?url=" + encodeURIComponent(r.url) +
                    "&title=" + encodeURIComponent(r.title) + "&description=" +
                    encodeURIComponent(r.text)
        },
        lr: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "http://www.liveinternet.ru/journal_post.php?action=n_add&cnurl=" +
                    encodeURIComponent(r.url) + "&cntitle=" + encodeURIComponent(r.title)
        },
        bf: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "https://buffer.com/add?url=" + encodeURIComponent(r.url) + "&text=" +
                    encodeURIComponent(r.title)
        },
        ip: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "https://www.instapaper.com/edit?url=" +
                    encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
        },
        ra: function (t) {
            var n = e.extend({
                url: location.href
            }, t);
            return "http://www.readability.com/save?url=" +
                    encodeURIComponent(n.url)
        },
        xi: function (t) {
            var n = e.extend({
                url: location.href
            }, t);
            return "https://www.xing.com/spi/shares/new?url=" +
                    encodeURIComponent(n.url)
        },
        wp: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                text: i,
                image: o
            }, t);
            return "https://wordpress.com/wp-admin/press-this.php?u=" +
                    encodeURIComponent(r.url) + "&t=" + encodeURIComponent(r.title) + "&s=" +
                    encodeURIComponent(r.text) + "&i=" + encodeURIComponent(r.image) + "&v=2"
        },
        bd: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title,
                text: i
            }, t);
            return "http://cang.baidu.com/do/add?it=" + encodeURIComponent(r.title) +
                    "&iu=" + encodeURIComponent(r.url) + "&dc=" +
                    encodeURIComponent(r.text) + "&fr=ien"
        },
        rr: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "http://share.renren.com/share/buttonshare.do?link=" +
                    encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
        },
        wb: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "http://service.weibo.com/share/share.php?url=" +
                    encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
        },
        tg: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "tg://msg?text=" + encodeURIComponent(r.title + " " + r.url)
        },
        vi: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "viber://forward?text=" + encodeURIComponent(r.title + " " + r.url)
        },
        wa: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "whatsapp://send?text=" + encodeURIComponent(r.title + " " + r.url)
        },
        ln: function (t) {
            var r = e.extend({
                url: location.href,
                title: n.title
            }, t);
            return "line://msg/text/" + encodeURIComponent(r.title + " " + r.url)
        },
        popup: function (e) {
            return t.open(
                e,
                "",
                "left=" + (
                    screen.width - 630
                ) / 2 + ",top=" + (
                    screen.height - 440
                ) / 2 +
                        ",toolbar=0,status=0,scrollbars=0,menubar=0,location=0,width=630,height=440"
            )
        }
    },
    e.fn.getCount = function () {
        var n = function (e) {
                if (e > 999 && e <= 999999) 
                    var t = e / 1e3 + "k";
                else if (e > 999999) 
                    var t = ">1M";
                else 
                    var t = e;
                return t
            },
            i = function (t) {
                return e(t).length > 0
            };
        i('[data-counter="vk"]') && (
            e.getJSON(
                "https://vk.com/share.php?act=count&index=1&url=" + encodeURIComponent(location.href) +
                        "&callback=?",
                function (e) {}
            ),
            t.VK || (VK = {}),
            VK.Share = {
                count: function (t, r) {
                    e('[data-counter="vk"]').text(n(r))
                }
            }
        ),
        i('[data-counter="fb"]') && e.getJSON(
            "https://graph.facebook.com/?id=" + encodeURIComponent(location.href) + "&callb" +
                    "ack=?",
            function (t) {
                t.share === r
                    ? e('[data-counter="fb"]').text("0")
                    : e('[data-counter="fb"]').text(n(t.share.share_count))
            }
        ),
        i('[data-counter="ok"]') && (
            e.getJSON(
                "https://connect.ok.ru/dk?st.cmd=extLike&uid=1&ref=" + encodeURIComponent(location.href) +
                        "&callback=?",
                function (e) {}
            ),
            t.ODKL || (ODKL = {}),
            ODKL.updateCount = function (t, r) {
                e('[data-counter="ok"]').text(n(r))
            }
        ),
        i('[data-counter="gp"]') && e.ajax({
            type: "POST",
            url: "https://clients6.google.com/rpc",
            processData: !0,
            contentType: "application/json",
            data: JSON.stringify({
                method: "pos.plusones.get",
                id: location.href,
                params: {
                    nolog: !0,
                    id: location.href,
                    source: "widget",
                    userId: "@viewer",
                    groupId: "@self"
                },
                jsonrpc: "2.0",
                key: "p",
                apiVersion: "v1"
            }),
            success: function (t) {
                e('[data-counter="gp"]').text(n(t.result.metadata.globalCounts.count))
            }
        }),
        i('[data-counter="mr"]') && e.getJSON(
            "https://connect.mail.ru/share_count?url_list=" + encodeURIComponent(location.href) +
                    "&callback=1&func=?",
            function (t) {
                var r = encodeURIComponent(location.href);
                for (var r in t) 
                    if (t.hasOwnProperty(r)) {
                        var i = t[r].shares;
                        break
                    }
                e.isEmptyObject(t)
                    ? e('[data-counter="mr"]').text("0")
                    : e('[data-counter="mr"]').text(n(i))
            }
        ),
        i('[data-counter="li"]') && e.getJSON(
            "https://www.linkedin.com/countserv/count/share?url=" + encodeURIComponent(location.href) +
                    "&callback=?",
            function (t) {
                e('[data-counter="li"]').text(n(t.count))
            }
        ),
        i('[data-counter="tm"]') && e.getJSON(
            "https://api.tumblr.com/v2/share/stats?url=" + encodeURIComponent(location.href) +
                    "&callback=?",
            function (t) {
                e('[data-counter="tm"]').text(n(t.response.note_count))
            }
        ),
        i('[data-counter="pt"]') && e.getJSON(
            "https://api.pinterest.com/v1/urls/count.json?url=" + encodeURIComponent(location.href) +
                    "&callback=?",
            function (t) {
                e('[data-counter="pt"]').text(n(t.count))
            }
        ),
        i('[data-counter="rd"]') && e.getJSON(
            "https://www.reddit.com/api/info.json?url=" + encodeURIComponent(location.href) +
                    "&jsonp=?",
            function (t) {
                var r = t.data.children;
                0 === r.length
                    ? e('[data-counter="rd"]').text("0")
                    : e('[data-counter="rd"]').text(n(r[0].data.score))
            }
        ),
        i('[data-counter="su"]') && e.getJSON(
            "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(
                'select * from html where url="http://www.stumbleupon.com/services/1.01/badge.g' +
                'etinfo?url=' + location.href + '" and xpath="*"'
            ) + "&format=json&callback=?",
            function (t) {
                var i = e.parseJSON(t.query.results.html.body);
                i.result.views === r
                    ? e('[data-counter="su"]').text("0")
                    : e('[data-counter="su"]').text(n(i.result.views))
            }
        ),
        i('[data-counter="po"]') && e.getJSON(
            "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(
                'select * from html where url="https://widgets.getpocket.com/v1/button?count=ho' +
                'rizontal&url=' + location.href + '" and xpath="*"'
            ) + "&format=json&callback=?",
            function (t) {
                e('[data-counter="po"]').text(
                    n(t.query.results.html.body.div.a.span.em.content)
                )
            }
        ),
        i('[data-counter="bf"]') && e.getJSON(
            "https://api.bufferapp.com/1/links/shares.json?url=" + encodeURIComponent(location.href) +
                    "&callback=?",
            function (t) {
                e('[data-counter="bf"]').text(n(t.shares))
            }
        ),
        i('[data-counter="xi"]') && e.getJSON(
            "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(
                'select * from html where url="https://www.xing-share.com/app/share?op=get_shar' +
                'e_button;counter=top;url=' + location.href + '" and xpath="*"'
            ) + "&format=json&callback=?",
            function (t) {
                e('[data-counter="xi"]').text(
                    n(t.query.results.html.body.div[0].div[0].span.content)
                )
            }
        )
    },
    e(n).on("click", ".goodshare", function (e) {
        e.preventDefault(),
        goodshare.init(this)
    }),
    e(n).getCount()
})
}(jQuery, window, document),
$(function () {
$(".widget-spoiler").each(function () {
    var e = $(this),
        t = function () {
            return $(this).closest(".widget-spoiler")[0] === e[0]
        },
        n = e
            .find("[plp-spoiler-toggle]")
            .filter(t),
        r = e
            .find("[plp-spoiler-container]")
            .filter(t);
    r.hasClass("is-collapsed") && plp
        .lazy
        .add(e, function (e) {
            r.show(),
            plp
                .lazy
                .force(r),
            r.hide()
        }),
    n.on("click", function () {
        r.is(":animated") || (
            n.toggleClass("is-collapsed"),
            r.toggleClass("is-collapsed"),
            n.toggleClass("is-expanded"),
            r.toggleClass("is-expanded"),
            r.slideToggle()
        )
    })
})
}),
$(function () {
$(".widget-tabs").each(function () {
    var e = $(this),
        t = function () {
            return $(this).closest(".widget-tabs")[0] === e[0]
        },
        n = e
            .find(".swiper-container")
            .filter(t),
        r = e
            .find("[plp-tabs-next]")
            .filter(t),
        i = e
            .find("[plp-tabs-previous]")
            .filter(t),
        o = e
            .find("[plp-tabs-page]")
            .filter(t),
        a = e
            .find("[plp-tabs-index]")
            .filter(t),
        l = new Swiper(n.get(0), {
            autoHeight: "false" === n.attr("data-fixheight"),
            autoplay: !1,
            allowTouchMove: !1,
            effect: "true" === n.attr("data-animated")
                ? "slide"
                : "fade",
            fadeEffect: {
                crossFade: !0
            },
            touchEventsTarget: "wrapper",
            mousewheelEventsTarged: "wrapper",
            on: {
                slideChange: function () {
                    o
                        .filter(".is-active")
                        .removeClass("is-active"),
                    o
                        .eq(l.activeIndex)
                        .addClass("is-active"),
                    a.text(l.activeIndex + 1)
                }
            }
        });
    r.on("click", function () {
        l.isEnd
            ? l.slideTo(0)
            : l.slideNext()
    }),
    i.on("click", function () {
        l.isBeginning
            ? l.slideTo(l.slides.length - 1)
            : l.slidePrev()
    }),
    o.on("click", function () {
        l.slideTo($(this).index())
    }),
    plp
        .lazy
        .add(e, function () {
            l.update()
        }),
    e
        .find(".lazy")
        .on("lazyload", function () {
            l.update()
        }),
    l.params.autoHeight && !function s() {
        if (!l.animating && l.slides.length) {
            var e = l.wrapperEl.clientHeight,
                t = l
                    .slides[l.activeIndex]
                    .clientHeight;
            e !== t && l.update(),
            setTimeout(s, 40)
        }
    }()
})
}),
function () {
try {
    $(function () {
        try {
            var e,
                t,
                n,
                r;
            return $.fn.findUpmost = function (e) {
                try {
                    var t,
                        n,
                        r,
                        i;
                    for (i = [], $(this).find(e).each(function () {
                        try {
                            var e;
                            return e = $(this)
                                .parents()
                                .length,
                            i[e]
                                ? i[e].push(this)
                                : i[e] = [this]
                        } catch (t) {
                            error_handler(t, "red libs 3", arguments.callee)
                        }
                    }), t = 0, n = i.length; t < n; t++) 
                        if (r = i[t]) 
                            return $(r)
                } catch (o) {
                    error_handler(o, "red libs 2", arguments.callee)
                }
            },
            t = [],
            r = ".modal-content, .sweet-overlay, .sweet-alert, #cboxOverlay, #colorbox",
            plp.modal = {
                init: function (e, n) {
                    try {
                        var r;
                        return r = !1,
                        e.on("click", function (e) {
                            try {
                                return r === !1 && (n.appendTo("div.area"), n.modal({
                                    backdrop: !1,
                                    keyboard: !1,
                                    show: !1
                                }), r = !0),
                                n.modal("show"),
                                n.before('<div class="modal-backdrop fade in"></div>'),
                                t.push(n),
                                plp
                                    .lazy
                                    .update(),
                                e.preventDefault()
                            } catch (i) {
                                error_handler(i, "red libs 5", arguments.callee)
                            }
                        })
                    } catch (i) {
                        error_handler(i, "red libs 4", arguments.callee)
                    }
                },
                openbyid: function (t) {
                    try {
                        return e
                            .filter('[data-id="' + t + '"]:visible:first')
                            .click()
                    } catch (n) {
                        error_handler(n, "red libs 6", arguments.callee)
                    }
                },
                close: function () {
                    try {
                        var e;
                        return e = _
                            .last(t)
                            .modal("hide"),
                        e
                            .find(".macros-video")
                            .each(function () {
                                try {
                                    var e;
                                    return e = $(this).find(".wrap"),
                                    e.attr("src", e.attr("src").replace("autoplay=1", "autoplay=0"))
                                } catch (t) {
                                    error_handler(t, "red libs 8", arguments.callee)
                                }
                            }),
                        e
                            .prev(".modal-backdrop")
                            .remove(),
                        t = _.without(t, e)
                    } catch (n) {
                        error_handler(n, "red libs 7", arguments.callee)
                    }
                },
                closeAll: function () {
                    try {
                        if (!t.length) 
                            return;
                        return plp
                            .modal
                            .close(),
                        plp
                            .modal
                            .closeAll()
                    } catch (e) {
                        error_handler(e, "red libs 9", arguments.callee)
                    }
                }
            },
            e = $(".btn[data-modal], .btn-modal[data-modal]"),
            e.each(function () {
                try {
                    var e,
                        t,
                        n,
                        r,
                        i;
                    return e = $(this),
                    n = e.closest(".node"),
                    i = e.attr("data-modal"),
                    n.length || (n = e.closest(".modal")),
                    r = [
                        "cart", "agreement", "cookie"
                    ],
                    r.indexOf(i) !== -1 && (n = $("div.area").first()),
                    t = n.findUpmost('.modal[data-modal="' + i + '"]'),
                    plp
                        .modal
                        .init(e, t)
                } catch (o) {
                    error_handler(o, "red libs 10", arguments.callee)
                }
            }),
            n = location
                .href
                .match(/#modal-([a-z0-9]+)/),
            n && plp
                .modal
                .openbyid(n[1]),
            $(document).on("click", 'a[href^="#modal-"]', function (e) {
                try {
                    var t;
                    if (e.isDefaultPrevented()) 
                        return;
                    if (t = $(this).attr("href").match(/#modal-([a-z0-9]+)/)) 
                        return plp
                            .modal
                            .openbyid(t[1])
                    } catch (n) {
                    error_handler(n, "red libs 11", arguments.callee)
                }
            }),
            $(document).on("click", function (n) {
                try {
                    var i,
                        o;
                    if (!t.length) 
                        return;
                    if ($(n.target).closest(e).length) 
                        return;
                    if ($(n.target).closest('a[href^="#modal-"]').length) 
                        return;
                    if (o = _.last(t), n.target === o[0]) 
                        return plp
                            .modal
                            .close();
                    if ($(n.target).closest(".modal-header > .close").length) 
                        return plp
                            .modal
                            .close();
                    if (i = $(n.target).closest(".modal"), i.length && i[0] !== o[0]) 
                        return plp
                            .modal
                            .close();
                    if (!$(n.target).closest(r).length) 
                        return plp
                            .modal
                            .close()
                    } catch (a) {
                    error_handler(a, "red libs 12", arguments.callee)
                }
            })
        } catch (i) {
            error_handler(i, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            var e,
                t;
            if (e = $(".macros-map"), !e.length) 
                return;
            return t = "//api-maps.yandex.ru/2.1/?lang=ru-RU",
            $.getScript(t, function () {
                try {
                    if ("undefined" == typeof ymaps) 
                        return;
                    return ymaps.ready(function () {
                        try {
                            return e.each(function () {
                                try {
                                    var e;
                                    return e = plp
                                        .lazy
                                        .add($(this), function (t) {
                                            try {
                                                var n,
                                                    r,
                                                    i,
                                                    o,
                                                    a;
                                                return n = e.children(".map"),
                                                r = n.data("map"),
                                                i = _.uniqueId("map"),
                                                n.attr("id", i),
                                                o = new ymaps.Map(i, {
                                                    center: r.center,
                                                    type: r.type,
                                                    zoom: r.zoom,
                                                    controls: []
                                                }),
                                                o
                                                    .behaviors
                                                    .disable(["scrollZoom"]),
                                                a = new ymaps.GeoObject({
                                                    geometry: {
                                                        type: "Point",
                                                        coordinates: r.point
                                                    }
                                                }, {
                                                    draggable: !0
                                                }),
                                                o
                                                    .geoObjects
                                                    .add(a),
                                                o
                                                    .controls
                                                    .add("zoomControl", {"float": "left"})
                                                    .add("typeSelector", {"float": "right"})
                                            } catch (l) {
                                                error_handler(l, "red libs 5", arguments.callee)
                                            }
                                        })
                                } catch (t) {
                                    error_handler(t, "red libs 4", arguments.callee)
                                }
                            })
                        } catch (t) {
                            error_handler(t, "red libs 3", arguments.callee)
                        }
                    })
                } catch (t) {
                    error_handler(t, "red libs 2", arguments.callee)
                }
            })
        } catch (n) {
            error_handler(n, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            var e,
                t,
                n,
                r,
                o,
                a,
                l,
                s,
                u,
                c,
                d;
            return a = window.plp_page_id || window.plp.page_id,
            e = window.plp_content_id || window.plp.content_id,
            d = $.cookie("visit_id"),
            s = 0,
            l = 2500,
            n = {
                ru: {
                    error: "Не удалось отправить форму!",
                    validate: "Неправильно заполнены поля:",
                    interval: "Пожалуйста, повторите отправку через пару секунд.",
                    required: "Поле «%field%» обязательно для заполнения.",
                    email: "Поле «%field%» должно содержать ваш настоящий e-mail адрес.",
                    phone: "Поле «%field%» должно содержать правильный номер телефона.",
                    number: "Поле «%field%» должно быть правильным числом."
                },
                am: {
                    error: "Հայտն ուղարկված չէ, խնդրում ենք կրկին փորձել",
                    validate: "Տողերը սխալ են լրացված",
                    interval: "Տողերը սխալ են մուտքագրված: Խնդրում ենք կրկին փորձել մի քանի վարկյանից",
                    required: "Խնդրում ենք լրացրեք «%field%» տողը, այն պարտադիր է",
                    email: "Խնդրում ենք «%field%» տողում գրանցել Ձեր իրական էլ. փոստի հասցեն",
                    phone: "Խնդրում ենք «%field%» տողում գրանցել Ձեր ճիշտ հեռախոսահամարը",
                    number: "Խնդրում ենք «%field%» տողում գրանցել ճիշտ ամսաթիվ"
                },
                bg: {
                    error: "Неуспешно изпращане на заявката!",
                    validate: "Грешно запълнени полета:",
                    interval: "Моля, изпратете отново заявката след няколко секунди.",
                    required: "Полето «%field%» е задължително за запълване.",
                    email: "Полето «%field%» трябва да съдържа истинският Ви имейл адрес.",
                    phone: "Полето «%field%» задължително трябва да съдържа правилният Ви телефонен номер.",
                    number: "Полето «%field%» трябва да съдържа правилно изписано число."
                },
                uk: {
                    error: "Не вдалося відправити форму!",
                    validate: "Неправильно заповнені поля:",
                    interval: "Будь ласка, повторіть відправку через пару секунд",
                    required: "Поле «%field%» обов'язково для заповнення.",
                    email: "Поле «%field%» повинно містити ваш справжній e-mail адресу.",
                    phone: "Поле «%field%» повинно містити правильний номер телефону.",
                    number: "Поле «%field%» має бути правильним числом."
                },
                md: {
                    error: "Не удалось отправить форму!",
                    validate: "Неправильно заполнены поля:",
                    interval: "Пожалуйста, повторите отправку через пару секунд.",
                    required: "Поле «%field%» обязательно для заполнения.",
                    email: "Поле «%field%» должно содержать ваш настоящий e-mail адрес.",
                    phone: "Поле «%field%» должно содержать правильный номер телефона.",
                    number: "Поле «%field%» должно быть правильным числом."
                },
                en: {
                    error: "Error sending form!",
                    validate: "Fields are not filled corectly:",
                    interval: "Pleasy try again in a few seconds.",
                    required: "The field «%field%» is required.",
                    email: "The field «%field%» must contain you real email address.",
                    phone: "The field «%field%» must contain you real phone number.",
                    number: "The field «%field%» must be a number."
                },
                es: {
                    error: "No es posible enviar el formulario!",
                    validate: "Los campos rellenados de forma incorrecta:",
                    interval: "Por favor, inténtelo de nuevo después de unos segundos.",
                    required: "Campo «%field%» rellenar obligatorio.",
                    email: "Campo «%field%» debe contener su dirección electrónica actual.",
                    phone: "Campo «%field%» debe contener el numero de teléfono en el formato adecuado.",
                    number: "Campo «%field%» debe ser el numero correcto."
                },
                it: {
                    error: "Il form non è stato inviato!",
                    validate: "I campi richiesti sono stati compilati in modo errato:",
                    interval: "Per favore riprova l'invio tra qualche istante.",
                    required: "«%field%» Campo obbligatorio.",
                    email: "Il campo «%field%» deve contenere un indirizzo e-mail valido.",
                    phone: "Il campo «%field%» deve contenere un numero di telefono valido.",
                    number: "Il campo «%field%» deve avere un numero corretto."
                },
                fr: {
                    error: "Impossible d'envoyer le formulaire!",
                    validate: "Ne pas correctement rempli les champs:",
                    interval: "Se il vous plaît essayez d'envoyer un couple de secondes",
                    required: "Le champ «%field%» est nécessaire.",
                    email: "Le champ «%field%» doit contenir votre adresse e-mail réelle.",
                    phone: "Le champ «%field%» doit contenir un numéro de téléphone valide.",
                    number: "Le champ «%field%» doit être un nombre valide."
                },
                de: {
                    error: "Die form konnte nicht gesendet!",
                    validate: "Sei nicht korrekt ausgefüllt Felder:",
                    interval: "Versuchen Sie, ein paar Sekunden zu senden.",
                    required: "Das Feld «%field%» ist nicht erforderlich.",
                    email: "Das Feld «%field%» muss auf Ihren eigenen E-Mail Adresse enthalten.",
                    phone: "Das Feld «%field%» muss eine gültige Telefonnummer enthalten.",
                    number: "Das Feld «%field%» muss eine gültige Zahl sein."
                },
                "pt-BR": {
                    error: "Não foi possível enviar o formulário!",
                    validate: "Não campos preenchidos corretamente:",
                    interval: "Por favor, tente enviar um par de segundos",
                    required: "O campo «%field%» é necessário.",
                    email: "O campo «%field%» deve conter o seu endereço de e-mail real.",
                    phone: "O campo «%field%» deve conter um número de telefone válido.",
                    number: "O campo «%field%» deve ser um número válido."
                },
                cs: {
                    error: "Nepodařilo se odeslat formulář!",
                    validate: "Nesprávně vyplněné pole:",
                    interval: "Prosím zopakujte odeslání za pár vteřin.",
                    required: "Pole «%field%» nutné k vyplnění.",
                    email: "Pole «%field%» musí obsahovat vaši správnou e-mail adresu.",
                    phone: "Pole «%field%» musí obsahovat vaše správné telefonní číslo.",
                    number: "Pole «%field%» musí být prvočislem."
                },
                el: {
                    error: "Η φόρμα δεν στάλθηκε!",
                    validate: "Τα πεδία δεν συμπληρώθηκαν σωστά:",
                    interval: "Παρακαλώ, προσπαθήστε ξανά σε μερικά δευτερόλεπτα.",
                    required: "Το πεδίο «%field%» απαιτείται.",
                    email: "Το πεδίο «%field%» πρέπει να περιλαμβάνει την πραγματική διεύθυνση e-mail σας.",
                    phone: "Το πεδίο «%field%» πρέπει να περιέχει τον σωστό αριθμό τηλεφώνου.",
                    number: "Το πεδίο «%field%» θα πρέπει να είναι ο σωστός αριθμός."
                },
                lt: {
                    error: "Nepasisekė nusiųsti formą!",
                    validate: "Neteisingai užpildyti laukai:",
                    interval: "Prašome pakartoti siuntimą po keletą sekundžių.",
                    required: "Laukas «%field%» būtinas užpildymui.",
                    email: "Laukas «%field%» turi būti nurodytas jūsų esamas email adresas.",
                    phone: "Laukas «%field%» turi būti teisingai nurodytas telefono numeris.",
                    number: "Laukas «%field%» turu būti nurodytas teisingas skaičius."
                },
                pl: {
                    error: "Nie udało się wysłać formularz",
                    validate: "Nieprawidłowo wpisałeś dane",
                    interval: "Proszę powtórzyć za parę sekund",
                    required: 'Informacja "%field%" musi być wypełniona',
                    email: "Nieprawidłowy adres e-mail",
                    phone: "Nieprawidłowy numer telefonu",
                    number: "Wpisałeś nieprawidłowe dane"
                },
                kz: {
                    error: "Формаңыз жіберілмеді!",
                    validate: "Қате толтырылған:",
                    interval: "Өтінеміз, бірнеше секундтан соң тағы қайталап байқап көріңіз.",
                    required: '"%field%" толтыруыңыз міндетті.',
                    email: '"%field%" сіздің e-mail адресіңіз шын болуы тиіс.',
                    phone: '"%field%" телефон номеріңізді дұрыстап жазуыңызды сұранамыз.',
                    number: '"%field%" санды дұрыстап жазуыңызды сұранамыз.'
                },
                "zh-CN": {
                    error: "填好的表格发不了",
                    validate: "这些字段填写无法",
                    interval: "请稍等再发送",
                    required: "该“%field%” 字段必须填好",
                    email: "该“%field%” 字段必须含真实的电子邮件",
                    phone: "该“%field%” 字段必须填写有效手机号码",
                    number: "该“%field%” 字段必须填写正确的号码"
                },
                ge: {
                    error: "ფორმა არ გაიგზავნა!",
                    validate: "შემდეგი ველები არასწორად არის შევსებული:",
                    interval: "გაიმეორეთ გაგზავნის",
                    required: "ამ ველის «%field%» შევსება აუცილებელია.",
                    email: "ეს ველი «%field%» უნდა შეიცავდეს თქვენი ნამდვილი ელ-ფოსტის მისამართს.",
                    phone: "ეს ველი «%field%» უნდა შეიცავდეს რეალურად არსებულ ტელეფონის ნომერს.",
                    number: "ამ ველში «%field%» უნდა იყოს სწორი რიცხვი."
                },
                ro: {
                    error: "Formularul nu a fost trimis!",
                    validate: "Câmp completat incorect:",
                    interval: "Vă rugăm să încercați peste câteva secunde.",
                    required: "Câmp «%field%» obligator.",
                    email: "Câmpul «%field%» trebuie să conțină adresa Dvs. e-mail veridică.",
                    phone: "Câmpul «%field%» trebuie să conțină numărul Dvs. de telefon veridic.",
                    number: "Câmpul «%field%»trebuie să conțină o dată veridică."
                },
                lv: {
                    error: "Jūsu ziņojums netika nosūtīts!",
                    validate: "Lauks nav aizpildīts vai ir aizpildīts nepareizi:",
                    interval: "Lūdzu, nosūtiet atkārtoti pēc dažām sekundēm.",
                    required: "Lauks «%field%» jāaizpilda obligāti.",
                    email: "Laukā «%field%» jābūt Jūsu īstai e-pasta adresei.",
                    phone: "Laukā «%field%» jānorāda īstais telefona numurs.",
                    number: "Laukā «%field%» jānorāda tikai cipari."
                },
                he: {
                    error: "תופס נשלח ללא הצלחה",
                    validate: "השדות ממולאים לא נכון",
                    interval: "אנא לשלוח שוב בעוד כמה שניות",
                    required: 'חייב למלאות שדה "%field%"',
                    email: 'שדה "%field%" חייב לכלול את כתובת הדואר האלקטרוני האמיתית שלך',
                    phone: 'שדה "%field%" חייב לכלול מספר טלפון נכון',
                    number: 'שדה "%field%" צריך להיות המספר הנכון'
                }
            },
            t = n[window.plp_lang || window.plp.lang || "ru"],
            c = "Да",
            u = "Нет",
            r = function (e, t, n) {
                try {
                    var r;
                    return "xs" === plp.screen
                        ? (r = e, t && (r += "\n" + t), alert(r), void(n && n()))
                        : Modernizr.cssanimations
                            ? swal({
                                title: e,
                                text: t || null,
                                type: "error"
                            }, n)
                            : swal({
                                title: e,
                                text: t || null,
                                imageUrl: "//s.platformalp.ru/swal/error.png"
                            }, n)
                } catch (i) {
                    error_handler(i, "red libs 2", arguments.callee)
                }
            },
            o = function (e, t, n) {
                try {
                    var r;
                    return "xs" === plp.screen
                        ? (r = e, t && (r += "\n" + t), alert(r), void(n && n()))
                        : Modernizr.cssanimations
                            ? swal({
                                title: e,
                                text: t || null,
                                type: "success"
                            }, n)
                            : swal({
                                title: e,
                                text: t || null,
                                imageUrl: "//s.platformalp.ru/swal/success.png"
                            }, n)
                } catch (i) {
                    error_handler(i, "red libs 3", arguments.callee)
                }
            },
            $("[data-ym_goal]").each(function () {
                try {
                    var e;
                    if (e = $(this), e.closest("form.form").length) 
                        return;
                    return e.on("click", function () {
                        try {
                            var t;
                            if (t = e.data("ym_goal"), window.yaCounter) 
                                return yaCounter.reachGoal(t)
                        } catch (n) {
                            error_handler(n, "red libs 5", arguments.callee)
                        }
                    })
                } catch (t) {
                    error_handler(t, "red libs 4", arguments.callee)
                }
            }),
            $("[data-ga_category]").each(function () {
                try {
                    var e;
                    if (e = $(this), e.closest("form.form").length) 
                        return;
                    return e.on("click", function () {
                        try {
                            var t,
                                n;
                            if (n = e.data("ga_category"), t = e.data("ga_action"), window.ga) 
                                return ga("send", "event", n, t)
                        } catch (r) {
                            error_handler(r, "red libs 7", arguments.callee)
                        }
                    })
                } catch (t) {
                    error_handler(t, "red libs 6", arguments.callee)
                }
            }),
            $("form.form").each(function () {
                try {
                    var n,
                        f,
                        p,
                        h,
                        m,
                        y,
                        v,
                        g;
                    return p = $(this),
                    m = p.data("form"),
                    y = p
                        .closest("[data-item]")
                        .data("item") || [],
                    v = p
                        .closest('[data-modal="cart"]')
                        .length
                            ? plp.cart.list
                            : [],
                    h = p.data("fields"),
                    g = {
                        hit: {
                            page_id: a,
                            ab_id: e,
                            visit_id: d,
                            referer: document.referrer,
                            uri: location.pathname + location.search
                        },
                        form: m,
                        item: y,
                        items: v,
                        fields: h
                    },
                    f = p
                        .find(".field")
                        .each(function (e) {
                            try {
                                var t,
                                    n,
                                    o;
                                if (
                                    t = $(this),
                                    o = g.fields[e],
                                    "radio-list" === o.type && t.find("input").prop("name", _.uniqueId("radio")),
                                    "textarea" === o.type && t.find("textarea").val(function (e, t) {
                                        try {
                                            return $.trim(t)
                                        } catch (n) {
                                            error_handler(n, "red libs 10", arguments.callee)
                                        }
                                    }),
                                    "file" === o.type
                                ) 
                                    return (n = function () {
                                        try {
                                            return t
                                                .find(":file")
                                                .on("change", function () {
                                                    try {
                                                        var e,
                                                            o;
                                                        for (
                                                            o = t.find(":file").closest(".pseudo"),
                                                            o.clone().insertAfter(o),
                                                            e = $("<form>"),
                                                            i = 0,
                                                            attributes = o[0].attributes;
                                                            i < attributes.length;
                                                            i++
                                                        ) 
                                                            e.attr(attributes[i].name, attributes[i].value);
                                                        return e.append(o.children()),
                                                        e
                                                            .appendTo("body")
                                                            .hide(),
                                                        o.remove(),
                                                        e.ajaxSubmit({
                                                            beforeSend: function () {
                                                                try {
                                                                    return t
                                                                        .find("span.state")
                                                                        .text("Загрузка...")
                                                                } catch (e) {
                                                                    error_handler(e, "red libs 13", arguments.callee)
                                                                }
                                                            },
                                                            uploadProgress: function (e, n, r, i) {
                                                                try {
                                                                    return t
                                                                        .find("span.state")
                                                                        .text("Загрузка... " + i + "%")
                                                                } catch (o) {
                                                                    error_handler(o, "red libs 14", arguments.callee)
                                                                }
                                                            },
                                                            success: function (r) {
                                                                try {
                                                                    return t.data("result", r),
                                                                    t
                                                                        .find("span.state")
                                                                        .text("Файл загружен"),
                                                                    e.remove(),
                                                                    n()
                                                                } catch (i) {
                                                                    error_handler(i, "red libs 15", arguments.callee)
                                                                }
                                                            },
                                                            error: function (i) {
                                                                try {
                                                                    return r(
                                                                        "Ошибка загрузки!",
                                                                        400 === i.status
                                                                            ? i.responseText
                                                                            : null
                                                                    ),
                                                                    t
                                                                        .find("span.state")
                                                                        .text("Выберите файл..."),
                                                                    t.data("result", null),
                                                                    e.remove(),
                                                                    n()
                                                                } catch (o) {
                                                                    error_handler(o, "red libs 16", arguments.callee)
                                                                }
                                                            },
                                                            dataType: "json"
                                                        })
                                                    } catch (a) {
                                                        error_handler(a, "red libs 12", arguments.callee)
                                                    }
                                                })
                                        } catch (e) {
                                            error_handler(e, "red libs 11", arguments.callee)
                                        }
                                    })()
                            } catch (a) {
                                error_handler(a, "red libs 9", arguments.callee)
                            }
                        }),
                    p
                        .find("[data-placeholder]")
                        .each(function () {
                            try {
                                var e,
                                    t;
                                if (e = $(this), !e.val()) 
                                    return;
                                return e.data("placeholder", !0),
                                t = e.val(),
                                e.on("focus", function (t) {
                                    try {
                                        if (e.data("placeholder")) 
                                            return e
                                                .val("")
                                                .data("placeholder", !1)
                                        } catch (n) {
                                        error_handler(n, "red libs 18", arguments.callee)
                                    }
                                }),
                                e.on("blur", function (n) {
                                    try {
                                        if ("" === e.val()) 
                                            return e
                                                .val(t)
                                                .data("placeholder", !0)
                                        } catch (r) {
                                        error_handler(r, "red libs 19", arguments.callee)
                                    }
                                })
                            } catch (n) {
                                error_handler(n, "red libs 17", arguments.callee)
                            }
                        }),
                    n = p.find(".submit"),
                    p.on("submit", function (e) {
                        try {
                            var i,
                                a,
                                d,
                                h,
                                y,
                                b;
                            return e.preventDefault(),
                            $.now() - l < s
                                ? void r(t.error, t.interval)
                                : (
                                    d = [],
                                    f.each(function (e) {
                                        try {
                                            var n;
                                            if (
                                                "checkbox-input" === g.fields[e].type
                                                    ? g.fields[e].value = $(this).find("input").prop("checked")
                                                        ? c
                                                        : u
                                                    : "radio-list" === g.fields[e].type
                                                        ? g.fields[e].value = $(this).find("[type=radio]:checked").val() || ""
                                                        : "select-menu" === g.fields[e].type
                                                            ? g.fields[e].value = $(this).find("select").val()
                                                            : "hidden" === g.fields[e].type
                                                                ? (
                                                                    g.fields[e].name = g.fields[e].id,
                                                                    g.fields[e].value = $(this).find("input").val()
                                                                )
                                                                : "file" === g.fields[e].type
                                                                    ? g.fields[e].value = $(this).data("result") || ""
                                                                    : (
                                                                        n = $(this).find(".form-control").data("placeholder"),
                                                                        g.fields[e].value = n
                                                                            ? ""
                                                                            : $(this).find(".form-control").val()
                                                                    ),
                                                g.fields[e].required && "" === g.fields[e].value && d.push(
                                                    t.required.replace("%field%", g.fields[e].name)
                                                ),
                                                "" === g.fields[e].value
                                            ) 
                                                return;
                                            if (
                                                "email" !== g.fields[e].type || /.+@.+\..+/.test(g.fields[e].value) || d.push(t.email.replace("%field%", g.fields[e].name)),
                                                "phone" === g.fields[e].type && !/.*\d.*\d.*\d.*\d.*/.test(g.fields[e].value)
                                            ) 
                                                return d.push(t.phone.replace("%field%", g.fields[e].name))
                                        } catch (r) {
                                            error_handler(r, "red libs 21", arguments.callee)
                                        }
                                    }),
                                    "checkbox" === m.privacy && (
                                        i = p.closest(".body").find(".agreement-checkbox input").prop("checked"),
                                        h = m.privacy_checkbox.replace(/[<>]/g, ""),
                                        i === !1 && d.push(t.required.replace("%field%", h))
                                    ),
                                    d.length > 0
                                        ? (p.trigger("error"), void r(t.validate, d.join("\n")))
                                        : (
                                            b = {
                                                name: "",
                                                phone: "",
                                                email: "",
                                                count: "",
                                                fields: {},
                                                item: {},
                                                send: g,
                                                items: []
                                            },
                                            _.each(g.fields, function (e) {
                                                try {
                                                    var t;
                                                    if ("" === b[e.type] && (b[t = e.type] || (b[t] = e.value)), !b.fields[e.name]) 
                                                        return b.fields[e.name] = e.value
                                                } catch (n) {
                                                    error_handler(n, "red libs 22", arguments.callee)
                                                }
                                            }),
                                            _.each(g.item, function (e) {
                                                try {
                                                    var t,
                                                        n;
                                                    return (t = b.item)[n = e.type] || (t[n] = _.escape(e.value))
                                                } catch (r) {
                                                    error_handler(r, "red libs 23", arguments.callee)
                                                }
                                            }),
                                            _.each(g.items, function (e, t) {
                                                try {
                                                    return b.items[t] = {},
                                                    _.each(e, function (e) {
                                                        try {
                                                            var n,
                                                                r,
                                                                i,
                                                                o;
                                                            "amount" === e.type || "photo" === e.type
                                                                ? (n = b.items[t])[i = e.type] || (n[i] = e.value)
                                                                : (r = b.items[t])[o = e.type] || (r[o] = _.escape(e.value))
                                                        } catch (a) {
                                                            error_handler(a, "red libs 25", arguments.callee)
                                                        }
                                                    })
                                                } catch (n) {
                                                    error_handler(n, "red libs 24", arguments.callee)
                                                }
                                            }),
                                            m.payPrice && !b.items.length && b.items.push({amount: 1, price: m.payPrice, title: m.payTitle}),
                                            n.prop("disabled", !0),
                                            y = function (e, i, a) {
                                                try {
                                                    var l,
                                                        u,
                                                        c,
                                                        d;
                                                    return _.defaults(e, b),
                                                    console.log("Данные формы", {
                                                        time: e.time,
                                                        name: e.name,
                                                        email: e.email,
                                                        phone: e.phone,
                                                        count: e.count,
                                                        fields: e.fields,
                                                        item: e.item,
                                                        items: e.items
                                                    }),
                                                    n.prop("disabled", !1),
                                                    0 === e.result
                                                        ? (r(t.error, e.errors), p.trigger("error"))
                                                        : 1 === e.result
                                                            ? (
                                                                p.trigger("done"),
                                                                d = n.data("ym_goal"),
                                                                window.yaCounter && yaCounter.reachGoal(d),
                                                                u = n.data("ga_category"),
                                                                l = n.data("ga_action"),
                                                                window.ga && ga("send", "event", u, l),
                                                                "msg" === m.after
                                                                    ? o(_.template(m.msg, e), null)
                                                                    : "url" === m.after
                                                                        ? location.href = _.template(m.url, e)
                                                                        : "addhtml" === m.after
                                                                            ? $("body").append(_.template(m.addhtml, e))
                                                                            : "pay" === m.after
                                                                                ? e.url
                                                                                    ? location.href = e.url
                                                                                    : e.form && $(e.form).hide().appendTo("body").submit()
                                                                                : "msg+url" === m.after
                                                                                    ? o(_.template(m.msg, e), null, function () {
                                                                                        try {
                                                                                            return location.href = _.template(m.url, e)
                                                                                        } catch (t) {
                                                                                            error_handler(t, "red libs 27", arguments.callee)
                                                                                        }
                                                                                    })
                                                                                    : "msg+pay" === m.after
                                                                                        ? o(_.template(m.msg, e), null, function () {
                                                                                            try {
                                                                                                if (e.url) 
                                                                                                    return location.href = e.url;
                                                                                                if (e.form) 
                                                                                                    return $(e.form)
                                                                                                        .hide()
                                                                                                        .appendTo("body")
                                                                                                        .submit()
                                                                                                } catch (t) {
                                                                                                error_handler(t, "red libs 28", arguments.callee)
                                                                                            }
                                                                                        })
                                                                                        : "msg+addhtml" === m.after
                                                                                            ? o(_.template(m.msg, e), null, function () {
                                                                                                try {
                                                                                                    return $("body").append(_.template(m.addhtml, e))
                                                                                                } catch (t) {
                                                                                                    error_handler(t, "red libs 29", arguments.callee)
                                                                                                }
                                                                                            })
                                                                                            : "js" === m.after && (
                                                                                                c = "(function () { var time = <%= time %>; var name = '<%- name %>'; var email = '" +
                                                                                                        "<%- email %>'; var phone = '<%- phone %>'; var count = '<%- count %>'; var fie" +
                                                                                                        "lds = <%= JSON.stringify(fields) %>; var item = <%= JSON.stringify(item) %>; v" +
                                                                                                        "ar items = <%= JSON.stringify(items) %>; var send = <%= JSON.stringify(send) %" +
                                                                                                        ">;" + m.js + "})();",
                                                                                                $.globalEval(_.template(c, e))
                                                                                            )
                                                            )
                                                            : (r(t.error, null), p.trigger("error")),
                                                    p
                                                        .trigger("reset")
                                                        .find("[data-placeholder]")
                                                        .data("placeholder", !0),
                                                    v.length && plp
                                                        .cart
                                                        .empty(),
                                                    plp
                                                        .modal
                                                        .closeAll(),
                                                    s = $.now()
                                                } catch (f) {
                                                    error_handler(f, "red libs 26", arguments.callee)
                                                }
                                            },
                                            a = function (e, i, o) {
                                                try {
                                                    return p.trigger("error"),
                                                    n.prop("disabled", !1),
                                                    r(
                                                        t.error,
                                                        400 === e.status
                                                            ? e.responseText
                                                            : null
                                                    ),
                                                    s = $.now()
                                                } catch (a) {
                                                    error_handler(a, "red libs 30", arguments.callee)
                                                }
                                            },
                                            $.ajax("/app/c", {
                                                type: "POST",
                                                data: JSON.stringify(g),
                                                dataType: "json",
                                                contentType: "application/json",
                                                processData: !1,
                                                success: y,
                                                error: y
                                            })
                                        )
                                )
                        } catch (w) {
                            error_handler(w, "red libs 20", arguments.callee)
                        }
                    })
                } catch (b) {
                    error_handler(b, "red libs 8", arguments.callee)
                }
            })
        } catch (f) {
            error_handler(f, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            var e,
                t,
                n,
                r,
                i,
                o,
                a;
            if (
                "scroll" !== window.plp.animations.section.type && "scroll" !== window.plp.animations.widget.type || (new WOW).init(),
                $('[data-action="formscroll"]').each(function () {
                    try {
                        var e,
                            t,
                            n,
                            r,
                            i;
                        return i = $(this),
                        t = i.closest(".section"),
                        r = t.prevAll(".section"),
                        n = t.nextAll(".section"),
                        e = i.hasClass("btn")
                            ? i
                            : i.find(".btn"),
                        e.on("click", function () {
                            try {
                                var e,
                                    i,
                                    o;
                                if (i = n.find(".form:visible").first(), 1 === i.length) 
                                    return $("html, body").animate({
                                        scrollTop: i
                                            .offset()
                                            .top - 100
                                    }, {
                                        duration: 1500,
                                        easing: "easeInOutQuint"
                                    });
                                if (e = t.find(".form:visible").first(), 1 === e.length) 
                                    return $("html, body").animate({
                                        scrollTop: e
                                            .offset()
                                            .top - 100
                                    }, {
                                        duration: 1500,
                                        easing: "easeInOutQuint"
                                    });
                                if (o = r.find(".form:visible").last(), 1 === o.length) 
                                    return $("html, body").animate({
                                        scrollTop: o
                                            .offset()
                                            .top - 100
                                    }, {
                                        duration: 1500,
                                        easing: "easeInOutQuint"
                                    })
                            } catch (a) {
                                error_handler(a, "red libs 3", arguments.callee)
                            }
                        })
                    } catch (o) {
                        error_handler(o, "red libs 2", arguments.callee)
                    }
                }),
                t = $(".section.fixation").first(),
                $(document).on("click", 'a[href^="#"]', function (e) {
                    try {
                        var n,
                            r,
                            i;
                        if (e.isDefaultPrevented()) 
                            return;
                        if (n = $($(this).attr("href")), n.length) 
                            return i = n
                                .offset()
                                .top,
                            t.length && (i -= t.height()),
                            $("html").hasClass("pp")
                                ? (
                                    r = n.closest(".pp-section").index(".pp-section"),
                                    r = n.closest(".pp-section").index(".pp-section"),
                                    $.fn.pagepiling.moveTo(
                                        r + 1
                                    )
                                )
                                : $("html,body").animate({
                                    scrollTop: i
                                }, {
                                    duration: 1e3,
                                    easing: "easeInOutCubic"
                                }),
                            !1
                    } catch (o) {
                        error_handler(o, "red libs 4", arguments.callee)
                    }
                }),
                n = location.href.match(/scrollblock=(\d+)/)
            ) {
                if (
                    o = location.href.match(/scrolloffset=(-?\d+)/),
                    i = o.length
                        ? 1 * o[1]
                        : 0,
                    r = 1 * n[1],
                    e = $(".node.section").eq(r),
                    e.length
                ) 
                    return a = e
                        .offset()
                        .top + i,
                    $(document).scrollTop(a);
                throw new Error(
                    "lib-scroll trying to scroll to unexisting " + r + " block"
                )
            }
        } catch (l) {
            error_handler(l, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    var e,
        t,
        n,
        r;
    r = function (e, t) {
        try {
            var n,
                r,
                i,
                o,
                a,
                l;
            for (n = function () {
                try {
                    return setTimeout(function (e) {
                        try {
                            return function () {
                                try {
                                    return t()
                                } catch (e) {
                                    error_handler(e, "red libs 4", arguments.callee)
                                }
                            }
                        } catch (n) {
                            error_handler(n, "red libs 3", arguments.callee)
                        }
                    }(this), 500)
                } catch (e) {
                    error_handler(e, "red libs 2", arguments.callee)
                }
            }, a = 0, l = [], i = 0, o = e.length; i < o; i++) 
                r = e[i],
                l.push(function (t) {
                    try {
                        var r,
                            i,
                            o,
                            l;
                        if (
                            o = document.createElement("span"),
                            o.innerHTML = "giItT1WQy@!-/#",
                            o.style.position = "fixed",
                            o.style.left = "-10000px",
                            o.style.top = "-10000px",
                            o.style.fontSize = "1000px",
                            o.style.fontFamily = "sans-serif",
                            o.style.fontVariant = "normal",
                            o.style.fontStyle = "normal",
                            o.style.fontWeight = "normal",
                            o.style.letterSpacing = "0",
                            document.body.appendChild(o),
                            l = o.offsetWidth,
                            o.style.fontFamily = t,
                            i = void 0,
                            r = function () {
                                try {
                                    if (
                                        o && o.offsetWidth !== l && (++a, o.parentNode.removeChild(o), o = null),
                                        a >= e.length && (i && clearInterval(i), a === e.length)
                                    ) 
                                        return n(),
                                        !0
                                } catch (t) {
                                    error_handler(t, "red libs 6", arguments.callee)
                                }
                            },
                            !r()
                        ) 
                            return i = setInterval(r, 500)
                    } catch (s) {
                        error_handler(s, "red libs 5", arguments.callee)
                    }
                }(r));
            return l
        } catch (s) {
            error_handler(s, "red libs 1", arguments.callee)
        }
    },
    t = {
        opensans: ["Open Sans"],
        robotosans: [
            "Open Sans", "Roboto Slab"
        ],
        introsans: [
            "Open Sans", "Intro"
        ],
        sportsans: [
            "Open Sans", "Sports World"
        ],
        unisans: [
            "Open Sans", "Uni Sans"
        ],
        junesans: [
            "Open Sans", "Junegull"
        ],
        geolobster: ["Lobster"],
        geoseva: ["Yeseva One"],
        geobeer: ["Beer money"],
        sladkoblogger: ["Sladkoeshka", "Blogger Sans"]
    },
    e = $("div.area"),
    n = !1,
    $.each(t, function (t, i) {
        try {
            if (e.hasClass(t)) 
                return n = !0,
                r(i, function () {
                    try {
                        return $(plp).trigger("fonts-loaded")
                    } catch (e) {
                        error_handler(e, "red libs 8", arguments.callee)
                    }
                }),
                !1
        } catch (o) {
            error_handler(o, "red libs 7", arguments.callee)
        }
    }),
    n || $(plp).trigger("fonts-loaded")
} catch (i) {
    error_handler(i, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            var e,
                t,
                n,
                r;
            if (
                n = !1,
                t = $("<div></div>"),
                e = $(".section.fixation:visible:first"),
                r = e.attr("data-opacity"),
                e.length
            ) 
                return $(document).on("scroll", function (i) {
                    try {
                        var o,
                            a;
                        if (o = $(document).scrollTop(), n) {
                            if (a = t.offset().top, o <= a) 
                                return t.remove(),
                                e.css("opacity", 1),
                                e.removeClass("fixed"),
                                n = !1
                        } else if (a = e.offset().top, o > a) 
                            return t
                                .css("height", e.height())
                                .insertAfter(e),
                            e.css("opacity", r),
                            e.addClass("fixed"),
                            n = !0
                    } catch (l) {
                        error_handler(l, "red libs 2", arguments.callee)
                    }
                })
        } catch (i) {
            error_handler(i, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            return $(".node[data-bgvideo]").each(function () {
                try {
                    var e,
                        t;
                    return e = $(this),
                    t = e.data("bgvideo"),
                    plp
                        .lazy
                        .add(e.removeAttr("data-bgvideo"), function (n) {
                            try {
                                var r;
                                if ("youtube" === t.bgVideo_Source) 
                                    return r = $("<div></div>").prependTo(e.children(".wrapper1")),
                                    r
                                        .data("property", {
                                            videoURL: t.bgVideo_Youtube,
                                            containment: r,
                                            mute: !0,
                                            showControls: !1
                                        })
                                        .YTPlayer();
                                if ("direct" === t.bgVideo_Source || "library" === t.bgVideo_Source) 
                                    return r = e.children(".wrapper1"),
                                    r.vide({
                                        mp4: t.bgVideo_Mp4,
                                        webm: t.bgVideo_Webm,
                                        ogv: t.bgVideo_Ogv
                                    }, {
                                        mute: !0,
                                        autoplay: !0,
                                        loop: !0,
                                        posterType: "none"
                                    })
                            } catch (i) {
                                error_handler(i, "red libs 3", arguments.callee)
                            }
                        })
                } catch (n) {
                    error_handler(n, "red libs 2", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            return $(".node[data-bgsnow]").each(function () {
                try {
                    var e,
                        t,
                        n;
                    return e = $(this),
                    t = e.data("bgsnow"),
                    e.removeAttr("data-bgsnow"),
                    n = new Snowfall({
                        root: e
                            .find("> .wrapper1 > .wrapper2")
                            .get(0),
                        type: "text",
                        content: [
                            "*", "&#10052", "&#10053", "&#10054", "."
                        ],
                        minSize: 10,
                        maxSize: 30
                    }),
                    e.data("bgsnow", n)
                } catch (r) {
                    error_handler(r, "red libs 2", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    var e;
    "slider" === window.plp.animations.section.type && (e = function () {
        try {
            var t;
            if (!window.plp.screen) 
                return setTimeout(e, 10);
            if ("xs" !== window.plp.screen) 
                return $("html").addClass("pp"),
                $("div.area").pagepiling({
                    menu: null,
                    direction: "vertical",
                    verticalCentered: !1,
                    sectionsColor: [],
                    anchors: [],
                    scrollingSpeed: 700,
                    easing: "swing",
                    loopBottom: !1,
                    loopTop: !1,
                    css3: !0,
                    navigation: {
                        bulletsColor: "#fff",
                        position: "right"
                    },
                    normalScrollElements: null,
                    normalScrollElementTouchThreshold: 5,
                    touchSensitivity: 5,
                    keyboardScrolling: !0,
                    sectionSelector: ".section:not(.section-helper)",
                    animateAnchor: !1,
                    onLeave: function (e, t, n) {
                        try {
                            var r;
                            if (
                                $("div.area").trigger("leave", [t]),
                                $(".pp-section").eq(e - 1).find(".wow").addClass("wow-finished"),
                                $(".pp-section").eq(t - 1).find(".wow:not(.wow-finished)").removeAttr("style").css({visibility: "hidden"}),
                                r = function (e, t) {
                                    try {
                                        return setTimeout(t, e)
                                    } catch (n) {
                                        error_handler(n, "red libs 3", arguments.callee)
                                    }
                                },
                                $(".wow:not(.wow-finished)").length
                            ) 
                                return r(700, function () {
                                    try {
                                        return $(".pp-section")
                                            .eq(t - 1)
                                            .find(".wow")
                                            .css({visibility: "visible"}),
                                        (new WOW).init()
                                    } catch (e) {
                                        error_handler(e, "red libs 4", arguments.callee)
                                    }
                                })
                        } catch (i) {
                            error_handler(i, "red libs 2", arguments.callee)
                        }
                    },
                    afterLoad: function (e, t) {
                        try {
                            return $("div.area").trigger("afterLoad", [t])
                        } catch (n) {
                            error_handler(n, "red libs 5", arguments.callee)
                        }
                    }
                }),
                t = function () {
                    try {
                        var e;
                        return e = $("div.area").height(),
                        $(".pp-section>.wrapper1, .pp-section>.wrapper1>.wrapper2").css({height: e})
                    } catch (t) {
                        error_handler(t, "red libs 6", arguments.callee)
                    }
                }
            ,
            t(),
            $(window).on("resize", t)
        } catch (n) {
            error_handler(n, "red libs 1", arguments.callee)
        }
    })()
} catch (t) {
    error_handler(t, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            return $(".section-helper .cookieWarning").each(function () {
                try {
                    var e,
                        t,
                        n,
                        r;
                    if (
                        e = $(this),
                        n = "allowCookie",
                        r = -(e.innerHeight() + 10),
                        t = localStorage.getItem(n),
                        !t
                    ) 
                        return e.css({position: "fixed", bottom: r, opacity: 1}),
                        e.animate({
                            bottom: 10
                        }, 150),
                        e
                            .find("i, .moreInfo")
                            .on("click", function () {
                                try {
                                    return localStorage.setItem(n, !0),
                                    e.animate({
                                        bottom: r,
                                        opacity: 0
                                    }, 150)
                                } catch (t) {
                                    error_handler(t, "red libs 3", arguments.callee)
                                }
                            })
                    } catch (i) {
                    error_handler(i, "red libs 2", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            return $(".widget-cart-image").each(function () {
                try {
                    var e;
                    if (e = $(this).find(".colorbox"), !e.length) 
                        return;
                    return e.colorbox({maxWidth: "80%", maxHeight: "80%"})
                } catch (t) {
                    error_handler(t, "red libs 2", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            var e,
                t,
                n,
                r;
            if (t = $(".widget-comments-fb"), !t.length) 
                return;
            if (e = t.find(".fb"), e.length) 
                return n = "true" === e.attr("data-joint"),
                r = "http://" + location
                    .host
                    .replace(/^www\./, ""),
                n || (r += "/" + location.pathname),
                e.attr("data-href", r),
                e.attr("data-width", e.width()),
                $("head").append(
                    '<meta property="fb:app_id" content="' + e.data("apiid") + '"/>'
                ),
                $('<div id="fb-root"></div>').appendTo("body"),
                function (e, t, n) {
                    try {
                        var r,
                            i = e.getElementsByTagName(t)[0];
                        if (e.getElementById(n)) 
                            return;
                        r = e.createElement(t),
                        r.id = n,
                        r.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8",
                        i
                            .parentNode
                            .insertBefore(r, i)
                    } catch (o) {
                        error_handler(o, "red libs 2", arguments.callee)
                    }
                }
            (document, "script", "facebook-jssdk")
        } catch (i) {
            error_handler(i, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    var e;
    e = function (e) {
        try {
            return _.reduce(e, function (e, t, n) {
                try {
                    return e + t.charCodeAt() * Math.pow(n + 5, 5)
                } catch (r) {
                    error_handler(r, "red libs 2", arguments.callee)
                }
            }, e.length)
        } catch (t) {
            error_handler(t, "red libs 1", arguments.callee)
        }
    },
    $(function () {
        try {
            var t,
                n,
                r,
                i,
                o,
                a;
            if (n = $(".widget-comments-vk"), !n.length) 
                return;
            if (t = n.find(".vk"), t.length && t.data("apiid")) 
                return r = _.uniqueId("vk_comments"),
                t.attr("id", r),
                a = "true" === t.attr("data-joint"),
                i = 1,
                a || (i = e(location.host.replace(/^www\./, "") + "/" + location.pathname)),
                o = "//vk.com/js/api/openapi.js?112",
                $.getScript(o, function () {
                    try {
                        return VK.init({
                            apiId: t.data("apiid"),
                            onlyWidgets: !0
                        }),
                        VK
                            .Widgets
                            .Comments(r, {
                                limit: 5,
                                width: t.width(),
                                attach: "*"
                            }, i)
                    } catch (e) {
                        error_handler(e, "red libs 4", arguments.callee)
                    }
                })
        } catch (l) {
            error_handler(l, "red libs 3", arguments.callee)
        }
    })
} catch (t) {
    error_handler(t, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    var e;
    e = function (e) {
        try {
            if (e > 0) 
                return e - 1;
            if (0 === e) 
                return 6
        } catch (t) {
            error_handler(t, "red libs 1", arguments.callee)
        }
    },
    $(function () {
        try {
            var t;
            if (0 === $(".widget-countdown").length) 
                return;
            return t = window.plp_lang || window.plp.lang || "ru",
            $
                .countdown
                .setDefaults($.countdown.regionalOptions[""]),
            $(".widget-countdown").each(function () {
                try {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        l;
                    return n = $(this).find("[plp-countdown-root]"),
                    l = n.data("vals"),
                    a = new Date,
                    "full" === l.type
                        ? (l.full_date.day++, i = new Date(
                            l.full_date.year,
                            l.full_date.month,
                            l.full_date.day,
                            l.full_time.hour,
                            l.full_time.minute
                        ))
                        : "month" === l.type
                            ? (l.month_day++, i = new Date(
                                a.getFullYear(),
                                a.getMonth(),
                                l.month_day,
                                l.month_time.hour,
                                l.month_time.minute
                            ), i.getTime() < a.getTime() && (i = new Date(
                                a.getFullYear(),
                                a.getMonth() + 1,
                                l.month_day,
                                l.month_time.hour,
                                l.month_time.minute
                            )))
                            : "week" === l.type
                                ? (r = l.week_day - e(a.getDay()), i = new Date(
                                    a.getFullYear(),
                                    a.getMonth(),
                                    a.getDate() + r,
                                    l.week_time.hour,
                                    l.week_time.minute
                                ), i.getTime() < a.getTime() && (r = 7 - e(a.getDay()) + l.week_day, i = new Date(
                                    a.getFullYear(),
                                    a.getMonth(),
                                    a.getDate() + r,
                                    l.week_time.hour,
                                    l.week_time.minute
                                )))
                                : "day" === l.type
                                    ? (
                                        i = new Date(a.getFullYear(), a.getMonth(), a.getDate(), l.day_time.hour, l.day_time.minute),
                                        i.getTime() < a.getTime() && (i = new Date(
                                            a.getFullYear(),
                                            a.getMonth(),
                                            a.getDate() + 1,
                                            l.day_time.hour,
                                            l.day_time.minute
                                        ))
                                    )
                                    : "fake" === l.type && (
                                        o = [l.fake_days, l.fake_time.hour, l.fake_time.minute].join(":"),
                                        $.cookie(o)
                                            ? i = new Date(1 * $.cookie(o))
                                            : (i = new Date(
                                                a.getFullYear(),
                                                a.getMonth(),
                                                a.getDate() + l.fake_days,
                                                a.getHours() + l.fake_time.hour,
                                                a.getMinutes() + l.fake_time.minute
                                            ), $.cookie(o, i.getTime(), {
                                                expires: 365,
                                                path: "/"
                                            }))
                                    ),
                    n.countdown({
                        until: i,
                        layout: n.html(),
                        format: "DHMS",
                        timezone: "fake" === l.type || "default" === l.timezone
                            ? null
                            : l.timezone
                    }),
                    n.countdown("option", $.countdown.regionalOptions[t])
                } catch (s) {
                    error_handler(s, "red libs 3", arguments.callee)
                }
            })
        } catch (n) {
            error_handler(n, "red libs 2", arguments.callee)
        }
    })
} catch (t) {
    error_handler(t, "red libs 0", arguments.callee)
}
}.call(this),
function () {
try {
    $(function () {
        try {
            return $(".widget-image").each(function () {
                try {
                    var e;
                    if (e = $(this).find(".colorbox"), !e.length) 
                        return;
                    return e.data("rel")
                        ? e.colorbox({rel: e.data("rel"), maxWidth: "80%", maxHeight: "80%"})
                        : e.colorbox({maxWidth: "80%", maxHeight: "80%"})
                } catch (t) {
                    error_handler(t, "red libs 2", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 1", arguments.callee)
        }
    })
} catch (e) {
    error_handler(e, "red libs 0", arguments.callee)
}
}.call(this);