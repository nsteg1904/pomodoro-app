export type PrimaryButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'filled' | 'outlined';
  color?: 'primary' | 'secondary' | 'critical';
};
