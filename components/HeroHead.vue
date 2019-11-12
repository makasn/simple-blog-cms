<template>
  <div class="hero" style="background-color:#ABD0CE;margin-bottom:8px;">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
        <div class="navbar-brand" style="margin-left:20px">
          <div class="navbar-item">
            <h1 class="title is-4" style="color:#7C7877">
              {{ title }}
            </h1>
          </div>
        </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
