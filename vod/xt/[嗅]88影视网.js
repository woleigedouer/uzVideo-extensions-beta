// ignore
//@name:[嗅]88影视网
//@version:1
//@webSite:https://www.88mv.org
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.88mv.org'
// 网站搜索
// https://www.88mv.org/search/search.php?q=wd-%E6%8E%8C%E5%BF%83-pg-1
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/search/search.php?q=wd-@{searchWord}-pg-1'
// 当前网站任意视频详情页
// https://www.88mv.org/guochanju/202502/253359.html
const videoDetailPage = '@{webSite}/guochanju/202502/253359.html'
// 当前网站任意视频播放页
// https://www.88mv.org/vod-play-id-253359-src-1-num-1.html
const videoPlayPage = '@{webSite}/vod-play-id-253359-src-1-num-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://www.88mv.org/vod-type-id-1-pg-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vod-type-id-1-pg-@{page}.html',
    },
    {
        name: '电视剧',
        // https://www.88mv.org/vod-type-id-2-pg-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vod-type-id-2-pg-@{page}.html',
    },
    {
        name: '综艺',
        // https://www.88mv.org/vod-type-id-3-pg-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vod-type-id-3-pg-@{page}.html',
    },
    {
        name: '动漫',
        // https://www.88mv.org/vod-type-id-4-pg-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vod-type-id-4-pg-@{page}.html',
    } 
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#