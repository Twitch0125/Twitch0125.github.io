<template>
  <Html class="font-body text-body [--flow-space:0.75rem]" />
  <div
    class="sm:(grid grid-cols-[1fr_2fr_1fr])"
  >
    <div class="flex flex-col flow-9 gap-flow pt-7 col-start-2 px-[min(0.25rem,1rem)] sm:px-6 h-screen border-base">
      <HeroText />
      <MainNav />
      <NuxtPage />
    </div>
  </div>
</template>
