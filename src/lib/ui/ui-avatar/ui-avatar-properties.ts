export type UiAvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const avatar_sizes: Record<UiAvatarSize, string> = {
  xs: 'w-8',
  sm: 'w-12',
  md: 'w-16',
  lg: 'w-24',
  xl: 'w-32',
};

export const avatar_placeholder_sizes: Record<UiAvatarSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-3xl',
  xl: 'text-4xl',
};

export type UiAvatarPresence = 'none' | 'online' | 'offline';

export const avatar_presence: Record<UiAvatarPresence, string> = {
  none: '',
  online: 'avatar-online',
  offline: 'avatar-offline',
};

export type UiAvatarShape = 'circle' | 'rounded' | 'rounded-xl' | 'squircle' | 'heart' | 'hexagon';

export const avatar_shapes: Record<UiAvatarShape, string> = {
  circle: 'rounded-full',
  rounded: 'rounded',
  'rounded-xl': 'rounded-xl',
  squircle: 'mask mask-squircle',
  heart: 'mask mask-heart',
  hexagon: 'mask mask-hexagon-2',
};
