<template>
  <div class="main">
    <div class="text-b tit02" style="text-align: center;">关键词 — 云</div>
    <div class="tagcloud">
      <!-- bo大小 co颜色 -->
      <a class="b01 co01" href="#">大数据</a>
      <a class="b02 co02" href="#">大数据</a>
      <a class="b03 co05" href="#">大数据</a>
      <a class="b04 co02" href="#">大数据</a>
      <a class="b03 co05" href="#">大数据</a>
    </div>
  </div>
</template>


<script>
export default {
  mounted () {
    /*3D标签云*/
    tagcloud({
      selector: ".tagcloud",  //元素选择器
      fontsize: 6,       //基本字体大小, 单位px
      radius: 40,         //滚动半径, 单位px 页面宽度和高度的五分之一
      mspeed: "slow",   //滚动最大速度, 取值: slow, normal(默认), fast
      ispeed: "slow",   //滚动初速度, 取值: slow, normal(默认), fast
      direction: 0,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
      keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
    });
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 300px;
}
.tagcloud {
  width: 100%;
  height: 90% !important;
  overflow: hidden;
  position: relative;
  margin-left: 200px;
}
.tagcloud a {
  display: block;
  border-radius: 50%;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>