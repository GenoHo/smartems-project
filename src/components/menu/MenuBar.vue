<template>
  <div class="menu_cont">
    <div class="menu">
      <div class="mainMenu">
        <div class="mainMenuContainer">
          <div class="menu_handler">
            <div class="menu_arrow" ></div>
          </div>
          <div class="mainMenuContainerLogo"></div>
          <div class="mainMenuContainerMenu" @click="mainMenuMove('/')">
            <div class="mainMenuContainerMenuItem fontMenu dashboard_font">
            <div class='dashboard_btn_off'></div>
              메인
            </div>
          </div>
          <div class="mainMenuContainerMenu">
            <div class="mainMenuContainerMenuItem fontMenu dashboard_font"
             @click="pmsSubMenuOpen1" :class="{selected: state.select === 1}" >
            <div class='dashboard_btn_off'  id="dashboard_btn" ></div>
              <span :class="{ select: state.select === 1 }">자율운영</span>
            </div>
          </div>
          <div class="mainMenuContainerMenu">
            <div class="mainMenuContainerMenuItem fontMenu dashboard_font"
            @click="pmsSubMenuOpen2" :class="{selected: state.select === 2}" >
            <div class='dashboard_btn_off'  id="dashboard_btn" ></div>
              <span :class="{ select: state.select === 2 }">스마트EMS</span>
            </div>
          </div>
          <div class="mainMenuContainerMenu">
            <div class="mainMenuContainerMenuItem fontMenu dashboard_font">
            <div class='dashboard_btn_off'  id="dashboard_btn" ></div>
              스마트PMS
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 서브메뉴 -->
    <div class="ems-subMenu" v-if="state.ems1">
      <div class="sub-log">
        <img src="@/assets/img/icon/auto.png" alt="" />
        <span class="textfont">
          자율 운영
        </span>
      </div>
      <div class="sub-item" @click="subMenu(0)">
        <!-- <span class="icon">
        </span> -->
        <span :class="{ selectFont: state.subList1 === 0 }" >착수</span>
        <div class="sub-item-list" :class="{showList: state.subList1 === 0}">
          <div class="item" :class="{ showitem: state.subList1 === 0 }">
            <div class="circle"></div>
            세부현황
          </div>
          <div class="item" :class="{ showitem: state.subList1 === 0 }">
            <div class="circle"></div>
            시뮬레이션
          </div>
        </div>
      </div>
      <div class="sub-item" @click="subMenu(1)">
        <span class="icon">
        </span>
        <span :class="{ selectFont: state.subList1 === 1 }" >약품 {{state.subList1 }}</span>
        <div class="sub-item-list" :class="{showList: state.subList1 === 1}">
          <div class="item" :class="{ showitem: state.subList1 === 1 }">
            <div class="circle"></div>
            데이터1
          </div>
          <div class="item" :class="{ showitem: state.subList1 === 1 }">
            <div class="circle"></div>
            데이터2
          </div>
        </div>
      </div>
    </div>

    <!-- 서브메뉴 -->
    <div class="ems-subMenu" v-if="state.ems2">
      <div class="sub-log">
        <img src="@/assets/img/icon/auto.png" alt="" />
        <span class="textfont">
          스마트EMS
        </span>
      </div>
      <div class="sub-item" @click="subMenu(0)">
        <span class="icon">
        </span>
        <span :class="{ selectFont: state.subList1 === 0 }" >222 {{state.subList1 }}</span>
        <div class="sub-item-list" :class="{showList: state.subList1 === 0}">
          <div class="item" :class="{ showitem: state.subList1 === 0 }">
            <div class="circle"></div>
            세부현황
          </div>
          <div class="item" :class="{ showitem: state.subList1 === 0 }">
            <div class="circle"></div>
            시뮬레이션
          </div>
        </div>
      </div>
      <div class="sub-item" @click="subMenu(1)">
        <span class="icon">
        </span>
        <span :class="{ selectFont: state.subList1 === 1 }" >약품 {{state.subList1 }}</span>
        <div class="sub-item-list" :class="{showList: state.subList1 === 1}">
          <div class="item" :class="{ showitem: state.subList1 === 1 }">
            <div class="circle"></div>
            에너지 절감 관리
          </div>
          <div class="item" :class="{ showitem: state.subList1 === 1 }" @click="pageMove('setting', 1)">
            <div class="circle"></div>
            설정
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const state = reactive({ // eslint-disable-line no-unused-vars
      menu: false,
      ems1: false,
      ems2: false,
      select: 0,
      subList: '',
      subList1: '',
      subList2: ''
    })

    const pmsSubMenuOpen1 = () => {
      state.ems1 = true
      state.ems2 = false
      state.select = 1
      // state.subList1 = 0
    }

    const pmsSubMenuOpen2 = () => {
      state.ems1 = false
      state.ems2 = true
      state.select = 2
    }

    const mainMenuMove = (value) => {
      router.push(value)
    }

    const subMenu = (idx) => {
      // state.subList1 = 0
      if (state.subList1 === idx) {
        state.subList1 = ''
      } else {
        state.subList1 = idx
      }
    }

    const pageMove = (value, idx) => {
      router.push(value)
    }

    return {
      state,
      subMenu,
      pmsSubMenuOpen1,
      pmsSubMenuOpen2,
      pageMove,
      mainMenuMove
    }
  }
}
</script>

