<template>
  <div
    class="flex flex-col items-center justify-center h-full space-y-2 text-xl"
  >
    <img
      class="relative right-0"
      width="50px"
      height="50px"
      src="https://pinia.vuejs.org/logo.svg"
      alt="pinia logo"
    >
    <div class="flex items-center justify-center">
      <button
        class="px-2 py-1 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        @click="store.increment()"
      >
        +
      </button>
      <span class="mx-2">{{ store.$state.count }}</span>
      <button
        class="px-2 py-1 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        @click="store.decrement()"
      >
        -
      </button>
    </div>
  </div>
</template>

<script setup>

import { useStore } from "~/store/store";

const store = useStore();
</script>
