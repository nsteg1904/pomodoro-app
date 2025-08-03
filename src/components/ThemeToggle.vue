<template>
  <IconButton
    :icon="mode"
    @click="toggleTheme"
  />
</template>

<script setup lang="ts">
import { useTheme } from '@utils';
import { computed } from 'vue';
import IconButton from './IconButton.vue';

const { theme, toggleTheme } = useTheme();

const mode = computed(() => (theme.value === 'light' ? 'moon' : 'sun'));
</script>

<style module lang="scss"></style>
