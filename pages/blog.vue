<script setup>
const blogs = await queryContent("/blog")
  .sort({
    created: -1,
  })
  .find();
</script>

<template>
  <section class="flow-base grid gap-flow vertical-flow-deep">
    <p class="blurb">Read my rants, nerdisms, and other stuff.</p>
    <h1 class="text-3xl font-semibold">Posts</h1>
    <article v-for="blog in blogs" :key="blog._id" class="">
      <div class="bg-white">
        <h2 class="text-xl font-semibold">
          <nuxt-link :to="blog._path">
            {{ blog.title }}
          </nuxt-link>
        </h2>
        <span class="font-mono text-body/70 text-sm">
          {{ blog.created }}
        </span>
        <p>
          {{ blog.description }}
        </p>
      </div>
      <Divider />
    </article>
  </section>
</template>
