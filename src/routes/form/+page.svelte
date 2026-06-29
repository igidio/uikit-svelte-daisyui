<script lang="ts">
  import UiField from "$lib/ui/ui-field/UiField.svelte";
  import UiInput from "$lib/ui/ui-input/UiInput.svelte";
  import type { InputType } from "$lib/ui/ui-input/ui-input-properties";
  import UiSelect from "$lib/ui/ui-select/UiSelect.svelte";
  import UiTextarea from "$lib/ui/ui-textarea/UiTextarea.svelte";
  import UiToggle from "$lib/ui/ui-toggle/UiToggle.svelte";
  import UiRating from "$lib/ui/ui-rating/UiRating.svelte";
  import UiRange from "$lib/ui/ui-range/UiRange.svelte";
  import UiRadio from "$lib/ui/ui-radio/UiRadio.svelte";
  import UiRadioItem from "$lib/ui/ui-radio/UiRadioItem.svelte";
  import UiCheckbox from "$lib/ui/ui-checkbox/UiCheckbox.svelte";
  import UiCalendar from "$lib/ui/ui-calendar/UiCalendar.svelte";
  import UiInputfile from "$lib/ui/ui-inputfile/UiInputfile.svelte";
  import type { SelectOption } from "$lib/ui/ui-select/ui-select-properties";
  import type { CheckboxOption } from "$lib/ui/ui-checkbox/ui-checkbox-properties";

  // ── Validation helpers ──────────────────────────────────────
  function required(val: unknown): boolean {
    if (typeof val === "string") return val.trim().length > 0;
    if (typeof val === "boolean") return val === true;
    if (typeof val === "number") return val >= 1;
    if (Array.isArray(val)) return val.length > 0;
    return val !== null && val !== undefined && val !== "";
  }

  // ── Form model ──────────────────────────────────────────────
  let form = $state({
    username: "",
    email: "",
    phone_number: "",
    country: "",
    bio: "",
    password: "",
    repeat_password: "",
    first_name: "",
    last_name: "",
    interests: [] as string[],
    birth_date: "",
    resume: null as string | null,
    gender: "male",
    accept_terms: false,
    rating: 0,
    age: 25,
  });

  // ── Touched tracking ────────────────────────────────────────
  let touched = $state({
    username: false,
    email: false,
    phone_number: false,
    country: false,
    bio: false,
    password: false,
    repeat_password: false,
    first_name: false,
    last_name: false,
    interests: false,
    birth_date: false,
    resume: false,
    gender: false,
    accept_terms: false,
    rating: false,
    age: false,
  });

  function mark_touched(field: keyof typeof touched) {
    touched[field] = true;
  }

  // ── Validation rules ────────────────────────────────────────
  function get_error(field: string): string | null {
    const v = form[field as keyof typeof form];
    switch (field) {
      case "username":
        if (!required(v)) return "Username is required";
        if ((v as string).length < 3)
          return "Username must be at least 3 characters";
        return null;
      case "email":
        if (!required(v)) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v as string))
          return "Email is not valid";
        return null;
      case "phone_number":
        if (!required(v)) return "Phone number is required";
        if (!/^\+?[\d\s-]{7,15}$/.test(v as string))
          return "Phone number is not valid";
        return null;
      case "country":
        if (!required(v)) return "Country is required";
        return null;
      case "bio":
        if ((v as string).length > 500)
          return "Bio cannot exceed 500 characters";
        return null;
      case "password":
        if (!required(v)) return "Password is required";
        if ((v as string).length < 6)
          return "Password must be at least 6 characters";
        return null;
      case "repeat_password":
        if (!required(v)) return "Please repeat your password";
        if (form.password !== form.repeat_password)
          return "Passwords do not match";
        return null;
      case "first_name":
        if (!required(v)) return "First name is required";
        if ((v as string).length > 255)
          return "First name cannot exceed 255 characters";
        return null;
      case "last_name":
        if (!required(v)) return "Last name is required";
        if ((v as string).length > 255)
          return "Last name cannot exceed 255 characters";
        return null;
      case "interests":
        if (!required(v)) return "Select at least one interest";
        return null;
      case "birth_date":
        if (!required(v)) return "Birth date is required";
        return null;
      case "resume":
        if (!required(v)) return "Resume is required";
        return null;
      case "gender":
        if (!required(v)) return "Gender is required";
        return null;
      case "accept_terms":
        if ((v as boolean) !== true)
          return "You must accept the terms and conditions";
        return null;
      case "rating":
        if ((v as number) < 1) return "Rating is required";
        return null;
      case "age":
        if ((v as number) < 18) return "You must be at least 18 years old";
        if ((v as number) > 120) return "Age cannot exceed 120";
        return null;
      default:
        return null;
    }
  }

  // ── Password visibility ─────────────────────────────────────
  let password_visible = $state(false);

  function toggle_password_visibility() {
    password_visible = !password_visible;
  }

  let password_type: InputType = $derived(
    password_visible ? "text" : "password",
  );

  // ── Country options ─────────────────────────────────────────
  const country_options: SelectOption[] = [
    { label: "Select your country", value: "" },
    { label: "Spain", value: "es" },
    { label: "Mexico", value: "mx" },
    { label: "Argentina", value: "ar" },
    { label: "Colombia", value: "co" },
    { label: "Chile", value: "cl" },
  ];

  // ── Interests options ───────────────────────────────────────
  const interests_options: CheckboxOption[] = [
    { label: "Sports", value: "sports" },
    { label: "Music", value: "music" },
    { label: "Reading", value: "reading" },
    { label: "Technology", value: "tech" },
  ];

  // ── Model entries for sidebar ───────────────────────────────
  let model_entries = $derived(
    Object.entries(form).map(([key, value]) => ({
      key,
      value: Array.isArray(value)
        ? value.length
          ? value.join(", ")
          : null
        : value || null,
    })),
  );

  // ── Submit handler ──────────────────────────────────────────
  let is_submitting = $state(false);

  async function on_submit(event: Event) {
    event.preventDefault();

    for (const key of Object.keys(touched) as (keyof typeof touched)[]) {
      touched[key] = true;
    }

    const fields = Object.keys(form);
    const has_errors = fields.some((f) => get_error(f) !== null);
    if (has_errors) return;

    is_submitting = true;
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form submitted:", form);
    is_submitting = false;
  }
