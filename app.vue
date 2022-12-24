<template>
  <div class="design-system | container | landing-page">
    <div class="flow title">
      <div data-shadowed-text="Kaleb Ercanbrack" class="shadowed mt-[6px] | title-header">
        Kaleb Ercanbrack
      </div>
      <div class="title-subheader">
        UI Designer / Software Engineer / ☕️
      </div>
    </div>
    <nav class="flex items-center justify-between gap-3">
      <NuxtLink tabindex="0" class="btn flex-auto [&.router-link-active]:-mt-2" to="/resume">Resume</NuxtLink>
      <NuxtLink class="btn flex-auto [&.router-link-active]:-mt-2" to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink class="btn flex-auto [&.router-link-active]:-mt-2" to="/speaking">Speaking</NuxtLink>
    </nav>
    <p class="blurb">
      I'm a frontend engineer with 3 years of experience and a <b class="font-bold">passion</b> for excellent UI/UX
      Design
    </p>
    <div class="profile">
      placeholder
    </div>
    <a class="btn btn-primary" href="mailto:kaleb.ercanbrack@hey.com"> Email Me </a>
    <article class="prose ">
      <NuxtPage />
    </article>
  </div>
</template>

<style lang="postcss">
.landing-page {
  @apply space-y-[1.875rem];
}

.profile {
  width: 150px;
  height: 140px;
  border: 1px solid theme(colors.body);
}


.title-header {
  @apply text-[3.5rem] font-black font-display text-body;
  line-height: 90.1%;
  text-transform: uppercase;
  letter-spacing: -0.06em;
}

.title-subheader {
  @apply font-display;
  font-size: theme(fontSize.sm);
  font-weight: 900;
  letter-spacing: 0.13em;
  font-style: italic;
  text-transform: uppercase;
}
</style>