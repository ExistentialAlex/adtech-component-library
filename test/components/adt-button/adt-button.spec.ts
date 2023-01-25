import { beforeEach, describe, expect, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import AdtButton from '../../../src/components/adt-button/adt-button.vue';

describe('AdtButton', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(AdtButton, {
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
