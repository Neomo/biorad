export default {
  title: '📖Biorad文档',
  description: '伯乐质控、质控软件、实验室质量控制',
  themeConfig: {
    nav: [
      { text: 'Product', link: '/guide/product/biorad' },
      { text: 'Website', link: '/biorad/brsite' },

    ],
	
	outline: [2, 3],
	
	/* 和
	algolia: {
			  appId: 'TNWV69538V',
			  apiKey: '211403667f52d1f9525686a1423e64a5',
			  indexName: 'bioradindex'
    },
	 和 */
	
	
	
	
	sidebar: [
	   {
        text: '简介',
		collapsible: true,
        items: [
          { text: '🧪伯乐质控解决方案', link: '/biorad/bioradinfo' },
          { text: '🖥️常用质控站点', link: '/biorad/brsite' },
		  { text: '💾软件及说明书网盘', link: '/biorad/brsoft' },

        ]
      },
	
	  {
        text: '伯乐质控产品简介',
		collapsible: true,
        items: [
		  { text: '🌐伯乐产品批号', link: '/guide/product/brlot' },
          { text: '👍伯乐定值质控品', link: '/guide/product/biorad' },
		  { text: '☑️伯乐定值项目表', link: '/guide/product/brtest' },
          { text: '📚伯乐室间质评', link: '/guide/product/breqa' },
          { text: '🔒伯乐传染病质控品', link: '/guide/product/brcrb' }, 
		  { text: '💡伯乐其他质控品', link: '/guide/product/brother' }, 
        ]
      },	
	
	
      {
        text: '软件操作与问题处理',
		collapsible: true,
        items: [
          { text: '🔬URT基础操作', link: '/guide/urtrc' },
          { text: '💼QcBox', link: '/guide/qcboxrc' },
		  { text: '🔃UC', link: '/guide/ucrc' },
          { text: '🔥QcTorch', link: '/guide/qctorchrc' },
		  { text: '️⌨️SQL语句处理', link: '/guide/sql' },
        ]
      },
	  
	  {
        text: '常用软件安装',
		collapsible: true,
        items: [
          { text: '📦URT安装', link: '/setup/urt-setup' },
          { text: '📑UC安装', link: '/setup/uc-setup' },
		  { text: '🗳️QcBox', link: '/setup/qcbox-setup' },
          { text: '🔥QcTorch', link: '/setup/qctorch-setup' },
          { text: '💻新客户软件流程', link: '/setup/new-setup' },
        ]
      },
	  
	  
	   {
        text: '其他工具',
		collapsible: true,
        items: [
          { text: '✍️SqlDbx数据库工具', link: '/tool/sqldbx' },
          { text: '📁CHFS文件共享', link: '/tool/chfs' },

        ]
      },
	  

	  
	  
    ]
  }
 
  
  
  
  
}
