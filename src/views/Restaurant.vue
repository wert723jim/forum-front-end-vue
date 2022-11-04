<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'

const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Alvis Morar12345453",
        "tel": "187.039.2451",
        "address": "935 Bartoletti Island",
        "opening_hours": "08:00",
        "description": "enim",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.649141450940473",
        "viewCounts": 23,
        "createdAt": "2022-09-14T15:10:59.000Z",
        "updatedAt": "2022-11-03T14:24:10.240Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z"
        },
        "FavoritedUsers": [
            {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JzCoR9e6YxXVLJBcFq4h8O647zkUGnFedq2NNCaxt8zpbazKXexsq",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "Favorite": {
                    "UserId": 1,
                    "RestaurantId": 1,
                    "createdAt": "2022-09-27T07:47:34.000Z",
                    "updatedAt": "2022-09-27T07:47:34.000Z"
                }
            }
        ],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 101,
                "text": "Est et repellat ea quibusdam rerum ut dolorum.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$Yhw4LBOiXLc0RB1FsMpPn.q25kow7iGOIS8bm6Z9ezC13m1lmFmNe",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-14T15:10:59.000Z",
                    "updatedAt": "2022-09-14T15:10:59.000Z"
                }
            },
            {
                "id": 51,
                "text": "Eum tempora alias minus vel nostrum dicta quasi.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$JzCoR9e6YxXVLJBcFq4h8O647zkUGnFedq2NNCaxt8zpbazKXexsq",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-09-14T15:10:59.000Z",
                    "updatedAt": "2022-09-14T15:10:59.000Z"
                }
            },
            {
                "id": 1,
                "text": "Ea quia eos culpa sit ab velit impedit libero.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$JzCoR9e6YxXVLJBcFq4h8O647zkUGnFedq2NNCaxt8zpbazKXexsq",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-09-14T15:10:59.000Z",
                    "updatedAt": "2022-09-14T15:10:59.000Z"
                }
            }
        ]
    },
    "isFavorited": true,
    "isLiked": false
}

export default {
  components: {
    RestaurantDetail
  },
  name: 'Restaurant',
  data () {
    return {
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
      restaurantComments: []
    }
  },
  created() {
    // 取得動態路由參數值
    const {id: restaurantId} = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      // 解構賦值
      // const {restaurant, isFavorited, isLiked} = dummyData
      // const {
      //   id,
      //   name,
      //   Category,
      //   image,
      //   opening_hours: openingHours,
      //   tel,
      //   address,
      //   description,
      //   Comments
      // } = restaurant
      // this.restaurant = {
      //   id,
      //   name,
      //   categoryName: Category ? Category.name : '未分類',
      //   image,
      //   openingHours,
      //   tel,
      //   address,
      //   description,
      //   isFavorited,
      //   isLiked
      // }
      // this.restaurantComments = Comments
      console.log(restaurantId)
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }

      this.restaurantComments = dummyData.restaurant.Comments
    }
  }
}
</script>