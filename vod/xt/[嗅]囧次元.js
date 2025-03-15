// ignore
//@name:[嗅]囧次元
//@version:1
//@webSite:https://www.9ciyuan.cc
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.9ciyuan.cc'
// 网站搜索
// https://www.9ciyuan.cc/index.php/vod/search.html?wd=%E6%88%91%E7%8B%AC%E8%87%AA%E5%8D%87%E7%BA%A7&submit=
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/index.php/vod/search.html?wd=@{searchWord}&submit='
// 当前网站任意视频详情页
// https://www.9ciyuan.cc/index.php/vod/detail/id/22.html
const videoDetailPage = '@{webSite}/index.php/vod/detail/id/22.html'
// 当前网站任意视频播放页
// https://www.9ciyuan.cc/index.php/vod/play/id/22/sid/1/nid/1.html
const videoPlayPage = '@{webSite}/index.php/vod/play/id/22/sid/1/nid/1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '新番放送',
        // https://www.9ciyuan.cc/index.php/vod/show/id/20/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/show/id/20/page/@{page}.html',
    },
    {
        name: '追番计划',
        // https://www.9ciyuan.cc/index.php/vod/show/id/4/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/show/id/4/page/@{page}.html',
    }, 
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#