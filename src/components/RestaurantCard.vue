<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
           :to="{name: 'restaurant', params: {id: restaurant.id}}"
          >
            {{restaurant.name}}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{restaurant.Category.name}}</span>
        <p class="card-text text-truncate">
          {{restaurant.description}}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          :disabled="isProcessing"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
          :disabled="isProcessing"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          @click.stop.prevent="deleteLike(restaurant.id)"
          :disabled="isProcessing"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          @click.stop.prevent="addLike(restaurant.id)"
          :disabled="isProcessing"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import {Toast} from '../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      // 為了能對傳進來的資料進行其他處理
      restaurant: this.initialRestaurant,
      isProcessing: false
    }
  },
  methods: {
    // toggleFavorite() {
    //   this.restaurant = {
    //     ...this.restaurant,
    //     isFavorited: !this.restaurant.isFavorited
    //   }
    // },
    async addFavorite(restaurantId) {
      try {
        this.isProcessing = true
        const {data} = await usersAPI.addFavorite({restaurantId})
        console.log(data)
        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'warning',
          title: '無法新增最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessing = true
        const {data} = await usersAPI.deleteFavorite({restaurantId})

        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'warning',
          title: '無法刪除最愛，請稍後再試'
        })
      }
    },
    // toggleLike() {
    //   this.restaurant = {
    //     ...this.restaurant,
    //     isLiked: !this.restaurant.isLiked
    //   }
    // }
    async addLike(restaurantId) {
      try {
        this.isProcessing = true
        const {data} = await usersAPI.addLike(restaurantId)

        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'warning',
          title: '無法Like，請稍後再試'
        })
      }
    },
    async deleteLike(restaurantId) {
      try {
        this.isProcessing = true
        const {data} = await usersAPI.deleteLike(restaurantId)

        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'warning',
          title: '無法取消Like，請稍後再試'
        })
      }
    } 
  }
}
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>