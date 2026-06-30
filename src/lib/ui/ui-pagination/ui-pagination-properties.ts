export type UiPaginationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const pagination_sizes: Record<UiPaginationSize, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
  xl: 'btn-xl',
};

export interface UiPaginationPageItem {
  page: number;
  label: string;
  is_ellipsis: boolean;
  is_current: boolean;
}
