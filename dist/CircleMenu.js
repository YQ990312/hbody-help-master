!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.VueCirleMenu = t())
    : (e.VueCirleMenu = t());
})(this, function () {
  return (function (e) {
    function t(n) {
      if (o[n]) return o[n].exports;
      var i = (o[n] = { exports: {}, id: n, loaded: !1 });
      return e[n].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var o = {};
    return (t.m = e), (t.c = o), (t.p = ""), t(0);
  })([
    function (e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = o(7),
        r = n(i);
      e.exports = r.default;
    },
    ,
    function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = o(3);
      t.default = {
        name: "CirleMenu",
        props: {
          type: { type: String, required: !0 },
          number: {
            type: Number,
            required: !0,
            validator: function (e) {
              return e > 1 && e < 5;
            },
          },
          animate: String,
          mask: String,
          circle: Boolean,
          btn: Boolean,
          colors: Array,
        },
        data: function () {
          return {
            open: !1,
            toggleAnimate: !1,
            MaskToggle: !1,
            BtnColor: "",
            Item1Color: "",
            Item2Color: "",
            Item3Color: "",
            Item4Color: "",
          };
        },
        methods: {
          toggle: function () {
            (this.open = !this.open),
              (this.toggleAnimate = !this.toggleAnimate),
              (this.MaskToggle = !this.MaskToggle);
          },
        },
        computed: {
          AnimateClass: function () {
            return this.toggleAnimate ? this.animate : "";
          },
          isShow: function () {
            return 3 !== this.number
              ? 4 === this.number
              : ("middle" !== this.type && "middle-around" !== this.type) ||
                  void console.error(
                    "when type is 'middle' or 'middle-around',this number can not 3 ---VueCircleMenu"
                  );
          },
        },
        mounted: function () {
          if (this.colors)
            if (this.colors.every(n.isColors) && 5 === this.colors.length)
              for (var e = 0, t = this.colors.length; e < t; e++)
                (this.BtnColor = this.colors[0]),
                  (this.Item1Color = this.colors[1]),
                  (this.Item2Color = this.colors[2]),
                  (this.Item3Color = this.colors[3]),
                  (this.Item4Color = this.colors[4]);
            else
              console.error(
                "this Array of colors must be hexcolor or rgbcolor and Array length must be 5 ---VueCircleMenu"
              );
        },
      };
    },
    function (e, t) {
      "use strict";
      function o(e) {
        return n.test(e) || i.test(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isColors = o);
      var n = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/,
        i = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g;
    },
    function (e, t, o) {
      (t = e.exports = o(5)()),
        t.push([
          e.id,
          '.bottom .oy-menu-group .btn-list .oy-menu-item,.left .oy-menu-group .btn-list .oy-menu-item,.middle-around .oy-menu-group .btn-list .oy-menu-item,.middle .oy-menu-group .btn-list .oy-menu-item,.right .oy-menu-group .btn-list .oy-menu-item,.top .oy-menu-group .btn-list .oy-menu-item{position:absolute;right:0;top:0;left:0;bottom:0;opacity:0}.bottom .oy-menu-group.open .btn-list .oy-menu-item,.left .oy-menu-group.open .btn-list .oy-menu-item,.middle-around .oy-menu-group.open .btn-list .oy-menu-item,.middle .oy-menu-group.open .btn-list .oy-menu-item,.right .oy-menu-group.open .btn-list .oy-menu-item,.top .oy-menu-group.open .btn-list .oy-menu-item{opacity:1}.top .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.top .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.top .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.top .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.top .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{top:-55px;transition:.2s .1s}.top .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{top:-110px;transition:.2s .1s}.top .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{top:-165px;transition:.2s .1s}.top .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{top:-220px;transition:.2s .1s}.bottom .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.bottom .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.bottom .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.bottom .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.bottom .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{top:55px}.bottom .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{top:110px}.bottom .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{top:165px}.bottom .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{top:220px}.left .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.left .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.left .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.left .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.left .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{left:55px}.left .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{left:110px}.left .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{left:165px}.left .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{left:220px}.right .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{left:-55px}.right .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{left:-110px}.right .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{left:-165px}.right .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{left:-220px}.middle .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.middle .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.middle .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.middle .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4,.right .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.right .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.right .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.right .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.middle .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{left:-55px}.middle .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{left:55px}.middle .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{left:-110px}.middle .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{left:110px}.middle-around .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.middle-around .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.middle-around .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.middle-around .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.middle-around .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{left:-75px;top:0}.middle-around .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{left:75px;top:0}.middle-around .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{left:40px;top:-65px}.middle-around .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{left:-40px;top:-65px}.blue{background:#40c4ff}.yellow{background:#ffa000}.green{background:#00e676}.purple{background:#8e24aa}.pink{background:#f0a28e}.oy-mask-white{background:hsla(0,0%,100%,.8)}.oy-mask-black,.oy-mask-white,.oy-mask-white_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.oy-mask-black{background:rgba(0,0,0,.6)}.oy-mask-black_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.oy-menu-group{z-index:1001}.oy-menu-btn{width:48px;height:48px;line-height:50px;display:inline-block;border:none;text-align:center;position:relative}.oy-menu-btn:active{box-shadow:inset 0 0 1000px rgba(0,0,0,.5)}.oy-menu-btn-Circle{border-radius:50%;outline:none}.oy-menu-item{width:48px;height:48px;line-height:50px;display:inline-block;border:none;text-align:center;position:relative;border-radius:50%}.oy-menu-item:active{box-shadow:inset 0 0 1000px rgba(0,0,0,.5)}.icon-bars{background:#fff;height:1px;width:22px;margin:auto;display:block;position:relative;transition:.2s .2s}.icon-bars:after{content:"";position:absolute;height:22px;width:1px;background:#fff;top:-10px}.oy-menu-group.open .icon-bars{transform:rotate(45deg)}.oy-menu-group{position:relative;float:right;transition:.2s}.oy-menu-group .btn-toggle{z-index:15}',
          "",
        ]);
    },
    function (e, t) {
      e.exports = function () {
        var e = [];
        return (
          (e.toString = function () {
            for (var e = [], t = 0; t < this.length; t++) {
              var o = this[t];
              o[2] ? e.push("@media " + o[2] + "{" + o[1] + "}") : e.push(o[1]);
            }
            return e.join("");
          }),
          (e.i = function (t, o) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var n = {}, i = 0; i < this.length; i++) {
              var r = this[i][0];
              "number" == typeof r && (n[r] = !0);
            }
            for (i = 0; i < t.length; i++) {
              var u = t[i];
              ("number" == typeof u[0] && n[u[0]]) ||
                (o && !u[2]
                  ? (u[2] = o)
                  : o && (u[2] = "(" + u[2] + ") and (" + o + ")"),
                e.push(u));
            }
          }),
          e
        );
      };
    },
    ,
    function (e, t, o) {
      var n, i;
      o(10), (n = o(2));
      var r = o(8);
      (i = n = n || {}),
        ("object" != typeof n.default && "function" != typeof n.default) ||
          (i = n = n.default),
        "function" == typeof i && (i = i.options),
        (i.render = r.render),
        (i.staticRenderFns = r.staticRenderFns),
        (e.exports = n);
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o("div", { attrs: { id: "CircleMenu" } }, [
            o("div", { class: e.type, attrs: { animate: e.animate } }, [
              "black" === e.mask
                ? o("div", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.MaskToggle,
                        expression: "MaskToggle",
                      },
                    ],
                    staticClass: "oy-mask-black",
                    on: { click: e.toggle },
                  })
                : e._e(),
              e._v(" "),
              "white" === e.mask
                ? o("div", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.MaskToggle,
                        expression: "MaskToggle",
                      },
                    ],
                    staticClass: "oy-mask-white",
                    on: { click: e.toggle },
                  })
                : e._e(),
              e._v(" "),
              o(
                "div",
                { staticClass: "oy-menu-group", class: { open: e.open } },
                [
                  o(
                    "button",
                    {
                      staticClass: "oy-menu-btn btn-toggle pink",
                      class: { "oy-menu-btn-Circle": e.circle },
                      style: { background: e.BtnColor },
                      on: { click: e.toggle },
                    },
                    [
                      e.btn ? o("i", { staticClass: "icon-bars" }) : e._e(),
                      e._v(" "),
                      e._t("item_btn"),
                    ],
                    2
                  ),
                  e._v(" "),
                  o("div", { staticClass: "btn-list" }, [
                    o(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.number > 1 && e.number < 5,
                            expression: "number > 1 && number < 5",
                          },
                        ],
                        staticClass: "oy-menu-item oy-menu-item_1 yellow",
                        class: e.AnimateClass,
                        style: { background: e.Item1Color },
                      },
                      [e._t("item_1")],
                      2
                    ),
                    e._v(" "),
                    o(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.number > 1 && e.number < 5,
                            expression: "number > 1 && number < 5",
                          },
                        ],
                        staticClass: "oy-menu-item oy-menu-item_2 purple",
                        class: e.AnimateClass,
                        style: { background: e.Item2Color },
                      },
                      [e._t("item_2")],
                      2
                    ),
                    e._v(" "),
                    o(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.isShow,
                            expression: "isShow",
                          },
                        ],
                        staticClass: "oy-menu-item oy-menu-item_3 green",
                        class: e.AnimateClass,
                        style: { background: e.Item3Color },
                      },
                      [e._t("item_3")],
                      2
                    ),
                    e._v(" "),
                    o(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 4 === e.number,
                            expression: "number === 4",
                          },
                        ],
                        staticClass: "oy-menu-item oy-menu-item_4 blue",
                        class: e.AnimateClass,
                        style: { background: e.Item4Color },
                      },
                      [e._t("item_4")],
                      2
                    ),
                  ]),
                ]
              ),
            ]),
          ]);
        },
        staticRenderFns: [],
      };
    },
    function (e, t, o) {
      function n(e, t) {
        for (var o = 0; o < e.length; o++) {
          var n = e[o],
            i = p[n.id];
          if (i) {
            i.refs++;
            for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
            for (; r < n.parts.length; r++) i.parts.push(s(n.parts[r], t));
          } else {
            for (var u = [], r = 0; r < n.parts.length; r++)
              u.push(s(n.parts[r], t));
            p[n.id] = { id: n.id, refs: 1, parts: u };
          }
        }
      }
      function i(e) {
        for (var t = [], o = {}, n = 0; n < e.length; n++) {
          var i = e[n],
            r = i[0],
            u = i[1],
            m = i[2],
            s = i[3],
            l = { css: u, media: m, sourceMap: s };
          o[r] ? o[r].parts.push(l) : t.push((o[r] = { id: r, parts: [l] }));
        }
        return t;
      }
      function r(e, t) {
        var o = c(),
          n = f[f.length - 1];
        if ("top" === e.insertAt)
          n
            ? n.nextSibling
              ? o.insertBefore(t, n.nextSibling)
              : o.appendChild(t)
            : o.insertBefore(t, o.firstChild),
            f.push(t);
        else {
          if ("bottom" !== e.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          o.appendChild(t);
        }
      }
      function u(e) {
        e.parentNode.removeChild(e);
        var t = f.indexOf(e);
        t >= 0 && f.splice(t, 1);
      }
      function m(e) {
        var t = document.createElement("style");
        return (t.type = "text/css"), r(e, t), t;
      }
      function s(e, t) {
        var o, n, i;
        if (t.singleton) {
          var r = b++;
          (o = g || (g = m(t))),
            (n = l.bind(null, o, r, !1)),
            (i = l.bind(null, o, r, !0));
        } else
          (o = m(t)),
            (n = a.bind(null, o)),
            (i = function () {
              u(o);
            });
        return (
          n(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              n((e = t));
            } else i();
          }
        );
      }
      function l(e, t, o, n) {
        var i = o ? "" : n.css;
        if (e.styleSheet) e.styleSheet.cssText = h(t, i);
        else {
          var r = document.createTextNode(i),
            u = e.childNodes;
          u[t] && e.removeChild(u[t]),
            u.length ? e.insertBefore(r, u[t]) : e.appendChild(r);
        }
      }
      function a(e, t) {
        var o = t.css,
          n = t.media,
          i = t.sourceMap;
        if (
          (n && e.setAttribute("media", n),
          i &&
            ((o += "\n/*# sourceURL=" + i.sources[0] + " */"),
            (o +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
              " */")),
          e.styleSheet)
        )
          e.styleSheet.cssText = o;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(o));
        }
      }
      var p = {},
        y = function (e) {
          var t;
          return function () {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
          };
        },
        d = y(function () {
          return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }),
        c = y(function () {
          return document.head || document.getElementsByTagName("head")[0];
        }),
        g = null,
        b = 0,
        f = [];
      e.exports = function (e, t) {
        (t = t || {}),
          "undefined" == typeof t.singleton && (t.singleton = d()),
          "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var o = i(e);
        return (
          n(o, t),
          function (e) {
            for (var r = [], u = 0; u < o.length; u++) {
              var m = o[u],
                s = p[m.id];
              s.refs--, r.push(s);
            }
            if (e) {
              var l = i(e);
              n(l, t);
            }
            for (var u = 0; u < r.length; u++) {
              var s = r[u];
              if (0 === s.refs) {
                for (var a = 0; a < s.parts.length; a++) s.parts[a]();
                delete p[s.id];
              }
            }
          }
        );
      };
      var h = (function () {
        var e = [];
        return function (t, o) {
          return (e[t] = o), e.filter(Boolean).join("\n");
        };
      })();
    },
    function (e, t, o) {
      var n = o(4);
      "string" == typeof n && (n = [[e.id, n, ""]]);
      o(9)(n, {});
      n.locals && (e.exports = n.locals);
    },
  ]);
});
