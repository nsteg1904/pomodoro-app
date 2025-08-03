<template>
  <HomeLayout>
    <ModiBar />
    <IconButton
      icon="sun"
      :on-click="() => console.log('ha')"
      label="sun"
    />
    <PrimaryButton
      label="Hello"
      :on-click="() => console.log('test')"
    />
    <ProgressButton
      label="Focus"
      :on-click="() => console.log('ha')"
      :dotAmount="4"
      :dotProgress="3"
    />
  </HomeLayout>
</template>

<script setup lang="ts">
import {
  IconButton,
  ModiBar,
  PrimaryButton,
  ProgressButton,
} from '@components';
import { HomeLayout } from '@layouts';
</script>

<style scoped></style>
