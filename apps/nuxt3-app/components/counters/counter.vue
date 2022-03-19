<template>
  <div
    class="flex flex-col items-center justify-center h-full space-y-2 text-xl"
  >
    <br />
    <div class="flex items-center justify-center">
      <button
        @click="store.increment()"
        class="px-2 py-1 font-bold text-white bg-green-500 rounded hover:bg-green-700"
      >
        +
      </button>
      <span class="mx-2">{{ store.$state.count }}</span>
      <button
        @click="store.decrement()"
        class="px-2 py-1 font-bold text-white bg-green-500 rounded hover:bg-green-700"
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
