<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handelSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
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
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization'
import {Toast} from '../utils/helpers'

export default {
  data () {
    return {
      email: '',
      password: '',
      // 處理旗標
      isProcessing: false
    }
  },
  methods: {
    async handelSubmit () {
      // const data = JSON.stringify({
      //   email: this.email,
      //   password: this.password
      // })
      // console.log(data)

      // 判斷是否有填入資料
      if(!this.email || !this.password) {
        Toast.fire({
          icon: 'warning',
          title: '請填入 email 和 password'
        })
        return
      }

      this.isProcessing = true

      authorizationAPI.signIn({
        email:this.email,
        password:this.password
      }).then(response => {

        const {data} = response

        localStorage.setItem('token', data.token)
        // 轉址至restaurants頁面
        this.$router.push('/restaurants')
      }).catch(error => {
        // 清空密碼欄位
        this.password = ''

        this.isProcessing = false
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
        console.log('error: ', error)
      })
    }
  }
}
</script>