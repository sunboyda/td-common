class Tree {
  constructor() {}
  dataToThrr(data) {
    // 获取所有的没有父节点的数据
    let parents = data.filter(value => value.parentId == undefined || value.parentId == null)
    // 获取所有的有父节点的数据
    let childrens = data.filter(value => value.parentId !== undefined && value.parentId !== null)
    // 递归将子节点添加入父节点
    this.compile(parents, childrens)
    return parents
  }
  compile(parents, childrens) {
    parents.forEach(parent => {
      childrens.forEach(children => {
        if (children.parentId == parent.id) {
          typeof parent.childrens !== 'undefined' ? parent.childrens.push(children) : parent.childrens = [
            children
          ]
          this.compile([children], childrens)
        }
      })
    })
  }
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = formatDate;
}