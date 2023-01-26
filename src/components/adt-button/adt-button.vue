<script setup lang="ts">
import { computed } from 'vue';
import {
  AdTechComponentColors,
  AdTechNumericColors,
  AdTechStatusColors,
} from '../../enums';
import { AppearanceProps } from '../../interfaces';

// Would like to use this to define props, but have to wait till vue 3.3
interface Props extends AppearanceProps {}

// Currently have to define imported props like this till vue 3.3
const props = defineProps({
  ...AppearanceProps,
});

const buttonClasses = computed(() => {
  const classes: string[] = ['adt-btn'];
  const btnClr =
    (props.color as AppearanceProps['color']) || AdTechComponentColors.primary;

  switch (btnClr) {
    case AdTechComponentColors.primary:
    case AdTechComponentColors.secondary:
    case AdTechComponentColors.accent:
    case AdTechNumericColors.positive:
    case AdTechNumericColors.negative: {
      classes.push(...[`${btnClr}-bg`, `${btnClr}-bg-hover`]);
      break;
    }
    case AdTechStatusColors.error:
    case AdTechStatusColors.success:
    case AdTechStatusColors.warning:
    case AdTechStatusColors.info:
    case AdTechStatusColors.neutral: {
      classes.push(...[`${btnClr}-fill`, `${btnClr}-fill-hover`]);
      break;
    }
  }

  if (props.rounded) {
    classes.push('br-rounded');
  }

  if (props.sharp) {
    classes.push('br-sharp');
  }

  return classes.join(' ');
});
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
