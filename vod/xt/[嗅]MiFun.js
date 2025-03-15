// ignore
//@name:[嗅]MiFun
//@version:1
//@webSite:http://www.mifun.tw
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'http://www.mifun.tw'
// 网站搜索
// http://www.mifun.tw/vodsearch/?wd=%E7%8B%AC%E8%87%AA%E5%8D%87%E7%BA%A7
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/vodsearch/?wd=@{searchWord}'
// 当前网站任意视频详情页
// http://www.mifun.tw/voddetail/19135/
const videoDetailPage = '@{webSite}/voddetail/19135/'
// 当前网站任意视频播放页
// http://www.mifun.tw/vodplay/19135-1-1/
const videoPlayPage = '@{webSite}/vodplay/19135-1-1/'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '番剧',
        // http://www.mifun.tw/vodtype/1-2/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodtype/1-@{page}/',
    },
    {
        name: '国创',
        // http://www.mifun.tw/vodtype/2-2/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodtype/2-@{page}/',
    },
    {
        name: '剧场',
        // http://www.mifun.tw/vodtype/3-2/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodtype/3-@{page}/',
    },
    {
        name: '美漫',
        // http://www.mifun.tw/vodtype/4-2/
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/vodtype/4-@{page}/',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#