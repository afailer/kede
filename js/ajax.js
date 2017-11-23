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
