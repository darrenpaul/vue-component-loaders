import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withScopeId } from 'vue';

var script$2 = /*#__PURE__*/defineComponent({
  name: 'VueComponentLoadersSample',

  // vue component name
  data() {
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
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _withId$2 = /*#__PURE__*/withScopeId("data-v-3334ac06");

pushScopeId("data-v-3334ac06");

const _hoisted_1$2 = {
  class: "vue-component-loaders-sample"
};

const _hoisted_2$2 = /*#__PURE__*/createTextVNode(".");

popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$2, [createVNode("p", null, [createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2$2]), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment && _ctx.increment(...args))
  }, " Click +1 "), createVNode("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.decrement && _ctx.decrement(...args))
  }, " Click -1 "), createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.increment(5))
  }, " Click +5 "), createVNode("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.decrement(5))
  }, " Click -5 "), createVNode("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.reset && _ctx.reset(...args))
  }, " Reset ")]);
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

var css_248z$2 = "\n.vue-component-loaders-sample[data-v-3334ac06] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.vue-component-loaders-sample p[data-v-3334ac06] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-3334ac06";

var script$1 = {};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-c8cdcbe0");

pushScopeId("data-v-c8cdcbe0");

const _hoisted_1$1 = {
  class: "spinner--container"
};

const _hoisted_2$1 = /*#__PURE__*/createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

const _hoisted_3$1 = /*#__PURE__*/createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

const _hoisted_4$1 = /*#__PURE__*/createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

const _hoisted_5$1 = /*#__PURE__*/createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$1, [_hoisted_2$1, _hoisted_3$1, _hoisted_4$1, _hoisted_5$1]);
});

var css_248z$1 = "\n.spinner--container[data-v-c8cdcbe0] {\n  display: grid;\n  align-items: flex-end;\n  grid-template-columns: auto auto auto auto auto;\n  width: 600px;\n  height: 300px;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n.scale--animation[data-v-c8cdcbe0] {\n  animation: bounce-c8cdcbe0 1s linear;\n  animation-iteration-count: infinite;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(1) {\n  animation-delay: 0s;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(2) {\n  animation-delay: 0.25s;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(3) {\n  animation-delay: 0.5s;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(4) {\n  animation-delay: 0.75s;\n}\n.scale--animation[data-v-c8cdcbe0]:nth-child(5) {\n  animation-delay: 1s;\n}\n@keyframes bounce-c8cdcbe0 {\n0% {\n    transform: scale(1, 1) translateY(0);\n}\n10% {\n    transform: scale(1.1, 0.9) translateY(0);\n}\n30% {\n    transform: scale(0.9, 1.1) translateY(-100px);\n}\n50% {\n    transform: scale(1.05, 0.95) translateY(0);\n}\n57% {\n    transform: scale(1, 1) translateY(-7px);\n}\n64% {\n    transform: scale(1, 1) translateY(0);\n}\n100% {\n    transform: scale(1, 1) translateY(0);\n}\n}\n@keyframes wait-c8cdcbe0 {\n0% {\n    transform: translateY(0px);\n}\n50% {\n    transform: translateY(0px);\n}\n100% {\n    transform: translateY(0px);\n}\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-c8cdcbe0";

var script = {};

const _withId = /*#__PURE__*/withScopeId("data-v-bb0af90a");

pushScopeId("data-v-bb0af90a");

const _hoisted_1 = {
  class: "spinner--container"
};

const _hoisted_2 = /*#__PURE__*/createVNode("div", null, null, -1);

const _hoisted_3 = /*#__PURE__*/createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

const _hoisted_4 = /*#__PURE__*/createVNode("div", null, null, -1);

const _hoisted_5 = /*#__PURE__*/createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

const _hoisted_6 = /*#__PURE__*/createVNode("div", null, null, -1);

const _hoisted_7 = /*#__PURE__*/createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

const _hoisted_8 = /*#__PURE__*/createVNode("div", null, null, -1);

const _hoisted_9 = /*#__PURE__*/createVNode("svg", {
  class: "scale--animation",
  xmlns: "http://www.w3.org/2000/svg",
  width: "150",
  height: "150",
  viewBox: "0 0 150 150"
}, [/*#__PURE__*/createVNode("circle", {
  id: "Ellipse_1",
  "data-name": "Ellipse 1",
  cx: "75",
  cy: "75",
  r: "75",
  fill: "#db6666"
})], -1);

const _hoisted_10 = /*#__PURE__*/createVNode("div", null, null, -1);

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10]);
});

var css_248z = "\n.spinner--container[data-v-bb0af90a] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-template-rows: auto auto auto;\n  width: 450px;\n  height: 450px;\n  animation-name: example-bb0af90a;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n.scale--animation[data-v-bb0af90a] {\n  animation-name: scale-bb0af90a;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n.scale--animation[data-v-bb0af90a]:nth-child(2) {\n  animation-delay: 0s;\n}\n.scale--animation[data-v-bb0af90a]:nth-child(4) {\n  animation-delay: 0.5s;\n}\n.scale--animation[data-v-bb0af90a]:nth-child(6) {\n  animation-delay: 1s;\n}\n.scale--animation[data-v-bb0af90a]:nth-child(8) {\n  animation-delay: 1.5s;\n}\n@keyframes example-bb0af90a {\n0% {\n    transform: rotate(0deg);\n}\n25% {\n}\n50% {\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes scale-bb0af90a {\n0% {\n    transform: scale(1);\n}\n50% {\n    transform: scale(0.5);\n}\n100% {\n    transform: scale(1);\n}\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-bb0af90a";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VueComponentLoadersSample: script$2,
  Bounce: script$1,
  Spinner: script
});

// Import vue components

const install = function installVueComponentLoaders(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$1 as Bounce, script as Spinner, script$2 as VueComponentLoadersSample };
