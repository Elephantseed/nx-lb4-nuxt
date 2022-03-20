import { mount } from '@vue/test-utils';
import IconGithub from '../components/icons/IconGithub.vue';

describe('IconGithub', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IconGithub);
    expect(wrapper.vm).toBeTruthy();
  });
});
