<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 60,
            "name": "123",
            "tel": "123",
            "address": "123",
            "opening_hours": "20:59",
            "description": "123",
            "image": "https://i.imgur.com/b2mFJ8d.jpeg",
            "viewCounts": 0,
            "createdAt": "2022-10-30T13:00:00.000Z",
            "updatedAt": "2022-09-30T13:00:00.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-10-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
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
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
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
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
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
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
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
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
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
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
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
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
        },
        {
            "id": 53,
            "name": "name",
            "tel": "123",
            "address": "123",
            "opening_hours": "20:30",
            "description": "123",
            "image": "https://i.imgur.com/51w3qy5.jpeg",
            "viewCounts": 0,
            "createdAt": "2022-09-30T12:30:45.000Z",
            "updatedAt": "2022-09-30T12:30:45.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
        },
        {
            "id": 52,
            "name": "name",
            "tel": "123",
            "address": "123",
            "opening_hours": "20:29",
            "description": "123",
            "image": "https://i.imgur.com/fSYpGJU.jpeg",
            "viewCounts": 0,
            "createdAt": "2022-09-30T12:29:56.000Z",
            "updatedAt": "2022-09-30T12:29:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
        },
        {
            "id": 51,
            "name": "name",
            "tel": "123",
            "address": "123",
            "opening_hours": "20:29",
            "description": "123",
            "image": "https://i.imgur.com/5exDi2p.jpeg",
            "viewCounts": 0,
            "createdAt": "2022-09-30T12:29:50.000Z",
            "updatedAt": "2022-09-30T12:29:50.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            }
        }
    ],
    "comments": [
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
            },
            "Restaurant": {
                "id": 1,
                "name": "Alvis Morar12345453",
                "tel": "187.039.2451",
                "address": "935 Bartoletti Island",
                "opening_hours": "08:00",
                "description": "enim",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.649141450940473",
                "viewCounts": 22,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-10-03T08:44:28.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 6,
            "text": "Molestiae hic in laborum.",
            "UserId": 3,
            "RestaurantId": 6,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$osGy.XI0zm4ENnOrVMJkT.1Jp8lEvuTymeofuQH49uhkS/Ja275hC",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            },
            "Restaurant": {
                "id": 6,
                "name": "Elliott Littel",
                "tel": "1-952-070-6665",
                "address": "059 Alanis Landing",
                "opening_hours": "08:00",
                "description": "hic",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.59934346306726",
                "viewCounts": 0,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 7,
            "text": "Magni omnis quaerat omnis optio suscipit culpa consequatur.",
            "UserId": 2,
            "RestaurantId": 7,
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
            },
            "Restaurant": {
                "id": 7,
                "name": "Abbie Batz",
                "tel": "1-559-425-4145",
                "address": "538 Greenfelder Lakes",
                "opening_hours": "08:00",
                "description": "Excepturi exercitationem neque dolorem eum maxime.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.6512897278485",
                "viewCounts": 0,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 8,
            "text": "Exercitationem qui est illum vero perspiciatis cumque dolore dolorem.",
            "UserId": 2,
            "RestaurantId": 8,
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
            },
            "Restaurant": {
                "id": 8,
                "name": "Ellen Labadie",
                "tel": "(154) 008-2855 x4559",
                "address": "95134 Kobe Gardens",
                "opening_hours": "08:00",
                "description": "Veritatis quis quia atque laudantium nemo blanditiis ratione. Et dolor esse. Earum in velit aut sunt rerum saepe saepe perferendis.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.38939901476202",
                "viewCounts": 0,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 9,
            "text": "Suscipit corrupti laudantium est laborum.",
            "UserId": 2,
            "RestaurantId": 9,
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
            },
            "Restaurant": {
                "id": 9,
                "name": "Ward Doyle",
                "tel": "(212) 786-6698 x45524",
                "address": "685 Cole Ports",
                "opening_hours": "08:00",
                "description": "saepe",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.81590994518545",
                "viewCounts": 0,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 10,
            "text": "Quia error quisquam.",
            "UserId": 3,
            "RestaurantId": 10,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$osGy.XI0zm4ENnOrVMJkT.1Jp8lEvuTymeofuQH49uhkS/Ja275hC",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            },
            "Restaurant": {
                "id": 10,
                "name": "Hassie Treutel",
                "tel": "(976) 930-5498",
                "address": "358 Fabian Walks",
                "opening_hours": "08:00",
                "description": "nulla et nam",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.732577473701454",
                "viewCounts": 15,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-10-03T07:34:13.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 11,
            "text": "Reiciendis deserunt delectus.",
            "UserId": 2,
            "RestaurantId": 11,
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
            },
            "Restaurant": {
                "id": 11,
                "name": "Marilou Bernhard",
                "tel": "1-932-580-8217",
                "address": "42491 Lowe Extension",
                "opening_hours": "08:00",
                "description": "ex voluptas enim",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.664351823843194",
                "viewCounts": 0,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 12,
            "text": "Consequatur sint labore illo est quas soluta ducimus perferendis reprehenderit.",
            "UserId": 2,
            "RestaurantId": 12,
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
            },
            "Restaurant": {
                "id": 12,
                "name": "Rhett Effertz",
                "tel": "595.203.7521",
                "address": "03426 Hansen Flats",
                "opening_hours": "08:00",
                "description": "Est itaque dolorem. Corporis vitae facere exercitationem odio dolor. Voluptas quis animi nisi tempora odit voluptate sunt.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.95197189787406",
                "viewCounts": 0,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 13,
            "text": "Pariatur et labore libero omnis.",
            "UserId": 3,
            "RestaurantId": 13,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$osGy.XI0zm4ENnOrVMJkT.1Jp8lEvuTymeofuQH49uhkS/Ja275hC",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            },
            "Restaurant": {
                "id": 13,
                "name": "Ashleigh Kemmer",
                "tel": "1-108-005-8109 x910",
                "address": "815 Daniel Pine",
                "opening_hours": "08:00",
                "description": "voluptates",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.032973297129125",
                "viewCounts": 0,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 14,
            "text": "Qui dolore nam impedit.",
            "UserId": 3,
            "RestaurantId": 14,
            "createdAt": "2022-09-14T15:10:59.000Z",
            "updatedAt": "2022-09-14T15:10:59.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$osGy.XI0zm4ENnOrVMJkT.1Jp8lEvuTymeofuQH49uhkS/Ja275hC",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z"
            },
            "Restaurant": {
                "id": 14,
                "name": "Miss Shawn Reichert",
                "tel": "1-366-798-6245 x5425",
                "address": "797 Pacocha Rest",
                "opening_hours": "08:00",
                "description": "Eum dolorem non tempora qui. Voluptate est ut excepturi reiciendis. Magnam repudiandae voluptatem sit autem eligendi similique. Illum esse facilis.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.8117674092231",
                "viewCounts": 0,
                "createdAt": "2022-09-14T15:10:59.000Z",
                "updatedAt": "2022-09-14T15:10:59.000Z",
                "CategoryId": 5
            }
        }
    ]
}

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>