<template>
  <div class="navbar-sandbox">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#" @click.prevent="navigate('home')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="navigate('routeone')">RouteOne</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="navigate('routetwo')">RouteTwo</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //currentRoute: 'home',
        currentPath: 'home'
      }
    },
    methods: {
      // NOTE: Using route names work regardless of having wildcard path
      // navigate(route) {
      //   if (route !== this.currentRoute) {
      //     this.currentRoute = route;
      //     this.$router.push({ name: route });
      //   }
      // },
      navigate(path) {
        if (path !== this.currentPath) {
          this.currentPath = path;
          this.$router.push({ path: path });
        }
      }
    }
  }
</script>