const enData = [
  { "id": "1", "data": "What a bird man! ", "trans": "你这个鸟人！" },

  { "id": "2", "data": "I wish I had never met you. ", "trans": "我真后悔这辈子遇到你！" },

  { "id": "3", "data": "It’s none of your business.", "trans": "关你屁事!" },

  { "id": "4", "data": "He has a foul mouth. He would just as soon curse you as look at you.", "trans": "他的嘴特脏。从来不把骂人当一回事。" },

  { "id": "5", "data": "Get the fucking my way!", "trans": "他妈的给我滚！" },

  { "id": "6", "data": "The fucking mofo,Iwant to kill you!Cocksucker!", "trans": "你妈的，我要杀了你，贱人！" },

  { "id": "7", "data": "Hey! wise up! ", "trans": "放聪明点好吗?" },

  { "id": "8", "data": "What the fuck are you talking about?", "trans": "你他妈的在说什么？" },

  { "id": "9", "data": "This is such a bitchery. ", "trans": "那是贱女人的行为." },

  { "id": "10", "data": "Stop bitching on my dick!", "trans": "不要在我阴茎前发牢骚!" },

  { "id": "11", "data": "You’re son of bitch! ", "trans": "婊子养的!" },

  { "id": "12", "data": "You are out of your mind. ", "trans": "你脑子有毛病！" },

  { "id": "13", "data": "You have a lot of nerve.", "trans": "脸皮真厚。" },

  { "id": "14", "data": "You’re just a good for nothing bum! ", "trans": "你真是一个废物！/ 你一无是处！" },

  { "id": "15", "data": "Fuck you the fucking fucker！", "trans": "你他妈的真混蛋！" },

  { "id": "16", "data": "Don't give me your attitude. ", "trans": "别跟我摆架子。" },

  { "id": "17", "data": "You’re a bloody genius! ", "trans": "你真是个鬼才了！" },

  { "id": "18", "data": "Cut it out. ", "trans": "省省吧。" },

  { "id": "19", "data": "It's none of your business. ", "trans": "关你屁事！" },

  { "id": "20", "data": "You big shit!", "trans": "你这个大笨蛋！" },

  { "id": "21", "data": "Get away from me! ", "trans": "离我远一点儿！" },

  { "id": "22", "data": "Get off my back. ", "trans": "少跟我罗嗦。" },

  { "id": "23", "data": "You heartless bastard! ", "trans": "你这个狼心狗肺的东西！" },

  { "id": "24", "data": "Don’t push me! ", "trans": "别逼我！" },

  { "id": "25", "data": "Forced to like you a two ", "trans": "你个二逼样" },

  { "id": "26", "data": "Your brain damage ah ", "trans": "你脑残啊！" },

  { "id": "27", "data": "Negative score ，get away！", "trans": "负分，滚粗！" },

  { "id": "28", "data": "Stop screwing/ fooling/ messing around! ", "trans": "别鬼混了！" },

  { "id": "29", "data": "I detest you! ", "trans": "我恨你！" },

  { "id": "30", "data": "You are fucking genius ", "trans": "你他妈太JB有才了！" },

  { "id": "31", "data": "Bull shit ", "trans": "放屁/吹牛逼" },

  { "id": "32", "data": "you are son of a bitch ", "trans": "你个婊子养的" },

  { "id": "33", "data": "You deserve fucking this ", "trans": "你活JB该！" },

  { "id": "34", "data": "Are you shitting/kidding me？ ", "trans": "你TM的逗我玩呐？" },

  { "id": "35", "data": "Go to hell ", "trans": "有多远死多远！" },

  { "id": "36", "data": "What the fuck/hell ", "trans": "哎呀我操！" },

  { "id": "37", "data": "You look like ashit ", "trans": "瞅你那B样！" },

  { "id": "38", "data": "don’t fuck with me ", "trans": "别JB跟我整事。" },

  { "id": "39", "data": "who the hell are you! ", "trans": "你他妈的算个啥！" },

  { "id": "40", "data": "forget about it ", "trans": "拉JB倒吧！" },

  { "id": "41", "data": "what’s your fucking problem ", "trans": "你他妈的有毛病吧你！" },

  { "id": "42", "data": "Fuck ya ", "trans": "草你妈啊！" },

  { "id": "43", "data": "get fuck off ", "trans": "滚犊子，滚远点扇的" },

  { "id": "44", "data": "So what？ ", "trans": "咋地啊？" },

  { "id": "45", "data": "What’s up？ ", "trans": "干哈啊？" },

  { "id": "46", "data": "Pure idiot", "trans": "纯正的傻逼" },

  { "id": "47", "data": "It is a scum", "trans": "简直就一败类" },

  { "id": "48", "data": "And the dog is a", "trans": "与狗是一家" },

  { "id": "49", "data": "Negative IQ imbecile", "trans": "负智商的低能儿" },

  { "id": "50", "data": "Bear force not arrogant", "trans": "熊逼别嚣张" },

  { "id": "51", "data": "Bitch is fucking shame on you", "trans": "婊子真他妈不要脸" },

  { "id": "52", "data": "Simon didn't you demon", "trans": "人妖都没你妖" },

  { "id": "53", "data": "The eunuch trait you all", "trans": "太监的特质你全都有" },

  { "id": "54", "data": "Give me this set", "trans": "少给我来这一套" },

  { "id": "55", "data": "Flower dog circles", "trans": "狗界中的奇葩" },

  { "id": "56", "data": "Stupid moron", "trans": "蠢到极点的窝囊废" },

  { "id": "57", "data": "You horrid scumbag", "trans": "你这个可恶的人渣" },

  { "id": "58", "data": "The base prize for you", "trans": "最贱奖非你莫属" },

  { "id": "59", "data": "The cerebellum developed, not brain", "trans": "小脑发达，大脑没有" },

  { "id": "60", "data": "Bastard you see all stunned", "trans": "王八看见你都被吓晕" },

  { "id": "61", "data": "Bloated coquettish woman", "trans": "臃肿的骚妇" },

  { "id": "62", "data": "Bitch not Bitchy, is bullshit.", "trans": "贱人不犯贱，纯属扯淡" },

  { "id": "63", "data": "Idiotic to myrrh medicine", "trans": "脑残到没药医" },

  { "id": "64", "data": "No matter how you look at it, you are like a pig.", "trans": "不管怎么看，你都像头猪" },

  { "id": "65", "data": "Garbage trash talking", "trans": "垃圾人说垃圾话" },

  { "id": "66", "data": "Local tyrant can't tall, rich and handsome", "trans": "土豪成不了高富帅" },

  { "id": "67", "data": "Son of a bitch is not good", "trans": "龟孙子不乖" },

  { "id": "68", "data": "Heart very dirty", "trans": "内心无比肮脏" },

  { "id": "69", "data": "The ugly not fit to be seen", "trans": "丑的不堪入目" },

  { "id": "70", "data": "Birdlike, not arrogant", "trans": "鸟样，别嚣张" },

  { "id": "71", "data": "Ignorance of wretched asshole", "trans": "无知猥琐的混蛋" },

  { "id": "72", "data": "Mind full of feces", "trans": "脑子里装满粪便" },

  { "id": "73", "data": "Psychiatric patients with severe", "trans": "精神病重症患者" },

  { "id": "74", "data": "Stop fooling around!", "trans": "别鬼混了！" },

  { "id": "75", "data": "Unable to compliment your IQ", "trans": "无法恭维你的智商" },

  { "id": "76", "data": "Scumbag representative", "trans": "人渣的代表" },

  { "id": "77", "data": "Can't stand you pretend", "trans": "不能容忍你的装逼" },

  { "id": "78", "data": "The typical animal", "trans": "禽兽里的典型" },

  { "id": "79", "data": "Only the Bitch prostitution", "trans": "只会卖淫的贱人" },

  { "id": "80", "data": "The dog paralysis", "trans": "狗麻痹" },

  { "id": "81", "data": "Monster from outer space", "trans": "外太空来的怪物" },

  { "id": "82", "data": "Stink Fox, get away as far as you can", "trans": "臭狐狸，死远点" },

  { "id": "83", "data": "Don't Bitchy lousy bitch", "trans": "烂婊子别犯贱" },

  { "id": "84", "data": "Roll back home to play cucumber", "trans": "滚回狗窝玩黄瓜" },

  { "id": "85", "data": "The evil scumbag", "trans": "万恶的人渣" },

  { "id": "86", "data": "A normal person", "trans": "人模人样的畜生" },

  { "id": "87", "data": "Nobody wants little bastard", "trans": "没人要的小杂种" },

  { "id": "88", "data": "Bitch character is low", "trans": "贱人的品格低下" },

  { "id": "89", "data": "Explosion you Chrysanthemum", "trans": "爆你菊花" },

  { "id": "90", "data": "Mind filled with sand", "trans": "脑子装满沙" },

  { "id": "91", "data": "Chest big idiotic", "trans": "胸大的脑残" },

  { "id": "92", "data": "You fucking is a donkey", "trans": "你他妈的就是一头驴" },

  { "id": "93", "data": "The top of the idiot", "trans": "顶级白痴的无赖" },

  { "id": "94", "data": "No culture PigHead", "trans": "没文化的猪头" }
]

module.exports = {
  enData
}