/**
 * 判断是否双击或者单击
 */
function is_numclick(num){
	var timeout;
	var left_code=37;
	var right_code=39;
	var tips="";
	var is_num;
	var is_nums;
	/*alert(is_nums)*/
	if(num==left_code){
		is_num=left_code;
		tips="后退";
	}else{
		is_num=right_code;
		tips="前进";
	}
	if(!keyT){
		keyT=true;
		//判断is_nums是否有值，有就和is_num对比判断，没有就为true;
		if(num==is_num||is_nums==undefined?true:is_num==is_nums){
			is_nums=is_num;
			console.log("你单击了"+tips);
			timeout=setTimeout(function(){
				keyT=false;
			},100)
		}
	}else{
		keyT=false;
		if(num==is_num){
			console.log("你双击了"+tips);
		}
	}
}