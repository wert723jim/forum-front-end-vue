<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
           :to="{name: 'restaurant', params: {id: restaurant.id}}"
          >
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <router-link
              :to="{name: 'restaurant', params: {id: restaurant.id}}"
              class="btn btn-primary mr-2"
            >
              Show
            </router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 49,
            "name": "Morris Keeling IV",
            "tel": "1-801-886-7642 x0828",
            "address": "92999 Bailey Garden",
            "opening_hours": "08:00",
            "description": "Cum vel corrupti et sit in.\nVoluptas deserunt sapi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.06286469813546",
            "viewCounts": 0,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z",
            "CategoryId": 3,
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
                        "RestaurantId": 49,
                        "createdAt": "2022-09-30T03:56:34.000Z",
                        "updatedAt": "2022-09-30T03:56:34.000Z"
                    }
                }
            ],
            "isFavorited": true,
            "FavoriteCount": 1
        },
        {
            "id": 48,
            "name": "Justus Rogahn",
            "tel": "1-716-480-4341 x05162",
            "address": "3499 Rebecca Fords",
            "opening_hours": "08:00",
            "description": "non hic repudiandae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.039416423145482",
            "viewCounts": 0,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z",
            "CategoryId": 5,
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
                        "RestaurantId": 48,
                        "createdAt": "2022-09-30T03:56:43.000Z",
                        "updatedAt": "2022-09-30T03:56:43.000Z"
                    }
                }
            ],
            "isFavorited": true,
            "FavoriteCount": 1
        },
        {
            "id": 1,
            "name": "Alvis Morar12345453",
            "tel": "187.039.2451",
            "address": "935 Bartoletti Island",
            "opening_hours": "08:00",
            "description": "enim",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.649141450940473",
            "viewCounts": 23,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-11-03T14:24:10.000Z",
            "CategoryId": 4,
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
            "isFavorited": true,
            "FavoriteCount": 1
        },
        {
            "id": 60,
            "name": "123",
            "tel": "123",
            "address": "123",
            "opening_hours": "20:59",
            "description": "123",
            "image": "https://i.imgur.com/b2mFJ8d.jpeg",
            "viewCounts": 0,
            "createdAt": "2022-09-30T13:00:00.000Z",
            "updatedAt": "2022-09-30T13:00:00.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 59,
            "name": "123",
            "tel": "123",
            "address": "123",
            "opening_hours": "20:59",
            "description": "123",
            "image": "https://i.imgur.com/ZPkIMlg.png",
            "viewCounts": 0,
            "createdAt": "2022-09-30T12:58:18.000Z",
            "updatedAt": "2022-09-30T12:58:18.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 58,
            "name": "name",
            "tel": "123",
            "address": "123",
            "opening_hours": "20:46",
            "description": "1234",
            "image": "https://i.imgur.com/m4BltCO.jpeg",
            "viewCounts": 0,
            "createdAt": "2022-09-30T12:44:30.000Z",
            "updatedAt": "2022-09-30T12:44:30.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 57,
            "name": "123",
            "tel": "123",
            "address": "123",
            "opening_hours": "20:43",
            "description": "1234",
            "image": "https://i.imgur.com/i503sbO.png",
            "viewCounts": 0,
            "createdAt": "2022-09-30T12:43:43.000Z",
            "updatedAt": "2022-09-30T12:43:43.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 56,
            "name": "123",
            "tel": "1234",
            "address": "1234",
            "opening_hours": "20:42",
            "description": "12345",
            "image": "https://i.imgur.com/GdrWnuk.jpeg",
            "viewCounts": 0,
            "createdAt": "2022-09-30T12:42:27.000Z",
            "updatedAt": "2022-09-30T12:42:27.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 55,
            "name": "123",
            "tel": "123",
            "address": "456",
            "opening_hours": "20:39",
            "description": "123",
            "image": "https://i.imgur.com/JF4oRjf.jpeg",
            "viewCounts": 0,
            "createdAt": "2022-09-30T12:40:48.000Z",
            "updatedAt": "2022-09-30T12:40:48.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 54,
            "name": "123",
            "tel": "123",
            "address": "456",
            "opening_hours": "20:39",
            "description": "123",
            "image": "https://i.imgur.com/BAzZ9oQ.jpeg",
            "viewCounts": 0,
            "createdAt": "2022-09-30T12:39:33.000Z",
            "updatedAt": "2022-09-30T12:39:33.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if(restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: true,
          }
        }
        return restaurant
      })
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if(restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: false,
          }
        }
        return restaurant
      })
    }
  }
}
</script>