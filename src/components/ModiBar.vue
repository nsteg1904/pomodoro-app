<template>
  <div class="flex gap-4">
    <ProgressButton
      :dotAmount="timerState.config.longBreakInterval"
      :dotProgress="timerState.cycleCount"
      :variant="getButtonVariantForMode['focus']"
      label="Focus"
      @click="handleFocusClick"
    />
    <PrimaryButton
      label="Short Break"
      :variant="getButtonVariantForMode['shortBreak']"
      @click="handleShortClick"
    />
    <PrimaryButton
      label="Long Break"
      :variant="getButtonVariantForMode['longBreak']"
      @click="handleLongClick"
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

const { timerState } = storeToRefs(useTimerStore());
const timerStore = useTimerStore();

// TODO: add modal to warn about progress loss
const handleFocusClick = () => {
  timerStore.setMode('focus');
  timerStore.reset();
};

const handleShortClick = () => {
  timerStore.setMode('shortBreak');
  timerStore.reset();
};

const handleLongClick = () => {
  timerStore.setMode('longBreak');
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
