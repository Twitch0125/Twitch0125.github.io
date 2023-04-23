<script setup>
const blogs = await queryContent('/blog').find()
</script>

<template>
  <section class="flow-base grid gap-flow vertical-flow-deep">
    <h1 class="text-4xl font-semibold mt-flow">
      Posts
    </h1>
    <article v-for="blog in blogs" :key="blog._id" class="">
      <div class="bg-white">
        <!-- <img :src="blog." alt=""> -->
        <h2 class="text-xl font-semibold">
          <nuxt-link :to="blog._path">
            {{ blog.title }}
          </nuxt-link>
        </h2>
        <p>
          {{ blog.description }}
        </p>
      </div>
      <div class="h-1px bg-body -mx-[min(0.25rem,1rem)] sm:-mx-6" />
    </article>
  </section>
</template>
