export type UiAuraSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const ui_aura_sizes: Record<UiAuraSize, string> = {
  xs: 'aura-xs',
  sm: 'aura-sm',
  md: '',
  lg: 'aura-lg',
  xl: 'aura-xl',
};

export type UiAuraType = 'dual' | 'rainbow' | 'holo' | 'glow' | 'gold' | 'silver';

export const ui_aura_types: Record<UiAuraType, string> = {
  dual: 'aura-dual',
  rainbow: 'aura-rainbow',
  holo: 'aura-holo',
  glow: 'aura-glow',
  gold: 'aura-gold',
  silver: 'aura-silver',
};
