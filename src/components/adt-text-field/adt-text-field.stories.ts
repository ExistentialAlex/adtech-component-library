import AdtTextField from './adt-text-field.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import { AppearanceProps } from '../../interfaces';
import { AdTechComponentColors } from '../../enums';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/AdTech Text Field',
  component: AdtTextField,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      type: {
        name: typeof AppearanceProps['color'],
      },
      control: {
        type: 'select',
        options: [...Object.values(AdTechComponentColors)],
      },
    },
  },
} as Meta<typeof AdtTextField>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof AdtTextField> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AdtTextField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<AdtTextField v-bind="args"><template #left><div v-if="args.leftContent" v-html="args.leftContent"></div></template><template #right><div v-if="args.rightContent" v-html="args.rightContent"></div></template></AdtTextField>',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '',
  rounded: false,
  sharp: false,
};

export const WithSlots = Template.bind({});
WithSlots.args = {
  modelValue: '',
  rounded: false,
  sharp: false,
  leftContent: '<p>Left!</p>',
  rightContent: '<p>Right!</p>',
};
