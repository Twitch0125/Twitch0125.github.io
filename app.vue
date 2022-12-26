<template>
  <div class="design-system | container | flow landing-page">
    <HeroText />
    <MainNav />
    <NuxtPage />
  </div>
</template>

<style lang="postcss">
.landing-page {
  --flow-space: theme(spacing.8);
  margin-top: theme(spacing.7);
}
</style>