<script setup>
const activeClass = 'btn-primary router-link-active'
</script>

<template>
  <nav>
    <ul class="flex gap-1 [&>li]:(min-w-[0] flex-auto)">
      <li>
        <NuxtLink :active-class="activeClass" tabindex="0" class="btn [&.router-link-active]:(-mt-1 mr-1) flex-grow flex-shrink flex-basis-[118px]" to="/">
          Resume
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :active-class="activeClass" class="btn [&.router-link-active]:(-mt-1 mr-1) flex-grow flex-shrink flex-basis-[118px]" to="/portfolio">
          Thoughts
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :active-class="activeClass" class="btn [&.router-link-active]:(-mt-1 mr-1) flex-grow flex-shrink flex-basis-[118px]" to="/speaking">
          Speaking
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
