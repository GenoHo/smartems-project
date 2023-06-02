import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import stores from './store/index.js'

// createApp(App).use(store).use(router).mount('#app')
//[ 앱 생성 실시 ]
const app = createApp(App);

//[ 앱 글로벌 변수 선언 실시 ]
app.config.globalProperties.$store = stores

// [ router 사용 설정 ]
app.use(router);

app.use(stores);

app.mount('#app');