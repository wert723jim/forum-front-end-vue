<template>
  <form
    v-show="!isLoading"
    @submit.stop.prevent="handleSubmit"
  >
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{category.name}}
        </option>
        <!-- <option value="2">
          日式料理
        </option>
        <option value="3">
          義式料理
        </option> -->
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      >
      <!-- FileList -->
      <!-- trigger change event -->
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
      :disabled="isProcessing"
    >
      {{isProcessing ? "處理中..." : "送出"}}
    </button>
  </form>
</template>

<script>
import adminAPI from '../apis/admin'
import {Toast} from '../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      // 正常為() => {}一般函式
      // 但因為object literal本身也有一個大括號
      // 因此要在外層加一個小括號
      default: () => ({
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: '',
      })
    },
    isProcessing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      restaurant: {
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      categories: [],
      // 讀取旗標，將Category資料讀取完畢後設為 false
      isLoading: true
    }
  },
  created() {
    this.fetchCategories()
    // this.restaurant = {
    //   ...this.restaurant,
    //   ...this.initialRestaurant
    // }
  },
  // 避免因時間差，而在表單渲染後才取得資料
  // 當有資料進來後，將資料重新填入
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  methods: {
    async fetchCategories() {
      try {
        const {data} = await adminAPI.categories.get()

        this.categories = data.categories
        // 讀取完後，將旗標設置為false
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'warning',
          title: '無法取得Category資料，請稍後再試'
        })
      }
    },
    handleFileChange(e) {
      const files = e.target.files
      if(files.length === 0) {
        this.restaurant.image = ''
      }else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    handleSubmit(e) {
      // 檢查欄位是否有空白漏填
      if (!this.restaurant.name) {
        Toast.fire({
          icon: 'warning',
          title: '請填寫餐廳名稱'
        })
        return
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: 'warning',
          title: '請選擇餐廳類別'
        })
        return
      }

      const form = e.target
      const formData = new FormData(form)
      // for(let [name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }
      this.$emit('after-submit', formData)
    }
  }
}
</script>