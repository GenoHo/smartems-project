import { createStore } from 'vuex'

import userStore from '@/store/module/userStore.js'
import postStore from '@/store/module/postStore.js'
const store = createStore({
  // state: {
  //   name: "EMS"
  // },
  // getters: {
  //   getUserName (state) {
  //     return state.name
  //   }
  // },
  // mutations: {
  //   setUserName (state, value) {
  //     console.log('mutations : ', state, value)
  //     state.name = value
  //   }
  // },
  // actions: {
  // },
  modules: {
    // 키: 값 형태로 저장됩니다.
    userStore: userStore,
    postStore: postStore
  }
})

export default store;
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// // 작성한 모듈을 가져옵니다.
// import userStore from '@/store/module/userStore.js'
// import postStore from '@/store/module/postStore.js'

// const store = new Vuex.Store({
//   modules: {
//     // 키: 값 형태로 저장됩니다.
//     userStore: userStore,
//     postStore: postStore
//   }
// })

// export default store
