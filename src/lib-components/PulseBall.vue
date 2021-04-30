<template>
  <div
    class="vcl-pulse-ball--container"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    <div
      class="vcl-circle--shape"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        background: colour,
        '--colourVar': colour,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 150 },
    height: { type: Number, default: 150 },
    colour: { type: String, default: "#db6666" },
  },
};
</script>

<style scoped>
.vcl-pulse-ball--container {
  display: block;
  position: relative;
}

.vcl-circle--shape {
  border-radius: 50%;
  z-index: 10;
}

.vcl-circle--shape::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--colourVar);
  animation: pulseAnimation 2s infinite;
  z-index: -2;
}

@keyframes pulseAnimation {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}
</style>
