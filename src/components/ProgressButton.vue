<template>
  <div class="flex flex-col gap-2 items-center w-fit">
    <PrimaryButton
      v-bind="props"
      @click="$emit('click')"
    />
    <div class="flex gap-1 justify-center">
      <span
        :class="['status', { 'status-primary': i <= dotProgress }]"
        v-for="i in dotAmount"
        :key="i"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  PrimaryButtonEmits,
  PrimaryButtonProps,
} from './PrimaryButton.vue';
import PrimaryButton from './PrimaryButton.vue';

defineEmits<PrimaryButtonEmits>();

type ProgressButtonProps = {
  dotAmount: number;
  dotProgress: number;
} & Pick<PrimaryButtonProps, 'label'>;

const props = defineProps<ProgressButtonProps>();
</script>
<style module lang="scss"></style>
