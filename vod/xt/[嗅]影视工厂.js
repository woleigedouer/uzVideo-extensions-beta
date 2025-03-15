// ignore
//@name:[嗅]影视工厂
//@version:1
//@webSite:https://www.ysgc.fun
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.ysgc.fun'
// 网站搜索
// https://www.ysgc.fun/vodsearch/-------------.html?wd=%E6%BB%A4%E9%95%9C
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/vodsearch/-------------.html?wd=@{searchWord}'
// 当前网站任意视频详情页
// https://www.ysgc.fun/voddetail/182840.html
const videoDetailPage = '@{webSite}/voddetail/182840.html'
// 当前网站任意视频播放页
// https://www.ysgc.fun/vodplay/182840-1-1.html
const videoPlayPage = '@{webSite}/vodplay/182840-1-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://www.ysgc.fun/vodshow/1--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/1--------@{page}---.html',
    },
    {
        name: '剧集',
        // https://www.ysgc.fun/vodshow/2--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/2--------@{page}---.html',
    },
    {
        name: '综艺',
        // https://www.ysgc.fun/vodshow/3--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/3--------@{page}---.html',
    },
    {
        name: '动漫',
        // https://www.ysgc.fun/vodshow/4--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/4--------@{page}---.html',
    },
    {
        name: '短剧',
        // https://www.ysgc.fun/vodshow/33--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/23--------@{page}---.html',
    },
    {
        name: '记录',
        // https://www.ysgc.fun/vodshow/24--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/4--------@{page}---.html',
    }
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#