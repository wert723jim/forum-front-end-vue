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
    afterDeleteComment(commentId) {
      // 更新前端畫面
      this.restaurantComments = this.restaurantComments.filter((comment) => comment.id !== commentId)
    },
    afterCreateComment(payload) {
      const {commentId, restaurantId, text} = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        //抓當下時間
        createdAt: new Date()
      })
    },
    async fetchRestaurant(restaurantId) {
      try {
        const {data} = await restaurantsAPI.getRestaurant(restaurantId)
        
        console.log(data)

        // this.restaurant = {
        //   id: data.restaurant.id,
        //   name: data.restaurant.name,
        //   categoryName: data.restaurant.Category.name,
        //   image: dummyData.restaurant.image,
        //   openingHours: dummyData.restaurant.opening_hours,
        //   tel: dummyData.restaurant.tel,
        //   address: dummyData.restaurant.address,
        //   description: dummyData.restaurant.description,
        //   isFavorited: dummyData.isFavorited,
        //   isLiked: dummyData.isLiked,
        // }

        // this.restaurantComments = dummyData.restaurant.Comments

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

        console.log(restaurantId)
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