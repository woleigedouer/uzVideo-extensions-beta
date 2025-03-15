// ignore
//@name:[嗅]BILFUN
//@version:1
//@webSite:https://bilfun.cc
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://bilfun.cc'
// 网站搜索
// https://bilfun.cc/bilfunsearch/-------------.html?wd=%E9%95%BF%E7%9B%B8%E6%80%9D
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/bilfunsearch/-------------.html?wd=@{searchWord}'
// 当前网站任意视频详情页
// https://bilfun.cc/bilfundetail/135601.html
const videoDetailPage = '@{webSite}/bilfundetail/135601.html'
// 当前网站任意视频播放页
// https://bilfun.cc/bilfunplay/135601-4-1.html
const videoPlayPage = '@{webSite}/bilfunplay/135601-4-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://bilfun.cc/bilfunshow/1--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/bilfunshow/1--------@{page}---.html',
    },
    {
        name: '电视剧',
        // https://bilfun.cc/bilfunshow/2--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/bilfunshow/2--------@{page}---.html',
    },
    {
        name: '综艺',
        // https://bilfun.cc/bilfunshow/3--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/bilfunshow/3--------@{page}---.html',
    },
    {
        name: '动漫',
        // https://bilfun.cc/bilfunshow/4--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/bilfunshow/4--------@{page}---.html',
    },
    {
        name: '记录',
        // https://bilfun.cc/bilfunshow/5--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/bilfunshow/5--------@{page}---.html',
    }
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#