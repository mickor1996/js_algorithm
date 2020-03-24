/**
@param func 目标函数
@param wait 毫秒数
@param immediate 是否立即执行 
**/
function debounce(func, wait, immediate) {
  // your code
  if (immediate) {
    func()
  } else {
    let timer = null
    return function () {
      if (timer) {
        return
      } else {
        timer = setTimeout(func, wait)
      }
    }
  }
};

var myEfficientFn = debounce(function () {
  console.log("trigger");
}, 250, false);
myEfficientFn()

//提醒：在窗口被缩放的时候 resize 会连续被执行
window.addEventListener('resize', myEfficientFn, false);
