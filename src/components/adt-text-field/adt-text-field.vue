<script setup lang="ts">
import { placeholder } from '@babel/types';
import { computed, ref } from 'vue';
import { AppearanceProps } from '../../interfaces';
import { getBrClasses, getColorFormOutlineClasses } from '../../utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-interface
interface Props extends AppearanceProps {}

const props = defineProps({
  ...AppearanceProps,
  modelValue: {
    default: '',
    required: true,
    type: String,
  },
  placeholder: {
    default: '',
    required: false,
    type: String,
  },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const classes = computed(() => [
  'adt-text-field',
  'flex',
  'br-default',
  ...getBrClasses({ rounded: props.rounded, sharp: props.sharp }),
  ...getColorFormOutlineClasses(props.color as AppearanceProps['color']),
]);

const input = ref<HTMLInputElement | null>(null);
const focusInput = () => {
  input?.value?.focus();
};
</script>

<template>
  <div :class="classes" @click="focusInput">
    <slot name="left"></slot>
    <input ref="input" type="text" v-model="value" :placeholder="placeholder" />
    <slot name="right"></slot>
  </div>
</template>

<style scoped lang="scss">
.adt-text-field {
  position: relative;
  gap: var(--size-m);
  height: fit-content;
  padding: var(--size-m);
  border: var(--size-xxs) solid var(--secondary);
  background: var(--base-01);
  transition: border-color var(--time-default) ease;

  &:hover {
    border-color: var(--secondary-hover);
  }

  &:focus-within {
    background: var(--base-01);
    border-color: var(--primary);
  }
}
</style>
