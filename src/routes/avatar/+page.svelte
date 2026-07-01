<script lang="ts">
  import UiAvatar from '$lib/ui/ui-avatar/UiAvatar.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Avatar</h2>
    <p class="text-base-content/70 mb-6">Simple avatar with an image.</p>
    <div class="flex flex-wrap items-end gap-6">
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
        alt="Batperson"
        size="lg"
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Sizes</h2>
    <p class="text-base-content/70 mb-6">Avatars available in xs, sm, md, lg, and xl sizes.</p>
    <div class="flex flex-wrap items-end gap-6">
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
        alt="Superperson"
        size="xs"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
        alt="Superperson"
        size="sm"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
        alt="Superperson"
        size="md"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
        alt="Superperson"
        size="lg"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
        alt="Superperson"
        size="xl"
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Shapes</h2>
    <p class="text-base-content/70 mb-6">
      Avatars can be displayed in various shapes: circle, rounded, squircle, heart, and hexagon.
    </p>
    <div class="flex flex-wrap items-end gap-6">
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Yelling woman"
        shape="circle"
        size="lg"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Yelling woman"
        shape="rounded"
        size="lg"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Yelling woman"
        shape="rounded-xl"
        size="lg"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
        alt="Distracted"
        shape="squircle"
        size="lg"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/distracted3@192.webp"
        alt="Distracted"
        shape="heart"
        size="lg"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp"
        alt="Distracted"
        shape="hexagon"
        size="lg"
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Presence Indicator</h2>
    <p class="text-base-content/70 mb-6">Shows online/offline status using a colored dot.</p>
    <div class="flex flex-wrap items-end gap-6">
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        alt="Gordon"
        presence="online"
        size="lg"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp"
        alt="Idiot sandwich"
        presence="offline"
        size="lg"
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">With Ring</h2>
    <p class="text-base-content/70 mb-6">Highlight an avatar with a colored ring.</p>
    <div class="flex flex-wrap items-end gap-6">
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
        alt="Spiderperson"
        ring={true}
        size="lg"
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Placeholder</h2>
    <p class="text-base-content/70 mb-6">
      When no image is provided, display initials as a placeholder.
    </p>
    <div class="flex flex-wrap items-end gap-6">
      <UiAvatar placeholder="D" size="lg" />
      <UiAvatar placeholder="AI" presence="online" size="sm" />
      <UiAvatar placeholder="SY" size="md" />
      <UiAvatar placeholder="UI" size="xs" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Avatar Group</h2>
    <p class="text-base-content/70 mb-6">
      Stack multiple avatars together using the <code>avatar-group</code> class.
    </p>
    <div class="avatar-group -space-x-6">
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
        alt="Batperson"
        size="sm"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
        alt="Spiderperson"
        size="sm"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
        alt="Average bulk"
        size="sm"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"
        alt="Wonderperson"
        size="sm"
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Avatar Group with Counter</h2>
    <p class="text-base-content/70 mb-6">Use a placeholder avatar to show additional count.</p>
    <div class="avatar-group -space-x-6">
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
        alt="Batperson"
        size="sm"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
        alt="Spiderperson"
        size="sm"
      />
      <UiAvatar
        src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
        alt="Average bulk"
        size="sm"
      />
      <UiAvatar placeholder="+99" size="sm" />
    </div>
  </div>
</section>
