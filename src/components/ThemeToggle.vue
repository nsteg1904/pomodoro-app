<template>
  <IconButton
    :icon="mode"
    :on-click="toggleTheme"
  />
</template>

<script setup lang="ts">
import { useTheme } from '@utils';
import { computed } from 'vue';
import IconButton from './IconButton/IconButton.vue';

const { theme, toggleTheme } = useTheme();

const mode = computed(() => (theme.value === 'light' ? 'moon' : 'sun'));
</script>

<style module lang="scss"></style>
