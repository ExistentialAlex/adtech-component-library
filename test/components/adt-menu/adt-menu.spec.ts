import { beforeEach, describe, expect, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import AdtMenu from '../../../src/components/adt-menu/adt-menu.vue';
import { getAllColorsAsArray } from '../../../src/utils';

describe('AdtMenu', () => {
  let wrapper: VueWrapper<InstanceType<typeof AdtMenu>>;

  beforeEach(() => {
    wrapper = mount(AdtMenu, {
      props: {
        items: [],
        modelValue: null,
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    });
  });

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toBe('No items found.');
  });

  it('Should render each item', async () => {
    await wrapper.setProps({ items: ['Item 1', 'Item 2', 'Item 3'] });
    const items = wrapper.findAll('li');
    expect(items.length).toBe(3);
    expect(items[0].text()).toBe('Item 1');
    expect(items[1].text()).toBe('Item 2');
    expect(items[2].text()).toBe('Item 3');
  });

  it('Should update the value when you select an item', async () => {
    await wrapper.setProps({ items: ['Item 1', 'Item 2', 'Item 3'] });
    const items = wrapper.findAll('li');

    await items[0].trigger('click');
    expect(items[0].classes()).toContain('adt-menu-item__active');
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
  });

  it('Should emit null when selecting the same value', async () => {
    await wrapper.setProps({ items: ['Item 1', 'Item 2', 'Item 3'] });
    const items = wrapper.findAll('li');

    await items[0].trigger('click');

    expect(items[0].classes()).toContain('adt-menu-item__active');
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');

    let event = wrapper.emitted('update:modelValue');
    if (!event) return;
    expect((event)[0][0]).toBe('Item 1');
    
    await items[0].trigger('click');

    expect(items[0].classes()).not.toContain('adt-menu-item__active');
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');

    event = wrapper.emitted('update:modelValue');
    if (!event) return;
    expect(event[1][0]).toBe(null);
  });

  it('Should be possible to change the menu color', async () => {
    for (const color of getAllColorsAsArray()) {
      await wrapper.setProps({ color });
      expect(wrapper.classes()).toContain(`${color}-border`);
      expect(wrapper.classes()).toContain(`${color}-border-hover`);
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
});
