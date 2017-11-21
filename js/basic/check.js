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
			var regNum=/^\d+$/;
			var regletter=/[a-zA-Z]+/;
			var flag=true;
			if(pwd.length<6||pwd.length>16){
				flag=false;
			}
			if(!regNum.test(pwd)){
				flag=false;
			}
			if(!regletter.test(pwd)){
				flag=false;
			}
			return flag;	
		},
		
		
	}
})
