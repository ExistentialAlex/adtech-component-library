import { beforeEach, describe, expect, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import AdtTextField from '../../../src/components/adt-text-field/adt-text-field.vue';

describe('AdtTextField', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(AdtTextField, {
      props: {},
    });
  });

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
