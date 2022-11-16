<template>
  <div class="container py-5 album">
      <!-- User Profile Card -->
      <UserProfileCard 
        :user-profile="userProfile"
        :comments-count="comments.length"
        :favorited-restaurants-count="favoritedRestaurants.length"
        :followers-count="followers.length"
        :followings-count="followings.length"
        :current-user="currentUser"
        :is-followed="isFollowed"
      />
      <div class="row">
        <div class="col-md-4">
          <!-- User Followings Card -->
          <UserFollowingsCard 
            :followings="followings"
          />
          <br>
          <!-- User Followers Card -->
          <UserFollowersCard
            :followers="followers"
          />
        </div>
        <div class="col-md-8">
          <!-- User Comments Card -->
          <UserCommentsCard 
            :comments="comments"
          />
          <br>
          <!-- User Favorited Restaurants Card -->
          <UserFavoritedRestaurantCard
            :favorited-restaurants="favoritedRestaurants"
          />
        </div>
      </div>
  </div>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue'
import UserFollowingsCard from '../components/UserFollowingsCard.vue'
import UserFollowersCard from '../components/UserFollowersCard.vue'
import UserCommentsCard from '../components/UserCommentsCard.vue'
import UserFavoritedRestaurantCard from '../components/UserFavoritedRestaurantCard.vue'
import usersAPI from '../apis/users'
import {Toast} from '../utils/helpers'
import {mapState} from 'vuex'

// const dummyUser = {
//   currentUser: {
//     id: 2,
//     name: '管理者',
//     email: 'root@example.com',
//     image: 'https://i.pravatar.cc/300',
//     isAdmin: true
//   },
//   isAuthenticated: true
// }

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantCard
  },
  data () {
    return {
      userProfile: {
        id: -1,
        name: '',
        email: '',
        image: '',
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false
    }
  },
  beforeRouteUpdate(to, from, next) {
    const {id} = to.params
    this.fetchProfile(id)
    next()
  },
  created() {
    const {id} = this.$route.params
    this.fetchProfile(id)
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchProfile(userId) {
      try {
        const {data} = await usersAPI.get(userId)

        const {
          profile,
          isFollowed
        } = data

        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings
        } = profile

        this.userProfile = {
          id,
          name,
          email,
          image
        }

        this.comments = Comments
        this.favoritedRestaurants = FavoritedRestaurants
        this.followers = Followers
        this.followings = Followings
        this.isFollowed = isFollowed


      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '無法取得會員資料，請稍後再試'
        })
      }
    }
  }
}
</script>