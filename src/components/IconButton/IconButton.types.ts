export const iconMap = {
  sun: 'pi-sun',
  moon: 'pi-moon',
  reset: 'pi-replay',
  settings: 'pi-cog',
};

export const iconSizeMap = {
  small: 'text-sm!',
  medium: 'text-md!',
  large: 'text-lg!',
  extraLarge: 'text-xl!',
};

export type IconButtonProps = {
  label?: string;
  icon: keyof typeof iconMap;
  size?: keyof typeof iconSizeMap;
  onClick: () => void;
  variant?: 'transparent' | 'translucent' | 'primary';
};
