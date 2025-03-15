// ignore
//@name:[嗅]HDmoli
//@version:1
//@webSite:https://hdmoli.pro
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://hdmoli.pro'
// 网站搜索
// https://hdmoli.pro/search.php?searchword=%E8%83%86%E5%A4%A7%E5%85%9A&submit=
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/search.php?searchword=@{searchWord}&submit='
// 当前网站任意视频详情页
// https://hdmoli.pro/movie/index2331.html
const videoDetailPage = '@{webSite}/movie/index2331.html'
// 当前网站任意视频播放页
// https://hdmoli.pro/play/2331-0-0.html
const videoPlayPage = '@{webSite}/play/2331-0-0.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://hdmoli.pro/mlist/index1-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/mlist/index1-2.html',
    },
    {
        name: '剧集',
        // https://hdmoli.pro/mlist/index2-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/mlist/index2-2.html',
    },
    {
        name: '动画',
        // https://hdmoli.pro/mlist/index41-2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/mlist/index41-2.html',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#