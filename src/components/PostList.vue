<template>
  <div class="post-list">
    <hr class="line" />
    <h1 class="title" v-html="post.title" />
    <h6 class="date" v-html="post.date"/>
    <p class="description" v-html="post.description"/>
    <g-link :to="post.path" class="read">Read More...</g-link>
  </div>
</template>

<script>
  export default {
    props: ["post"],
  };
</script>