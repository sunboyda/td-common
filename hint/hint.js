class Hint {
  constructor(options) {
    this.options = options
    this.creatDom()
  }
  creatDom() {
    let $root = document.createElement('div')
    this.setStyle($root)
    $root.innerHTML = this.options.text
    document.body.appendChild($root)
    setTimeout(() => {
      this.removeDom($root)
    }, this.options.time || 1000)
  }
  removeDom(dom) {
    document.body.removeChild(dom)
  }
  setStyle(root) {
    let style = Object.assign({}, {
      position: 'fixed',
      maxWidt: '85%',
      padding: '15px',
      borderRadius: '5px',
      top: '50%',
      left: "50%",
      transform: 'translate(-50% ,-50%)',
      backgroundColor: 'rgba(0,0,0,0.8)',
      color: "#fff",
      fontSize: '20px',
    }, this.options.style || {})
    Object.keys(style).forEach(key => {
      root.style[key] = style[key]
    })
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = Hint;
}