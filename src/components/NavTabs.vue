<template>
  <ul class="nav nav-tabs mb-4">
    <li 
      class="nav-item"
      v-for="tab in tabs"
      :key="tab.id"
    >
      <router-link
        :to="tab.path"
        class="nav-link"
      >
        {{tab.title}}
      </router-link>
    </li>
    <!-- <li class="nav-item">
      <router-link
        to="/restaurants/feeds"
        class="nav-link"
      >
        最新動態
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
        to="/restaurants/tops"
        class="nav-link"
      >
        TOP 10 人氣餐廳
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
        to="/users/tops"
        class="nav-link"
      >
        美食達人
      </router-link>
    </li> -->
  </ul>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
export default {
  data () {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: '首頁',
          path: '/restaurants'
        },
        {
          id: uuidv4(),
          title: '最新動態',
          path: '/restaurants/feeds'
        },
        {
          id: uuidv4(),
          title: 'TOP 10 人氣餐廳',
          path: '/restaurants/tops'
        },
        {
          id: uuidv4(),
          title: '美食達人',
          path: '/users/tops'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .nav-tabs {
    border-bottom: 1px solid #bd2333;
  }

  .nav-tabs .nav-link:focus,
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    border-color: #bd2333;
    background-color: #bd2333;
    color: white;
}
</style>