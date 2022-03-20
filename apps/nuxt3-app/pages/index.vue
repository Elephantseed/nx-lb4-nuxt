<template>
  <div class="min-h-screen bg-gray-100 py-1 flex flex-col">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      />
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <IconsLogo class="h-28 sm:h-32 animate-pulse max-w-md mx-auto" />
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <h1 class="text-6xl text-center font-normal leading-normal mt-0 mb-2 text-emerald-800">
                Elephant Seed
              </h1>
              <p>
                This is another <a
                href="https://github.com/Elephantseed/nx-lb4-nuxt"
                target="_blank"
                rel="noopener noreferrer"
                class="text-overwrittenGreen-600"
              >
                seed
              </a> to develop rich SPA in the blink of an eye:
              </p>
              <ul class="list-disc space-y-2">
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg class="flex-shrink-0 h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Use <a
                    href="https://nx.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-overwrittenGreen-600"
                  >
                    Nx
                  </a>
                    to manage your
                    <code class="text-sm font-bold text-gray-900">monorepo</code> effortlessly
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg class="flex-shrink-0 h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Get the best development experience writing components <code
                    class="text-sm font-bold text-gray-900"
                  >without</code> touching a CSS using
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-overwrittenGreen-600"
                    >
                      Tailwind
                    </a>
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg class="flex-shrink-0 h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Write BDD tests to avoid <code class="text-sm font-bold text-gray-900">problems</code> using
                    Gherking language
                  </p>
                </li>
              </ul>
              <p>
                <a
                  href="https://play.tailwindcss.com"
                  class="text-overwrittenGreen-600 hover:text-overwrittenGreen-700"
                  target="_blank"
                  rel="noopener noreferrer"
                > Tailwind playground
                  &rarr; </a>
              </p>
            </div>
            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <Counter/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Counter from "../components/counters/counter";

export default defineComponent({
  components: { Counter }
});
</script>


