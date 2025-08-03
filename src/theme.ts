import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#6e1597',
      100: '#6e1597',
      200: '#6e1597',
      300: '#6e1597',
      400: '#6e1597',
      500: '#6e1597',
      600: '#6e1597',
      700: '#6e1597',
      800: '#6e1597',
      900: '{purple.900}',
      950: '{purple.950}',
    },
    white: {
      50: '#fff',
      100: '#fff',
      200: '#fff',
      300: '#fff',
      400: '#fff',
      500: '#fff',
      600: '#fff',
      700: '#fff',
      800: '#fff',
      900: '#fff',
      950: '#fff',
    },
    secondary: {
      50: '{white.50}',
      100: '{white.100}',
      200: '{white.200}',
      300: '{white.300}',
      400: '{white.400}',
      500: '{white.500}',
      600: '{white.600}',
      700: '{white.700}',
      800: '{white.800}',
      900: '{white.900}',
      950: '{white.950}',
    },
    colorScheme: {
      dark: {
        root: {
          //needs to be defined with root for some reason
          primary: {
            50: '{purple.50}',
            100: '{purple.100}',
            200: '{purple.200}',
            300: '{purple.300}',
            400: '{purple.400}',
            500: '{purple.500}',
            600: '{purple.600}',
            700: '{purple.700}',
            800: '{purple.800}',
            900: '{purple.900}',
            950: '{purple.950}',
          },
        },
      },
    },
  },
});

export const theme = {
  theme: {
    preset: preset, //needs to be defined in here as an extra step for some reason
    options: {
      darkModeSelector: '.theme-dark',
    },
  },
  pt: true,
};
