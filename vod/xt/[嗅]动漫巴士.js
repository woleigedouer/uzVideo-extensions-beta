// ignore
//@name:[嗅]动漫巴士
//@version:1
//@webSite:https://dm84.tv
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://dm84.tv'
// 网站搜索
// https://dm84.tv/s----------.html?wd=%E9%81%AE%E5%A4%A9
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/s----------.html?wd=@{searchWord}'
// 当前网站任意视频详情页
// https://dm84.tv/v/4100.html
const videoDetailPage = '@{webSite}/v/4100.html'
// 当前网站任意视频播放页
// https://dm84.tv/p/4100-1-99.html
const videoPlayPage = '@{webSite}/p/4100-1-99.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '国漫',
        // https://dm84.tv/list-1-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/list-1-@{page}.html',
    },
    {
        name: '日漫',
        // https://dm84.tv/list-2-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/list-2-@{page}.html',
    },
    {
        name: '欧美动漫',
        // https://dm84.tv/list-3-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/list-3-@{page}.html',
    },
    {
        name: '电影',
        // https://dm84.tv/list-4-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/list-4-@{page}.html',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#