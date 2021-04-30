<template>
  <div
    class="vcl-spinner--container"
    :style="{
      width: `${width * 3}px`,
      height: `${height * 3}px`,
    }"
  >
    <span />
    <svg
      :class="['vcl-scale--animation', scale === true ? 'vcl-scale' : '']"
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <circle :cx="size" :cy="size" :r="size" :fill="colour" />
    </svg>

    <span />
    <svg
      :class="['vcl-scale--animation', scale === true ? 'vcl-scale' : '']"
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <circle :cx="size" :cy="size" :r="size" :fill="colour" />
    </svg>
    <span />
    <svg
      :class="['vcl-scale--animation', scale === true ? 'vcl-scale' : '']"
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <circle :cx="size" :cy="size" :r="size" :fill="colour" />
    </svg>
    <span />
    <svg
      :class="['vcl-scale--animation', scale === true ? 'vcl-scale' : '']"
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <circle :cx="size" :cy="size" :r="size" :fill="colour" />
    </svg>
    <span />
  </div>
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 150 },
    height: { type: Number, default: 150 },
    colour: { type: String, default: "#db6666" },
    scale: { type: Boolean, default: true },
  },
  computed: {
    size: function () {
      return this.width / 2;
    },
  },
};
</script>

<style scoped>
.vcl-spinner--container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  width: 450px;
  height: 450px;
  animation: rotateAnimation 4s linear;
  animation-iteration-count: infinite;
}

.vcl-scale {
  animation: scaleAnimation 4s;
  animation-iteration-count: infinite;
}

.vcl-scale:nth-child(2) {
  animation-delay: 0s;
}
.vcl-scale:nth-child(4) {
  animation-delay: 0.5s;
}
.vcl-scale:nth-child(6) {
  animation-delay: 1s;
}
.vcl-scale:nth-child(8) {
  animation-delay: 1.5s;
}

@keyframes rotateAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
