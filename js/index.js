window.onload=function(){
	$(".rightMenu li").mouseenter(function(){
		$(this).css("background","red");
		$(this).find(".s").stop().animate({"left":-61},600)
	}).mouseleave(function(){
		$(this).css("background","green")
		$(this).find(".s").stop().animate({"left":0},600)
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
	$("#backTop").click(function(){
		$("body,html").animate({scrollTop:0},500);
	})
	autoPlay(0);
	loadHtml();
	loadData();
	
}
var flagTop=true;
window.onscroll=function(){
	showTitle(".wideTitle",".wide_f_main");
	console.log("--------"+$(document).scrollTop())
	if($(document).scrollTop()>400&&flagTop){
		$("#backTop").css("display","block");
	}else{
		$("#backTop").css("display","none");
	}
}
function loadData(){
	getdata("../kede/index.json",addData,"");
}
function addData(data){
	var product=JSON.parse(data);
	var str=""
	for(var no in product.itemList){
		var p=product.itemList[no];
		console.log("---------"+p.name);
		if(p.type=="01"){
			str+=`<div id="wide_f_item" class="wide_f_item">
					<a href="">
						<img class="wide_f_item_img" src="${p.img}"/>
						<p class="wide_f_item_price">${p.price}</p>
						<p class="wide_f_item_name">${p.name}</p>
						<p class="wide_f_item_sales">${p.sales}</p>
					</a>
					<p class="addCart">加入购物车</p>
				</div>`
		}else if(p.type=="02"){
			str+=`<div class="wide_f_item_bigger">
					<ul>
						<li><a href=""><img src="${p.img1}" alt="" /></a></li>
						<li><a href=""><img src="${p.img2}" alt="" /></a></li>
					</ul>
				</div>`
		}
		
	}

	$(".wide_f_right").html(str);
	//$("#f1_right").html(str);
	addCart();
}
function addCart(){
	$(".wide_f_item").on({
		"mouseenter":function(){
			$(this).find(".addCart").stop().animate({"right":0},500);	
		},
		"mouseleave":function(){
			$(this).find(".addCart").stop().animate({"right":-80},500);
		}
	})
	$(".addCart").bind("click",function(e){
		var product={
			"img":$(this).parent().find(".wide_f_item_img")[0].src,
			"type":"01",
			"price":$(this).parent().find(".wide_f_item_price").eq(0).html(),
			"name":$(this).parent().find(".wide_f_item_name").eq(0).html(),		
			"sales":$(this).parent().find(".wide_f_item_sales").eq(0).html()
		}
		
		addToCart(12,product);
		console.log(e.clientX+"  "+window.offsetTop);
		var startpoint={
			x:e.pageX,
			y:e.pageY
		}
		var endpoint={
			x:$(".flyCart")[0].offsetLeft,
			y:$(".flyCart")[0].offsetTop+$(document).scrollTop()
		}
		var v=$(this).parent().find(".wide_f_item_img")[0].cloneNode(true);
		flyToChart(startpoint,endpoint,$(".num")[0],v);
	})
	
}
var timer=null;
function loadHtml(){
	$("#indexMenu").load("public.html #menu",function(){
//		$(".allProduct").mouseenter(function(){
//			$(".productTypeList").css("display","block");
//		}).mouseleave(function(){
//			$(".productTypeList").css("display","none");
//		})
		$(".productTypeList").css("display","block");
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
	})
	$("#top").load("public.html #top");
}
function autoPlay(currentIndex){
	index=currentIndex;
	timer=setInterval(function(){
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
function showTitle(titleName,bodyName,scrollTop){
//alert($(bodyName).length)
	for(var v=0;v<$(bodyName).length;v++){
		
		if($(document).scrollTop()-$(bodyName)[v].offsetTop>0&&($(document).scrollTop()-$(bodyName)[v].offsetTop)<($(bodyName)[v].offsetHeight-$(titleName)[v].offsetHeight)){
		//if($(document).scrollTop()-$(bodyName)[v].offsetTop>0&&($(document).scrollTop()-$(bodyName).[v].offsetTop)<($(bodyName).[v].offsetHeight-$(titleName).[v].offsetHeight)){
			//$(titleName).eq(v).css("position","fixed").css("left",$(bodyName).[v].offsetLeft).css("top","0");
			$(titleName).eq(v).css("left",$(titleName)[v].offsetLeft).css("position","fixed").css("top",0);
		}else{
			$(titleName).eq(v).css("position","");
		}
	}
}