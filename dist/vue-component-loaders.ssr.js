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
}var script$2 = {
  props: {
    borderRadius: {
      type: Number,
      default: 50
    },
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    colour: {
      type: String,
      default: "#db6666"
    },
    balls: {
      type: Number,
      default: 3
    },
    symmetry: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  }
};var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-a64b5ea6");

var render$2 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    class: "vcl-bounce-shape--container",
    style: {
      width: "".concat($props.direction === 'horizontal' ? $props.width * $props.balls + 'px' : $props.width + 'px'),
      height: "".concat($props.direction === 'vertical' ? $props.height * $props.balls + 'px' : $props.height + 'px'),
      flexDirection: "".concat($props.direction === 'horizontal' ? 'row' : 'column')
    }
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.balls, function (index) {
    return vue.openBlock(), vue.createBlock("div", {
      key: index,
      class: "vcl-bounce--shape",
      style: {
        width: "".concat($props.width, "px"),
        height: "".concat($props.height, "px"),
        background: $props.colour,
        'borderRadius': "".concat($props.borderRadius, "%"),
        '--colourVar': $props.colour,
        '--delay': "".concat($props.symmetry === false ? index / 10 : index, "s")
      }
    }, null, 4);
  }), 128))], 4);
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
}var css_248z$2 = "\n.vcl-bounce-shape--container[data-v-a64b5ea6] {\n  display: flex;\n}\n.vcl-bounce--shape[data-v-a64b5ea6] {\n  border-radius: var(--borderRadius);\n  animation-iteration-count: infinite;\n}\n.vcl-bounce--shape[data-v-a64b5ea6]:nth-child(1n) {\n  animation: bounceAnimation-a64b5ea6 1s linear;\n  animation-delay: var(--delay);\n  animation-iteration-count: infinite;\n}\n@keyframes bounceAnimation-a64b5ea6 {\n0% {\n    transform: scale(1, 1) translateY(0);\n}\n10% {\n    transform: scale(1.1, 0.9) translateY(0);\n}\n30% {\n    transform: scale(0.9, 1.1) translateY(-100px);\n}\n50% {\n    transform: scale(1.05, 0.95) translateY(0);\n}\n57% {\n    transform: scale(1, 1) translateY(-7px);\n}\n64% {\n    transform: scale(1, 1) translateY(0);\n}\n100% {\n    transform: scale(1, 1) translateY(0);\n}\n}\n";
styleInject(css_248z$2);script$2.render = render$2;
script$2.__scopeId = "data-v-a64b5ea6";var script$1 = {
  props: {
    width: {
      type: Number,
      default: 250
    },
    height: {
      type: Number,
      default: 250
    },
    colour: {
      type: String,
      default: "#db6666"
    },
    balls: {
      type: Number,
      default: 8
    },
    ballSize: {
      type: Number,
      default: 50
    },
    spacing: {
      type: Number,
      default: 1
    },
    speed: {
      type: String,
      default: "4s"
    },
    rotationAmount: {
      type: Number,
      default: 720
    }
  }
};var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-53e33f72");

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    class: "vcl-spinner-ball--container",
    style: {
      width: "".concat($props.width, "px"),
      height: "".concat($props.height, "px"),
      margin: "".concat($props.ballSize / 2, "px")
    }
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.balls, function (index) {
    return vue.openBlock(), vue.createBlock("div", {
      key: index,
      class: "vcl-circle--shape",
      style: {
        background: $props.colour,
        width: "".concat($props.ballSize, "px"),
        height: "".concat($props.ballSize, "px"),
        margin: "".concat(-$props.ballSize / 2, "px"),
        '--degree': "".concat(index * 45, "deg"),
        '--tranlateSpacing': "-".concat($props.width / 2, "px"),
        '--colourVar': $props.colour,
        '--speed': $props.speed,
        '--rotationAmount': "".concat($props.rotationAmount, "deg"),
        transform: "rotate(".concat(-index * $props.spacing * 45, "deg) translateY(-").concat($props.width / 2, "px)")
      }
    }, null, 4);
  }), 128))], 4);
});var css_248z$1 = "\n.vcl-spinner-ball--container[data-v-53e33f72] {\n  position: relative;\n}\n.vcl-spinner-ball--container[data-v-53e33f72]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.vcl-circle--shape[data-v-53e33f72] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  border-radius: 50%;\n  animation: rotateAnimation-53e33f72 var(--speed) infinite reverse;\n}\n@keyframes rotateAnimation-53e33f72 {\n50% {\n    transform: rotate(var(--rotationAmount)) translateY(var(--tranlateSpacing));\n}\n}\n";
styleInject(css_248z$1);script$1.render = render$1;
script$1.__scopeId = "data-v-53e33f72";var script = {
  props: {
    borderRadius: {
      type: Number,
      default: 50
    },
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    pulseRadius: {
      type: Number,
      default: 50
    },
    colour: {
      type: String,
      default: "#db6666"
    }
  }
};var _withId = /*#__PURE__*/vue.withScopeId("data-v-086591f6");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    class: "vcl-pulse--container",
    style: {
      width: "".concat($props.width, "px"),
      height: "".concat($props.height, "px")
    }
  }, [vue.createVNode("div", {
    class: "vcl-pulse--shape",
    style: {
      width: "".concat($props.width, "px"),
      height: "".concat($props.height, "px"),
      background: $props.colour,
      '--colourVar': $props.colour,
      '--borderRadius': "".concat($props.borderRadius, "%"),
      '--pulseRadius': "".concat($props.pulseRadius, "%")
    }
  }, null, 4)], 4);
});var css_248z = "\n.vcl-pulse--container[data-v-086591f6] {\n  display: block;\n  position: relative;\n}\n.vcl-pulse--shape[data-v-086591f6] {\n  border-radius: var(--borderRadius);\n  z-index: 10;\n}\n.vcl-pulse--shape[data-v-086591f6]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--pulseRadius);\n  background: var(--colourVar);\n  animation: pulseAnimation-086591f6 2s infinite;\n  z-index: -2;\n}\n@keyframes pulseAnimation-086591f6 {\n0% {\n    transform: scale(0.9);\n    opacity: 1;\n}\n100% {\n    transform: scale(1.4);\n    opacity: 0;\n}\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-086591f6";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,Bounce: script$2,CollapseCircle: script$1,Pulse: script});var install = function installVueComponentLoaders(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,Bounce: script$2,CollapseCircle: script$1,Pulse: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;