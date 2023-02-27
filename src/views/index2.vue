<template>

  <div class="main">
    <!--底座-->
    <div class="rotation3D-baseMap"></div>
    <!--旋转3D-->
    <div id="rotation3D" class="rotation3D">
      <button class="center">中心</button>
      <div class="itemList">
        <div class="rotation3D__item" :class="item.type" v-for="(item, index) in itemList" :key="index">
          <div class="scale">
            <div class="baseImg"></div>
            <div class="cont">
              <i class="iconfont" :class="item.icon"></i>
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lineList">
        <div class="rotation3D__line" v-for="(item, index) in itemList" :class="item.type" :key="index">
          <div v-if="item.type=='blue'" class="pos">
            <svg width="10" height="400">
              <path id="path1" d="M0 400, 0 0" stroke-dasharray="5,10"></path>
            </svg>
            <div class="dot dot1 el-icon-caret-right"></div>
          </div>
          <div v-if="item.type=='yellow'" class="pos">
            <svg width="10" height="400">
              <path id="path2" d="M0 400, 0 0" stroke-dasharray="5,10"></path>
            </svg>
            <div class="dot dot2"><i class="el-icon-close"></i></div>
          </div>
          <div v-if="item.type=='green'" class="pos" style="left: -16px;">
            <svg width="50" height="400">
              <path id="path3" d="M20 400 S 0 200, 20 0" stroke-dasharray="5,10"></path>
              <path id="path4" d="M20 400 S 40 200, 20 0" stroke-dasharray="5,10"></path>
            </svg>
            <div class="dot dot3 el-icon-caret-right"></div>
            <div class="dot dot4 el-icon-caret-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemList: [
        { name: '人员管理', type: 'blue', icon: 'icon-renyuanguanli', },
        { name: 'GPS服务', type: 'green', icon: 'icon-GPS', },
        { name: '路基施工', type: 'yellow', icon: 'icon-a-lujishigong2x', },
        { name: '数据服务中心', type: 'blue', icon: 'icon-shujufuwuzhongxin', },
        { name: '智慧梁场', type: 'blue', icon: 'icon-liangchang', },
        { name: '摊铺压实服务', type: 'blue', icon: 'icon-tanpuyashifuwu', },
        { name: '路面施工', type: 'blue', icon: 'icon-lumianshigong', },
        { name: '试验检测', type: 'blue', icon: 'icon-shiyanjiance', },
      ],
    }
  },
  mounted () {
    new Rotation3D({
      id: '#rotation3D',
      farScale: 0.6,
      // farScale: 1,
      xRadius: 0,  //x半径压缩
      yRadius: 130,  //y半径压缩
      // yRadius: 0,  //y半径压缩
      autoPlay: true,
      // autoPlayDelay:6000,
    })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import url("./index2/font_3045003_lkxtjaj4m6.css");
@import url("./index2/rotation3D.css");

.main {
  min-width: 100vw;
  min-height: 100vh;
  background: #292a38;
}
.rotation3D-baseMap {
  position: absolute;
  left: 10px;
  right: 0;
  top: 160px;
  margin: auto;
  width: 1312px;
  height: 516px;
  background: url("./images/baseMap.png");
  background-size: 100% 100%;
}
.rotation3D-baseMap::before {
  position: absolute;
  left: -12px;
  right: 0;
  top: 0;
  margin: auto;
  z-index: 99;
  width: 280px;
  height: 280px;
  display: block;
  content: "";
  background: url("./images/baseLogo.png");
  background-size: 100% 100%;
  animation: 10s bounceUpDown infinite;
}
</style>