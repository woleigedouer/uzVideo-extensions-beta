// ignore
//@name:[嗅]风铃动漫
//@version:1
//@webSite:https://www.aafun.cc
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.aafun.cc'
// 网站搜索
// https://www.aafun.cc/feng-s.html?wd=%E7%8B%AC%E8%87%AA%E5%8D%87%E7%BA%A7&submit=
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/feng-s.html?wd=@{searchWord}&submit='
// 当前网站任意视频详情页
// https://www.aafun.cc/feng-n/YrCCCS.html
const videoDetailPage = '@{webSite}/feng-n/YrCCCS.html'
// 当前网站任意视频播放页
// https://www.aafun.cc/f/YrCCCS-2-1.html
const videoPlayPage = '@{webSite}/f/YrCCCS-2-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '新番',
        // https://www.aafun.cc/vodshow/id/uCCCCS/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/id/uCCCCS/page/@{page}.html',
    },
    {
        name: '番剧',
        // https://www.aafun.cc/vodshow/id/0CCCCS/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/id/0CCCCS/page/@{page}.html',
    },
    {
        name: '剧场',
        // https://www.aafun.cc/vodshow/id/HCCCCS/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/id/HCCCCS/page/@{page}.html',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#