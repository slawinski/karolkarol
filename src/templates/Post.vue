<template>
  <DefaultLayout>
    <br />
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content"/>
  </DefaultLayout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
  }
}
</page-query>

<script>
  import PostLayout from '~/layouts/PostLayout.vue';

  export default {
    components: {
      PostLayout
    },

    metaInfo() {
      return {
        title: this.$page.post.title
      };
    }
  };
</script>