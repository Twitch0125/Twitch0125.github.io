<template>
    <div class="profile">
        <NuxtImg class="profile-img" src="/images/profile.jpg" format="webp" :modifiers="{position: 'cover'}" width="117px" height="117px"
            alt="Picture of Kaleb Ercanbrack" />
        <div class="profile-square"></div>
        <div class="profile-square"></div>
    </div>
</template>
<style lang="postcss">
.profile {
    --profile-size: 117px;
    --profile-border: 1px solid theme(colors.body);
    width: 150px;
    height: 140px;
    position: relative;

    &-img {
        z-index: 3;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
    }

    &-img,
    &-square {
        width: var(--profile-size);
        height: var(--profile-size);
        border: var(--profile-border);
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