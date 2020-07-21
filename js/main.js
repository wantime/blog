;$(function()
{
	'use strict';
	
	var sidebar = $('#sidebar'), //选择侧栏
		mask = $('.mask'),		//选择mask
		sidebar_trigger = $('#sidebar_trigger'),//触发器
		backbutton = $('.back-to-top'),	//选择top按钮
		goDown = $('.goDown'),
		nav = $('nav');
function showsidebar()
		{
			mask.fadeIn();
			sidebar.css('right',0);				//显示函数
		}
function hidesidebar()							//隐藏函数
		{
			mask.fadeOut();
			sidebar.css('right',-sidebar.width());
		}
		sidebar_trigger.on('click',showsidebar)
		mask.on('click',hidesidebar)
		goDown.on('click',function(){
			$('html,body').animate({
				scrollTop:$('#read').offset().top
			},800)
		})
		backbutton.on('click',function()
		{
			$('html,body').animate({
				scrollTop: 0
			},800)
		})
		$(window).on('scroll',function(){		//监听滚动
			if($(window).scrollTop()>$(window).height()*0.8)
				backbutton.fadeIn();
			else
				backbutton.fadeOut();
			if ($(window).scrollTop()>$(window).height()*0.3)
				nav.attr('class','scroll')
			else
				nav.attr('class','');
		})
		$(window).trigger('scroll');
})