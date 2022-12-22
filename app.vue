<template>
  <div class="layout">
    <div class="accented title">
      Kaleb Ercanbrack
    </div>
    <nav>
      <span class="text-2xl">
        Yo
      </span>
    </nav>
    <article class="prose">
      <NuxtPage />
    </article>
  </div>
</template>

<style>
article {
  --un-prose-body: var(--c-text);
  --un-prose-headings: var(--c-primary);
}

.layout {
  --at-apply: space-y-4 m-4;
}

.title {
  font-size: 6em;
  font-weight: 900;
  font-family: var(--f-display);
  line-height: 90.1%;
  text-transform: uppercase;
  letter-spacing: -0.06em;
}

.accented {
  --stroke-width: 1px;
  color: var(--c-primary);
  -webkit-text-stroke: 1px var(--c-text);
  /* -webkit-text-fill-color: transparent; */
  text-shadow: 2px 2px var(--c-text);
  /* text-shadow: var(--stroke-width) 0px var(--c-text),
    calc(var(--stroke-width) * -1) 0px var(--c-text),
    0px var(--stroke-width) var(--c-text),
    0px calc(var(--stroke-width) * -1) var(--c-text); */
}
</style>