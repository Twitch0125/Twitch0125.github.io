<template>
  <div class="design-system | layout col-start-2">
    <div class="flow landing-page">
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
