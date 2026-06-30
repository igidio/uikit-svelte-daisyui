export type UiTabsStyle = 'default' | 'border' | 'lift' | 'box';
export type UiTabsSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type UiTabsContent = 'bottom' | 'top';

export const tab_styles: Record<UiTabsStyle, string> = {
  default: '',
  border: 'tabs-border',
  lift: 'tabs-lift',
  box: 'tabs-box',
};

export const tab_sizes: Record<UiTabsSize, string> = {
  xs: 'tabs-xs',
  sm: 'tabs-sm',
  md: '',
  lg: 'tabs-lg',
  xl: 'tabs-xl',
};
