<script setup>
const error = useError()
const errorBody = computed(() => {
  return JSON.stringify({ url: useRoute().path, error: error.value })
})
const mailtoUrl = computed(() => `mailto:kaleb.ercanbrack@hey.com?subject=Something Broke&body=${errorBody.value}`)
</script>

<template>
  <ContentDoc tag="article" class="prose">
    <template #not-found>
      <p class="blurb" style="font-family: monospace">
        Aw nuts! Something wasn't found or went wrong. <a
          class="underline text-primary font-black"
          :href="mailtoUrl"
        >Let me
          know.</a>
      </p>
    </template>
  </ContentDoc>
</template>
