import AdtButton from './adt-button.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import { getAllColorsAsArray } from '../../utils';
import { AppearanceProps } from '../../interfaces';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/AdTech Button',
  component: AdtButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      type: {
        name: typeof AppearanceProps['color'],
      },
      control: {
        type: 'select',
        options: [...getAllColorsAsArray()],
      },
    },
  },
} as Meta<typeof AdtButton>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof AdtButton> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AdtButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<AdtButton v-bind="args"><template #left><div v-if="args.leftContent" v-html="args.leftContent"></div></template>Click me!<template #right><div v-if="args.rightContent" v-html="args.rightContent"></div></template></AdtButton>',
});

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  rounded: false,
  sharp: false,
};

export const WithSlots = Template.bind({});
WithSlots.args = {
  color: 'primary',
  rounded: false,
  sharp: false,
  leftContent: '<p>Left!</p>',
  rightContent: '<p>Right!</p>',
};
