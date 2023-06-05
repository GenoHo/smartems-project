<template>
  <div class="title_wrap" style="display: flex; justify-content: center">
    <span class="title">태그 정보</span>
    <div class="title_line"></div>
  </div>

  <div class="divL fL">
    <div class="div_search div_border">
      <div class="searchBox">
        <div class="searchTag1">
          <span class="searchLabel">시설명</span>
        </div>
        <div class="searchTag1">
          <input v-model="this.searchInfo.Fac_nm" class="comboBox top_textinput" type="text"/>
        </div>
      </div>

      <div class="searchBox">
        <div class="searchTag1">
          <span class="searchLabel">설비명</span>
        </div>
        <div class="searchTag1">
          <input v-model="this.searchInfo.Equip_nm" class="comboBox top_textinput" type="text"/>
        </div>
      </div>

      <div class="searchBox">
        <div class="searchTag1">
          <span class="searchLabel">태그명</span>
        </div>
        <div class="searchTag1">
          <input v-model="this.searchInfo.tag_nm" class="comboBox top_textinput" type="text"/>
        </div>
      </div>
      <div>
        <button class="searchBtn search_btn_font" @click="searchName" style="margin-top:33px;">조회</button>
      </div>
    </div>

    <!-- 설정 하단 부분 -->
    <div class="div_grid div_border fL">
      <div class="EitemsName">
        <button class="save_btn search_btn_font fR">저장</button>
      </div>
      <div style="height: 85%">
        {{ computedList[0].title }}
        {{ computedList[0].author }}
      </div> 
    </div>


  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

// store namespace: true 아래의 키 : 값 선언.
const userStore = 'userStore';
const postStore = 'postStore';
export default {
  data () {
    return {
      userName: '',
      searchInfo: {
        Fac_nm: '',
        Equip_nm: '',
        tag_nm: ''
      }
    }
  },
  computed: {
    /**
     *  mapGetters > mapGetters로 store의 getters 정보를 가져옴.
     *   2가지 방식으로 가져올 수 있습니다.
          1) 이름 지정해서 가져오기
          2) getters 이름 그대로 사용해서 가져오기
     */
    // 1번 방식
    ...mapGetters(userStore, {
      storeUserName: 'GE_USER_NAME'
    }),
    // 2번 방식
    ...mapGetters(postStore, [
      'GE_POST_LIST'
    ]),

    computedList() {
      let list = []
      for(let item of this.GE_POST_LIST) {
        if(item.author == this.storeUserName) {
          list.push(item)
        } else {
          list.push(' '); // 입력한 값과 일치하는 값이 없을 때 빈 값.
        }
      }

      return list
    }
  },
  watch: {
    // getters에 watch를 걸 수 있습니다.
    storeUserName(val) {
      this.userName = val
    }
  },
  
  methods: {
    /*
      mapGetter는 store의 getters를 가져옵니다.

      네임스페이스를 사용하기 때문에 키 이름을 적어줍니다. (userStore, postStore)

      2가지 방식으로 가져올 수 있습니다.
      1) 이름 지정해서 가져오기
      2) getters 이름 그대로 사용해서 가져오기      

      개인의 취향이지만, getters 이름 그대로 사용하는 것을 추천드립니다.

      다른 메소드 이름으로 매핑 예를 들면, setUserName: AC_USER_NAME 하면,
      setUserName 함수가 나중에는 스토어 함수인지, 현재 파일의 함수인지 헷갈리는 경우가 있습니다.

      mapActions > mapActions 함수를 사용하여 store의 actions 실행.
    */
    ...mapActions(userStore, [
      'AC_USER_NAME'
    ]),
    // 버튼을 클릭하면 수행됩니다.
    searchName() {
      if(this.searchInfo.Fac_nm) {
        const payload = {
          userName: this.searchInfo.Fac_nm
        }
        // store의 userName을 변경합니다.
        this.AC_USER_NAME(payload)
      } else {
        alert('입력 값이 없습니다.')
      }
    }
  }

}
</script>

<style>
.divL{
    height: 94%;
    width: 100%;
}

.div_search{
    width: 100%;
    height: 12%;
    display: flex;
}

.searchBox{
	display: flex;
    width: 15%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin-left: 51px;
}

.searchTag1{
	  height: 36%;
    width: 100%;
}

div::-webkit-scrollbar-track {
    background-color: #15284e !important;
}

.comboBox {
    background-color: #15284e;
    color: #fff;
    height: 95%;
    width: 91%;
    font-size: 16px;
    font-family: KHNPHDRegular;
}

.div_border{
	background-image: url("@/assets/img/box_bg_big2x.png");
	background-size: 100% 100%;
}

.title_wrap {
   display: flex;
   align-items: center;
   height: 50px;
}

.title {
   height: 100%;
   text-shadow: 0 0 9px #5cafff;
   font-family: "KHNPHDRegular";
   font-size: 21px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 2.5;
   letter-spacing: normal;
   text-align: left;
   color: #fff;
   margin: 0 0 10px 35px;
   background-position-x: right;
}

.title_line {
  background: url("@/assets/img/title_name_box.png");
  background-size: 100% 100%;
  width: 140px;
  height: 100%;
  margin-left: -50px;
  mix-blend-mode: color-dodge;
}

.save_btn {
    width: 110px;
    height: 32px;
    align-self: center;
    border: solid 1px #b4dffa;
    background-color: rgba(139, 194, 240, 0.25);
    cursor: pointer;
    border-radius: 4px;
    margin-top: 7px;
}

.select_btn{
    display: inline-flex;
    margin-left: 10px;
    height: 39px;
}

.searchBtn {
   width: 110px;
    height: 32px;
    align-self: center;
    border: solid 1px #b4dffa;
    background-color: rgba(139, 194, 240, 0.25);
    cursor: pointer;
    border-radius: 4px;
    margin-left: 17px;
    margin-top: 31px;
}

.search_btn_font{
	text-shadow: 0 0 9px #5cafff;
    font-size: 17px;
    letter-spacing: normal;
    color: #fff;
    font-family: KHNPHDRegular;
    text-align: center;
    line-height: 2;
}

.searchLabel{
    font-family: KHNPHDRegular;
    text-align: center;
    font-size: 14px;
    letter-spacing: 4px;
    color: white;
}

.fL {
   float: left;
}

.fR {
   float: right;
}
.top_textinput{
    height: 85%;
    width: 91%;
    display: inline-block;
    border: 1px solid #489cf2;
    background-color: #15284e;
    color: #fff;
    font-family: KHNPHDRegular;
    text-align: center;
    font-size: 20px;
    letter-spacing: 4px;
    border-radius: 5px;
}

.div_grid{
    width: 100%;
    height: 84%;
    margin-top: 1%;
}

.save_btn {
    width: 110px;
    height: 32px;
    align-self: center;
    border: solid 1px #b4dffa;
    background-color: rgba(139, 194, 240, 0.25);
    cursor: pointer;
    border-radius: 4px;
    margin-top: 7px;
}

.EitemsName, .EitemsName2 {
   height: 50px;
   margin: 0 20px 0 20px;
}
.search_btn_font{
	text-shadow: 0 0 9px #5cafff;
    font-size: 17px;
    letter-spacing: normal;
    color: #fff;
    font-family: KHNPHDRegular;
    text-align: center;
    line-height: 2;
}
.EitemsGridArea2 {
   padding: 0 0 10px 0;
}
</style>
