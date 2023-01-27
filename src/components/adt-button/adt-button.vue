<script setup lang="ts">
import { computed } from 'vue';
import { AppearanceProps } from '../../interfaces';
import { getBrClasses, getColorBgClasses } from '../../utils';

// Would like to use this to define props, but have to wait till vue 3.3
// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars
interface Props extends AppearanceProps {}

// Currently have to define imported props like this till vue 3.3
const props = defineProps({
  ...AppearanceProps,
});

const buttonClasses = computed(() =>
  [
    'adt-btn',
    ...getColorBgClasses(props.color as AppearanceProps['color'], true),
    ...getBrClasses({ rounded: props.rounded, sharp: props.sharp }),
  ].join(' ')
);
</script>

<template>
  <button @click="$emit('click')" :class="buttonClasses">
    <slot name="left"></slot><slot></slot><slot name="right"></slot>
  </button>
</template>

<style scoped lang="scss">
.adt-btn {
  display: flex;
  gap: var(--size-xs);
  justify-content: center;
  align-items: center;

  transition: background-color var(--time-fast) ease;
}
</style>
