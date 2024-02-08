window.globalData = {
}
 
let file = ['人物', '人物发型', '动作', '动物装饰', '场景道具', '抽卡机', '新服饰', '服饰', '艺术魔法', '起手式', '面部表情', '颜色'];
let url = ''
if (window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1')) {
  url = '../'
} else {
  url = `${window.location.origin}/${window.location.pathname}`;
}

file.forEach((item) => {
  fetch(`${url}json/${item}.json`)
    .then(response => response.json())
    .then(data => {
      Object.assign(window.globalData, data)
    })
    .catch(error => console.error('加载JSON文件时出错:', error));
})
