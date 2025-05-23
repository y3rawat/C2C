"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-b4a243", "vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-978abc0", "vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-978abc1", "vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js"], {
        59753: (e, t, n) => {
            function o() {
                if (!(this instanceof o)) return new o;
                this.size = 0, this.uid = 0, this.selectors = [], this.selectorObjects = {}, this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            n.d(t, {
                f: () => C,
                S: () => S,
                on: () => E
            });
            var r, i = window.document.documentElement,
                a = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector;
            o.prototype.matchesSelector = function(e, t) {
                return a.call(e, t)
            }, o.prototype.querySelectorAll = function(e, t) {
                return t.querySelectorAll(e)
            }, o.prototype.indexes = [];
            var s = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            o.prototype.indexes.push({
                name: "ID",
                selector: function(e) {
                    var t;
                    if (t = e.match(s)) return t[0].slice(1)
                },
                element: function(e) {
                    if (e.id) return [e.id]
                }
            });
            var l = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            o.prototype.indexes.push({
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
            o.prototype.indexes.push({
                name: "TAG",
                selector: function(e) {
                    var t;
                    if (t = e.match(c)) return t[0].toUpperCase()
                },
                element: function(e) {
                    return [e.nodeName.toUpperCase()]
                }
            }), o.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            }, r = "function" == typeof window.Map ? window.Map : function() {
                function e() {
                    this.map = {}
                }
                return e.prototype.get = function(e) {
                    return this.map[e + " "]
                }, e.prototype.set = function(e, t) {
                    this.map[e + " "] = t
                }, e
            }();
            var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function u(e, t) {
                var n, o, r, i, a, s, l = (e = e.slice(0).concat(e.default)).length,
                    c = t,
                    u = [];
                do
                    if (d.exec(""), (r = d.exec(c)) && (c = r[3], r[2] || !c)) {
                        for (n = 0; n < l; n++)
                            if (a = (s = e[n]).selector(r[1])) {
                                for (o = u.length, i = !1; o--;)
                                    if (u[o].index === s && u[o].key === a) {
                                        i = !0;
                                        break
                                    } i || u.push({
                                    index: s,
                                    key: a
                                });
                                break
                            }
                    } while (r) return u
            }

            function f(e, t) {
                return e.id - t.id
            }
            o.prototype.logDefaultIndexUsed = function() {}, o.prototype.add = function(e, t) {
                var n, o, i, a, s, l, c, d, f = this.activeIndexes,
                    h = this.selectors,
                    p = this.selectorObjects;
                if ("string" == typeof e) {
                    for (o = 0, p[(n = {
                            id: this.uid++,
                            selector: e,
                            data: t
                        }).id] = n, c = u(this.indexes, e); o < c.length; o++) a = (d = c[o]).key, (s = function(e, t) {
                        var n, o, r;
                        for (n = 0, o = e.length; n < o; n++)
                            if (r = e[n], t.isPrototypeOf(r)) return r
                    }(f, i = d.index)) || ((s = Object.create(i)).map = new r, f.push(s)), i === this.indexes.default && this.logDefaultIndexUsed(n), (l = s.map.get(a)) || (l = [], s.map.set(a, l)), l.push(n);
                    this.size++, h.push(e)
                }
            }, o.prototype.remove = function(e, t) {
                if ("string" == typeof e) {
                    var n, o, r, i, a, s, l, c, d = this.activeIndexes,
                        f = this.selectors = [],
                        h = this.selectorObjects,
                        p = {},
                        g = 1 == arguments.length;
                    for (r = 0, n = u(this.indexes, e); r < n.length; r++)
                        for (o = n[r], i = d.length; i--;)
                            if (s = d[i], o.index.isPrototypeOf(s)) {
                                if (l = s.map.get(o.key))
                                    for (a = l.length; a--;)(c = l[a]).selector === e && (g || c.data === t) && (l.splice(a, 1), p[c.id] = !0);
                                break
                            } for (r in p) delete h[r], this.size--;
                    for (r in h) f.push(h[r].selector)
                }
            }, o.prototype.queryAll = function(e) {
                if (!this.selectors.length) return [];
                var t, n, o, r, i, a, s, l, c = {},
                    d = [],
                    u = this.querySelectorAll(this.selectors.join(", "), e);
                for (t = 0, o = u.length; t < o; t++)
                    for (n = 0, i = u[t], r = (a = this.matches(i)).length; n < r; n++) c[(l = a[n]).id] ? s = c[l.id] : (s = {
                        id: l.id,
                        selector: l.selector,
                        data: l.data,
                        elements: []
                    }, c[l.id] = s, d.push(s)), s.elements.push(i);
                return d.sort(f)
            }, o.prototype.matches = function(e) {
                if (!e) return [];
                var t, n, o, r, i, a, s, l, c, d, u, h = this.activeIndexes,
                    p = {},
                    g = [];
                for (t = 0, r = h.length; t < r; t++)
                    if (l = (s = h[t]).element(e)) {
                        for (n = 0, i = l.length; n < i; n++)
                            if (c = s.map.get(l[n]))
                                for (o = 0, a = c.length; o < a; o++) !p[u = (d = c[o]).id] && this.matchesSelector(e, d.selector) && (p[u] = !0, g.push(d))
                    } return g.sort(f)
            };
            var h = {},
                p = {},
                g = new WeakMap,
                m = new WeakMap,
                b = new WeakMap,
                y = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function v(e, t, n) {
                var o = e[t];
                return e[t] = function() {
                    return n.apply(e, arguments), o.apply(e, arguments)
                }, e
            }

            function w() {
                g.set(this, !0)
            }

            function _() {
                g.set(this, !0), m.set(this, !0)
            }

            function x() {
                return b.get(this) || null
            }

            function A(e, t) {
                y && Object.defineProperty(e, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: t || y.get
                })
            }

            function k(e) {
                if (function(e) {
                        try {
                            return e.eventPhase, !0
                        } catch (e) {
                            return !1
                        }
                    }(e)) {
                    var t = (1 === e.eventPhase ? p : h)[e.type];
                    if (t) {
                        var n = function(e, t, n) {
                            var o = [],
                                r = t;
                            do {
                                if (1 !== r.nodeType) break;
                                var i = e.matches(r);
                                if (i.length) {
                                    var a = {
                                        node: r,
                                        observers: i
                                    };
                                    n ? o.unshift(a) : o.push(a)
                                }
                            } while (r = r.parentElement) return o
                        }(t, e.target, 1 === e.eventPhase);
                        if (n.length) {
                            v(e, "stopPropagation", w), v(e, "stopImmediatePropagation", _), A(e, x);
                            for (var o = 0, r = n.length; o < r && !g.get(e); o++) {
                                var i = n[o];
                                b.set(e, i.node);
                                for (var a = 0, s = i.observers.length; a < s && !m.get(e); a++) i.observers[a].data.call(i.node, e)
                            }
                            b.delete(e), A(e)
                        }
                    }
                }
            }

            function E(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = !!r.capture,
                    a = i ? p : h,
                    s = a[e];
                s || (s = new o, a[e] = s, document.addEventListener(e, k, i)), s.add(t, n)
            }

            function S(e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    r = !!o.capture,
                    i = r ? p : h,
                    a = i[e];
                a && (a.remove(t, n), a.size || (delete i[e], document.removeEventListener(e, k, r)))
            }

            function C(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }
        },
        76006: (e, t, n) => {
            let o;
            n.d(t, {
                Lj: () => g,
                Ih: () => x,
                P4: () => u,
                nW: () => j,
                fA: () => w,
                GO: () => _
            });
            let r = new WeakSet,
                i = new WeakMap;

            function a(e = document) {
                if (i.has(e)) return i.get(e);
                let t = !1,
                    n = new MutationObserver(e => {
                        for (let t of e)
                            if ("attributes" === t.type && t.target instanceof Element) d(t.target);
                            else if ("childList" === t.type && t.addedNodes.length)
                            for (let e of t.addedNodes) e instanceof Element && s(e)
                    });
                n.observe(e, {
                    childList: !0,
                    subtree: !0,
                    attributeFilter: ["data-action"]
                });
                let o = {
                    get closed() {
                        return t
                    },
                    unsubscribe() {
                        t = !0, i.delete(e), n.disconnect()
                    }
                };
                return i.set(e, o), o
            }

            function s(e) {
                for (let t of e.querySelectorAll("[data-action]")) d(t);
                e instanceof Element && e.hasAttribute("data-action") && d(e)
            }

            function l(e) {
                let t = e.currentTarget;
                for (let n of c(t))
                    if (e.type === n.type) {
                        let o = t.closest(n.tag);
                        r.has(o) && "function" == typeof o[n.method] && o[n.method](e);
                        let i = t.getRootNode();
                        if (i instanceof ShadowRoot && r.has(i.host) && i.host.matches(n.tag)) {
                            let t = i.host;
                            "function" == typeof t[n.method] && t[n.method](e)
                        }
                    }
            }

            function* c(e) {
                for (let t of (e.getAttribute("data-action") || "").trim().split(/\s+/)) {
                    let e = t.lastIndexOf(":"),
                        n = Math.max(0, t.lastIndexOf("#")) || t.length;
                    yield {
                        type: t.slice(0, e),
                        tag: t.slice(e + 1, n),
                        method: t.slice(n + 1) || "handleEvent"
                    }
                }
            }

            function d(e) {
                for (let t of c(e)) e.addEventListener(t.type, l)
            }

            function u(e, t) {
                let n = e.tagName.toLowerCase();
                if (e.shadowRoot) {
                    for (let o of e.shadowRoot.querySelectorAll(`[data-target~="${n}.${t}"]`))
                        if (!o.closest(n)) return o
                }
                for (let o of e.querySelectorAll(`[data-target~="${n}.${t}"]`))
                    if (o.closest(n) === e) return o
            }
            let f = e => String("symbol" == typeof e ? e.description : e).replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/--/g, "-").replace(/^-|-$/, "").toLowerCase(),
                h = (e, t = "property") => {
                    let n = f(e);
                    if (!n.includes("-")) throw new DOMException(`${t}: ${String(e)} is not a valid ${t} name`, "SyntaxError");
                    return n
                },
                p = "attr";

            function g(e, t) {
                v(e, p).add(t)
            }
            let m = new WeakSet;

            function b(e, t) {
                if (m.has(e)) return;
                m.add(e);
                let n = Object.getPrototypeOf(e),
                    o = n?.constructor?.attrPrefix ?? "data-";
                for (let r of (t || (t = v(n, p)), t)) {
                    let t = e[r],
                        n = h(`${o}${r}`),
                        i = {
                            configurable: !0,
                            get() {
                                return this.getAttribute(n) || ""
                            },
                            set(e) {
                                this.setAttribute(n, e || "")
                            }
                        };
                    "number" == typeof t ? i = {
                        configurable: !0,
                        get() {
                            return Number(this.getAttribute(n) || 0)
                        },
                        set(e) {
                            this.setAttribute(n, e)
                        }
                    } : "boolean" == typeof t && (i = {
                        configurable: !0,
                        get() {
                            return this.hasAttribute(n)
                        },
                        set(e) {
                            this.toggleAttribute(n, e)
                        }
                    }), Object.defineProperty(e, r, i), r in e && !e.hasAttribute(n) && i.set.call(e, t)
                }
            }
            let y = Symbol.for("catalyst");
            let CatalystDelegate = class CatalystDelegate {
                constructor(e) {
                    let t = this,
                        n = e.prototype.connectedCallback;
                    e.prototype.connectedCallback = function() {
                        t.connectedCallback(this, n)
                    };
                    let o = e.prototype.disconnectedCallback;
                    e.prototype.disconnectedCallback = function() {
                        t.disconnectedCallback(this, o)
                    };
                    let r = e.prototype.attributeChangedCallback;
                    e.prototype.attributeChangedCallback = function(e, n, o) {
                        t.attributeChangedCallback(this, e, n, o, r)
                    };
                    let i = e.observedAttributes || [];
                    Object.defineProperty(e, "observedAttributes", {
                            configurable: !0,
                            get() {
                                return t.observedAttributes(this, i)
                            },
                            set(e) {
                                i = e
                            }
                        }),
                        function(e) {
                            let t = e.observedAttributes || [],
                                n = e.attrPrefix ?? "data-",
                                o = e => h(`${n}${e}`);
                            Object.defineProperty(e, "observedAttributes", {
                                configurable: !0,
                                get: () => [...v(e.prototype, p)].map(o).concat(t),
                                set(e) {
                                    t = e
                                }
                            })
                        }(e),
                        function(e) {
                            let t = f(e.name).replace(/-element$/, "");
                            try {
                                window.customElements.define(t, e), window[e.name] = customElements.get(t)
                            } catch (e) {
                                if (!(e instanceof DOMException && "NotSupportedError" === e.name)) throw e
                            }
                        }(e)
                }
                observedAttributes(e, t) {
                    return t
                }
                connectedCallback(e, t) {
                    var n, o;
                    e.toggleAttribute("data-catalyst", !0), customElements.upgrade(e), ! function(e) {
                        for (let t of e.querySelectorAll("template[data-shadowroot]")) t.parentElement === e && e.attachShadow({
                            mode: "closed" === t.getAttribute("data-shadowroot") ? "closed" : "open"
                        }).append(t.content.cloneNode(!0))
                    }(e), b(e), r.add(e), e.shadowRoot && (s(o = e.shadowRoot), a(o)), s(e), a(e.ownerDocument), t?.call(e), e.shadowRoot && (s(n = e.shadowRoot), a(n))
                }
                disconnectedCallback(e, t) {
                    t?.call(e)
                }
                attributeChangedCallback(e, t, n, o, r) {
                    b(e), "data-catalyst" !== t && r && r.call(e, t, n, o)
                }
            };

            function v(e, t) {
                if (!Object.prototype.hasOwnProperty.call(e, y)) {
                    let t = e[y],
                        n = e[y] = new Map;
                    if (t)
                        for (let [e, o] of t) n.set(e, new Set(o))
                }
                let n = e[y];
                return n.has(t) || n.set(t, new Set), n.get(t)
            }

            function w(e, t) {
                v(e, "target").add(t), Object.defineProperty(e, t, {
                    configurable: !0,
                    get() {
                        return u(this, t)
                    }
                })
            }

            function _(e, t) {
                v(e, "targets").add(t), Object.defineProperty(e, t, {
                    configurable: !0,
                    get() {
                        return function(e, t) {
                            let n = e.tagName.toLowerCase(),
                                o = [];
                            if (e.shadowRoot)
                                for (let r of e.shadowRoot.querySelectorAll(`[data-targets~="${n}.${t}"]`)) r.closest(n) || o.push(r);
                            for (let r of e.querySelectorAll(`[data-targets~="${n}.${t}"]`)) r.closest(n) === e && o.push(r);
                            return o
                        }(this, t)
                    }
                })
            }

            function x(e) {
                new CatalystDelegate(e)
            }
            let A = new Map,
                k = new Promise(e => {
                    "loading" !== document.readyState ? e() : document.addEventListener("readystatechange", () => e(), {
                        once: !0
                    })
                }),
                E = new Promise(e => {
                    let t = new AbortController;
                    t.signal.addEventListener("abort", () => e());
                    let n = {
                            once: !0,
                            passive: !0,
                            signal: t.signal
                        },
                        o = () => t.abort();
                    document.addEventListener("mousedown", o, n), document.addEventListener("touchstart", o, n), document.addEventListener("keydown", o, n), document.addEventListener("pointerdown", o, n)
                }),
                S = {
                    ready: () => k,
                    firstInteraction: () => E,
                    visible: e => new Promise(t => {
                        let n = new IntersectionObserver(e => {
                            for (let o of e)
                                if (o.isIntersecting) {
                                    t(), n.disconnect();
                                    return
                                }
                        }, {
                            rootMargin: "0px 0px 256px 0px",
                            threshold: .01
                        });
                        for (let t of document.querySelectorAll(e)) n.observe(t)
                    })
                },
                C = new WeakMap;

            function O(e) {
                cancelAnimationFrame(C.get(e) || 0), C.set(e, requestAnimationFrame(() => {
                    for (let t of A.keys()) {
                        let n = e.matches(t) ? e : e.querySelector(t);
                        if (customElements.get(t) || n) {
                            let o = n?.getAttribute("data-load-on") || "ready",
                                r = o in S ? S[o] : S.ready;
                            for (let e of A.get(t) || []) r(t).then(e);
                            A.delete(t), C.delete(e)
                        }
                    }
                }))
            }

            function j(e, t) {
                A.has(e) || A.set(e, new Set), A.get(e).add(t), O(document.body), o || (o = new MutationObserver(e => {
                    if (A.size)
                        for (let t of e)
                            for (let e of t.addedNodes) e instanceof Element && O(e)
                })).observe(document, {
                    subtree: !0,
                    childList: !0
                })
            }
        },
       
        88149: (e, t, n) => {
            n.d(t, {
                n: () => o
            });

            function o(e = "ha") {
                let t;
                let n = {},
                    o = document.head.querySelectorAll(`meta[name^="${e}-"]`);
                for (let r of Array.from(o)) {
                    let {
                        name: o,
                        content: i
                    } = r, a = o.replace(`${e}-`, "").replace(/-/g, "_");
                    "url" === a ? t = i : n[a] = i
                }
                if (!t) throw Error(`AnalyticsClient ${e}-url meta tag not found`);
                return {
                    collectorUrl: t,
                    ...Object.keys(n).length > 0 ? {
                        baseContext: n
                    } : {}
                }
            }
        }
    }
]);
//# sourceMappingURL=vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-b4a243-4ade3e936faf.js.map