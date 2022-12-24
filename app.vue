<template>
  <div class="design-system | flow | container">
    <div class="title">
      <div data-shadowed-text="Kaleb Ercanbrack" class="shadowed mt-[6px] | title-header">
        Kaleb Ercanbrack
      </div>
      <div class="title-subheader">
        UI Designer / Software Engineer / ☕️
      </div>
    </div>
    <nav class="flex-row">
      <NuxtLink class="btn" to="/resume">Resume</NuxtLink>
      <NuxtLink class="btn" to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink class="btn" to="/speaking">Speaking</NuxtLink>
    </nav>
    <article class="prose">
      <NuxtPage />
    </article>
  </div>
</template>

<style>
article {
  --un-prose-body: var(--c-text);
  --un-prose-headings: var(--c-text);
}

.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--flow-space)
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 30px;
  gap: 8px;
  background-color: #fff;
  border: 1px solid var(--c-text);
  font-family: var(--f-body);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 19px;
}

.btn:active,
.btn.router-link-active {
  background-color: var(--c-primary);
  border: 1px solid var(--c-text);
  margin-top: -8px;
  box-shadow: 4px 4px 0px var(--c-text);
}

.container {
  margin: 50px 5px;
}

.title-header {
  font-size: 56px;
  font-weight: 900;
  font-family: var(--f-display);
  line-height: 90.1%;
  text-transform: uppercase;
  letter-spacing: -0.06em;
  color: var(--c-text);
}

.title-subheader {
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.13em;
  font-style: italic;
  font-family: var(--f-display);
  text-transform: uppercase;
}
</style>