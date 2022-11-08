<template>
  <div class="mb-3">
    <h1>餐廳後台</h1>
    <router-link
      to="/admin/restaurants"
    >
      Restaurants
    </router-link> &nbsp;|
    <a href="#">Categories</a> &nbsp;|
    <router-link
      :to="{name: 'admin-user' ,params: {id: 1}}"
    >
      Users
    </router-link>
  </div>
</template>