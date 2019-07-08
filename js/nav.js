//头部导航栏
//AMD规范
define(['jquery'],function($){
	function nav(){
		console.log("头部导航栏加载完成");
		$.ajax({
			url:"../data/phone.json",
			success:function(arr){
				for(var i = 0;i < arr.length;i++){
					//每次循环创建一个ul
					var childs = arr[i].child;

					$(`<ul></ul>`).appendTo($('#show'));
					//创建li标签,存储手机
					// var ul1 = 
					for(var j = 0;j < childs.length;j++){
						$(
							`<li>
								<a href="">
									<div class="navImgBox">
									
									</div>
									<p>${childs[j].title}</p>
									<span>${childs[j].details}</span>
								</a>
							</li>`
							).appendTo($(`#show ul:eq(${i})`))
					}
				}
			},
			error:function(msg){
				alert(msg)
			}
		})
		var ok1 = true;
		var ok2 = true;
		// 鼠标划入对应的的li，则下面的对应的nav栏出现
		var liNum = 0;
		$('#nav_top ul li').not(".not").mouseenter(function(){
			liNum = $(this).index();
			console.log(liNum)
			$('#show').stop().animate({
				height:'324px'
			},500)
			//先清除上一个ul
			$("#show ul").stop().animate({
				height:'0'
			},0)
			//eq 添加变量需要用字符串拼接
			$("#show ul:eq("+liNum+")").stop().animate({
				height:'324px'
			},500)
			ok1 = false;

		})

		//鼠标离开li，则nav栏消失
		$('#nav_top ul li').not(".not").mouseleave(function(){
			if(ok1){$('#show').stop().animate({
							height:'0'
						},500);
						//eq 添加变量需要用字符串拼接
						$("#show ul").stop().animate({
							height:'0'
						},500)}
		})

		$('#nav_top ul .not').mouseenter(function(){
			$('#show').stop().animate({
				height:'0'
			},500);
			//eq 添加变量需要用字符串拼接
			$("#show ul").stop().animate({
				height:'0'
			},500)
		})

		//鼠标移到下拉nav上时，nav还在
		$("#show").mouseenter(function(){
			//$("#show").css('display','block')
			$("#show").css('height','324px')
			ok2 = false;
		})
		$("#show").mouseleave(function(){
			//$("#show").css('display','block')
			$("#show").css('height','0px')
			ok2 = true;
			ok1 = true;
		})
		$("#show ul").mouseleave(function(){
			$("#show ul").css('height','324px')
			// ok2 = false;
		})
		$(".header").mouseenter(function(){
			$('#show').stop().animate({
				height:'0'
			},500);
			//eq 添加变量需要用字符串拼接
			$("#show ul").stop().animate({
				height:'0'
			},500)
		})

	}
	return {
		nav:nav
	}
})