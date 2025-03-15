// ignore
//@name:[嗅]播剧影视
//@version:1
//@webSite:https://www.boju.cc
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.boju.cc'
// 网站搜索
// https://www.boju.cc/vodsearch.html?wd=j
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/vodsearch.html?wd=@{searchWord}'
// 当前网站任意视频详情页
// https://www.boju.cc/v/11888.html
const videoDetailPage = '@{webSite}/v/11888.html'
// 当前网站任意视频播放页
// https://www.boju.cc/p/11888-1-1.html
const videoPlayPage = '@{webSite}/p/11888-1-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://www.boju.cc/vodshow/movie--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/movie--------@{page}---.html',
    },
    {
        name: '连续剧',
        // https://www.boju.cc/vodshow/tvplay--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/tvplay--------@{page}---.html',
    },
    {
        name: '综艺',
        // https://www.boju.cc/vodshow/tvshow--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/tvshow--------@{page}---.html',
    },
    {
        name: '动漫',
        // https://www.boju.cc/vodshow/dongman--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/dongman--------@{page}---.html',
    },
    {
        name: '直播',
        // https://www.boju.cc/vodshow/Live--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/Live--------@{page}---.html',
    },
    {
        name: '短剧',
        // https://www.boju.cc/vodshow/duanju--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/duanju--------@{page}---.html',
    },
     
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#