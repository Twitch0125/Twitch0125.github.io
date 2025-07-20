<script setup>
const links = [{
  to: '/',
  text: 'Resume',
}, {
  to: '/blog',
  text: 'Blog',
}, {
  to: '/speaking',
  text: 'Speaking',
}]
</script>

<template>
  <nav>
    <ul class="flex gap-xs [&>li]:(min-w-[0] flex-auto)">
      <li v-for="link in links" :key="link.to">
        <NuxtLink tabindex="0" class="btn flex-grow flex-shrink flex-basis-[118px] [&.router-link-active]:(-mt-1 mr-1 btn-primary)" :to="link.to">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
