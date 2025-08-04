<template>
  <div class="flex gap-4">
    <!--
    Refactoring idea:

    - Remove the separate ProgressButton component.
    - Use only the PrimaryButton component.
    - Render all timer buttons (Focus, Short Break, Long Break) dynamically using a v-for loop.
    - Show progress dots (dotProgress / dotAmount) for the Focus mode.
    - Set all button props centrally using a computed property. (The existing getButtonVariantForMode property can be extended or renamed for this purpose.)

    -->

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
import type { PrimaryButtonVariant, TimerMode } from '@utils';

// TYPES

type TimerButtonsVariants = Record<TimerMode, PrimaryButtonVariant>;

// LOGIC

const { timerState, timerCofig } = storeToRefs(useTimerStore());
const timerStore = useTimerStore();

// TODO: add modal to warn about progress loss
const handleClick = (mode: TimerMode) => {
  timerStore.setMode(mode);
  timerStore.reset();
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
