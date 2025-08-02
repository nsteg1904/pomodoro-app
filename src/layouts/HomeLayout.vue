<template>
  <div :class="$style.homeLayout">
    <header :class="$style.homeLayout__header">Header</header>
    <main :class="$style.homeLayout__main"><slot /></main>
    <aside :class="$style.homeLayout__aside">
      <div>Left Action Bar</div>
      <div>Right Action Bar</div>
    </aside>
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.homeLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    margin: auto;
  }

  &__aside {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
