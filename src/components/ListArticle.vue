<template>
  <article class="column is-half">
    <div class="card card-list">
      <div class="card-image">
        <figure class="image is-2by1">
          <img :src="require('~/assets/img/' + article.image)" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content flex">
        <div class="content">
          <a :href="'/articles/' + article.id"> 
            <p class="title is-5">{{ article.title }}</p>
          </a>
        </div>
        <div class="bottom-align time">
          <time datetime="2016-1-1">{{ article.date }}</time>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['article']
}
</script>
