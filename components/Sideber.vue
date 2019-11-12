<template>
  <div class="tile is-3">
    <div class="tile is-parent is-vertical" style="min-height:400px">
      <div class="profile" style="padding:18px 25px;border:#F0E5DE dotted;height:100%">
        <div class="tile is-child" style="padding-bottom:10px">
          <figure class="image is-square" style="border: #D9D4CF 0.5px solid;">
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
