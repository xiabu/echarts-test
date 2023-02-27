<template>
  <div class="main">
    <div id="lottie"></div>
  </div>
</template>
<script>
import lottie from 'lottie-web';
import animationData from './txt_data.json';
import lottieapi from 'lottie-api'
export default {
  data () {
    return {
      listData: [
        {
          name: '同比',
          value: '89%',
        },
        {
          name: '完成率',
          value: '89%',
        },
        {
          name: '售罄率',
          value: '89%',
        },
        {
          name: '折扣率',
          value: '89%',
        },
      ]
    }
  },
  mounted () {

    let anim = lottie.loadAnimation({
      container: document.getElementById("lottie"),
      renderer: "svg",
      loop: true, //循环播放
      autoplay: true, //自动播放
      /**
       * animationData和path二选一。
       * 1.animationData
       * animationData为本地路径的json，需要import * as anData from "@/XXX.json"
       * 注意：使用本地路径获取的data需要使用default参数。
       * 2.path
       * path可直接传入网络路径
       */
      // animationData: anData.default,
      // path: "https://assets7.lottiefiles.com/packages/lf20_sF7uci.json"
      animationData: animationData // 动画json的路径
      //   path: "https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json"
    });
    function getRandomText (length) {
      let text = ''
      for (let i = 0; i < length; i++) {
        text += eval('"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16) + '"');
      }
      return text
    }
    anim.addEventListener('DOMLoaded', () => {
      var animapi = lottieapi.createAnimationApi(anim) //anim为默认动画的程序名字
      setInterval(() => {
        const txt_5 = document.getElementById("T_txt");
        console.log(txt_5)
        console.log(txt_5.querySelector("text"))
        // txt_5.style = "width:100px;"
        // let Dom = txt_5.querySelector("text")
        // Dom.innerHTML = `<tspan  width="160" height="160">111111111</tspan><tspan  x="100" y="25" 
        //     width="160" height="160">222222222</tspan>`;
        // txt_5.innerHTML = `<foreignObject x="0" y="0" width="100" height="100"><p onclick="svgDomClick(333)">${getRandomText(5)}</p><p onclick="svgDomClick(444)">${getRandomText(6)}</p></foreignObject>`;
        // Dom.append('foreignObject')
        // console.log(animapi)
        // console.log(animapi.getElements())
        let elements = animapi.getElements()
        elements[0].setText('这是新的文字测试', 0)
      }, 2000);
    })
    window.svgDomClick = this.svgDomClick
  },
  methods: {
    svgDomClick (data) {
      alert(data)
    },
  }
}
</script>

