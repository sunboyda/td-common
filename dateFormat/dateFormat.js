class formatDate {
  constructor(){
    
  }
  format(date,fmt = 'yyyy-MM-dd') {
    if(date&&(typeof date ==='number')){
      date = new Date(date)
    }
    if(!date || !(date instanceof Date)){
      throw  new Error('请输入正确的时间')
    }
    var o = {
      'M+': date.getMonth() + 1, 
      'd+': date.getDate(), 
      'h+': date.getHours(), 
      'm+': date.getMinutes(), 
      's+': date.getSeconds(), 
      'S': date.getMilliseconds() 
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  }
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = formatDate;
}

