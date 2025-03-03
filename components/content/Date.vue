<script setup lang="ts">
const props = defineProps<{date?: string}>()
const formattedDate = computed(() => {
  if(!props.date) return ''
  return new Date(props.date).toLocaleDateString(undefined, {dateStyle: 'short'})
})
</script>
<template>
  <span class="date">
    <slot> {{ formattedDate }} </slot>
  </span>
</template>
