<template>
  <div class="router-params-change-navbar">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'routerParamsChange', params: { id: 1} }">Pass Params 1</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'routerParamsChange', params: { id: 2} }">Pass Params 2</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>