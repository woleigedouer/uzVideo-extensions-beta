// ignore
//@name:[嗅]girigirilove
//@version:1
//@webSite:https://anime.girigirilove.com
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 0

// 网站主页
const webSite = 'https://anime.girigirilove.com'
// 网站搜索
// https://anime.girigirilove.com/search/-------------/?wd=%E6%9F%AF%E5%8D%97
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/search/-------------/?wd=@{searchWord}'
// 当前网站任意视频详情页
// https://anime.girigirilove.com/GV26394/
const videoDetailPage = '@{webSite}/GV26394/'
// 当前网站任意视频播放页
// https://anime.girigirilove.com/playGV26394-1-1/
const videoPlayPage = '@{webSite}/playGV26394-1-1/'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '番剧',
        // https://anime.girigirilove.com/show/2--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/show/2--------@{page}---/',
    },
    {
        name: '美番',
        // https://anime.girigirilove.com/show/3--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/show/3--------@{page}---/',
    },
    {
        name: '剧场版',
        // https://anime.girigirilove.com/show/21--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/show/21--------@{page}---/',
    },
    {
        name: '真人番剧',
        // https://anime.girigirilove.com/show/20--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/show/20--------@{page}---/',
    },
    {
        name: 'BD副音轨',
        // https://anime.girigirilove.com/show/24--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/show/24--------@{page}---/',
    },
    {
        name: '演唱會&周邊活動&其他',
        // https://anime.girigirilove.com/show/26--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/show/26--------@{page}---/',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#