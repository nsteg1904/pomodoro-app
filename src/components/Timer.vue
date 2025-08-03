<template>
  <div class="flex flex-col items-center gap-8">
    <ModiBar />
    <h1 class="text-8xl">{{ formattedTime }}</h1>
    <div class="flex gap-3">
      <!-- {{ timerState.isRunning ? <PrimaryButton label="Start"/> :
        <PrimaryButton label="Stop"/>}} will not work but you can use v-ifelse instead-->
      <PrimaryButton
        :label="timerState.isRunning ? 'Stop' : 'Start'"
        @click="timerState.isRunning ? timerStore.pause() : timerStore.start()"
      />
      <IconButton
        icon="reset"
        variant="transparent"
        @click="timerStore.reset()"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { IconButton, ModiBar, PrimaryButton } from '@components';
import { useTimerStore } from '@stores';
import { storeToRefs } from 'pinia';

const { timerState, formattedTime } = storeToRefs(useTimerStore());
const timerStore = useTimerStore();
</script>
<style lang=""></style>
