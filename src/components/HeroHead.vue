<template>
  <header class="hero head">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
        <div class="navbar-brand blog-title">
          <div class="navbar-item">
            <a href="/">
              <h1 class="title is-4">
                {{ title }}
              </h1>
            </a>
          </div>
        </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>
