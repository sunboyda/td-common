class Select {
  constructor(options){
    this.options = options
    this.createDom(this.options.data)
  }
  createDom(data){
    let div = document.createElement('div')
    div.className = 'td-select'
    div.style="display: none"
      let content = data.map(item=>{
        return `<p data-id=${item.id}>${item.label}</p>`
      }).join('')
      div.innerHTML = content

      this.options.ele.appendChild(div)
      let ps = div.querySelectorAll('p')
      this.bindEvent(ps)
      if(this.options.triangle){
        this.setTriangle(div)
      }
  }
  bindEvent(ps){
    ps.forEach(p=>{
      let _that = this
      p.addEventListener('click',function(e){
        e.stopPropagation()
        ps.forEach(p=>{
          p.classList.remove('sl-active')
        })
        console.log(this)
        let id = Number(this.dataset.id)
          this.classList.add('sl-active')
          this.parentNode.style.display = 'none'
          _that.options && _that.options.callback(id)    
      })
    })
  } 
  setTriangle(ele){
    let i = document.createElement('i')
    i.className ='triangle'
    ele.appendChild(i)
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = formatDate;
}