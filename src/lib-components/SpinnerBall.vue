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
        '--tranlateSpacing': `-${width / 2}px`,
        '--colourVar': colour,
        '--speed': speed,
        '--rotationAmount': `${rotationAmount}deg`,
        transform: `rotate(${-index * spacing * 45}deg) translateY(-${
          width / 2
        }px)`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 250 },
    height: { type: Number, default: 250 },
    colour: { type: String, default: "#db6666" },
    balls: { type: Number, default: 8 },
    ballSize: { type: Number, default: 50 },
    spacing: { type: Number, default: 1 },
    speed: { type: String, default: "4s" },
    rotationAmount: { type: Number, default: 720 },
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
  animation: rotateAnimation var(--speed) infinite reverse;
}

@keyframes rotateAnimation {
  50% {
    transform: rotate(var(--rotationAmount)) translateY(var(--tranlateSpacing));
  }
}
</style>
