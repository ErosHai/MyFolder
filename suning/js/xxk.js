	
window.onload=function(){
	var links=getClass('zw-top2');
	var imgs=getClass('zw-zw');
	for (var i = 0; i < links.length; i++) {
		tab(links[i].getElementsByTagName('a'),imgs,'#ff6b80');
	}	

	var links=getClass('zw-top2b');
	var imgs=getClass('zw-zwb');
	for (var i = 0; i < links.length; i++) {
		tab(links[i].getElementsByTagName('a'),imgs,'#61b3ff');
	}
	var links=getClass('zw-top2c');
	var imgs=getClass('zw-zwc');
	for (var i = 0; i < links.length; i++) {
		tab(links[i].getElementsByTagName('a'),imgs,'#aed55a');
	}
	var links=getClass('zw-top2d');
	var imgs=getClass('zw-zwd');
	for (var i = 0; i < links.length; i++) {
		tab(links[i].getElementsByTagName('a'),imgs,'#ff9901');
	}
	var links=getClass('zw-top2e');
	var imgs=getClass('zw-zwe');
	for (var i = 0; i < links.length; i++) {
		tab(links[i].getElementsByTagName('a'),imgs,'#ff6565');
	}	
	var links=getClass('zw-top2f');
	var imgs=getClass('zw-zwf');
	for (var i = 0; i < links.length; i++) {
		tab(links[i].getElementsByTagName('a'),imgs,'#fb7292');
	}	
	var links=getClass('zw-top2g');
	var imgs=getClass('zw-zwg');
	for (var i = 0; i < links.length; i++) {
		tab(links[i].getElementsByTagName('a'),imgs,'#6d93ff');
	}	
	var links=getClass('zw-top2h');
	var imgs=getClass('zw-zwh');
	for (var i = 0; i < links.length; i++) {
		tab(links[i].getElementsByTagName('a'),imgs,'#356aca');
	}				
}

	function tab(btns,imgs,a){   //按钮 容器
		btns[0].style.border='1px solid red';
		btns[0].style.borderColor=a;
		btns[0].style.borderBottom='none';
		btns[0].style.background='#fff';
		for (var i=0;i<btns.length;i++) {
			btns[i].index=i;
			btns[i].onmouseover=function(){
				for (var j=0;j<imgs.length;j++) {
					imgs[j].style.display='none';
					btns[j].style.background='';
					btns[j].style.border='1px solid #fff';
					btns[j].style.borderBottom='none';
					
				}
				imgs[this.index].style.display='block';
				this.style.border='1px solid red';
				this.style.background='#fff';
				this.style.borderBottom='none';	
				this.style.borderColor=a;		
			}
		}
	}


	var num=0;
	var aaa=['#ee2d8a','#4d2ec9','#a5ddf6','#ee2d8a','#4d2ec9','#a5ddf6','#ee2d8a','#4d2ec9','#a5ddf6'];
	var hoot=$('#dao-hang');
	hoot.style.background='#fe1b49';
	var lis=$('li',$('.num')[0]);

	var imgs=$('img',$('.imgs')[0]);
	var t=setInterval(move,1000);
	function move(){
		num++;
		if(imgs.length==num){
			num=0;
		}
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.display='none';

		}
		imgs[num].style.display='block';
		hoot.style.background=aaa[num];

	}

	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onmouseover=function(){
			num=this.index; //num值变为下标值
			clearInterval(t);
			for (var j = 0; j<imgs.length; j++) {
				imgs[j].style.display='none';
				lis[j].className='';
			}
			imgs[this.index].style.display='block';
			lis[this.index].className='hot';
			hoot.style.background=aaa[num];
		}
		lis[i].onmouseout=function(){
			t=setInterval(move,1000);
			lis[this.index].className='';
		}
	}
	var lbtn=$('div',$('.btn')[0]);
	lbtn[0].onclick=function(){
		num--;
		if(num<0){
			num=imgs.length-1;

		}
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.display='none';
		}
		imgs[num].style.display='block';
		}	
		
	lbtn[1].onclick=function(){
		move();

		
	}
	lbtn[0].onmouseover=lbtn[1].onmouseover=function(){
		clearInterval(t);
		
		
	}
	lbtn[0].onmouseout=lbtn[1].onmouseout=function(){
		t=setInterval(move,1000);
		
	}

	/*var ddd=$('.li_left')[0];*/
/*function xxx(a,b){
	var ls=a;
	var rs=b;
	
	for (var i = 0; i < ls.length; i++) {
		ls[i].index=i;
		ls[i].onmouseover=function(){
			clearInterval(t);
			for (var j = 0; j < rs.length; j++) {	
			rs[j].style.zIndex=-10;	
		}
		
		rs[this.index].style.zIndex=100;
		}
		ls[i].onmouseout=function(){

			rs[this.index].style.zIndex=-10;
			t=setInterval(move,1000);
		}
	}
}
xxx($('.dao-hang1-n',$('.li_left')[0]),$('a',$('.li_right')[0]));*/

	function xx(a,b){
		var lsa=a;
		var rsa=b;

	for (var i = 0; i < lsa.length; i++) {
		lsa[i].index=i;
		lsa[i].onmouseover=function(){
			for (var j = 0; j < rsa.length; j++) {
			rsa[j].style.display='none';
			
		}
		rsa[this.index].style.display='block';
		lsa[this.index].style.background='#fff';

		}
		lsa[i].onmouseout=function(){
			lsa[this.index].style.background='#f5f5f5';
			rsa[this.index].style.display='none';
			
		}
	}
	}
	
