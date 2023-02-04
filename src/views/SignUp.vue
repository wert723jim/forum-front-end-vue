<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import userAPI from '../apis/users'
import {Toast} from '../utils/helpers'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // 檢查有無未填欄位
        if(!(this.name&&this.email&&this.password&&this.passwordCheck)) {
          Toast.fire({
            icon: 'warning',
            title: '請勿有空白欄位'
          })
          return
        }
        // 檢查密碼是否正確
        if(this.password !== this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '密碼確認錯誤'
          })
          return
        }
        
        const {data} = await userAPI.create({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        })
        
        console.log(data)

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        

        this.$router.push({name: 'restaurants'})
      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '無法建立會員資料，請稍後再試'
        })
      }
      
    }
  }
}
</script>