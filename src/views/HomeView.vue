<template>
  <div class="home">
    <div class="drawchart" ref="runstatuspie" style="width: 100%; height: 300px; color: black; margin-top: 15px"></div>
  </div>
</template>

<script>
import highcharts from 'highcharts'
export default {
  data () {
    return {
      // list: [
      //   ['Firefox', 45.0],
      //   ['IE', 26.8],
      //   {
      //     name: 'Chrome',
      //     y: 12.8,
      //     sliced: true,
      //     selected: true
      //   },
      //   ['Safari', 8.5],
      //   ['Opera', 6.2],
      //   ['Others', 0.7]
      // ],
      list: [
        {
          name: 'Firefox',
          y: 45.0,
          sliced: false,
          selected: false
        }, {
          name: 'IE',
          y: 26.8,
          sliced: false,
          selected: false
        }, {
          name: 'Chrome',
          y: 12.8,
          sliced: false,
          selected: false
        }, {
          name: 'Safari',
          y: 8.5,
          sliced: false,
          selected: false
        }, {
          name: 'Opera',
          y: 6.2,
          sliced: false,
          selected: false
        }, {
          name: 'Others',
          y: 0.7,
          sliced: false,
          selected: false
        },
      ],
      timer: null,
    }
  },
  methods: {
    drawtimecharts () {
      let that = this
      let myChart = highcharts.chart(this.$refs.runstatuspie, {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 55,
            beta: 0
          }
        },
        title: {
          text: '2014年某网站不同浏览器访问量占比'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 45,
            innerSize: 100,
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          },
          series: {
            events: {
              mouseOver (event) {
                console.log(event, 1);
                clearInterval(that.timer)
              },
              mouseOut (event) {
                console.log(event, 2);
                if (that.timer) {
                  clearInterval(that.timer)
                }
                this.timer = setInterval(selectPie, 2000)
              },
            },
          },
        },
        series: [{
          type: 'pie',
          name: '浏览器占比',
          data: this.list
        }]
      });
      this.timer = setInterval(selectPie, 2000)
      var i = 0
      function selectPie () {
        that.list.map(item => {
          item.sliced = false
          item.selected = false
        })
        that.list[i].sliced = true
        that.list[i].selected = true
        i++
        if (i == that.list.length) {
          i = 0
        }
        myChart.series[0].setData(that.list)
      }
    }

  },
  mounted () {
    // highcharts.chart(this.$refs.runstatuspie,this.drawtimecharts())
    this.drawtimecharts()
  }
}
</script>
