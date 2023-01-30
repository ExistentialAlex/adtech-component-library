import { beforeEach, describe, expect, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import AdtMenu from '../../../src/components/adt-menu/adt-menu.vue';

describe('AdtMenu', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(AdtMenu, {
      props: {
        // My props here
        myprop: 'My test!',
      },
    });
  });

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('My test!');
  });
});
