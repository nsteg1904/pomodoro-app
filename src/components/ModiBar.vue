<template>
  <div class="flex gap-4">
    <ProgressButton
      :dotAmount="4"
      :dotProgress="3"
      label="Focus"
      :on-click="() => console.log('focus')"
    /><PrimaryButton
      label="Short Break"
      variant="outlined"
      :on-click="() => console.log('short break')"
    /><PrimaryButton
      label="Long Break"
      variant="outlined"
      :on-click="() => console.log('long break')"
    />
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from './PrimaryButton/PrimaryButton.vue';
import ProgressButton from './ProgressButton.vue';

//add store to monitor progress
</script>
<style module lang="scss"></style>
