<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">

          <!-- Navigation Links -->
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/splash">Splash</router-link></li>
          <li><router-link to="/todo">To Do </router-link></li>
          <li><router-link to="/user">User</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/super">Super</router-link></li>

        </ul>
      </div>
    </nav>

    <router-view></router-view>  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

