import AdtMenu from './adt-menu.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import { AppearanceProps } from '../../interfaces';
import { getAllColorsAsArray } from '../../utils';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/AdTech Menu',
  component: AdtMenu,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    stringify: {
      type: {
        name: 'function',
      },
    },
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
  args: {
    rounded: false,
    sharp: false,
    color: 'secondary',
  },
} as Meta<typeof AdtMenu>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof AdtMenu> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AdtMenu },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<AdtMenu v-bind="args"></AdtMenu>',
});

interface myItem {
  id: number;
  text: string;
}

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  modelValue: null,
};

export const NoItems = Template.bind({});
NoItems.args = {
  items: [],
  modelValue: null,
};

export const CustomStringify = Template.bind({});
CustomStringify.args = {
  items: [
    {
      id: 1,
      text: 'my item',
    },
    {
      id: 2,
      text: 'my other item',
    },
    {
      id: 3,
      text: 'my third item',
    },
  ],
  modelValue: null,
  stringify: (item: myItem) => item.text,
};

export const CustomStringifyWithSelection = Template.bind({});
CustomStringifyWithSelection.args = {
  items: [
    {
      id: 1,
      text: 'my item',
    },
    {
      id: 2,
      text: 'my other item',
    },
    {
      id: 3,
      text: 'my third item',
    },
  ],
  modelValue: {
    id: 1,
    text: 'my item',
  },
  stringify: (item: myItem) => item.text,
};

const CustomTemplate: StoryFn<typeof AdtMenu> = (args) => ({
  components: { AdtMenu },
  setup() {
    return { args };
  },
  template:
    '<AdtMenu v-bind="args"><template #item="{ item }"><h1>{{ item.text }}</h1></template></AdtMenu>',
});
export const CustomItemTemplate = CustomTemplate.bind({});
CustomItemTemplate.args = {
  items: [
    {
      id: 1,
      text: 'my item',
    },
    {
      id: 2,
      text: 'my other item',
    },
    {
      id: 3,
      text: 'my third item',
    },
  ],
  modelValue: null,
  stringify: (item: myItem) => item.text,
};
