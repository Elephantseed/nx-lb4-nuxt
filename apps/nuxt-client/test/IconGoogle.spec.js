import { mount } from '@vue/test-utils';
import IconGoogle from '../components/IconGoogle';

describe('IconGoogle', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IconGoogle);
    expect(wrapper.vm).toBeTruthy();
  });
});
