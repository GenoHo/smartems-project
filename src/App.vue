<template>
  <div class="page_bg">
    <HeaderName />
    <MenuBar />
    <router-view ></router-view>
  </div>
</template>

<script>
import HeaderName from '@/components/main/Header.vue'
import MenuBar from '@/components/menu/MenuBar.vue'

export default {
  components: { MenuBar, HeaderName}
}

</script>

<style lang="scss">
.page_bg {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/img03.png');
}
</style>
