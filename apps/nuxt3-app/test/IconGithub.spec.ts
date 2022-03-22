import { mount } from '@vue/test-utils';
import IconGithub from '../components/icons/iconGithub.vue';

describe('IconGithub', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IconGithub);
    // console.log(wrapper.html())
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.html()).toContain('github icon')
  });
});
