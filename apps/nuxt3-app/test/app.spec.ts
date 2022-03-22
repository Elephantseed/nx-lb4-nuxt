import { mount, shallowMount } from '@vue/test-utils'
// import App from '../app.vue'
import Index from '../pages/index.vue'

test('app.vue uses mounts', async () => {
  // const wrapper = mount(App)
  const wrapper = mount(Index)
  console.log(wrapper.html())
  expect(wrapper.html()).toContain('Elephant Seed')
  expect(wrapper.html()).toContain('Hello world')
  expect(wrapper.html()).toContain('Count: 0')

  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Count: 1')
})

test('app.vue uses shallowMount', async () => {
  const wrapper = shallowMount(Index)
  expect(wrapper.html()).toContain('Elephant Seed')
  expect(wrapper.html()).not.toContain('Hello world')
  expect(wrapper.html()).toContain('Count: 0')

  // @ts-ignore TODO: Improve types for `findComponent`
  // await wrapper.findComponent(Hello).vm.$emit('greet')
  // expect(wrapper.html()).toContain('Count: 1')
})
