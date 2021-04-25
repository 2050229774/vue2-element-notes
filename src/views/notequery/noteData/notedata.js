export const titleData = [
  'html',
  'css',
  'js',
  'es6'
]


export const noteData = {
  html: {
    title: 'html',
    data: [
      ['Link标签'],
      ['Meta标签'],
      ['文本标签',
        '标题',
        '段落',
        '换行',
        '预定义格式',
        '注释'
      ],
      ['图像']
    ]
  },
  css: {
    title: 'css',
    data: [
      ['Css标签分类', '行块', '语义化标签'],
      ['单位'],
      ['Css编码规范'],
      ['Css引入方式'],
      ['选择器', '简单选择器', '关系选择器'],
      ['文本', '字体样式', '文本格式'],
      ['边框'],
      ['内边距'],
      ['外边距'],
      ['居中', '块级元素居中', '行内元素居中'],
      ['布局', '标准流', '浮动流', '清除浮动', '定位'],
      ['动画'],
      ['过渡'],
      ['2D3D转换'],
      ['媒体查询']
    ]
  },
  js: {
    title: 'js',
    data: [
      ['基本知识'],
      ['变量'],
      ['数据类型'],
      ['基本运算'],
      ['程序结构'],
      ['正则表达式'],
      ['字符串处理'],
      ['数组'],
      ['对象'],
      ['Json'],
      ['函数', '作用域及作用域链', '闭包', '回调函数', '构造函数和原型', 'Call、apply、bind'],
      ['事件'],
      ['节点', '元素节点', '文本节点', '属性节点'],
      ['DOM'],
      ['Bom']
    ]
  },
  es6: {
    title: 'es6',
    data: [
      ['let 和 const '],
      ['变量的解构赋值'],
      ['字符串扩展'],
      ['字符串新增方法'],
      ['数值扩展'],
      ['Math对象扩展'],
      ['函数扩展'],
      ['数组扩展'],
      ['对象'],
      ['对象新增方法'],
      ['symbol'],
      ['SetWeakSet'],
      ['MapWeakMap'],
      ['Proxy对象'],
      ['Reflect对象'],
      ['Promise 对象'],
    ]
  }
}


export const noteContenData = {
  html: {
    'Link标签': {
      title: 'Link标签',
      data: [{
          titleContent: 'HTML <link> 标签',
          content: [
			  '实例',
			  '链接一个外部样式表：',
			  '单标签',
			  '<head>',
			  '<link rel="stylesheet" type="text/css" href="theme.css" />',
			  '</head>'
		  ]
        },
        {
          titleContent: '属性',
          content: `Rel规定文档之间连接关系
Type规定文档类型
Herf被链接文档位置`
        }, {
          titleContent: '链接标题图标的俩种方式',
          content: `特指标题栏旁边图标（必须）
<link rel="icon" href="ico地址" type="image/x-icon">
图标（备用）
<link rel="shortcut icon" href="ico地址" type="image/x-icon">

注意：图标要用 16*16 色的。。。(保证了兼容性，无论在哪个地方都可以显示)`
        }
      ]
    },
    'Meta标签': {
      title: 'Meta标签',
      data: [{
          titleContent: 'dafkldja',
          content: 'dhahfddadf'
        },
        {
          titleContent: '爱好if大幅度ad',
          content: '发即可的垃圾弗兰克打发'
        }
      ]
    }
  },
  css: {
    '行块': {
      title: '行块',
      data: [{
          titleContent: '行内元素（内联元素，\h5称为短语元素）',
          content: `是行内元素必须置于块中
行内元素可以设置内边距和水平外边距
行内元素特征：
(1)设置宽高无效
(2)对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，即会撑大空间(3)不会自动进行换行`
        },
        {
          titleContent: '块元素',
          content: `块级元素可以设置宽度高度边距
块状元素特征：
(1)能够识别宽高
(2)Margin（外边距）和Padding（内边距）的上下左右均对其有效
(3)可以自动换行
(4)多个块状元素标签写在一起，默认排列方式为从上至下`
        }
      ]
    },
    '语义化标签': {
      title: '语义化标签',
      data: [{
        titleContent: '',
        content: `small-字体缩小，用于注解
big-放大字符
dfn-标识专用术语
code-定义其内容是代码文本
kbd-定义键盘文本
samp-定义样本文本
var-定义变量
cite-定义引用
abbr-定义缩写，结合title提示使用，默认样式为下划虚线
 ins-定义其中内容为添加，默认样式下划线 del-定义其中内容为删除，默认样式删除线 cite-引用
blockquote-引述独立内容，属性cite，值为引述内容来源的Url
q-引述短语，属性cite，值为引述内容来源的Url
u-注解，默认下划线
h5新增
mark-高亮
progress-进度条，属性max（总量），value（完成度）
meter-刻度条，属性：略
time-时间，属性：datetime规定时间显示样式
address-作者联系方式
bdo定义文字方向，属性dir，值ltr，rtl
wbr-断点换行，浏览器自动判断是否要换行
figure结合figcaption用于展示img标题
picture,source,响应式图片标签`
      }]
    }
  }
}
