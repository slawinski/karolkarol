<template>
  <DefaultLayout>
    <div class="pb-10 flex items-center">
      <g-image class="rounded-full" alt="Example image" src="~/assets/karo.jpg" width="135" />
      <div class="pl-5">
        <p class="py-2">Blog osobisty Karola</p>
        <p class="py-2"><em>Nie karoluj mi tu teraz!</em></p>
      </div>
    </div>

    <section>
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>

  </DefaultLayout>
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        path
        title
        content
        description
        date (format: "D MMMM YYYY")
      }
    }
  }
}
</page-query>

<script>
  import PostList from "~/components/PostList";

export default {
  components: {
    PostList
  },

  metaInfo: {
    title: 'This is a blog'
  }
}
</script>