<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="currentUser.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="currentUser.image"
          alt=""
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >
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
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  data () {
    return {
      currentUser: {
        name: '',
        image: ''
      }
    }
  },
  created() {
    this.fetchCurrentUser()
  },
  methods: {
    fetchCurrentUser() {
      const {currentUser} = dummyUser
      this.currentUser.name = currentUser.name
      this.currentUser.image = currentUser.image
    },
    handleFileChange(e) {
      const files = e.target.files
      if(files.length > 0) {
        const imageURL = window.URL.createObjectURL(files[0])
        this.currentUser.image = imageURL
      }
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      for(let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>