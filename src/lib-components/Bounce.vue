<template>
  <div
    class="vcl-bounce--container"
    :style="{
      width: `${width * 4}px`,
      height: '150px',
    }"
  >
    <svg
      class="vcl-bounce--animation"
      :width="witdth"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <circle :cx="size" :cy="size" :r="size" :fill="colour" />
    </svg>

    <svg
      class="vcl-bounce--animation"
      :width="witdth"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <circle :cx="size" :cy="size" :r="size" :fill="colour" />
    </svg>

    <svg
      class="vcl-bounce--animation"
      :width="witdth"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <circle :cx="size" :cy="size" :r="size" :fill="colour" />
    </svg>

    <svg
      class="vcl-bounce--animation"
      :width="witdth"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <circle :cx="size" :cy="size" :r="size" :fill="colour" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 150 },
    height: { type: Number, default: 150 },
    colour: { type: String, default: "#db6666" },
  },
  computed: {
    size: function () {
      return this.width / 2;
    },
  },
};
</script>

<style scoped>
.vcl-bounce--container {
  display: grid;
  align-items: flex-end;
  grid-template-columns: auto auto auto auto auto;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

.vcl-bounce--animation {
  animation: bounceAnimation 1s linear;
  animation-iteration-count: infinite;
}

.vcl-bounce--animation:nth-child(1) {
  animation-delay: 0s;
}
.vcl-bounce--animation:nth-child(2) {
  animation-delay: 0.25s;
}
.vcl-bounce--animation:nth-child(3) {
  animation-delay: 0.5s;
}
.vcl-bounce--animation:nth-child(4) {
  animation-delay: 0.75s;
}
.vcl-bounce--animation:nth-child(5) {
  animation-delay: 1s;
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
