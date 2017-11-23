function createPromise(url, data){
     if(data){
           url=url+"?"+data;
     }
     
     var promise=new Promise(function(success,failed){
           var ajax=null;
           if( window.XMLHttpRequest ){
                ajax = new XMLHttpRequest();
           }else{
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
           }
           ajax.open("GET",url);
           ajax.send();
           ajax.onreadystatechange=function(){
                if(ajax.readyState==4&&ajax.status==200){
                     success(ajax.responseText);
                }
                setTimeout(function(){
                     failed();
                },4000)
           }
           
     });
     return promise;
}
function ajaxPost(url,callback,data){
            var ajax = new XMLHttpRequest();
            ajax.open("POST",url);
            ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            if(data ){
                  ajax.send(data);
            }else{
                  ajax.send();
            }
            ajax.onreadystatechange = function(){
                  if( ajax.readyState == 4 && ajax.status == 200 ){
                        if( callback ){
                              callback(ajax.responseText);
                        }
                  }
            }
      }
var ajax=null;
function getdata(url,callback,data){
     if(arguments.length==3){
           url=url+"?"+data;
     }
     if(ajax==null){
           if(window.XMLHttpRequest){
                ajax=new XMLHttpRequest();
           }else{
                ajax=new ActiveXObject();
           }
     }
     console.log(url);
     ajax.open("get",url);
     ajax.send();
     ajax.onreadystatechange=function(){
           if(ajax.readyState==4 && ajax.status==200){
                if(callback){
                     callback(ajax.responseText);
                }
           }
     }
     
}
function getCookie(key){
			if( document.cookie ){//如果有cookie
          	var str = document.cookie;
            var arr = str.split("; ");
           	for( var i = 0 ; i < arr.length ; i++ ){
                var item = arr[i].split("=");
                if( item[0]==key ){
                     return item[1];//找到了 key对应的值
                }
           	}
           	//如果cookie中没有key  找不到对应的值
            return "";
     		}
	        //如果没有cookie  
	        return "";
	}
function addCookie(key,value,day){//设置cookie
		     if( day>0 ){
                 var d = new Date();
                 d.setDate( d.getDate() +day );
                 document.cookie = key + "=" + value + ";expires=" + d;
		     }else{
		         document.cookie = key + "=" + value;
		     }
		}

function addToCart(id,product){
	var pListStr=getCookie("product");
	var pList=[]
	if(pListStr!=null&&pListStr!=""){
		pList=JSON.parse(pListStr);
	}else{
		
	}
	pList.push(product);
	addCookie("product",JSON.stringify(pList));
}
var sum=0;
function flyToChart(startPoint,endPoint,num,point){
 		//起点
// 		var startPoint = {
// 			x : goods.offsetLeft +goods.offsetWidth/2,
// 			y : goods.offsetTop
// 		}
 		//终点
// 		var endPoint = {
// 			x : cart.offsetLeft + cart.offsetWidth/2,
// 			y : cart.offsetTop
// 		}
		//最高点
		var topPoint=null;
		if(startPoint.y>endPoint.y){
			topPoint = {
 				x : endPoint.x - (endPoint.x-startPoint.x)/3,
 				y : endPoint.y - 50
 			}
		}else{
			topPoint = {
				x : endPoint.x - (endPoint.x-startPoint.x)/3,
 				y : startPoint.y - 50
 			}
		}
 		
 		
 		
 		//根据三点坐标确定抛物线的系数
		var a = ((startPoint.y - endPoint.y) * (startPoint.x - topPoint.x) - (startPoint.y - topPoint.y) * (startPoint.x - endPoint.x)) / ((startPoint.x * startPoint.x - endPoint.x * endPoint.x) * (startPoint.x - topPoint.x)-(startPoint.x * startPoint.x - topPoint.x * topPoint.x) * (startPoint.x - endPoint.x));  
				
		var b = ((endPoint.y - startPoint.y) - a * (endPoint.x * endPoint.x - startPoint.x * startPoint.x)) / (endPoint.x - startPoint.x);  
				
		var c = startPoint.y - a * startPoint.x * startPoint.x - b * startPoint.x;
 	
 		//创建商品
 		var x = startPoint.x;//商品的初始横坐标
 		var y = startPoint.y;//商品的初始纵坐标
 		
 		point.style.width = point.style.height = "30px";
 		document.body.appendChild(point);
 		point.style.position = "absolute";
 		point.style.left = x + "px";
 		point.style.top = y + "px";
 		//商品运动  y = a*x*x + b*x + c
 		var timer = null;
 		timer = setInterval(function(){
 			x = x + 5 ;//改变商品的横向速度
 			y =  a*x*x + b*x + c; //根据抛物线方程 得到y的值
 			if( x < endPoint.x ){
	 			point.style.left = x + "px";
	 			point.style.top = y + "px";
 			}else{
 				clearInterval(timer);
 				point.remove();
 				//num.innerHTML = ++ sum;
 			}
 		},8)
 	}