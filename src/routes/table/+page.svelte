<script lang="ts">
  import { onMount } from 'svelte';
  import UiTable from '$lib/ui/ui-table/UiTable.svelte';
  import UiTableSearch from '$lib/ui/ui-table/modules/UiTableSearch.svelte';
  import UiTableLimits from '$lib/ui/ui-table/modules/UiTableLimits.svelte';
  import UiTableFilters from '$lib/ui/ui-table/modules/UiTableFilters.svelte';
  import UiTablePagination from '$lib/ui/ui-table/modules/UiTablePagination.svelte';
  import UiBadge from '$lib/ui/ui-badge/UiBadge.svelte';
  import {
    create_text_field,
    create_table_field,
    create_html_field,
    type TableField,
    type PaginationResponse,
  } from '$lib/ui/ui-table/ui-table-properties';
  import type { FilterBy } from '$lib/ui/ui-table/modules/UiTableFilters.svelte';
  import type { UiColors } from '$lib/ui/ui-types';

  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
    created_at: string;
  }

  const mock_users: User[] = [
    { id: 1, name: 'Salva', email: 'salva@example.com', role: 'Admin', status: 'active', created_at: '2025-01-15' },
    { id: 2, name: 'Maria', email: 'maria@example.com', role: 'Editor', status: 'active', created_at: '2025-03-10' },
    { id: 3, name: 'Carlos', email: 'carlos@example.com', role: 'Viewer', status: 'inactive', created_at: '2024-11-22' },
    { id: 4, name: 'Ana', email: 'ana@example.com', role: 'Admin', status: 'active', created_at: '2025-06-01' },
    { id: 5, name: 'Luis', email: 'luis@example.com', role: 'Editor', status: 'active', created_at: '2025-04-18' },
    { id: 6, name: 'Sofia', email: 'sofia@example.com', role: 'Viewer', status: 'inactive', created_at: '2024-09-05' },
    { id: 7, name: 'Pedro', email: 'pedro@example.com', role: 'Admin', status: 'active', created_at: '2025-02-28' },
    { id: 8, name: 'Elena', email: 'elena@example.com', role: 'Editor', status: 'active', created_at: '2025-05-12' },
  ];

  const role_variants: Record<string, UiColors> = {
    Admin: 'primary',
    Editor: 'secondary',
    Viewer: 'ghost',
  };

  // State
  let sort_state = $state<{ sort_by: string | null; order: 'asc' | 'desc' | null }>({ sort_by: null, order: null });
  let search_value = $state('');
  let current_page = $state(1);
  let current_limit = $state(5);
  let active_filters = $state<Record<string, unknown>>({});
  let loading = $state(true);

  onMount(() => {
    const timer = setTimeout(() => { loading = false; }, 1500);
    return () => clearTimeout(timer);
  });

  const role_filters: FilterBy[] = [
    {
      name: 'role',
      label: 'Role',
      show_value_on_badge: true,
      options: [
        { label: 'Admin', value: 'Admin' },
        { label: 'Editor', value: 'Editor' },
        { label: 'Viewer', value: 'Viewer' },
      ],
    },
    {
      name: 'status',
      label: 'Status',
      only_cancellable: false,
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    },
  ];

  let filtered_users = $derived(
    (() => {
      let data = [...mock_users];

      const search = search_value;
      if (search) {
        const s = search.toLowerCase();
        data = data.filter(
          (u) =>
            u.name.toLowerCase().includes(s) ||
            u.email.toLowerCase().includes(s) ||
            u.role.toLowerCase().includes(s),
        );
      }

      const filters = active_filters;
      for (const [key, value] of Object.entries(filters)) {
        if (value !== null && value !== undefined && value !== '') {
          data = data.filter((u) => (u as unknown as Record<string, string>)[key] === value);
        }
      }

      const sort = sort_state;
      if (sort.sort_by && sort.order) {
        const col = sort.sort_by as keyof User;
        data.sort((a, b) => {
          const a_val = String(a[col] ?? '');
          const b_val = String(b[col] ?? '');
          return sort.order === 'asc'
            ? a_val.localeCompare(b_val)
            : b_val.localeCompare(a_val);
        });
      }

      return data;
    })(),
  );

  let paginated_data = $derived(
    (() => {
      const data = filtered_users;
      const page = current_page;
      const limit = current_limit;
      const start = (page - 1) * limit;
      const paged = data.slice(start, start + limit);
      return {
        count: data.length,
        data: paged,
        is_last_page: start + limit >= data.length,
        limit,
        offset: start,
      };
    })(),
  );

  let loading_content = $derived(loading ? undefined : paginated_data);

  let expandable = create_text_field<User>({
    label: 'Full Email',
    name: 'email',
    getValue: (row: User) => row.email,
  });

  const fields: TableField<User>[] = [
    create_text_field<User>({
      label: 'ID',
      name: 'id',
      getValue: (row: User) => row.id,
      options: { sortable: true },
    }),
    create_text_field<User>({
      label: 'Name',
      name: 'name',
      getValue: (row: User) => row.name,
      options: { sortable: true },
    }),
    create_text_field<User>({
      label: 'Email',
      name: 'email',
      getValue: (row: User) => row.email,
    }),
    create_table_field<User>({
      label: 'Role',
      component: UiBadge,
      name: 'role',
      getInputs: (row: User) => ({
        label: row.role,
        variant: role_variants[row.role] ?? 'ghost',
        size: 'sm',
      }),
    }),
    create_table_field<User>({
      label: 'Status',
      component: UiBadge,
      name: 'status',
      getInputs: (row: User) => ({
        label: row.status === 'active' ? 'Active' : 'Inactive',
        variant: row.status === 'active' ? 'success' : 'error',
        size: 'sm',
      }),
    }),
    create_html_field<User>({
      label: 'Created',
      name: 'created_at',
      getValue: (row: User) =>
        `<span class="font-medium text-base-content">${row.created_at}</span>`,
      options: { sortable: true },
    }),
  ];

  function on_sort(event: { sort_by: string | null; order: 'asc' | 'desc' | null }): void {
    sort_state = event;
  }

  // Reset page when search/filter/limit changes
  let prev_search = $state('');
  let prev_limit = $state(0);
  $effect(() => {
    if (search_value !== prev_search || current_limit !== prev_limit) {
      prev_search = search_value;
      prev_limit = current_limit;
      current_page = 1;
    }
  });

  // Deep-ish watch on active_filters for page reset
  let prev_filters_json = $state('');
  $effect(() => {
    const json = JSON.stringify(active_filters);
    if (json !== prev_filters_json) {
      prev_filters_json = json;
      current_page = 1;
    }
  });
