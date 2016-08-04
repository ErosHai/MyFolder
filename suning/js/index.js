	
	var imgsbox=$('.li_imgs',$('.li_out')[0]);
	var imgs=$('.li_img',imgsbox);
	alert(imgsbox.length)
	var iw=parseInt(getStyle(imgs[0],'width'));
	imgsbox.style.width=iw*imgs.length+'px';
	var num=0;
	var t=setInterval(move,2000);
	function move(){
		num++;
		if(imgs.length==num){
			num=0;
		}
		if (num==imgs.length-1) {
				animate(imgsbox,{left:-iw*num},1000,function(){
				imgsbox.style.left=0;
				num=0;
			})
			}else{
				animate(imgsbox,{left:-iw*num},1000);
			}
	}

	var lbtn=$('div',$('.li1_btn')[0]);
	lbtn[0].onclick=function(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		
		animate(imgsbox,{left:-iw*num},1000);
		
	}
	lbtn[1].onclick=function(){
		move();
	}
	lbtn[0].onmouseover=lbtn[1].onmouseover=function(){
		clearInterval(t);
	}
	lbtn[0].onmouseout=lbtn[1].onmouseout=function(){
		t=setInterval(move,2000);
	}
