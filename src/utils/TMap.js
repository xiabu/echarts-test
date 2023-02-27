export function TMap(key) {
  return new Promise((resolve, reject) => {
    window.init = function() {
      resolve(qq)
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://map.qq.com/api/js?v=2.exp&callback=init&key=" + key;
    script.onerror = reject;
    document.head.appendChild(script)
  })
}

export function TMapGL(key) {
  return new Promise((resolve, reject) => {
    window.initTMapGL = () => resolve()
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://map.qq.com/api/gljs?v=1.exp&libraries=tools&callback=initTMapGL&key=" + key;
    document.body.appendChild(script)
    script.onerror = reject;
  })
}