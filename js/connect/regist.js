requirejs.config({
	paths:{
		jquery:"../jquery-1.8.3",
		ck:"../basic/check",
		pb:"../public"
	}
	
})

requirejs(["jquery","ck"],function($,ck){
	$(document).ready(function(){
		$(".ma span").html(ck.getCheckCode());
	})
	var mobileFlag=false;
	$(".mobile input").eq(0).blur(function(){
		if(ck.checkMobile($(this).val())==false){
			mobileFlag=false;
			$(".notice span").eq(0).html("手机号码错误");
		}else{
			mobileFlag=true;
			$(".notice span").eq(0).html("");
		}
	})
	var pwdFlag=false;
	$(".password input").eq(0).blur(function(){
		if(ck.checkPwd($(this).val())==false){
			pwdFlag=false;
			$(".notice span").eq(0).html("密码格式错误");
		}else{
			pwdFlag=true;
			$(".notice span").eq(0).html("");
		}
	})
	$(".registBtn").eq(0).click(function(){
		if(mobileFlag&&pwdFlag){
			var template=`{tel:${$(".mobile input").eq(0).val()},pwd:${$(".password input").eq(0).val()}}`;
			ck.setCookie("user",template);
			location.href="index.html"
		}else{
			alert(mobileFlag+"请输入手机号密码"+pwdFlag);
		}
	})
})