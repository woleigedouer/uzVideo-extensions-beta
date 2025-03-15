// ignore
//@name:[嗅]老王电影
//@version:1
//@webSite:https://laowang.co
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://laowang.co'
// 网站搜索
// https://laowang.co/s.html?wd=%E7%94%84%E5%AC%9B%E4%BC%A0
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/s.html?wd=@{searchWord}'
// 当前网站任意视频详情页
// https://laowang.co/d-562857.html
const videoDetailPage = '@{webSite}/d-562857.html'
// 当前网站任意视频播放页
// https://laowang.co/p/562857-9-1.html
const videoPlayPage = '@{webSite}/p/562857-9-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://laowang.co/vs/1--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vs/1--------@{page}---.html',
    },
    {
        name: '电视剧',
        // https://laowang.co/vs/2--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vs/2--------@{page}---.html',
    },
    {
        name: '动漫',
        // https://laowang.co/vs/4--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vs/4--------@{page}---.html',
    },
    {
        name: '综艺',
        // https://laowang.co/vs/3--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vs/3--------@{page}---.html',
    },
    {
        name: '短剧',
        // https://laowang.co/vs/5--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vs/5--------@{page}---.html',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#