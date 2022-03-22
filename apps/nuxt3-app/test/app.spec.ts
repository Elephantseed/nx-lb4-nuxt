import { mount, shallowMount } from '@vue/test-utils'
// import App from '../app.vue'
import Index from '../pages/index.vue'
// This test showcases the difference between 'mount' and 'shallowMount'
test('app.vue uses mounts', async () => {
  // const wrapper = mount(App)
  const wrapper = mount(Index)
  console.log(wrapper.html())
  expect(wrapper.html()).toContain('Elephant Seed')
  expect(wrapper.html()).toContain('Write BDD tests to avoid')

  const svg = await wrapper.find('svg')
  expect(svg.classes()).toContain('NuxtLogo h-28 sm:h-32 animate-pulse max-w-md mx-auto')
})

test('app.vue uses shallowMount', async () => {
  const wrapper = shallowMount(Index)
  console.log(wrapper.html())
  expect(wrapper.html()).toContain('Elephant Seed')
  const svg = await wrapper.find('svg')
  expect(svg.classes()).toContain('NuxtLogo h-28 sm:h-32 animate-pulse max-w-md mx-auto')
  // expect(wrapper.html()).toContain('Count: 0')

  // @ts-ignore TODO: Improve types for `findComponent`
  // await wrapper.findComponent(Hello).vm.$emit('greet')
  // expect(wrapper.html()).toContain('Count: 1')
})
