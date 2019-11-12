<template>
  <div>
    <hero-head :title="title"> </hero-head>
    <main>
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child articles">
              <div class="columns">
              <article class="column is-half">
                <div class="card card-list">
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src="~assets/img/default.jpg" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content flex">
                    <div class="content">
                      <p class="title is-5">個人ブログ用のCMSをNuxt.js×GAEで作った話</p>
                    </div>
                    <div class="bottom-align time">
                      <time datetime="2016-1-1">1 Jan 2016</time>
                    </div>
                  </div>
                </div>
              </article>
              <article class="column is-half">
                <div class="card card-list">
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src="~assets/img/default_1.jpg" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content flex">
                    <div class="content">
                      <p class="title is-5">sample</p>
                    </div>
                    <div class="bottom-align time">
                      <time datetime="2016-1-1">1 Jan 2016</time>
                    </div>
                  </div>
                </div>
              </article>
              </div>
              <div class="columns">
              <article class="column is-half">
                <div class="card card-list">
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src="~assets/img/default.jpg" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content flex">
                    <div class="content">
                      <p class="title is-5">個人ブログ用のCMSをNuxt.js×GAEで作った話</p>
                    </div>
                    <div class="bottom-align time">
                      <time datetime="2016-1-1">1 Jan 2016</time>
                    </div>
                  </div>
                </div>
              </article>
              <article class="column is-half">
                <div class="card card-list">
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src="~assets/img/default_1.jpg" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content flex">
                    <div class="content">
                      <p class="title is-5">sample</p>
                    </div>
                    <div class="bottom-align time">
                      <time datetime="2016-1-1">1 Jan 2016</time>
                    </div>
                  </div>
                  
                </div>
              </article>
              </div>
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

export default {
  //layout: 'blog',
  components: {
    HeroHead,
    HeroFoot,
    Sideber
  },
  asyncData (context) {
    return {　
      title: 'Nekoになりたい',
      copyrights: 'makasn',
      account_name: 'makasn'
    }
  }
}
</script>
