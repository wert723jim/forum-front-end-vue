<template>
  <div class="card">
    <div class="card-header">
      <strong>{{favoritedRestaurants.length}}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="restaurant in favoritedRestaurants"
        :key="restaurant.id"
        :to="{name: 'restaurant', params: {id: restaurant.id}}"
      >
        <img
         :src="restaurant.image" 
         width="60"
         height="60"
         class="avatar"
        >
      </router-link>
      <!-- <a href="/restaurants/141">
        <img src="https://i.imgur.com/BEwt1ho.jpeg" width="60" height="60" class="avatar">
      </a>
      <a href="/restaurants/201">
        <img src="https://i.imgur.com/QNLVBSJ.jpeg" width="60" height="60" class="avatar">
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true
    }
  }
}
</script>