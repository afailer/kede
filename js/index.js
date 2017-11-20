var basicGreen="#90c221";
$(function(){	
	$(".rightMenu li").mouseenter(function(){
		$(this).css("background","red");
		$(this).find(".s").stop().animate({"left":-61},600)
	}).mouseleave(function(){
		$(this).css("background","green")
		$(this).find(".s").stop().animate({"left":0},600)
	})
})
$("#linkMid ol li").mouseenter(function(){
	var index=$(this).index();
	$(this).css("background","#90c221").siblings().css("background","#333");
	$("#linkMid ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	changBg(index);
	clearInterval(timer);
}).mouseleave(function(){
	autoPlay($(this).index());
})
var timer=null;
autoPlay(0);
function autoPlay(currentIndex){
	console.log(currentIndex);
	index=currentIndex;
	timer=setInterval(function(){
		
		console.log("autoplay"+index);
		if(index==4){
			index=0;
		}
		changBg(index)
		$("#linkMid ol li").eq(index).css("background","#90c221").siblings().css("background","#333");
		$("#linkMid ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		++index;
	}.bind(this),2500);
	
}
function changBg(index){
	if(index==3){
		$("#link").css("background-color","#e9bc6b");
	}else if(index==2){
		$("#link").css("background-color","#ae2338");
	}else if(index==1){
		$("#link").css("background-color","#a8e6ff");
	}else if(index==0){
		$("#link").css("background-color","#fd98d0");
	}
}
$(".allProduct").mouseenter(function(){
	$(".productTypeList").css("display","block");
}).mouseleave(function(){
	$(".productTypeList").css("display","none");
})
$(".productTypeList>li").mouseenter(function(){
	$(this).find(".product").css("display","block");
	$(this).find("em").css("display","none");
	$(this).addClass("borderSelect").siblings().addClass("borderOther");
	$(this).prev().addClass("borderPrev");
}).mouseleave(function(){
	$(this).find(".product").css("display","none");
	$(this).find("em").css("display","block");
	$(this).removeClass("borderSelect").siblings().removeClass("borderOther");
	$(this).prev().removeClass("borderPrev");
})
var wides=document.getElementsByClassName("wide_f_main");
var wideTitles=document.getElementsByClassName("wideTitle");

window.onscroll=function(){
	for(var v=0;v<wides.length;v++){
		console.log($(document).scrollTop()+" "+wides[v].offsetTop)
		if($(document).scrollTop()-wides[v].offsetTop>0&&($(document).scrollTop()-wides[v].offsetTop)<(wides[v].offsetHeight-wideTitles[v].offsetHeight)){	  
			  wideTitles[v].style.left=wides[v].offsetLeft;
			  wideTitles[v].style.position="fixed";
			  wideTitles[v].style.top=0;
		}else{
			wideTitles[v].style.position="";
		}
	}
}
