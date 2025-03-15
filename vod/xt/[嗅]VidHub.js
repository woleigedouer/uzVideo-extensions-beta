// ignore
//@name:[嗅]VidHub
//@version:1
//@webSite:https://vidhub3.top
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://vidhub3.top'
// 网站搜索
// https://vidhub3.top/vodsearch/-------------.html?wd=%E9%9A%BE%E5%93%84
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/vodsearch/-------------.html?wd=@{searchWord}'
// 当前网站任意视频详情页
// https://vidhub3.top/voddetail/213593.html
const videoDetailPage = '@{webSite}/voddetail/213593.html'
// 当前网站任意视频播放页
// https://vidhub3.top/vodplay/213593-1-1.html
const videoPlayPage = '@{webSite}/vodplay/213593-1-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://vidhub3.top/vodshow/1--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/1--------@{page}---.html',
    },
    {
        name: '连续剧',
        // https://vidhub3.top/vodshow/2--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/2--------@{page}---.html',
    },
    {
        name: '综艺',
        // https://vidhub3.top/vodshow/3--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/3--------@{page}---.html',
    },
    {
        name: '动漫',
        // https://vidhub3.top/vodshow/4--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodshow/4--------@{page}---.html',
    } 
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#