import { beforeEach, describe, expect, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import ComponentTemplate from '../../../src/components/component-template/component-template.vue';

describe('ComponentTemplate', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(ComponentTemplate, {
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
