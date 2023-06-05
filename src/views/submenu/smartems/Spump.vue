<template>
  <div class="title_wrap" style="display: flex; justify-content: center">
    <span class="title">송수펌프 운영</span>
    <div class="title_line"></div>
  </div>

  <!-- 펌프운영 관리 -->
  <div class="frist_main">
    <div class="div_title">
      <span>펌프 운영 관리</span>
    </div>
  </div>


</template>


<style scoped>
.frist_main {
  width: 100%;
  height: calc(100% - 80px);
  margin-top: 20px;
  float: left;
}

/*div 박스 테두리 이미지*/
.div-middle {
   width: calc(100% - 10px);
   height: 100%;
   background-image: url("@/assets/img/box_bg_middle.png");
   background-size: 100% 100%;
}


.div_title {
	margin-bottom: 10px;
	display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>