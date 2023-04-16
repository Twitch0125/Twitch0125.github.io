<template>
  <div class="profile">
    <NuxtImg
      class="profile-img" src="/images/profile.jpg"
      fit="cover"
      :modifiers="{ position: 'top' }" alt="Kaleb Ercanbrack"
      width="280"
      height="280"
    />
    <div class="profile-square" />
    <div class="profile-square" />
    <div class="profile-label">
      That's me!
    </div>
  </div>
</template>

<style lang="postcss">
.profile {
    --profile-size: 140px;
    width: 162px;
    height: 152px;
    position: relative;

    &-label {
        /* width: theme(width.16); */
        /* height: theme(height.4); */
        font-size: theme(fontSize.lg.0);
        background-color: theme(colors.primary);
        letter-spacing: theme(letterSpacing.tighter);
        line-height: theme(lineHeight.tight);
        position: absolute;
        bottom: 0;
        right: calc(-1 * theme(spacing.5));
        z-index: 3;
        font-weight: theme(fontWeight.bold);
        border: var(--base-border);
        padding: 0 theme(padding.1);
        transform: rotate(-20deg);
    }

    &-img {
        z-index: 3;
        position: absolute;
        top: 0;
        left: 0;
    }

    &-img,
    &-square {
        width: var(--profile-size);
        height: var(--profile-size);
        border: var(--base-border);
        background: #fff;
    }

    &-square:nth-of-type(1) {
        position: absolute;
        top: 6px;
        left: 11px;
        z-index: 1;
    }

    &-square:nth-of-type(2) {
        position: absolute;
        top: 12px;
        left: 22px;
        z-index: 0;
    }
}
</style>
