//侧边栏商品列表js
//AMD代码规范
define(['jquery'],function($){
	function product(){
		$.ajax({
			url:"../data/product.json",
			success:function(arr){
				//通过循环添加数据到页面上
				console.log("加载侧边栏完成");
				for(var i = 0;i < arr.length;i++){
					//每循环一次创建一个div，存储数据,插到nav_left_detail中
						$(`<div id = 'new_product' class="new${i}" >
							<p>${arr[i].title}
								<a href="">全部
									<span>${arr[i].title}</span>
								</a>
							</p>
							<ul></ul>
						</div>`).appendTo($("#nav_left_detail"));
					var childs = arr[i].child;
					var new1 = `.new${i}`;
					for(var j = 0;j < childs.length;j++){
						$(`<li><a href="">
									<span>${childs[j].title}</span>
								</a>
							</li>`
							).appendTo(new1 + " ul")

							/*var new1 = `.new${i}`
							console.log(new1 + " ul")*/
					}
				}

			},
			error:function(msg){
				console.log("加载商品数据失败")
			}
		})

		var aBtns = $('#sidebar').find("li");
		var aDivBox = $('nav_left_detail');
		var aDivs = aDivBox.find('div');

		var num = 0
		//如果鼠标在侧边导航栏上，则对应的详细列表页出现
		aBtns.mouseenter(function(){
			num = aBtns.index(this);
			$('#nav_left_detail').css('display','block')
			$(`.new${num}`).css('display','block')
			aBtns.eq(num).css('background','white');
			//aBtns.eq(num).css('width','500px');


		})
		//如果鼠标离开侧边导航栏上的li，则对应的详细列表页消失
		aBtns.mouseleave(function(){
			num = aBtns.index(this);
			$('#nav_left_detail').css('display','none');
			$(`.new${num}`).css('display','none')
			aBtns.eq(num).css('background','');
			//aBtns.eq(num).css('width','');
		})
		//如果鼠标进入侧边导航栏的详细列表页，则列表页不消失
		$("#nav_left_detail").mouseenter(function(){
			$('#nav_left_detail').css('display','block');
			$(`.new${num}`).css('display','block')
		})
		//如果鼠标离开侧边导航栏的详细列表页，则列表页消失
		$("#nav_left_detail").mouseleave(function(){
			$('#nav_left_detail').css('display','none');
			$(`.new${num}`).css('display','none')
		})

	}

	return {
		product:product
	} 
})