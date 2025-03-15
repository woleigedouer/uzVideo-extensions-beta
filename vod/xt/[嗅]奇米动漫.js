// ignore
//@name:[嗅]奇米动漫
//@version:1
//@webSite:https://www.qimiqimi.net
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.qimiqimi.net'
// 网站搜索
// https://www.qimiqimi.net/vod/search/wd/%E7%81%AB%E5%BD%B1%E5%BF%8D%E8%80%85.html
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/vod/search/wd/@{searchWord}.html'
// 当前网站任意视频详情页
// https://www.qimiqimi.net/detail/qunhuazhanfangfangruxiuluo.html
const videoDetailPage = '@{webSite}/detail/qunhuazhanfangfangruxiuluo.html'
// 当前网站任意视频播放页
// https://www.qimiqimi.net/play/qunhuazhanfangfangruxiuluo/2/1.html
const videoPlayPage = '@{webSite}/play/qunhuazhanfangfangruxiuluo/2/1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '新番连载',
        // https://www.qimiqimi.net/type/xinfan/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/type/xinfan/page/@{page}.html',
    },
    {
        name: '完结番组',
        // https://www.qimiqimi.net/type/riman/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/type/riman/page/@{page}.html',
    },
    {
        name: '热门国漫',
        // https://www.qimiqimi.net/type/guoman/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/type/guoman/page/@{page}.html',
    },
    {
        name: '剧场&OVA',
        // https://www.qimiqimi.net/type/jcdm/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/type/jcdm/page/@{page}.html',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#