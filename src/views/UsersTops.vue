<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div
        class="col-3"
        v-for="user in users"
        :key="user.id"
      >
        <router-link
         :to="{name: 'user', params: {id: user.id}}"
        >
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="unFollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="follow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$JzCoR9e6YxXVLJBcFq4h8O647zkUGnFedq2NNCaxt8zpbazKXexsq",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z",
            "Followers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$JzCoR9e6YxXVLJBcFq4h8O647zkUGnFedq2NNCaxt8zpbazKXexsq",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-09-14T15:10:59.000Z",
                    "updatedAt": "2022-09-14T15:10:59.000Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 1,
                        "createdAt": "2022-09-27T17:20:13.000Z",
                        "updatedAt": "2022-09-27T17:20:13.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": true
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$Yhw4LBOiXLc0RB1FsMpPn.q25kow7iGOIS8bm6Z9ezC13m1lmFmNe",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z",
            "Followers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$JzCoR9e6YxXVLJBcFq4h8O647zkUGnFedq2NNCaxt8zpbazKXexsq",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-09-14T15:10:59.000Z",
                    "updatedAt": "2022-09-14T15:10:59.000Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 2,
                        "createdAt": "2022-10-02T12:57:46.000Z",
                        "updatedAt": "2022-10-02T12:57:46.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": true
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$osGy.XI0zm4ENnOrVMJkT.1Jp8lEvuTymeofuQH49uhkS/Ja275hC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z",
            "Followers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$JzCoR9e6YxXVLJBcFq4h8O647zkUGnFedq2NNCaxt8zpbazKXexsq",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-09-14T15:10:59.000Z",
                    "updatedAt": "2022-09-14T15:10:59.000Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 3,
                        "createdAt": "2022-09-27T17:36:33.000Z",
                        "updatedAt": "2022-09-27T17:36:33.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": true
        }
    ]
}

export default {
  components: {
    NavTabs
  },
  data () {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
    },
    follow(userId) {
      this.users = this.users.map((user) => {
        if(user.id === userId) {
          return {
            ...user,
            isFollowed: true,
          }
        }
        return user
      })
    },
    unFollow(userId) {  
      this.users = this.users.map((user) => {
        if(user.id === userId) {
          return {
            ...user,
            isFollowed: false,
          }
        }
        return user
      })
    }
  },
}
</script>