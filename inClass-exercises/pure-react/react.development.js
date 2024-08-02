/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).React = {}));
})(this, function (e) {
  'use strict';
  var t = Symbol.for('react.element'),
    n = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    i = Symbol.for('react.provider'),
    u = Symbol.for('react.context'),
    c = Symbol.for('react.forward_ref'),
    s = Symbol.for('react.suspense'),
    l = Symbol.for('react.suspense_list'),
    f = Symbol.for('react.memo'),
    p = Symbol.for('react.lazy'),
    d = Symbol.for('react.offscreen'),
    y = Symbol.iterator,
    m = '@@iterator';
  function v(e) {
    if (null === e || 'object' != typeof e) return null;
    var t = (y && e[y]) || e[m];
    return 'function' == typeof t ? t : null;
  }
  var h = { current: null },
    g = { transition: null },
    b = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
    _ = { current: null },
    w = {},
    k = null;
  function C(e) {
    k = e;
  }
  (w.setExtraStackFrame = function (e) {
    k = e;
  }),
    (w.getCurrentStack = null),
    (w.getStackAddendum = function () {
      var e = '';
      k && (e += k);
      var t = w.getCurrentStack;
      return t && (e += t() || ''), e;
    });
  var R = !1,
    S = !1,
    P = !1,
    j = !1,
    x = !1,
    O = { ReactCurrentDispatcher: h, ReactCurrentBatchConfig: g, ReactCurrentOwner: _ };
  function T(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r];
    $('warn', e, n);
  }
  function E(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r];
    $('error', e, n);
  }
  function $(e, t, n) {
    var r = O.ReactDebugCurrentFrame.getStackAddendum();
    '' !== r && ((t += '%s'), (n = n.concat([r])));
    var o = n.map(function (e) {
      return String(e);
    });
    o.unshift('Warning: ' + t), Function.prototype.apply.call(console[e], console, o);
  }
  (O.ReactDebugCurrentFrame = w), (O.ReactCurrentActQueue = b);
  var I = {};
  function D(e, t) {
    var n = e.constructor,
      r = (n && (n.displayName || n.name)) || 'ReactClass',
      o = r + '.' + t;
    I[o] ||
      (E(
        "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
        t,
        r
      ),
      (I[o] = !0));
  }
  var F = {
      isMounted: function (e) {
        return !1;
      },
      enqueueForceUpdate: function (e, t, n) {
        D(e, 'forceUpdate');
      },
      enqueueReplaceState: function (e, t, n, r) {
        D(e, 'replaceState');
      },
      enqueueSetState: function (e, t, n, r) {
        D(e, 'setState');
      },
    },
    N = Object.assign,
    M = {};
  function L(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = M), (this.updater = n || F);
  }
  Object.freeze(M),
    (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (e, t) {
      if ('object' != typeof e && 'function' != typeof e && null != e)
        throw new Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (L.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    });
  var z = {
      isMounted: [
        'isMounted',
        'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
      ],
      replaceState: [
        'replaceState',
        'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
      ],
    },
    U = function (e, t) {
      Object.defineProperty(L.prototype, e, {
        get: function () {
          T('%s(...) is deprecated in plain JavaScript React classes. %s', t[0], t[1]);
        },
      });
    };
  for (var A in z) z.hasOwnProperty(A) && U(A, z[A]);
  function V() {}
  function Y(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = M), (this.updater = n || F);
  }
  V.prototype = L.prototype;
  var q = (Y.prototype = new V());
  (q.constructor = Y), N(q, L.prototype), (q.isPureReactComponent = !0);
  var W = Array.isArray;
  function B(e) {
    return W(e);
  }
  function H(e) {
    return '' + e;
  }
  function J(e) {
    if (
      (function (e) {
        try {
          return H(e), !1;
        } catch (e) {
          return !0;
        }
      })(e)
    )
      return (
        E(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          (function (e) {
            return (
              ('function' == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag]) ||
              e.constructor.name ||
              'Object'
            );
          })(e)
        ),
        H(e)
      );
  }
  function Q(e) {
    return e.displayName || 'Context';
  }
  function X(e) {
    if (null == e) return null;
    if (
      ('number' == typeof e.tag &&
        E(
          'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
        ),
      'function' == typeof e)
    )
      return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
      case r:
        return 'Fragment';
      case n:
        return 'Portal';
      case a:
        return 'Profiler';
      case o:
        return 'StrictMode';
      case s:
        return 'Suspense';
      case l:
        return 'SuspenseList';
    }
    if ('object' == typeof e)
      switch (e.$$typeof) {
        case u:
          return Q(e) + '.Consumer';
        case i:
          return Q(e._context) + '.Provider';
        case c:
          return (function (e, t, n) {
            var r = e.displayName;
            if (r) return r;
            var o = t.displayName || t.name || '';
            return '' !== o ? n + '(' + o + ')' : n;
          })(e, e.render, 'ForwardRef');
        case f:
          var t = e.displayName || null;
          return null !== t ? t : X(e.type) || 'Memo';
        case p:
          var d = e,
            y = d._payload,
            m = d._init;
          try {
            return X(m(y));
          } catch (e) {
            return null;
          }
      }
    return null;
  }
  var G,
    K,
    Z,
    ee = Object.prototype.hasOwnProperty,
    te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(e) {
    if (ee.call(e, 'ref')) {
      var t = Object.getOwnPropertyDescriptor(e, 'ref').get;
      if (t && t.isReactWarning) return !1;
    }
    return void 0 !== e.ref;
  }
  function re(e) {
    if (ee.call(e, 'key')) {
      var t = Object.getOwnPropertyDescriptor(e, 'key').get;
      if (t && t.isReactWarning) return !1;
    }
    return void 0 !== e.key;
  }
  Z = {};
  var oe = function (e, n, r, o, a, i, u) {
    var c = { $$typeof: t, type: e, key: n, ref: r, props: u, _owner: i, _store: {} };
    return (
      Object.defineProperty(c._store, 'validated', {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(c, '_self', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o,
      }),
      Object.defineProperty(c, '_source', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a,
      }),
      Object.freeze && (Object.freeze(c.props), Object.freeze(c)),
      c
    );
  };
  function ae(e, t, n) {
    var r,
      o = {},
      a = null,
      i = null,
      u = null,
      c = null;
    if (null != t)
      for (r in (ne(t) &&
        ((i = t.ref),
        (function (e) {
          if (
            'string' == typeof e.ref &&
            _.current &&
            e.__self &&
            _.current.stateNode !== e.__self
          ) {
            var t = X(_.current.type);
            Z[t] ||
              (E(
                'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                t,
                e.ref
              ),
              (Z[t] = !0));
          }
        })(t)),
      re(t) && (J(t.key), (a = '' + t.key)),
      (u = void 0 === t.__self ? null : t.__self),
      (c = void 0 === t.__source ? null : t.__source),
      t))
        ee.call(t, r) && !te.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (1 === s) o.children = n;
    else if (s > 1) {
      for (var l = Array(s), f = 0; f < s; f++) l[f] = arguments[f + 2];
      Object.freeze && Object.freeze(l), (o.children = l);
    }
    if (e && e.defaultProps) {
      var p = e.defaultProps;
      for (r in p) void 0 === o[r] && (o[r] = p[r]);
    }
    if (a || i) {
      var d = 'function' == typeof e ? e.displayName || e.name || 'Unknown' : e;
      a &&
        (function (e, t) {
          var n = function () {
            G ||
              ((G = !0),
              E(
                '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                t
              ));
          };
          (n.isReactWarning = !0), Object.defineProperty(e, 'key', { get: n, configurable: !0 });
        })(o, d),
        i &&
          (function (e, t) {
            var n = function () {
              K ||
                ((K = !0),
                E(
                  '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  t
                ));
            };
            (n.isReactWarning = !0), Object.defineProperty(e, 'ref', { get: n, configurable: !0 });
          })(o, d);
    }
    return oe(e, a, i, u, c, _.current, o);
  }
  function ie(e, t, n) {
    if (null == e)
      throw new Error(
        'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
      );
    var r,
      o,
      a = N({}, e.props),
      i = e.key,
      u = e.ref,
      c = e._self,
      s = e._source,
      l = e._owner;
    if (null != t)
      for (r in (ne(t) && ((u = t.ref), (l = _.current)),
      re(t) && (J(t.key), (i = '' + t.key)),
      e.type && e.type.defaultProps && (o = e.type.defaultProps),
      t))
        ee.call(t, r) &&
          !te.hasOwnProperty(r) &&
          (void 0 === t[r] && void 0 !== o ? (a[r] = o[r]) : (a[r] = t[r]));
    var f = arguments.length - 2;
    if (1 === f) a.children = n;
    else if (f > 1) {
      for (var p = Array(f), d = 0; d < f; d++) p[d] = arguments[d + 2];
      a.children = p;
    }
    return oe(e.type, i, u, c, s, l, a);
  }
  function ue(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === t;
  }
  var ce = '.',
    se = ':';
  var le = !1,
    fe = /\/+/g;
  function pe(e) {
    return e.replace(fe, '$&/');
  }
  function de(e, t) {
    return 'object' == typeof e && null !== e && null != e.key
      ? (J(e.key),
        (n = '' + e.key),
        (r = { '=': '=0', ':': '=2' }),
        '$' +
          n.replace(/[=:]/g, function (e) {
            return r[e];
          }))
      : t.toString(36);
    var n, r;
  }
  function ye(e, r, o, a, i) {
    var u = typeof e;
    ('undefined' !== u && 'boolean' !== u) || (e = null);
    var c,
      s,
      l,
      f = !1;
    if (null === e) f = !0;
    else
      switch (u) {
        case 'string':
        case 'number':
          f = !0;
          break;
        case 'object':
          switch (e.$$typeof) {
            case t:
            case n:
              f = !0;
          }
      }
    if (f) {
      var p = e,
        d = i(p),
        y = '' === a ? ce + de(p, 0) : a;
      if (B(d)) {
        var m = '';
        null != y && (m = pe(y) + '/'),
          ye(d, r, m, '', function (e) {
            return e;
          });
      } else
        null != d &&
          (ue(d) &&
            (!d.key || (p && p.key === d.key) || J(d.key),
            (c = d),
            (s = o + (!d.key || (p && p.key === d.key) ? '' : pe('' + d.key) + '/') + y),
            (d = oe(c.type, s, c.ref, c._self, c._source, c._owner, c.props))),
          r.push(d));
      return 1;
    }
    var h = 0,
      g = '' === a ? ce : a + se;
    if (B(e)) for (var b = 0; b < e.length; b++) h += ye((l = e[b]), r, o, g + de(l, b), i);
    else {
      var _ = v(e);
      if ('function' == typeof _) {
        var w = e;
        _ === w.entries &&
          (le ||
            T(
              'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
            ),
          (le = !0));
        for (var k, C = _.call(w), R = 0; !(k = C.next()).done; )
          h += ye((l = k.value), r, o, g + de(l, R++), i);
      } else if ('object' === u) {
        var S = String(e);
        throw new Error(
          'Objects are not valid as a React child (found: ' +
            ('[object Object]' === S ? 'object with keys {' + Object.keys(e).join(', ') + '}' : S) +
            '). If you meant to render a collection of children, use an array instead.'
        );
      }
    }
    return h;
  }
  function me(e, t, n) {
    if (null == e) return e;
    var r = [],
      o = 0;
    return (
      ye(e, r, '', '', function (e) {
        return t.call(n, e, o++);
      }),
      r
    );
  }
  var ve,
    he = -1,
    ge = 0,
    be = 1,
    _e = 2;
  function we(e) {
    if (e._status === he) {
      var t = (0, e._result)();
      if (
        (t.then(
          function (t) {
            if (e._status === ge || e._status === he) {
              var n = e;
              (n._status = be), (n._result = t);
            }
          },
          function (t) {
            if (e._status === ge || e._status === he) {
              var n = e;
              (n._status = _e), (n._result = t);
            }
          }
        ),
        e._status === he)
      ) {
        var n = e;
        (n._status = ge), (n._result = t);
      }
    }
    if (e._status === be) {
      var r = e._result;
      return (
        void 0 === r &&
          E(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            r
          ),
        'default' in r ||
          E(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            r
          ),
        r.default
      );
    }
    throw e._result;
  }
  function ke(e) {
    return (
      'string' == typeof e ||
      'function' == typeof e ||
      !!(e === r || e === a || x || e === o || e === s || e === l || j || e === d || R || S || P) ||
      ('object' == typeof e &&
        null !== e &&
        (e.$$typeof === p ||
          e.$$typeof === f ||
          e.$$typeof === i ||
          e.$$typeof === u ||
          e.$$typeof === c ||
          e.$$typeof === ve ||
          void 0 !== e.getModuleId))
    );
  }
  function Ce() {
    var e = h.current;
    return (
      null === e &&
        E(
          'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
        ),
      e
    );
  }
  ve = Symbol.for('react.module.reference');
  var Re,
    Se,
    Pe,
    je,
    xe,
    Oe,
    Te,
    Ee = 0;
  function $e() {}
  $e.__reactDisabledLog = !0;
  var Ie,
    De = O.ReactCurrentDispatcher;
  function Fe(e, t, n) {
    if (void 0 === Ie)
      try {
        throw Error();
      } catch (e) {
        var r = e.stack.trim().match(/\n( *(at )?)/);
        Ie = (r && r[1]) || '';
      }
    return '\n' + Ie + e;
  }
  var Ne,
    Me = !1,
    Le = 'function' == typeof WeakMap ? WeakMap : Map;
  function ze(e, t) {
    if (!e || Me) return '';
    var n,
      r = Ne.get(e);
    if (void 0 !== r) return r;
    Me = !0;
    var o,
      a = Error.prepareStackTrace;
    (Error.prepareStackTrace = void 0),
      (o = De.current),
      (De.current = null),
      (function () {
        if (0 === Ee) {
          (Re = console.log),
            (Se = console.info),
            (Pe = console.warn),
            (je = console.error),
            (xe = console.group),
            (Oe = console.groupCollapsed),
            (Te = console.groupEnd);
          var e = { configurable: !0, enumerable: !0, value: $e, writable: !0 };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e,
          });
        }
        Ee++;
      })();
    try {
      if (t) {
        var i = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(i.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          'object' == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(i, []);
          } catch (e) {
            n = e;
          }
          Reflect.construct(e, [], i);
        } else {
          try {
            i.call();
          } catch (e) {
            n = e;
          }
          e.call(i.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (e) {
          n = e;
        }
        e();
      }
    } catch (t) {
      if (t && n && 'string' == typeof t.stack) {
        for (
          var u = t.stack.split('\n'), c = n.stack.split('\n'), s = u.length - 1, l = c.length - 1;
          s >= 1 && l >= 0 && u[s] !== c[l];

        )
          l--;
        for (; s >= 1 && l >= 0; s--, l--)
          if (u[s] !== c[l]) {
            if (1 !== s || 1 !== l)
              do {
                if ((s--, --l < 0 || u[s] !== c[l])) {
                  var f = '\n' + u[s].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      f.includes('<anonymous>') &&
                      (f = f.replace('<anonymous>', e.displayName)),
                    'function' == typeof e && Ne.set(e, f),
                    f
                  );
                }
              } while (s >= 1 && l >= 0);
            break;
          }
      }
    } finally {
      (Me = !1),
        (De.current = o),
        (function () {
          if (0 == --Ee) {
            var e = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: N({}, e, { value: Re }),
              info: N({}, e, { value: Se }),
              warn: N({}, e, { value: Pe }),
              error: N({}, e, { value: je }),
              group: N({}, e, { value: xe }),
              groupCollapsed: N({}, e, { value: Oe }),
              groupEnd: N({}, e, { value: Te }),
            });
          }
          Ee < 0 &&
            E('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
        })(),
        (Error.prepareStackTrace = a);
    }
    var p = e ? e.displayName || e.name : '',
      d = p ? Fe(p) : '';
    return 'function' == typeof e && Ne.set(e, d), d;
  }
  function Ue(e, t, n) {
    if (null == e) return '';
    if ('function' == typeof e)
      return ze(
        e,
        (function (e) {
          var t = e.prototype;
          return !(!t || !t.isReactComponent);
        })(e)
      );
    if ('string' == typeof e) return Fe(e);
    switch (e) {
      case s:
        return Fe('Suspense');
      case l:
        return Fe('SuspenseList');
    }
    if ('object' == typeof e)
      switch (e.$$typeof) {
        case c:
          return ze(e.render, !1);
        case f:
          return Ue(e.type, t, n);
        case p:
          var r = e,
            o = r._payload,
            a = r._init;
          try {
            return Ue(a(o), t, n);
          } catch (e) {}
      }
    return '';
  }
  Ne = new Le();
  var Ae,
    Ve = {},
    Ye = O.ReactDebugCurrentFrame;
  function qe(e) {
    if (e) {
      var t = e._owner,
        n = Ue(e.type, e._source, t ? t.type : null);
      Ye.setExtraStackFrame(n);
    } else Ye.setExtraStackFrame(null);
  }
  function We(e) {
    if (e) {
      var t = e._owner;
      C(Ue(e.type, e._source, t ? t.type : null));
    } else C(null);
  }
  function Be() {
    if (_.current) {
      var e = X(_.current.type);
      if (e) return '\n\nCheck the render method of `' + e + '`.';
    }
    return '';
  }
  Ae = !1;
  var He = {};
  function Je(e, t) {
    if (e._store && !e._store.validated && null == e.key) {
      e._store.validated = !0;
      var n = (function (e) {
        var t = Be();
        if (!t) {
          var n = 'string' == typeof e ? e : e.displayName || e.name;
          n && (t = '\n\nCheck the top-level render call using <' + n + '>.');
        }
        return t;
      })(t);
      if (!He[n]) {
        He[n] = !0;
        var r = '';
        e &&
          e._owner &&
          e._owner !== _.current &&
          (r = ' It was passed a child from ' + X(e._owner.type) + '.'),
          We(e),
          E(
            'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
            n,
            r
          ),
          We(null);
      }
    }
  }
  function Qe(e, t) {
    if ('object' == typeof e)
      if (B(e))
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ue(r) && Je(r, t);
        }
      else if (ue(e)) e._store && (e._store.validated = !0);
      else if (e) {
        var o = v(e);
        if ('function' == typeof o && o !== e.entries)
          for (var a, i = o.call(e); !(a = i.next()).done; ) ue(a.value) && Je(a.value, t);
      }
  }
  function Xe(e) {
    var t,
      n = e.type;
    if (null != n && 'string' != typeof n) {
      if ('function' == typeof n) t = n.propTypes;
      else {
        if ('object' != typeof n || (n.$$typeof !== c && n.$$typeof !== f)) return;
        t = n.propTypes;
      }
      if (t) {
        var r = X(n);
        !(function (e, t, n, r, o) {
          var a = Function.call.bind(ee);
          for (var i in e)
            if (a(e, i)) {
              var u = void 0;
              try {
                if ('function' != typeof e[i]) {
                  var c = Error(
                    (r || 'React class') +
                      ': ' +
                      n +
                      ' type `' +
                      i +
                      '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                      typeof e[i] +
                      '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                  );
                  throw ((c.name = 'Invariant Violation'), c);
                }
                u = e[i](t, i, r, n, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
              } catch (e) {
                u = e;
              }
              !u ||
                u instanceof Error ||
                (qe(o),
                E(
                  '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                  r || 'React class',
                  n,
                  i,
                  typeof u
                ),
                qe(null)),
                u instanceof Error &&
                  !(u.message in Ve) &&
                  ((Ve[u.message] = !0), qe(o), E('Failed %s type: %s', n, u.message), qe(null));
            }
        })(t, e.props, 'prop', r, e);
      } else if (void 0 !== n.PropTypes && !Ae) {
        (Ae = !0),
          E(
            'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
            X(n) || 'Unknown'
          );
      }
      'function' != typeof n.getDefaultProps ||
        n.getDefaultProps.isReactClassApproved ||
        E(
          'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
        );
    }
  }
  function Ge(e, n, o) {
    var a,
      i,
      u = ke(e);
    if (!u) {
      var c = '';
      (void 0 === e || ('object' == typeof e && null !== e && 0 === Object.keys(e).length)) &&
        (c +=
          " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var s,
        l =
          null != (a = n) && void 0 !== (i = a.__source)
            ? '\n\nCheck your code at ' +
              i.fileName.replace(/^.*[\\\/]/, '') +
              ':' +
              i.lineNumber +
              '.'
            : '';
      (c += l || Be()),
        null === e
          ? (s = 'null')
          : B(e)
          ? (s = 'array')
          : void 0 !== e && e.$$typeof === t
          ? ((s = '<' + (X(e.type) || 'Unknown') + ' />'),
            (c = ' Did you accidentally export a JSX literal instead of a component?'))
          : (s = typeof e),
        E(
          'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
          s,
          c
        );
    }
    var f = ae.apply(this, arguments);
    if (null == f) return f;
    if (u) for (var p = 2; p < arguments.length; p++) Qe(arguments[p], e);
    return (
      e === r
        ? (function (e) {
            for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
              var r = t[n];
              if ('children' !== r && 'key' !== r) {
                We(e),
                  E(
                    'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                    r
                  ),
                  We(null);
                break;
              }
            }
            null !== e.ref &&
              (We(e), E('Invalid attribute `ref` supplied to `React.Fragment`.'), We(null));
          })(f)
        : Xe(f),
      f
    );
  }
  var Ke = !1;
  var Ze = !1,
    et = !1;
  function tt(e, t) {
    var n = e.length;
    e.push(t),
      (function (e, t, n) {
        var r = n;
        for (; r > 0; ) {
          var o = (r - 1) >>> 1,
            a = e[o];
          if (!(ot(a, t) > 0)) return;
          (e[o] = t), (e[r] = a), (r = o);
        }
      })(e, t, n);
  }
  function nt(e) {
    return 0 === e.length ? null : e[0];
  }
  function rt(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    return (
      n !== t &&
        ((e[0] = n),
        (function (e, t, n) {
          var r = n,
            o = e.length,
            a = o >>> 1;
          for (; r < a; ) {
            var i = 2 * (r + 1) - 1,
              u = e[i],
              c = i + 1,
              s = e[c];
            if (ot(u, t) < 0)
              c < o && ot(s, u) < 0
                ? ((e[r] = s), (e[c] = t), (r = c))
                : ((e[r] = u), (e[i] = t), (r = i));
            else {
              if (!(c < o && ot(s, t) < 0)) return;
              (e[r] = s), (e[c] = t), (r = c);
            }
          }
        })(e, n, 0)),
      t
    );
  }
  function ot(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  var at;
  if ('object' == typeof performance && 'function' == typeof performance.now) {
    var it = performance;
    at = function () {
      return it.now();
    };
  } else {
    var ut = Date,
      ct = ut.now();
    at = function () {
      return ut.now() - ct;
    };
  }
  var st = [],
    lt = [],
    ft = 1,
    pt = null,
    dt = 3,
    yt = !1,
    mt = !1,
    vt = !1,
    ht = 'function' == typeof setTimeout ? setTimeout : null,
    gt = 'function' == typeof clearTimeout ? clearTimeout : null,
    bt = 'undefined' != typeof setImmediate ? setImmediate : null;
  'undefined' != typeof navigator &&
    void 0 !== navigator.scheduling &&
    void 0 !== navigator.scheduling.isInputPending &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _t(e) {
    for (var t = nt(lt); null !== t; ) {
      if (null === t.callback) rt(lt);
      else {
        if (!(t.startTime <= e)) return;
        rt(lt), (t.sortIndex = t.expirationTime), tt(st, t);
      }
      t = nt(lt);
    }
  }
  function wt(e) {
    if (((vt = !1), _t(e), !mt))
      if (null !== nt(st)) (mt = !0), Dt(kt);
      else {
        var t = nt(lt);
        null !== t && Ft(wt, t.startTime - e);
      }
  }
  function kt(e, t) {
    (mt = !1), vt && ((vt = !1), Nt()), (yt = !0);
    var n = dt;
    try {
      if (!et) return Ct(e, t);
      try {
        return Ct(e, t);
      } catch (e) {
        if (null !== pt) {
          at();
          pt.isQueued = !1;
        }
        throw e;
      }
    } finally {
      (pt = null), (dt = n), (yt = !1);
    }
  }
  function Ct(e, t) {
    var n = t;
    for (_t(n), pt = nt(st); null !== pt && !Ze && (!(pt.expirationTime > n) || (e && !Ot())); ) {
      var r = pt.callback;
      if ('function' == typeof r) {
        (pt.callback = null), (dt = pt.priorityLevel);
        var o = r(pt.expirationTime <= n);
        (n = at()), 'function' == typeof o ? (pt.callback = o) : pt === nt(st) && rt(st), _t(n);
      } else rt(st);
      pt = nt(st);
    }
    if (null !== pt) return !0;
    var a = nt(lt);
    return null !== a && Ft(wt, a.startTime - n), !1;
  }
  var Rt = !1,
    St = null,
    Pt = -1,
    jt = 5,
    xt = -1;
  function Ot() {
    return !(at() - xt < jt);
  }
  var Tt,
    Et = function () {
      if (null !== St) {
        var e = at();
        xt = e;
        var t = !0;
        try {
          t = St(!0, e);
        } finally {
          t ? Tt() : ((Rt = !1), (St = null));
        }
      } else Rt = !1;
    };
  if ('function' == typeof bt)
    Tt = function () {
      bt(Et);
    };
  else if ('undefined' != typeof MessageChannel) {
    var $t = new MessageChannel(),
      It = $t.port2;
    ($t.port1.onmessage = Et),
      (Tt = function () {
        It.postMessage(null);
      });
  } else
    Tt = function () {
      ht(Et, 0);
    };
  function Dt(e) {
    (St = e), Rt || ((Rt = !0), Tt());
  }
  function Ft(e, t) {
    Pt = ht(function () {
      e(at());
    }, t);
  }
  function Nt() {
    gt(Pt), (Pt = -1);
  }
  var Mt = function () {},
    Lt = Object.freeze({
      __proto__: null,
      unstable_ImmediatePriority: 1,
      unstable_UserBlockingPriority: 2,
      unstable_NormalPriority: 3,
      unstable_IdlePriority: 5,
      unstable_LowPriority: 4,
      unstable_runWithPriority: function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = dt;
        dt = e;
        try {
          return t();
        } finally {
          dt = n;
        }
      },
      unstable_next: function (e) {
        var t;
        switch (dt) {
          case 1:
          case 2:
          case 3:
            t = 3;
            break;
          default:
            t = dt;
        }
        var n = dt;
        dt = t;
        try {
          return e();
        } finally {
          dt = n;
        }
      },
      unstable_scheduleCallback: function (e, t, n) {
        var r,
          o,
          a = at();
        if ('object' == typeof n && null !== n) {
          var i = n.delay;
          r = 'number' == typeof i && i > 0 ? a + i : a;
        } else r = a;
        switch (e) {
          case 1:
            o = -1;
            break;
          case 2:
            o = 250;
            break;
          case 5:
            o = 1073741823;
            break;
          case 4:
            o = 1e4;
            break;
          default:
            o = 5e3;
        }
        var u = r + o,
          c = {
            id: ft++,
            callback: t,
            priorityLevel: e,
            startTime: r,
            expirationTime: u,
            sortIndex: -1,
          };
        return (
          r > a
            ? ((c.sortIndex = r),
              tt(lt, c),
              null === nt(st) && c === nt(lt) && (vt ? Nt() : (vt = !0), Ft(wt, r - a)))
            : ((c.sortIndex = u), tt(st, c), mt || yt || ((mt = !0), Dt(kt))),
          c
        );
      },
      unstable_cancelCallback: function (e) {
        e.callback = null;
      },
      unstable_wrapCallback: function (e) {
        var t = dt;
        return function () {
          var n = dt;
          dt = t;
          try {
            return e.apply(this, arguments);
          } finally {
            dt = n;
          }
        };
      },
      unstable_getCurrentPriorityLevel: function () {
        return dt;
      },
      unstable_shouldYield: Ot,
      unstable_requestPaint: Mt,
      unstable_continueExecution: function () {
        mt || yt || ((mt = !0), Dt(kt));
      },
      unstable_pauseExecution: function () {},
      unstable_getFirstCallbackNode: function () {
        return nt(st);
      },
      get unstable_now() {
        return at;
      },
      unstable_forceFrameRate: function (e) {
        e < 0 || e > 125
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
            )
          : (jt = e > 0 ? Math.floor(1e3 / e) : 5);
      },
      unstable_Profiling: null,
    }),
    zt = {
      ReactCurrentDispatcher: h,
      ReactCurrentOwner: _,
      ReactCurrentBatchConfig: g,
      Scheduler: Lt,
    };
  (zt.ReactCurrentActQueue = b), (zt.ReactDebugCurrentFrame = w);
  var Ut = !1,
    At = null;
  var Vt = 0,
    Yt = !1;
  function qt(e) {
    var t = Vt;
    Vt++, null === b.current && (b.current = []);
    var n,
      r = b.isBatchingLegacy;
    try {
      if (((b.isBatchingLegacy = !0), (n = e()), !r && b.didScheduleLegacyUpdate)) {
        var o = b.current;
        null !== o && ((b.didScheduleLegacyUpdate = !1), Jt(o));
      }
    } catch (e) {
      throw (Wt(t), e);
    } finally {
      b.isBatchingLegacy = r;
    }
    if (null !== n && 'object' == typeof n && 'function' == typeof n.then) {
      var a = n,
        i = !1,
        u = {
          then: function (e, n) {
            (i = !0),
              a.then(
                function (r) {
                  Wt(t), 0 === Vt ? Bt(r, e, n) : e(r);
                },
                function (e) {
                  Wt(t), n(e);
                }
              );
          },
        };
      return (
        Yt ||
          'undefined' == typeof Promise ||
          Promise.resolve()
            .then(function () {})
            .then(function () {
              i ||
                ((Yt = !0),
                E(
                  'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                ));
            }),
        u
      );
    }
    var c = n;
    if ((Wt(t), 0 === Vt)) {
      var s = b.current;
      return (
        null !== s && (Jt(s), (b.current = null)),
        {
          then: function (e, t) {
            null === b.current ? ((b.current = []), Bt(c, e, t)) : e(c);
          },
        }
      );
    }
    return {
      then: function (e, t) {
        e(c);
      },
    };
  }
  function Wt(e) {
    e !== Vt - 1 &&
      E(
        'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
      ),
      (Vt = e);
  }
  function Bt(e, t, n) {
    var r = b.current;
    if (null !== r)
      try {
        Jt(r),
          (function (e) {
            if (null === At)
              try {
                var t = ('require' + Math.random()).slice(0, 7),
                  n = module && module[t];
                At = n.call(module, 'timers').setImmediate;
              } catch (e) {
                At = function (e) {
                  !1 === Ut &&
                    ((Ut = !0),
                    'undefined' == typeof MessageChannel &&
                      E(
                        'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                      ));
                  var t = new MessageChannel();
                  (t.port1.onmessage = e), t.port2.postMessage(void 0);
                };
              }
            At(e);
          })(function () {
            0 === r.length ? ((b.current = null), t(e)) : Bt(e, t, n);
          });
      } catch (e) {
        n(e);
      }
    else t(e);
  }
  var Ht = !1;
  function Jt(e) {
    if (!Ht) {
      Ht = !0;
      var t = 0;
      try {
        for (; t < e.length; t++) {
          var n = e[t];
          do {
            n = n(!0);
          } while (null !== n);
        }
        e.length = 0;
      } catch (n) {
        throw ((e = e.slice(t + 1)), n);
      } finally {
        Ht = !1;
      }
    }
  }
  var Qt = Ge,
    Xt = function (e, t, n) {
      for (var r = ie.apply(this, arguments), o = 2; o < arguments.length; o++)
        Qe(arguments[o], r.type);
      return Xe(r), r;
    },
    Gt = function (e) {
      var t = Ge.bind(null, e);
      return (
        (t.type = e),
        Ke ||
          ((Ke = !0),
          T(
            'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
          )),
        Object.defineProperty(t, 'type', {
          enumerable: !1,
          get: function () {
            return (
              T(
                'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
              ),
              Object.defineProperty(this, 'type', { value: e }),
              e
            );
          },
        }),
        t
      );
    },
    Kt = {
      map: me,
      forEach: function (e, t, n) {
        me(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          me(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          me(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!ue(e))
          throw new Error('React.Children.only expected to receive a single React element child.');
        return e;
      },
    };
  (e.Children = Kt),
    (e.Component = L),
    (e.Fragment = r),
    (e.Profiler = a),
    (e.PureComponent = Y),
    (e.StrictMode = o),
    (e.Suspense = s),
    (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zt),
    (e.act = qt),
    (e.cloneElement = Xt),
    (e.createContext = function (e) {
      var t = {
        $$typeof: u,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      t.Provider = { $$typeof: i, _context: t };
      var n = !1,
        r = !1,
        o = !1,
        a = { $$typeof: u, _context: t };
      return (
        Object.defineProperties(a, {
          Provider: {
            get: function () {
              return (
                r ||
                  ((r = !0),
                  E(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                  )),
                t.Provider
              );
            },
            set: function (e) {
              t.Provider = e;
            },
          },
          _currentValue: {
            get: function () {
              return t._currentValue;
            },
            set: function (e) {
              t._currentValue = e;
            },
          },
          _currentValue2: {
            get: function () {
              return t._currentValue2;
            },
            set: function (e) {
              t._currentValue2 = e;
            },
          },
          _threadCount: {
            get: function () {
              return t._threadCount;
            },
            set: function (e) {
              t._threadCount = e;
            },
          },
          Consumer: {
            get: function () {
              return (
                n ||
                  ((n = !0),
                  E(
                    'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                  )),
                t.Consumer
              );
            },
          },
          displayName: {
            get: function () {
              return t.displayName;
            },
            set: function (e) {
              o ||
                (T(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  e
                ),
                (o = !0));
            },
          },
        }),
        (t.Consumer = a),
        (t._currentRenderer = null),
        (t._currentRenderer2 = null),
        t
      );
    }),
    (e.createElement = Qt),
    (e.createFactory = Gt),
    (e.createRef = function () {
      var e = { current: null };
      return Object.seal(e), e;
    }),
    (e.forwardRef = function (e) {
      null != e && e.$$typeof === f
        ? E(
            'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
          )
        : 'function' != typeof e
        ? E(
            'forwardRef requires a render function but was given %s.',
            null === e ? 'null' : typeof e
          )
        : 0 !== e.length &&
          2 !== e.length &&
          E(
            'forwardRef render functions accept exactly two parameters: props and ref. %s',
            1 === e.length
              ? 'Did you forget to use the ref parameter?'
              : 'Any additional parameter will be undefined.'
          ),
        null != e &&
          ((null == e.defaultProps && null == e.propTypes) ||
            E(
              'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
            ));
      var t,
        n = { $$typeof: c, render: e };
      return (
        Object.defineProperty(n, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return t;
          },
          set: function (n) {
            (t = n), e.name || e.displayName || (e.displayName = n);
          },
        }),
        n
      );
    }),
    (e.isValidElement = ue),
    (e.lazy = function (e) {
      var t,
        n,
        r = { $$typeof: p, _payload: { _status: he, _result: e }, _init: we };
      return (
        Object.defineProperties(r, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return t;
            },
            set: function (e) {
              E(
                'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (t = e),
                Object.defineProperty(r, 'defaultProps', { enumerable: !0 });
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return n;
            },
            set: function (e) {
              E(
                'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (n = e),
                Object.defineProperty(r, 'propTypes', { enumerable: !0 });
            },
          },
        }),
        r
      );
    }),
    (e.memo = function (e, t) {
      ke(e) ||
        E(
          'memo: The first argument must be a component. Instead received: %s',
          null === e ? 'null' : typeof e
        );
      var n,
        r = { $$typeof: f, type: e, compare: void 0 === t ? null : t };
      return (
        Object.defineProperty(r, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return n;
          },
          set: function (t) {
            (n = t), e.name || e.displayName || (e.displayName = t);
          },
        }),
        r
      );
    }),
    (e.startTransition = function (e, t) {
      var n = g.transition;
      g.transition = {};
      var r = g.transition;
      g.transition._updatedFibers = new Set();
      try {
        e();
      } finally {
        if (((g.transition = n), null === n && r._updatedFibers))
          r._updatedFibers.size > 10 &&
            T(
              'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
            ),
            r._updatedFibers.clear();
      }
    }),
    (e.unstable_act = qt),
    (e.useCallback = function (e, t) {
      return Ce().useCallback(e, t);
    }),
    (e.useContext = function (e) {
      var t = Ce();
      if (void 0 !== e._context) {
        var n = e._context;
        n.Consumer === e
          ? E(
              'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
            )
          : n.Provider === e &&
            E(
              'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
            );
      }
      return t.useContext(e);
    }),
    (e.useDebugValue = function (e, t) {
      return Ce().useDebugValue(e, t);
    }),
    (e.useDeferredValue = function (e) {
      return Ce().useDeferredValue(e);
    }),
    (e.useEffect = function (e, t) {
      return Ce().useEffect(e, t);
    }),
    (e.useId = function () {
      return Ce().useId();
    }),
    (e.useImperativeHandle = function (e, t, n) {
      return Ce().useImperativeHandle(e, t, n);
    }),
    (e.useInsertionEffect = function (e, t) {
      return Ce().useInsertionEffect(e, t);
    }),
    (e.useLayoutEffect = function (e, t) {
      return Ce().useLayoutEffect(e, t);
    }),
    (e.useMemo = function (e, t) {
      return Ce().useMemo(e, t);
    }),
    (e.useReducer = function (e, t, n) {
      return Ce().useReducer(e, t, n);
    }),
    (e.useRef = function (e) {
      return Ce().useRef(e);
    }),
    (e.useState = function (e) {
      return Ce().useState(e);
    }),
    (e.useSyncExternalStore = function (e, t, n) {
      return Ce().useSyncExternalStore(e, t, n);
    }),
    (e.useTransition = function () {
      return Ce().useTransition();
    }),
    (e.version = '18.3.1');
});