xx($('.top-left1',$('.top-left')[0]),$('.li_top'))
xx($('.li-a2',$('.top-right')[0]),$('.li_top1'))
xx($('.li-a3',$('.top-right')[0]),$('.li_top2'))
	


function xxs(a,b){
	var ls=a;
	var rs=b;
	
	for (var i = 0; i < ls.length; i++) {
		ls[i].index=i;
		ls[i].onmouseover=function(){
			clearInterval(t);
			for (var j = 0; j < rs.length; j++) {	
			rs[j].style.display='none';	
		}
		
		rs[this.index].style.display='block';
		}
		ls[i].onmouseout=function(){

			rs[this.index].style.display='none';
			t=setInterval(move,1000);
		}
	}
}

xxs($('.dao-hang1-n'),$('.li_right-a'));

	/*var ls=$('.dao-hang1-n');
	var rs=$('.ch');

	for (var i = 0; i < ls.length; i++) {
		ls[i].index=i;
		ls[i].onmouseover=function(){
			for (var j = 0; j < rs.length; j++) {
				rs[j].style.zIndex=100;
			}
			lis[this.index].style.zIndex=-2;	
		}
		lis[i].onmouseout=function(){
			for (var k = 0; k < rs.length; k++) {
				rs[k].style.zIndex=-2;
			}
		}
		
	}*/
	
function opo(a,b){	
	var imgsbox=$('.li_imgs')[0];
	var imgs=$('.li_img',imgsbox);
	var flag=true;
	var iw=parseInt(getStyle(imgs[0],'width'));
	for (var i = 0; i < imgs.length; i++) {
		if(i==0){
			continue;
		}
		imgs[i].style.left=iw+'px';
	}
	var num=0;  //当前图片下标
	var index=0;  
		function move(){
			if(!flag){
				return;
			}
			flag=false;
			num++;
			if(num==imgs.length){
				num=0;
			}
			imgs[num].style.left=iw+'px';
			animate(imgs[num],{left:0},800,function(){
				flag=true;
			});
			animate(imgs[index],{left:-iw},800,function(){
				flag=true;
			});
			index=num;
		}
	/*imgsbox.style.width=iw*imgs.length+'px';
	var num=0;
	function move(){
		num++;
		if(imgs.length==num){
			num=0;
			imgsbox.style.left=0;
		}
		animate(imgsbox,{left:-iw*num},1000);
	}*/
	
	var lbtn=$('div',$('.li1_btn')[0]);
	lbtn[0].onclick=function(){

			if(!flag){
				return;
			}
			flag=false;
			num--;
			if(num<0){
				num=imgs.length-1;
			}
			imgs[num].style.left=iw+'px';
			animate(imgs[num],{left:0},800,function(){
				flag=true;
			});
			animate(imgs[index],{left:-iw},800,function(){
				flag=true;
			});
			index=num;
		/*num--;
		if(num<0){
			num=imgs.length-1;
		}
		
		animate(imgsbox,{left:-iw*num},1000);*/
		
	}

	lbtn[1].onclick=function(){
		move();
	}
	

}
opo();

		var tops=$('.li__top')[0];
		var flag=true;
		function checktop(stop){
			if(!flag){
				return;
			}
			flag=false;
			if(stop>800){
				animate(tops,{top:0},500,function(){
					flag=true;
				})
			}else{
				animate(tops,{top:-50},500,function(){
					flag=true;
				})
				
		    }
		}


		function zdh(){
			var lefts=$('.li__left')[0];
			var floor=$('.li_x');
			var ftop=[];
			for (var i = 0; i < floor.length; i++) {
				ftop.push(floor[i].offsetTop);
			}
			console.log(ftop)
			var btns=$('li',lefts);
			btns[0].className='hot';
		
			for (var i = 0; i < btns.length; i++) {
				btns[i].index=i;
				btns[i].onclick=function(){
					var doc=gdt();
					animate(doc,{scrollTop:ftop[this.index]-50},500);
					for (var j = 0; j < btns.length; j++) {
						btns[j].className='';	
					}
					btns[this.index].className='hot';		
				}		
			}
			var ch=document.documentElement.clientHeight;
			window.onscroll=function(){
				var doc=gdt();
				var stop=doc.scrollTop;
				if(stop>1000){
					lefts.style.display='block';
					
				}
				else{
					lefts.style.display='none';
				
				}
				for (var i = 0; i < ftop.length; i++) {
					if(stop+200>=ftop[i]){
						for (var j = 0; j < btns.length; j++) {
							btns[j].className='';
						}
							btns[i].className='hot';

						}
				}
				checktop(stop);	
			}	
		}
		zdh();


	function ydh(a,b){
		var lsa=a;
		var rsa=b;
		var iw=parseInt(getStyle(rsa[0],'left'));
		for (var i = 0; i < lsa.length; i++) {
			lsa[i].index=i;
			lsa[i].onmouseover=function(){
				for (var j = 0; j < rsa.length; j++) {
				rsa[j].style.display='none';
				
			}
				rsa[this.index].style.display='block';
				animate(rsa[0],{left:-80},600);
				rsa[this.index].style.background='#ffaa00'
				rsa[this.index].style.color='#fff'

			}
			lsa[i].onmouseout=function(){
				animate(rsa[0],{left:0},600);
				rsa[this.index].style.background='#000'
				rsa[this.index].style.color='#ffaa00'
			}
		}
	}

		ydh($('.a1-5',$('.a1')[0]),$('.li_a1-1'));
		ydh($('.a1-6',$('.a1')[0]),$('.li_a1-6'));
		ydh($('.a1-9',$('.a1')[0]),$('.li_a1-9'));
		ydh($('.a1-10',$('.a1')[0]),$('.li_a1-10'));
