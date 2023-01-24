import { beforeEach, describe, expect, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import HelloWorld from '../../../src/components/hello-world/hello-world.vue';

describe('HelloWorld', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      props: {
        // My props here
        msg: 'My test!',
      },
    });
  });

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('My test!');
  });
});
