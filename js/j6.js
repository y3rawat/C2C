(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["marketing"], {
        83796: (t, e, s) => {
            "use strict";
            s(69146);
            var i = s(3729),
                r = s(36071),
                n = s(59753);
            let a = "row-is-visible";
            (0, r.N7)(".js-type-in, .js-type-in-item", t => {
                (0, i.Gx)(t) || c(t)
            });
            let l = new IntersectionObserver(o, {
                rootMargin: `-${i.Al}% 0% -${i.B2}% 0%`,
                threshold: i.t6
            });

            function o(t) {
                for (let e of t)
                    if (e.isIntersecting ? d(e.target) : c(e.target), e.target.classList.contains("js-type-in-trigger"))
                        for (let t of e.target.querySelectorAll(".js-type-in-item, .js-build-number")) e.isIntersecting ? d(t) : c(t)
            }

            function c(t) {
                if (!t.classList.contains("js-type-in") && !t.classList.contains("js-type-in-trigger")) return;
                let e = t.querySelectorAll(".js-type-row, .js-type-letters");
                for (let t of e) t.classList.contains("js-type-letters") && t.children.length > 0 ? function(t) {
                    let e = t.childNodes;
                    for (let t of e)
                        if ("#text" === t.nodeName) {
                            let e = document.createElement("span");
                            e.textContent = t.textContent, t.replaceWith(e)
                        } let s = t.querySelectorAll("*");
                    for (let t of s) t.classList.add("js-type-letters"), t.style.visibility = "hidden";
                    t.classList.remove("js-type-letters")
                }(t) : (t.style.visibility = "hidden", t.classList.remove(a));
                t.classList.remove(i.$M)
            }

            function d(t) {
                if (t.classList.contains(i.$M) || !t.classList.contains("js-type-in") && !t.classList.contains("js-type-in-trigger")) return;
                t.classList.add(i.$M);
                let e = t.querySelectorAll(".js-type-row, .js-type-letters"),
                    s = Number(t.getAttribute("data-type-delay") || 20),
                    r = Number(t.getAttribute("data-type-row-delay") || 200);
                t.classList.contains("js-build-number") ? setTimeout(() => (function t(e, s, i) {
                    if (i % 1 != 0 ? (s += Math.max(.1, i / 20), s = Number(s.toFixed(1))) : (s += Math.max(1, Number(i / 35)), s = Number(s.toFixed(0))), s > i && (s = i), e.textContent = s.toString(), s >= i) return;
                    let r = Number(e.getAttribute("data-increment-speed") || 75);
                    setTimeout(() => t(e, s, i), r)
                })(t, 0, Number(t.textContent)), s) : setTimeout(() => (function t(e, s, r, n, l) {
                    if (r >= s.length) return;
                    let o = s[r];
                    if (!e.classList.contains(i.$M)) {
                        "" !== n && (o.textContent = n);
                        return
                    }
                    if (o.classList.contains("js-type-row")) {
                        let i = Number(o.getAttribute("data-type-row-delay") || l);
                        o.style.visibility = "visible", o.classList.add(a), r++, setTimeout(() => t(e, s, r, "", i), i);
                        return
                    }
                    "hidden" === o.style.visibility && null != o.textContent && (n = o.textContent, o.textContent = "", o.style.visibility = "visible", o.classList.add("animation-is-typing")), null != o.textContent && n.length > o.textContent.length ? o.textContent = n.substr(0, o.textContent.length + 1) : ++r < s.length && o.classList.remove("animation-is-typing"), setTimeout(() => t(e, s, r, n, l), 20)
                })(t, e, 0, "", r), s)
            }(0, r.N7)(".js-type-in, .js-type-in-trigger", t => {
                if ((0, i.Gx)(t)) {
                    (0, i.L)(t);
                    return
                }
                let e = (0, i.jG)(t);
                if (e.isDefault) return l.observe(t);
                let s = new IntersectionObserver(o, {
                    rootMargin: `-${e.marginTop}% 0% -${e.marginBottom}% 0%`,
                    threshold: e.threshold
                });
                s.observe(t)
            }), (0, n.on)("click", ".js-type-restart", t => {
                let e = t.currentTarget.closest(".js-type-in");
                ! function(t) {
                    c(t), d(t)
                }(e)
            });
            let u = new IntersectionObserver(function(t) {
                for (let e of t)
                    if (e.isIntersecting)
                        for (let t of document.querySelectorAll(".js-scrollnav-item")) t.classList.toggle("selected", t.getAttribute("href") === `#${e.target.id}`)
            }, {
                root: null,
                rootMargin: "0px",
                threshold: .1
            });
            (0, r.N7)(".js-section", t => u.observe(t));
            var h = s(65809),
                g = s(79697);
            let m = "data-analytics-event",
                b = "data-analytics-visible",
                f = `a:not([${m}]), button:not([${m}]), [${m}]`,
                p = `[${b}]`;

            function v(t, e) {
                return t.tagName.toLowerCase() === e
            }

            function y(t) {
                return {
                    text: t.innerText || t.getAttribute("aria-label") || "",
                    target: t.href
                }
            }

            function _(t) {
                let e = t.closest("form");
                return {
                    text: t.innerText || t.getAttribute("aria-label") || "",
                    role: t.getAttribute("type") || t.getAttribute("role") || "button",
                    ...t.value && {
                        value: t.value
                    },
                    ...e && {
                        formAction: e.getAttribute("action") || ""
                    }
                }
            }

            function w(t) {
                let {
                    top: e,
                    left: s
                } = t.getBoundingClientRect(), i = document.body, r = document.documentElement, n = Math.max(i.scrollHeight, i.offsetHeight, r.clientHeight, r.scrollHeight, r.offsetHeight), a = Math.max(i.scrollWidth, i.offsetWidth, r.clientWidth, r.scrollWidth, r.offsetWidth), l = ((e + window.pageYOffset) / n).toFixed(3), o = ((s + window.pageXOffset) / a).toFixed(3);
                return {
                    ref_loc: JSON.stringify({
                        top: l,
                        left: o
                    })
                }
            }

            function j(t) {
                if (!t) return {};
                let e = JSON.parse(t),
                    {
                        category: s,
                        action: i,
                        label: r
                    } = e;
                return {
                    category: s,
                    action: i,
                    ... function(t) {
                        if (!t) return {};
                        let e = {},
                            s = t.split(";").map(t => t.trim());
                        for (let t of s) {
                            let [s, i] = t.split(":");
                            s && (e[s.trim()] = i?.trim() || s.trim())
                        }
                        return e
                    }(r)
                }
            }(0, n.on)("click", f, t => {
                if (t && t.currentTarget) try {
                    (0, g.qP)("analytics.click", function(t) {
                        return {
                            ...v(t, "a") && y(t),
                            ...v(t, "button") && _(t),
                            ...w(t),
                            ...j(t.getAttribute(m))
                        }
                    }(t.currentTarget)), v(t.currentTarget, "details") && t.currentTarget.removeAttribute(m)
                } catch (t) {
                    (0, h.eK)(t)
                }
            });
            let L = new IntersectionObserver(function(t) {
                for (let s of t)
                    if (s.isIntersecting) try {
                        var e;
                        (0, g.qP)("analytics.visible", (e = s.target, {
                            ...v(e, "a") && y(e),
                            ...v(e, "button") && _(e),
                            ...w(e),
                            ...j(e.getAttribute(b))
                        })), L.unobserve(s.target)
                    } catch (t) {
                        (0, h.eK)(t)
                    }
            }, {
                rootMargin: "0% 0% -30% 0%",
                threshold: 0
            });
            (0, r.N7)(p, t => {
                L.observe(t)
            });
            let A = class SlideShow extends HTMLElement {
                onTouchStart(t) {
                    this.touchStartX = t.changedTouches[0].screenX
                }
                onTouchEnd(t) {
                    this.touchEndX = t.changedTouches[0].screenX, this.touchEndX < this.touchStartX - this.swipeLengthMod && (this.pause(), this.nextSlide()), this.touchEndX > this.touchStartX + this.swipeLengthMod && (this.pause(), this.prevSlide())
                }
                pause() {
                    this.interval && window.clearInterval(this.interval)
                }
                play() {
                    this.pause(), this.interval = window.setInterval(this.nextSlide.bind(this), this.intervalTime)
                }
                nextSlide() {
                    this.current++, this.current > this.slideIds.length - 1 && (this.current = 0), this.goToSlide(this.slideIds[this.current])
                }
                prevSlide() {
                    this.current--, this.current < 0 && (this.current = this.slideIds.length - 1), this.goToSlide(this.slideIds[this.current])
                }
                bulletOnClick(t) {
                    t.preventDefault();
                    let e = t.target,
                        s = e?.getAttribute("aria-controls");
                    s && this.goToSlide(s), this.pause()
                }
                goToSlide(t) {
                    let e = this.querySelector(`.js-slide-show-slide[id="${t}"]`),
                        s = this.querySelector(`.js-slide-show-bullet[aria-controls="${t}"]`),
                        i = this.querySelectorAll(`.js-slide-show-goto[aria-controls="${t}"]`),
                        r = this.querySelector('.js-slide-show-slide:not([aria-hidden="true"])'),
                        n = this.querySelector('.js-slide-show-bullet[aria-selected="true"]'),
                        a = this.querySelectorAll('.js-slide-show-goto[aria-selected="true"]');
                    r?.setAttribute("aria-hidden", "true"), n?.setAttribute("aria-selected", "false");
                    for (let t = 0; t < a.length; t++) {
                        let e = a[t];
                        e.setAttribute("aria-selected", "false")
                    }
                    e?.removeAttribute("aria-hidden"), s?.setAttribute("aria-selected", "true");
                    for (let t = 0; t < i.length; t++) {
                        let e = i[t];
                        e.setAttribute("aria-selected", "true")
                    }
                }
                constructor() {
                    super();
                    let t = this.getAttribute("data-slide-show-autoplay"),
                        e = this.getAttribute("data-threshold") || "0.2";
                    if (this.intervalTime = 6e3, this.bullets = this.querySelectorAll(".js-slide-show-bullet[aria-controls]"), this.gotos = this.querySelectorAll(".js-slide-show-goto[aria-controls]"), this.slideIds = [], this.interval = null, this.current = 0, this.currentSlideId = null, this.swipeArea = this.querySelector(".js-slide-show-swipe-area"), this.touchStartX = 0, this.touchEndX = 0, this.swipeLengthMod = 20, t && !(0, i.Gx)(this)) {
                        let s = parseInt(t, 10);
                        isNaN(s) || (this.intervalTime = s);
                        let i = new IntersectionObserver(t => {
                            for (let e of t) {
                                let t = e.target;
                                e.isIntersecting ? t.play() : t.pause()
                            }
                        }, {
                            threshold: Number(e)
                        });
                        i.observe(this)
                    }
                    for (let t = 0; t < this.bullets.length; t++) {
                        let e = this.bullets[t],
                            s = e.getAttribute("aria-controls"),
                            i = e.getAttribute("aria-selected");
                        s && this.slideIds.push(s), i && (this.current = t, this.currentSlideId = s), e.addEventListener("click", this.bulletOnClick.bind(this))
                    }
                    for (let t = 0; t < this.gotos.length; t++) {
                        let e = this.gotos[t],
                            s = e.getAttribute("aria-controls");
                        this.currentSlideId === s && e.setAttribute("aria-selected", "true"), e.addEventListener("click", this.bulletOnClick.bind(this))
                    }
                    this.swipeArea && (this.swipeArea.addEventListener("touchstart", this.onTouchStart.bind(this), {
                        passive: !0
                    }), this.swipeArea.addEventListener("touchend", this.onTouchEnd.bind(this)))
                }
            };
            window && "customElements" in window && !window.customElements.get("slide-show") && window.customElements.define("slide-show", A), s(46783), (0, n.on)("focusout", ".js-toggler-container", function(t) {
                t.relatedTarget instanceof Element && (t.relatedTarget.closest(".js-toggler-container") || t.currentTarget.classList.remove("on"))
            }), (0, n.on)("click", ".sub-nav-mktg.on", t => {
                let e = t.currentTarget,
                    s = e.querySelector(".sub-nav-mktg-wrapper");
                s.contains(t.target) || e.classList.remove("on")
            }), (0, n.on)("click", ".sub-nav-mktg.scrollnav.on .sub-nav-mktg-link", t => {
                t.currentTarget.closest(".sub-nav-mktg").classList.remove("on")
            }), (0, n.on)("click", ".sub-nav-mktg:not(.on) .sub-nav-mktg-link", t => {
                window.innerWidth >= 1280 || (t.preventDefault(), t.currentTarget.closest(".sub-nav-mktg").classList.add("on"))
            }), (0, n.on)("click", ".js-video-play, .js-video-close", function(t) {
                let e = t.currentTarget,
                    s = e.closest(".js-video-container"),
                    i = s.querySelector(".js-video");
                "details" === s.tagName.toLowerCase() && s.addEventListener("details-dialog-close", function() {
                        i instanceof HTMLIFrameElement && i.removeAttribute("src"), i instanceof HTMLMediaElement && i.pause(), window.setTimeout(function() {
                            s.classList.remove("is-expanded")
                        }, 10)
                    }), s.classList.contains("is-expanded") ? (i instanceof HTMLIFrameElement && i.removeAttribute("src"), s.classList.remove("is-expanded"), i instanceof HTMLMediaElement && i.pause()) : (i instanceof HTMLIFrameElement && (i.src = i.getAttribute("data-src") || ""), i instanceof HTMLMediaElement && i.play(), s.classList.add("is-expanded")),
                    function(t, e = 0) {
                        let s = t.getBoundingClientRect(),
                            i = s.top - e,
                            r = s.bottom - window.innerHeight + e;
                        i < 0 ? window.scrollBy(0, i) : r > 0 && window.scrollBy(0, r)
                    }(i, 20)
            });
            var S = s(76006);
            (0, S.nW)("audio-player", () => s.e("app_assets_modules_marketing_audio-player_ts").then(s.bind(s, 93536))), (0, S.nW)("before-after", () => s.e("app_assets_modules_marketing_before-after_ts").then(s.bind(s, 96585))), (0, S.nW)("card-skew", () => s.e("app_assets_modules_marketing_card-skew_ts").then(s.bind(s, 10418))), (0, S.nW)("confetti-container", () => s.e("app_assets_modules_marketing_confetti-on-scroll_ts-_383b1").then(s.bind(s, 23513))), (0, S.nW)("segmented-nav", () => s.e("app_assets_modules_marketing_segmented-nav_ts").then(s.bind(s, 16006))), (0, S.nW)("story-body", () => s.e("app_assets_modules_marketing_story-body-element_ts").then(s.bind(s, 6864))), (0, S.nW)("testimonials-carousel", () => s.e("app_assets_modules_marketing_testimonials-carousel-element_ts").then(s.bind(s, 8725))), (0, S.nW)("unveil-container", () => s.e("app_assets_modules_marketing_unveil_ts").then(s.bind(s, 7753))), (0, S.nW)("video-player", () => s.e("app_assets_modules_marketing_video-player_ts").then(s.bind(s, 32603)))
        },
        3729: (t, e, s) => {
            "use strict";
            s.d(e, {
                $M: () => r,
                Al: () => l,
                B2: () => a,
                Gx: () => u,
                L: () => h,
                jG: () => g,
                t6: () => o
            });
            var i = s(36071);
            let r = "build-in-animate",
                n = "build-in-reduced",
                a = 30,
                l = 0,
                o = 0;
            (0, i.N7)(".js-build-in-trigger[data-build-in-stagger], .js-build-in-group[data-build-in-stagger]", t => {
                let e = parseInt(t.getAttribute("data-build-in-stagger")),
                    s = t.querySelectorAll(".js-build-in-item");
                for (let t = 0; t < s.length; t++) s[t].style.transitionDelay = `${t*e}ms`
            });
            let c = new IntersectionObserver(d, {
                rootMargin: `-${l}% 0% -${a}% 0%`,
                threshold: o
            });

            function d(t) {
                for (let e of t)
                    if (e.target.classList.toggle(r, e.isIntersecting), e.target.classList.contains("js-build-in-trigger"))
                        for (let t of e.target.querySelectorAll(".js-build-in-item")) t.classList.toggle(r, e.isIntersecting)
            }

            function u(t) {
                let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
                    s = t.getAttribute("data-build-non-decorative") || "false";
                return e.matches && "false" === s
            }

            function h(t) {
                for (let e of (t.classList.add(n), t.classList.add(r), t.querySelectorAll(".js-build-in-item, .js-type-in-item"))) e.classList.add(n), e.classList.add(r)
            }

            function g(t) {
                let e = Number(t.getAttribute("data-build-margin-bottom") || a),
                    s = Number(t.getAttribute("data-build-margin-top") || l),
                    i = Number(t.getAttribute("data-build-threshold") || o);
                return {
                    marginBottom: e,
                    marginTop: s,
                    threshold: i,
                    isDefault: e === a && s === l && i === o
                }
            }(0, i.N7)(".js-build-in-item[data-build-delay]", t => {
                let e = Number(t.getAttribute("data-build-delay") || 0);
                t instanceof HTMLElement && (t.style.transitionDelay = `${e}ms`)
            }), (0, i.N7)(".js-build-in, .js-build-in-trigger", t => {
                if (u(t)) {
                    h(t);
                    return
                }
                let e = g(t);
                if (e.isDefault) return c.observe(t);
                let s = new IntersectionObserver(d, {
                    rootMargin: `-${e.marginTop}% 0% -${e.marginBottom}% 0%`,
                    threshold: e.threshold
                });
                s.observe(t)
            }), (0, i.N7)(".js-viewport-aware-video", {
                constructor: HTMLMediaElement,
                add(t) {
                    if (t.addEventListener("click", () => {
                            t.classList.toggle("looping-paused-mktg", !t.paused), t.paused ? t.play() : t.pause()
                        }), u(t)) {
                        t.pause(), t.classList.add("looping-paused-mktg");
                        return
                    }
                    let e = t.getAttribute("data-threshold") || o,
                        s = t.getAttribute("data-build-margin-bottom") || 20,
                        i = new IntersectionObserver(e => {
                            for (let s of e) s.isIntersecting ? t.play() : t.pause()
                        }, {
                            rootMargin: `-${l}% 0% -${s}% 0%`,
                            threshold: Number(e)
                        });
                    i.observe(t)
                }
            })
        },
        46783: () => {
            if (window.location.hash) {
                let t = document.querySelector(`.faq-mktg-item${window.location.hash} details`);
                t && (t.open = !0)
            }
        },
        69146: () => {
            new class QueryParamOverrider {
                collectParams() {
                    for (let t of this.paramsToOverride) {
                        let e = RegExp(`${t}=([^=&]*)`, "i"),
                            s = e.exec(this.queryString);
                        e.lastIndex = 0, s && s[1] && (this.collectedParamsMap[t] = s[1], this.collectedParams.push(`${t}=${s[1]}`))
                    }
                }
                overrideParams(t) {
                    let e = t.getAttribute("href"),
                        s = "";
                    if (!(!e || /^javascript:|^mailto:|^tel:|^#/.test(e))) {
                        if (-1 !== e.indexOf("#")) {
                            let t = e.split("#");
                            if (2 !== t.length) return;
                            t[0] && (e = t[0]), t[1] && (s = `#${t[1]}`)
                        }
                        if (-1 === e.indexOf("?")) e += `?${this.collectedParams.join("&")}`;
                        else
                            for (let t of this.paramsToOverride) {
                                if (!this.collectedParamsMap.hasOwnProperty(t)) continue;
                                let s = RegExp(`${t}=([^=&]*)`, "i"),
                                    i = s.exec(e);
                                if (s.lastIndex = 0, !i) {
                                    this.collectedParamsMap.hasOwnProperty(t) && (e += `&${t}=${this.collectedParamsMap[t]}`);
                                    continue
                                }
                                e = e.replace(s, `${t}=${this.collectedParamsMap[t]}`)
                            }
                        e += s, t.setAttribute("data-override-applied", "true"), t.setAttribute("href", e)
                    }
                }
                eventReaction(t) {
                    let e = t.target;
                    !e || "A" !== e.tagName || e.hasAttribute("data-override-applied") || this.overrideParams(e)
                }
                bindEvents() {
                    document.body.addEventListener("mouseenter", this.eventReaction.bind(this), !0), document.body.addEventListener("touchstart", this.eventReaction.bind(this), {
                        passive: !0,
                        capture: !0
                    })
                }
                constructor() {
                    if (this.paramsToOverride = ["utm_campaign", "utm_medium", "utm_source", "ocid"], this.queryString = document.location.search, this.collectedParamsMap = {}, this.collectedParams = [], this.queryRe = RegExp(`(${this.paramsToOverride.join("|")})=([^=&]*)`, "gi"), !this.queryString || !this.queryRe.test(this.queryString)) return;
                    this.collectParams(), this.bindEvents()
                }
            }
        },
        79697: (t, e, s) => {
            "use strict";
            let i;
            s.d(e, {
                YT: () => h,
                qP: () => g,
                yM: () => m
            });
            var r = s(88149),
                n = s(86058),
                a = s(56363),
                l = s(43786);
            let {
                getItem: o
            } = (0, a.Z)("localStorage"), c = "dimension_", d = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "scid"];
            try {
                let t = (0, r.n)("octolytics");
                delete t.baseContext, i = new n.R(t)
            } catch (t) {}

            function u(t) {
                let e = (0, r.n)("octolytics").baseContext || {};
                if (e)
                    for (let [t, s] of(delete e.app_id, delete e.event_url, delete e.host, Object.entries(e))) t.startsWith(c) && (e[t.replace(c, "")] = s, delete e[t]);
                let s = document.querySelector("meta[name=visitor-payload]");
                if (s) {
                    let t = JSON.parse(atob(s.content));
                    Object.assign(e, t)
                }
                let i = new URLSearchParams(window.location.search);
                for (let [t, s] of i) d.includes(t.toLowerCase()) && (e[t] = s);
                return e.staff = (0, l.B)().toString(), Object.assign(e, t)
            }

            function h(t) {
                i?.sendPageView(u(t))
            }

            function g(t, e = {}) {
                let s = document.head?.querySelector('meta[name="current-catalog-service"]')?.content,
                    r = s ? {
                        service: s
                    } : {};
                for (let [t, s] of Object.entries(e)) null != s && (r[t] = `${s}`);
                if (i) {
                    let e = t || "unknown";
                    u(r), i.sendEvent(e, u(r))
                }
            }

            function m(t) {
                return Object.fromEntries(Object.entries(t).map(([t, e]) => [t, JSON.stringify(e)]))
            }
        }
    },
    t => {
        var e = e => t(t.s = e);
        t.O(0, ["vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183", "vendors-node_modules_github_selector-observer_dist_index_esm_js", "vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-b4a243", "ui_packages_failbot_failbot_ts"], () => e(83796)), t.O()
    }
]);
//# sourceMappingURL=marketing-aeebdd7ddb81.js.map