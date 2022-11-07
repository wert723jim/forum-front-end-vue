<template>
  <div class="card">
    <div class="card-header">
      <strong>{{comments.length}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
        <router-link
          v-for="comment in comments"
          :key="comment.id"
         :to="{name: 'restaurant', params: {id: comment.RestaurantId}}"
        >
          <img
            :src="comment.Restaurant.image"
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
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>