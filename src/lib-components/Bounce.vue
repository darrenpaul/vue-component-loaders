<template>
  <div
    class="vcl-bounce-shape--container"
    :style="{
      width: `${
        direction === 'horizontal' ? width * balls + 'px' : width + 'px'
      }`,
      height: `${
        direction === 'vertical' ? height * balls + 'px' : height + 'px'
      }`,
      flexDirection: `${direction === 'horizontal' ? 'row' : 'column'}`,
    }"
  >
    <div
      v-for="index in balls"
      :key="index"
      class="vcl-bounce--shape"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        background: colour,
        'borderRadius': `${borderRadius}%`,
        '--colourVar': colour,
        '--delay': `${symmetry === false ? index / 10 : index}s`,
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
    colour: { type: String, default: "#db6666" },
    balls: { type: Number, default: 3 },
    symmetry: { type: Boolean, default: false },
    direction: { type: String, default: "horizontal" },
  },
};
</script>

<style scoped>
.vcl-bounce-shape--container {
  display: flex;
}

.vcl-bounce--shape {
  border-radius: var(--borderRadius);
  animation-iteration-count: infinite;
}

.vcl-bounce--shape:nth-child(1n) {
  animation: bounceAnimation 1s linear;
  animation-delay: var(--delay);
  animation-iteration-count: infinite;
}

@keyframes bounceAnimation {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-100px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>
