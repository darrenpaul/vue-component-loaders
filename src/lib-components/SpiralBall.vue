<template>
  <div
    class="vcl-spinner-ball--container"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      margin: `${ballSize / 2}px`,
    }"
  >
    <div
      v-for="index in balls"
      :key="index"
      class="vcl-circle--shape"
      :style="{
        background: colour,
        width: `${ballSize}px`,
        height: `${ballSize}px`,
        margin: `${-ballSize / 2}px`,
        '--degree': `${index * 45}deg`,
        '--apple': `-250px`,
        '--colourVar': colour,
        transform: `rotate(${-index * spacing * 45}deg) translateY(-${-250}px)`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 500 },
    height: { type: Number, default: 500 },
    ballSize: { type: Number, default: 100 },
    spacing: { type: Number, default: 1 },
    balls: { type: Number, default: 8 },
    colour: { type: String, default: "#db6666" },
  },
};
</script>

<style scoped>
.vcl-spinner-ball--container {
  position: relative;
}

.vcl-spinner-ball--container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
}

.vcl-circle--shape {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  border-radius: 50%;
  animation: rotateAnimation 3s infinite reverse;
}

@keyframes rotateAnimation {
  0% {
    transform: rotate(--degree) translateY(250px);
  }
  50% {
    transform: rotate(720deg) translateY(250px);
  }
  100% {
    transform: rotate(--degree) translateY(250px);
  }
}
</style>
