$.fn.cwtips=function(prm){
	var data = this.attr("data-postion");
	var data_tips = this.attr("data-tips");
	var dataobj={};	
	if(typeof(data)=="undefined"){
		dataobj.tips_class="tips_top";
		dataobj.tips_span="tr_top";
	}else{
		dataobj=swtch(data);		
		addtips(data,this,data_tips,dataobj);
	}	
	this.css("z-index",'100').siblings().css("z-index","10");
	var data = this.attr("data-tips");
	if(this.attr("str_tips")=="true"){		
		removetips(this);
	}else{
		this.find('.tips').stop().fadeIn(200);
		this.attr("str_tips","true")
	}
}
function swtch(data){		
		var objclass={};		
	switch(data){
		case "top":
			objclass.tips_class="tips_top";
			objclass.tips_span="tr_top";
		break;
		case "left":			
			objclass.tips_class="tips_left";
			objclass.tips_span="tr_left";
			
		break;
		case "right":
			objclass.tips_class="tips_right";
			objclass.tips_span="tr_right";
		break;
		case "bottom":
			objclass.tips_class="tips_bottom";
			objclass.tips_span="tr_bottom";
		break;
		default:
			objclass.tips_class="tips_top";
			objclass.tips_span="tr_top";
		break;
	}
	return objclass;
}

// 添加提示框
function addtips(data,tips,data_tips,obj){
	tips.append("<div class='tips "+obj.tips_class+"'>"+data_tips+"<span class='"+obj.tips_span+"'></span></div>");
	if(data=="left" || data=="right"){
		var tipsdiv = tips.find(".tips");
		//获取提示框的宽度+左右边距
		opts = tipsdiv.width()+parseInt(tipsdiv.css("padding-left"))+parseInt(tipsdiv.css("padding-right"))
		if(data=="left"){
			tipsdiv.css("left",-(opts+12));
		}else{
			tipsdiv.css("right",-(opts+12));
		}		
	}
}

// 销毁提示框
function removetips(tips){
	tips.find('.tips').stop().fadeOut(200)
	tips.find('.tips').remove()
	tips.attr("str_tips","");
}