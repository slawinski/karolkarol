<template>
  <div>
    <header class="relative sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <h2 class="font-sans font-black text-2xl pt-3">{{ $static.metadata.siteName }}</h2>
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="block text-black hover:text-gray-500 focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-else fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="absolute right-0 w-48 px-2 pt-2 pb-4 bg-white rounded-lg shadow-xl sm:flex sm:p-0 sm:bg-transparent sm:shadow-none">
        <g-link class=" block px-2 rounded hover:bg-gray-300 underline text-blue-600" to="/">Home</g-link>
        <g-link class=" mt-1 block px-2 rounded hover:bg-gray-300 underline text-blue-600 sm:mt-0 sm:ml-2" to="https://www.vinted.pl/member/2794043-rockhead">Shop</g-link>
        <g-link class=" mt-1 block px-2 rounded hover:bg-gray-300 underline text-blue-600 sm:mt-0 sm:ml-2" to="/about/">About</g-link>
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
