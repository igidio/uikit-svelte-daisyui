import type { UiColors } from '$lib/ui/ui-types';
import type { IconValue } from '$lib/data/icons';

export interface UiTimelineItem {
  text?: string;
  subtitle?: string;
  icon?: IconValue;
  color?: UiColors;
  description?: string;
}

export type UiTimelineDisposition = 'horizontal' | 'vertical';