</script>

<div class="space-y-10">
  <div class="text-center pb-5 pt-5">
    <span class="text-2xl font-bold tracking-tight">Create account</span>
  </div>

  <div class="flex flex-col lg:flex-row gap-4">
    <!-- Form card -->
    <div class="card bg-base-200 flex-1">
      <div class="card-body">
        <form autocomplete="off" onsubmit={on_submit}>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-6">
            <!-- Left column -->
            <div class="flex flex-col gap-3">
              <UiField
                label="Username"
                id="username"
                error={get_error("username")}
                touched={touched.username}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiInput
                    bind:value={form.username}
                    placeholder="Username"
                    onblur={() => mark_touched("username")}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="Email"
                id="email"
                error={get_error("email")}
                touched={touched.email}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiInput
                    bind:value={form.email}
                    placeholder="youremail@example.com"
                    onblur={() => mark_touched("email")}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="Phone number"
                id="phone_number"
                error={get_error("phone_number")}
                touched={touched.phone_number}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiInput
                    bind:value={form.phone_number}
                    placeholder="Your phone number"
                    onblur={() => mark_touched("phone_number")}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="Country"
                id="country"
                error={get_error("country")}
                touched={touched.country}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiSelect
                    bind:value={form.country}
                    options={country_options}
                    placeholder="Select your country"
                    onblur={() => mark_touched("country")}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="Bio"
                id="bio"
                error={get_error("bio")}
                touched={touched.bio}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiTextarea
                    bind:value={form.bio}
                    placeholder="Tell us about yourself..."
                    onblur={() => mark_touched("bio")}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="Password"
                id="password"
                error={get_error("password")}
                touched={touched.password}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiInput
                    bind:value={form.password}
                    type={password_type}
                    placeholder="Your password"
                    onblur={() => mark_touched("password")}
                  />
                {/snippet}
                {#snippet right()}
                  <div class="mt-2">
                    <button
                      type="button"
                      class="btn btn-xs btn-ghost"
                      aria-label="Toggle password visibility"
                      onclick={toggle_password_visibility}
                    >
                      {password_visible ? "🙈" : "👁️"}
                    </button>
                  </div>
                {/snippet}
              </UiField>
            </div>

            <!-- Right column -->
            <div class="flex flex-col gap-3">
              <UiField
                label="Repeat password"
                id="repeat_password"
                error={get_error("repeat_password")}
                touched={touched.repeat_password}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiInput
                    bind:value={form.repeat_password}
                    type="password"
                    placeholder="Repeat your password"
                    onblur={() => mark_touched("repeat_password")}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="First name"
                id="first_name"
                error={get_error("first_name")}
                touched={touched.first_name}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiInput
                    bind:value={form.first_name}
                    placeholder="Your first name"
                    onblur={() => mark_touched("first_name")}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="Last name"
                id="last_name"
                error={get_error("last_name")}
                touched={touched.last_name}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiInput
                    bind:value={form.last_name}
                    placeholder="Your last name"
                    onblur={() => mark_touched("last_name")}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="Interests"
                id="interests"
                error={get_error("interests")}
                touched={touched.interests}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiCheckbox
                    bind:value={form.interests}
                    name="signup-interests"
                    data={interests_options}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="Birth date"
                id="birth_date"
                error={get_error("birth_date")}
                touched={touched.birth_date}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiCalendar
                    bind:value={form.birth_date}
                    onblur={() => mark_touched("birth_date")}
                  />
                {/snippet}
              </UiField>

              <UiField
                label="Resume (PDF)"
                id="resume"
                error={get_error("resume")}
                touched={touched.resume}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiInputfile bind:value={form.resume} accept=".pdf" />
                {/snippet}
              </UiField>

              <UiField
                label="Gender"
                error={get_error("gender")}
                touched={touched.gender}
                is_error_fixed={true}
              >
                {#snippet children()}
                  <UiRadio name="signup-gender" bind:value={form.gender}>
                    {#snippet children()}
                      <UiRadioItem value="male">Male</UiRadioItem>
                      <UiRadioItem value="female">Female</UiRadioItem>
                      <UiRadioItem value="other">Other</UiRadioItem>
                    {/snippet}
                  </UiRadio>
                {/snippet}
              </UiField>
            </div>
          </div>

          <!-- Full width fields -->
          <div class="flex flex-col gap-3">
            <UiField
              label="Accept terms"
              id="accept_terms"
              error={get_error("accept_terms")}
              touched={touched.accept_terms}
              is_error_fixed={true}
            >
              {#snippet children()}
                <UiToggle bind:checked={form.accept_terms} color="primary" />
              {/snippet}
            </UiField>

            <UiField
              label="Rating"
              error={get_error("rating")}
              touched={touched.rating}
              is_error_fixed={true}
            >
              {#snippet children()}
                <UiRating _name="signup-rating" bind:value={form.rating} />
              {/snippet}
            </UiField>

            <UiField
              label="Age"
              id="age"
              error={get_error("age")}
              touched={touched.age}
              is_error_fixed={true}
            >
              {#snippet children()}
                <UiRange bind:value={form.age} min={18} max={120} />
              {/snippet}
            </UiField>
          </div>

          <button
            type="submit"
            class="btn btn-primary btn-block mt-4"
            disabled={is_submitting}
          >
            {#if is_submitting}
              <span class="loading loading-spinner"></span>
              Register
            {:else}
              Register
            {/if}
          </button>
        </form>
      </div>
    </div>

    <!-- Reactive values sidebar -->
    <div class="w-full lg:w-80 shrink-0">
      <div class="sticky card bg-base-200 top-22">
        <div class="card-body p-4">
          <h3 class="text-sm font-semibold mb-3 flex items-center gap-2">
            <span
              class="inline-block w-2 h-2 rounded-full bg-success animate-pulse"
            ></span>
            Reactive values
          </h3>

          <div class="space-y-1.5 font-mono text-xs">
            {#each model_entries as entry}
              <div class="flex justify-between items-start gap-2">
                <span class="text-base-content/60 shrink-0">{entry.key}:</span>
                <span
                  class="text-right truncate max-w-45 {entry.value
                    ? 'text-primary'
                    : 'text-base-content/40'}"
                >
                  {entry.value ?? "—"}
                </span>
              </div>
            {/each}
          </div>

          <div class="mt-3 pt-3 border-t border-base-300">
            <div class="flex justify-between text-xs">
              <span class="text-base-content/60">touched</span>
              <span class="font-mono">
                {Object.values(touched).some(Boolean) ? "true" : "false"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
