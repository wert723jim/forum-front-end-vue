<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from '../apis/admin'
import {Toast} from '../utils/helpers'

export default {
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false
    }
  },
  created() {
    const {id} = this.$route.params
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    const {id} = to.params
    this.fetchRestaurant(id)
    next()
  },
  methods: {
    async handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }
      try {
        this.isProcessing = true
        const {data} = await adminAPI.restaurants.update({restaurantId: this.restaurant.id, formData})
        console.log(data)

        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        // 轉址
        this.$router.push({name: 'admin-restaurants'})
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'warning',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        console.log('fetchRestaurant id:', restaurantId)
        const {data} = await adminAPI.restaurants.getDetail(restaurantId)

        const {restaurant} = data
        this.restaurant = {
          ...this.restaurant,
          id: restaurant.id,
          name: restaurant.name,
          categoryId: restaurant.CategoryId,
          tel: restaurant.tel,
          address: restaurant.address,
          description: restaurant.description,
          image: restaurant.image,
          openingHours: restaurant.opening_hours
        }

      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '無法取得餐廳詳細資料，請稍後再試'
        })
      }
    }
  }
}
</script>