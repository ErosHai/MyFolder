$(function(){
	var imgs=$('a',$('.dao-hang-right')[0]);
	imgs[0].style['z-index']=20;
	setInterval(nonm,2000);
	var num=0;
	function nonm () {
		num++;
		if (num==imgs.length) {
			num=0;
		}
	
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style['z-index']=20;
		}
		imgs[num].style['z-index']=21;//imgs[num].style.zIndex=1;
	}
})

