const { clipboard } = require('electron')
const $tender = require('./library/tender') //不带脏字词库
const $force = require('./library/force') //带脏字词库
const $enfuck = require('./library/engilsh') //英文版骂人词库

const _ = require('lodash');

const handleResult = function(data) {
  clipboard.writeText(data, 'selection');
};

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
// 自动粘贴回车发送
function autoSubmitMenu(data) {
  window.utools.hideMainWindow()
  let rdom = randomNum(1, data.length)
  let result = data[rdom].data
  handleResult(result)
  if (utools.isMacOs()) {
    // macos 模拟粘贴
    utools.simulateKeyboardTap('v', 'command')
  } else {
    // windows linux 模拟粘贴
    utools.simulateKeyboardTap('v', 'ctrl')
  }
  // 模拟键盘敲击 Enter
  utools.simulateKeyboardTap('enter')

  // 自动粘贴后退出插件
  window.utools.outPlugin()
}
// 温柔模式
let tender_list = []
$tender["tenderData"].forEach(v => {
    tender_list.push({
      title: v.data,
    })
  })
  // 粗暴模式
let force_list = []
$force["forceData"].forEach(v => {
    force_list.push({
      title: v.data,
    })
  })
  // 英文模式
let enfuck_list = []
$enfuck["enData"].forEach(v => {
  enfuck_list.push({
    title: v.data,
    description: v.trans
  })
})

window.exports = {
  "fuck-tender": { //不带脏字
    mode: "list",
    args: {
      enter: (action, callbackSetList) => {
        let ranList = _.shuffle(tender_list)
        callbackSetList(ranList);
      },
      search: (action, searchWord, callbackSetList) => {
        let newList = tender_list.filter(v => {
          return v.title.indexOf(searchWord) != -1
        })
        callbackSetList(newList)
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        handleResult(itemData.title)
        window.utools.hideMainWindow()
      },
      placeholder: "可根据关键词搜索"
    }
  },
  "fuck-force": { //带脏字
    mode: "list",
    args: {
      enter: (action, callbackSetList) => {
        let ranList = _.shuffle(force_list)
        callbackSetList(ranList);
      },
      search: (action, searchWord, callbackSetList) => {
        let newList = force_list.filter(v => {
          return v.title.indexOf(searchWord) != -1
        })
        callbackSetList(newList)
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        handleResult(itemData.title)
        window.utools.hideMainWindow()
      },
      placeholder: "可根据关键词搜索"
    }
  },
  "fuck-en": { //英文版
    mode: "list",
    args: {
      enter: (action, callbackSetList) => {
        let ranList = _.shuffle(enfuck_list)
        callbackSetList(ranList);
      },
      search: (action, searchWord, callbackSetList) => {
        let newList = enfuck_list.filter(v => {
          return v.title.indexOf(searchWord) != -1
        })
        callbackSetList(newList)
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        handleResult(itemData.title)
        window.utools.hideMainWindow()
      },
      placeholder: "可根据关键词搜索"
    }
  },
  "fuck-tender-menu": { //右键菜单温柔模式
    mode: "none",
    args: {
      enter: () => {
        autoSubmitMenu($tender["tenderData"])
      }
    }
  },
  "fuck-force-menu": { //右键菜单粗暴模式
    mode: "none",
    args: {
      enter: () => {
        autoSubmitMenu($force["forceData"])
      }
    }
  }
}