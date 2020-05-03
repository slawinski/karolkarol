<template>
  <div>
    <header class="mb-3 relative sm:flex sm:justify-between sm:items-center">
      <div class="flex items-center justify-between sm:p-0">
        <h2 class="font-sans font-black text-2xl pt-3">{{ $static.metadata.siteName }}</h2>
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" :class="isOpen ? 'neo-button-depressed' : 'neo-button'" class="p-2 neo-button active:neo-button-depressed block text-black hover:text-gray-600 focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-else fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="neo-label mt-3 py-3 absolute right-0 px-5 pb-4 sm:flex sm:p-0 sm:m-0 sm:shadow-none">
        <g-link class=" block px-2 rounded hover:bg-gray-300 underline text-blue-600 visited:text-purple-600" to="/">Home</g-link>
        <g-link class=" mt-6 block px-2 rounded hover:bg-gray-300 underline text-blue-600 sm:mt-0 sm:ml-2 visited:text-purple-600" to="https://www.vinted.pl/member/2794043-rockhead">Shop</g-link>
        <g-link class=" mt-6 block px-2 rounded hover:bg-gray-300 underline text-blue-600 sm:mt-0 sm:ml-2 visited:text-purple-600" to="/about/">About</g-link>
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

<script>
  export default {
    data() {
      return {
        isOpen: false,
      }
    },
  }
</script>

<style>
  .neo-label {
    border-radius: 10px;
    background: #f8fafc;
    box-shadow: inset 3px 3px 6px #d3d5d6,
    inset -3px -3px 6px #ffffff;
  }
</style>
