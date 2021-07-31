const request = require('request');
const fs = require('fs');
let options1 = {
  'method': 'GET',
  'url': 'http://fuck.lvkaixuan.top/public/index/index/getFuckText?type=2', //带不带脏字更改type类型即可，type:1||2
  'headers': {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) uTools/2.1.0 Chrome/91.0.4472.124 Electron/13.1.7 Safari/537.36"
  }
};
// 获取数据
var asyncFunc = function(options) {
  return new Promise(function(resolve, reject) {
    request(options, function(error, response) {
      if (error) throw new Error(error);
      resolve(response.body)
    });
  });
};
// 对象去重
function duplicate(arr) {
  var obj = {};
  arr = arr.reduce(function(a, b) {
    obj[b.data] ? '' : obj[b.data] = true && a.push(b);
    return a;
  }, [])
  return arr;
}

var start = async function() {
  var arr = [];
  for (var i = 0; i < 2300; i++) {
    arr.push({
      id: i,
      data: await asyncFunc(options1)
    })
    console.log(`正在爬取第${i}条`)
  }
  let res = duplicate(arr)
  fs.writeFileSync("./library/tender.json", JSON.stringify(res, null, "\t"))
  console.log("已经全部爬取完成,总条数为：" + res.length)
}

start();