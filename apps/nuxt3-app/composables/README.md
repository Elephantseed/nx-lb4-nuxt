The Composition API introduced in Vue 3 is not a replacement to the Options API, but enables better logic reuse throughout an application, and a more natural way to group code by concerns in complex components.

Used with the setup keyword in the <script> definition, here is the above component rewritten with Composition API and Nuxt 3’s auto-imported Reactivity APIs:

```
<script setup>
  const count = ref(0);
  const increment = () => count.value++;
</script>
```

The goal of Nuxt 3 is to provide a great developer experience around the composition API.

Use auto-imported Reactivity functions from Vue and Nuxt 3 built-in composables .
Write your own auto-imported reusable functions in the composables/ directory.
