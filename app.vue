<template>
  <Html class="font-body text-body [--flow-space:0.75rem]" />
  <div
    class="
    py-0 px-[min(0.25rem,1rem)] sm:px-6 h-screen border-base
    col-start-2
    "
  >
    <div class="space-y-flow flow-3">
      <HeroText />
      <MainNav />
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="postcss">
.landing-page {
  --flow-space: theme(spacing.9);
  padding-top: theme(spacing.7);
}
</style>
