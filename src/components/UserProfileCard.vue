<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
          <img
            :src="userProfile.image"
            width="300px"
            height="300px"
          >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{userProfile.name}}
          </h5>
          <p class="card-text">
            {{userProfile.email}}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{commentsCount}}</strong> 已評論餐廳</li>
            <li><strong>{{favoritedRestaurantsCount}}</strong> 收藏的餐廳</li>
            <li><strong>{{followingsCount}}</strong> followings (追蹤者)</li>
            <li><strong>{{followersCount}}</strong> followers (追隨者)</li>
          </ul>
          <p>
            <router-link
              v-if="currentUser.id === userProfile.id"
              to="#"
            >
              <button type="submit" class="btn btn-primary">
                edit
              </button>
            </router-link>
            <template v-else>
              <button
               type="submit" 
               class="btn btn-danger"
               v-if="followed"
               @click.stop.prevent="toggleFollowed"
              >
                取消追蹤
              </button>
              <button
               type="submit" 
               class="btn btn-primary"
               v-else
               @click.stop.prevent="toggleFollowed"
              >
                追蹤
              </button>
            </template>  
          </p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    userProfile: {
      type: Object,
      required: true
    },
    commentsCount: {
      type: Number,
      required: true
    },
    favoritedRestaurantsCount: {
      type: Number,
      required: true
    },
    followersCount: {
      type: Number,
      required: true
    },
    followingsCount: {
      type: Number,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    },
    isFollowed: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      followed: this.isFollowed
    }
  },
  methods: {
    toggleFollowed() {
      this.followed = !this.followed
    }
  }
}
</script>