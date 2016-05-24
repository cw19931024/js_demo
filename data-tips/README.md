data-tips
===================================
自己写的小提示插件支持上下左右4中方向。
初版本，有时间更新
data-tips使用方式
===================================
```html
  <a href="#" data-tips="我还可以这样" data-postion="left" class="btn btn-default">提示</a>
```

```javascript
  data-tips="提示内容"; //显示的提示文本，也可以使用标签嵌套。
  
  data-postion="top"; //提示方式:上:top,下:bottom,左:left,右:right;
```

```javascript
 $(function(){
			$("[data-tips]").hover(function() {				
				$(this).cwtips();			
			});
		})
```

data-tips兼容性
===================================
小demo，使用css3做的，兼容性就不多说了
