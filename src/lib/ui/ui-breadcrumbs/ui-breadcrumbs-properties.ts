import type { IconValue } from '$lib/data/icons';

export interface UiBreadcrumbsItem {
  label: string;
  route: string;
  icon?: IconValue;
}
