import { beforeEach, describe, expect, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import AdtButton from '../../../src/components/adt-button/adt-button.vue';
import { AdTechComponentColors, AdTechNumericColors, AdTechStatusColors } from '../../../src/enums';

describe('AdtButton', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(AdtButton, {
      props: {},
      slots: {
        default: 'Click me!',
      },
    });
  });

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toBe('Click me!');
    expect(wrapper.classes()).toContain('primary-bg');
    expect(wrapper.classes()).toContain('primary-bg-hover');
  });

  it('Should be possible to change the color', async () => {
    expect(wrapper.classes()).toContain('primary-bg');
    expect(wrapper.classes()).toContain('primary-bg-hover');

    for (const color of Object.values(AdTechComponentColors)) {
      await wrapper.setProps({ color: color });
      expect(wrapper.classes()).toContain(`${color}-bg`);
      expect(wrapper.classes()).toContain(`${color}-bg-hover`);
    }

    for (const color of Object.values(AdTechNumericColors)) {
      await wrapper.setProps({ color: color });
      expect(wrapper.classes()).toContain(`${color}-bg`);
      expect(wrapper.classes()).toContain(`${color}-bg-hover`);
    }

    for (const color of Object.values(AdTechStatusColors)) {
      await wrapper.setProps({ color: color });
      expect(wrapper.classes()).toContain(`${color}-fill`);
      expect(wrapper.classes()).toContain(`${color}-fill-hover`);
    }
  });

  it('Should be possible to make button rounded', async () => {
    expect(wrapper.classes()).not.toContain('br-rounded');

    await wrapper.setProps({ rounded: true });

    expect(wrapper.classes()).toContain('br-rounded');
  });

  it('Should be possible to make button sharp', async () => {
    expect(wrapper.classes()).not.toContain('br-sharp');

    await wrapper.setProps({ sharp: true });

    expect(wrapper.classes()).toContain('br-sharp');
  });
});
