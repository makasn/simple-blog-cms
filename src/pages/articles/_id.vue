<template>
  <div>
    <hero-head :title="blog_title"></hero-head>
    <main>
      <div>
        <div class="article-image" style="background-color:#E0E3DA;">
          <div style="max-width: 600px;margin: auto;">
            <figure class="image is-2by1">
              <img :src="require('~/assets/img/' + article.image)" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="container article-content" style="padding: 1.5rem 0">
          <h2 class="article-title title has-text-centered">
            {{ article.title }}
          </h2>
          <div class="article-body" style="padding: 1.25rem;">
            <div v-html="$md.render(body)"></div>
          </div>
        </div>
      </div>
    </main>
    <hero-foot :copyrights="copyrights"></hero-foot>
  </div>
</template>

<script>
import HeroHead from '~/components/HeroHead.vue'
import HeroFoot from '~/components/HeroFoot.vue'

export default {
  //layout: 'blog',
  components: {
    HeroHead,
    HeroFoot
  },
  asyncData (context) {
    return {
      blog_title: 'Blog Title',
      copyrights: 'author',
      account_name: 'author',
      article: {
        id: 1,
        title: 'テスト記事だよーーー！',
        date: '1 Nov 2019',
        image: 'default.jpg'
      },
      body: '# Hello World!\n- hogehoge\n- hugahuga'
    }
  }
}
</script>