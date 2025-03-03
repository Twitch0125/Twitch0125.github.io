<script setup>
const {data: blogs} = await useAsyncData(() => queryCollection('content')
.andWhere(query => {
  return query.where('status', '!=', 'draft').where('path', 'LIKE', '/blog/%')
})
.order('created', 'DESC')
.all());
</script>

<template>
  <section class="grid gap-sm [&_*~*]:mt-xs">
    <p class="blurb">
      Read my rants, nerdisms, and other stuff.
    </p>
    <h1 class="text-xl font-semibold">
      Posts
    </h1>
    <article v-for="blog in blogs" :key="blog._id" class="">
      <div class="bg-white">
        <h2 class="text-lg font-semibold">
          <nuxt-link class="underline" :to="blog.path">
            {{ blog.title }}
          </nuxt-link>
        </h2>
        <span class="font-mono text-body/70 text-sm">
          <Date :date="blog.created" />
        </span>
        <p>
          {{ blog.description }}
        </p>
      </div>
      <Divider />
    </article>
  </section>
</template>
