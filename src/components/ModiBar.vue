<template>
  <div class="flex gap-4">
    <ProgressButton
      :dotAmount="timerCofig.longBreakInterval"
      :dotProgress="timerState.cycleCount"
      :variant="getButtonVariantForMode['focus']"
      label="Focus"
      @click="handleClick('focus')"
    />
    <PrimaryButton
      label="Short Break"
      :variant="getButtonVariantForMode['shortBreak']"
      @click="handleClick('shortBreak')"
    />
    <PrimaryButton
      label="Long Break"
      :variant="getButtonVariantForMode['longBreak']"
      @click="handleClick('longBreak')"
    />
  </div>
</template>

<script setup lang="ts">
import { useTimerStore } from '@stores';
import { storeToRefs } from 'pinia';
import PrimaryButton from './PrimaryButton.vue';
import ProgressButton from './ProgressButton.vue';
import { computed } from 'vue';
import type { PrimaryButtonVariant, TimerMode } from '@/utils/types';

const { timerState, timerCofig } = storeToRefs(useTimerStore());
const timerStore = useTimerStore();

// TODO: add modal to warn about progress loss
const handleClick = (mode: TimerMode) => {
  timerStore.setMode(mode);
  timerStore.reset();
};

type TimerButtonsVariants = {
  [k in TimerMode]: PrimaryButtonVariant;
};

const calcVariant = (variantType: TimerMode) =>
  timerState.value.mode === variantType ? 'filled' : 'outlined';

const getButtonVariantForMode = computed<TimerButtonsVariants>(() => {
  return {
    focus: calcVariant('focus'),
    shortBreak: calcVariant('shortBreak'),
    longBreak: calcVariant('longBreak'),
  };
});

//add store to monitor progress
</script>
<style module lang="scss"></style>
