// ignore
//@name:[嗅]海纳TV
//@version:1
//@webSite:https://www.hainatv.net
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.hainatv.net'
// 网站搜索
// https://www.hainatv.net/index.php/vod/search.html?wd=%E9%9A%BE%E5%93%84&submit=
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/index.php/vod/search.html?wd=@{searchWord}&submit='
// 当前网站任意视频详情页
// https://www.hainatv.net/index.php/vod/detail/id/59097.html
const videoDetailPage = '@{webSite}/index.php/vod/detail/id/59097.html'
// 当前网站任意视频播放页
// https://www.hainatv.net/index.php/vod/play/id/59097/sid/2/nid/1.html
const videoPlayPage = '@{webSite}/index.php/vod/play/id/59097/sid/2/nid/1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://www.hainatv.net/index.php/vod/show/id/1/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/show/id/1/page/@{page}.html',
    },
    {
        name: '剧集',
        // https://www.hainatv.net/index.php/vod/show/id/2/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/show/id/2/page/@{page}.html',
    },
    {
        name: '综艺',
        // https://www.hainatv.net/index.php/vod/show/id/3/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/show/id/3/page/@{page}.html',
    },
    {
        name: '动漫',
        // https://www.hainatv.net/index.php/vod/show/id/4/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/show/id/4/page/@{page}.html',
    },
    {
        name: '短剧',
        // https://www.hainatv.net/index.php/vod/show/id/59/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/show/id/59/page/@{page}.html',
    }
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#