<template>
  <div class="flow title">
    <NuxtLink to="/" data-shadowed-text="Kaleb Ercanbrack" class="title-header | shadowed block mt-[6px] ">
      Kaleb Ercanbrack
    </NuxtLink>
    <div class="title-subheader">
      UI Designer / Software Engineer / ☕️
    </div>
  </div>
</template>

<style lang="postcss">
.title {
    --flow-space: theme(spacing.1);
    &-header {
        @media screen(sm){
            font-size: theme(fontSize.6xl.0)
        }
        @apply font-black font-display text-body;
        width: 0; /* this is to make sure our text is always wrapped */
        font-size: theme(fontSize.5xl.0);
        line-height: 90.1%;
        text-transform: uppercase;
        letter-spacing: -0.06em;
    }

    &-subheader {
        @apply font-display;
        font-size: theme(fontSize.sm);
        font-weight: 900;
        letter-spacing: 0.13em;
        font-style: italic;
        text-transform: uppercase;
    }
}
</style>
