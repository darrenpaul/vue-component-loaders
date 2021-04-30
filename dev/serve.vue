<script>
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueComponentLoadersSample } from '@/entry.esm';

export default defineComponent({
  name: "ServeDev",
});
</script>

<template>
  <div id="app">
    <PulseBall />
    <Bounce />
    <Spinner />
  </div>
</template>
