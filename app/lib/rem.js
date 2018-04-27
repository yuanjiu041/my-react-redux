export default function (global) {
  var width = 750
  var docEl = window.document.documentElement
  var dpr = window.devicePixelRatio || 1
  var resizeHandler = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) {
      docEl.style.fontSize = 100 + 'px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / parseInt(width)) + 'px'
    }
  }

  dpr = dpr >= 3 ? 3 : dpr >= 2 ? 2 : 1
  docEl.setAttribute('data-dpr', dpr)
  window.addEventListener('resize', resizeHandler, false)
  
  resizeHandler()
}