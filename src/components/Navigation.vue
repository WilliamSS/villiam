<template>
    <nav>
      <div class="container">
        <ul class="nav__left">

          <!-- Navigation Links -->
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin/todo">To Do </router-link></li>
          <li><router-link to="/user">User</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/super">Super</router-link></li>

        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>