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
      ['文本标签'],
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
          content: [
            'Rel规定文档之间连接关系',
            'Type规定文档类型',
            'Herf被链接文档位置'
          ]
        }, {
          titleContent: '链接标题图标的俩种方式',
          content: [
            '特指标题栏旁边图标（必须）',
            '<link rel="icon" href="ico地址" type="image/x-icon">',
            '图标（备用）',
            '<link rel="shortcut icon" href="ico地址" type="image/x-icon">',
            '注意：图标要用 16*16 色的。。。(保证了兼容性，无论在哪个地方都可以显示)'
          ]
        }
      ]
    },
    'Meta标签': {
      title: 'Meta标签',
      data: [{
          titleContent: '<meta> 标签',
          content: [
            '属性定义了与文档相关联的名称/值对。',
            '例如：关键词，网页描述，页面使用语言，自动刷新并指向新的页面，实现网页转换时的动态效果，控制页面缓冲，网页定级评价，控制网页显示的窗口等！',
          ]
        },
        {
          titleContent: '属性',
          content: [
            'name属性',
            'name属性主要用于描述网页',
            'name属性语法格式是：＜meta name=”名称” content=”具体的参数值，可以是汉字”＞ ',
            'Keywords(关键字)',
            '说明：keywords用来告诉搜索引擎你网页的关键字是什么。',
            'description(网站内容描述)',
            '说明：description用来告诉搜索引擎你的网站主要内容。',
            'content 属性（必须）',
            'content 属性提供了名称/值对中的值。该值可以是任何有效的字符串。',
            'content 属性始终要和 name 属性或 http-equiv 属性一起使用。',
          ]
        }
      ]
    },
    '文本标签': {
      title: '文本标签',
      data: [{
        titleContent: '',
        content: [
          '标题 <h1—h6>',
          '段落 <p>',
          '换行<br>',
          '预定义格式 <pre>',
          '注释 <!--文本-->',
          '上标<sup></sup>',
          '下标<sub></sub>',
          '<Strong> <em>都是表示一种重要等级',
          '如需使用样式请使用css，（或者使用css重置这些标签的样式）语义话标签都是如此',
          '页面划分<div>（块元素）',
          '该标签用来指出页面的逻辑区域情况下，他是不显示的，但是可以在其中应用样式',
          '小范围划分Span（行元素）'
        ]
      }]
    },
    '图像': {
      title: '图像',
      data: [{
        titleContent: 'Img ',
        content: [
          '<img  src = “路径（不能从根目录起）”alt =“图片描述”title=提示内容  height=“大小”/>',
          '当单独使用图片宽或高属性（等比例缩放）'
        ]
      }]
    }
  },
  css: {
    '行块': {
      title: '行块',
      data: [{
          titleContent: '行内元素（内联元素，\h5称为短语元素）',
          content: [
            ' 是行内元素必须置于块中',
            '行内元素可以设置内边距和水平外边距',
            '行内元素特征：',
            '(1)设置宽高无效',
            '(2)对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，即会撑大空间',
            '(3)不会自动进行换行',
            'span,   strong,   em,  br,  img ,  input,  label, a，sub，sup，'
          ]
        },
        {
          titleContent: '块元素',
          content: [
            '块级元素可以设置宽度高度边距 ',
            '块状元素特征：',
            '(1)能够识别宽高',
            '(2)Margin（外边距）和Padding（内边距）的上下左右均对其有效',
            '(3)可以自动换行',
            '(4)多个块状元素标签写在一起，默认排列方式为从上至下',
            'div  , Hx，p  , form,   ul,  li ,  ol, dl,    form, table，pre，'
          ]
        }, {
          titleContent: '行内块元素',
          content: [
            '行内块状元素特征：',
            '(1)不自动换行',
            '(2)能够识别宽高，内外边距',
            '(3)默认排列方式为从左到右',
            '使用场景：不换行但是还有块元素特性'
          ]
        },
        {
          titleContent: '行/块转换',
          content: [
            '(1)display:inline;转换为行内元素',
            '(2)display:block;转换为块状元素',
            '(3)display:inline-block;转换为行内块状元素'
          ]
        },
      ]
    },
    '语义化标签': {
      title: '语义化标签',
      data: [{
          titleContent: '行标签',
          content: [
            'small-字体缩小，用于注解 ',
            'big-放大字符 ',
            'dfn-标识专用术语 ',
            'code-定义其内容是代码文本',
            'kbd-定义键盘文本 ',
            'samp-定义样本文本 ',
            'var-定义变量',
            'cite-定义引用 ',
            'abbr-定义缩写，结合title提示使用，默认样式为下划虚线',
            ' ins-定义其中内容为添加，默认样式下划线 ',
            'del-定义其中内容为删除，默认样式删除线 ',
            'cite-引用blockquote-引述独立内容，属性cite，值为引述内容来源的Url',
            'q-引述短语，属性cite，值为引述内容来源的Url',
            'u-注解，默认下划线',
            'mark-高亮',
            'progress-进度条，属性max（总量），value（完成度）',
            'meter-刻度条，属性：略',
            'time-时间，属性：datetime规定时间显示样式',
            'address-作者联系方式',
            'bdo定义文字方向，属性dir，值ltr，rtl',
            'wbr-断点换行，浏览器自动判断是否要换行',
            'figure结合figcaption用于展示img标题',
            'picture,source,响应式图片标签'
          ]
        },
        {
          titleContent: '块标签',
          content: [
            '页眉-header，应用场景：标题内容，导航',
            '导航块-nav，用于标识一些链接，通常在header标签内， 应用场景：主菜单导航，侧边栏导航，页内导航',
            '主体内容-main，IE不支持',
            '文章块-article，应用场景，论坛帖子，报纸文章，博客条目，用户评论',
            '区块-section，应用场景，章节，页眉，页脚，文档中的其他部分',
            '侧边栏-aside，应用场景：作为主体内容的附属信息（放在article标签内使用），侧边栏',
            '页脚-footer，应用场景：版权信息、使用条款链接，联系信息等'
          ]
        }
      ]
    },
    'Css编码规范': {
      title: 'Css编码规范',
      data: [{
        titleContent: '',
        content: [
          '选择器和后面{之间要有一个空格',
          '属性名和：（冒号之间）没有空格：（冒号）和属性有一个空格结尾有；分号'
        ]
      }]
    },
    '单位': {
      title: '单位',
      data: [{
        titleContent: '',
        content: [
          'em相对于父元素，rem相对于根元素。Px像素',
          '颜色单位',
          '单词',
          '16位数',
          'Rgb',
          'Rgba',
          'HSL：依次、色调（-360，360），饱和度（0%，100%），亮度（0%,100%）',
          'HSLA'
        ]
      }]
    },
    'Css引入方式': {
      title: 'Css引入方式',
      data: [{
          titleContent: '行内样式',
          content: [
            '不赞成，修改不方便',
            '在单行使用时标签内应有Style=’css属性’;'
          ]
        },
        {
          titleContent: '内部样式',
          content: [
            ' 也不赞成，即在head标签内写入。',
            '即在head内引入一个css文件<style type="text/css"></style><style> 标签用于定义html文档样式信息（其实就是为了在html中定义css样式所用的标签）使用时必须有type属性'
          ]
        }, {
          titleContent: '外部样式',
          content: [
            '使用<link>标签<link type="text/css" rel="styleSheet"  href="CSS文件路径" />',
            '使用@import关键字导入<style type="text/css">@import      url（“路径”）',
            '当三种都使用时优先度：行内>内嵌>链接'
          ]
        }
      ]
    }
  }
}


// '': {
//     	  title: '',
//     	  data: [{
//     	      titleContent: '',
//     	      content: [
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  			  '',
//     	  		  ]
//     	    },
//     	    {
//     	      titleContent: '',
//     	      content: [
//     	  			  ' '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  '',
//     				  ]
//     	    }, {
//     	      titleContent: '',
//     	      content: [
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  			 '',
//     	  		  ]
//     	    }
//     	  ]
//     	}
