<template>
  <div>
    <hero-head :title="blog_title"></hero-head>
    <main>
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile articles">
            <div class="columns is-multiline is-variable is-2">
              <list-article
                v-for="(article, index) in articles"
                v-bind:article="article"
                v-bind:index="index"
                v-bind:key="article.id"
              ></list-article>
            </div>
          </div>
          <sideber :account_name="account_name"></sideber>
        </div>
      </div>
    </main>
    <hero-foot :copyrights="copyrights"></hero-foot>
  </div>
</template>

<script>
import HeroHead from '~/components/HeroHead.vue'
import HeroFoot from '~/components/HeroFoot.vue'
import Sideber from '~/components/Sideber.vue'
import ListArticle from '~/components/ListArticle.vue'

export default {
  //layout: 'blog',
  components: {
    HeroHead,
    HeroFoot,
    Sideber,
    ListArticle
  },
  asyncData (context) {
    return {
      blog_title: 'Blog Title',
      copyrights: 'author',
      account_name: 'author',
      articles: [
        { id: 1, title: '日本語フォントあいうえお',  date: '1 Nov 2019', image: 'sample.png' },
        { id: 2, title: 'Learn Vue', date:'1 Oct 2019', image: 'sample.png' },
        { id: 3, title: 'Build something awesome', date:'1 Sept 2019', image: 'sample.png' },
        { id: 4, title: 'Sample', date:'1 Aug 2019', image: 'sample.png' }
      ]
    }
  }
}
</script>
