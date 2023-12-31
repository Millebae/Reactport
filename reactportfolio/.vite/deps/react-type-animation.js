import {
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/react-type-animation/dist/esm/index.es.js
var import_react = __toESM(require_react());
function u(e2, t2, n2, r2) {
  return new (n2 || (n2 = Promise))(function(o2, a2) {
    function u2(e3) {
      try {
        i2(r2.next(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function c2(e3) {
      try {
        i2(r2.throw(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function i2(e3) {
      var t3;
      e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2(function(e4) {
        e4(t3);
      })).then(u2, c2);
    }
    i2((r2 = r2.apply(e2, t2 || [])).next());
  });
}
function c(e2, t2) {
  var n2, r2, o2, a2, u2 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return a2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
    return this;
  }), a2;
  function c2(a3) {
    return function(c3) {
      return function(a4) {
        if (n2)
          throw new TypeError("Generator is already executing.");
        for (; u2; )
          try {
            if (n2 = 1, r2 && (o2 = 2 & a4[0] ? r2.return : a4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, a4[1])).done)
              return o2;
            switch (r2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
              case 0:
              case 1:
                o2 = a4;
                break;
              case 4:
                return u2.label++, { value: a4[1], done: false };
              case 5:
                u2.label++, r2 = a4[1], a4 = [0];
                continue;
              case 7:
                a4 = u2.ops.pop(), u2.trys.pop();
                continue;
              default:
                if (!(o2 = u2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                  u2 = 0;
                  continue;
                }
                if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                  u2.label = a4[1];
                  break;
                }
                if (6 === a4[0] && u2.label < o2[1]) {
                  u2.label = o2[1], o2 = a4;
                  break;
                }
                if (o2 && u2.label < o2[2]) {
                  u2.label = o2[2], u2.ops.push(a4);
                  break;
                }
                o2[2] && u2.ops.pop(), u2.trys.pop();
                continue;
            }
            a4 = t2.call(e2, u2);
          } catch (e3) {
            a4 = [6, e3], r2 = 0;
          } finally {
            n2 = o2 = 0;
          }
        if (5 & a4[0])
          throw a4[1];
        return { value: a4[0] ? a4[1] : void 0, done: true };
      }([a3, c3]);
    };
  }
}
function i(e2) {
  var t2 = "function" == typeof Symbol && Symbol.iterator, n2 = t2 && e2[t2], r2 = 0;
  if (n2)
    return n2.call(e2);
  if (e2 && "number" == typeof e2.length)
    return { next: function() {
      return e2 && r2 >= e2.length && (e2 = void 0), { value: e2 && e2[r2++], done: !e2 };
    } };
  throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function s(e2, t2) {
  var n2 = "function" == typeof Symbol && e2[Symbol.iterator];
  if (!n2)
    return e2;
  var r2, o2, a2 = n2.call(e2), u2 = [];
  try {
    for (; (void 0 === t2 || t2-- > 0) && !(r2 = a2.next()).done; )
      u2.push(r2.value);
  } catch (e3) {
    o2 = { error: e3 };
  } finally {
    try {
      r2 && !r2.done && (n2 = a2.return) && n2.call(a2);
    } finally {
      if (o2)
        throw o2.error;
    }
  }
  return u2;
}
function l(e2, t2, n2) {
  if (n2 || 2 === arguments.length)
    for (var r2, o2 = 0, a2 = t2.length; o2 < a2; o2++)
      !r2 && o2 in t2 || (r2 || (r2 = Array.prototype.slice.call(t2, 0, o2)), r2[o2] = t2[o2]);
  return e2.concat(r2 || Array.prototype.slice.call(t2));
}
function f(e2, t2, n2, r2) {
  for (var o2 = [], a2 = 4; a2 < arguments.length; a2++)
    o2[a2 - 4] = arguments[a2];
  return u(this, void 0, void 0, function() {
    var a3, u2, f2, y2, p2, v2;
    return c(this, function(c2) {
      switch (c2.label) {
        case 0:
          c2.trys.push([0, 12, 13, 14]), a3 = i(o2), u2 = a3.next(), c2.label = 1;
        case 1:
          if (u2.done)
            return [3, 11];
          switch (f2 = u2.value, typeof f2) {
            case "string":
              return [3, 2];
            case "number":
              return [3, 4];
            case "function":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          return [4, d(e2, f2, t2, n2, r2)];
        case 3:
          return c2.sent(), [3, 10];
        case 4:
          return [4, h(f2)];
        case 5:
          return c2.sent(), [3, 10];
        case 6:
          return [4, f2.apply(void 0, l([e2, t2, n2, r2], s(o2), false))];
        case 7:
          return c2.sent(), [3, 10];
        case 8:
          return [4, f2];
        case 9:
          c2.sent(), c2.label = 10;
        case 10:
          return u2 = a3.next(), [3, 1];
        case 11:
          return [3, 14];
        case 12:
          return y2 = c2.sent(), p2 = { error: y2 }, [3, 14];
        case 13:
          try {
            u2 && !u2.done && (v2 = a3.return) && v2.call(a3);
          } finally {
            if (p2)
              throw p2.error;
          }
          return [7];
        case 14:
          return [2];
      }
    });
  });
}
function d(e2, t2, n2, r2, o2) {
  return u(this, void 0, void 0, function() {
    var a2;
    return c(this, function(u2) {
      switch (u2.label) {
        case 0:
          return a2 = function(e3, t3) {
            var n3 = s(t3).slice(0);
            return l(l([], s(e3), false), [NaN], false).findIndex(function(e4, t4) {
              return n3[t4] !== e4;
            });
          }(e2.textContent, t2), [4, y(e2, l(l([], s(v(e2.textContent, a2)), false), s(p(t2, a2)), false), n2, r2, o2)];
        case 1:
          return u2.sent(), [2];
      }
    });
  });
}
function h(e2) {
  return u(this, void 0, void 0, function() {
    return c(this, function(t2) {
      switch (t2.label) {
        case 0:
          return [4, new Promise(function(t3) {
            return setTimeout(t3, e2);
          })];
        case 1:
          return t2.sent(), [2];
      }
    });
  });
}
function y(e2, t2, n2, r2, o2) {
  return u(this, void 0, void 0, function() {
    var a2, u2, l2, f2, d2, y2, p2, v2, b2, m2, w, x, g;
    return c(this, function(S) {
      switch (S.label) {
        case 0:
          if (a2 = t2, o2) {
            for (u2 = 0, l2 = 1; l2 < t2.length; l2++)
              if (f2 = s([t2[l2 - 1], t2[l2]], 2), d2 = f2[0], (y2 = f2[1]).length > d2.length || "" === y2) {
                u2 = l2;
                break;
              }
            a2 = t2.slice(u2, t2.length);
          }
          S.label = 1;
        case 1:
          S.trys.push([1, 6, 7, 8]), p2 = i(function(e3) {
            var t3, n3, r3, o3, a3, u3, s2;
            return c(this, function(l3) {
              switch (l3.label) {
                case 0:
                  t3 = function(e4) {
                    return c(this, function(t4) {
                      switch (t4.label) {
                        case 0:
                          return [4, { op: function(t5) {
                            return requestAnimationFrame(function() {
                              return t5.textContent = e4;
                            });
                          }, opCode: function(t5) {
                            return "" === e4 || t5.textContent.length > e4.length ? "DELETE" : "WRITING";
                          } }];
                        case 1:
                          return t4.sent(), [2];
                      }
                    });
                  }, l3.label = 1;
                case 1:
                  l3.trys.push([1, 6, 7, 8]), n3 = i(e3), r3 = n3.next(), l3.label = 2;
                case 2:
                  return r3.done ? [3, 5] : (o3 = r3.value, [5, t3(o3)]);
                case 3:
                  l3.sent(), l3.label = 4;
                case 4:
                  return r3 = n3.next(), [3, 2];
                case 5:
                  return [3, 8];
                case 6:
                  return a3 = l3.sent(), u3 = { error: a3 }, [3, 8];
                case 7:
                  try {
                    r3 && !r3.done && (s2 = n3.return) && s2.call(n3);
                  } finally {
                    if (u3)
                      throw u3.error;
                  }
                  return [7];
                case 8:
                  return [2];
              }
            });
          }(a2)), v2 = p2.next(), S.label = 2;
        case 2:
          return v2.done ? [3, 5] : (b2 = v2.value, m2 = "WRITING" === b2.opCode(e2) ? n2 + n2 * (Math.random() - 0.5) : r2 + r2 * (Math.random() - 0.5), b2.op(e2), [4, h(m2)]);
        case 3:
          S.sent(), S.label = 4;
        case 4:
          return v2 = p2.next(), [3, 2];
        case 5:
          return [3, 8];
        case 6:
          return w = S.sent(), x = { error: w }, [3, 8];
        case 7:
          try {
            v2 && !v2.done && (g = p2.return) && g.call(p2);
          } finally {
            if (x)
              throw x.error;
          }
          return [7];
        case 8:
          return [2];
      }
    });
  });
}
function p(e2, t2, n2) {
  var r2 = s(e2).slice(0);
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = r2.length), c(this, function(e3) {
    switch (e3.label) {
      case 0:
        return t2 < n2 ? [4, r2.slice(0, ++t2).join("")] : [3, 2];
      case 1:
        return e3.sent(), [3, 0];
      case 2:
        return [2];
    }
  });
}
function v(e2, t2, n2) {
  var r2 = s(e2).slice(0);
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = r2.length), c(this, function(e3) {
    switch (e3.label) {
      case 0:
        return n2 > t2 ? [4, r2.slice(0, --n2).join("")] : [3, 2];
      case 1:
        return e3.sent(), [3, 0];
      case 2:
        return [2];
    }
  });
}
var b = "index-module_type__E-SaG";
!function(e2, t2) {
  void 0 === t2 && (t2 = {});
  var n2 = t2.insertAt;
  if (e2 && "undefined" != typeof document) {
    var r2 = document.head || document.getElementsByTagName("head")[0], o2 = document.createElement("style");
    o2.type = "text/css", "top" === n2 && r2.firstChild ? r2.insertBefore(o2, r2.firstChild) : r2.appendChild(o2), o2.styleSheet ? o2.styleSheet.cssText = e2 : o2.appendChild(document.createTextNode(e2));
  }
}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
var m = (0, import_react.memo)((0, import_react.forwardRef)(function(o2, a2) {
  var u2 = o2.sequence, c2 = o2.repeat, i2 = o2.className, d2 = o2.speed, h2 = void 0 === d2 ? 40 : d2, y2 = o2.deletionSpeed, p2 = o2.omitDeletionAnimation, v2 = void 0 !== p2 && p2, m2 = o2.wrapper, w = void 0 === m2 ? "span" : m2, x = o2.cursor, g = void 0 === x || x, S = o2.style;
  y2 || (y2 = h2);
  var _ = new Array(2).fill(40);
  [h2, y2].forEach(function(e2, t2) {
    switch (typeof e2) {
      case "number":
        _[t2] = Math.abs(e2 - 100);
        break;
      case "object":
        var n2 = e2, r2 = n2.type, o3 = n2.value;
        if ("number" != typeof o3)
          break;
        if ("keyStrokeDelayInMs" === r2)
          _[t2] = o3;
    }
  });
  var E, k, C, T, A, N, I = _[0], P = _[1], G = function(e2, n2) {
    void 0 === n2 && (n2 = null);
    var o3 = (0, import_react.useRef)(n2);
    return (0, import_react.useEffect)(function() {
      e2 && ("function" == typeof e2 ? e2(o3.current) : e2.current = o3.current);
    }, [e2]), o3;
  }(a2), j = b;
  E = i2 ? "".concat(g ? j + " " : "").concat(i2) : g ? j : "", k = (0, import_react.useRef)(function() {
    var e2, t2 = u2;
    return c2 === 1 / 0 ? e2 = f : "number" == typeof c2 && (t2 = Array(1 + c2).fill(u2).flat()), f.apply(void 0, l(l([G.current, I, P, v2], s(t2), false), [e2], false)), function() {
      G.current;
    };
  }), C = (0, import_react.useRef)(), T = (0, import_react.useRef)(false), A = (0, import_react.useRef)(false), N = s((0, import_react.useState)(0), 2)[1], T.current && (A.current = true), (0, import_react.useEffect)(function() {
    return T.current || (C.current = k.current(), T.current = true), N(function(e2) {
      return e2 + 1;
    }), function() {
      A.current && C.current && C.current();
    };
  }, []);
  var M = w;
  return import_react.default.createElement(M, { style: S, className: E, ref: G });
}), function(e2, t2) {
  return true;
});
export {
  m as TypeAnimation
};
//# sourceMappingURL=react-type-animation.js.map
