import { onMounted, ref, watchEffect } from 'vue';

export default function useTheme() {
  const theme = ref();

  onMounted(() => {
    const stored = localStorage.getItem('data-theme');
    // If there's a stored value, use it; otherwise fallback to system preference
    if (stored) {
      theme.value = stored;
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      theme.value = prefersDark ? 'dark' : 'light';
    }

    watchEffect(() => {
      localStorage.setItem('data-theme', theme.value);
      document.documentElement.setAttribute('data-theme', theme.value);
    });
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
