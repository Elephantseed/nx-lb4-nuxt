<template>
  <div>
    Pinia counter:{{ store.$state.count }}
    <button @click="store.increment()">Hit me</button>
  </div>
</template>
<script setup>

import { useStore } from "~/store/store";

const store = useStore();
</script>
