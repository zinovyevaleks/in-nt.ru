﻿(function (g, h, E) {
    function v(a, b, c) {
        return function () {
            try {
                return a.apply(this, arguments)
            } catch (d) {
                c || xa(d, b)
            }
        }
    }
    function xa(a, b) {
        var c;
        if (.01 > Math.random()) 
            try {
                var d = a && a.message || "";
                (
                    c = -1 < d.indexOf("network error occurred") || -1 < d.indexOf("send beacon") && -1 < d.indexOf("Content Security Policy")
                ) || (new ra).log(
                    "jserrs",
                    Z,
                    a.message,
                    b,
                    G.href,
                    "",
                    "string" === typeof a.stack && a.stack.replace(/\n/g, "\\n")
                )
            } catch (e) {}
        }
    function pb(a, b, c, d, e) {
        function m(a) {
            var b = (new Date).getTime();
            a && b < a && (pa += a - b + 20);
            f.setTimeout(function () {
                m(b)
            }, 20, "timeCorrector")
        }
        function u() {
            var a = (new Date).getTime() + pa;
            a < Qa && (a = Qa + 10);
            return Qa = a
        }
        function r() {
            return Math.round((u() - ja) / 50)
        }
        function R(a, b) {
            b = Math.max(0, Math.min(b, 65535));
            f.mergeArrays(a, [
                b >> 8,
                b & 255
            ])
        }
        function p(a, b) {
            f.mergeArrays(a, [b & 255])
        }
        function q(a, b) {
            for (b = Math.max(0, b | 0); 127 < b;) 
                f.mergeArrays(a, [b & 127 | 128]),
                b >>= 7;
            f.mergeArrays(a, [b])
        }
        function n(a, b) {
            255 < b.length && (b = b.substr(0, 255));
            f.mergeArrays(a, [b.length]);
            for (var c = 0; c < b.length; c++) 
                R(a, b.charCodeAt(c))
        }
        function t(a, b) {
            q(a, b.length);
            for (var c = 0; c < b.length; c++) 
                q(a, b.charCodeAt(c))
        }
        function w(a, b, c, d, e, f) {
            for (var M; c && (M = l.getElementSize(c)) && (!M[0] || !M[1]);) 
                c = l.getElementParent(c);
            if (!c) 
                return null;
            M = c[K];
            if (!M || 0 > M) 
                return null;
            var m = {
                mousemove: 2,
                click: 32,
                dblclick: 33,
                mousedown: 4,
                mouseup: 30,
                touch: 12
            }[b];
            if (!m) 
                return null;
            var g = l.getElementXY(c);
            c = [];
            p(c, m);
            q(c, a);
            q(c, M);
            q(c, Math.max(0, d[0] - g[0]));
            q(c, Math.max(0, d[1] - g[1]));
            /^mouse(up|down)|click$/.test(b) && (a = e || f, p(
                c,
                2 > a
                    ? 1
                    : a == (
                        e
                            ? 2
                            : 4
                    )
                        ? 4
                        : 2
            ));
            return c
        }
        function $a(a, b, c, d) {
            b = b[K];
            if (!b || 0 > b) 
                return null;
            var e = [];
            p(e, 31);
            q(e, a);
            q(e, b);
            q(e, c[0]);
            q(e, c[1]);
            p(e, 0);
            p(e, 0);
            p(e, d);
            return e
        }
        function E(a, b) {
            var c = [];
            p(c, 3);
            q(c, a);
            q(c, b[0]);
            q(c, b[1]);
            return c
        }
        function G(a, b, c) {
            var d = [];
            c = c[K];
            if (!c || 0 > c) 
                return null;
            p(d, 16);
            q(d, a);
            q(d, b[0]);
            q(d, b[1]);
            q(d, c);
            return d
        }
        function J(a, b, c) {
            var d = [];
            p(d, 28);
            q(d, a);
            q(d, b[0]);
            q(d, b[1]);
            q(d, c[0]);
            q(d, c[1]);
            return d
        }
        function ma(a, b, c, d, e) {
            var f = [];
            p(f, 38);
            q(f, a);
            R(f, b);
            p(f, c);
            a = d[K];
            if (!a || 0 > a) 
                a = 0;
            q(f, a);
            p(
                f,
                e
                    ? 1
                    : 0
            );
            return f
        }
        function tb(a, b) {
            var c;
            if (0 == b.length) 
                var d = c = "";
            else 
                100 >= b.length
                    ? (c = b, d = "")
                    : 200 >= b.length
                        ? (c = b.substr(0, 100), d = b.substr(100))
                        : (c = b.substr(0, 97), d = b.substr(b.length - 97));
            var e = [];
            p(e, 29);
            q(e, a);
            t(e, c);
            t(e, d);
            return e
        }
        function ua(a) {
            var b = [];
            p(b, 27);
            q(b, a);
            return b
        }
        function ub(a) {
            var b = [];
            p(b, 14);
            q(b, a);
            return b
        }
        function B(a) {
            var b = [];
            p(b, 15);
            q(b, a);
            return b
        }
        function P(a, b) {
            var c = [];
            p(c, 17);
            q(c, a);
            q(c, b[K]);
            return c
        }
        function sa(a, b) {
            var c = [];
            p(c, 18);
            q(c, a);
            q(c, b[K]);
            return c
        }
        function z(a, b, c, d) {
            var e = [];
            p(e, 39);
            q(e, a);
            q(e, b[K]);
            n(e, String(c));
            p(
                e,
                d
                    ? 1
                    : 0
            );
            return e
        }
        function Q(a) {
            var b = a[K];
            if (!b || 0 > b || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || aa(a.form)) 
                return null;
            var c = l.getFormNumber(a.form);
            if (0 > c) 
                return null;
            var d = "INPUT" == a.nodeName
                ? {
                    text: 0,
                    color: 0,
                    date: 0,
                    datetime: 0,
                    "datetime-local": 0,
                    email: 0,
                    number: 0,
                    range: 0,
                    search: 0,
                    tel: 0,
                    time: 0,
                    url: 0,
                    month: 0,
                    week: 0,
                    password: 2,
                    radio: 3,
                    checkbox: 4,
                    file: 6,
                    image: 7
                }[a.type]
                : {
                    SELECT: 1,
                    TEXTAREA: 5
                }[a.nodeName];
            if ("number" != typeof d) 
                return null;
            for (var e = -1, f = a.form.elements, M = f.length, m = 0, g = 0; m < M; m++) 
                if (f[m].name == a.name) {
                    if (f[m] == a) {
                        e = g;
                        break
                    }
                    g++
                }
            if (0 > e) 
                return null;
            f = [];
            p(f, 7);
            q(f, b);
            q(f, c);
            q(f, d);
            t(f, a.name || "");
            q(f, e);
            return f
        }
        function T(a, b) {
            var c = l.getFormNumber(b);
            if (0 > c) 
                return null;
            for (var d = b.elements, e = d.length, M = [], m = 0; m < e; m++) 
                if (!l.isEmptyField(d[m])) {
                    var g = d[m][K];
                    g && 0 < g && f.mergeArrays(M, [g])
                }
            d = [];
            p(d, 11);
            q(d, a);
            q(d, c);
            q(d, M.length);
            for (c = 0; c < M.length; c++) 
                q(d, M[c]);
            return d
        }
        function Y() {
            var a = [];
            p(a, 13);
            return a
        }
        function C(a, b, c) {
            a = a.apply(g, b);
            va.append(a, c)
        }
        function x(a) {
            if (a[K]) 
                a : {
                    var b = r(),
                        c = a[K];
                    if (0 < c) {
                        var d = [];
                        a = l.getElementRegion(a);
                        var e = Da[c],
                            f = a[0] + "x" + a[1],
                            m = a[2] + "x" + a[3];
                        f != e.pos && (e.pos = f, p(d, 9), q(d, b), q(d, c), q(d, a[0]), q(d, a[1]));
                        m != e.size && (e.size = m, p(d, 10), q(d, b), q(d, c), q(d, a[2]), q(d, a[3]));
                        if (d.length) {
                            a = d;
                            break a
                        }
                    }
                    a = null
                }
            else {
                (c = l.getElementParent(a)) && x(c);
                a[K] = Ra;
                Da[Ra] = {};
                Ra++;
                if (a.nodeName) 
                    if (c = +a[K], !isFinite(c) || 0 >= c) 
                        b = null;
                    else {
                        d = 64;
                        e = 0;
                        var g = l.getElementParent(a);
                        f = g && g[K]
                            ? g[K]
                            : 0;
                        0 > f && (f = 0);
                        m = a
                            .nodeName
                            .toUpperCase();
                        var M = vb[m];
                        M || (d |= 2);
                        var y = l.getElementNeighborPosition(a);
                        y || (d |= 4);
                        var u = l.getElementRegion(a);
                        (
                            g = g
                                ? l.getElementRegion(g)
                                : null
                        ) && u[0] == g[0] && u[1] == g[1] && u[2] == g[2] && u[3] == g[3] && (d |= 8);
                        Da[c].pos = u[0] + "x" + u[1];
                        Da[c].size = u[2] + "x" + u[3];
                        a.id && "string" == typeof a.id && (d |= 32);
                        (g = l.calcTextChecksum(a)) && (d |= 16);
                        var A = l.calcAttribChecksum(a);
                        A && (e |= 2);
                        b : {
                            var h = l.getElementChildren(l.getElementParent(a), a.tagName);
                            for (var k = 0; k < h.length; k++) 
                                if ((!h[k].id || "string" != typeof h[k].id) && l.calcAttribChecksum(h[k]) == A && l.calcTextChecksum(h[k]) == g) {
                                    h = !0;
                                    break b
                                }
                            h = !1
                        }
                        h && (d |= 1, b = l.calcChildrenChecksum(a));
                        h = [];
                        p(h, 1);
                        q(h, c);
                        p(h, d);
                        q(h, f);
                        M
                            ? p(h, M)
                            : n(h, m);
                        y && q(h, y);
                        d & 8 || (q(h, u[0]), q(h, u[1]), q(h, u[2]), q(h, u[3]));
                        d & 32 && n(h, a.id);
                        g && R(h, g);
                        d & 1 && R(h, b);
                        p(h, e);
                        A && R(h, A);
                        b = h
                    }
                else 
                    a[K] = -1,
                    b = null;
                va.append(b, void 0);
                a = Q(a)
            }
            va.append(a, void 0)
        }
        function fa(a, b) {
            var c = a && l.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)");
            b && a && (
                c = c || !!l.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", a).length
            );
            return c
        }
        function aa(a) {
            return a && l.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
        }
        function W(a) {
            var b = F.getTarget(a);
            if (b && "SCROLLBAR" != b.nodeName) {
                if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName)) 
                    if (b[K]) 
                        x(b);
                    else {
                        var c = b.form;
                        if (c) {
                            c = c.elements;
                            for (var d = c.length, e = 0; e < d; e++) 
                                /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c[e].tagName) && !c[e][K] && x(c[e])
                        } else 
                            x(b)
                    }
                else 
                    x(b);
                C(w, [
                    r(),
                    a.type,
                    b,
                    F.getPos(a),
                    a.which,
                    a.button
                ])
            }
        }
        function ca(a) {
            W(a);
            a : {
                if(g.getSelection) {
                    try {
                        var b = g.getSelection()
                    } catch (sb) {
                        break a
                    }
                    var c = b.toString();
                    var d = b.anchorNode
                } else 
                    h.selection && h.selection.createRange && (
                        a = h.selection.createRange(),
                        c = a.text,
                        d = a.parentElement()
                    );
                if ("string" == typeof c) {
                    try {
                        for (; d && 1 != d.nodeType;) 
                            d = d.parentNode
                    } catch (sb) {
                        break a
                    }
                    ka(d).recordData && !fa(d, !0) && c != qa && (qa = c, C(tb, [r(), c]))
                }
            }
        }
        function la(a) {
            var b = u(),
                c = b - ab;
            if (!(10 > c)) {
                var d = F.getPos(a),
                    e = Ta[0] - d[0],
                    f = Ta[1] - d[1];
                e = e * e + f * f;
                0 >= e || 16 > e && 100 > c || 20 > c && 256 > e || (ab = b, Ta = d, W(a))
            }
        }
        function N() {
            var a = l.getDocumentScroll(),
                b = u();
            10 > b - ra || 10 > Math.abs(a[0] - Z[0]) && 10 > Math.abs(a[1] - Z[1]) || (
                ra = b,
                Z = a,
                C(E, [r(), a])
            )
        }
        function S(a) {
            if (a = F.getTarget(a)) {
                var b = Math.random(),
                    c = [a.scrollLeft, a.scrollTop];
                if (a.localId) {
                    if (
                        b = da[a.localId],
                        !b || 10 > Math.abs(c[0] - b[0]) && 10 > Math.abs(c[1] - b[1])
                    ) 
                        return
                } else {
                    for (; da[b];) 
                        b = Math.random();
                    a.localId = b
                }
                da[a.localId] = c;
                a !== h && (x(a), C(G, [r(), c, a]))
            }
        }
        function ha() {
            C(J, [r(), l.getViewportSize(), l.getDocumentSize()])
        }
        function ta() {
            C(Y, [], !0)
        }
        function ba(a) {
            return (
                a.shiftKey
                    ? 2
                    : 0
            ) | (
                a.ctrlKey
                    ? 4
                    : 0
            ) | (
                a.altKey
                    ? 1
                    : 0
            ) | (
                a.metaKey
                    ? 8
                    : 0
            ) | (
                a.ctrlKey || a.altKey
                    ? 16
                    : 0
            )
        }
        function ea(a) {
            return "INPUT" == a.tagName
                ? "password" == a.type || a.name && V.test(a.name) || a.id && V.test(a.id)
                : !1
        }
        function ka(a) {
            if (!a) 
                return {
                    ignore: !0,
                    forceRecord: !1,
                    isPrivate: !1,
                    privateFlag: !1,
                    recordData: !0
                };
            var b = "password" === a.type || V.test(a.name) || V.test(a.id),
                c = f.reduce(function (b, c) {
                    return b || Ea
                        .generalRegex
                        .test(a[c])
                }, !1, ["className", "id", "name"]) || Ea
                    .placeholderRegex
                    .test(a.placeholder),
                d = Ea
                    .forceRecordRegex
                    .test(a.className);
            return {
                forceRecord: d,
                ignore: b,
                isPrivate: c,
                privateFlag: !d && (c || b),
                recordData: d || !(c && e.get("isEU") || b)
            }
        }
        function U(a, b, c) {
            a = F.getTarget(a);
            var d = ka(a);
            d.ignore || !d.forceRecord && (d.isPrivate && e.get("isEU") || fa(a)) || (
                x(a),
                C(ma, [r(), b, c, a, d.privateFlag])
            )
        }
        function y(a) {
            var b = a.keyCode,
                c = ba(a);
            if ({
                3: 1,
                8: 1,
                9: 1,
                13: 1,
                16: 1,
                17: 1,
                18: 1,
                19: 1,
                20: 1,
                27: 1,
                33: 1,
                34: 1,
                35: 1,
                36: 1,
                37: 1,
                38: 1,
                39: 1,
                40: 1,
                45: 1,
                46: 1,
                91: 1,
                92: 1,
                93: 1,
                106: 1,
                110: 1,
                111: 1,
                144: 1,
                145: 1
            }[b] || 112 <= b && 123 >= b || 96 <= b && 105 >= b || c & 16) 
                19 == b && 4 == (c & -17) && (b = 144),
                U(a, b, c | 16),
                na = !1,
                f.setTimeout(function () {
                    na = !0
                }, 1, "wvl.keyDown"),
                !(67 == b && c & 4) || c & 1 || c & 2 || L()
        }
        function A(a) {
            na && !oa && 0 !== a.which && (
                U(a, a.charCode || a.keyCode, ba(a)),
                oa = !0,
                f.setTimeout(function () {
                    oa = !1
                }, 1, "vwl.keyPress")
            )
        }
        function L() {
            ia || (ia = !0, qa && C(ua, [r()]), f.setTimeout(function () {
                ia = !1
            }, 1, "wvl.copy"))
        }
        function H() {
            ya || (ya = !0, C(ub, [r()]))
        }
        function O() {
            ya && (ya = !1, C(B, [r()]))
        }
        function X(a) {
            (!ya || a && !a.fromElement) && H()
        }
        function cb(a) {
            a && !a.toElement && O()
        }
        function Fa(a) {
            if ((a = F.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[K]) 
                    x(a);
                else {
                    var b = a.form;
                    if (b) {
                        b = b.elements;
                        for (var c = b.length, d = 0; d < c; d++) 
                            /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[d].tagName) && !b[d][K] && x(b[d])
                    } else 
                        x(a)
                }
                C(P, [r(), a])
            }
        }
        function Ga(a) {
            (a = F.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (
                x(a),
                C(sa, [r(), a])
            )
        }
        function Ha(a) {
            if ((a = F.getTarget(a)) && !ea(a) && !fa(a) && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var b = ka(a),
                    c = /^(checkbox|radio)$/.test(a.type)
                        ? a.checked
                        : a.value;
                c = b.recordData
                    ? c
                    : f
                        .map(function () {
                            return Ea.obfuscatedSymbol
                        }, c.split(""))
                        .join("");
                x(a);
                C(z, [r(), a, c, b.privateFlag])
            }
        }
        function za(a) {
            if ((a = F.getTarget(a)) && !aa(a) && "FORM" == a.nodeName) {
                for (var b = a.elements, c = 0; c < b.length; c++) 
                    l.isEmptyField(b[c]) || x(b[c]);
                C(T, [
                    r(), a
                ], !0)
            }
        }
        function Ua(a) {
            N();
            if (a.touches && a.touches.length) {
                var b = F.getTarget(a);
                if (b && b != h) {
                    x(b);
                    for (var c = 0; c < a.touches.length; c++) 
                        C(w, [
                            r(),
                            "touch",
                            b,
                            [
                                a
                                    .touches[c]
                                    .pageX,
                                a
                                    .touches[c]
                                    .pageY
                            ],
                            0,
                            0
                        ])
                }
            }
        }
        function Ia(a) {
            var b = F.getTarget(a);
            if (b) {
                var c;
                "wheel" == a.type
                    ? c = 0 < a.deltaY
                        ? 1
                        : 0 > a.deltaY
                            ? 2
                            : 0
                    : "mousewheel" == a.type && (
                        c = 0 < a.wheelDelta
                            ? 2
                            : 0 > a.wheelDelta
                                ? 1
                                : 0
                    );
                c && (x(b), C($a, [r(), b, F.getPos(a), c]))
            }
        }
        function db(a) {
            (a = F.getTarget(a)) && "BODY" == a.tagName && va.append([], !0)
        }
        var va = new Ja({
                protocol: a,
                globalConfig: e,
                counterId: b,
                counterType: c,
                meta: {
                    url: D().href,
                    hitId: d,
                    timezone: Aa,
                    timestamp: Ba
                }
            }),
            eb = l.getBody(),
            vb = {
                A: 1,
                ABBR: 2,
                ACRONYM: 3,
                ADDRESS: 4,
                APPLET: 5,
                AREA: 6,
                B: 7,
                BASE: 8,
                BASEFONT: 9,
                BDO: 10,
                BIG: 11,
                BLOCKQUOTE: 12,
                BODY: 13,
                BR: 14,
                BUTTON: 15,
                CAPTION: 16,
                CENTER: 17,
                CITE: 18,
                CODE: 19,
                COL: 20,
                COLGROUP: 21,
                DD: 22,
                DEL: 23,
                DFN: 24,
                DIR: 25,
                DIV: 26,
                DL: 27,
                DT: 28,
                EM: 29,
                FIELDSET: 30,
                FONT: 31,
                FORM: 32,
                FRAME: 33,
                FRAMESET: 34,
                H1: 35,
                H2: 36,
                H3: 37,
                H4: 38,
                H5: 39,
                H6: 40,
                HEAD: 41,
                HR: 42,
                HTML: 43,
                I: 44,
                IFRAME: 45,
                IMG: 46,
                INPUT: 47,
                INS: 48,
                ISINDEX: 49,
                KBD: 50,
                LABEL: 51,
                LEGEND: 52,
                LI: 53,
                LINK: 54,
                MAP: 55,
                MENU: 56,
                META: 57,
                NOFRAMES: 58,
                NOSCRIPT: 59,
                OBJECT: 60,
                OL: 61,
                OPTGROUP: 62,
                OPTION: 63,
                P: 64,
                PARAM: 65,
                PRE: 66,
                Q: 67,
                S: 68,
                SAMP: 69,
                SCRIPT: 70,
                SELECT: 71,
                SMALL: 72,
                SPAN: 73,
                STRIKE: 74,
                STRONG: 75,
                STYLE: 76,
                SUB: 77,
                SUP: 78,
                TABLE: 79,
                TBODY: 80,
                TD: 81,
                TEXTAREA: 82,
                TFOOT: 83,
                TH: 84,
                THEAD: 85,
                TITLE: 86,
                TR: 87,
                TT: 88,
                U: 89,
                UL: 90,
                VAR: 91,
                NOINDEX: 100
            },
            Ea = function () {
                var a = (
                    "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone addres" +
                    "s passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number ca" +
                    "rd(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2" +
                    "}name card.*month card.*year card.*month card.*year password email birth(-|\\." +
                    "|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}nam" +
                    "e patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house s" +
                    "treet city flat state"
                ).split(" ");
                return {
                    generalRegex: new RegExp("(" + a.join("|") + ")", "i"),
                    placeholderRegex: new RegExp(
                        "(" + a.concat(
                            (
                                "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442" +
                                "\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;" +
                                "\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;" +
                                "\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|" +
                                "\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_" +
                                "|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c" +
                                ";\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440" +
                                "\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442" +
                                "\u044c"
                            ).split(";")
                        ).join("|") + ")",
                        "i"
                    ),
                    forceRecordRegex: /ym-record-keys/i,
                    obfuscatedSymbol: String.fromCharCode(8226),
                    obfuscatedKeyCode: 88
                }
            }(),
            pa = 0,
            Qa = 0;
        m(0);
        var Ra = 1,
            ab = 0,
            Ta = [
                0, 0
            ],
            ra = 0,
            Z = [
                0, 0
            ],
            da = {},
            V = /^(password|passwd|pswd)$/,
            na = !0,
            oa = !1,
            qa = "",
            ia = !1,
            ya = !0,
            ja = u(),
            K = "metrikaId_" + Math.random(),
            Da = {},
            Ka = ":submit" + Math.random();
        if (!f.isMetrikaPlayer()) {
            k.on(h, "mousemove", la);
            k.on(h, "click,dblclick,mousedown", W);
            k.on(h, "mouseup", ca);
            k.on(g, "scroll", N);
            if ("onmousewheel" in h) 
                k.on(h, "mousewheel", Ia);
            else 
                k.on(h, "wheel", Ia);
            k.on(g, "beforeunload", ta);
            if (!wb) 
                k.on(g, "unload", ta);
            k.on(g, "resize", ha);
            k.on(h, "keydown", y);
            k.on(h, "keypress", A);
            k.on(h, "copy", L);
            k.on(h, "touchmove,touchstart", Ua);
            if (eb) 
                k.on(h, "mouseleave", db);
            h.attachEvent && !g.opera
                ? (k.on(h, "focusin", X), k.on(h, "focusout", cb))
                : (k.on(g, "focus", H), k.on(g, "blur", O), k.on(h, "blur", O));
            h.addEventListener
                ? (
                    k.on(h, "scroll", S),
                    k.on(h, "focus", Fa),
                    k.on(h, "blur", Ga),
                    k.on(h, "change", Ha),
                    k.on(h, "submit", za)
                )
                : h.attachEvent && (
                    k.on(h, "focusin", Fa),
                    k.on(h, "focusout", Ga),
                    function () {
                        for (var a = h.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                            for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++) 
                                if (/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName)) 
                                    k.on(c[d], "change", Ha);
                        k.on(a[b], "submit", za)
                        }
                    }()
                );
            (function () {
                var a = h.getElementsByTagName("form");
                if (a.length) 
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b].submit;
                        if ("function" === typeof c || "object" === typeof c && /^\s*function submit\(\)/.test(String(c))) 
                            a[b][Ka] = c,
                            a[b].submit = function () {
                                za({target: this});
                                return this[Ka]()
                            }
                        }
                })();
            "0:0" !== l
                .getDocumentScroll()
                .join(":") && N();
            ha()
        }
        return {
            start: function () {
                va.activate()
            },
            stop: function () {
                va.clear();
                k.un(h, "mousemove", la);
                k.un(h, "click", W);
                k.un(h, "dblclick", W);
                k.un(h, "mousedown", W);
                k.un(h, "mouseup", ca);
                k.un(h, "mousewheel", Ia);
                k.un(h, "wheel", Ia);
                k.un(g, "scroll", N);
                k.un(g, "beforeunload", ta);
                k.un(g, "unload", ta);
                k.un(g, "resize", ha);
                k.un(h, "keydown", y);
                k.un(h, "keypress", A);
                k.un(h, "copy", L);
                k.un(h, "touchmove", Ua);
                k.un(h, "touchstart", Ua);
                eb && k.un(h, "mouseleave", db);
                k.un(h, "focusin", X);
                k.un(h, "focusout", cb);
                k.un(g, "focus", H);
                k.un(g, "blur", O);
                k.un(h, "blur", O);
                h.removeEventListener
                    ? (
                        k.un(h, "scroll", S),
                        k.un(h, "focus", Fa),
                        k.un(h, "blur", Ga),
                        k.un(h, "change", Ha),
                        k.un(h, "submit", za)
                    )
                    : h.detachEvent && (
                        k.un(h, "focusin", Fa),
                        k.un(h, "focusout", Ga),
                        function () {
                            for (var a = h.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                                for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++) 
                                    /^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName) && k.un(c[d], "change", Ha);
                                k.un(a[b], "submit", za)
                            }
                        }()
                    );
                (function () {
                    for (var a = h.getElementsByTagName("form"), b = 0; b < a.length; b++) 
                        a[b][Ka] && (a[b].submit = a[b][Ka])
                })()
            },
            uploadPages: function (a, b) {
                function c() {
                    k.un(h, "DOMContentLoaded", c);
                    k.un(g, "load", c);
                    for (
                        var e = a.split(/\n/),
                        f = D().href,
                        m = /regexp:/,
                        u = 0;
                        u < e.length;
                        u++
                    ) {
                        var y = e[u];
                        if (y) 
                            if (m.test(y)) {
                                y = La(y.replace(m, ""));
                                try {
                                    var A = new RegExp(y)
                                } catch (Rb) {}
                                if (A && A.test(f)) {
                                    d.uploadPage(b);
                                    break
                                }
                            }
                        else if (-1 !== f.indexOf(y)) {
                            d.uploadPage(b);
                            break
                        }
                    }
                }
                var d = this;
                "complete" === h.readyState
                    ? c()
                    : (k.on(h, "DOMContentLoaded", c), k.on(g, "load", c))
            },
            uploadPage: v(function (e) {
                if ("function" === typeof g.toStaticHTML && -1 < g.toStaticHTML.toString().indexOf("NoScript")) 
                    return !1;
                var f = h.documentElement;
                if (f && 19E4 < ("" + f.innerHTML).length) 
                    return !1;
                var m = g.XMLHttpRequest
                        ? new g.XMLHttpRequest
                        : new ActiveXObject("Msxml2.XMLHTTP"),
                    u = l.getDocumentCharset(),
                    y = "text/html" + (
                        u
                            ? ";charset\x3d" + u
                            : ""
                    ),
                    A = new xb({protocol: a, counterId: b, counterType: c});
                if ("html" === e) 
                    return e = new RegExp(
                        "\x3cscript [^\x3e]*?//" + I.host.replace(/\./g, "\\\\.") + "/watch/.*?\x3c/scr" +
                                "ipt\x3e",
                        "gi"
                    ),
                    A.sendContent(l.getDocumentHTML().replace(e, ""), y, d, Aa, Ba),
                    !0;
                m && (
                    m.open("get", D().href, !0),
                    m.onreadystatechange = v(function () {
                        if (4 === m.readyState) {
                            var a = m.getResponseHeader("content-type") || "";
                            u && -1 === a.indexOf("charset\x3d") && (a = y);
                            A.sendContent(m.responseText, a, d, Aa, Ba)
                        }
                    }, "updatePage.1"),
                    m.overrideMimeType && u && m.overrideMimeType(y),
                    m.send(null)
                );
                return !0
            }, "uploadPage")
        }
    }
    function D() {
        for (
            var a = {},
            b = "hash host hostname href pathname port protocol search".split(" "),
            c = b.length,
            d = c,
            e,
            f;
            d--;
        ) 
            a[b[d]] = "";
        try {
            for (e = g.location, d = c; d--;) 
                f = b[d],
                a[f] = "" + e[f]
        } catch (u) {
            G && (a = G)
        }
        return a
    }
    function La(a) {
        return a
            ? ("" + a)
                .replace(/^\s+/, "")
                .replace(/\s+$/, "")
            : ""
    }
    function Ma() {
        return -1 != D()
            .hostname
            .search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)
    }
    function ia(a) {
        return -1 !== ("" + g.navigator.userAgent)
            .toLowerCase()
            .search(a)
    }
    function fb(a) {
        return La(a && a.innerHTML && a.innerHTML.replace(/<\/?[^>]+>/gi, ""))
    }
    function gb(a, b) {
        var c;
        if (!a || !b) 
            return !1;
        var d = [];
        for (c = 0; c < b.length; c++) 
            d.push(
                b[c].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            );
        return (new RegExp("\\.(" + d.join("|") + ")$", "i")).test(a)
    }
    function yb(a) {
        a = a.target || a.srcElement;
        var b;
        if (!a) 
            return !1;
        
        3 == a.nodeType && (a = a.parentNode);
        for (
            b = a && a.nodeName && a.nodeName.toString().toLowerCase();
            a && a.parentNode && a.parentNode.nodeName && ("a" != b && "area" != b || !a.href);
        ) 
            b = (a = a.parentNode) && a.nodeName && a
                .nodeName
                .toString()
                .toLowerCase();
        return a.href
            ? a
            : !1
    }
    function zb(a, b) {
        return (
            a
                ? a.replace(/^www\./, "")
                : ""
        ).toLowerCase() == (
            b
                ? b.replace(/^www\./, "")
                : ""
        ).toLowerCase()
    }
    function Ab(a, b) {
        function c(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a
                .replace(/^\/*/, "")
                .replace(/^www\./, "");
            return a.split("/")[0]
        }
        return a && b
            ? c(a) == c(b)
            : a || b
                ? !1
                : !0
    }
    function hb() {
        var a = g.performance || g.webkitPerformance,
            b = a && a.timing,
            c,
            d = [];
        if (b && (c = b.navigationStart)) 
            for (d = [
                b.domainLookupEnd - b.domainLookupStart,
                b.connectEnd - b.connectStart,
                b.responseStart - b.requestStart,
                b.responseEnd - b.responseStart,
                b.fetchStart - c,
                b.redirectEnd - b.redirectStart,
                b.redirectCount || a.navigation && a.navigation.redirectCount
            ], d.push(
                b.domInteractive && b.domLoading
                    ? b.domInteractive - b.domLoading
                    : null
            ), d.push(
                b.domContentLoadedEventStart && b.domContentLoadedEventEnd
                    ? b.domContentLoadedEventEnd - b.domContentLoadedEventStart
                    : null
            ), d.push(
                b.domComplete
                    ? b.domComplete - c
                    : null
            ), d.push(
                b.loadEventStart
                    ? b.loadEventStart - c
                    : null
            ), d.push(
                b.loadEventStart && b.loadEventEnd
                    ? b.loadEventEnd - b.loadEventStart
                    : null
            ), d.push(
                b.domContentLoadedEventStart
                    ? b.domContentLoadedEventStart - c
                    : null
            ), a = 0; a < d.length; a++) 
                b = d[a],
                null !== b && (0 > b || 36E5 < b) && (d[a] = null);
    return d
    }
    function Bb(a) {
        var b = [],
            c = a._lastPerformanceTiming,
            d = hb(),
            e;
        if (c) {
            var f = 0;
            for (e = c.length; f < e; f++) 
                null === d[f]
                    ? b.push(d[f])
                    : b.push(
                        c[f] === d[f]
                            ? ""
                            : d[f]
                    )
            } else 
            b = d;
        a._lastPerformanceTiming = d;
        return b.join(",")
    }
    function Cb(a) {
        return "first-contentful-paint" === a.name
    }
    function Db() {
        var a = g.performance && g.performance.getEntriesByType
            ? f.filter(Cb, g.performance.getEntriesByType("paint"))
            : [];
        if (a.length) 
            return a = a[0],
            Math.round(a.startTime);
        if ("object" == typeof g.chrome && g.chrome.loadTimes) {
            if (
                a = g.chrome.loadTimes(),
                a.requestTime && a.firstPaintTime && g.performance && g.performance.timing
            ) 
                return Math.round(
                    1E3 * a.firstPaintTime - g.performance.timing.navigationStart
                )
        } else if (g.performance && g.performance.timing && (a = g.performance.timing, a.navigationStart && a.msFirstPaint)) 
            return a.msFirstPaint - a.navigationStart;
        return null
    }
    var I = {
        protocol: "https:",
        baseUrl: "mc.yandex.",
        yandexWhiteListTld: "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(
            " "
        )
    };
    I.host = I.baseUrl + "ru";
    I.cross = "L21ldHJpa2EvenpsYy5odG1s";
    var f = {
            mixin: function (a) {
                var b,
                    c;
                for (b = 1; b < arguments.length; b++) 
                    if (arguments[b]) {
                        for (c in arguments[b]) 
                            arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
                        arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
                    }
                return a
            }
        },
        B = function (a) {
            a = a || {};
            f.mixin(this, a);
            this._initComponent()
        };
    B.prototype._initComponent = function () {};
    B.inherit = function (a) {
        a = a || {};
        var b = "function" == typeof this
            ? this
            : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function () {
            b.apply(this, arguments)
        });
        var c = function () {};
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        f.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor = a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = B.inherit;
        return a.constructor
    };
    f.forEachKey = function (a, b, c) {
        for (var d in a) 
            a.hasOwnProperty(d) && b.call(c, d, a[d], a)
    };
    f.isEqual = function (a, b) {
        var c = !0;
        f.forEachKey(a, function (a, e) {
            b.hasOwnProperty(a) && b[a] === e || (c = !1)
        });
        if (!c) 
            return c;
        f.forEachKey(b, function (b, e) {
            a.hasOwnProperty(b) && a[b] === e || (c = !1)
        });
        return c
    };
    f.getNativeFunction = function (a, b) {
        var c;
        b = b || g;
        return (
            c = b.constructor && b.constructor.prototype && b.constructor.prototype[a] || b[a]
        ) && "apply" in c
            ? function () {
                return c.apply(b, arguments)
            }
            : function () {}
    };
    f.setTimeout = function (a, b, c) {
        return f.getNativeFunction("setTimeout")(v(a, c || "setTimeout"), b)
    };
    var k = B.inherit({
        _initComponent: function () {
            k
                .superclass
                ._initComponent
                .apply(this, arguments);
            this._listeners = []
        },
        on: function (a, b, c, d, e) {
            e = k._getOpts(e);
            b = b.split(",");
            var f = b.length,
                u = this._listeners,
                h;
            for (h = 0; h < f; h++) {
                var l = b[h];
                var p = v(function (a) {
                    c.call(d || this, a || g.event)
                }, "on" + l + e.name);
                u[u.length] = [
                    a,
                    l,
                    c,
                    d,
                    e,
                    p
                ];
                a.addEventListener
                    ? a.addEventListener(l, p, k._prepOpts(e))
                    : a.attachEvent && a.attachEvent("on" + l, p)
            }
        },
        un: function (a, b, c, d, e) {
            e = k._getOpts(e);
            var m = this._listeners,
                g = m.length,
                h;
            for (h = 0; h < g; h++) {
                var l = m[h];
                if (l[0] == a && l[1] == b && l[2] == c && l[3] == d && f.isEqual(l[4], e)) {
                    m.splice(h, 1);
                    this._removeListener(a, b, l[5], e);
                    break
                }
            }
        },
        unAll: function () {
            var a = this._listeners,
                b = a.length,
                c;
            for (c = 0; c < b; c++) {
                var d = a[c];
                this._removeListener(d[0], d[1], d[5], d[4])
            }
            a.length = 0
        },
        _removeListener: function (a, b, c, d) {
            a.removeEventListener
                ? a.removeEventListener(b, c, k._prepOpts(d))
                : a.detachEvent && a.detachEvent("on" + b, c)
        }
    });
    k.supportsPassive = function () {
        if (k._supportsPassive !== E) 
            return k._supportsPassive;
        k._supportsPassive = !1;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function () {
                    k._supportsPassive = !0
                }
            });
            g.addEventListener("test", null, a)
        } catch (b) {}
        return k._supportsPassive
    };
    k._getOpts = function (a) {
        return f.mixin({
            capture: !0,
            passive: !0
        }, a || {})
    };
    k._prepOpts = function (a) {
        return k.supportsPassive()
            ? a
            : !!a.capture
    };
    k.on = function () {
        k._instance || (k._instance = new k);
        k
            ._instance
            .on
            .apply(k._instance, arguments)
    };
    k.un = function () {
        k._instance && k
            ._instance
            .un
            .apply(k._instance, arguments)
    };
    var w = {
        UNLOAD_MS: 0,
        isPerfomance: g.performance && g.performance.timing && g.performance.timing.navigationStart && g.performance.now,
        getMs: function () {
            return 0 < this.UNLOAD_MS
                ? this.UNLOAD_MS
                : this.isPerfomance
                    ? Math.round(g.performance.timing.navigationStart + g.performance.now())
                    : +new Date
        }
    };
    k.on(g, "beforeunload,unload", function () {
        0 === w.UNLOAD_MS && (w.UNLOAD_MS = w.getMs())
    });
    f.pad = function (a) {
        return (
            10 > a
                ? "0"
                : ""
        ) + a
    };
    w.getTimestamp = function () {
        var a = new Date;
        a = [
            a.getFullYear(), a.getMonth() + 1,
            a.getDate(),
            a.getHours(),
            a.getMinutes(),
            a.getSeconds()
        ];
        var b = "",
            c;
        for (c = 0; c < a.length; c++) 
            b += f.pad(a[c]);
        return b
    };
    w.getTimezone = function () {
        return -(new Date).getTimezoneOffset()
    };
    w.getMinutes = function () {
        return Math.floor(this.getMs() / 1E3 / 60)
    };
    w.getSeconds = function () {
        return Math.round(this.getMs() / 1E3)
    };
    f.isArray = function (a) {
        return "function" == typeof Array.isArray
            ? Array.isArray(a)
            : "[object Array]" == Object
                .prototype
                .toString
                .call(a)
    };
    f.mergeArrays = function (a) {
        var b,
            c,
            d = arguments.length;
        for (b = 1; b < d; b++) {
            var e = arguments[b];
            if (f.isArray(e) || e && "[object Arguments]" === e.toString()) 
                for (c = 0; c < e.length; c++) 
                    a[a.length] = e[c]
        }
        return a
    };
    f.defer = function (a, b, c, d, e) {
        return f.setTimeout(function () {
            a.apply(c, d || [])
        }, b, e)
    };
    f.throttle = function (a, b, c, d) {
        var e,
            m,
            g;
        return function () {
            m = arguments;
            g = this;
            e || function () {
                e = null;
                m && (a.apply(c || g, m), m = null, e = f.setTimeout(arguments.callee, b, d))
            }()
        }
    };
    var Ca = B.inherit({
            storage: null,
            storageKey: "dataBuffer",
            maxBufferSize: 255,
            flushTimeout: 1E4,
            startBufferTime: 0,
            active: !0,
            meta: null,
            onFlush: function () {},
            onFlushCtx: null,
            bufferExpireTime: 864E5,
            _initComponent: function () {
                var a;
                Ca
                    .superclass
                    ._initComponent
                    .apply(this, arguments);
                this._data = [];
                this._packetNumber = 0;
                this._flushTID = null;
                this._saveToStorageThrottled = f.throttle(
                    this._saveToStorage,
                    300,
                    this,
                    "DataBuffer._saveToStorage"
                );
                this.storage && (
                    (a = this.storage.get(this.storageKey)) && a.data && a.meta && a.time && a.time + this.bufferExpireTime > w.getMs() && this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum),
                    this.clear()
                )
            },
            getFlushSize: function () {
                return this._data.length
            },
            append: function (a, b) {
                f.mergeArrays(this._data, a);
                this._saveToStorageThrottled();
                this.active && (
                    (b || this.getFlushSize() >= this.maxBufferSize) && this._flush(),
                    this._flushTID || (this._flushTID = f.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush"))
                )
            },
            activate: function () {
                this.active || (this.active = !0, this.append([]))
            },
            clear: function () {
                this._data.length = 0;
                this._flushTID = null;
                this.storage && this
                    .storage
                    .remove(this.storageKey)
            },
            _flush: function () {
                if (!this._data.length) 
                    return !1;
                this
                    .onFlush
                    .call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber);
                this._packetNumber++;
                this.clear()
            },
            _saveToStorage: function () {
                this.storage && this._data.length && this
                    .storage
                    .set(this.storageKey, {
                        data: this._data,
                        meta: this.meta,
                        pnum: this._packetNumber,
                        time: w.getMs()
                    })
            }
        }),
        t = {
            storage: {},
            init: function () {
                var a = this;
                v(function () {
                    g.Ya = g.Ya || {};
                    g.Ya._metrika = g.Ya._metrika || {};
                    a.storage = g.Ya._metrika
                }, "", !0)();
                return this
            },
            setSafe: function (a, b) {
                var c = this;
                v(function () {
                    c.storage[a] === E && (c.storage[a] = b)
                }, "", !0)();
                return this
            },
            set: function (a, b) {
                v(function () {
                    g
                        .Ya
                        ._metrika[a] = b
                }, "", !0)();
                return this
            },
            get: function (a, b) {
                return v(function () {
                    var c = g
                        .Ya
                        ._metrika[a];
                    return c === E
                        ? b
                        : c
                }, "", !0)()
            }
        };
    f.async = function (a, b, c) {
        if (g.postMessage) {
            var d = "__ym__promise" + Math.random() + "_" + w.getMs();
            var e = function (c) {
                c.data === d && (
                    c.stopPropagation && c.stopPropagation(),
                    a.call(b),
                    k.un(g, "message", e, null, {
                        passive: !1
                    })
                )
            };
            k.on(g, "message", e, null, {
                passive: !1,
                name: "async" + c
            });
            g.postMessage(d, "*")
        } else 
            f.setTimeout(function () {
                a.call(b)
            }, 0)
    };
    var ja = B.inherit({
            transports: [],
            globalConfig: t,
            postParams: [],
            isDisabled: function () {
                return this
                    .globalConfig
                    .get("oo")
            },
            send: function (a, b, c, d) {
                var e = [a],
                    g = this,
                    h = c || function () {};
                g.isDisabled()
                    ? h.call(d)
                    : function p(a) {
                        if (a < this.transports.length) 
                            try {
                                var c = new this.transports[a](
                                    {postParams: this.postParams, queryStringParams: this.queryStringParams}
                                );
                                b["browser-info"] = c.logInfo(b["browser-info"]);
                                (function rb(m) {
                                    m >= e.length
                                        ? c.blockNext() || p.call(this, a + 1)
                                        : c.request(e[m], b, function (a, b, c) {
                                            a
                                                ? h.call(d, b, c)
                                                : f.async (function () {
                                                    rb.call(g, m + 1)
                                                })
                                        }, this)
                                }).call(this, 0)
                            } catch (qb) {
                                xa(qb, "send by " + (
                                    c && c.id
                                )),
                                p.call(this, a + 1)
                            }
                        }.call(this, 0)
            }
        }),
        ca = {};
    f.keys = function (a) {
        var b,
            c = [];
        for (b in a) 
            a.hasOwnProperty(b) && c.push(b);
        return c
    };
    f.map = function (a, b) {
        var c,
            d = [];
        for (c = 0; c < b.length; c++) 
            d.push(a(b[c], c));
        return d
    };
    ca.stringify = function (a, b) {
        var c = [],
            d = b || {},
            e = {},
            g = f
                .keys(a)
                .length,
            h,
            r;
        if (d.lastOrdering !== E) 
            for (r = 1; r <= b.lastOrdering.length; r++) 
                e[b.lastOrdering[r - 1]] = g + r;
    if (d.firstOrdering !== E) 
            for (r = 0; r < b.firstOrdering.length; r++) 
                e[b.firstOrdering[r]] = r;
    for (h in a) 
            if (a.hasOwnProperty(h)) 
                if (d = a[h], f.isArray(d)) 
                    for (r = 0; r < d.length; r++) 
                        c.push({
                            key: h,
                            value: encodeURIComponent(h) + "\x3d" + encodeURIComponent(String(d[r]))
                        });
    else 
            c.push({
                key: h,
                value: encodeURIComponent(h) + "\x3d" + encodeURIComponent(String(d))
            });
        c.sort(function (a, b) {
            var c = e[a.key],
                d = e[b.key];
            "undefined" === typeof c && (c = g);
            "undefined" === typeof d && (d = g);
            return c - d
        });
        return f
            .map(function (a) {
                return a.value
            }, c)
            .join("\x26")
    };
    f.inArray = function (a, b) {
        var c;
        for (c = 0; c < a.length; c++) 
            if (a[c] == b) 
                return !0;
    return !1
    };
    var S = B.inherit({
            postParams: [],
            index: 0,
            blockNext: function () {
                return !1
            },
            logInfo: function (a) {
                var b;
                if (a) 
                    return a = (b = a.match(/^ti:\d:/))
                        ? a.replace(b[0], "")
                        : a,
                    "ti:" + this.index + ":" + a
            },
            _buildUrl: function (a, b) {
                var c = ca.stringify(b, this.queryStringParams);
                return a + (
                    -1 < a.indexOf("?")
                        ? "\x26"
                        : c
                            ? "?"
                            : ""
                ) + c
            },
            _splitParams: function (a) {
                var b = {},
                    c = {};
                f.forEachKey(a, function (a, e) {
                    f.inArray(this.postParams, a)
                        ? c[a] = e
                        : b[a] = e
                }, this);
                return {get: b, post: c}
            },
            _parseResp: function (a) {
                return a
            }
        }),
        da = S.inherit({
            id: "XHR",
            index: 7,
            method: "POST",
            withCredentials: !0,
            request: function (a, b, c, d) {
                var e = this,
                    f;
                if (/[^a-z0-9.:-]/.test(G.host) && g.opera && "function" === typeof g.opera.version) {
                    var h = g
                        .opera
                        .version();
                    if ("string" === typeof h && "12" === h.split(".")[0]) 
                        return c.call(d, !1)
                }
                if (g.XMLHttpRequest) {
                    var r = new XMLHttpRequest;
                    if ("withCredentials" in r) {
                        b = this._splitParams(b);
                        a = this._buildUrl(a, b.get);
                        try {
                            r.open(this.method, a, !0)
                        } catch (R) {
                            return c.call(d, !1)
                        }
                        r.withCredentials = this.withCredentials;
                        this._setHeaders(r);
                        r.send(this._preparePostParams(b));
                        r.onreadystatechange = function () {
                            if (4 === r.readyState) {
                                try {
                                    f = e._parseResp(r.responseText)
                                } catch (R) {
                                    return c.call(d, !1)
                                }
                                c.apply(d, [200 === r.status].concat(f))
                            }
                        };
                        return
                    }
                }
                c.call(d, !1)
            },
            setMethod: function (a) {
                this.method = a
            },
            _preparePostParams: function (a) {
                return ca.stringify(a.post)
            },
            _setHeaders: function (a) {
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            }
        }),
        n = {};
    n.isAndroidWebView = v(function () {
        var a = navigator.userAgent || "";
        return a.match(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]/) || a.match(
            /Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*/
        ) || a.match(/; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)
    }, "isAndroidWebView");
    var Eb = S.inherit({
        id: "beacon",
        index: 1,
        request: function (a, b, c, d) {
            "function" === typeof navigator.sendBeacon && !n.isAndroidWebView() && navigator.onLine
                ? (
                    b = this._splitParams(b),
                    b.get["force-urlencoded"] = 1,
                    c.call(d, navigator.sendBeacon(this._buildUrl(a, b.get), ca.stringify(b.post)))
                )
                : c.call(d, !1)
        }
    });
    f.random = function (a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    var ea = S.inherit({
            id: "form",
            index: 2,
            enctype: "application/x-www-form-urlencoded",
            htmlfileOnly: !1,
            _initComponent: function () {
                ea
                    .superclass
                    ._initComponent
                    .apply(this, arguments);
                "_htmlfile" in
                ea.prototype || (ea.prototype._htmlfile = this._createHtmlfile());
                this._doc = this._htmlfile || (
                    this.htmlfileOnly
                        ? null
                        : h
                )
            },
            request: function (a, b, c, d) {
                var e = this._doc;
                if (!e) 
                    return c.call(d, !1);
                b = this._splitParams(b);
                var g = "ifr" + f.random();
                var h = e.createElement("div");
                h.style.position = "absolute";
                h.style.left = "-99999px";
                h.style.top = "-99999px";
                var r = [
                    '\x3ciframe name\x3d"',
                    g,
                    '"\x3e\x3c/iframe\x3e',
                    '\x3cform action\x3d"',
                    this._buildUrl(a, b.get),
                    '" method\x3d"post" target\x3d"',
                    g,
                    '" enctype\x3d"',
                    this.enctype,
                    '"\x3e'
                ];
                f.forEachKey(b.post, function (a) {
                    f.mergeArrays(
                        r,
                        ['\x3cinput type\x3d"hidden" autocomplete\x3d"off" autocorrect\x3d"off"', ' autocapitalize\x3d"off" spellcheck\x3d"false" name\x3d"', a, '"/\x3e']
                    )
                });
                f.mergeArrays(r, ["\x3c/form\x3e"]);
                h.innerHTML = r.join("");
                e
                    .body
                    .appendChild(h);
                var k = h.getElementsByTagName("form")[0];
                f.forEachKey(b.post, function (a, b) {
                    k[a].value = b
                });
                k.submit();
                f.setTimeout(function () {
                    e
                        .body
                        .removeChild(h)
                }, 1E4, "TransportForm.request.2");
                return c.call(d, !0, "tf.request")
            },
            _createHtmlfile: function () {
                try {
                    if (g.ActiveXObject) {
                        var a = new ActiveXObject("htmlfile");
                        a.open();
                        a.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
                        a.close();
                        return a
                    }
                } catch (b) {}
                return null
            }
        }),
        Fb = ea.inherit({
            id: "htmlfile",
            index: 3,
            htmlfileOnly: !0
        }),
        V = S.inherit({
            id: "img",
            index: 4,
            request: function (a, b, c, d) {
                a = this._buildUrl(a, b);
                var e = !1;
                b = h.createElement("img");
                c = c || function () {};
                b.onload = v(function () {
                    e || (c.call(d, !0), e = !0)
                }, "TransportImage.request");
                b.onerror = v(function () {
                    e || (c.call(d, !1), e = !0)
                }, "TransportImage.request");
                b.src = a;
                this.timeout && f.setTimeout(function () {
                    e || (c.call(d, !1), e = !0)
                }, this.timeout, "ti.request")
            }
        }),
        Y = {
            stringify: function (a) {
                try {
                    return JSON.stringify(a)
                } catch (b) {
                    return "null"
                }
            }
        };
    f.toJSON = function (a) {
        var b;
        if (a === E) 
            return "";
        if (null === a) 
            return "null";
        switch (a.constructor) {
            case Boolean:
                return a.toString();
            case Number:
                return isFinite(a)
                    ? a.toString()
                    : "null";
            case String:
                return '"' + a
                    .replace(/\\/g, "\\\\")
                    .replace(/"/g, '\\"')
                    .replace(/\n/g, "\\n")
                    .replace(/\r/g, "\\r") + '"';
            case Array:
                var c = [];
                var d = 0;
                for (b = a.length; d < b; d++) 
                    c[c.length] = f.toJSON(a[d]);
                return "[" + c.join(",") + "]";
            case Object:
                c = [];
                for (d in a) 
                    a.hasOwnProperty(d) && a[d] !== E && (
                        c[c.length] = f.toJSON(d) + ":" + f.toJSON(a[d])
                    );
                return "{" + c.join(",") + "}";
            default:
                return Y.stringify(a)
        }
    };
    var T = B.inherit({
        counterId: "",
        _initComponent: function () {
            T
                .superclass
                ._initComponent
                .apply(this, arguments);
            this._ls = null;
            try {
                this._ls = g.localStorage
            } catch (a) {}
        },
        set: function (a, b) {
            if (this.isEnabled()) 
                try {
                    !b || b && f.isArray(b) && !b.length
                        ? this.remove(a)
                        : this
                            ._ls
                            .setItem(this._getLsKey(a), f.toJSON(b))
                } catch (c) {}
            },
        get: function (a) {
            if (this.isEnabled()) 
                try {
                    return JSON.parse(this._ls.getItem(this._getLsKey(a)))
                } catch (b) {}
            return null
        },
        remove: function (a) {
            if (this.isEnabled()) 
                try {
                    this
                        ._ls
                        .removeItem(this._getLsKey(a))
                } catch (b) {}
            },
        isEnabled: function () {
            return this._ls && g.JSON && "object" == typeof this._ls && "object" == typeof g.JSON
        },
        getStorageId: function () {
            var a = this.get("lsid");
            a || (a = Math.round(Math.random() * w.getMs()), this.set("lsid", a));
            return a
        },
        clearStorageId: function () {
            this.remove("lsid")
        },
        _getLsKey: function (a) {
            return "_ym" + this.counterId + "_" + a
        }
    });
    f.getTld = function () {
        if (!this._tld) {
            var a = G
                .hostname
                .split(".");
            this._tld = a[a.length - 1]
        }
        return this._tld
    };
    var Q = {
            abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            tail: "+/\x3d",
            tailSafe: "*-_"
        },
        l = {
            removeNode: function (a) {
                var b = a && a.parentNode;
                b && b.removeChild(a)
            }
        };
    n.isSafariWebView = v(function () {
        var a = navigator.userAgent || "";
        return navigator.vendor && -1 < navigator
            .vendor
            .indexOf("Apple") && (
                !a.match(/Safari/) && a.match(/Mobile/) || a.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== a.indexOf("FB_IAB") || -1 !== a.indexOf("FBAV") || -1 !== a.indexOf("OKApp") || -1 !== a.indexOf("GSA/")
            )
    }, "isSafariWebView");
    n.isSafari = function () {
        try {
            return navigator.vendor && -1 < navigator
                .vendor
                .indexOf("Apple") && navigator.userAgent && !navigator
                .userAgent
                .match("CriOS")
        } catch (a) {}
        return !1
    };
    n.getMacOSVersion = v(function () {
        var a = navigator
            .userAgent
            .match(/Mac OS X ([0-9]+)_([0-9]+)_([0-9]+)/);
        return a
            ? [
                +a[1], + a[2], + a[2]
            ]
            : [0, 0, 0]
    }, "", !0);
    n.getPlatform = v(function () {
        return "" + navigator.platform
    }, "", !0);
    n.isIOS = v(function () {
        var a = n.getPlatform() || "";
        return "iPhone" === a || "iPad" === a
    }, "", !0);
    var Va = {
            _storage: new T,
            key: "zzlc",
            getZZ: function () {
                return this
                    ._storage
                    .get(this.key)
                        ? this
                            ._storage
                            .get(this.key)
                        : Va.zz
            },
            initZZ: function () {
                var a = this;
                var b = n.getMacOSVersion();
                (n.isIOS() || 10 <= b[0] && 13 <= b[2]) && n.isSafari() && !this.getZZ() && !n.isSafariWebView() && (
                    b = f.getNativeFunction("createElement", h)(
                        "iframe"
                    ),
                    b.style.display = "none",
                    b.style.width = "1px",
                    b.style.height = "1px",
                    b.style.visibility = "hidden",
                    b.src = I.protocol + "//" + I.host + Q.decode(
                        I.cross
                    ),
                    g.document.documentElement.appendChild(b),
                    k.on(
                        g,
                        "message",
                        this.onMessage,
                        this,
                        {
                            passive: !1
                        }
                    ),
                    this.frame = b,
                    this.timeout = f.setTimeout(function () {
                        k.un(g, "message", a.onMessage, a, {
                            passive: !1
                        });
                        l.removeNode(a.frame);
                        a.zz = "na"
                    }, 3E3, "cd.initZZ")
                )
            },
            onMessage: function (a) {
                a.data && a.data.substr && "__ym__zz" === a
                    .data
                    .substr(0, 8) && (
                        this.zz = a.data.substr(8),
                        l.removeNode(this.frame),
                        this._storage.set(this.key, this.zz),
                        k.un(g, "message", this.onMessage, this, {
                        passive: !1
                    }),
                        clearTimeout(this.timeout)
                    )
            }
        },
        J = B.inherit({
            counterId: "",
            onlyCurrentDomain: !1,
            skipPrefix: !1,
            _initComponent: function () {
                var a;
                J
                    .superclass
                    ._initComponent
                    .apply(this, arguments);
                this._domain = null;
                if (!this.onlyCurrentDomain) {
                    var b = G
                        .host
                        .split(".");
                    for (a = 2;;) 
                        if (a <= b.length) {
                            if (this._domain = "." + b.slice(-a).join("."), a++, this.isEnabled()) 
                                break
                        }
                    else {
                        this._domain = null;
                        break
                    }
                }
            },
            create: function (a, b, c) {
                a = [this._prepareName(a) + "\x3d" + encodeURIComponent(b)];
                c && (
                    b = new Date,
                    b.setTime(b.getTime() + 6E4 * c),
                    a.push("expires\x3d" + b.toGMTString())
                );
                this._domain && a.push("domain\x3d" + this._domain);
                a.push("path\x3d/");
                try {
                    h.cookie = a.join(";")
                } catch (d) {}
            },
            read: function (a) {
                try {
                    var b = h.cookie
                } catch (c) {}
                return b && b.match(new RegExp(
                    "(?:^|;\\s*)" + this._prepareName(a) + "\x3d([^;]*)"
                ))
                    ? decodeURIComponent(RegExp.$1)
                    : null
            },
            erase: function (a) {
                this.create(a, "", -1)
            },
            isEnabled: function () {
                this.create("metrika_enabled", "1", 60);
                var a = !!this.read("metrika_enabled");
                this.erase("metrika_enabled");
                return a
            },
            _prepareName: function (a) {
                return (
                    this.skipPrefix
                        ? ""
                        : "_ym_"
                ) + a + (
                    this.counterId
                        ? "_" + this.counterId
                        : ""
                )
            }
        });
    J.get = function (a) {
        return (new J({
            onlyCurrentDomain: !0
        })).read(a)
    };
    J.set = function (a, b, c) {
        return (new J({
            onlyCurrentDomain: !0
        })).create(a, b, c)
    };
    J.isEnabled = function () {
        return (new J({
            onlyCurrentDomain: !0
        })).isEnabled()
    };
    var P = ja.inherit({
        protocol: "",
        host: I.host,
        queryStringParams: {
            firstOrdering: [
                "wmode", "callback", "cnt-class"
            ],
            lastOrdering: ["browser-info"]
        },
        resource: "",
        counterId: "",
        counterType: 0,
        retry: !1,
        transports: [
            Eb, da, V, Fb
        ],
        _initComponent: function () {
            P
                .superclass
                ._initComponent
                .apply(this, arguments);
            this.retry && (this._storage = new T)
        },
        send: function (a, b, c, d) {
            var e = this._registerRequest(a, b);
            this._sendSavedRequest(e, a, b, c, d)
        },
        _sendSavedRequest: function (a, b, c, d, e) {
            var g = this
                    .globalConfig
                    .get("firstReqStatus"),
                h = b.forceNoRedirect;
            if ("process" == g) 
                this
                    .globalConfig
                    .set(
                        "firstReqCallbacks",
                        f.mergeArrays(this.globalConfig.get("firstReqCallbacks") || [], [
                            [this, arguments]
                        ])
                    );
            else {
                g || this
                    .globalConfig
                    .set("firstReqStatus", "process");
                this.counterType && (b["cnt-class"] = this.counterType);
                c.st = w.getSeconds();
                c.u = P._userID;
                c.zz = Va.getZZ();
                c.zz || delete c.zz;
                g = [
                    this.protocol,
                    "//",
                    this.host,
                    "/",
                    this.resource,
                    "/",
                    this.counterId,
                    h
                        ? "/1"
                        : ""
                ].join("");
                delete b.forceNoRedirect;
                var r = [];
                c && (f.forEachKey(c, function (a, b) {
                    "t" != a && f.mergeArrays(r, [a, b])
                }), c.t && f.mergeArrays(r, ["t", c.t]));
                r.length && (b["browser-info"] = r.join(":"));
                return P
                    .superclass
                    .send
                    .call(this, g, b, function () {
                        var b;
                        this
                            .globalConfig
                            .set("firstReqStatus", "complete");
                        this._unregisterRequest(a);
                        var c = this
                            .globalConfig
                            .get("firstReqCallbacks");
                        this
                            .globalConfig
                            .set("firstReqCallbacks", null);
                        if (c) 
                            for (b = 0; b < c.length; b++) 
                                c[b][0]
                                    ._sendSavedRequest
                                    .apply(c[b][0], c[b][1]);
                        d && d.apply(e, arguments)
                    }, this)
            }
        },
        _isRetryEnabled: function () {
            return this.retry && this._storage && this
                ._storage
                .isEnabled()
        },
        _registerRequest: function (a, b) {
            var c;
            if (this._isRetryEnabled()) {
                b.rqnl = b.rqnl || 0;
                b.rqnl++;
                var d = this
                    ._storage
                    .get("retryReqs") || {};
                for (c = 1; d[c];) 
                    c++;
                d[c] = {
                    protocol: this.protocol,
                    host: this.host,
                    resource: this.resource,
                    counterId: this.counterId,
                    counterType: this.counterType,
                    postParams: this.postParams,
                    params: a,
                    browserInfo: b,
                    ghid: this
                        .globalConfig
                        .get("_globalMetrikaHitId"),
                    time: w.getMs()
                };
                this
                    ._storage
                    .set("retryReqs", d);
                return c
            }
        },
        _unregisterRequest: function (a) {
            if (a && this._isRetryEnabled()) {
                var b = this
                    ._storage
                    .get("retryReqs") || {};
                b[a] && (delete b[a], this._storage.set("retryReqs", b))
            }
        },
        _getVersion: v(function () {
            return Z
        }, "", !0)
    });
    P._storage = new T;
    P.initCookie = function () {
        var a = new J,
            b = a.read("uid");
        b || (b = w.getSeconds(), b = b + "" + f.random(), a.create("uid", b, 1036800));
        P._userID = b
    };
    P.retransmit = function (a) {
        var b = P._storage,
            c = b.get("retryReqs") || {},
            d;
        b.remove("retryReqs");
        f.forEachKey(c, function (b, c) {
            var e = w.getMs();
            a.get("firstReqStatus") || a.set("firstReqStatus", "complete");
            c.ghid && c.ghid != a.get("_globalMetrikaHitId") && c.time && c.time + 864E5 > e && 500 < e - c.time && 2 >= c.browserInfo.rqnl && (
                d = new P({
                    protocol: c.protocol,
                    host: c.host,
                    resource: c.resource,
                    counterId: c.counterId,
                    counterType: c.counterType,
                    postParams: c.postParams || [],
                    retry: !0
                }),
                d.send(c.params, c.browserInfo)
            )
        })
    };
    f.fletcher = function (a) {
        for (var b = a.length, c = 0, d = 255, e = 255, f, g, h; b;) {
            f = 21 < b
                ? 21
                : b;
            b -= f;
            do 
                g = "string" == typeof a
                    ? a.charCodeAt(c)
                    : a[c],
                c++,
                255 < g && (h = g >> 8, g &= 255, g ^= h),
                d += g,
                e += d;
            while (--f);
            d = (d & 255) + (d >> 8);
            e = (e & 255) + (e >> 8)
        }
        a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
        return 65535 == a
            ? 0
            : a
    };
    Q.encode = function (a, b) {
        var c = (Q.abc + (
                b
                    ? Q.tailSafe
                    : Q.tail
            )).split(""),
            d = a.length,
            e = [],
            g = d - d % 3,
            h;
        for (h = 0; h < g; h += 3) {
            var k = (a[h] << 16) + (a[h + 1] << 8) + a[h + 2];
            f.mergeArrays(e, [
                c[k >> 18 & 63],
                c[k >> 12 & 63],
                c[k >> 6 & 63],
                c[k & 63]
            ])
        }
        switch (d - g) {
            case 1:
                k = a[g] << 4;
                f.mergeArrays(e, [
                    c[k >> 6 & 63],
                    c[k & 63],
                    c[64],
                    c[64]
                ]);
                break;
            case 2:
                k = (a[g] << 10) + (a[g + 1] << 2),
                f.mergeArrays(e, [
                    c[k >> 12 & 63],
                    c[k >> 6 & 63],
                    c[k & 63],
                    c[64]
                ])
        }
        return e.join("")
    };
    f.arrayEvery = function (a, b, c) {
        var d;
        for (d = 0; d < a.length; d++) 
            if (!b.call(c, a[d], d, a)) 
                return !1;
    return !0
    };
    f.is4Bytes = function (a) {
        return !f.arrayEvery(
            (encodeURIComponent(a).match(/(%[A-F,\d]{2})+/g) || []).join("").split("%"),
            function (a) {
                return 240 > parseInt(a, 16)
            }
        )
    };
    f.trim = function (a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    };
    f.isFunction = function (a) {
        return "function" === typeof a
    };
    f.isNumber = function (a) {
        return isFinite(a) && !isNaN(a) && "[object Number]" == Object
            .prototype
            .toString
            .call(a)
    };
    f.isString = function (a) {
        return "[object String]" == Object
            .prototype
            .toString
            .call(a)
    };
    f.arrayIndexOf = function (a, b) {
        var c;
        for (c = 0; c < a.length; c++) 
            if (a[c] === b) 
                return c;
    return -1
    };
    f.warning = function () {
        g.console && "function" === typeof g.console.warn && console
            .warn
            .apply(console, arguments)
    };
    f.isObject = function (a) {
        try {
            return a && null !== a && "[object Object]" == Object
                .prototype
                .toString
                .call(a)
        } catch (b) {
            return !1
        }
    };
    f._playerRegexp = /^.+\.mtproxy\.yandex\.net$/;
    f.isMetrikaPlayer = function () {
        return "MetrikaPlayer" == g.name || this
            ._playerRegexp
            .test(g.location.hostname)
    };
    l.getDocumentCharset = function () {
        return ("" + (
            h.characterSet || h.charset || ""
        )).toLowerCase()
    };
    l.getBody = function () {
        for (var a = h.getElementsByTagName("body"); 0 < a.length;) 
            return a[0]
    };
    l.getRootElement = function () {
        var a = h.documentElement,
            b = l.getBody();
        return "CSS1Compat" == h.compatMode
            ? a
            : b || a
    };
    l.getViewportSize = function () {
        var a = l.getRootElement();
        return [
            a.clientWidth || g.innerWidth,
            a.clientHeight || g.innerHeight
        ]
    };
    l.getDocumentTitle = function () {
        var a = h.title;
        "string" != typeof a && (
            a = (a = h.getElementsByTagName("title")) && a.length
                ? a[0].innerHTML
                : ""
        );
        return a
    };
    n._silverlightVersion = "";
    n.getSilverlightVersion = function () {
        if (!n._silverlightVersion) 
            if (g.ActiveXObject) 
                try {
                    var a = new ActiveXObject("AgControl.AgControl");
                    var b = function (a, b, d, f) {
                        for (; c(a, b);) 
                            b[d] += f;
                        b[d] -= f
                    };
                    var c = function (a, b) {
                        return a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3])
                    };
                    var d = [1, 0, 0, 0];
                    b(a, d, 0, 1);
                    b(a, d, 1, 1);
                    b(a, d, 2, 1E4);
                    b(a, d, 2, 1E3);
                    b(a, d, 2, 100);
                    b(a, d, 2, 10);
                    b(a, d, 2, 1);
                    b(a, d, 3, 1);
                    n._silverlightVersion = d.join(".")
                } catch (e) {}
            else if (b = g.navigator, b = b.plugins && b.plugins["Silverlight Plug-In"]) 
                n._silverlightVersion = b.description;
    return n._silverlightVersion || ""
    };
    n._flashVersion = 0;
    n.getFlashVersion = function () {
        if (!n._flashVersion) {
            var a = g.navigator;
            if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
                var b = a.plugins["Shockwave Flash"];
                var c = b.version;
                if ((b = b.description) || c) 
                    if (
                        a = a.mimeTypes,
                        "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin
                    ) 
                        c
                            ? n._flashVersion = c
                            : b && (
                                n._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".")
                            )
                    }
            else if ("undefined" != typeof g.ActiveXObject) 
                try {
                    if (
                        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                        b = c.GetVariable("$version")
                    ) 
                        n._flashVersion = b
                            .split(" ")[1]
                            .replace(/,/g, ".")
                            .replace(/[^.\d]/g, "")
                    } catch (d) {}
            }
        return n._flashVersion
    };
    n.getLanguage = function () {
        var a = (
            g.navigator
                ? navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage
                : ""
        ).toLowerCase();
        return f.isString(a)
            ? a
            : ""
    };
    n.getJavaEnabled = function () {
        try {
            return navigator.javaEnabled()
        } catch (a) {
            return !1
        }
    };
    f.fnv32a = function (a) {
        var b = 2166136261,
            c;
        var d = 0;
        for (c = a.length; d < c; ++d) 
            b ^= a.charCodeAt(d),
            b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    };
    n.getFingerPrint = function () {
        var a = [],
            b;
        if (navigator.plugins && navigator.plugins.length) 
            for (b = 0; b < navigator.plugins.length; b++) {
                var c = navigator.plugins[b];
                f.mergeArrays(a, [c.name, c.version, c.description, c.filename])
            }
        if (navigator.mimeTypes && navigator.mimeTypes.length) 
            for (b = 0; b < navigator.mimeTypes.length; b++) 
                c = navigator.mimeTypes[b],
                f.mergeArrays(a, [c.type, c.description, c.suffixes]);
    return f.fnv32a(a.join(";")) + "01"
    };
    n.getNotificationPermission = function () {
        try {
            var a = Notification.permission
        } catch (b) {}
        switch (a) {
            case "denied":
                return 1;
            case "granted":
                return 2
        }
    };
    n.isIframe = function () {
        try {
            return g.top != g.self
        } catch (a) {
            return !1
        }
    };
    n._nMap = {
        other: "0",
        none: "1",
        unknown: "2",
        wifi: "3",
        ethernet: "4",
        bluetooth: "5",
        cellular: "6",
        wimax: "7",
        mixed: "8"
    };
    n.netType = function () {
        var a = (navigator.connection || {
            type: ""
        }).type;
        return n._nMap[a] || a
    };
    n.isDesktop = function (a) {
        var b = a.get("bt", {});
        a.get("bt") === E && (
            b.p = navigator.getBattery
                ? navigator.getBattery()
                : null,
            a.set("bt", b),
            b.p && b.p.then && b.p.then(function (a) {
                b.v = a.charging && 0 === a.chargingTime
            })
        );
        return b.v
    };
    k.ready = function (a) {
        var b = h.readyState;
        if ("interactive" === b || "complete" === b) 
            f.setTimeout(a, 0, "evt::ready");
        else {
            var c = function () {
                k.un(h, "DOMContentLoaded", c);
                k.un(g, "load", c);
                a()
            };
            k.on(h, "DOMContentLoaded", c);
            k.on(g, "load", c)
        }
    };
    var ib = {
            url: I.protocol + "//" + I.host + "/metrika/",
            _value: null,
            init: function (a) {
                var b = this
                    ._getLs()
                    .read("isad");
                this.globalConfig = a || t;
                b
                    ? this._set(b)
                    : this._getReqStatus() || this._send()
            },
            getVal: function () {
                return this._value
            },
            _set: function (a) {
                this._value = "1" == a || "2" == a
                    ? a
                    : null
            },
            _send: function () {
                var a = this;
                this._setReqStatus("process");
                k.ready(function () {
                    var b = h.createElement("img");
                    b.onload = function () {
                        a._saveReq(!1);
                        l.removeNode(this)
                    };
                    b.onerror = function () {
                        a._saveReq(!0);
                        l.removeNode(this)
                    };
                    b.src = a.url + String.fromCharCode(
                        97,
                        100,
                        118,
                        101,
                        114,
                        116,
                        46,
                        103,
                        105,
                        102
                    );
                    n.isSafari() && (
                        b.style.position = "absolute",
                        b.style.visibility = "hidden",
                        b.style.width = "0px",
                        b.style.height = "0px",
                        l.getRootElement().appendChild(b)
                    )
                })
            },
            _saveReq: function (a) {
                this._value = a = a
                    ? "1"
                    : "2";
                this._setReqStatus("complete");
                this
                    ._getLs()
                    .create("isad", a, 1200)
            },
            _setReqStatus: function (a) {
                try {
                    this
                        .globalConfig
                        .set("adStatus", a)
                } catch (b) {}
            },
            _getReqStatus: function () {
                try {
                    return this
                        .globalConfig
                        .get("adStatus")
                } catch (a) {
                    return "complete"
                }
            },
            _getLs: function () {
                this._ls || (this._ls = new J);
                return this._ls
            }
        },
        na = {
            encode: function (a) {
                var b = [],
                    c;
                var d = 0;
                for (c = a.length; d < c; d++) {
                    var e = a.charCodeAt(d);
                    128 > e
                        ? b.push(e)
                        : (
                            127 < e && 2048 > e
                                ? b.push(e >> 6 | 192)
                                : (b.push(e >> 12 | 224), b.push(e >> 6 & 63 | 128)),
                            b.push(e & 63 | 128)
                        )
                }
                return b
            },
            decode: function (a) {
                for (var b = "", c = 0, d, e, f; c < a.length;) 
                    d = a.charCodeAt(c),
                    128 > d
                        ? (b += String.fromCharCode(d), c++)
                        : 191 < d && 224 > d
                            ? (
                                e = a.charCodeAt(c + 1),
                                b += String.fromCharCode((d & 31) << 6 | e & 63),
                                c += 2
                            )
                            : (
                                e = a.charCodeAt(c + 1),
                                f = a.charCodeAt(c + 2),
                                b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63),
                                c += 3
                            );
                return b
            }
        };
    Q.decode = function (a, b) {
        for (var c = Q.abc + (
            b
                ? Q.tailSafe
                : Q.tail
        ), d = 0, e = "", f, g, h, k, l; a.length % 4;) 
            a += "\x3d";
        do {
            f = c.indexOf(a.charAt(d++));
            g = c.indexOf(a.charAt(d++));
            k = c.indexOf(a.charAt(d++));
            l = c.indexOf(a.charAt(d++));
            if (0 > f || 0 > g || 0 > k || 0 > l) 
                return null;
            h = f << 18 | g << 12 | k << 6 | l;
            f = h >> 16 & 255;
            g = h >> 8 & 255;
            h &= 255;
            e = 64 == k
                ? e + String.fromCharCode(f)
                : 64 == l
                    ? e + String.fromCharCode(f, g)
                    : e + String.fromCharCode(f, g, h)
        } while (d < a.length);
        return e
    };
    f.reduce = function (a, b, c) {
        var d = 0;
        b == E && (b = c[0], d++);
        for (; d < c.length;) 
            b = a(b, c[d]),
            d++;
        return b
    };
    f.filter = function (a, b) {
        var c,
            d = [];
        for (c = 0; c < b.length; c++) 
            a(b[c]) && d.push(b[c]);
        return d
    };
    Y.parse = function (a) {
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    };
    var ka = P.inherit({
        hitId: 0,
        trackHash: !1,
        trimParams: !1,
        webvisor: !1,
        counter: null,
        counterNum: 0,
        resource: "watch",
        retry: !0,
        paramsQueue: {
            paramsQueue: [],
            length: function () {
                return this.paramsQueue.length
            },
            push: function (a) {
                this
                    .paramsQueue
                    .push(a)
            },
            _reduce: function (a) {
                return function (b, c) {
                    f.arrayEvery(f.keys(c), function (d) {
                        if (b.hasOwnProperty(d)) 
                            return 1;
                        
- 1 == f.arrayIndexOf(a, d) && (b[d] = c[d], delete c[d]);
                        return 1
                    });
                    return b
                }
            },
            _filter: function (a) {
                return f
                    .keys(a)
                    .length
            },
            mixin: function (a) {
                var b = {};
                this.paramsQueue.length && (
                    b = f.reduce(this._reduce(f.keys(a)), {}, this.paramsQueue),
                    this.paramsQueue = f.filter(this._filter, this.paramsQueue)
                );
                return f.mixin({}, a, b)
            }
        },
        postParams: ["site-info"],
        countersNoTitle: "22836271 1143050 29626870 9928105 26128362 29850769".split(
            " "
        ),
        fake: !1,
        sendTitle: !0,
        _initComponent: function () {
            ka
                .superclass
                ._initComponent
                .apply(this, arguments);
            this._trackHash = this.trackHash;
            "0" === "" + this.counterType && (
                this.sendTitle = -1 === f.arrayIndexOf(this.countersNoTitle, "" + this.counterId)
            )
        },
        setTrackHash: function (a) {
            this._trackHash = a
        },
        sendHit: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    saveRef: !0,
                    pv: !0
                },
                callback: a.callback,
                ctx: a.ctx
            }, "hit")
        },
        sendExperiments: function (a) {
            this._hitExt({
                url: D().href,
                title: "",
                referrer: "",
                modes: {
                    ex: !0,
                    ar: !0
                },
                experiments: a.experiments,
                callback: a.callback,
                ctx: a.ctx
            }, "exp")
        },
        sendPrerenderHit: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                modes: {
                    ar: !0,
                    pq: !0
                }
            }, "hit")
        },
        sendAjaxHit: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                modes: a.modes
            }, "hit")
        },
        sendParams: function (a, b, c) {
            this._hitExt({
                url: D().href,
                title: "",
                referrer: "",
                forceNoRedirect: !0,
                vParams: a,
                modes: {
                    ar: !0,
                    pa: !0,
                    onlyData: !0
                },
                callback: b,
                ctx: c
            }, "pa")
        },
        sendGoal: function (a, b) {
            if (/[/&=?#]/.test(a)) 
                f.warning("Incorrect goal");
            else if (a) {
                var c = D();
                this._hitExt({
                    url: "goal://" + c.hostname + "/" + encodeURIComponent(a),
                    title: l.getDocumentTitle(),
                    referrer: c.href,
                    vParams: b.vParams,
                    modes: {
                        ar: !0
                    },
                    callback: b.callback,
                    ctx: b.ctx
                }, "go")
            } else 
                f.warning("Empty goal")
        },
        sendClickLink: function (a) {
            this._hitExt({url: a.url, title: a.title, referrer: D().href, modes: a.modes})
        },
        sendExtLink: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: D().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    ut: Wa
                },
                callback: a.callback,
                ctx: a.ctx
            }, "cl")
        },
        sendFileUpload: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: D().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    dl: !0
                },
                callback: a.callback,
                ctx: a.ctx
            }, "fu")
        },
        sendNotBounce: function (a, b) {
            this._hitExt({
                url: D().href,
                title: "",
                referrer: "",
                modes: {
                    cl: a,
                    ar: !0,
                    nb: !0,
                    onlyData: !0
                },
                callback: b.callback,
                ctx: b.ctx
            }, "nb")
        },
        sendDevice: function (a) {
            this._hitExt({
                browserInfo: {
                    di: a.data,
                    dip: a.port
                },
                callback: a.callback,
                ctx: a.ctx
            }, "de")
        },
        _hitExt: function (a, b) {
            function c(a, b) {
                b && (n[a] = b)
            }
            var d,
                e,
                g,
                h = {};
            if (!f.isMetrikaPlayer()) {
                var k = a.modes || {};
                var l = a.browserInfo || {};
                var p = "undefined" !== typeof a.referrer
                    ? a.referrer
                    : oa.lastReferrer;
                var q = a.url || "";
                var n = {};
                a.nohit && c("nohit", 1);
                k.ar && !k.onlyData && (
                    p = null === p || "" === p
                        ? ""
                        : this._prepareHitUrl(p),
                    q = this._prepareHitUrl(a.url)
                );
                c("forceNoRedirect", a.forceNoRedirect);
                c("page-ref", f.trim(p, wa));
                c("page-url", f.trim(q, wa));
                f.is4Bytes(a.title) && c("charset", "utf-8");
                Ma()
                    ? c("ut", Wa)
                    : "undefined" != typeof k.ut && c("ut", f.trim(k.ut, Gb));
                c("exp", a.experiments);
                (e = a.vParams) && e.__ym && (
                    f.isNumber(e.__ym.turbo_page) && (h.tp = e.__ym.turbo_page),
                    f.isNumber(e.__ym.turbo_page_id) && (h.tpid = e.__ym.turbo_page_id)
                );
                if (e || this.paramsQueue.length()) {
                    e = this
                        .paramsQueue
                        .mixin(e);
                    if (f.inArray([
                        "go", "hit", "pa"
                    ], b) && e.order_id !== E && e.order_price !== E) {
                        f.warning(
                            "This method is deprecated, please use new ecommerce methods instead: https://c" +
                            "lck.ru/CLjtn"
                        );
                        if ("pa" == b) 
                            return;
                        e = {}
                    }
                    q = f.toJSON(e);
                    this.trimParams && q.length > Hb
                        ? g = !0
                        : c("site-info", q)
                }
                k.saveRef && (oa.lastReferrer = p);
                this.fake || (d = this._getTechInfo(
                    a.title,
                    k,
                    this.counterId,
                    a.ts,
                    a.tz,
                    this._trackHash,
                    this.hitId,
                    this.webvisor,
                    this.counter,
                    a.nohit
                ));
                f.mixin(l, d, h);
                this.send(n, l, function () {
                    g && this
                        .counter
                        .params(e);
                    a.userParams && this
                        .counter
                        .userParams(a.userParams);
                    f.isFunction(a.callback) && a
                        .callback
                        .apply(a.ctx, arguments)
                }, this)
            }
        },
        _prepareHitUrl: function (a) {
            var b = D(),
                c = b.host;
            b = b.href;
            if (!f.isString(a)) 
                return b;
            if (-1 != a.search(/^\w+:\/\//)) 
                return a;
            var d = a.charAt(0);
            if ("?" == d) 
                return d = b.search(/\?/),
                -1 == d
                    ? b + a
                    : b.substr(0, d) + a;
            if ("#" == d) 
                return d = b.search(/#/),
                -1 == d
                    ? b + a
                    : b.substr(0, d) + a;
            if ("/" == d) {
                if (d = b.search(c), -1 != d) 
                    return b.substr(0, d + c.length) + a
            } else 
                return c = b.split("/"),
                c[c.length - 1] = a,
                c.join("/");
            return a
        },
        _getTechInfo: function (a, b, c, d, e, h, k, r, R, p) {
            function m(a, b, c) {
                var d = "" + b;
                a && b && (c || -1 === d.indexOf(":")) && (t[a] = d)
            }
            function u(a) {
                b[a] && m(a, "1")
            }
            var t = {};
            b = b || {};
            d = d || w.getTimestamp();
            e = e || w.getTimezone();
            m(
                "j",
                n.getJavaEnabled()
                    ? "1"
                    : ""
            );
            var v = n.isDesktop(this.globalConfig);
            v !== E && m(
                "dp",
                v
                    ? "1"
                    : "0"
            );
            m("nt", n.netType());
            U && m("s", U.width + "x" + U.height + "x" + (
                U.colorDepth || U.pixelDepth
            ));
            g.devicePixelRatio && m("sk", g.devicePixelRatio);
            n.isIframe() && m("ifr", "1");
            g.ia_document && g.ia_document.shareURL && g.ia_document.referrer && m(
                "iia",
                "1"
            );
            m("adb", ib.getVal());
            m("f", n.getFlashVersion());
            m("l", n.getSilverlightVersion());
            m("fpr", n.getFingerPrint());
            m("cn", this.counterNum);
            b.pa || (v = l.getViewportSize(), m("w", v[0] + "x" + v[1]));
            m("z", e);
            m("i", d);
            m("et", w.getSeconds());
            m("en", l.getDocumentCharset());
            m("v", this._getVersion());
            m(
                "c",
                navigator.cookieEnabled
                    ? "1"
                    : ""
            );
            m("la", n.getLanguage());
            m("ntf", n.getNotificationPermission());
            f.random(100) || m("np", Q.encode(na.encode(f.trim(n.getPlatform(), 100))));
            h && m("wh", "1");
            e = "ar ln dl cpf ad nb pa pq pv ex".split(" ");
            for (d = 0; d < e.length; d++) 
                u(e[d]);
            e = ["va", "vt", "sn", "sa", "he"];
            b.nb && e.push("cl");
            for (d = 0; d < e.length; d++) 
                h = e[d],
                m(h, b[h]);
            e = new T({counterId: c});
            e.isEnabled() && (
                c = e.getStorageId(),
                d = e.get("reqNum"),
                p || (
                    d
                        ? d++
                        : d = 1
                ),
                e.set("reqNum", d),
                e.get("reqNum") == d
                    ? (m("ls", c), m("rqn", d))
                    : (e.remove("reqNum"), e.clearStorageId(), 1 < d && (m("ls", c), m("rqn", 0)))
            );
            m("rn", f.random());
            m("hid", k);
            m("ds", Bb(R));
            R._firstPaint || (R._firstPaint = Db(), m("fp", R._firstPaint));
            if (r) {
                g.name || (g.name = Math.round(65535 * Math.random()));
                if (k = +g.name) 
                    0 > k && (k *= -1),
                    k %= 65535;
                m("wn", k || f.fletcher(g.name));
                try {
                    g.history && m("hl", String(g.history.length))
                } catch ($a) {}
            }
            k = "";
            this.sendTitle && (k = this._getTitle(a));
            m("t", k, !0);
            return t
        },
        _getTitle: function (a) {
            a = "undefined" == typeof a
                ? (a = l.getDocumentTitle())
                    ? f.trim(a, Na)
                    : ""
                : f.trim(a, Na);
            return a
        }
    });
    f.array2Props = function (a) {
        var b = a.length,
            c = {},
            d = c,
            e;
        for (e = 0; e < b - 1; e++) {
            var f = a[e];
            d[f] = {};
            e < b - 2 && (d = d[f])
        }
        d[f] = a[b - 1];
        return c
    };
    var ra = B.inherit({
            sampling: 1,
            counterId: 26302566,
            _initComponent: function () {
                ra
                    .superclass
                    ._initComponent
                    .apply(this, arguments);
                this._sender = new ka({
                    protocol: "https:",
                    counterId: this.counterId,
                    retry: !1,
                    counter: {}
                })
            },
            log: function () {
                this.logParams(f.array2Props(arguments))
            },
            logParams: function (a) {
                Math.random() < this.sampling && this
                    ._sender
                    .sendHit({url: G.href, title: "", referrer: "", vParams: a})
            }
        }),
        Ib = P.inherit({
            resource: "webvisor",
            retry: !0,
            postParams: ["wv-data"],
            sendPacket: function (a, b, c, d, e, h, k, l) {
                if (!a || !a.length) 
                    return !1;
                var m = Q.encode(a, !0);
                if (0 == m.indexOf("AAAAAAAAADw") && g.Error) {
                    var p = Error();
                    "string" == typeof p.stack && (new ra({sampling: .1})).log(
                        "bad visor packet 5",
                        1
                    )
                }
                a = {
                    rn: f.random(),
                    "page-url": b,
                    wmode: 0,
                    "wv-type": 0,
                    "wv-hit": c,
                    "wv-part": d + 1,
                    "wv-check": f.fletcher(a),
                    "wv-data": m
                };
                e = {
                    v: this._getVersion(),
                    z: e,
                    i: h
                };
                return this.send(a, e, k, l)
            }
        }),
        Ja = Ca.inherit({
            protocol: "",
            counterId: "",
            counterType: "",
            meta: null,
            maxBufferSize: 7500,
            flushTimeout: 3E4,
            storageKey: "visorbuff",
            active: !1,
            _initComponent: function () {
                this.storage = new T({counterId: this.counterId});
                this._sender = new Ib(
                    {globalConfig: this.globalConfig, protocol: this.protocol, counterId: this.counterId, counterType: this.counterType}
                );
                Ja
                    .superclass
                    ._initComponent
                    .apply(this, arguments)
            },
            onFlush: function (a, b, c) {
                this
                    ._sender
                    .sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
            }
        }),
        xb = P.inherit({
            resource: "webvisor",
            transports: [
                da, ea
            ],
            postParams: ["wv-data"],
            sendContent: function (a, b, c, d, e, f, g) {
                if (!a) 
                    return !1;
                
- 1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
                a = {
                    "wv-type": 1,
                    "page-url": D().href,
                    "wv-hit": c,
                    "wv-data": Q.encode(na.encode(a))
                };
                return 245E3 < a["wv-data"].length
                    ? !1
                    : this.send(a, {
                        z: d,
                        i: e,
                        pct: b || ""
                    }, f, g)
            }
        });
    l.getDocumentHTML = function () {
        var a = "";
        var b = h.documentElement;
        var c = b.outerHTML,
            d,
            e;
        if (c) 
            b = c;
        else {
            c = b.attributes;
            var f = "";
            for (d = 0; d < c.length; d++) 
                (e = c[d]) && (f += " " + e.name + '\x3d"' + (
                    e.value || ""
                ) + '"');
            b = "\x3chtml" + f + "\x3e" + b.innerHTML + "\x3c/html\x3e"
        }
        if (c = h.doctype) 
            a = c.publicId
                ? ' PUBLIC "' + c.publicId + '"'
                : "",
            f = c.systemId
                ? ' "' + c.systemId + '"'
                : "",
            a = "\x3c!DOCTYPE " + c.name + a + f + "\x3e\n";
        return a + b
    };
    l.getDocumentScroll = function () {
        var a = l.getBody();
        return [
            g.pageXOffset || h.documentElement && h.documentElement.scrollLeft || a && a.scrollLeft || 0,
            g.pageYOffset || h.documentElement && h.documentElement.scrollTop || a && a.scrollTop || 0
        ]
    };
    l.getElementParent = function (a) {
        if (!a || a == h.documentElement) 
            return null;
        if (a == l.getBody()) 
            return h.documentElement;
        var b = null;
        try {
            b = a.parentNode
        } catch (c) {}
        return b
    };
    l.getElementChildren = function (a, b) {
        var c = [],
            d,
            e,
            g;
        if (a && (d = a.childNodes)) {
            var h = 0;
            for (g = d.length; h < g; h++) {
                var k = d[h];
                (e = "INPUT" == k.nodeName && k.type && "hidden" == k.type.toLocaleLowerCase()) || b && k.nodeName != b || f.mergeArrays(
                    c,
                    [k]
                )
            }
        }
        return c
    };
    l.getElementNeighborPosition = function (a) {
        var b = l.getElementParent(a),
            c;
        if (b) {
            var d = 0;
            b = b.childNodes;
            var e = a && a.nodeName;
            for (c = 0; c < b.length; c++) {
                var f = b[c] && b[c].nodeName;
                if (e == f) {
                    if (a == b[c]) 
                        return d;
                    d++
                }
            }
        }
        return 0
    };
    l.getElementXY = function (a) {
        var b;
        if (!a || !a.ownerDocument || "PARAM" == a.tagName || a == l.getBody() || a == h.documentElement) 
            return [0, 0];
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            var c = l.getDocumentScroll();
            return [
                Math.round(a.left + c[0]),
                Math.round(a.top + c[1])
            ]
        }
        for (b = c = 0; a;) 
            c += a.offsetLeft,
            b += a.offsetTop,
            a = a.offsetParent;
        return [c, b]
    };
    l.getDocumentSize = function () {
        var a = l.getRootElement(),
            b = l.getViewportSize();
        return [
            Math.max(a.scrollWidth, b[0]),
            Math.max(a.scrollHeight, b[1])
        ]
    };
    l.getElementSize = function (a) {
        var b;
        return a == l.getBody() || a == h.documentElement
            ? l.getDocumentSize()
            : (b = a.getBoundingClientRect && a.getBoundingClientRect())
                ? [b.width, b.height]
                : [a.offsetWidth, a.offsetHeight]
    };
    l.getElementRegion = function (a) {
        var b = l.getElementXY(a);
        a = l.getElementSize(a);
        return [
            b[0], b[1], a[0], a[1]
        ]
    };
    l.calcChildrenChecksum = function (a) {
        var b = v(function () {
            return a.innerHTML
        }, "", !0)() || "";
        return f.fletcher(b.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    };
    l.getFormNumber = function (a) {
        var b = h.getElementsByTagName("form"),
            c;
        var d = 0;
        for (c = b.length; d < c; d++) 
            if (b[d] == a) 
                return d;
    return -1
    };
    l.isEmptyField = function (a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type
            ? "radio" == a.type || "checkbox" == a.type
                ? !a.checked
                : !a.value
            : "TEXTAREA" == a.nodeName
                ? !a.value
                : "SELECT" == a.nodeName
                    ? 0 > a.selectedIndex
                    : !0
    };
    l.calcTextChecksum = function (a) {
        var b = "";
        a = a.childNodes;
        var c;
        var d = 0;
        for (c = a.length; d < c; d++) 
            a[d] && 3 == a[d].nodeType && (b += a[d].nodeValue);
        return f.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    l.calcAttribChecksum = function (a) {
        var b = "",
            c = "width height align title alt name".split(" "),
            d;
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        b += String(a.className || "").toLowerCase();
        for (d = 0; d < c.length; d++) 
            a.getAttribute && (b += String(a.getAttribute(c[d]) || "").toLowerCase());
        return f.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    l.classNameExists = function (a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
        } catch (c) {
            return !1
        }
    };
    l.getElementsByClassName = function (a, b) {
        var c;
        b = b || h;
        var d = b.getElementsByTagName("*");
        var e = [];
        for (c = 0; c < d.length; c++) 
            l.classNameExists(d[c], a) && e.push(d[c]);
        return e
    };
    f.arrayFilter = function (a, b, c) {
        var d = [],
            e;
        for (e = 0; e < a.length; e++) 
            b.call(c, a[e], e, a) && d.push(a[e]);
        return d
    };
    f.arrDiff = function (a, b) {
        return f.arrayFilter(a, function (a) {
            return -1 === f.arrayIndexOf(b, a)
        })
    };
    f.encodeURIComponent = function (a, b) {
        a = String(a);
        b && a.length > b && (a = a.substr(0, b));
        return (g.encodeURIComponent || g.escape)(a).replace(/\+/g, "%2B")
    };
    f.bind = function (a, b) {
        var c = []
            .slice
            .call(arguments, 2);
        return function () {
            return a.apply(b || this, c.concat([].slice.call(arguments, 0)))
        }
    };
    f.clearTimeout = function (a) {
        return f.getNativeFunction("clearTimeout")(a)
    };
    f._urlParser = null;
    f.parseUrl = function (a) {
        if (!this._urlParser) 
            try {
                this._urlParser = h.createElement("a")
            } catch (b) {}
        return this._urlParser
            ? (this._urlParser.href = a, {
                protocol: this._urlParser.protocol,
                host: this._urlParser.host,
                port: this._urlParser.port,
                hostname: this._urlParser.hostname,
                hash: this._urlParser.hash,
                search: this._urlParser.search,
                query: this
                    ._urlParser
                    .search
                    .replace(/^\?/, ""),
                pathname: this._urlParser.pathname || "/",
                path: (this._urlParser.pathname || "/") + this._urlParser.search,
                href: this._urlParser.href
            })
            : {}
    };
    f.safeDecodeURIComponent = function (a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    };
    f.isDev = function () {
        return !1
    };
    var wb = !ia(/webkit/) && ia(/gecko/),
        jb = B.inherit({
            hid: 0,
            tz: 0,
            ts: 0,
            counterId: 0,
            counterType: 0,
            url: "",
            protocol: "",
            enabled: !1,
            _initComponent: function () {
                if (this.isEnabled()) {
                    var a = this._getStorage();
                    var b = a.read("visorc");
                    "b" !== b && "w" !== b && (b = "");
                    if (!a.isEnabled() || ia("opera mini")) 
                        b = "b";
                    this._vc = b;
                    "b" !== b && (
                        this._recorder = new pb(this.protocol, this.counterId, this.counterType, this.hid, this.globalConfig)
                    );
                    jb
                        .superclass
                        ._initComponent
                        .apply(this, arguments)
                }
            },
            start: function (a) {
                if (this.isEnabled() && this._recorder) {
                    a = a || {};
                    var b = +a.recp;
                    if (!isFinite(b) || 0 > b || 1 < b) 
                        var c = "w";
                    c || (
                        c = this.hid % 1E4 / 1E4 < b
                            ? "w"
                            : "b"
                    );
                    this
                        ._getStorage()
                        .create("visorc", c, 30);
                    "w" === c
                        ? (
                            this._recorder.start(),
                            b = a.arch_type,
                            (a = a.urls) && b && "none" !== b && this._recorder.uploadPages(a, b)
                        )
                        : this
                            ._recorder
                            .stop()
                }
            },
            stop: function () {
                this._recorder && this
                    ._recorder
                    .stop()
            },
            isEnabled: function () {
                var a = !this
                    .globalConfig
                    .get("oo");
                return this.enabled && a
            },
            getVc: function () {
                return this._vc
            },
            _getStorage: function () {
                this._storage || (this._storage = new J({counterId: this.counterId}));
                return this._storage
            }
        });
    ja = S.inherit({
        id: "script",
        index: 6,
        request: function (a, b, c, d) {
            var e = !1,
                k = f.getNativeFunction("createElement", h)("script");
            this.timeout && f.setTimeout(function () {
                e || (e = !0, l.removeNode(k), c.call(d, !1))
            }, this.timeout, "ts.request");
            if (!k) 
                return e = !0,
                c.call(d, !1),
                !1;
            var u = "_ymjsp" + f.random();
            g[u] = v(function () {
                if (!e) {
                    try {
                        delete g[u]
                    } catch (R) {
                        g[u] = E
                    }
                    c.apply(d, f.mergeArrays([!0], arguments));
                    e = !0;
                    l.removeNode(k)
                }
            }, "transport.script");
            k.type = "text/javascript";
            k.src = this._buildUrl(a, f.mixin({
                wmode: 5,
                callback: u
            }, b));
            k.async = "async";
            var r = h.getElementsByTagName("head")[0];
            r || (r = h.createElement("head"), h.documentElement.appendChild(r));
            f.async (function () {
                r.insertBefore(k, r.firstChild)
            });
            k.onerror = function () {
                e = !0;
                c.call(d, !1);
                g[u] = E
            };
            return !0
        }
    });
    var Oa = da.inherit({
            id: "XHRhit",
            index: 10,
            _buildUrl: function (a, b) {
                b.wmode = 7;
                return Oa
                    .superclass
                    ._buildUrl
                    .apply(this, [a, b])
            },
            _parseResp: function (a) {
                var b = Y.parse(a);
                if (!b) 
                    throw "";
                return f.map(function (a) {
                    return b[a]
                }, f.keys(b))
            }
        }),
        Xa = ka.inherit({
            transports: [
                Oa, ja
            ],
            trimParams: !0,
            _initComponent: function () {
                Xa
                    .superclass
                    ._initComponent
                    .apply(this, arguments);
                this._ilStorage = new T({counterId: this.counterId})
            },
            postParams: [],
            checkYandexHost: function (a) {
                if (a) {
                    a : {
                        if(a = f.parseUrl(a).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) 
                            if (a = a[0].split("yandex").reverse()[0].substring(1), -1 != f.arrayIndexOf(
                                I.yandexWhiteListTld,
                                a
                            )) 
                                break a;
                    a = !1
                    }
                    a && (this.host = I.baseUrl + a)
                }
            },
            sendHit: function (a) {
                var b = {},
                    c = this
                        ._ilStorage
                        .get("il");
                a.visitColor && (b.vc = a.visitColor);
                a.hasPrerender && (b.pr = 1);
                c && (this._ilStorage.remove("il"), b.ilt = Q.encode(na.encode(f.trim(c, kb))));
                this.checkYandexHost(a.referrer);
                this._hitExt({
                    url: a.url,
                    nohit: a.nohit,
                    title: a.title,
                    referrer: a.referrer,
                    vParams: a.vParams,
                    userParams: a.userParams,
                    experiments: a.experiments,
                    modes: a.modes,
                    browserInfo: b,
                    ts: a.ts,
                    tz: a.tz,
                    callback: a.callback,
                    ctx: a.ctx
                }, "hit")
            }
        }),
        Jb = B.inherit({
            cid: 3,
            cnt: 0,
            KEY_NAME: "wasSynced",
            _initComponent: function () {
                this._storage = new T;
                this._cookie = new J
            },
            hit: function (a) {
                var b = this,
                    c = this
                        ._storage
                        .get(this.KEY_NAME),
                    d = [],
                    e = this
                        .globalConfig
                        .get("fakeHit");
                if (e) 
                    return e(function (b) {
                        a(b)
                    });
                c || (c = this._cookie.read(this.KEY_NAME)) && (c = Y.parse(c));
                c && c.time + 864E5 > w.getMs()
                    ? a(c)
                    : (this.globalConfig.set("fakeHit", function (a) {
                        d.push(a)
                    }), this._getSender().sendHit({
                        callback: function (e, g) {
                            c = {
                                time: w.getMs(),
                                params: e,
                                bkParams: g
                            };
                            b
                                .globalConfig
                                .set("isEU", e.eu);
                            b
                                ._storage
                                .set(b.KEY_NAME, c);
                            b
                                ._cookie
                                .create(b.KEY_NAME, Y.stringify(c), 1728);
                            a(c);
                            f.arrayEvery(d, function (a) {
                                a(c);
                                return 1
                            })
                        }
                    }))
            },
            _getSender: function () {
                this._sender || (this._sender = new Xa({
                    protocol: "https:",
                    counterType: this.cnt,
                    counterId: this.cid,
                    sendTitle: !1,
                    globalConfig: this.globalConfig,
                    fake: !0
                }));
                return this._sender
            }
        }),
        lb = B.inherit({
            baseUrl: I.baseUrl,
            globalConfig: t,
            baseTld: "ru",
            _initComponent: function () {
                var a = this;
                lb
                    .superclass
                    ._initComponent
                    .apply(this, arguments);
                this.syncTlds = f.reduce(function (a, c) {
                    return c(a)
                }, I.yandexWhiteListTld, [
                    f.bind(f.filter, null, function (b) {
                        return b !== a.baseTld
                    }),
                    f.bind(f.reduce, null, function (a, c) {
                        a[c] = [c];
                        return a
                    }, {})
                ])
            },
            langToDomain: {
                ka: "ge",
                ro: "md",
                tg: "tj",
                tk: "tm",
                et: "ee",
                hy: "com.am",
                he: "co.li",
                ky: "kg",
                uk: "ua",
                be: "by",
                tr: "com.tr",
                kk: "kz"
            },
            sync: function (a) {
                var b = this,
                    c = this._need(),
                    d = Ma();
                !this._is() && c
                    ? (
                        this._setStatus(!0),
                        d
                            ? this._getCn().hit(function () {
                                b._sync(c, a)
                            })
                            : a()
                    )
                    : a();
                d && this._addMda()
            },
            _addMda: function () {
                var a = new J({
                        skipPrefix: !0
                    }),
                    b = new J,
                    c = a.read("mda");
                "0" !== c && "1" !== c && a.create("mda", "0", 1036800);
                b.read("mda") && b.erase("mda")
            },
            _is: function () {
                try {
                    return !!this
                        .globalConfig
                        .get("startSync")
                } catch (a) {
                    return !1
                }
            },
            _setStatus: function (a) {
                try {
                    this
                        .globalConfig
                        .set("startSync", a)
                } catch (b) {}
            },
            _need: function () {
                var a = this._getDomainByLang(),
                    b = this._getTld(),
                    c = [],
                    d;
                (d = this.syncTlds[b]) && c
                    .push
                    .apply(c, d);
                d = this.syncTlds[a];
                a !== b && d && c
                    .push
                    .apply(c, d);
                var e = this
                    ._getLs()
                    .get("synced") || {};
                c = f.arrayFilter(c, function (a) {
                    return (e[a] || 1) + 1440 < w.getMinutes()
                });
                return c.length && c || !1
            },
            _sync: function (a, b) {
                var c,
                    d = 0,
                    e = I.protocol + "//",
                    f = a.length,
                    g = this;
                if (0 < f) {
                    b = b || function () {};
                    var h = function () {
                        d++;
                        f === d && b()
                    };
                    var k = g._getLs();
                    var l = new V({});
                    for (c = 0; c < f; c++) 
                        (function (a) {
                            l.request(
                                e + (g.baseUrl + a) + "/sync_cookie_image_check",
                                {},
                                function (b) {
                                    h();
                                    var c = w.getMinutes();
                                    b || (c -= 1435);
                                    b = k.get("synced") || {};
                                    b[a] = c;
                                    k.set("synced", b)
                                }
                            )
                        })(a[c])
                } else 
                    b()
            },
            _getCn: function () {
                this._cn || (this._cn = new Jb({
                    fake: !0,
                    globalConfig: this.globalConfig
                }));
                return this._cn
            },
            _getLs: function () {
                this._ls || (this._ls = new T);
                return this._ls
            },
            _getTld: function () {
                var a = f.getTld();
                return {
                    am: "com.am",
                    tr: "com.tr",
                    ge: "com.ge",
                    il: "co.il",
                    "\u0440\u0444": "ru",
                    "xn--p1ai": "ru",
                    "\u0443\u043a\u0440": "ua",
                    "xn--j1amh": "ua",
                    "\u0431\u0435\u043b": "by",
                    "xn--90ais": "by"
                }[a] || a
            },
            _getDomainByLang: function () {
                if (!g.navigator) 
                    return "ru";
                try {
                    var a = navigator.languages
                        ? navigator.languages[0]
                        : n.getLanguage()
                } catch (b) {}
                a = (a || "")
                    .toLowerCase()
                    .split("-")[0];
                return this.langToDomain[a] || "ru"
            }
        }),
        Kb = da.inherit({
            id: "RawBodyXHR",
            index: 9,
            postParams: ["body"],
            _setHeaders: function () {},
            _preparePostParams: function (a) {
                return a.post.body || ""
            }
        });
    n.isAndroid = v(function () {
        var a = navigator
                .userAgent
                .toLowerCase(),
            b = n.getPlatform() || "";
        return -1 < a.indexOf("android") && -1 < a.indexOf("mobile") && b.match(
            /^android|linux armv/i
        )
    }, "", !0);
    var pa = {
            _url: I.protocol + "//" + I.host + "/user_storage_set?",
            _params: {},
            init: function (a) {
                this._params = a || {}
            },
            save: function (a, b) {
                this
                    ._getReq()
                    .request(this._url + ca.stringify({key: a, value: f.toJSON(b)}));
                this
                    ._getLs()
                    .set(a, b)
            },
            get: function (a) {
                return {
                    remote: this._params[a], local: this
                        ._getLs()
                        .get(a)
                }
            },
            getNum: function (a) {
                a = this.get(a);
                return Math.max(+a.remote || 0, + a.local || 0)
            },
            _getLs: function () {
                this._ls || (this._ls = new T);
                return this._ls
            },
            _getReq: function () {
                this._req || (this._req = new V);
                return this._req
            }
        },
        Lb = {
            sync: v(function (a, b, c, d) {
                var e = {
                    t: 'UV|L7,!"T[rwe\x26D_\x3eZIb\\aW#98Y.PC6k'
                };
                this.globalConfig = d || t;
                if (this._enabled(a, b, c)) {
                    this._setStatus(!0);
                    var f = new Kb({
                        method: "GET",
                        withCredentials: !1
                    });
                    var g = this._getHosts();
                    var h = g.length;
                    (function q(a) {
                        var b = g[a];
                        a < h
                            ? f.request(b[0] + ":" + b[1] + "/p", e, function (c, d) {
                                c
                                    ? this._save(c, d, b[1])
                                    : q.call(this, a + 1)
                            }, this)
                            : this._save(!1)
                    }).call(this, 0)
                }
            }, "ds"),
            _getHosts: function () {
                var a = [],
                    b = G.protocol,
                    c = n.isIOS();
                (n.isAndroid() || c && "http:" === b) && a.push([
                    "http://127.0.0.1", "30102"
                ], ["http://127.0.0.1", "29009"]);
                c && "https:" === b && a.push([
                    "https://yandexmetrica.com", "30103"
                ], ["https://yandexmetrica.com", "29010"]);
                return a
            },
            _save: function (a, b, c) {
                var d = w.getMinutes();
                a
                    ? (new ka({
                        protocol: "https:",
                        counterType: 0,
                        counterId: 42822899,
                        sendTitle: !1,
                        fake: !0
                    })).sendDevice({data: f.trim(b), port: c})
                    : d -= 45;
                pa.save("ds", d)
            },
            _is: function () {
                try {
                    return !!this
                        .globalConfig
                        .get("dSync")
                } catch (a) {
                    return !1
                }
            },
            _enabled: function (a, b, c) {
                if (!(60 < w.getMinutes() - pa.getNum("ds")) || this._is() || f.isDev(this.globalConfig)) 
                    return !1;
                a = 0 === b && 0 <= f.arrayIndexOf([
                    39370095,
                    1282253,
                    29302335,
                    43653484,
                    41734944,
                    31048081,
                    16443139,
                    27737346,
                    41870499,
                    33911514,
                    30744873,
                    5564395,
                    2580487
                ], a);
                a = 0 == D()
                    .hostname
                    .search(
                        /^(.*\.)?((ya|yandex(-team)?)\.(com\.)?\w+|(auto|kinopoisk)\.ru|yadi\.sk|yastatic\.net)$/
                    ) || !c && .1 >= Math.random() && a;
                c = n.isIOS() && a;
                return n.isAndroid() && a || c
            },
            _setStatus: function (a) {
                try {
                    this
                        .globalConfig
                        .set("dSync", a)
                } catch (b) {}
            }
        },
        F = {
            getPos: function (a) {
                var b = l.getRootElement(),
                    c = l.getDocumentScroll();
                return [
                    a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0,
                    a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0
                ]
            },
            getTarget: function (a) {
                var b = null;
                try {
                    if (b = a.target || a.srcElement) 
                        !b.ownerDocument && b.documentElement
                            ? b = b.documentElement
                            : b.ownerDocument !== h && (b = null)
                    } catch (c) {}
                return b
            },
            getMouseButton: function (a) {
                return a.which || a.button == E
                    ? a.which
                    : a.button & 1
                        ? 1
                        : a.button & 2
                            ? 3
                            : a.button & 4
                                ? 2
                                : 0
            },
            prevent: function (a) {
                a = a || g.event;
                a.preventDefault
                    ? a.preventDefault()
                    : a.returnValue = !1
            }
        };
    F.dispatchCustomEvent = v(function (a, b) {
        var c;
        b = b || h;
        if (c = f.getNativeFunction("createEvent", h)("Event")) 
            c.initEvent(a, !1, !1),
            f.getNativeFunction("dispatchEvent", b)(c)
    }, "evt.dispatch");
    var oa = {
        lastReferrer: null
    };
    n.isIE = function () {
        return h && !h.addEventListener || !1
    };
    n.isChromePdf = function () {
        var a,
            b = navigator.plugins;
        if (b && b.length) 
            for (a = 0; a < b.length; a++) 
                if (/Chrome PDF Viewer/.test(b[a].name)) 
                    return !0;
    return !1
    };
    var la = {};
    la._cookie = new J({
        onlyCurrentDomain: !0
    });
    la.log = v(function () {
        var a = -1 < G
            .href
            .indexOf("_ym_debug\x3d1") || g._ym_debug;
        a && this
            ._cookie
            .create("debug", "1");
        g.console && console.log && (a || "1" === this._cookie.read("debug")) && console
            .log
            .apply(console, arguments)
    }, "DebugConsole.log");
    var Mb = P.inherit({
            resource: "clmap",
            retry: !0,
            transports: [V],
            sendClick: function (a, b, c, d) {
                this.send({
                    "page-url": a,
                    "pointer-click": b
                }, {}, c, d)
            }
        }),
        Nb = B.inherit({
            filter: null,
            ignoreTags: [],
            quota: 0,
            isTrackHash: !1,
            protocol: "",
            counterId: 0,
            counterType: 0,
            startTime: 0,
            MAX_LEN_PATH: 128,
            TIMEOUT_CLICK: 50,
            TIMEOUT_SAME_CLICKS: 1E3,
            DELTA_SAME_CLICKS: 2,
            tags: (
                "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG I" +
                "NPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOO" +
                "T TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EM" +
                "BED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASID" +
                "E FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN s" +
                "vg circle clippath ellipse defs foreignobject g glyph glyphref image line line" +
                "argradient marker mask path pattern polygon polyline radialgradient rect set t" +
                "ext textpath title"
            ).split(" "),
            _initComponent: function () {
                var a,
                    b;
                this._lastClick = null;
                this.hasQuota = !!this.quota;
                this._quota = this.quota;
                this._ignoreTags = [];
                if (this.ignoreTags) 
                    for (a = 0; a < this.ignoreTags.length; a++) 
                        this.ignoreTags[a] && f.mergeArrays(
                            this._ignoreTags,
                            [String(this.ignoreTags[a]).toUpperCase()]
                        );
            this._cacheTags = {};
                a = 59;
                var c = String.fromCharCode;
                for (b = 0; b < this.tags.length; b++) 
                    this._cacheTags[this.tags[b]] = c(a),
                    c(a),
                    a++;
                this._sender = new Mb(
                    {globalConfig: this.globalConfig, protocol: this.protocol, counterId: this.counterId, counterType: this.counterType}
                );
                this._start = !1;
                this.start()
            },
            destroy: function () {
                this.stop()
            },
            start: function () {
                if (!this._start) 
                    k.on(h, "click", this._handler, this);
                this._start = !0
            },
            stop: function () {
                this._start && k.un(h, "click", this._handler, this);
                this._start = !1
            },
            setTrackHash: function (a) {
                this.isTrackHash = a
            },
            _isIgnore: function (a) {
                return l.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
            },
            _handler: function (a) {
                a = {
                    el: F.getTarget(a),
                    pos: F.getPos(a),
                    button: F.getMouseButton(a),
                    time: +new Date
                };
                if (this._isTrackingClick(a)) {
                    var b = l.getElementSize(a.el);
                    var c = l.getElementXY(a.el);
                    b = [
                        "rn",
                        f.random(),
                        "x",
                        Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] || 1)),
                        "y",
                        Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)),
                        "t",
                        Math.floor((a.time - this.startTime) / 100),
                        "p",
                        this._getElPath(a.el)
                    ];
                    c = D().href;
                    this.isTrackHash
                        ? f.mergeArrays(b, ["wh", "1"])
                        : c = c.split("#")[0];
                    this
                        ._sender
                        .sendClick(f.trim(c, wa), b.join(":"));
                    this._lastClick = a
                }
            },
            _isTrackingClick: function (a) {
                var b;
                if (g.ymDisabledClickmap || f.isMetrikaPlayer() || !a.el) 
                    return !1;
                var c = a.el.tagName;
                if ((2 == a.button || 3 == a.button) && "A" != c || this.filter && !this.filter(a.el, c)) 
                    return !1;
                for (b = 0; b < this._ignoreTags.length; b++) 
                    if (this._ignoreTags[b] == c) 
                        return !1;
            for (c = a.el; c;) {
                    if (this._isIgnore(c)) 
                        return !1;
                    c = c.parentNode
                }
                if (this._lastClick) {
                    if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) 
                        return !1;
                    c = Math.abs(this._lastClick.pos[0] - a.pos[0]);
                    b = Math.abs(this._lastClick.pos[1] - a.pos[1]);
                    var d = a.time - this._lastClick.time;
                    if (this._lastClick.el == a.el && c < this.DELTA_SAME_CLICKS && b < this.DELTA_SAME_CLICKS && d < this.TIMEOUT_SAME_CLICKS) 
                        return !1
                }
                if (this.hasQuota) {
                    if (!this._quota) 
                        return !1;
                    this._quota--
                }
                return !0
            },
            _getElPath: function (a) {
                for (
                    var b = "";
                    a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;
                ) 
                    b += this._cacheTags[a.tagName] || "*",
                    b += l.getElementNeighborPosition(a) || "",
                    a = a.parentNode;
                return f.trim(b, this.MAX_LEN_PATH)
            }
        });
    l.loadScript = function (a, b) {
        b = b || g;
        var c = f.mixin({
                type: "text/javascript",
                charset: "utf-8",
                async: !0
            }, a),
            d = b.document,
            e = f.getNativeFunction("createElement", d),
            h = e("script");
        if (h) {
            h.type = c.type;
            h.charset = c.charset;
            h.src = c.src;
            c.async && (h.async = !0);
            try {
                var k = d.getElementsByTagName("head")[0];
                if (!k) {
                    var l = d.getElementsByTagName("html")[0];
                    k = e("head");
                    l && l.appendChild(k)
                }
                k.insertBefore(h, k.firstChild);
                return h
            } catch (R) {}
        }
    };
    var Pa = B.inherit({
            injectHash: {
                Wjw75ghm7fa7JW8p: "https://yastatic.net/metrika-static-watch/assessor-init.js",
                Z4RhWJNDJanzkGJa: "https://yastatic.net/metrika-static-watch/assessor-compare.js"
            },
            ASSESSOR_COOKIE: "assessor",
            REMOTE_CONTROL: "i",
            getInjectHash: function () {
                var a = {};
                f.forEachKey(this.injectHash, function (b) {
                    a[Z + ("" + f.fnv32a(b))] = this.injectHash[b]
                }, this);
                return a
            },
            checkAssessor: function () {
                var a = [],
                    b = this.getInjectHash();
                f.forEachKey(b, function (c) {
                    if ((new RegExp(c)).test(g.location.hash) || J.get(this.ASSESSOR_COOKIE + c)) 
                        J.set(this.ASSESSOR_COOKIE + c),
                        a.push(b[c])
                }, this);
                return a
            },
            _initComponent: function () {
                var a = this.checkAssessor();
                this
                    .globalConfig
                    .get(this.REMOTE_CONTROL) || (
                        this.globalConfig.set(this.REMOTE_CONTROL, !0),
                        Pa.superclass._initComponent.apply(this, arguments),
                        this._executedMsgs = {},
                        k.on(g, "message", this._onMessage, this),
                        a.length && (
                            this.globalConfig.set("oo", !0),
                            this.globalConfig.get("stopRecoder", function () {})(),
                            f.arrayEvery(
                                a,
                                function (a) {
                                l.loadScript({
                                    src: a
                                }, g);
                                return 1
                            }
                            )
                        )
                    )
            },
            _buildRemoteIframe: function (a) {
                var b = f.getNativeFunction("createElement", h)("div"),
                    c = l.getBody() || h.documentElement;
                if (c) {
                    b.innerHTML = '\x3ciframe name\x3d"RemoteIframe" allowtransparency\x3d"true" style\x3d"positi' +
                            'on: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"\x3e\x3c/ifr' +
                            'ame\x3e';
                    var d = b.firstChild;
                    d.onload = function () {
                        l.loadScript({
                            src: a
                        }, d.contentWindow)
                    };
                    g._ym__remoteIframeEl = d;
                    b.createShadowRoot || b.webkitCreateShadowRoot
                        ? (c.appendChild(b), b.removeChild(d), (
                            c = b.createShadowRoot
                                ? b.createShadowRoot()
                                : b.webkitCreateShadowRoot()
                        ) && c.appendChild(d), g._ym__remoteIframeContainer = b)
                        : (c.appendChild(d), g._ym__remoteIframeContainer = d)
                }
            },
            _isAllowedLang: function (a) {
                return -1 !== f.arrayIndexOf([
                    "ru", "uk", "en", "tr"
                ], a)
            },
            _isAllowedOrigin: function (a) {
                return /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/.test(a)
            },
            _isAllowedStatic: function (a) {
                return /^(([\w\-.]+\.)?dev\.webvisor\.com|yastatic\.net)$/.test(a)
            },
            _onMessage: function (a) {
                try {
                    var b = a.origin
                } catch (c) {}
                b && this._isAllowedOrigin(b) && (b = Y.parse(a.data)) && "appendremote" === b.action && this._isAllowedStatic(
                    f.parseUrl(b.domain).host
                ) && this._isAllowedLang(b.lang) && !this._executedMsgs[b.id] && (
                    this._executedMsgs[b.id] = !0,
                    g._ym__postMessageEvent = a,
                    g._ym__inpageMode = b.inpageMode,
                    g._ym__initMessage = b.initMessage,
                    this._buildRemoteIframe(
                        b.domain + "/cdn/inpage-remote/" + (
                            b.newScriptAddr
                                ? "_inpage-remote_"
                                : "inpage-remote."
                        ) + b.lang + ".js"
                    )
                )
            }
        }),
        mb = B.inherit({
            counter: null,
            prefsEcommerce: null,
            status: {
                NEW: E,
                PENDING: 1,
                OK: 2,
                FAIL: 3
            },
            dataLayerName: "dataLayer",
            allowedEvents: "currencyCode add delete remove purchase detail".split(" "),
            _initComponent: function () {
                var a = "customArr";
                mb
                    .superclass
                    ._initComponent
                    .apply(this, arguments);
                this.frameConnector && this
                    .frameConnector
                    .addHandler("params", function (a, c) {
                        this.counter && this.counter.params && this
                            .counter
                            .params(c.data)
                    }, this);
                this._overridePush(this.globalConfig.get("dataLayer"));
                if (this.prefsEcommerce || this.prefsUseDataLayer) 
                    this._overridePush(this.prefsEcommerce) || (
                        f.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce),
                        a = this.dataLayerName,
                        this._tryTimeout = f.bind(this._tryTimeout, this),
                        this._tryTimeout()
                    ),
                    this.counter._ecommerce = a
            },
            _overridePush: function (a) {
                if (a && "function" == typeof a.push) {
                    var b = this;
                    b._send(a);
                    var c = a.push;
                    a.push = function () {
                        b._send([].slice.call(arguments, 0));
                        return c.apply(this, arguments)
                    };
                    return !0
                }
                return !1
            },
            _tryTimeout: function () {
                this._overridePush(g[this.dataLayerName]) || f.setTimeout(
                    this._tryTimeout,
                    1E3,
                    "dlObserver"
                )
            },
            _send: function (a) {
                var b = [],
                    c = this.allowedEvents,
                    d,
                    e;
                var h = 0;
                for (e = a.length; h < e; h++) {
                    if ((d = a[h]) && d.ymetrikaEvent && d.ymetrikaEvent.data) {
                        var k = d.ymetrikaEvent;
                        "params" === k.type && (
                            k.sended || (k.sended = []),
                            k.counter
                                ? this.counter && this.counter.params && this.counterId == k.counter && (
                                    this.counter.params(k.data),
                                    k.sended.push(this.counterId)
                                )
                                : f.forEachKey(this.globalConfig.get("counters"), function (a, b) {
                                    var c = a.split(":")[0];
                                    !f.inArray(k.sended, c) && b && b.params && (
                                        b.params(k.data),
                                        k.sended.push(c)
                                    )
                                }, this),
                            k.status == this.status.NEW && k.parent && this.frameConnector && this.frameConnector.checkFrame(
                                g.parent
                            ) && g.parent !== g && (this.frameConnector.sendToParents({
                                type: "params",
                                data: k.data
                            }, function () {
                                k.status = this.status.OK
                            }, this), k.status = this.status.PENDING)
                        )
                    }
                    if (d && d.ecommerce) {
                        var l = {};
                        var n = !1;
                        f.forEachKey(d.ecommerce, function (a, b) {
                            0 <= f.arrayIndexOf(c, a) && (n = !0, l[a] = b)
                        });
                        n && b.push(l)
                    }
                }
                b.length && this
                    .counter
                    .params({
                        __ym: {
                            ecommerce: b
                        }
                    })
            }
        }),
        Ob = {
            match: function () {
                this.enabled() && k.ready(function () {
                    var a = f.getNativeFunction("createElement", h)("iframe");
                    a.onload = function () {
                        pa.save("cm", w.getMinutes());
                        l.removeNode(a)
                    };
                    a.style.display = "none";
                    a.src = I.protocol + "//" + I.host + "/metrika/watch_match.html";
                    h
                        .documentElement
                        .appendChild(a)
                })
            },
            enabled: function () {
                return 1440 < w.getMinutes() - pa.getNum("cm") && "tr" === f.getTld()
            }
        };
    v(function () {
        (function (a) {
            function b(d) {
                if (c[d]) 
                    return c[d].exports;
                var e = c[d] = {
                    i: d,
                    l: !1,
                    exports: {}
                };
                a[d].call(e.exports, e, e.exports, b);
                e.l = !0;
                return e.exports
            }
            var c = {};
            b.m = a;
            b.c = c;
            b.d = function (a, c, f) {
                b.o(a, c) || Object.defineProperty(a, c, {
                    configurable: !1,
                    enumerable: !0,
                    get: f
                })
            };
            b.n = function (a) {
                var c = a && a.__esModule
                    ? function () {
                        return a["default"]
                    }
                    : function () {
                        return a
                    };
                b.d(c, "a", c);
                return c
            };
            b.o = function (a, b) {
                return Object
                    .prototype
                    .hasOwnProperty
                    .call(a, b)
            };
            b.p = "";
            return b(b.s = 3)
        })({
            0: function (a, b, c) {
                b.__esModule = !0;
                b.listToArray = function (a) {
                    return a
                        ? []
                            .slice
                            .call(a)
                        : []
                }
            },
            1: function (a, b, c) {
                b.__esModule = !0;
                var d = [".googlesyndication.com/", "/googleads"];
                b.isGoogleSrc = function (a) {
                    return !(!a || !d.filter(function (b) {
                        return 0 < a.indexOf(b)
                    }).length)
                }
            },
            3: function (a, b, c) {
                b.__esModule = !0;
                a = {
                    detectAd: c(4).detectAd
                };
                g.Ya
                    ? g.Ya.AdDetector
                        ? a = g.Ya.AdDetector
                        : g.Ya.AdDetector = a
                    : g.Ya = {
                        AdDetector: a
                    };
                b.AdDetector = a
            },
            34: function (a, b, c) {
                b.__esModule = !0;
                b.getParentElementsCount = function (a) {
                    for (var b = 0;;) 
                        if (a = a.parentElement) 
                            b++;
                        else 
                            return b
                }
            },
            4: function (a, b, c) {
                b.__esModule = !0;
                var d = c(5),
                    e = c(9),
                    f = c(34),
                    k = c(6),
                    l = h.body,
                    n = h.documentElement;
                b.detectAd = function () {
                    var a = g.pageYOffset || n.scrollTop || l.scrollTop,
                        b = g.pageXOffset || n.scrollLeft || l.scrollLeft,
                        c = n.clientTop || l.clientTop || 0,
                        h = n.clientLeft || l.clientLeft || 0,
                        m = n.scrollWidth || n.offsetWidth || g.innerWidth,
                        r = n.scrollHeight || n.offsetHeight || g.innerHeight,
                        u = k.getFrienlyWindowsTree(g),
                        t = [];
                    k.windowsTreeEach(u, function (a) {
                        var b = a.window,
                            c = a.parent,
                            f = 0 < d
                                .getParentFriendlyIFrames(b.document.documentElement)
                                .length,
                            g = e.getAdsInWindow(b, {isInIFrame: f});
                        f = g.adElements;
                        g = g.iframeProviders;
                        if (c) {
                            var h = b.frameElement,
                                k = t
                                    .filter(function (a) {
                                        return a.windowsTree === c
                                    })[0]
                                    .adElements;
                            g.forEach(function (a) {
                                k.push({provider: a, element: h})
                            })
                        }
                        t.push({windowsTree: a, adElements: f})
                    });
                    t.forEach(function (a) {
                        a.adElements = a
                            .adElements
                            .sort(function (a, b) {
                                return f.getParentElementsCount(a.element) - f.getParentElementsCount(
                                    b.element
                                )
                            })
                    });
                    var v = [],
                        ma = [];
                    t.forEach(function (a) {
                        var b = a.windowsTree,
                            c = b.parent;
                        a = a.adElements;
                        b = d.getParentFriendlyIFrames(b.window.document.documentElement);
                        var e = b[b.length - 1];
                        a.forEach(function (a) {
                            var b = a.element;
                            ma.push({
                                provider: a.provider,
                                element: c
                                    ? e
                                    : b
                            })
                        })
                    });
                    ma.forEach(function (d) {
                        var e = d.element;
                        var f = e.getBoundingClientRect();
                        var g = f.top + a - c;
                        f = f.left + b - h;
                        var k = e.clientWidth;
                        e = e.clientHeight;
                        var l = f + k,
                            p = g + e,
                            n = 0 > f
                                ? 0
                                : f < m
                                    ? f
                                    : m,
                            q = 0 > g
                                ? 0
                                : g < r
                                    ? g
                                    : r;
                        100 <= ((
                            l > m
                                ? m
                                : l > n
                                    ? l
                                    : n
                        ) - n) * ((
                            p > r
                                ? r
                                : p > q
                                    ? p
                                    : q
                        ) - q) && v.push({top: g, left: f, width: k, height: e, provider: d.provider})
                    });
                    return {
                        page: {
                            width: m,
                            height: r
                        },
                        window: {
                            top: a,
                            left: b,
                            width: g.innerWidth,
                            height: g.innerHeight
                        },
                        ads: v
                    }
                }
            },
            5: function (a, b, c) {
                b.__esModule = !0;
                b.getParentFriendlyIFrames = function (a) {
                    for (var b = [];;) 
                        try {
                            if (a = a.ownerDocument.defaultView.frameElement) 
                                b.push(a);
                            else 
                                return b
                        } catch (m) {
                            return b
                        }
                    }
            },
            6: function (a, b, c) {
                function d(a) {
                    return h
                        .listToArray(a.document.getElementsByTagName("iframe"))
                        .filter(function (a) {
                            if (g.isSafari) 
                                return !1;
                            try {
                                return a.contentWindow.document
                            } catch (q) {
                                return !1
                            }
                        })
                        .map(function (a) {
                            return a.contentWindow
                        })
                }
                function e(a, b) {
                    var c = {
                        window: a,
                        children: [],
                        parent: b
                    };
                    c.children = d(a).map(function (a) {
                        return e(a, c)
                    });
                    return c
                }
                function f(a, b) {
                    b(a);
                    a
                        .children
                        .forEach(function (a) {
                            return f(a, b)
                        })
                }
                b.__esModule = !0;
                var g = c(7),
                    h = c(0);
                b.getFrienlyWindowsTree = e;
                b.windowsTreeEach = f
            },
            7: function (a, b, c) {
                b.__esModule = !0;
                a = c(8);
                b.isSafari = a.isSafari()
            },
            8: function (a, b, c) {
                b.__esModule = !0;
                b.isSafari = function () {
                    var a = navigator
                        .userAgent
                        .toLowerCase();
                    return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") && -1 === a.indexOf(
                        "android"
                    )
                }
            },
            9: function (a, b, c) {
                b.__esModule = !0;
                var d = c(0),
                    e = c(1);
                b.getAdsInWindow = function (a, b) {
                    function c(a, b) {
                        b.forEach(function (b) {
                            n.push({provider: a, element: b})
                        })
                    }
                    var f = b.isInIFrame,
                        g = a.document.body,
                        h = d.listToArray(g.querySelectorAll("img")),
                        k = d.listToArray(g.querySelectorAll("iframe")),
                        l = d.listToArray(g.querySelectorAll("script")),
                        m = d.listToArray(g.querySelectorAll("div")),
                        n = [],
                        u = [],
                        t = d.listToArray(g.querySelectorAll("yatag")),
                        v = d.listToArray(g.querySelectorAll("yatag yatag"));
                    c("yandex", t.filter(function (a) {
                        return -1 === v.indexOf(a)
                    }));
                    c("adriver", k.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf(".adriver.ru/")
                    }));
                    c("adfox", k.filter(function (a) {
                        return (a = a.id) && -1 < a
                            .toLowerCase()
                            .indexOf("adfox")
                    }));
                    c("adfox", h.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf("/banners.adfox.ru/")
                    }));
                    c("adfox", m.filter(function (a) {
                        return -1 < a
                            .id
                            .indexOf("AdFox_banner_")
                    }));
                    f && h
                        .filter(function (a) {
                            return (a = a.src) && -1 < a.indexOf(".adfox.ru/")
                        })
                        .length && u.push("adfox");
                    k
                        .filter(function (a) {
                            return e.isGoogleSrc(a.src)
                        })
                        .forEach(function (a) {
                            n.push({provider: "google", element: a})
                        });
                    f && l
                        .filter(function (a) {
                            return e.isGoogleSrc(a.src)
                        })
                        .length && u.push("google");
                    c("awaps", k.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf("awaps.yandex.net/")
                    }));
                    c("criteo", k.filter(function (a) {
                        var b = a.src;
                        a = a.id;
                        return b && (
                            -1 < b.indexOf(".criteo.com/") || a && -1 < a.indexOf("cto_iframe_")
                        )
                            ? !0
                            : !1
                    }));
                    return {adElements: n, iframeProviders: u}
                }
            }
        })
    }, "", !0)();
    var Pb = {
            init: function (a, b) {
                if (Math.random() < (b || .005) && !t.get("adDetect")) {
                    t.set("adDetect", !0);
                    var c = function (b) {
                        var c = g
                            .Ya
                            .AdDetector
                            .detectAd();
                        var d = c.window;
                        var e = c.page;
                        a.sendParams({
                            __ym: {
                                ads: {
                                    w: {
                                        t: d.top,
                                        l: d.left,
                                        w: d.width,
                                        h: d.height
                                    },
                                    p: {
                                        w: e.width,
                                        h: e.height
                                    },
                                    a: f.map(function (a) {
                                        return {t: a.top, l: a.left, w: a.width, h: a.height, p: a.provider}
                                    }, c.ads),
                                    full: b
                                        ? 1
                                        : 0
                                }
                            }
                        })
                    };
                    var d = v(function () {
                        k.un(g, "load", d);
                        c(!0)
                    }, "", !0);
                    k.on(g, "load", d);
                    f.setTimeout(c, 1E4, "AdDetector", !0)
                }
            }
        },
        nb = B.inherit({
            message: g.postMessage,
            spliter: ":",
            nameSpace: "__yminfo",
            pending: {},
            childs: {},
            parents: {},
            dataToSend: {
                parents: [],
                childs: []
            },
            checkFrame: function (a) {
                try {
                    var b = a && a.postMessage
                } catch (c) {
                    return !1
                }
                return b
            },
            checkParentData: function (a, b) {
                f.arrayEvery(this.dataToSend.parents, function (c) {
                    -1 == f.arrayIndexOf(c.tryTo, b.counterId) && (
                        c.tryTo.push(b.counterId),
                        f.mixin(c.data, {toCounter: b.counterId}),
                        this.sendToIframe(a, c.data, function () {
                            c
                                .sendedTo
                                .push(b.counterId);
                            c.callback && c.callback(b)
                        })
                    );
                    return !0
                }, this)
            },
            getHandlers: function () {
                return {
                    initToChild: [
                        {
                            fn: function (a, b) {
                                a.source === g.top && this.trigger("parentConnect", a, b)
                            }
                        }
                    ],
                    initToParent: [
                        {
                            fn: function (a, b) {
                                this.childs[b.counterId] = {
                                    info: b,
                                    window: a.source
                                }
                            }
                        }
                    ],
                    parentConnect: [
                        {
                            fn: function (a, b) {
                                this.parents[b.counterId] = {
                                    info: b,
                                    window: a.source
                                };
                                this.checkParentData(a.source, b)
                            }
                        }
                    ]
                }
            },
            genMessage: function (a, b) {
                var c = {
                    date: w.getMs(),
                    key: Math.random(),
                    dir: 0
                };
                b && (c = {
                    date: b[0],
                    key: b[1],
                    dir: b[2]
                });
                f.mixin(a, {
                    counterId: this.counterId,
                    hid: this.hid
                });
                var d = {
                    data: a
                };
                d[this.nameSpace] = [this.nameSpace, c.date, c.key, c.dir].join(this.spliter);
                return {meta: c, string: Y.stringify(d)}
            },
            sendToIframe: function (a, b, c, d) {
                b = this.genMessage(b);
                var e = this,
                    g = [b.meta.date, b.meta.key].join(this.spliter);
                this.checkFrame(a) && (
                    a.postMessage(b.string, "*"),
                    this.pending[g] = f.bind(c, d || this),
                    f.setTimeout(function () {
                        delete e.pending[g]
                    }, 5E3, this, "fc.toSendToIframe")
                )
            },
            sendToParents: function (a, b, c) {
                var d = this
                    .dataToSend
                    .parents
                    .push({
                        sendedTo: [],
                        tryTo: [],
                        callback: f.bind(b, c || this),
                        data: a
                    }) - 1;
                f.forEachKey(this.parents, function (a) {
                    this
                        .dataToSend
                        .parents[d]
                        .tryTo
                        .push(a);
                    return 1
                }, this);
                f
                    .keys(this.parents)
                    .length && this.sendToIframe(g.parent, a, function (a) {
                    f.forEachKey(this.parents, function (b) {
                        this
                            .dataToSend
                            .parents[d]
                            .sendedTo
                            .push(b);
                        this
                            .dataToSend
                            .parents[d]
                            .callback && this
                            .dataToSend
                            .parents[d]
                            .callback(a)
                    }, this)
                }, this)
            },
            addHandler: function (a, b, c) {
                this.handlers[a] || (this.handlers[a] = []);
                this
                    .handlers[a]
                    .push({fn: b, ctx: c})
            },
            _initComponent: function () {
                var a = g
                        .document
                        .getElementsByTagName("iframe"),
                    b = 0;
                nb
                    .superclass
                    ._initComponent
                    .apply(this, arguments);
                this.handlers = f.mixin({}, this.getHandlers());
                if (this.message) {
                    for (b = 0; b < a.length; b++) {
                        var c = a[b];
                        (function (a, b) {
                            a.sendToIframe(b.contentWindow, {
                                type: "initToChild"
                            }, function (c) {
                                a.childs[c.counterId] = {
                                    info: c,
                                    window: b.contentWindow
                                }
                            })
                        })(this, c)
                    }
                    n.isIframe() && this.sendToIframe(g.parent, {
                        type: "initToParent"
                    }, function (a) {
                        this.trigger("parentConnect", {
                            source: g.parent
                        }, a)
                    });
                    k.on(g, "message", this.onMessage, this, {
                        passive: !1,
                        name: "FrameConnector"
                    })
                }
            },
            trigger: function (a, b, c) {
                var d = this;
                return f.map(function (a) {
                    a = a
                        .fn
                        .call(a.ctx || d, b, c) || {};
                    return f.mixin(a, {
                        counterId: d.counterId,
                        hid: d.hid
                    })
                }, this.handlers[a])
            },
            DIR_INDEX: 2,
            onMessage: function (a) {
                var b,
                    c = [];
                try {
                    var d = a.data;
                    d = Y.parse(a.data);
                    var e = d[this.nameSpace]
                } catch (u) {
                    return
                }
                if (e && e.substring && e.substring(0, this.nameSpace.length) == this.nameSpace) {
                    for (b = 0; 3 >= b; b++) {
                        var g = f.arrayIndexOf(e, this.spliter);
                        -1 !== g
                            ? c.push(e.substring(0, g))
                            : c.push(e);
                        e = e.substring(g + 1)
                    }
                    b = c.splice(1, 3);
                    if ((d = d.data) && d.type && this.handlers[d.type] && "0" === b[this.DIR_INDEX]) {
                        if (!d.toCounter || d.toCounter === this.counterId) {
                            try {
                                a.source
                            } catch (u) {
                                return
                            }
                            d.counterId && this.checkFrame(a.source) && (
                                g = this.trigger(d.type, a, d),
                                a.source.postMessage(this.genMessage(g, [b[0], b[1], d.counterId]).string, "*")
                            )
                        }
                    } else 
                        b[this.DIR_INDEX] == this.counterId && f.isArray(d) && f.arrayEvery(
                            d,
                            function (a) {
                                return a.counterId && a.hid
                            }
                        ) && (a = this.pending[
                            [
                                b[0], b[1]
                            ].join(this.spliter)
                        ]) && a.apply(this, d)
                }
            }
        }),
        G = D(),
        Aa = w.getTimezone(),
        Ba = w.getTimestamp(),
        U = g.screen,
        Gb = 64,
        wa = n.isIE()
            ? 512
            : 2048,
        Hb = n.isIE()
            ? 512
            : 2048,
        Na = n.isIE()
            ? 100
            : 400,
        kb = 100,
        Wa = "noindex",
        ob = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
        Qb = +new Date,
        Za,
        qa,
        Z = function () {
            return "1077"
        }();
    t
        .init()
        .setSafe("counters", {})
        .setSafe("hitParam", {})
        .setSafe("counterNum", 0)
        .setSafe("dataLayer", [])
        .setSafe("hitId", f.random(1, 1073741824))
        .setSafe("_globalMetrikaHitId", f.random())
        .setSafe("v", Z);
    g.Ya.Metrika = function (a, b, c, d) {
        var e = this;
        return v(function () {
            function m(a) {
                var b = h.referrer || "",
                    c,
                    d;
                if ((new RegExp("^https?://" + G.host + "/")).test(b)) 
                    return !1;
                var e = a.patterns;
                for (c = 0; c < e.length; c++) {
                    var g = new RegExp(e[c], "i");
                    if (b.match(g)) 
                        if (g = a.params || [], g.length) {
                            var k = f.safeDecodeURIComponent((RegExp.$1 || "").replace(/\+/g, "%20"));
                            for (d = 0; d < g.length; d++) 
                                if (k == f.safeDecodeURIComponent(g[d])) 
                                    return !0
                            }
                        else 
                            return !0
                }
                return !1
            }
            function u(a, b) {
                var c = !1,
                    d;
                if (a && "string" != typeof a && a.length) 
                    for (d = 0; d < a.length; d++) {
                        var e = a[d].selector;
                        var f = a[d].text;
                        var g = e.charAt(0);
                        e = e.slice(1);
                        if ("#" == g) {
                            if (g = h.getElementById(e)) 
                                c = !0,
                                b && fa.unshift([g, g.innerHTML]),
                                g.innerHTML = f
                        } else if ("." == g) 
                            for (g = l.getElementsByClassName(e), e = 0; e < g.length; e++) {
                                c = !0;
                                var k = g[e],
                                    y = f;
                                b && fa.unshift([k, k.innerHTML]);
                                k.innerHTML = y
                            }
                        }
                return c
            }
            function r() {
                var a;
                for (a = 0; a < fa.length; a++) 
                    fa[a][0].innerHTML = fa[a][1]
            }
            function I(a, b) {
                var c,
                    d = "";
                a = a && a.replace(/^\?/, "");
                b = b && b.replace(/^#/, "") || "";
                if (a) {
                    var e = a.split("\x26");
                    for (c = 0; c < e.length; c++) {
                        var g = e[c].split("\x3d");
                        "_openstat" === g[0] && (d = g[1])
                    }
                }
                var h = b.split("?");
                for (c = 0; c < h.length; c++) {
                    var k = h[c].split("\x26");
                    for (e = 0; e < k.length; e++) 
                        g = k[e].split("\x3d"),
                        "_openstat" === g[0] && (d = g[1])
                }
                d && (
                    d = -1 < d.indexOf(";")
                        ? f.safeDecodeURIComponent(d)
                        : na.decode(Q.decode(d.replace(/[-*_]/g, function (a) {
                            return {"*": "+", "-": "/", _: "\x3d"}[a] || a
                        })))
                );
                return d && (c = d.split(";"), 4 == c.length)
                    ? {
                        service: c[0],
                        campaign: c[1],
                        ad: c[2],
                        source: c[3]
                    }
                    : null
            }
            function p(a, b) {
                return v(function () {
                    if (!e.isDestructing()) 
                        return a.apply(this, arguments)
                }, b || "")
            }
            function q(y) {
                var A = !1;
                if (t.get("hitParam")[aa]) {
                    if (1 != c || t.get("counters")[aa]) 
                        return !1;
                    A = !0
                }
                t.get("counters")[aa] = e;
                t.get("hitParam")[aa] = 1;
                e._webvisor = z && z.webvisor || !1;
                e._directCampaign = z && z.directCampaign;
                z && z.trackHash && ma(!0);
                if (!A) {
                    sa = new jb({
                        protocol: "https:",
                        globalConfig: t,
                        counterId: a,
                        counterType: c,
                        hid: W,
                        tz: Aa,
                        ts: Ba,
                        url: G.href,
                        enabled: e._webvisor
                    });
                    e.replacePhones();
                    A = new lb({globalConfig: t});
                    var L = function (A) {
                        var L = new Xa({
                                protocol: "https:",
                                counterType: c,
                                counterId: a,
                                trackHash: ba,
                                hitId: W,
                                webvisor: e._webvisor,
                                counter: e,
                                globalConfig: t,
                                counterNum: Ca
                            }),
                            q = {
                                ut: ja,
                                he: z ?~~ z.httpError: 0,
                                ad: 1 == c && g.Ya && g.Ya.Direct,
                                pv: !0,
                                cpf: n.isChromePdf(),
                                saveRef: !0
                            };
                        Za = +new Date;
                        L.sendHit({
                            url: C,
                            referrer: x,
                            title: l.getDocumentTitle(),
                            vParams: b,
                            userParams: Ja,
                            nohit: d,
                            experiments: La,
                            modes: q,
                            visitColor: sa.getVc(),
                            hasPrerender: y,
                            ts: Ba,
                            tz: Aa,
                            callback: function (d, y) {
                                var l;
                                d = d || {};
                                (l = "0" !== d.pcs) || Va.initZZ();
                                d.eu !== E && t.set("isEU", d.eu);
                                pa.init(y);
                                Ob.match();
                                Lb.sync(a, c, l, t);
                                la.log(
                                    "PageView. Counter ",
                                    a,
                                    ". URL: ",
                                    G.href,
                                    ". Referrer: " + h.referrer,
                                    ". Params: ",
                                    b
                                );
                                qa || (qa = +new Date);
                                d.webvisor && (d.webvisor.isEU = t.get("isEU"));
                                if (!e.isDestructing()) {
                                    sa.start(d.webvisor);
                                    var n = d.mp2;
                                    l = new J({counterId: a});
                                    l.erase("mp2_substs");
                                    if (n) {
                                        b : {
                                            var L = n.conditions;
                                            var q;
                                            if (L && L.length) 
                                                for (q = 0; q < L.length; q++) {
                                                    var p = L[q];
                                                    if ("ref" == p.type) 
                                                        p = m(p);
                                                    else if ("adv" == p.type) {
                                                        var H;
                                                        var O = p;
                                                        var v = Ya._metrika.counter._directCampaign;
                                                        var X = O.ServiceNamePattern;
                                                        var w = O.RefererPattern;
                                                        p = v
                                                            ? O.direct_orders
                                                            : O.direct_camp;
                                                        var B = h.referrer,
                                                            z = ca.parse(G.search),
                                                            C = I(G.search, G.hash),
                                                            D = {};
                                                        var x = ["source", "medium", "campaign", "term", "content"];
                                                        for (H = 0; H < x.length; H++) 
                                                            z["utm_" + x[H]] && (D[x[H]] = z["utm_" + x[H]]);
                                                        var F = v
                                                            ? "direct.yandex.ru"
                                                            : C && C.service || D.source;
                                                        H = !1;
                                                        if (!H && X && X.length) 
                                                            for (x = 0; x < X.length; x++) 
                                                                if ((new RegExp(X[x], "i")).test(F)) {
                                                                    H = !0;
                                                                    break
                                                                }
                                                            if (!H && !O.yandex_direct && w && w.length) 
                                                            for (X = 0; X < w.length; X++) 
                                                                if ((new RegExp(w[X], "i")).test(B)) {
                                                                    H = !0;
                                                                    break
                                                                }
                                                            !H && O.google_adwords && z.gclid && (H = !0);
                                                        if (H && p && p.length && (H = !1, v = v || C && C.campaign || D && D.campaign)) 
                                                            for (O = 0; O < p.length; O++) 
                                                                if (p[O] == v) {
                                                                    H = !0;
                                                                    break
                                                                }
                                                            p = H
                                                    } else 
                                                        p = !1;
                                                    if (p) {
                                                        L[q].track_id && l.create("mp2_track", L[q].track_id, 43200);
                                                        break b
                                                    }
                                                }
                                            }
                                        L = l.read("mp2_track");
                                        n = n.substs && n.substs[L];
                                        L && n
                                            ? (l.create("mp2_substs", f.toJSON(n)), l = u(n), e.params(
                                                "__ym",
                                                l
                                                    ? "mp_trackid"
                                                    : "mp_trackid_bad",
                                                L
                                            ))
                                            : r()
                                    } else 
                                        r();
                                    k.on(g, "load", e.replacePhones, e)
                                }
                                e._inited = !0;
                                A && A()
                            }
                        })
                    };
                    A.sync(L)
                }
                B(!1);
                k.on(h, "click", V);
                z && (
                    z.enableAll
                        ? (B(!0), S(!0), U())
                        : (
                            z.clickmap && S(z.clickmap),
                            z.trackLinks && B(z.trackLinks),
                            z.accurateTrackBounce && U(z.accurateTrackBounce)
                        ),
                    new mb({
                        counter: e,
                        counterId: a,
                        globalConfig: t,
                        frameConnector: Sa,
                        prefsEcommerce: z.ecommerce,
                        prefsUseDataLayer: z.useDataLayer
                    }),
                    z.triggerEvent && f.async (function () {
                        F.dispatchCustomEvent("yacounter" + a + "inited")
                    })
                )
            }
            function B(a) {
                var b = {};
                switch (typeof a) {
                    case "string":
                        b.on = !0;
                        break;
                    case "object":
                        b.on = !0;
                        break;
                    case "boolean":
                        b.on = a;
                        break;
                    default:
                        return
                }
                e._trackLinks = b
            }
            function V(a) {
                e._trackLinks && e._trackLinks.on && Z(a)
            }
            function Z(a) {
                var b = yb(a),
                    c;
                if (b) {
                    a = !1;
                    var d = (c = "" + b.href)
                        ? c.split(/\?/)[0]
                        : "";
                    var e = function (a) {
                        var d = fb(b);
                        N.sendClickLink({
                            url: c,
                            title: c === d
                                ? ""
                                : d,
                            modes: a
                        })
                    };
                    if (ob.test(d) || ob.test(c) || gb(c, ha) || gb(d, ha)) 
                        a = !0;
                    var g = l.classNameExists(b, "ym-disable-tracklink");
                    d = l.classNameExists(b, "ym-external-link");
                    g || (
                        g = {
                            ln: !0,
                            dl: a
                        },
                        d
                            ? e(g)
                            : (
                                d = b.hostname || f.parseUrl(b.href).hostname || "",
                                zb(D().hostname, d)
                                    ? a
                                        ? (g.ln = !1, e(g))
                                        : (a = fb(b)) && a != c && Na.set("il", f.trim(a, kb))
                                    : c && -1 != c.search(/^ *(data|javascript):/i) || (g.ut = Wa, e(g))
                            )
                    )
                }
            }
            function S(b) {
                "undefined" === typeof b && (b = !0);
                !0 === b && (b = {});
                e._clickmap && e
                    ._clickmap
                    .destroy();
                b && (e._clickmap = new Nb({
                    globalConfig: t,
                    filter: b.filter,
                    ignoreTags: b.ignoreTags,
                    quota: b.quota,
                    isTrackHash: b.isTrackHash,
                    protocol: "https:",
                    counterId: a,
                    counterType: c,
                    startTime: Qb
                }))
            }
            function da(a, b) {
                function c() {
                    if (!r) {
                        q && f.clearTimeout(q);
                        var c = y
                            ? m
                            : m + +new Date - p;
                        c = b - c;
                        0 > c && (c = 0);
                        q = f.setTimeout(function () {
                            r = !0;
                            e(!1);
                            a()
                        }, c, "trackUserTime")
                    }
                }
                function d() {
                    A || (l = !0, y = !1, A = !0, c())
                }
                function e(a) {
                    var b;
                    for (b = 0; b < t.length; b += 3) 
                        if (a) 
                            k.on(t[b], t[b + 1], t[b + 2], {name: "tabTrack"});
                        else 
                            k.un(t[b], t[b + 1], t[b + 2])
                }
                var l = !1,
                    A = !1,
                    y = !0,
                    m = 0,
                    p = +new Date,
                    q = null,
                    r = !1;
                if (n.isIE()) 
                    f.setTimeout(a, b, "trackUserTime");
                else {
                    var t = [
                        g,
                        "blur",
                        function () {
                            y = l = A = !0;
                            m += +new Date - p;
                            p = +new Date;
                            c()
                        },
                        g,
                        "focus",
                        function () {
                            l || A || (m = 0);
                            p = +new Date;
                            l = A = !0;
                            y = !1;
                            c()
                        },
                        h,
                        "click",
                        d,
                        h,
                        "mousemove",
                        d,
                        h,
                        "keydown",
                        d,
                        h,
                        "scroll",
                        d
                    ];
                    e(!0);
                    c()
                }
            }
            function U(b) {
                "number" !== typeof b && (b = 15E3);
                if (!e._isAccurateTrackBounce) {
                    e._isAccurateTrackBounce = !0;
                    var c = new T({counterId: a});
                    var d = c.get("lastHit");
                    c.set("lastHit", w.getMs());
                    (
                        (c = c.get("lastHit")) && (!d || d < c - 18E5) || !Ab(h.referrer, D().href) || .1 > Math.random()
                    ) && da(function () {
                        e.notBounce()
                    }, b)
                }
            }
            function ia(a) {
                var b = function () {
                    var a = D()
                        .hash
                        .split("#")[1];
                    if ("undefined" == typeof a) 
                        return !1;
                    var b = a.indexOf("?");
                    0 < b && (a = a.substring(0, b));
                    return a
                };
                var c = b();
                (function O() {
                    var d = b();
                    d !== c && (a(), c = d);
                    ta = f.setTimeout(O, 200, "trackHash")
                })()
            }
            function ma(a) {
                if (!1 === a) 
                    ba && (
                        "onhashchange" in g
                            ? k.un(g, "hashchange", ea)
                            : f.clearTimeout(ta),
                        ba = !1
                    );
                else if (a = ea, !ba) {
                    if ("onhashchange" in g) 
                        k.on(g, "hashchange", a);
                    else 
                        ia(a);
                    ba = !0
                }
                N.setTrackHash(ba);
                e._trackHash = ba
            }
            function ea() {
                var a = {
                    ut: ja,
                    ad: 1 == c && g.Ya && g.Ya.Direct,
                    wh: !0,
                    saveRef: !0,
                    pv: !0
                };
                wa = oa.lastReferrer = xa;
                N.sendAjaxHit(
                    {url: D().href, title: l.getDocumentTitle(), referrer: wa, modes: a}
                );
                xa = D().href
            }
            function ua(a, b, c) {
                a = Oa.parseValidate(a, b);
                b = [];
                a && (
                    b.push(a),
                    c = c || {},
                    f.isFunction(c.callback) && (b.push(c.callback), c.ctx && b.push(c.ctx))
                );
                b.length && e
                    .params
                    .apply(e, b)
            }
            var ja = "",
                wa = "",
                xa = oa.lastReferrer = G.href,
                sa;
            t.setSafe("counter", e);
            if ("object" === typeof a) {
                var z = a;
                d = a.defer;
                ja = a.ut;
                c = a.type;
                b = a.params;
                var Ja = a.userParams;
                var La = z.experiments;
                var Ma = z.nck;
                var C = a.url;
                var x = a.referrer;
                a = a.id
            }
            if (!g["disableYaCounter" + a]) {
                ca.parse = function (a, b) {
                    var c = {},
                        d;
                    a = a && a.replace(/^\?/, "") || "";
                    if (a.length) {
                        var e = a.split("\x26");
                        for (d = 0; d < e.length; d++) 
                            if (e[d]) {
                                var g = e[d].split("\x3d");
                                if (g[0]) {
                                    var h = f.safeDecodeURIComponent(g[0]);
                                    g = f.safeDecodeURIComponent((g[1] || "").replace(/\+/g, "%20"));
                                    b && h in c
                                        ? f.isArray(c[h])
                                            ? c[h].push(g)
                                            : c[h] = [c[h], g]
                                        : c[h] = g
                                }
                            }
                        }
                    return c
                };
                var fa = [];
                (function (a) {
                    if (g.performance && "function" === typeof performance.getEntries && (a === E && (a = 1), !(Math.random() >= a))) {
                        a = {
                            1882689622: 1,
                            2318205080: 1,
                            3115871109: 1,
                            3604875100: 1,
                            339366994: 1,
                            2890452365: 1,
                            849340123: 1,
                            173872646: 1,
                            2343947156: 1,
                            655012937: 1,
                            1996539654: 1,
                            2065498185: 1,
                            823651274: 1,
                            12282461: 1,
                            1555719328: 1,
                            1417229093: 1,
                            138396985: 1
                        };
                        var b = performance.getEntries(),
                            c = {},
                            d;
                        for (d = 0; d < b.length; d++) {
                            var e = b[d];
                            var h = e
                                .name
                                .replace(/^https?:\/\//, "")
                                .split("?")[0];
                            var k = f.fnv32a(h);
                            a[k] && !c[h] && (c[h] = {
                                dns: Math.round(e.domainLookupEnd - e.domainLookupStart),
                                tcp: Math.round(e.connectEnd - e.connectStart),
                                duration: Math.round(e.duration),
                                response: Math.round(e.responseEnd - e.requestStart),
                                pages: G.href
                            })
                        }
                        f
                            .keys(c)
                            .length && (new ra).logParams({timings8: c})
                    }
                })(
                    24226447 === a
                        ? 1
                        : .002
                );
                C = C
                    ? C
                    : G.href;
                x = x
                    ? x
                    : h.referrer;
                a = a || 0;
                /^\d+$/.test(a) || (a = 0);
                c = c || 0;
                var aa = a + ":" + c;
                if (t.get("counters")[aa]) 
                    return t.get("counters")[aa];
                var W = t.get("hitId");
                var Sa = new nb({counterId: a, hid: W});
                t.set("counterNum", t.get("counterNum") + 1);
                var Ca = t.get("counterNum");
                Ma || (P.initCookie(), ib.init(t));
                P.retransmit(t);
                var N = new ka({
                    protocol: "https:",
                    counterType: c,
                    counterId: a,
                    hitId: W,
                    counter: e,
                    globalConfig: t,
                    counterNum: Ca
                });
                e.replacePhones = p(function () {
                    var b,
                        c;
                    try {
                        (b = (new J({counterId: a})).read("mp2_substs")) && (c = Y.parse(b)) && u(
                            c,
                            !0
                        )
                    } catch (L) {}
                    return e
                }, "counter.replacePhones");
                e.reachGoal = p(function (b, c, d, f) {
                    2 <= arguments.length && "function" === typeof c && (f = d, d = c, c = E);
                    la.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
                    N.sendGoal(b, {
                        vParams: c,
                        callback: d,
                        ctx: f
                    });
                    return e
                }, "counter.reachGoal");
                e.trackLinks = p(function (a) {
                    B(a);
                    return e
                }, "counter.trackLinks");
                var Na = new T({counterId: a});
                e.hit = p(function (b, c, d, g, h, k) {
                    b
                        ? (
                            f.isObject(c) && (d = c.referer, g = c.params, h = c.callback, k = c.ctx, c = c.title),
                            la.log(
                                "PageView. Counter " + a,
                                ". URL: " + b,
                                ". Referrer: " + d,
                                ". Params: ",
                                g
                            ),
                            N.sendHit({
                                url: b,
                                title: c,
                                referrer: d,
                                vParams: g,
                                callback: h,
                                ctx: k
                            })
                        )
                        : f.warning("Empty hit url");
                    return e
                }, "counter.hit");
                e.params = p(function (b) {
                    var c = arguments.length,
                        d = c,
                        g = []
                            .slice
                            .call(arguments, 0);
                    if (b) {
                        if (1 < arguments.length) {
                            if (f.isFunction(arguments[c - 1])) {
                                var h = arguments[c - 1];
                                d = c - 1
                            } else if (f.isFunction(arguments[c - 2])) {
                                h = arguments[c - 2];
                                var k = arguments[c - 1];
                                d = c - 2
                            }
                            g = []
                                .slice
                                .call(g, 0, d);
                            1 < g.length && (g = [f.array2Props(g)])
                        }
                        c = -1 !== f.arrayIndexOf(f.keys(g[0]), "__ymu");
                        la.log((
                            c
                                ? "User p"
                                : "P"
                        ) + "arams. Counter " + a + ". Params: ", g[0]);
                        N.sendParams(g[0], h, k)
                    } else 
                        f.warning("Wrong params");
                    return e
                }, "counter.params");
                Sa.addHandler("pluginInfo", function () {
                    return z
                }, this);
                Sa.addHandler("parentConnect", function (a, b) {
                    N
                        .paramsQueue
                        .push({
                            __ym: {
                                parentIframe: {
                                    counterId: b.counterId,
                                    hid: b.hid
                                }
                            }
                        })
                }, this);
                e.file = p(function (a, b) {
                    a
                        ? (
                            b = b || {},
                            N.sendFileUpload({url: a, title: b.title, vParams: b.params, callback: b.callback, ctx: b.ctx})
                        )
                        : f.warning("Empty file url");
                    return e
                }, "counter.file");
                e.extLink = p(function (a, b) {
                    a
                        ? (
                            b = b || {},
                            N.sendExtLink({url: a, title: b.title, vParams: b.params, callback: b.callback, ctx: b.ctx})
                        )
                        : f.warning("Empty link");
                    return e
                }, "counter.extLink");
                e.notBounce = p(function (a) {
                    var b = 0;
                    a = a || {};
                    Za && qa && (b = qa - Za);
                    N.sendNotBounce(b, {
                        callback: a.callback,
                        ctx: a.ctx
                    });
                    return e
                }, "counter.notBounce");
                var ha = [];
                e.addFileExtension = p(function (a) {
                    if (!a) 
                        return f.warning("Empty extension"),
                        e;
                    
                    "string" === typeof a
                        ? ha.push(a)
                        : ha = ha.concat(a);
                    return e
                });
                e.clickmap = function (a) {
                    S(a);
                    return e
                };
                e.accurateTrackBounce = p(function (a) {
                    U(a);
                    return e
                });
                var ta = null;
                var ba = !1;
                e.trackHash = p(function (a) {
                    ma(a);
                    return e
                });
                var Oa = {
                    requiredEcommerceFields: [
                        "currency", "goods"
                    ],
                    parseValidate: function (a, b) {
                        var c = this.validate(a, b),
                            d;
                        if (!c.isValid) 
                            return console && console.log(c.message),
                            !1;
                        c = {};
                        c[a] = {};
                        b.currency && (c.currencyCode = b.currency);
                        b.goods && (c[a].products = b.goods);
                        for (d in b) 
                            b.hasOwnProperty(d) && -1 === f.arrayIndexOf(this.requiredEcommerceFields, d) && (
                                c[a].actionField || (c[a].actionField = {}),
                                c[a].actionField[d] = b[d]
                            );
                        return {
                            __ym: {
                                ecommerce: [c]
                            }
                        }
                    },
                    validate: function (a, b) {
                        var c = !1,
                            d = "";
                        if (f.isObject(b)) 
                            switch (a) {
                                case "detail":
                                case "add":
                                case "remove":
                                    f.isArray(b.goods) && b.goods.length
                                        ? (c = f.arrayEvery(b.goods, function (a) {
                                            return f.isObject(a) && (
                                                f.isString(a.id) || f.isNumber(a.id) || f.isString(a.name) || f.isString(a.name)
                                            )
                                        })) || (
                                            d = "All items in 'goods' should be objects and contain 'id' or 'name' field"
                                        )
                                        : d = "Ecommerce data should contain 'goods' non-empty array";
                                    break;
                                case "purchase":
                                    f.isNumber(b.id) || f.isString(b.id)
                                        ? c = !0
                                        : d = "Purchase object should contain string or number 'id' field"
                            }
                        else 
                            d = "Ecommerce data should be an object";
                        return {isValid: c, message: d}
                    }
                };
                e.ecommerceDetail = p(function (a, b) {
                    ua("detail", a, b);
                    return e
                }, "ecommerce.detail");
                e.ecommerceAdd = p(function (a, b) {
                    ua("add", a, b);
                    return e
                }, "ecommerce.add");
                e.ecommerceRemove = p(function (a, b) {
                    ua("remove", a, b);
                    return e
                }, "ecommerce.remove");
                e.ecommercePurchase = p(function (a, b) {
                    ua("purchase", a, b);
                    return e
                }, "ecommerce.purchase");
                e.userParams = p(function (a, b, c) {
                    f.isObject(a)
                        ? e.params({
                            __ymu: a
                        }, b || function () {}, c)
                        : f.warning("Wrong user params");
                    return e
                }, "uparams");
                e.experiments = p(function (a, b, c) {
                    N.sendExperiments({callback: b, ctx: c, experiments: a});
                    return e
                }, "exps");
                e.id = e.setUserID = p(function (a, b, c) {
                    f.isString(a) || f.isNumber(a)
                        ? e.params({
                            __ym: {
                                user_id: a
                            }
                        }, b || function () {}, c)
                        : f.warning("Incorrect user ID");
                    return e
                }, "id");
                var Pa = new J;
                e.getClientID = p(function () {
                    return Pa.read("uid")
                }, "guid");
                e.enableAll = function () {
                    B(!0);
                    S(!0);
                    U();
                    return e
                };
                e.uploadPage = function () {};
                e.destruct = p(function () {
                    e._isDestructing = !0;
                    k.un(h, "click", V);
                    k.un(g, "load", e.replacePhones, e);
                    ma(!1);
                    sa && sa.stop();
                    t.set("stopRecoder", E);
                    t.set("counter", E);
                    S(!1);
                    try {
                        delete g["yaCounter" + a],
                        delete t.get("counters")[aa]
                    } catch (y) {}
                });
                e.isDestructing = function () {
                    return !!e._isDestructing
                };
                Pb.init(N);
                e._performanceTiming = hb;
                if (a) 
                    if ("prerender" === h.webkitVisibilityState) {
                        N.sendPrerenderHit(
                            {url: G.href, title: l.getDocumentTitle(), referrer: h.referrer}
                        );
                        var bb = function () {
                            "prerender" !== h.webkitVisibilityState && (
                                k.un(h, "webkitvisibilitychange", bb),
                                q(!0)
                            )
                        };
                        k.on(h, "webkitvisibilitychange", bb)
                    } else 
                        q(!1)
            }
        }, "init")()
    };
    new Pa({globalConfig: t});
    g.Ya.Metrika.counters = function () {
        var a = [];
        f.forEachKey(t.get("counters"), function (b, c) {
            var d = b.split(":");
            a.push({
                id: +d[0],
                type: +d[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!g.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks && c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    };
    t.setSafe("getCounters", function () {
        var a = [];
        f.forEachKey(t.get("counters"), function (b, c) {
            var d = b.split(":");
            a.push({
                id: +d[0],
                type: +d[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!g.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks && c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    });
    g.ya_cid && Ya.Metrika && new Ya.Metrika(g.ya_cid, g.ya_params, g.ya_class);
    g.ya_cid && !g.ya_hit && (g.ya_hit = function (a, b) {
        Ya._metrika.counter && Ya
            ._metrika
            .counter
            .reachGoal(a, b)
    });
    (function () {
        function a(a) {
            try {
                delete g[a]
            } catch (m) {
                g[a] = E
            }
        }
        var b = g.yandex_metrika_callback,
            c = g.yandex_metrika_callbacks,
            d;
        "function" == typeof b && b();
        if ("object" == typeof c) 
            for (b = 0; b < c.length; b++) 
                if (d = c[b]) 
                    c[b] = null,
                    d();
    a("yandex_metrika_callback");
        a("yandex_metrika_callbacks")
    })();
    g.Ya.Metrika.informer = function (a) {
        var b = !!Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        Ya.Metrika._informer.domain = "informer.yandex.ru";
        b || l.loadScript({src: "https://informer.yandex.ru/metrika/informer.js"})
    };
    k.on(h, "click", v(function (a) {
        var b = F.getTarget(a);
        if (b && "ym-advanced-informer" === b.className) {
            var c = b.getAttribute("data-lang");
            var d = b.getAttribute("data-cid");
            Ya
                .Metrika
                .informer({
                    i: b,
                    id: +d,
                    lang: c
                });
            F.prevent(a)
        }
    }, "adv-inf"), null, {
        passive: !1
    })
})(this, this.document);