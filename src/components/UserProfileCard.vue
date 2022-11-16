<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
          <img
            :src="userProfile.image | emptyImage"
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
               v-if="userIsfollowed"
               @click.stop.prevent="unFollowed(userProfile.id)"
              >
                取消追蹤
              </button>
              <button
               type="submit" 
               class="btn btn-primary"
               v-else
               @click.stop.prevent="followed(userProfile.id)"
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
import {emptyImageFilter} from '../utils/mixins'
import usersAPI from '../apis/users'
import {Toast} from '../utils/helpers'

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
  mixins: [emptyImageFilter],
  // 追蹤後改變資料，當資料改變時，將新的值傳入
  watch: {
    isFollowed(newValue) {
      this.userIsfollowed = {
        ...this.userIsfollowed,
        ...newValue
      }
    }
  },
  data() {
    return {
      userIsfollowed: this.isFollowed
    }
  },
  methods: {
    async followed(userId) {
      try {
        const {data} = await usersAPI.follow(userId)

        console.log(data)

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.userIsfollowed = true
      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '無法追蹤，請稍後再試'
        })
      }
    },
    async unFollowed(userId) {
      try {
        const {data} = await usersAPI.unfollow(userId)
        console.log(data)
        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.userIsfollowed = false
      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '無法追蹤，請稍後再試'
        })
      }
    }
  }
}
</script>