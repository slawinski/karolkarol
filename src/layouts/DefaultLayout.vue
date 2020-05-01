<template>
  <div class="layout">
    <header class="header">
      <h2>{{ $static.metadata.siteName }}</h2>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="https://www.vinted.pl/member/2794043-rockhead">Shop</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>

    <slot/>

    <footer>
      <p>©  2020</p>
    </footer>
  </div>
</template>

<static-query>
  query {
  metadata {
  siteName
  }
  }
</static-query>

<style>
body {
  font-family: "source serif pro",sans-serif;
  margin:0;
  padding:0;
}

p {
  font-family: "source sans pro",sans-serif;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
