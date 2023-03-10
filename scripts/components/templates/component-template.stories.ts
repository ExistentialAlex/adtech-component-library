import ComponentTemplate from './component-template.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/ComponentTemplate',
  component: ComponentTemplate,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
} as Meta<typeof ComponentTemplate>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof ComponentTemplate> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ComponentTemplate },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ComponentTemplate v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  myprop: 'My test!',
};
