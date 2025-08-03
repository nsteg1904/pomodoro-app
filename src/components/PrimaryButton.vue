<template>
  <div>
    <Button
      :variant
      :label
      :unstyled="true"
      :class="classes"
      @click="$emit('click')"
    />
  </div>
</template>
<script setup lang="ts">
import { Button } from 'primevue';
import { computed } from 'vue';

// TYPES

export type PrimaryButtonEmits = {
  (e: 'click'): void;
};

export type PrimaryButtonProps = {
  label: string;
  variant?: 'filled' | 'outlined';
  color?: 'primary' | 'secondary' | 'critical';
};

// LOGIC

defineEmits<PrimaryButtonEmits>();

const props = withDefaults(defineProps<PrimaryButtonProps>(), {
  color: 'primary',
  variant: 'filled',
});

const classes = computed(() => {
  const base = 'btn';

  const colorMap: Record<string, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    critical: 'btn-error',
  };

  const variantMap: Record<string, string> = {
    filled: '',
    outlined: 'btn-outline',
  };

  return [base, colorMap[props.color], variantMap[props.variant]].join(' ');
});
</script>
<style lang="scss"></style>
