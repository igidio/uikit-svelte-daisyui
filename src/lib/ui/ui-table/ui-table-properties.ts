export type UiTableSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const table_sizes: Record<UiTableSizes, string> = {
  xs: 'table-xs',
  sm: 'table-sm',
  md: '',
  lg: 'table-lg',
  xl: 'table-xl',
};

export interface CreateTableOptions {
  sortable?: boolean;
  take_width?: boolean;
}

export interface TableField<TData> {
  label: string;
  name?: keyof TData & string;
  component?: import('svelte').Component<any>;
  getInputs?: (row: TData) => Record<string, unknown>;
  getValue?: (row: TData) => string | number | null | undefined;
  isHtml?: boolean;
  onClick?: (row: TData) => void;
  options?: CreateTableOptions;
}

export interface PaginationResponse<T> {
  count: number;
  data: T[];
  is_last_page: boolean;
  limit: number;
  offset: number;
}

export function create_text_field<TData>(params: {
  label: string;
  getValue: (row: TData) => string | number | null | undefined;
  onClick?: (row: TData) => void;
  options?: CreateTableOptions;
  name?: keyof TData & string;
}): TableField<TData> {
  const { label, getValue, onClick, options, name } = params;
  return { label, getValue, onClick, options, name };
}

export function create_html_field<TData>(params: {
  label: string;
  getValue: (row: TData) => string | number | null | undefined;
  onClick?: (row: TData) => void;
  options?: CreateTableOptions;
  name?: keyof TData & string;
}): TableField<TData> {
  const { label, getValue, onClick, options, name } = params;
  return { label, getValue, onClick, options, name, isHtml: true };
}

export function create_table_field<TData>(params: {
  label: string;
  component: import('svelte').Component<any>;
  getInputs: (row: TData) => Record<string, unknown>;
  onClick?: (row: TData) => void;
  options?: CreateTableOptions;
  name?: keyof TData & string;
}): TableField<TData> {
  const { label, component, getInputs, onClick, options, name } = params;
  return { label, component, getInputs, onClick, options, name };
}
