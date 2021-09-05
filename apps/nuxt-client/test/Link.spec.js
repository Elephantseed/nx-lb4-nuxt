import { mount } from '@vue/test-utils';
import Link from '../components/Link.vue';

describe('Link', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Link,{
      stubs: {
        NuxtLink: true,
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
