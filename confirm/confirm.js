import './confirm.css'
import template from './confirm-template'

class Confirm {
  constructor(options) {
    options = this.options = Object.assign({}, {
      title: '提示',
      btn: {
        ok: '确定',
        cancel: '取消'
      }
    }, options)
    this.createDom()
  }
  createDom() {
    let div = document.createElement('div')
    div.innerHTML = template(this.options)
    document.body.appendChild(div)
    this.bindEvent(div)
  }
  bindEvent(ele) {
    ele.addEventListener('click', (e) => {
      if ([...e.target.classList].indexOf("confirm-btn") == -1) {
        return
      }
      if ([...e.target.classList].indexOf("confirm-btn-ok") > -1) {
        this.options.callback()
        this.removeNode(ele)
      }
      if ([...e.target.classList].indexOf("confirm-btn-cancel") > -1) {
        this.removeNode(ele)
      }
    })
  }
  removeNode(dom) {
    document.body.removeChild(dom)
  }

}

export default Confirm