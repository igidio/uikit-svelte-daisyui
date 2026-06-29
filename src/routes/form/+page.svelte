<script lang="ts">
  import UiField from "$lib/ui/ui-field/UiField.svelte";
  import UiInput from "$lib/ui/ui-input/UiInput.svelte";
  import type { InputType } from "$lib/ui/ui-input/ui-input-properties";

  let username = $state("");
  let email = $state("");
  let password = $state("");
  let password_repeat = $state("");

  let touched = $state({
    username: false,
    email: false,
    password: false,
    password_repeat: false,
  });

  function mark_touched(field: keyof typeof touched) {
    touched[field] = true;
  }

  function get_error(field: string): string | null {
    switch (field) {
      case "username":
        if (!username) return "Username is required";
        if (username.length < 3)
          return "Username must be at least 3 characters";
        return null;
      case "email":
        if (!email) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
          return "Email is not valid";
        return null;
      case "password":
        if (!password) return "Password is required";
        if (password.length < 6)
          return "Password must be at least 6 characters";
        return null;
      case "password_repeat":
        if (!password_repeat) return "Please repeat your password";
        if (password !== password_repeat) return "Passwords do not match";
        return null;
      default:
        return null;
    }
  }

  let password_visible = $state(false);

  function toggle_password() {
    password_visible = !password_visible;
  }

  let password_type: InputType = $derived(
    password_visible ? "text" : "password",
  );
  let password_icon = $derived(password_visible ? "eye-off" : "eye");

  let is_submitting = $state(false);

  async function on_submit(e: Event) {
    e.preventDefault();

    // Mark all fields as touched
    for (const key of Object.keys(touched) as (keyof typeof touched)[]) {
      touched[key] = true;
    }

    // Check if there are errors
    const fields = ["username", "email", "password", "password_repeat"];
    const has_errors = fields.some((f) => get_error(f) !== null);
    if (has_errors) return;

    is_submitting = true;
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form submitted:", { username, email, password });
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
                  bind:value={username}
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
                  bind:value={email}
                  placeholder="youremail@example.com"
                  onblur={() => mark_touched("email")}
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
                  bind:value={password}
                  type={password_type}
                  placeholder="Your password"
                  onblur={() => mark_touched("password")}
                />
              {/snippet}
              {#snippet right()}
                <button
                  type="button"
                  class="btn btn-xs btn-ghost mt-2"
                  aria-label="Toggle password visibility"
                  onclick={toggle_password}
                >
                  {password_visible ? "Hide" : "Show"}
                </button>
              {/snippet}
            </UiField>

            <UiField
              label="Repeat password"
              id="password_repeat"
              error={get_error("password_repeat")}
              touched={touched.password_repeat}
              is_error_fixed={true}
            >
              {#snippet children()}
                <UiInput
                  bind:value={password_repeat}
                  type="password"
                  placeholder="Repeat your password"
                  onblur={() => mark_touched("password_repeat")}
                />
              {/snippet}
            </UiField>

            <div class="mt-4">
              <button
                type="submit"
                class="btn btn-primary w-full"
                disabled={is_submitting}
              >
                {is_submitting ? "Submitting..." : "Create account"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Model state card -->
    <div class="card bg-base-200 w-full lg:w-80">
      <div class="card-body">
        <h3 class="card-title text-sm font-semibold">Form State</h3>
        <div class="overflow-x-auto">
          <table class="table table-xs">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>username</td>
                <td>
                  {#if username}
                    {username}
                  {:else}
                    <span class="text-base-content/40">—</span>
                  {/if}
                </td>
              </tr>
              <tr>
                <td>email</td>
                <td>
                  {#if email}
                    {email}
                  {:else}
                    <span class="text-base-content/40">—</span>
                  {/if}
                </td>
              </tr>
              <tr>
                <td>password</td>
                <td>
                  {#if password}
                    ••••••
                  {:else}
                    <span class="text-base-content/40">—</span>
                  {/if}
                </td>
              </tr>
              <tr>
                <td>password_repeat</td>
                <td>
                  {#if password_repeat}
                    ••••••
                  {:else}
                    <span class="text-base-content/40">—</span>
                  {/if}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
