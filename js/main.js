console.log("模块化开发加载完成");
/*
	配置我们引入的所有的插件
	AMD规范
 */
require.config({
	paths:{
		"jquery":"jquery-3.4.1",
		'jquery-cookie':'jquery.cookie',
		'slide':"slide",//轮播图
		'product':'product',//侧边栏
		'nav':'nav'//头部导航栏
	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		/*
			js文件，声明不遵从AMD规范的js文件
		*/
		"parabola": {
			exports: "_"
		}
	}
})
require(["slide","product",'nav'], function(slide,product,nav){
	slide.banner();
	product.product();
	nav.nav();
})