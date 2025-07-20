<script lang="ts" setup>
interface Props {
  /**
   * This should be a unocss class. ex: "i-logos-vue"
   */
  icon: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="relative">
    <div class="w-6 h-4 hidden sm:block absolute -left-8.5 top-1" :class="props.icon" />
    <slot />
  </div>
</template>
