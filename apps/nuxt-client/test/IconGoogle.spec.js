import { mount } from '@vue/test-utils';
import IconGoogle from '../components/icons/IconGoogle';

describe('IconGoogle', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IconGoogle);
    expect(wrapper.vm).toBeTruthy();
  });
});
