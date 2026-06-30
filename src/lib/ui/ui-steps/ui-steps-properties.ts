import type { UiColors } from '$lib/ui/ui-types';
import type { IconValue } from '$lib/data/icons';

export interface UiStepsItem {
  label: string;
  icon?: IconValue;
  color?: UiColors;
}

export type UiStepsDirection = 'horizontal' | 'vertical';
