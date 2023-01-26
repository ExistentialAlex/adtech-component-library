import AdtButton from './adt-button.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import { getAllColorsAsArray } from '../../utils';
import { AppearanceProps } from '../../interfaces';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Adtech Button',
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
  template: '<AdtButton v-bind="args">Click me!</AdtButton>',
});

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  rounded: false,
  sharp: false,
};

const LeftTemplate: StoryFn<typeof AdtButton> = (args) => ({
  components: { AdtButton },
  setup() {
    return { args };
  },
  template:
    '<AdtButton v-bind="args"><template #left><div>I am left!</div></template>Click me!</AdtButton>',
});

export const LeftSlot = LeftTemplate.bind({});
LeftSlot.args = {
  color: 'primary',
  rounded: false,
  sharp: false,
};

const RightTemplate: StoryFn<typeof AdtButton> = (args) => ({
  components: { AdtButton },
  setup() {
    return { args };
  },
  template:
    '<AdtButton v-bind="args">Click me!<template #right><div>I am right!</div></template></AdtButton>',
});

export const RightSlot = RightTemplate.bind({});
RightSlot.args = {
  color: 'primary',
  rounded: false,
  sharp: false,
};

const BothTemplate: StoryFn<typeof AdtButton> = (args) => ({
  components: { AdtButton },
  setup() {
    return { args };
  },
  template:
    '<AdtButton v-bind="args"><template #left><div>I am left!</div></template>Click me!<template #right><div>I am right!</div></template></AdtButton>',
});

export const BothSlots = BothTemplate.bind({});
BothSlots.args = {
  color: 'primary',
  rounded: false,
  sharp: false,
};
