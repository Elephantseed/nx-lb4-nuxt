import { mount, shallowMount } from '@vue/test-utils';
import Index from '../pages/index.vue';
// This test showcases the difference between 'mount' and 'shallowMount'
test('app.vue uses mounts', async () => {
  const wrapper = mount(Index);
  expect(wrapper.html()).toContain('Elephant Seed');
  expect(wrapper.html()).toContain('Write BDD tests to avoid');
  const svg = await wrapper.find('#logo');
  expect(svg.classes().join(' ').toString()).toContain(
    'NuxtLogo h-28 sm:h-32 animate-pulse max-w-md mx-auto'
  );
});

test('app.vue uses shallowMount', async () => {
  const wrapper = shallowMount(Index);
  expect(wrapper.html()).toContain('Elephant Seed');
  const svg = await wrapper.find('icons-logo-stub ');
  expect(svg).toBeTruthy();
});
