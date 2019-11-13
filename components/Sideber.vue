<template>
  <div class="tile is-3 sideber">
    <div class="tile is-parent is-vertical">
      <div class="profile">
        <div class="tile is-child">
          <figure class="image is-square picture">
            <img src="~/assets/img/default_icon.png">
          </figure>
        </div>
        <div class="tile is-child prof-info">
        <ul>
          <li class="account">
            <span class="icon">
              <i class="fa fa-user-o"></i>
            </span>
            {{ account_name }}
          </li>
          <li class="twitter">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
            twitter
          </li>
          <li class="github">
            <span class="icon">
              <i class="fa fa-github-alt"></i>
            </span>
            github
          </li>
          <li class="email">
            <span class="icon">
              <i class="fa fa-envelope-o"></i>
            </span>
            email
          </li>
        </ul>
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
