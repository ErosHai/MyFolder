//获取函数(兼容)  获取或者设置内容对象(对象没有innerText值为 undefined)  val修改内容
function getText(obj,val){
	if(obj.innerText!=undefined){
		if(val==undefined){			
			return obj.innerText;
		}else{
			obj.innerText=val;
			return val;
		}
		
	}else{
		if(val==undefined){
			return obj.textContent;
		}else{
			obj.textContent=val;
			return val;
		}		
	}
}
//ClassName的 兼容问题
function getClass(classname,obj){
	//获取 obj下的类名
	//判断浏览器的document对象是否有getElementsByClassName 属性 没有返回undefined
	var obj=obj||document;
	if(document.getElementsByClassName!=undefined){
		return obj.getElementsByClassName(classname);
	}else{
		var all=obj.getElementsByTagName('*');//获取所有标签
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,classname)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
/*
	objclass 标签class
*/
function checkClass(objclass,newclass){
	var arr=objclass.split(" "); //类名为 多个兼容  字符串转换为数组
	var flag=false;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==newclass){
			flag=true;
		}
	}
	return flag;
}

function $(selector,obj){
	if (typeof selector=='string') {
		var obj=obj||document;
		if (selector.charAt(0)=='.') {
			return getClass(selector.slice(1));
		}else if(selector.charAt(0)=='#'){
			return document.getElementById(selector.slice(1));
		}else if(/^[a-z][a-z|1-6]{0,10}/.test(selector)){
			return obj.getElementsByTagName(selector);
		}else if(/^<[a-z][a-z][a-z|1-6]{0,10}>$/.test(selector)){
			return obj.createElement(selector.slice(1,-1));
		}
	}else if (typeof selector=='function') {
		window.onload=function(){
			selector();
		}
	}
}

//行内样式和外部样式通用的获取方法
//attr 获得的样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}


		
/*获取所需节点*/
	function getChilds(obj,val){
		var all=obj.childNodes;
		var arr=[];
		for (var i = 0; i < all.length; i++) {
			if(!((all[i].nodeType==3&&trim(all[i].nodeValue)=='')||all[i].nodeType==8)){
				if(val&&all[i].nodeType==3){
					all[i].nodeValue=trim(all[i].nodeValue)
				}
				arr.push(all[i])
			}
		}
		return arr;
	}

/* 获取第一个子节点*/
function getFrist(obj,val){
	return getChilds(obj,val)[0];
}
/*最后一个*/
function getLast(obj,val){
	var all=getChilds(obj,val);
	return all[all.length-1];
}

/*获取下一个*/
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return;
	}
	while((next.nodeType==3&&trim(next.nodeValue)=='')||next.nodeType==8){
		next=next.nextSibling;
		if(next==null){
			return;
		}
	}
	return next;
}
/*获取上一个*/
function getUp(obj){
	var up=obj.previousSibling;
	if(up==null){
		return;
	}
	while((up.nodeType==3&&trim(up.nodeValue)=='')||up.nodeType==8){
		up=up.nextSibling;
		if(up==null){
			return;
		}
	}
	return up;
}



/*去除字符串两边空格*/
	function trim(str){
		return str.replace(/^\s*|\s*$/g,'');
	}	



	/*追加到什么之前*/
    function insertBefore(insertObj,beforeObj){
    	var parent=beforeObj.parentNode;
    	parent.insertBefore(insertObj,beforeObj);
    }

     function insertAfter(insertObj,afterObj){
     	var next=getNext(afterObj);
    	var parent=afterObj.parentNode;
    	parent.insertBefore(insertObj,next);
    }

  /*滚动条*/

  function gdt(){
  	return document.body.scrollTop?document.body:document.documentElement;
  }