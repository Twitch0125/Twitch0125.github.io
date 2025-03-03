<script setup lang="ts">
const props = defineProps<{date?: string, subheading?: boolean}>()
const formattedDate = computed(() => {
  if(!props.date) return ''
  return new Date(props.date).toLocaleDateString(undefined, {dateStyle: 'short'})
})
</script>
<template>
  <div class="date" :class="{'-mt-8': props.subheading}">
    <slot> {{ formattedDate }} </slot>
  </div>
</template>
