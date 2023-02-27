<template>
  <div id="app" :class="$store.state.settings.showDarkTheme? 'dark':'light'">
    <router-view />
  </div>
</template>
<script>
import Api from './api'
export default {
  name: 'App',
  components: {

  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem('store'))
        )
      )
    }
    Api.setInterRefreshToken() // 刷新页面定时刷新token

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    // beforeunload事件在页面刷新时先触发
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
}
</script>
<style lang="scss">
@font-face {
  font-family: "TTTGB";
  src: url("./assets/fonts/TTTGB-Medium.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "TTTGB";
  src: url("./assets/fonts/TTTGB-Medium.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "PingFang SC Medium";
  src: url("./assets/fonts/PingFang-SC-Medium.woff") format("woff");
}
@font-face {
  font-family: "PingFang SC Regular";
  src: url("./assets/fonts/PingFang-SC-Regular.woff") format("woff");
}
@font-face {
  font-family: "PingFang SC Semibold";
  src: url("./assets/fonts/PingFang-SC-Semibold.woff") format("woff");
}
html,
body {
  width: 100%;
  height: 100%;
}
body {
  font-size: 0.14rem;
  margin: 0;
}
* {
  box-sizing: border-box;
  font-family: "PingFang SC Regular";

  &:focus-visible {
    outline: none;
  }
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0.05rem; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0.05rem;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 0.025rem;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
}
ul,
ol,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.page-content {
  height: 0;
  flex-grow: 1;
}

#app.light {
  color: #000;
}
#app.dark {
  color: #fff;
}
</style>
