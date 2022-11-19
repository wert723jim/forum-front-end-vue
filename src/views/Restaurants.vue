<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <!-- NavPills -->
    <RestaurantsNavPills :categories="categories"/>
    <h1 class="mt-5">
      首頁-餐廳列表
    </h1>
    <div class="row">
      <!-- RestaurantCard -->
      <RestaurantCard 
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
    <!-- RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
    <div
    v-if="restaurants.length < 1"
    >
      此類別無資料
    </div> 
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'
import restaurantsAPI from '../apis/restaurants'
import {Toast} from '../utils/helpers'

// const dummyData = {
//     "restaurants": [
//         {
//             "id": 1,
//             "name": "Alvis Morar12345453",
//             "tel": "187.039.2451",
//             "address": "935 Bartoletti Island",
//             "opening_hours": "08:00",
//             "description": "enim",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.649141450940473",
//             "viewCounts": 22,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-10-03T08:44:28.000Z",
//             "CategoryId": 4,
//             "Category": {
//                 "id": 4,
//                 "name": "墨西哥料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": true,
//             "isLiked": false
//         },
//         {
//             "id": 6,
//             "name": "Elliott Littel",
//             "tel": "1-952-070-6665",
//             "address": "059 Alanis Landing",
//             "opening_hours": "08:00",
//             "description": "hic",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.59934346306726",
//             "viewCounts": 0,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z",
//             "CategoryId": 4,
//             "Category": {
//                 "id": 4,
//                 "name": "墨西哥料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": false,
//             "isLiked": true
//         },
//         {
//             "id": 7,
//             "name": "Abbie Batz",
//             "tel": "1-559-425-4145",
//             "address": "538 Greenfelder Lakes",
//             "opening_hours": "08:00",
//             "description": "Excepturi exercitationem neque dolorem eum maxime.",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.6512897278485",
//             "viewCounts": 0,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z",
//             "CategoryId": 4,
//             "Category": {
//                 "id": 4,
//                 "name": "墨西哥料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": false,
//             "isLiked": false
//         },
//         {
//             "id": 8,
//             "name": "Ellen Labadie",
//             "tel": "(154) 008-2855 x4559",
//             "address": "95134 Kobe Gardens",
//             "opening_hours": "08:00",
//             "description": "Veritatis quis quia atque laudantium nemo blanditi",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.38939901476202",
//             "viewCounts": 0,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z",
//             "CategoryId": 1,
//             "Category": {
//                 "id": 1,
//                 "name": "中式料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": false,
//             "isLiked": false
//         },
//         {
//             "id": 9,
//             "name": "Ward Doyle",
//             "tel": "(212) 786-6698 x45524",
//             "address": "685 Cole Ports",
//             "opening_hours": "08:00",
//             "description": "saepe",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.81590994518545",
//             "viewCounts": 0,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z",
//             "CategoryId": 3,
//             "Category": {
//                 "id": 3,
//                 "name": "義大利料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": false,
//             "isLiked": false
//         },
//         {
//             "id": 10,
//             "name": "Hassie Treutel",
//             "tel": "(976) 930-5498",
//             "address": "358 Fabian Walks",
//             "opening_hours": "08:00",
//             "description": "nulla et nam",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.732577473701454",
//             "viewCounts": 15,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-10-03T07:34:13.000Z",
//             "CategoryId": 2,
//             "Category": {
//                 "id": 2,
//                 "name": "日本料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": false,
//             "isLiked": false
//         },
//         {
//             "id": 11,
//             "name": "Marilou Bernhard",
//             "tel": "1-932-580-8217",
//             "address": "42491 Lowe Extension",
//             "opening_hours": "08:00",
//             "description": "ex voluptas enim",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.664351823843194",
//             "viewCounts": 0,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z",
//             "CategoryId": 3,
//             "Category": {
//                 "id": 3,
//                 "name": "義大利料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": false,
//             "isLiked": false
//         },
//         {
//             "id": 12,
//             "name": "Rhett Effertz",
//             "tel": "595.203.7521",
//             "address": "03426 Hansen Flats",
//             "opening_hours": "08:00",
//             "description": "Est itaque dolorem. Corporis vitae facere exercita",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.95197189787406",
//             "viewCounts": 0,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z",
//             "CategoryId": 3,
//             "Category": {
//                 "id": 3,
//                 "name": "義大利料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": false,
//             "isLiked": false
//         },
//         {
//             "id": 13,
//             "name": "Ashleigh Kemmer",
//             "tel": "1-108-005-8109 x910",
//             "address": "815 Daniel Pine",
//             "opening_hours": "08:00",
//             "description": "voluptates",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.032973297129125",
//             "viewCounts": 0,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z",
//             "CategoryId": 3,
//             "Category": {
//                 "id": 3,
//                 "name": "義大利料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": false,
//             "isLiked": false
//         },
//         {
//             "id": 14,
//             "name": "Miss Shawn Reichert",
//             "tel": "1-366-798-6245 x5425",
//             "address": "797 Pacocha Rest",
//             "opening_hours": "08:00",
//             "description": "Eum dolorem non tempora qui. Voluptate est ut exce",
//             "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.8117674092231",
//             "viewCounts": 0,
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z",
//             "CategoryId": 5,
//             "Category": {
//                 "id": 5,
//                 "name": "素食料理",
//                 "createdAt": "2022-09-14T15:10:59.000Z",
//                 "updatedAt": "2022-09-14T15:10:59.000Z"
//             },
//             "isFavorited": false,
//             "isLiked": false
//         }
//     ],
//     "categories": [
//         {
//             "id": 1,
//             "name": "中式料理",
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z"
//         },
//         {
//             "id": 2,
//             "name": "日本料理",
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z"
//         },
//         {
//             "id": 3,
//             "name": "義大利料理",
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z"
//         },
//         {
//             "id": 4,
//             "name": "墨西哥料理",
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z"
//         },
//         {
//             "id": 5,
//             "name": "素食料理",
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z"
//         },
//         {
//             "id": 6,
//             "name": "美式料理",
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z"
//         },
//         {
//             "id": 7,
//             "name": "複合式料理",
//             "createdAt": "2022-09-14T15:10:59.000Z",
//             "updatedAt": "2022-09-14T15:10:59.000Z"
//         }
//     ],
//     "categoryId": "",
//     "page": 1,
//     "totalPage": [
//         1,
//         2,
//         3,
//         4,
//         5,
//         6
//     ],
//     "prev": 1,
//     "next": 2
// }

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created () {
    const {page = '', categoryId  = ''} = this.$route.query
    this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId
    })
    // this.fetchRestaurants({
    //   queryPage: 1, 
    //   queryCategoryId: ''
    // })
  },
  // 因 SPA 的網址是由 javascript 所產生
  // 並不會向對應的 URL 發出 request
  // 使用 beforeRouteUpdate 方法取得使用者路由變化
  // to 使用者要前往的路由
  // from 使用者來自哪個路由
  beforeRouteUpdate(to, from, next) {
    const {page = '', categoryId = ''} = to.query
    this.fetchRestaurants({queryPage: page, queryCategoryId: categoryId})
    // 繼續往下
    next()
  },
  methods: {
    async fetchRestaurants({queryPage, queryCategoryId}) {
        try {
          const response = await restaurantsAPI.getRestaurants({
            page: queryPage,
            categoryId: queryCategoryId
          })

          const {
            categories,
            categoryId,
            next,
            page,
            prev,
            restaurants,
            totalPage
          } = response.data

          this.restaurants = restaurants
          this.categories = categories
          this.categoryId = categoryId
          this.currentPage = page
          this.totalPage = totalPage
          this.previousPage = prev
          this.nextPage = next

          
        }catch(error) {
          Toast.fire({
            icon: 'error',
            title: '無法取得餐廳資料，請稍後再試'
          })
        }
      // const {
      //   restaurants,
      //   categories,
      //   categoryId,
      //   page,
      //   totalPage,
      //   prev,
      //   next
      // } = dummyData
      // this.restaurants = restaurants
      // this.categories = categories
      // this.categoryId = categoryId
      // this.currentPage = page
      // this.totalPage = totalPage
      // this.previousPage = prev
      // this.nextPage = next
    }
  }
}
</script>