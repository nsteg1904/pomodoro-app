import { onMounted, ref, watch } from 'vue';

export default function useTheme() {
  const theme = ref<'light' | 'dark'>('light');

  onMounted(() => {
    const stored = localStorage.getItem('data-theme') as 'light' | 'dark';
    // If there's a stored value, use it; otherwise fallback to system preference
    if (stored) {
      theme.value = stored;
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      theme.value = prefersDark ? 'dark' : 'light';
    }

    watch(
      theme,
      newTheme => {
        localStorage.setItem('data-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      },
      { immediate: true }
    );
  });

  // Reactively watch theme and update HTML + localStorage

  // Toggle function
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  return {
    theme,
    toggleTheme,
  };
}
