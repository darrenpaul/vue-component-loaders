<h1 align="center" style="text-align: center;">Vue Component Loaders</h1>
<p align="center">This library was built for Vue 3,</a>.</p>

## 📦 Installation

```bash
npm i vue-component-loaders
```

## 🔧 Usage

There are a number of ways you can use this library! Here are a few examples:

**Global Component Registration**

```js
import { createApp } from "vue";
import App from "./App.vue";

import VueComponentLoaders from "vue-component-loaders";

createApp(App).use(VueComponentLoaders).mount("#app");
// Each loader can now be used in your templates anywhere in the app!
```

**Local Component Registration**

```js
import { PulseBall } from "vue-component-loaders";

export default {
  components: {
    PulseBall,
  },
};
```

## 📋 Available Loaders

**PulseBall Props and Defaults**

```js
width int: 150
height int: 150
colour str: "#db6666"
```

**BounceBall Props and Defaults**

```js
width int: 150
height int: 150
colour str: "#db6666"
balls int: 3 // This is the number of balls you would like.
symmetry bool: false // When true all the balls will bounce at the same .time
direction str: "horizontal" // This is the direction you would like to layout the balls options (horizontal, vertical).
```

**SpinnerBall Props and Defaults**

```js
width int: 250
height int: 250
colour str: "#db6666"
balls int: 8 // This is the number of balls you would like.
ballSize int: 50 // The size of the actual balls
spacing int: 1 // The spacing between each ball
speed str: "4s" // The speed at which the balls will rotate
rotationAmount int: 360 // How many rotations the balls will make before stopping
```

## 📣 Acknowledgements

This library is still WIP

## 🥂 License

Released under the [MIT license](https://github.com/Saeris/vue-spinners/blob/master/LICENSE.md).
