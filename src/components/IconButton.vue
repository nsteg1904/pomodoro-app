<template>
  <div class="flex flex-col items-center w-fit">
    <Button
      :variant
      :unstyled="true"
      :class="classes"
      :icon="'pi ' + icon"
      @click="$emit('click')"
      :pt="{
        icon: {
          class: iconSize,
        },
      }"
    />
    <p>{{ label }}</p>
  </div>
</template>
<script setup lang="ts">
import { Button } from 'primevue';
import { computed } from 'vue';

// CONSTANTS

const iconMap = {
  sun: 'pi-sun',
  moon: 'pi-moon',
  reset: 'pi-replay',
  settings: 'pi-cog',
};

const iconSizeMap = {
  small: 'text-sm!',
  medium: 'text-md!',
  large: 'text-lg!',
  extraLarge: 'text-xl!',
};

// TYPES

type IconButtonEmits = {
  (e: 'click'): void;
};

type IconButtonProps = {
  label?: string;
  icon: keyof typeof iconMap;
  size?: keyof typeof iconSizeMap;
  variant?: 'transparent' | 'translucent' | 'primary';
};

// LOGIC

defineEmits<IconButtonEmits>();

const props = withDefaults(defineProps<IconButtonProps>(), {
  variant: 'primary',
  size: 'medium',
});

const iconSize = iconSizeMap[props.size];

const icon = iconMap[props.icon];
const classes = computed(() => {
  const base = 'btn';

  const sizeMap: Record<string, string> = {
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg',
    extraLarge: 'btn-xl',
  };

  const variantMap: Record<string, string> = {
    transparent: 'btn-ghost',
    translucent: 'btn-soft',
    primary: 'btn-primary',
  };

  return [base, sizeMap[props.size], variantMap[props.variant]].join(' ');
});
</script>
<style lang=""></style>
