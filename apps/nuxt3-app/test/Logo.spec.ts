import { mount } from '@vue/test-utils';
import Logo from '../components/icons/Logo.vue';

describe('Logo.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo);
    expect(wrapper.vm).toBeTruthy();
  });
});
