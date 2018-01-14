<template>
  <div>
    <img src="@/assets/william.jpg">

    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'splash',
    data () {
      return {
        msg: 'Derpy Derpy Derp Derp'
      }
    }
  }
</script>