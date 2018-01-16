<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo',
    data () {
      return {
        msg: 'Welcome to the ToDo Page'
      }
    }
  }
</script>