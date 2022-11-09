<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />


    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin | roleFilter}}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-if="user.isAdmin"
              @click.stop.prevent="toggleRole(user.id)"
            >
              set as user
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-else
              @click.stop.prevent="toggleRole(user.id)"
            >
              set as admin
            </button>
          </td>
        </tr>
        <!-- <tr>
          <th scope="row">
            2
          </th>
          <td>user1@example.com</td>
          <td>user</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
            >
              set as admin
            </button>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'

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
            "updatedAt": "2022-09-14T15:10:59.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$Yhw4LBOiXLc0RB1FsMpPn.q25kow7iGOIS8bm6Z9ezC13m1lmFmNe",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$osGy.XI0zm4ENnOrVMJkT.1Jp8lEvuTymeofuQH49uhkS/Ja275hC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z"
        }
    ]
}

export default {
  components: {
    AdminNav
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  filters: {
    roleFilter(isAdmin) {
      if(isAdmin) {
        return 'admin'
      }
      return 'user'
    }
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
    },
    toggleRole(userId) {
      this.users = this.users.map(user => {
        if(user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          }
        }
        return user
      })
    }
  }
}
</script>