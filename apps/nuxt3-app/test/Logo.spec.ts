import { mount } from '@vue/test-utils';
import Logo from '../components/icons/logo.vue';

describe('logo.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo);
    expect(wrapper.vm).toBeTruthy();
  });
});
