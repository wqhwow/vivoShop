//轮播图js代码
//做从AMD代码规范
define(['jquery'],function($){
	function slide(){
		var aBtns = $("#play").find("ol").find('li');
		var oUl = $('#play').find("ul");
		var aLis = oUl.find('li');//图片所在的li

		var iNow = 0;
		var timer = null;
		//鼠标点击
		aBtns.click(function(){
			iNow = $(this).index();
			tab();
		})

		//启动一个定时器
		
		timer = setInterval(function(){
			iNow++;
			tab();
		}, 4000);

		//添加鼠标移入移出
		$("#play").mouseenter(function(){
			clearInterval(timer);
		})

		$("#play").mouseleave(function(){
			timer = setInterval(function(){
				iNow++;
				tab();
			}, 4000);
		})


		function tab(){
			aBtns.attr("class","").eq(iNow).attr("class","active");
			//判断是否是下标为5的图片
			if(iNow == aBtns.length){
				aBtns.eq(0).attr("class", "active");
			}
			oUl.animate({top: -523 * iNow}, 10, function(){
				//判断是否是最后一张图片
				if(iNow == aBtns.length){
					iNow = 0;
					oUl.css("top", 0);
				}
			})
		}
	}
	return{
		banner:slide//banner对外暴露
	}
})