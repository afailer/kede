requirejs.config({
	paths:{
		jquery:"../../js/jquery-1.8.3",
		move:"../basic/move/move"
	}
})

requirejs(["jquery","move"],function($,move){
	$(document).ready(function(){
		move.init();
	})
	window.onscroll=function(){
		move.showTitle(".wideTitle",".wide_f_main");
	}
})
