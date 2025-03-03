<script setup>
const error = useError()
const errorBody = computed(() => {
  return JSON.stringify({ url: useRoute().path, error: error.value })
})
const mailtoUrl = computed(() => `mailto:kaleb.ercanbrack@hey.com?subject=Something Broke&body=${errorBody.value}`)

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" tag="article" class="prose max-w-80ch" />
  <article v-else>
      <p class="blurb" style="font-family: monospace">
        Aw nuts! Something wasn't found or went wrong. Please, <a class="underline text-primary font-black" :href="mailtoUrl">Let me know.</a>
      </p>
  </article>
</template>
