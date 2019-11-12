<template>
  <div class="tile is-3">
    <div class="tile is-parent is-vertical">
      <div class="profile">
        <div class="tile is-child">
          <figure class="image is-square picture">
            <img src="~assets/img/default_icon.png">
          </figure>
        </div>
        <div class="tile is-child">
          <p class="account">
            <span class="icon">
              <i class="fa fa-user-o"></i>
            </span>
            {{ account_name }}
          </p>
        </div>
        <div class="tile is-child">
          <p class="twitter">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
            twitter
          </p>
        </div>
        <div class="tile is-child">
          <p class="github">
            <span class="icon">
              <i class="fa fa-github-alt"></i>
            </span>
            github
          </p>
        </div>
        <div class="tile is-child">
          <p class="email">
            <span class="icon">
              <i class="fa fa-envelope-o"></i>
            </span>
            email
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['account_name']
}
</script>
