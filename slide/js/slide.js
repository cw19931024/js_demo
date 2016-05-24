$.fn.cw_slide = function(list){	
	var imglist = this.find(".img li");
	var page = this.find(".page");
	//初始化轮播图;
	defaultDeploy(imglist,page,list);
	var pagelist = this.find(".page li");
	pagelist.mouseenter(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index = $(this).index();
		i=index;
		$(".img li").eq(index).stop().fadeIn().siblings("li").stop().fadeOut();
	})
		
	var i =0;
	var t = setInterval(autoimg,3000);
	this.hover(function(){		
		i=$(this).find(".active").index();		
		clearInterval(t);
	},function(){
		t = setInterval(autoimg,3000)
	})
	$(".btn").click(function(){				
		if($(this).hasClass("left_btn")){
			if(i<=0){
				i=imglist.length;												
			}
			i-=1;
		}else{
			i+=1;
			if(i==imglist.length){				
				i=0;
			}					
		}				
		pagelist.eq(i).addClass("active").siblings("li").removeClass("active");
		imglist.eq(i).stop().fadeIn().siblings("li").stop().fadeOut()
	})
	
	function autoimg(){	
	pagelist.eq(i).addClass("active").siblings("li").removeClass("active");
	imglist.eq(i).stop().fadeIn().siblings("li").stop().fadeOut()
	i++;
	if(i>pagelist.length){
		i=0;
	}
}
}

function defaultDeploy(imglist,pagelist,list){	
	if(list.page){
		var pagenum = imglist.length;
		for (var i =0;i<pagenum;i++) {
			pagelist.append("<li><a href='#'>"+(i+1)+"</a></li>")
		}
		pagelist.find("li").eq(0).addClass("active");
	}
	imglist.eq(0).show();	
	if(list.btn){
		pagelist.after("<a href='#' class='left_btn btn'><</a>");
		pagelist.after("<a href='#' class='right_btn btn'>></a>");
	}
}
