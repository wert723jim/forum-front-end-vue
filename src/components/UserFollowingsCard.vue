<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followings.length}}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
        <router-link
          v-for="following in followings"
          :key="following.id"
          :to="{name: 'user', params: {id: following.id}}"
        >
            <img
              :src="following.image"
              width="60"
              height="60"
              class="avatar"
            >
        </router-link>
        <!-- <a href="/users/31">
            <img src="https://via.placeholder.com/60" width="60" height="60" class="avatar">
        </a>
        <a href="/users/41">
            <img src="https://via.placeholder.com/60" width="60" height="60" class="avatar">
        </a>
        <a href="/users/21">
            <img src="https://via.placeholder.com/60" width="60" height="60" class="avatar">
        </a>
        <a href="/users/51">
            <img src="https://via.placeholder.com/60" width="60" height="60" class="avatar">
        </a>
        <a href="/users/81">
            <img src="https://via.placeholder.com/60" width="60" height="60" class="avatar">
        </a>
        <a href="/users/71">
            <img src="https://via.placeholder.com/60" width="60" height="60" class="avatar">
        </a>
        <a href="/users/61">
            <img src="https://i.imgur.com/G5mxpaQ.jpeg" width="60" height="60" class="avatar">
        </a>
        <a href="/users/1">
            <img src="https://i.imgur.com/DXKdcH3.jpeg" width="60" height="60" class="avatar">
        </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followings: {
      type: Array,
      required: true
    }
  }
}
</script>