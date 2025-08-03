<template>
  <div class="flex gap-4">
    <ProgressButton
      :dotAmount="timerState.config.longBreakInterval"
      :dotProgress="timerState.cycleCount"
      label="Focus"
      @click="handleFocusClick"
    /><PrimaryButton
      label="Short Break"
      variant="outlined"
      @click="handleShortClick"
    /><PrimaryButton
      label="Long Break"
      variant="outlined"
      @click="handleLongClick"
    />
  </div>
</template>

<script setup lang="ts">
import { useTimerStore } from '@stores';
import { storeToRefs } from 'pinia';
import PrimaryButton from './PrimaryButton.vue';
import ProgressButton from './ProgressButton.vue';

const { timerState } = storeToRefs(useTimerStore());
const timerStore = useTimerStore();

// TODO: add modal to warn about progress loss
const handleFocusClick = () => {
  timerStore.setMode('pomodoro');
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

//add store to monitor progress
</script>
<style module lang="scss"></style>
