<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <!-- 將 restaurant.id 傳入 -->
    <CreateComment 
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
import restaurantsAPI from '../apis/restaurants'
import {Toast} from '../utils/helpers'
import {mapState} from 'vuex'

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  name: 'Restaurant',
  
  data () {
    return {
      // 預設值
      // 會直接將預設值傳入RestaurantDetail
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  beforeRouteUpdate(to, from, next) {
    const {id} = to.params
    this.fetchRestaurant(id)
    next()
  },
  created() {
    // 取得動態路由參數值
    const {id: restaurantId} = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async afterDeleteComment(commentId) {
      try {
        const {data} = await restaurantsAPI.deleteComments(commentId)

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        // 更新前端畫面
        this.restaurantComments = this.restaurantComments.filter((comment) => comment.id !== commentId)
      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '無法刪除留言，請稍後再試'
        })
      }
      
    },
    async afterCreateComment(payload) {
      try {
        payload = {
          ...payload,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name
          },
          createdAt: new Date()
        }
        const {data} = await restaurantsAPI.createComments({payload})

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        // this.restaurantComments.push(payload)
        this.fetchRestaurant(this.restaurant.id)

      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '無法建立留言，請稍後再試'
        })
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        const {data} = await restaurantsAPI.getRestaurant(restaurantId)
        // 解構賦值
        const {restaurant, isFavorited, isLiked} = data
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments
        } = restaurant
        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked
        }
        this.restaurantComments = Comments
      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>