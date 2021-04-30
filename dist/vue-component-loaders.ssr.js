'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$2 = /*#__PURE__*/vue.defineComponent({
  name: 'VueComponentLoadersSample',
  // vue component name
  data: function data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },
  computed: {
    changedBy: function changedBy() {
      var message = this.message;
      if (!message.action) return 'initialized';
      return "".concat(message.action, " ").concat(message.amount || '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-3334ac06");

vue.pushScopeId("data-v-3334ac06");

var _hoisted_1$2 = {
  class: "vue-component-loaders-sample"
};

var _hoisted_2$2 = /*#__PURE__*/vue.createTextVNode(".");

vue.popScopeId();

var render$2 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [vue.createVNode("p", null, [vue.createTextVNode("The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1), vue.createVNode("b", null, vue.toDisplayString(_ctx.counter), 1), _hoisted_2$2]), vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.increment && _ctx.increment.apply(_ctx, arguments);
    })
  }, " Click +1 "), vue.createVNode("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.decrement && _ctx.decrement.apply(_ctx, arguments);
    })
  }, " Click -1 "), vue.createVNode("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.increment(5);
    })
  }, " Click +5 "), vue.createVNode("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.decrement(5);
    })
  }, " Click -5 "), vue.createVNode("button", {
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.reset && _ctx.reset.apply(_ctx, arguments);
    })
  }, " Reset ")]);
});function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$2 = "\n.vue-component-loaders-sample[data-v-3334ac06] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.vue-component-loaders-sample p[data-v-3334ac06] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z$2);script$2.render = render$2;
script$2.__scopeId = "data-v-3334ac06";var script$1 = {};var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-c8cdcbe0");

vue.pushScopeId("data-v-c8cdcbe0");

var _hoisted_1$1 = {
  class: "spinner--container"
};

var _hoisted_2$1 = /*#__PURE__*/vue.createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/vue.createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

var _hoisted_3$1 = /*#__PURE__*/vue.createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/vue.createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

var _hoisted_4$1 = /*#__PURE__*/vue.createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/vue.createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

var _hoisted_5$1 = /*#__PURE__*/vue.createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/vue.createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

vue.popScopeId();

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [_hoisted_2$1, _hoisted_3$1, _hoisted_4$1, _hoisted_5$1]);
});var css_248z$1 = "\n.spinner--container[data-v-c8cdcbe0] {\n  display: grid;\n  align-items: flex-end;\n  grid-template-columns: auto auto auto auto auto;\n  width: 600px;\n  height: 300px;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n.scale--animation[data-v-c8cdcbe0] {\n  animation: bounce-c8cdcbe0 1s linear;\n  animation-iteration-count: infinite;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(1) {\n  animation-delay: 0s;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(2) {\n  animation-delay: 0.25s;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(3) {\n  animation-delay: 0.5s;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(4) {\n  animation-delay: 0.75s;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(5) {\n  animation-delay: 1s;\n}\n@keyframes bounce-c8cdcbe0 {\n0% {\n    transform: scale(1, 1) translateY(0);\n}\n10% {\n    transform: scale(1.1, 0.9) translateY(0);\n}\n30% {\n    transform: scale(0.9, 1.1) translateY(-100px);\n}\n50% {\n    transform: scale(1.05, 0.95) translateY(0);\n}\n57% {\n    transform: scale(1, 1) translateY(-7px);\n}\n64% {\n    transform: scale(1, 1) translateY(0);\n}\n100% {\n    transform: scale(1, 1) translateY(0);\n}\n}\n@keyframes wait-c8cdcbe0 {\n0% {\n    transform: translateY(0px);\n}\n50% {\n    transform: translateY(0px);\n}\n100% {\n    transform: translateY(0px);\n}\n}\n";
styleInject(css_248z$1);script$1.render = render$1;
script$1.__scopeId = "data-v-c8cdcbe0";var script = {};var _withId = /*#__PURE__*/vue.withScopeId("data-v-bb0af90a");

vue.pushScopeId("data-v-bb0af90a");

var _hoisted_1 = {
  class: "spinner--container"
};

var _hoisted_2 = /*#__PURE__*/vue.createVNode("div", null, null, -1);

var _hoisted_3 = /*#__PURE__*/vue.createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/vue.createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

var _hoisted_4 = /*#__PURE__*/vue.createVNode("div", null, null, -1);

var _hoisted_5 = /*#__PURE__*/vue.createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/vue.createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

var _hoisted_6 = /*#__PURE__*/vue.createVNode("div", null, null, -1);

var _hoisted_7 = /*#__PURE__*/vue.createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/vue.createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

var _hoisted_8 = /*#__PURE__*/vue.createVNode("div", null, null, -1);

var _hoisted_9 = /*#__PURE__*/vue.createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/vue.createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

var _hoisted_10 = /*#__PURE__*/vue.createVNode("div", null, null, -1);

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10]);
});var css_248z = "\n.spinner--container[data-v-bb0af90a] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-template-rows: auto auto auto;\n  width: 450px;\n  height: 450px;\n  animation-name: example-bb0af90a;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n.scale--animation[data-v-bb0af90a] {\n  animation-name: scale-bb0af90a;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n.scale--animation[data-v-bb0af90a]:nth-child(2) {\n  animation-delay: 0s;\n}\n.scale--animation[data-v-bb0af90a]:nth-child(4) {\n  animation-delay: 0.5s;\n}\n.scale--animation[data-v-bb0af90a]:nth-child(6) {\n  animation-delay: 1s;\n}\n.scale--animation[data-v-bb0af90a]:nth-child(8) {\n  animation-delay: 1.5s;\n}\n@keyframes example-bb0af90a {\n0% {\n    transform: rotate(0deg);\n}\n25% {\n}\n50% {\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes scale-bb0af90a {\n0% {\n    transform: scale(1);\n}\n50% {\n    transform: scale(0.5);\n}\n100% {\n    transform: scale(1);\n}\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-bb0af90a";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,VueComponentLoadersSample: script$2,Bounce: script$1,Spinner: script});var install = function installVueComponentLoaders(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,VueComponentLoadersSample: script$2,Bounce: script$1,Spinner: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;