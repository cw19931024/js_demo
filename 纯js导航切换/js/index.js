/**
 * 导航
 */
function nav_cw(nav){
	this.navs=nav;
	for (var i = 0;i < this.navs.length;i++) {
		this.navs[i].onclick=function(){			
			clear_tab(this.navs);
			this.className+=" active";
		}
	}
}

//清除导航样式
function clear_tab(nav){
	for (var i = 0;i<this.navs.length;i++) {		
		this.navs[i].className="tab";
	}
}
