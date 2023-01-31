import { beforeEach, describe, expect, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import AdtTextField from '../../../src/components/adt-text-field/adt-text-field.vue';
import { getAllColorsAsArray } from '../../../src/utils';

describe('AdtTextField', () => {
  let wrapper: VueWrapper<InstanceType<typeof AdtTextField>>;

  beforeEach(() => {
    wrapper = mount(AdtTextField, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
      slots: {},
      attachTo: document.body,
    });
  });

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should be possible to change text field color', async () => {
    for (const color of getAllColorsAsArray()) {
      await wrapper.setProps({ color });
      expect(wrapper.classes()).toContain(`${color}-border-form`);
    }
  });

  it('Should be possible to change border-radius style', async () => {
    expect(wrapper.classes()).not.toContain('br-rounded');
    expect(wrapper.classes()).not.toContain('br-sharp');

    await wrapper.setProps({ rounded: true });
    expect(wrapper.classes()).toContain('br-rounded');

    await wrapper.setProps({ sharp: true });
    expect(wrapper.classes()).toContain('br-sharp');
  });

  it('Should be possible to define a placeholder', async () => {
    await wrapper.setProps({ placeholder: 'My placeholder' });
    const input = wrapper.find('input');
    expect((input.element as HTMLInputElement).placeholder).toBe('My placeholder');
  });

  it('Should update the model value', async () => {
    await wrapper.find('input').setValue('test');
    expect(wrapper.props('modelValue')).toBe('test');

    await wrapper.setProps({ modelValue: 'other test' });
    const input = wrapper.find('input');
    expect(input.element.value).toBe('other test');
  });

  it('Should focus input when component clicked', async () => {
    await wrapper.find('div').trigger('click');
    expect(wrapper.find('input').element).toBe(document.activeElement);
  });
});
