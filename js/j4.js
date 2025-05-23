"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["vendors-node_modules_github_selector-observer_dist_index_esm_js"], {
        36071: (e, t, r) => {
            r.d(t, {
                N7: () => F
            });
            var n = r(8439),
                o = null,
                i = null,
                s = [];

            function a(e, t) {
                var r = [];

                function n() {
                    var e = r;
                    r = [], t(e)
                }
                return function() {
                    for (var t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                    r.push(o), 1 === r.length && l(e, n)
                }
            }

            function l(e, t) {
                i || (i = new MutationObserver(c)), o || (o = e.createElement("div"), i.observe(o, {
                    attributes: !0
                })), s.push(t), o.setAttribute("data-twiddle", "" + Date.now())
            }

            function c() {
                var e = s;
                s = [];
                for (var t = 0; t < e.length; t++) try {
                    e[t]()
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    }, 0)
                }
            }
            var u = new WeakMap,
                d = new WeakMap,
                f = new WeakMap,
                h = new WeakMap;

            function v(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r],
                        o = n[0],
                        i = n[1],
                        s = n[2];
                    o === g ? (function(e, t) {
                        if (t instanceof e.elementConstructor) {
                            var r = u.get(t);
                            if (r || (r = [], u.set(t, r)), -1 === r.indexOf(e.id)) {
                                var n = void 0;
                                if (e.initialize && (n = e.initialize.call(void 0, t)), n) {
                                    var o = d.get(t);
                                    o || (o = {}, d.set(t, o)), o["" + e.id] = n
                                }
                                r.push(e.id)
                            }
                        }
                    }(s, i), function(e, t) {
                        if (t instanceof e.elementConstructor) {
                            var r = h.get(t);
                            if (r || (r = [], h.set(t, r)), -1 === r.indexOf(e.id)) {
                                e.elements.push(t);
                                var n = d.get(t),
                                    o = n ? n["" + e.id] : null;
                                if (o && o.add && o.add.call(void 0, t), e.subscribe) {
                                    var i = e.subscribe.call(void 0, t);
                                    if (i) {
                                        var s = f.get(t);
                                        s || (s = {}, f.set(t, s)), s["" + e.id] = i
                                    }
                                }
                                e.add && e.add.call(void 0, t), r.push(e.id)
                            }
                        }
                    }(s, i)) : o === y ? p(s, i) : o === w && function(e, t) {
                        var r = h.get(t);
                        if (r) {
                            for (var n = r.slice(0), o = 0; o < n.length; o++) {
                                var i = e[n[o]];
                                if (i) {
                                    var s = i.elements.indexOf(t); - 1 !== s && i.elements.splice(s, 1);
                                    var a = d.get(t),
                                        l = a ? a["" + i.id] : null;
                                    l && l.remove && l.remove.call(void 0, t);
                                    var c = f.get(t),
                                        u = c ? c["" + i.id] : null;
                                    u && u.unsubscribe && u.unsubscribe(), i.remove && i.remove.call(void 0, t)
                                }
                            }
                            h.delete(t)
                        }
                    }(e.observers, i)
                }
            }

            function p(e, t) {
                if (t instanceof e.elementConstructor) {
                    var r = h.get(t);
                    if (r) {
                        var n = e.elements.indexOf(t);
                        if (-1 !== n && e.elements.splice(n, 1), -1 !== (n = r.indexOf(e.id))) {
                            var o = d.get(t),
                                i = o ? o["" + e.id] : null;
                            if (i && i.remove && i.remove.call(void 0, t), e.subscribe) {
                                var s = f.get(t),
                                    a = s ? s["" + e.id] : null;
                                a && a.unsubscribe && a.unsubscribe()
                            }
                            e.remove && e.remove.call(void 0, t), r.splice(n, 1)
                        }
                        0 === r.length && h.delete(t)
                    }
                }
            }
            var m = null;

            function b(e) {
                return "matches" in e || "webkitMatchesSelector" in e || "mozMatchesSelector" in e || "oMatchesSelector" in e || "msMatchesSelector" in e
            }
            var g = 1,
                y = 2,
                w = 3;

            function S(e, t, r) {
                for (var n = 0; n < r.length; n++) {
                    var o = r[n];
                    if (b(o))
                        for (var i = e.selectorSet.matches(o), s = 0; s < i.length; s++) {
                            var a = i[s].data;
                            t.push([g, o, a])
                        }
                    if ("querySelectorAll" in o)
                        for (var l = e.selectorSet.queryAll(o), c = 0; c < l.length; c++)
                            for (var u = l[c], d = u.data, f = u.elements, h = 0; h < f.length; h++) t.push([g, f[h], d])
                }
            }

            function x(e, t, r) {
                if (b(r))
                    for (var n = e.selectorSet.matches(r), o = 0; o < n.length; o++) {
                        var i = n[o].data;
                        t.push([g, r, i])
                    }
                if ("querySelectorAll" in r) {
                    var s = h.get(r);
                    if (s)
                        for (var a = 0; a < s.length; a++) {
                            var l = e.observers[s[a]];
                            l && !e.selectorSet.matchesSelector(r, l.selector) && t.push([y, r, l])
                        }
                }
            }
            var A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                O = 0;

            function k(e) {
                var t, r, o;
                this.rootNode = 9 === e.nodeType ? e.documentElement : e, this.ownerDocument = 9 === e.nodeType ? e : e.ownerDocument, this.observers = [], this.selectorSet = new n.Z, this.mutationObserver = new MutationObserver(C.bind(this, this)), this._scheduleAddRootNodes = a(this.ownerDocument, N.bind(this, this)), this._handleThrottledChangedTargets = a(this.ownerDocument, q.bind(this, this)), this.rootNode.addEventListener("change", _.bind(this, this), !1), t = this.ownerDocument, r = M.bind(this, this), "interactive" === (o = t.readyState) || "complete" === o ? l(t, r) : t.addEventListener("DOMContentLoaded", l(t, r))
            }

            function M(e) {
                e.mutationObserver.observe(e.rootNode, {
                    childList: !0,
                    attributes: !0,
                    subtree: !0
                }), e._scheduleAddRootNodes()
            }

            function N(e) {
                var t = [];
                S(e, t, [e.rootNode]), v(e, t)
            }

            function C(e, t) {
                var r = [];
                ! function(e, t, r) {
                    for (var n = 0; n < r.length; n++) {
                        var o = r[n];
                        "childList" === o.type ? (S(e, t, o.addedNodes), function(e, t, r) {
                            for (var n = 0; n < r.length; n++) {
                                var o = r[n];
                                if ("querySelectorAll" in o) {
                                    t.push([w, o]);
                                    for (var i = o.querySelectorAll("*"), s = 0; s < i.length; s++) t.push([w, i[s]])
                                }
                            }
                        }(0, t, o.removedNodes)) : "attributes" === o.type && x(e, t, o.target)
                    }(function(e) {
                        if (null === m) {
                            var t = e.createElement("div"),
                                r = e.createElement("div"),
                                n = e.createElement("div");
                            t.appendChild(r), r.appendChild(n), t.textContent = "", m = n.parentNode !== r
                        }
                        return m
                    })(e.ownerDocument) && function(e, t) {
                        for (var r = 0; r < e.observers.length; r++) {
                            var n = e.observers[r];
                            if (n)
                                for (var o = n.elements, i = 0; i < o.length; i++) {
                                    var s = o[i];
                                    s.parentNode || t.push([w, s])
                                }
                        }
                    }(e, t)
                }(e, r, t), v(e, r)
            }

            function _(e, t) {
                e._handleThrottledChangedTargets(t.target)
            }

            function q(e, t) {
                var r = [];
                ! function(e, t, r) {
                    for (var n = 0; n < r.length; n++)
                        for (var o = r[n], i = o.form ? o.form.elements : e.rootNode.querySelectorAll("input"), s = 0; s < i.length; s++) x(e, t, i[s])
                }(e, r, t), v(e, r)
            }
            k.prototype.disconnect = function() {
                this.mutationObserver.disconnect()
            }, k.prototype.observe = function(e, t) {
                var r = void 0;
                "function" == typeof t ? r = {
                    selector: e,
                    initialize: t
                } : (void 0 === t ? "undefined" : A(t)) === "object" ? (r = t).selector = e : r = e;
                var n = this,
                    o = {
                        id: O++,
                        selector: r.selector,
                        initialize: r.initialize,
                        add: r.add,
                        remove: r.remove,
                        subscribe: r.subscribe,
                        elements: [],
                        elementConstructor: r.hasOwnProperty("constructor") ? r.constructor : this.ownerDocument.defaultView.Element,
                        abort: function() {
                            n._abortObserving(o)
                        }
                    };
                return this.selectorSet.add(o.selector, o), this.observers[o.id] = o, this._scheduleAddRootNodes(), o
            }, k.prototype._abortObserving = function(e) {
                for (var t = e.elements, r = 0; r < t.length; r++) p(e, t[r]);
                this.selectorSet.remove(e.selector, e), delete this.observers[e.id]
            }, k.prototype.triggerObservers = function(e) {
                var t = [];
                (function(e, t, r) {
                    if ("querySelectorAll" in r) {
                        x(e, t, r);
                        for (var n = r.querySelectorAll("*"), o = 0; o < n.length; o++) x(e, t, n[o])
                    }
                })(this, t, e), v(this, t)
            };
            var D = void 0;

            function F() {
                var e;
                return (D || (D = new k(window.document)), e = D).observe.apply(e, arguments)
            }
        },
        8439: (e, t, r) => {
            function n() {
                if (!(this instanceof n)) return new n;
                this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            r.d(t, {
                Z: () => n
            });
            var o, i = window.document.documentElement,
                s = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector;
            n.prototype.matchesSelector = function(e, t) {
                return s.call(e, t)
            }, n.prototype.querySelectorAll = function(e, t) {
                return t.querySelectorAll(e)
            }, n.prototype.indexes = [];
            var a = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            n.prototype.indexes.push({
                name: "ID",
                selector: function(e) {
                    var t;
                    if (t = e.match(a)) return t[0].slice(1)
                },
                element: function(e) {
                    if (e.id) return [e.id]
                }
            });
            var l = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            n.prototype.indexes.push({
                name: "CLASS",
                selector: function(e) {
                    var t;
                    if (t = e.match(l)) return t[0].slice(1)
                },
                element: function(e) {
                    var t = e.className;
                    if (t) {
                        if ("string" == typeof t) return t.split(/\s/);
                        if ("object" == typeof t && "baseVal" in t) return t.baseVal.split(/\s/)
                    }
                }
            });
            var c = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            n.prototype.indexes.push({
                name: "TAG",
                selector: function(e) {
                    var t;
                    if (t = e.match(c)) return t[0].toUpperCase()
                },
                element: function(e) {
                    return [e.nodeName.toUpperCase()]
                }
            }), n.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            }, o = "function" == typeof window.Map ? window.Map : function() {
                function e() {
                    this.map = {}
                }
                return e.prototype.get = function(e) {
                    return this.map[e + " "]
                }, e.prototype.set = function(e, t) {
                    this.map[e + " "] = t
                }, e
            }();
            var u = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function d(e, t) {
                var r, n, o, i, s, a, l = (e = e.slice(0).concat(e.default)).length,
                    c = t,
                    d = [];
                do
                    if (u.exec(""), (o = u.exec(c)) && (c = o[3], o[2] || !c)) {
                        for (r = 0; r < l; r++)
                            if (s = (a = e[r]).selector(o[1])) {
                                for (n = d.length, i = !1; n--;)
                                    if (d[n].index === a && d[n].key === s) {
                                        i = !0;
                                        break
                                    } i || d.push({
                                    index: a,
                                    key: s
                                });
                                break
                            }
                    } while (o) return d
            }

            function f(e, t) {
                return e.id - t.id
            }
            n.prototype.logDefaultIndexUsed = function() {}, n.prototype.add = function(e, t) {
                var r, n, i, s, a, l, c, u, f = this.activeIndexes,
                    h = this.selectors;
                if ("string" == typeof e) {
                    for (n = 0, r = {
                            id: this.uid++,
                            selector: e,
                            data: t
                        }, c = d(this.indexes, e); n < c.length; n++) s = (u = c[n]).key, (a = function(e, t) {
                        var r, n, o;
                        for (r = 0, n = e.length; r < n; r++)
                            if (o = e[r], t.isPrototypeOf(o)) return o
                    }(f, i = u.index)) || ((a = Object.create(i)).map = new o, f.push(a)), i === this.indexes.default && this.logDefaultIndexUsed(r), (l = a.map.get(s)) || (l = [], a.map.set(s, l)), l.push(r);
                    this.size++, h.push(e)
                }
            }, n.prototype.remove = function(e, t) {
                if ("string" == typeof e) {
                    var r, n, o, i, s, a, l, c, u = this.activeIndexes,
                        f = {},
                        h = 1 == arguments.length;
                    for (o = 0, r = d(this.indexes, e); o < r.length; o++)
                        for (n = r[o], i = u.length; i--;)
                            if (a = u[i], n.index.isPrototypeOf(a)) {
                                if (l = a.map.get(n.key))
                                    for (s = l.length; s--;)(c = l[s]).selector === e && (h || c.data === t) && (l.splice(s, 1), f[c.id] = !0);
                                break
                            } this.size -= Object.keys(f).length
                }
            }, n.prototype.queryAll = function(e) {
                if (!this.selectors.length) return [];
                var t, r, n, o, i, s, a, l, c = {},
                    u = [],
                    d = this.querySelectorAll(this.selectors.join(", "), e);
                for (t = 0, n = d.length; t < n; t++)
                    for (r = 0, i = d[t], o = (s = this.matches(i)).length; r < o; r++) c[(l = s[r]).id] ? a = c[l.id] : (a = {
                        id: l.id,
                        selector: l.selector,
                        data: l.data,
                        elements: []
                    }, c[l.id] = a, u.push(a)), a.elements.push(i);
                return u.sort(f)
            }, n.prototype.matches = function(e) {
                if (!e) return [];
                var t, r, n, o, i, s, a, l, c, u, d, h = this.activeIndexes,
                    v = {},
                    p = [];
                for (t = 0, o = h.length; t < o; t++)
                    if (l = (a = h[t]).element(e)) {
                        for (r = 0, i = l.length; r < i; r++)
                            if (c = a.map.get(l[r]))
                                for (n = 0, s = c.length; n < s; n++) !v[d = (u = c[n]).id] && this.matchesSelector(e, u.selector) && (v[d] = !0, p.push(u))
                    } return p.sort(f)
            }
        }
    }
]);
//# sourceMappingURL=vendors-node_modules_github_selector-observer_dist_index_esm_js-b6ee7980ee7e.js.map