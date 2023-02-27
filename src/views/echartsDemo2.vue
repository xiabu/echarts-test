<template>
  <div class="main">
    <div ref="chartPanel" id="chart-panel" style="width: 100%; height: 388px"></div>
  </div>
</template>

<script>
import { getPie3D } from '../utils/sector'
import * as echarts from 'echarts'
import 'echarts-gl';
export default {
  data () {
    return {
      optionData: [
        {
          name: "医药研发",
          value: 12,
          itemStyle: {
            opacity: 0.2,
            color: "#D6476C",
          },
        },
        {
          name: "生物科技",
          value: 16,
          itemStyle: {
            opacity: 0.2,
            color: "#017DC1",
          },
        },
        {
          name: "房地产",
          value: 14,
          itemStyle: {
            opacity: 0.2,
            color: "#804BC6",
          },
        },
        {
          name: "互联网科技",
          value: 81,
          itemStyle: {
            opacity: 0.2,
            color: "#44BA9C",
          },
        },
        {
          name: "软件外包",
          value: 66,
          itemStyle: {
            opacity: 0.2,
            color: "#3F14C9",
          },
        },
        // {
        //   name: "林地面积统计",
        //   value: 10000,
        //   itemStyle: {
        //     opacity: 0.2,
        //     color: "#22c4ff",
        //   },
        // },
        // {
        //   name: "草地面积统计",
        //   value: 12116,
        //   itemStyle: {
        //     opacity: 0.2,
        //     color: "#aaff00",
        //   },
        // },
      ],
    };
  },
  mounted () {
    this.draw3d();
    this.$nextTick(() => {
      let parent = document.getElementById("chart-panel"); // 获取父元素
      let canvas = parent.getElementsByTagName("canvas"); // 获取父元素下面的所有canvas元素
      console.log(canvas);
      canvas[1].style.transform = "rotateX(30deg)";
    });
  },
  methods: {
    draw3d () {
      // 基于准备好的dom，初始化echarts实例
      let chartPanel = echarts.init(document.getElementById("chart-panel"));
      for (let i = 0; i < this.optionData.length; i++) {
        delete this.optionData[i].itemStyle.opacity;
      }
      // 传入数据生成 option
      let series = getPie3D(this.optionData, 2);
      let option = {
        tooltip: {
          formatter: (params) => {
            // console.log(params)
            if (
              params.seriesName !== "mouseoutSeries" &&
              params.seriesName !== "pie2d"
            ) {
              return `<div style="padding:0 10px">${params.seriesName}：${(
                option.series[params.seriesIndex].pieData.proportion * 100
              ).toFixed(2)}%</div>`;
            }
          },
        },
        legend: {
          // data: legendData,
          data: this.optionData,
          width: "90%",
          itemGap: 25,
          bottom: "bottom",
          textStyle: {
            color: "#000",
            fontSize: 14,
          },
        },
        xAxis3D: {
          min: -1,
          max: 1,
        },
        yAxis3D: {
          min: -1,
          max: 1,
        },
        zAxis3D: {
          min: -1,
          max: 1,
        },
        grid3D: {
          show: false, //是否显示三维笛卡尔坐标系。
          boxHeight: 20, //三维笛卡尔坐标系在三维场景中的高度
          top: "-12.5%",
          // bottom: "80%",
          // environment: "#021041", //背景
          viewControl: {
            //用于鼠标的旋转，缩放等视角控制
            alpha: 50, //角度
            distance: 250, //调整视角到主体的距离，类似调整zoom 重要
            rotateSensitivity: 0, //设置为0无法旋转
            zoomSensitivity: 0, //设置为0无法缩放
            panSensitivity: 0, //设置为0无法平移
            autoRotate: false, //自动旋转
          },
        },
        series: series,
      };
      // chartPanel.setOption(option);

      //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
      option.series.push({
        name: "pie2d",
        type: "pie",
        label: {
          color: "#fff",
          fontSize: 16,
          //  position: 'inner',
          // formatter: "{b}\n\n",
          // padding: [0, -40],
          formatter: (item) => {
            //  console.log(item)
            return item.data.name + ":" + item.data.value + "家" + "";
          },
        },
        labelLine: {
          length: 20,
          length2: 20,
          lineStyle: {
            color: "#ffffff",
            width: 1.5,
          },
        },
        startAngle: 321, //起始角度，支持范围[0, 360]。 //重要
        clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ["25%", "50%"],
        center: ["50%", "50%"],
        data: this.optionData,
        itemStyle: {
          opacity: 0,
        },
        top: "-20%",
        avoidLabelOverlap: true, //防止标签重叠
      });
      console.log(option);
      chartPanel.setOption(option);
      this.handleChartLoop(option, chartPanel)
    },
    handleChartLoop (option, myChart) {
      if (!myChart) {
        return
      }
      let currentIndex = -1 // 当前高亮图形在饼图数据中的下标
      let changePieInterval = setInterval(selectPie, 1000) // 设置自动切换高亮图形的定时器

      // 取消所有高亮并高亮当前图形
      function highlightPie () {
        // 遍历饼图数据，取消所有图形的高亮效果
        for (var idx in option.series) {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: idx
          })
        }
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
      }

      // 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形
      myChart.on('mouseover', (params) => {
        clearInterval(changePieInterval)
        currentIndex = params.dataIndex
        highlightPie()
      })

      // 用户鼠标移出时，重新开始自动切换
      myChart.on('mouseout', () => {
        if (changePieInterval) {
          clearInterval(changePieInterval)
        }
        changePieInterval = setInterval(selectPie, 1000)
      })

      // 高亮效果切换到下一个图形
      function selectPie () {
        var dataLen = option.series.length
        currentIndex = (currentIndex + 1) % dataLen
        highlightPie()
      }
    },
  }
}
</script>

<style>
</style>