<style lang="scss" scoped>
.menu_cont {
   left: -87px;
   height: 100%;
   top: 0;
   position: absolute;
   transition: all linear .2s;
   -ms-user-select:none;
   -moz-user-select:-moz-none;
   -khtml-user-select:none;
   -webkit-user-select:none;
   user-select:none;
}
.menu {
   height: 100%;
   background-image: linear-gradient(to right, rgb(19 46 69 / 70%) 2%, rgb(10 80 124 / 95%) 48%, #08214a 95%);
   position: absolute;
   top: 0;
   z-index: 100;
   .selected {
        background: rgba(255, 255, 255, 0.1);

        .select {
            color: white;
        }
    }
}

.mainMenu {
   display: flex;
   width: 100%;
}

.mainMenuContainer {
   width: 103px;
}
.menu_handler{
	display: flex; align-items: center; justify-content: center; position: absolute; top: 65px; right: -13px; width: 13px; height: 31px; background-color: rgb(8, 33, 74); border-top-right-radius: 5px; border-bottom-right-radius: 5px; z-index: 100;
}
.menu_arrow{
	width: 0px; height: 0px; border-top: 5px solid transparent; border-left: 5px solid white; border-bottom: 5px solid transparent;
}
.mainMenuContainerLogo {
   height: 64px;
   background-repeat: no-repeat;
   background-image: url("@/assets/img/icon/logo.png");
   background-position: center;
}

.mainMenuContainerMenu {
   height: 68px;
   cursor: pointer;
}

.mainMenuContainerMenuItem {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   align-items: center;
   height: 68px;
}
.menu_cont:hover {
   left: 0px;
}
.fontMenu{
	font-family: KHNPHDRegular;
	font-size: 11px;
	color: #828EB5;
	width: 100%;
	text-align: center;
}

.subMenu {
   width: 217px;
   transition: all linear .3s;
   float: left;
   background: linear-gradient(91deg, rgba(11, 50, 95, 0.9) 1%, #021f3b 96%);
   height: 100%;
   position: absolute;
   left: -160px;
   z-index: 99;
   top: 0;
}

.ems-subMenu {
        width: 165px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 105px;
        background: linear-gradient(
            91deg,
            rgba(11, 50, 95, 0.8) 1%,
            #021f3b 95%
        );
        .sub-logo {
            cursor: pointer;
            padding-top: 20px;
            width: 100%;
            height: 63px;
            display: inline-flex;
            align-items: center;

            img {
                width: 17px;
                margin-right: 5px;
                margin-left: 13px;
            }
            span {
                font-size: 15px;
                color: white;
            }
        }

        .sub-item {
            width: 100%;
            display: inline-flex;
            align-items: center;
            flex-wrap: wrap;
            cursor: pointer;
            img {
                margin: 14px 16px 14px 0;
                width: 22px;
                margin-right: 12px;
            }
            span {
                color: white;
                font-size: 0.8125rem;
                font-weight: 500;
                line-height: 1rem;
            }

            .selectFont {
                color: #10a4df;
            }

            .sub-item-list {
                width: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                height: 0px;
                visibility: hidden;

                .item {
                    display: flex;
                    padding: 20px 22px;
                    width: 100%;
                    align-items: center;
                    font-size: 0.8125rem;
                    color: white;
                    white-space: nowrap;

                    .circle {
                        width: 4px;
                        height: 4px;
                        background: white;
                        border-radius: 6px;
                        margin-right: 22px;
                    }
                }

                .item:hover {
                    background: rgba(0, 0, 0, 0.1);
                    transition: 0.2s;
                }
            }
            .showList {
                visibility: visible;
                height: auto;
            }
        }
    }

.dashboard_btn_off {
	background: url('@/assets/img/icon/dashboard_off.png') no-repeat;
	margin: 10px 0 12px 0; width: 33px; height: 24px; background-size: 100%;
}

.textfont {
  font-size: 15px;
  color: white;
}
.sub_fort {
  color: white;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1rem;
}
</style>
