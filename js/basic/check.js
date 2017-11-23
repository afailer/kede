define(["jquery","pb"],function(){
	return{
		getCheckCode:function(){
			var str="";
			for(var v=0;v<4;v++){
				str+=String.fromCharCode(getRand(65,90));
			}
			return str;
		},
		checkMobile:function(tel){
			var reg=/^1[3|5|7|8]\d{9}$/;
			return reg.test(tel)
		},
		checkPwd:function(pwd){
			var regNum=/\d+/;
			var regletter=/[a-zA-Z]+/;
			var flag=true;
			if(pwd.length<6||pwd.length>16){
				flag=false;
				console.log(pwd.length);
			}
			if(!regNum.test(pwd)){
				flag=false;
				console.log("没有数字")
			}
			if(!regletter.test(pwd)){
				flag=false;
				console.log("没有字幕")
			}
			return flag;	
		},
		getCookie:function(key){
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
		},
		setLoginState:function(user){
			if(user==""){
				
			}else{
				$("#regist").css("display","none");
				$("#login").css("display","none");
				$("#exit").css("display","inline-block");
				$("#welcom").html(user.tel+" 欢迎光临");
			}
		},
		setCookie:function(key,value,day){//设置cookie
		     if( day>0 ){
                 var d = new Date();
                 d.setDate( d.getDate() +day );
                 document.cookie = key + "=" + value + ";expires=" + d;
		     }else{
		         document.cookie = key + "=" + value;
		     }
		},
		removeCookie:function(key){
		     setCookie(key,"",-1);
		}
	}
})
