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
        <div class="search field" style="margin-top: 1rem;">
          <label class="label">Search</label>
          <div class="control has-icons-left">
            <div class="select is-primary is-light" style="width:100%;">
              <select style="width:100%;">
                <option selected>Category</option>
                <option>Backend</option>
                <option>Frontend</option>
              </select>
            </div>
            <div class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </div>
          </div>
          <div class="search field" style="margin-top: 0.5rem;clear:both;">
            <p class="control has-icons-left">
              <input class="input is-primary is-light" type="text" placeholder="free text">
              <span class="icon is-small is-left">
                <i class="fa fa-pencil"></i>
              </span>
            </p>
          </div>
          <div class="buttons is-right" style="margin-top: 0.5rem">
            <input class="button is-primary is-light" type="submit" value="Submit">
          </div>
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
