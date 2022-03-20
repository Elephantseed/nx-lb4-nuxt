import { mount } from '@vue/test-utils';
import IconGoogle from '../components/icons/IconGoogle.vue';

describe('IconGoogle.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IconGoogle);
    expect(wrapper.vm).toBeTruthy();
  });
});
