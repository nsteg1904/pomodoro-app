<template>
  <div class="flex flex-col gap-2 items-center w-fit">
    <PrimaryButton v-bind="props" />
    <div class="flex gap-1 justify-center">
      <span
        class="status status-primary"
        v-for="i in dotProgress"
        :key="i"
      />
      <span
        class="status"
        v-for="i in dotAmount - dotProgress"
        :key="i"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PrimaryButtonProps } from './PrimaryButton/PrimaryButton.types';
import PrimaryButton from './PrimaryButton/PrimaryButton.vue';

type ProgressButtonProps = {
  dotAmount: number;
  dotProgress: number;
} & Pick<PrimaryButtonProps, 'onClick' | 'label'>;

const props = defineProps<ProgressButtonProps>();
</script>
<style module lang="scss"></style>
