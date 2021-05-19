import { openBlock, createBlock, Fragment, renderList, withScopeId, createVNode } from 'vue';

var script$2 = {
  props: {
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
};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-1c74d3ee");

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: "vcl-bounce-ball--container",
    style: {
      width: `${$props.direction === 'horizontal' ? $props.width * $props.balls + 'px' : $props.width + 'px'}`,
      height: `${$props.direction === 'vertical' ? $props.height * $props.balls + 'px' : $props.height + 'px'}`,
      flexDirection: `${$props.direction === 'horizontal' ? 'row' : 'column'}`
    }
  }, [(openBlock(true), createBlock(Fragment, null, renderList($props.balls, index => {
    return openBlock(), createBlock("div", {
      key: index,
      class: "vcl-bounce--shape",
      style: {
        width: `${$props.width}px`,
        height: `${$props.height}px`,
        background: $props.colour,
        '--colourVar': $props.colour,
        '--delay': `${$props.symmetry === false ? index / 10 : index}s`
      }
    }, null, 4);
  }), 128))], 4);
});

function styleInject(css, ref) {
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
}

var css_248z$2 = "\n.vcl-bounce-ball--container[data-v-1c74d3ee] {\n  display: flex;\n}\n.vcl-bounce--shape[data-v-1c74d3ee] {\n  border-radius: 50%;\n  animation-iteration-count: infinite;\n}\n.vcl-bounce--shape[data-v-1c74d3ee]:nth-child(1n) {\n  animation: bounceAnimation-1c74d3ee 1s linear;\n  animation-delay: var(--delay);\n  animation-iteration-count: infinite;\n}\n@keyframes bounceAnimation-1c74d3ee {\n0% {\n    transform: scale(1, 1) translateY(0);\n}\n10% {\n    transform: scale(1.1, 0.9) translateY(0);\n}\n30% {\n    transform: scale(0.9, 1.1) translateY(-100px);\n}\n50% {\n    transform: scale(1.05, 0.95) translateY(0);\n}\n57% {\n    transform: scale(1, 1) translateY(-7px);\n}\n64% {\n    transform: scale(1, 1) translateY(0);\n}\n100% {\n    transform: scale(1, 1) translateY(0);\n}\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-1c74d3ee";

var script$1 = {
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
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-53e33f72");

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: "vcl-spinner-ball--container",
    style: {
      width: `${$props.width}px`,
      height: `${$props.height}px`,
      margin: `${$props.ballSize / 2}px`
    }
  }, [(openBlock(true), createBlock(Fragment, null, renderList($props.balls, index => {
    return openBlock(), createBlock("div", {
      key: index,
      class: "vcl-circle--shape",
      style: {
        background: $props.colour,
        width: `${$props.ballSize}px`,
        height: `${$props.ballSize}px`,
        margin: `${-$props.ballSize / 2}px`,
        '--degree': `${index * 45}deg`,
        '--tranlateSpacing': `-${$props.width / 2}px`,
        '--colourVar': $props.colour,
        '--speed': $props.speed,
        '--rotationAmount': `${$props.rotationAmount}deg`,
        transform: `rotate(${-index * $props.spacing * 45}deg) translateY(-${$props.width / 2}px)`
      }
    }, null, 4);
  }), 128))], 4);
});

var css_248z$1 = "\n.vcl-spinner-ball--container[data-v-53e33f72] {\n  position: relative;\n}\n.vcl-spinner-ball--container[data-v-53e33f72]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.vcl-circle--shape[data-v-53e33f72] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  border-radius: 50%;\n  animation: rotateAnimation-53e33f72 var(--speed) infinite reverse;\n}\n@keyframes rotateAnimation-53e33f72 {\n50% {\n    transform: rotate(var(--rotationAmount)) translateY(var(--tranlateSpacing));\n}\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-53e33f72";

var script = {
  props: {
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    shapeRadius: {
      type: Number,
      default: 50
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
};

const _withId = /*#__PURE__*/withScopeId("data-v-3d26d383");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: "vcl-pulse-ball--container",
    style: {
      width: `${$props.width}px`,
      height: `${$props.height}px`
    }
  }, [createVNode("div", {
    class: "vcl-circle--shape",
    style: {
      width: `${$props.width}px`,
      height: `${$props.height}px`,
      background: $props.colour,
      '--colourVar': $props.colour,
      '--shapeRadius': `${$props.shapeRadius}%`,
      '--pulseRadius': `${$props.pulseRadius}%`
    }
  }, null, 4)], 4);
});

var css_248z = "\n.vcl-pulse-ball--container[data-v-3d26d383] {\n  display: block;\n  position: relative;\n}\n.vcl-circle--shape[data-v-3d26d383] {\n  border-radius: var(--shapeRadius);\n  z-index: 10;\n}\n.vcl-circle--shape[data-v-3d26d383]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--pulseRadius);\n  background: var(--colourVar);\n  animation: pulseAnimation-3d26d383 2s infinite;\n  z-index: -2;\n}\n@keyframes pulseAnimation-3d26d383 {\n0% {\n    transform: scale(0.9);\n    opacity: 1;\n}\n100% {\n    transform: scale(1.4);\n    opacity: 0;\n}\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-3d26d383";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Bouncel: script$2,
  CollapseCircle: script$1,
  Pulse: script
});

// Import vue components

const install = function installVueComponentLoaders(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$2 as Bouncel, script$1 as CollapseCircle, script as Pulse };
