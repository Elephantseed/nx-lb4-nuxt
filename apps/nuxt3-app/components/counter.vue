<template>
  <div
    class="flex flex-col items-center justify-center h-full space-y-2 text-xl"
  >
    <br/>
    <div class="flex items-center justify-center">
      <button
        @click="counter++"
        class="px-2 py-1 font-bold text-white bg-green-500 rounded hover:bg-green-700"
      >
        +
      </button>
      <span class="mx-2">{{ counter }}</span>
      <button
        @click="counter--"
        class="px-2 py-1 font-bold text-white bg-green-500 rounded hover:bg-green-700"
      >
        -
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const counter = ref(0);

    return {
      counter,
    };
  },
  layout: false
});
</script>
