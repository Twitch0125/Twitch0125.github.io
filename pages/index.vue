<script setup lang="ts">
const {data} = await useAsyncData(() => queryCollection('content').path('/resume').first());
</script>
<template>
  <div class="flex flex-col gap-sm">
    <p class="blurb">
      I'm a frontend engineer with 4 years of experience and a <b class="font-bold">passion</b> for excellent UI/UX Design
    </p>
    <Profile class="mx-auto" />
    <a class="btn btn-primary mr-1" href="mailto:kaleb.ercanbrack@hey.com"> Email Me </a>
    <Divider />
    <ContentRenderer v-if="data" :value="data" tag="main" class="prose max-w-80ch -mt-5" />
  </div>
</template>
