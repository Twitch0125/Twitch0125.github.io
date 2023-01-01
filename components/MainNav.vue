<script setup>
const activeClass = 'btn-primary router-link-active'
</script>

<template>
  <nav class="nav">
    <ul class="nav-btns">
      <li>
        <NuxtLink :active-class="activeClass" tabindex="0" class="btn btn-nav" to="/resume">
          Resume
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :active-class="activeClass" class="btn btn-nav" to="/portfolio">
          Portfolio
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :active-class="activeClass" class="btn btn-nav" to="/speaking">
          Speaking
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss">
.btn.router-link-active {
    margin-top: calc(-1 * theme(spacing.1));
    margin-right: theme(spacing.1);
}

.nav {}

.nav-btns {
    li {
        min-width: 0;
        /* this prevents block elements from growing out of their flex container */
        flex: 1 1 auto;
    }

    display: flex;
    gap: theme(spacing.1);
}

.btn-nav {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 118px;
}
</style>
