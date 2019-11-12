<template>
  <div>
    <hero-head :title="title"></hero-head>
    <main>
      <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child" style="min-height:400px">
            <nuxt />
          </div>
        </div>
        <sideber />
      </div>
      </div>
    </main>
    <hero-foot />
  </div>
</template>

<script>
import HeroHead from '~/components/HeroHead.vue'
import HeroFoot from '~/components/HeroFoot.vue'
import Sideber from '~/components/Sideber.vue'

export default {
  components: {
    HeroHead,
    HeroFoot,
    Sideber
  },
  asyncData (context) {
    return { title: 'Neko' }
  }
}
</script>
