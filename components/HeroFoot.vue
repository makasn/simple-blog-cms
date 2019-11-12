<template>
  <footer class="hero foot">
    <div class="hero-foot">
      <div class="container has-text-right copyright">
        <p>
          copyrights(c) {{ copyrights }}.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['copyrights']
}
</script>
