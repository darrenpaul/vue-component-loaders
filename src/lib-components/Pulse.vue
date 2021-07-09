<template>
  <div
    class="vcl-pulse--container"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    <div
      class="vcl-pulse--shape"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        background: colour,
        '--colourVar': colour,
        '--borderRadius': `${borderRadius}%`,
        '--pulseRadius': `${pulseRadius}%`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    borderRadius: { type: Number, default: 50 },
    width: { type: Number, default: 150 },
    height: { type: Number, default: 150 },
    pulseRadius: { type: Number, default: 50 },
    colour: { type: String, default: "#db6666" },
  },
};
</script>

<style scoped>
.vcl-pulse--container {
  display: block;
  position: relative;
}

.vcl-pulse--shape {
  border-radius: var(--borderRadius);
  z-index: 10;
}

.vcl-pulse--shape::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: var(--pulseRadius);
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
