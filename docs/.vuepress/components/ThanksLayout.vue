<template>
  <div class="theme-container" :class="$page.frontmatter.pageClass">
    <Navbar />
    <div class="container">
      <h1 class="title">Thank You</h1>
      <div class="content">
        <p>Your message has been sent. I'll get back to you soon.</p>
        <p><a href="/">Return home</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
