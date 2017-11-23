requirejs.config({
	paths:{
		jquery:"../jquery-1.8.3",
		move:"../basic/move",
		ck:"../basic/check",
		pb:"../public"
	}
})

requirejs(["jquery","move","ck"],function($,move,ck){
	onload = function(){
		
	}
//		var user=ck.getCookie("user");
//		console.log(user);
//		if(user!=null){
//			ck.setLoginState(user);
//		}
		
	
})
