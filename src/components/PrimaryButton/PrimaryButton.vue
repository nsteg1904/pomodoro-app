<template>
  <div>
    <Button
      :variant
      :label
      :unstyled="true"
      :class="classes"
      @click="onClick"
    />
  </div>
</template>
<script setup lang="ts">
import { Button } from 'primevue';
import { computed } from 'vue';
import type { PrimaryButtonProps } from './PrimaryButton.types';

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
