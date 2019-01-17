class Select {
  constructor(options){
    this.options = options
    this.createDom(this.options.data)
  }
  createDom(data){
    let div = document.createElement('div')
    div.className = 'td-select'
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
      p.addEventListener('click',function(){
        ps.forEach(p=>{
          p.classList.remove('sl-active')
        })
          this.classList.add('sl-active')
        
          _that.options && _that.options.callback()
          // div.style.display='none'
          this.parentNode.style.display = 'none'
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