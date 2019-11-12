<template>
  <div class="hero" style="background-color:#ABD0CE;margin-top:8px;">
    <div class="hero-foot" style="padding:5px 0">
      <div class="container has-text-right">
        <p style="color:#7C7877">
          copyrights(c) {{ copyrights }}.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['copyrights']
}
</script>
