class formatDate {
  constructor() {

  }
  format(date, fmt = 'yyyy-MM-dd') {
    if (date && (typeof date === 'number')) {
      date = new Date(date)
    }
    if (!date || !(date instanceof Date)) {
      throw new Error('请输入正确的时间')
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
  getMonthDay(date) {
    if (date instanceof Date) {
      date = this.format(date)
    }
    let Y = date.split('-')[0]
    let M = Number(date.split('-')[1])
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(M) > -1) {
      return 31
    }
    if ([4, 6, 9, 11].indexOf(M) > -1) {
      return 30
    }
    if (M == 2) {
      let isBissextile = this.isBissextile(Y)
      if (isBissextile) {
        return 29
      } else {
        return 28
      }
    }
  }
  isBissextile(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      return true
    } else {
      return false
    }
  }
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = formatDate;
}