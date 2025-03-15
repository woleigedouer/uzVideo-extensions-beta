// ignore
//@name:[嗅]clicli_带筛选
//@version:1
//@webSite:https://www.lmm96.com
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.lmm96.com'
// 网站搜索
// https://www.clicli.pro/search.html?wd=%E6%9F%AF%E5%8D%97
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/search.html?wd=@{searchWord}'
// 当前网站任意视频详情页
// https://www.clicli.pro/bangumi/4101.html
const videoDetailPage = '@{webSite}/bangumi/4101.html'
// 当前网站任意视频播放页
// https://www.clicli.pro/video/4101/1-1.html
const videoPlayPage = '@{webSite}/video/4101/1-1.html'


const filterListUrl = '@{webSite}/show/@{filterId3}/id/@{mainId}/@{filterId2}/page/@{page}/year/@{filterId1}.html'

const firstClass = [
  {
    name: '番剧',
    id: '1',
    filter: [
      {
        name: '年份',
        list: [
          {
            name: '全部',
            id: '',
            key: '@{filterId1}',
          },
          {
            name: '2024',
            id: '2024',
            key: '@{filterId1}',
          },
          {
            name: '2023',
            id: '2023',
            key: '@{filterId1}',
          },
          {
            name: '2022',
            id: '2022',
            key: '@{filterId1}',
          },
          {
            name: '2021',
            id: '2021',
            key: '@{filterId1}',
          },
          {
            name: '2020',
            id: '2020',
            key: '@{filterId1}',
          },
          {
            name: '2019',
            id: '2019',
            key: '@{filterId1}',
          },
          {
            name: '2018',
            id: '2018',
            key: '@{filterId1}',
          },
          {
            name: '2017',
            id: '2017',
            key: '@{filterId1}',
          },
          {
            name: '2016',
            id: '2016',
            key: '@{filterId1}',
          },
          {
            name: '2015',
            id: '2015',
            key: '@{filterId1}',
          },
          {
            name: '2014',
            id: '2014',
            key: '@{filterId1}',
          },
          {
            name: '2013',
            id: '2013',
            key: '@{filterId1}',
          },
          {
            name: '2012',
            id: '2012',
            key: '@{filterId1}',
          },
          {
            name: '2011',
            id: '2011',
            key: '@{filterId1}',
          },
          {
            name: '2010',
            id: '2010',
            key: '@{filterId1}',
          },
          {
            name: '2009',
            id: '2009',
            key: '@{filterId1}',
          },
          {
            name: '2008',
            id: '2008',
            key: '@{filterId1}',
          },
          {
            name: '2007',
            id: '2007',
            key: '@{filterId1}',
          },
          {
            name: '2006',
            id: '2006',
            key: '@{filterId1}',
          },
          {
            name: '2005',
            id: '2005',
            key: '@{filterId1}',
          },
          {
            name: '2004',
            id: '2004',
            key: '@{filterId1}',
          },
          {
            name: '2003',
            id: '2003',
            key: '@{filterId1}',
          },
          {
            name: '2002',
            id: '2002',
            key: '@{filterId1}',
          },
          {
            name: '2001',
            id: '2001',
            key: '@{filterId1}',
          },
          {
            name: '2000',
            id: '2000',
            key: '@{filterId1}',
          },
        ],
      },
      {
        name: '字母',
        list: [
          {
            name: '字母',
            id: '',
            key: '@{filterId2}',
          },
          {
            name: 'A',
            id: 'letter/A',
            key: '@{filterId2}',
          },
          {
            name: 'B',
            id: 'letter/B',
            key: '@{filterId2}',
          },
          {
            name: 'C',
            id: 'letter/C',
            key: '@{filterId2}',
          },
          {
            name: 'D',
            id: 'letter/D',
            key: '@{filterId2}',
          },
          {
            name: 'E',
            id: 'letter/E',
            key: '@{filterId2}',
          },
          {
            name: 'F',
            id: 'letter/F',
            key: '@{filterId2}',
          },
          {
            name: 'G',
            id: 'letter/G',
            key: '@{filterId2}',
          },
          {
            name: 'H',
            id: 'letter/H',
            key: '@{filterId2}',
          },
          {
            name: 'I',
            id: 'letter/I',
            key: '@{filterId2}',
          },
          {
            name: 'J',
            id: 'letter/J',
            key: '@{filterId2}',
          },
          {
            name: 'K',
            id: 'letter/K',
            key: '@{filterId2}',
          },
          {
            name: 'L',
            id: 'letter/L',
            key: '@{filterId2}',
          },
          {
            name: 'M',
            id: 'letter/M',
            key: '@{filterId2}',
          },
          {
            name: 'N',
            id: 'letter/N',
            key: '@{filterId2}',
          },
          {
            name: 'O',
            id: 'letter/O',
            key: '@{filterId2}',
          },
          {
            name: 'P',
            id: 'letter/P',
            key: '@{filterId2}',
          },
          {
            name: 'Q',
            id: 'letter/Q',
            key: '@{filterId2}',
          },
          {
            name: 'R',
            id: 'letter/R',
            key: '@{filterId2}',
          },
          {
            name: 'S',
            id: 'letter/S',
            key: '@{filterId2}',
          },
          {
            name: 'T',
            id: 'letter/T',
            key: '@{filterId2}',
          },
          {
            name: 'U',
            id: 'letter/U',
            key: '@{filterId2}',
          },
          {
            name: 'V',
            id: 'letter/V',
            key: '@{filterId2}',
          },
          {
            name: 'W',
            id: 'letter/W',
            key: '@{filterId2}',
          },
          {
            name: 'X',
            id: 'letter/X',
            key: '@{filterId2}',
          },
          {
            name: 'Y',
            id: 'letter/Y',
            key: '@{filterId2}',
          },
          {
            name: 'Z',
            id: 'letter/Z',
            key: '@{filterId2}',
          },
          {
            name: '0-9',
            id: 'letter/0-9',
            key: '@{filterId2}',
          },
        ],
      },
      {
        name: '排序',
        list: [
          {
            name: '时间排序',
            id: '',
            key: '@{filterId3}',
          },
          {
            name: '人气排序',
            id: 'by/hits',
            key: '@{filterId3}',
          },
          {
            name: '评分排序',
            id: 'by/score',
            key: '@{filterId3}',
          },    
        ],
      },
    ],
  },
  {
    name: '剧场版',
    id: '2',
    filter: [
      {
        name: '年份',
        list: [
          {
            name: '全部',
            id: '',
            key: '@{filterId1}',
          },
          {
            name: '2024',
            id: '2024',
            key: '@{filterId1}',
          },
          {
            name: '2023',
            id: '2023',
            key: '@{filterId1}',
          },
          {
            name: '2022',
            id: '2022',
            key: '@{filterId1}',
          },
          {
            name: '2021',
            id: '2021',
            key: '@{filterId1}',
          },
          {
            name: '2020',
            id: '2020',
            key: '@{filterId1}',
          },
          {
            name: '2019',
            id: '2019',
            key: '@{filterId1}',
          },
          {
            name: '2018',
            id: '2018',
            key: '@{filterId1}',
          },
          {
            name: '2017',
            id: '2017',
            key: '@{filterId1}',
          },
          {
            name: '2016',
            id: '2016',
            key: '@{filterId1}',
          },
          {
            name: '2015',
            id: '2015',
            key: '@{filterId1}',
          },
          {
            name: '2014',
            id: '2014',
            key: '@{filterId1}',
          },
          {
            name: '2013',
            id: '2013',
            key: '@{filterId1}',
          },
          {
            name: '2012',
            id: '2012',
            key: '@{filterId1}',
          },
          {
            name: '2011',
            id: '2011',
            key: '@{filterId1}',
          },
          {
            name: '2010',
            id: '2010',
            key: '@{filterId1}',
          },
          {
            name: '2009',
            id: '2009',
            key: '@{filterId1}',
          },
          {
            name: '2008',
            id: '2008',
            key: '@{filterId1}',
          },
          {
            name: '2007',
            id: '2007',
            key: '@{filterId1}',
          },
          {
            name: '2006',
            id: '2006',
            key: '@{filterId1}',
          },
          {
            name: '2005',
            id: '2005',
            key: '@{filterId1}',
          },
          {
            name: '2004',
            id: '2004',
            key: '@{filterId1}',
          },
          {
            name: '2003',
            id: '2003',
            key: '@{filterId1}',
          },
          {
            name: '2002',
            id: '2002',
            key: '@{filterId1}',
          },
          {
            name: '2001',
            id: '2001',
            key: '@{filterId1}',
          },
          {
            name: '2000',
            id: '2000',
            key: '@{filterId1}',
          },
        ],
      },
      {
        name: '字母',
        list: [
          {
            name: '字母',
            id: '',
            key: '@{filterId2}',
          },
          {
            name: 'A',
            id: 'letter/A',
            key: '@{filterId2}',
          },
          {
            name: 'B',
            id: 'letter/B',
            key: '@{filterId2}',
          },
          {
            name: 'C',
            id: 'letter/C',
            key: '@{filterId2}',
          },
          {
            name: 'D',
            id: 'letter/D',
            key: '@{filterId2}',
          },
          {
            name: 'E',
            id: 'letter/E',
            key: '@{filterId2}',
          },
          {
            name: 'F',
            id: 'letter/F',
            key: '@{filterId2}',
          },
          {
            name: 'G',
            id: 'letter/G',
            key: '@{filterId2}',
          },
          {
            name: 'H',
            id: 'letter/H',
            key: '@{filterId2}',
          },
          {
            name: 'I',
            id: 'letter/I',
            key: '@{filterId2}',
          },
          {
            name: 'J',
            id: 'letter/J',
            key: '@{filterId2}',
          },
          {
            name: 'K',
            id: 'letter/K',
            key: '@{filterId2}',
          },
          {
            name: 'L',
            id: 'letter/L',
            key: '@{filterId2}',
          },
          {
            name: 'M',
            id: 'letter/M',
            key: '@{filterId2}',
          },
          {
            name: 'N',
            id: 'letter/N',
            key: '@{filterId2}',
          },
          {
            name: 'O',
            id: 'letter/O',
            key: '@{filterId2}',
          },
          {
            name: 'P',
            id: 'letter/P',
            key: '@{filterId2}',
          },
          {
            name: 'Q',
            id: 'letter/Q',
            key: '@{filterId2}',
          },
          {
            name: 'R',
            id: 'letter/R',
            key: '@{filterId2}',
          },
          {
            name: 'S',
            id: 'letter/S',
            key: '@{filterId2}',
          },
          {
            name: 'T',
            id: 'letter/T',
            key: '@{filterId2}',
          },
          {
            name: 'U',
            id: 'letter/U',
            key: '@{filterId2}',
          },
          {
            name: 'V',
            id: 'letter/V',
            key: '@{filterId2}',
          },
          {
            name: 'W',
            id: 'letter/W',
            key: '@{filterId2}',
          },
          {
            name: 'X',
            id: 'letter/X',
            key: '@{filterId2}',
          },
          {
            name: 'Y',
            id: 'letter/Y',
            key: '@{filterId2}',
          },
          {
            name: 'Z',
            id: 'letter/Z',
            key: '@{filterId2}',
          },
          {
            name: '0-9',
            id: 'letter/0-9',
            key: '@{filterId2}',
          },
        ],
      },
      {
        name: '排序',
        list: [
          {
            name: '时间排序',
            id: '',
            key: '@{filterId3}',
          },
          {
            name: '人气排序',
            id: 'by/hits',
            key: '@{filterId3}',
          },
          {
            name: '评分排序',
            id: 'by/score',
            key: '@{filterId3}',
          },    
        ],
      },
    ],
  },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#