</script>

<section class="space-y-12">
  <!-- Loading state -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Loading state</h2>
    <p class="text-base-content/70 mb-6">
      When no content is passed or it's <code>undefined</code>, the table shows a loading spinner.
    </p>
    <UiTable {fields} content={undefined} />
  </div>

  <hr class="border-base-300" />

  <!-- Default table -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Default table</h2>
    <p class="text-base-content/70 mb-6">
      Basic table with DaisyUI classes. Displays data without additional modifiers.
    </p>
    <UiTable {fields} content={paginated_data} />
  </div>

  <hr class="border-base-300" />

  <!-- Zebra -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Zebra</h2>
    <p class="text-base-content/70 mb-6">
      With <code>zebra={true}</code> the alternating row style is applied.
    </p>
    <UiTable {fields} content={paginated_data} zebra={true} />
  </div>

  <hr class="border-base-300" />

  <!-- Bordered -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Bordered</h2>
    <p class="text-base-content/70 mb-6">
      With <code>bordered={true}</code> a border and background are added around the table.
    </p>
    <UiTable {fields} content={paginated_data} bordered={true} />
  </div>

  <hr class="border-base-300" />

  <!-- With expandable rows -->
  <div>
    <h2 class="text-2xl font-bold mb-2">With expandable rows</h2>
    <p class="text-base-content/70 mb-6">
      Each row can be expanded to show additional information using the <code>expandable</code> prop.
    </p>
    <UiTable {fields} {expandable} content={paginated_data} />
  </div>

  <hr class="border-base-300" />

  <!-- With sorting -->
  <div>
    <h2 class="text-2xl font-bold mb-2">With sorting</h2>
    <p class="text-base-content/70 mb-6">
      Columns with <code>options: {`{ sortable: true }`}</code> allow sorting the data. Click on ID, Name, or Created.
    </p>
    <UiTable {fields} content={paginated_data} {on_sort} />
  </div>

  <hr class="border-base-300" />

  <!-- Table sizes -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Table sizes</h2>
    <p class="text-base-content/70 mb-6">
      DaisyUI offers five sizes: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code> and <code>xl</code>.
    </p>
    <div class="space-y-8">
      <div>
        <h3 class="text-lg font-semibold mb-2">xs</h3>
        <UiTable {fields} content={paginated_data} size="xs" />
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">sm</h3>
        <UiTable {fields} content={paginated_data} size="sm" />
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">md (default)</h3>
        <UiTable {fields} content={paginated_data} size="md" />
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">lg</h3>
        <UiTable {fields} content={paginated_data} size="lg" />
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">xl</h3>
        <UiTable {fields} content={paginated_data} size="xl" />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Table with pin-rows -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Table with pin-rows</h2>
    <p class="text-base-content/70 mb-6">
      With <code>pin_rows={true}</code> the header stays fixed when scrolling vertically.
    </p>
    <div class="max-h-64 overflow-y-auto rounded-box border border-base-content/5">
      <UiTable {fields} content={paginated_data} pin_rows={true} />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Empty state -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Empty state</h2>
    <p class="text-base-content/70 mb-6">
      When there is no data, a message is shown indicating no records were found.
    </p>
    <UiTable
      {fields}
      content={{ count: 0, data: [], is_last_page: true, limit: 10, offset: 0 }}
    />
  </div>

  <hr class="border-base-300" />

  <!-- With search -->
  <div>
    <h2 class="text-2xl font-bold mb-2">With search</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>UiTableSearch</code> in the <code>pre_table</code> snippet to add a search field.
    </p>
    <UiTable {fields} content={paginated_data}>
      {#snippet pre_table()}
        <div class="flex flex-row justify-end">
          <UiTableSearch bind:value={search_value} />
        </div>
      {/snippet}
    </UiTable>
  </div>

  <hr class="border-base-300" />

  <!-- With limits -->
  <div>
    <h2 class="text-2xl font-bold mb-2">With limits</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>UiTableLimits</code> in the <code>pre_table</code> snippet to control items per page.
    </p>
    <UiTable {fields} content={paginated_data}>
      {#snippet pre_table()}
        <UiTableLimits limits={[5, 10, 20]} bind:current={current_limit} />
      {/snippet}
    </UiTable>
  </div>

  <hr class="border-base-300" />

  <!-- With filters -->
  <div>
    <h2 class="text-2xl font-bold mb-2">With filters</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>UiTableFilters</code> to filter by Role and Status. Activating a filter shows it as a badge.
    </p>
    <UiTable {fields} content={paginated_data}>
      {#snippet pre_table()}
        <UiTableFilters filters={role_filters} bind:active={active_filters} />
      {/snippet}
    </UiTable>
  </div>

  <hr class="border-base-300" />

  <!-- With pagination -->
  <div>
    <h2 class="text-2xl font-bold mb-2">With pagination</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>UiTablePagination</code> in the <code>pre_table</code> and <code>post_table</code> snippets.
    </p>
    <UiTable {fields} content={paginated_data}>
      {#snippet pre_table()}
        <div class="flex flex-row justify-end">
          <UiTablePagination
            total_items={paginated_data.count}
            items_per_page={current_limit}
            bind:current_page
          />
        </div>
      {/snippet}
      {#snippet post_table()}
        <UiTablePagination
          class="self-end"
          total_items={paginated_data.count}
          items_per_page={current_limit}
          bind:current_page
        />
      {/snippet}
    </UiTable>
  </div>

  <hr class="border-base-300" />

  <!-- Full featured -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Full featured</h2>
    <p class="text-base-content/70 mb-6">
      Combination of all modules: search, filters, limits, pagination, sorting, and expandable rows.
    </p>
    <UiTable {fields} {expandable} content={paginated_data} {on_sort}>
      {#snippet pre_table()}
        <div class="flex flex-col gap-4">
          <div class="flex flex-col md:flex-row justify-between gap-2">
            <UiTableFilters filters={role_filters} bind:active={active_filters} />
            <UiTablePagination
              total_items={paginated_data.count}
              items_per_page={current_limit}
              bind:current_page
            />
          </div>
          <div class="flex flex-col-reverse md:flex-row justify-between gap-4">
            <UiTableLimits limits={[5, 10, 20]} bind:current={current_limit} />
            <UiTableSearch bind:value={search_value} />
          </div>
        </div>
      {/snippet}
      {#snippet post_table()}
        <UiTablePagination
          class="self-end"
          total_items={paginated_data.count}
          items_per_page={current_limit}
          bind:current_page
        />
      {/snippet}
    </UiTable>
  </div>

  <hr class="border-base-300" />

  <!-- With query params support -->
  <div>
    <h2 class="text-2xl font-bold mb-2">With query params support</h2>
    <p class="text-base-content/70 mb-6">
      With <code>use_params={true}</code> all filters sync automatically with the URL query params
      (<code>?search=...&page=2&role=Admin</code>). Changes persist on page reload and allow sharing
      URLs with active filters.
    </p>
    <UiTable {fields} {expandable} content={paginated_data} {on_sort}>
      {#snippet pre_table()}
        <div class="flex flex-col gap-4">
          <div class="flex flex-col md:flex-row justify-between gap-2">
            <UiTableFilters filters={role_filters} use_params={true} bind:active={active_filters} />
            <UiTablePagination
              total_items={paginated_data.count}
              items_per_page={current_limit}
              use_params={true}
              bind:current_page
            />
          </div>
          <div class="flex flex-col-reverse md:flex-row justify-between gap-4">
            <UiTableLimits limits={[5, 10, 20]} use_params={true} bind:current={current_limit} />
            <UiTableSearch use_params={true} bind:value={search_value} />
          </div>
        </div>
      {/snippet}
      {#snippet post_table()}
        <UiTablePagination
          class="self-end"
          total_items={paginated_data.count}
          items_per_page={current_limit}
          use_params={true}
          bind:current_page
        />
      {/snippet}
    </UiTable>
  </div>
</section>
