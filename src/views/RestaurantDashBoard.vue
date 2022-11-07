<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
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
        "updatedAt": "2022-11-03T14:24:10.000Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z"
        },
        "Comments": [
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
            }
        ]
    }
}

export default {
  data() {
    return {
      restaurant: {}
    }
  },
  created() {
    this.fetchRestaurant()
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = dummyData.restaurant
    }
  }
}
</script>