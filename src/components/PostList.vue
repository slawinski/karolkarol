<template>
  <div class="pb-10">
    <h1 class="font-serif font-black text-2xl" v-html="post.title" />
    <h6 class="text-sm" v-html="post.date"/>
    <p class="py-2" v-html="post.description"/>
    <g-link :to="post.path" class="underline text-blue-600 visited:text-purple-600">Read More...</g-link>
  </div>
</template>

<script>
  export default {
    props: ["post"],
  };
</script>