// ignore
//@name:[嗅]里里影院
//@version:1
//@webSite:https://www.liic.cc
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.liic.cc'
// 网站搜索
// https://www.liic.cc/vodsearch/-------------.html?wd=%E5%87%A1%E4%BA%BA%E6%AD%8C
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/vodsearch/-------------.html?wd=@{searchWord}'
// 当前网站任意视频详情页
// https://www.liic.cc/voddetail/220523.html
const videoDetailPage = '@{webSite}/voddetail/220523.html'
// 当前网站任意视频播放页
// https://www.liic.cc/vodplay/220523-2-1.html
const videoPlayPage = '@{webSite}/vodplay/220523-2-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://www.liic.cc/vodshow/1--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/1--------@{page}---.html',
    },
    {
        name: '电视剧',
        // https://www.liic.cc/vodshow/2--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/2--------@{page}---.html',
    },
    {
        name: '动漫',
        // https://www.liic.cc/vodshow/4--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/4--------@{page}---.html',
    },
    {
        name: '综艺',
        // https://www.liic.cc/vodshow/3--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/3--------@{page}---.html',
    },
    {
        name: '短剧',
        // https://www.liic.cc/vodshow/5--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/5--------@{page}---.html',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#