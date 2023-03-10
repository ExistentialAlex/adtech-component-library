<script setup lang="ts">
import { computed, Ref, ref, WritableComputedRef } from 'vue';
import { AppearanceProps } from '../../interfaces';
import { getBrClasses, getColorOutlineClasses } from '../../utils';

const props = defineProps({
  ...AppearanceProps,
  items: {
    default() {
      return [];
    },
    required: true,
    type: Array,
  },
  modelValue: {
    required: false,
    default: null,
  },
  stringify: {
    required: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default(s: any) {
      return s.toString();
    },
    type: Function,
  },
});

const emit = defineEmits(['update:modelValue']);

const classes = computed(() => [
  'adt-menu',
  'br-default',
  ...getBrClasses({ rounded: props.rounded, sharp: props.sharp }),
  ...getColorOutlineClasses(props.color as AppearanceProps['color'], true),
]);

const active: Ref<null | unknown> = ref(props.modelValue);

const itemClick = (item: unknown) => {
  if (props.stringify(active.value || '') === props.stringify(item)) {
    active.value = null;
    emit('update:modelValue', null);
    return;
  }

  active.value = item;
  emit('update:modelValue', item);
};
</script>

<template>
  <ul :class="classes">
    <template v-if="!items.length">
      <div class="adt-menu-empty flex-align-center"><slot name="empty">No items found.</slot></div>
    </template>
    <template v-else>
      <li
        v-for="item in items"
        :key="stringify(item)"
        class="adt-menu-item"
        :class="{ 'adt-menu-item__active': stringify(active || '') === stringify(item) }"
        @click="itemClick(item)"
      >
        <slot name="item" :item="item" :active="active">
          {{ stringify(item) }}
        </slot>
      </li>
    </template>
  </ul>
</template>

<style scoped lang="scss">
.adt-menu {
  display: block;
  background-color: var(--base-01);
  overflow: hidden;
  border: var(--size-xxs) solid var(--secondary);
  transition: border-color var(--time-fast) ease;
  padding: 0;
  margin: 0;

  &:hover {
    border-color: var(--secondary-hover);
  }

  &-item {
    cursor: pointer;
    list-style: none;
    padding: 0 var(--size-m);
    height: var(--size-xl);
    line-height: var(--size-xl);
    transition: background-color var(--time-fast) ease;

    &__active {
      background: var(--base-02);
    }

    &:hover {
      background-color: var(--base-02);
    }
  }

  &-empty {
    min-height: var(--size-xl);
    text-align: center;
    padding: 0 var(--size-m);
    color: var(--text-02);
  }
}
</style>
