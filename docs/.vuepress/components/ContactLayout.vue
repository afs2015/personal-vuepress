<template>
  <div class="theme-container" :class="$page.frontmatter.pageClass">
    <Navbar />
    <div class="container">
      <h1 class="title">Contact</h1>
      <div class="content">
        <form name="contact" action="" netlify-honeypot="bot-field" method="post" netlify>
          <input type="hidden" name="form-name" value="contact" />

          <!-- Honeypot Trap -->
          <p class="hidden">
            <label>Don’t fill this out: <input name="bot-field"></label>
          </p>

          <!-- Form Name -->
          <label class="form-label" for="name">Name:</label>
          <input class="form-field" name="name" id="name" placeholder="Your name.." />

          <!-- Form Email -->
          <label class="form-label" for="email">Email:</label>
          <input class="form-field" name="email" id="email" placeholder="Your email.." />

          <!-- Form Message -->
          <label class="form-label" for="message">Message:</label>
          <textarea class="form-field" name="message" id="message" placeholder="Reason of inquiry.."></textarea>

          <!-- Form Submit Button -->
          <input class="form-button" type="submit" value="Send message" />
        </form>
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