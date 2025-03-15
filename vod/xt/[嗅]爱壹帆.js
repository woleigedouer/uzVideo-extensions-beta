// ignore
//@name:[嗅]爱壹帆
//@version:1
//@webSite:https://www.iyf.lv
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.iyf.lv'
// 网站搜索
// https://www.iyf.lv/s/%E5%AD%A4%E8%88%9F-------------/
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/s/@{searchWord}-------------/'
// 当前网站任意视频详情页
// https://www.iyf.lv/iyftv/81749/
const videoDetailPage = '@{webSite}/iyftv/81749/'
// 当前网站任意视频播放页
// https://www.iyf.lv/iyfplay/81749-1-1/
const videoPlayPage = '@{webSite}/iyfplay/81749-1-1/'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '电影',
        // https://www.iyf.lv/k/1--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/k/1--------@{page}---/',
    },
    {
        name: '剧集',
        // https://www.iyf.lv/k/2--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/k/2--------@{page}---/',
    },
    {
        name: '综艺',
        // https://www.iyf.lv/k/3--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/k/3--------@{page}---/',
    },
    {
        name: '动漫',
        // https://www.iyf.lv/k/4--------2---/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/k/4--------@{page}---/',
    } 
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#