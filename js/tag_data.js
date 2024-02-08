window.globalData = {
  "正面常用": {
    "高质量": "best quality",
    "高细节": "highly detailed",
    "杰作": "masterpiece",
    "超细节": "ultra-detailed",
    "插图": "illustration",
  },
  "负面常用": {
    "lowres": "lowres",
    "bad anatomy": "bad anatomy",
    "bad hands": "bad hands",
    "text": "text",
    "error": "error",
    "missing fingers": "missing fingers",
    "extra digit": "extra digit",
    "fewer digits": "fewer digits",
    "cropped": "cropped",
    "worst quality": "worst quality",
    "low quality": "low quality",
    "normal quality": "normal quality",
    "jpeg artifacts": "jpeg artifacts",
    "signature": "signature",
    "watermark": "watermark",
    "username": "username",
    "blurry": "blurry",
    "missing arms": "missing arms",
    "long neck": "long neck",
    "Humpbacked": "Humpbacked"
  },
  "自定义": {
    "漂亮眼睛": "beautiful detailed eyes",
    "华丽": "gorgeous"
  },
}
console.log('加载JSON文件')
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
      Object.assign(window.globalData, { [item]: data })
    })
    .catch(error => console.error('加载JSON文件时出错:', error));
})
