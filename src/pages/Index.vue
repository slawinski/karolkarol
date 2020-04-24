<template>
  <Layout>
    <header class="header">
      <h1><g-link to="/">{{ $static.metadata.siteName }}</g-link></h1>
      <nav class="nav">
        <g-link class="nav__link" to="/">Blog</g-link>
        <g-link class="nav__link" to="/shop">Shop</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>

    <div class="container">
      <g-image class="item-a" alt="Example image" src="http://placekitten.com/100/100" width="135" />
      <p class="item-b">Blog osobisty Karola</p>
      <p class="item-c"><em>Nie karoluj mi tu teraz!</em></p>
    </div>

    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>

  </Layout>
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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

<style>
.home-links a {
  margin-right: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
}

.item-a {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
}

.item-b {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.item-c {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>
