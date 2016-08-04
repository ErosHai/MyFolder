function getclass(classname,obj){
	var obj=obj||document;
	if (!(document.getElementsByClassName==undefined)) {
		return obj.getElementsByClassName(classname);}
		else{var all=obj.getElementsByTagName("*")
			var ss=[];
			for (var i =0; i <all.length; i++) {
				if (obtain(all[i].className,classname)) {ss.push(all[i])};
			};return  ss
      
}}
function obtain(objclassname,lookclassname){
	var bb=objclassname.split(" ");//用分隔符进行分割
	var flag=false;
	for(var i=0;i<bb.length;i++){
		if(bb[i]==lookclassname){
			flag=true;
		}
	}
	return flag;
} 
function xuanxiangka(top,bottom){
		for (var i =0; i < top.length; i++) {
		top[i].index=i;
		top[i].onclick=function(){
			for (var j =0; j <top.length; j++) {
				bottom[j].style.display="none"
				top[j].style.background="none"
				top[j].style.color="#f5f5f5"
			};
			bottom[this.index].style.display="block"
			top[this.index].style.background="black"

			

		}
	};


}
function xuanxiangka1(top,bottom){
		for (var i =0; i < top.length; i++) {
		top[i].index=i;
		top[i].onclick=function(){
			for (var j =0; j <top.length; j++) {
				bottom[j].style.display="none"
				top[j].style.color="#868686"
				top[j].style.textDecoration="none"
			};
			bottom[this.index].style.display="block"
			top[this.index].style.color="black"
			top[this.index].style["text-decoration"]="underline"
			

		}
	};


}
//  var  y=0;
// function go(arr){
  
//   y+=1
// arr.style.left=y+"px"
 
   
// }
function doc(){
  return document.body.scrollTop?document.body:document.documentElement
}
		window.onload=function(){
	
		var ss=document.getElementById("der")
		var img=ss.getElementsByTagName("a")
		var iw=810
		var button=getclass("bto")[0]
		var buttons=button.getElementsByTagName("div")
		var btt=getclass("btt")[0]
		var btts=getclass("btt")[0].getElementsByTagName("div")
		var t;
    var derdera=getclass("derdera")
    var bottomleft=getclass("banner-bottom-left-1")[0]
    var imgs=derder.getElementsByTagName("img")
    var search1=getclass("search-hidden")
    var searchhidden=getclass("dingweihidden")
    var  positionj=getclass("position-j")[0]
    var  dingwei4=document.getElementById("dingwei-4")
    var  boxshu=getclass("boxshu")
    var  dingwei4211=getclass("dingwei-4-2-1-1")
    var  dingwei41=getclass("dingwei-4-1")
    var  axx=[];
    var derhidden=getclass("derhidden")
    var derhidden2=getclass("derhidden-2")
    var fix=getclass("fix")
    var fixedhidden=getclass("fixedhidden")
    var positiont=getclass("position-t")
    // 固定导航
    positiont[0].onmouseover=function(){fixedhiddena.style.display="block"}
    positiont[0].onmouseout=function(){fixedhiddena.style.display="none"}
    fixedhiddena.onmouseover=function(){this.style.display="block"}
    fixedhiddena.onmouseout=function(){this.style.display="none"}
    for (var i =0; i< fix.length; i++) {
      fix[i].index=i;
      for (var j = 0; j<fixedhidden.length; j++) {
        fixedhidden[j].style.opacity=0
        fixedhidden[j].style.right=70+"px"
      };
      var  uu=true
      fix[i].onmouseover=function(){
        for (var j = 0; j<fixedhidden.length; j++) {
        fixedhidden[j].style.opacity=0
        fixedhidden[j].style.right=70+"px"
        fixedhidden[j].style.display="none"
        };
        if (!uu) {return};
        uu=false
        fixedhidden[this.index].style.display="block"
        animate(fixedhidden[this.index],{right:35,opacity:1},400,function(){uu=true})
      }
      fix[i].onmouseout=function(){
        fixedhidden[this.index].style.opacity=0;
        fixedhidden[this.index].style.display="block"
      }
      fixedhidden[i].onmouseover=function(){this.style.opacity=1;this.style.right=35+"px";this.style.display="block"}
      fixedhidden[i].onmouseout=function(){this.style.opacity=0;this.style.right=70+"px" ;this.style.display="none"}
    };

    // dingwei

  for (var i = 0; i <boxshu.length; i++) {
      axx.push(boxshu[i].offsetTop)
    };
 for (var i =0; i <dingwei4211.length; i++) {
      dingwei4211[i].index=i
      dingwei4211[i].onclick=function(){
         animate(doc(),{scrollTop:axx[this.index]},294)                           // doc().scrollTop=axx[this.index]
   
      }
    };
    
    positionj.onclick=function(){var doc=document.body.scrollTop?document.body:document.documentElement;
          animate(doc,{scrollTop:0},200)}
   
    // search1
    for (var i =0; i<search1.length; i++) {
      search1[i].index=i
      searchhidden[i].index=i
      search1[i].onmouseover=function(){searchhidden[this.index].style.display="block";this.style.background="white"}
      search1[i].onmouseout=function(){searchhidden[this.index].style.display="none";this.style.background="#f5f5f5"}
      searchhidden[i].onmouseover=function(){searchhidden[this.index].style.display="block";search1[this.index].style.background="white"}
      searchhidden[i].onmouseout=function(){searchhidden[this.index].style.display="none";search1[this.index].style.background="#f5f5f5"}
    };
    
   // banner
   for (var j =0; j < imgs.length; j++) {
          derhidden[j].style.zIndex=0
        };
    bottomleft.onmouseover=function(){

      for (var j =0; j < imgs.length; j++) {
          derhidden[j].style.zIndex=0
        };
      t=setInterval(move,2000); derder.style.zIndex=1;}
    for (var i = 0; i <derdera.length; i++) {
        derdera[i].index=i;
        derhidden[i].index=i
        var ee=true;
        $(derdera[i]).hover(function(){
                derder.style.zIndex=9;
            // if (!ee) {return};
            // ee=false;
            for (var j =0; j < imgs.length; j++) {
              imgs[j].style.zIndex=10;
              imgs[j].style.opacity=0;
              derhidden[j].style.left=-30+"px";
              derhidden[j].style.opacity=0;
              derhidden[j].style.zIndex=0
            };
            imgs[this.index].style.zIndex=20
            animate(derhidden[this.index],{opacity:1,left:0},400,function(){derhidden[this.index].style.display="block"})
             derhidden[this.index].style.zIndex=24
            animate(imgs[this.index],{opacity:1},400)
            clearInterval(t)
            if (this.index==0) {wanle.style.background="#E3568B";$("#derder")[0].style.background="#E3568B";}
            if (this.index==1) {wanle.style.background="#C1001F";$("#derder")[0].style.background="#C1001F";}
            if (this.index==2)  {wanle.style.background="#FFC289";$("#derder")[0].style.background="#FFC289";}
            if (this.index==3)  {wanle.style.background="#B68E39";$("#derder")[0].style.background="#B68E39";}
            if (this.index==4)  {wanle.style.background="#090653";$("#derder")[0].style.background="#090653";}
            if (this.index==5)  {wanle.style.background="#EE0D5D";$("#derder")[0].style.background="#EE0D5D";}
            if (this.index==6)  {wanle.style.background="#28C5D4";$("#derder")[0].style.background="#28C5D4";}
            if (this.index==7)  {wanle.style.background="#8EAABF";$("#derder")[0].style.background="#8EAABF";}
            if (this.index==8)  {wanle.style.background="#01C2E1";$("#derder")[0].style.background="#01C2E1";}
            if (this.index==9)  {wanle.style.background="#2FC4FE";$("#derder")[0].style.background="#2FC4FE";}
            if (this.index==10) {wanle.style.background="#EAABA6";$("#derder")[0].style.background="#EAABA6";}
            if (this.index==11) {wanle.style.background="#E03334";$("#derder")[0].style.background="#E03334";}
            if (this.index==12) {wanle.style.background="#BF001F";$("#derder")[0].style.background="#BF001F";}
            if (this.index==13) {wanle.style.background="#E3568B";$("#derder")[0].style.background="#E3568B";}
            if (this.index==14) {wanle.style.background="#C1001F";$("#derder")[0].style.background="#C1001F";}
        },function(){
             // animate(derhidden[this.index],{opacity:0,left:-20},400)
            derhidden[this.index].style.zIndex=0
            derhidden[this.index].style.opacity=0;
        })

     $(derhidden[i]).hover(function(){
        derhidden[this.index].style.zIndex=24
        derhidden[this.index].style.opacity=1;
        derhidden[this.index].style.left=0;
        derhidden[this.index].style.display="block"
     },function(){
        // for (var j =0; j < imgs.length; j++) {
        //   derhidden[j].style.zIndex=0
        // };
        animate(derhidden[this.index],{opacity:0,left:-20},400,function(){derhidden[this.index].style.display="none"})
        
     })
    //   derhidden[i].onmouseover=function(){
    //     derhidden[this.index].style.zIndex=24
    //     derhidden[this.index].style.opacity=1;
    //     derhidden[this.index].style.left=0 }
    //   derhidden[i].onmouseout=function(){
    //     for (var j =0; j < imgs.length; j++) {
    //       derhidden[j].style.zIndex=0
    //     };
    //     // animate(derhidden[this.index],{opacity:0,left:-20},400)
    // }
     };

		ss.onmouseover=function(){btt.style.display="block"}
        btt.onmouseover=function(){btt.style.display="block"}
        ss.onmouseout=function(){btt.style.display="none"}
		t=setInterval(move,2000)
		   var num=0;
       var index=0;
       var flag=true
		function move(){
			if (!flag) {return;};
      flag=false
			num++;
			if (num==1) {wanle.style.background="#FFAD30";}
			if (num==2) {wanle.style.background="#E5E5E5";}
			if (num==3) {wanle.style.background="#E5E5E5";}
			if (num==4) {wanle.style.background="#FFF452";}
			if (num==4) {num=0};
			img[num].style.left=iw+"px"
      animate(img[num],{left:0},800,function() {flag=true})
      animate(img[index],{left:-iw},800,function() {flag=true})
			buttons[num].style.background="red"
      buttons[index].style.background="black"
      index=num

		}
	  for (var i =0; i< buttons.length; i++) {
        buttons[i].index=i
        buttons[i].onmouseover=function(){
        if (!flag) {return;};
        flag=false;
        clearInterval(t)
        if (index==this.index) {return};
        img[this.index].style.left=iw+"px"
        animate(img[this.index],{left:0},800,function() {flag=true})
        animate(img[index],{left:-iw},800,function() {flag=true})
         index=this.index
         num=this.index
         for (var i =0; i< buttons.length; i++) {
          buttons[i].style.background="black"};
          buttons[this.index].style.background="red"
      if (num==1) {wanle.style.background="#FFAD30";}
			if (num==2) {wanle.style.background="#E5E5E5";}
			if (num==3) {wanle.style.background="#E5E5E5";}
			if (num==4) {wanle.style.background="#FFF452";}
			if (num==5) {num=0};
          

      }
      buttons[i].onmouseout=function(){t=setInterval(move,2000)
        }

    };

    for (var i =0; i < btts.length; i++) {
       btts[i].onmouseover=function(){clearInterval(t)}
       btts[i].onmouseout=function(){t=setInterval(move,2000)}
     };
    btts[1].onclick=function(){
      if (!flag) {return;};
      flag=false
      num++;
      if (num==4) {num=0};
      if (num==1) {wanle.style.background="#FFAD30";}
      if (num==2) {wanle.style.background="#E5E5E5";}
      if (num==3) {wanle.style.background="#E5E5E5";}
      if (num==4) {wanle.style.background="#FFF452";}
      img[num].style.left=iw+"px"
      animate(img[num],{left:0},800,function() {flag=true})
      animate(img[index],{left:-iw},800,function() {flag=true})
      buttons[num].style.background="red"
      buttons[index].style.background="black"
      index=num
			

      
    }

    btts[0].onclick=function(){
      if (!flag) {return;};
      flag=false
     
      num--;
      if (num<0) {num=3};
      if (num==1) {wanle.style.background="#FFAD30";}
      if (num==2) {wanle.style.background="#E5E5E5";}
      if (num==3) {wanle.style.background="#E5E5E5";}
      if (num==4) {wanle.style.background="#FFF452";}
      img[num].style.left=-iw+"px"
      animate(img[num],{left:0},800,function() {flag=true})
      animate(img[index],{left:+iw},800,function() {flag=true})
      buttons[num].style.background="red"
      buttons[index].style.background="black"
      index=num
      
     
    } 
    // yidong

	var tupian=getclass("tupian")
	for (var i = 0; i<tupian.length; i++) {
	  		tupian[i].onmouseover=function(){ animate(this,{left:-10},200)}
	 		tupian[i].onmouseout=function(){ animate(this,{left:0},200)}
	 	};
   
    var flg=true
   
   	// xuanxiangka2
   	// box221[1].style.zIndex=122
   	var box121=getclass("box-1-2-1")
   	var box221=getclass("box221")
   	xuanxiangka1(box121,box221)
   	// lunbo2
   	var d=0;
   	var box3211=getclass("box3-left-top-2-1-1")
   	var p=setInterval(tee,1000)
   	var yaosile=getclass("yaosile")
   	var yaosile1=getclass("yaosile1")
   	var yaosile2=getclass("yaosile2")
   
  

   for (var i =0; i <yaosile.length; i++) {
   	box3211[i].index=i;
   	yaosile2[i].index=i;
   	yaosile[i].style.color="#ebebeb"
   	box3211[i].onmouseover=function(){
   		yaosile[this.index].style.color="#717171"
   		if (this.index==0) {clearInterval(p)};
   		if (this.index==1) {clearInterval(pp)};
   		if (this.index==2) {clearInterval(ppp)};
   		if (this.index==3) {clearInterval(pppp)};
   	}
   	yaosile[i].onmouseover=function(){
   		this.style.color="#717171"
   		// if (this.index==0) {p=setInterval(tee,1000)};
   		// if (this.index==1) {pp=setInterval(teee,1000)};
   		// if (this.index==2) {ppp=setInterval(teeee,1000)};
   		// if (this.index==3) {pppp=setInterval(teeeee,1000)};

   	}
   	yaosile[i].onmouseoout=function(){
   		this.style.color="#ebebeb"
   		// if (this.index==0) {clearInterval(p)};
   		// if (this.index==1) {clearInterval(pp)};
   		// if (this.index==2) {clearInterval(ppp)};
   		// if (this.index==3) {clearInterval(pppp)};
   	}
   	box3211[i].onmouseout=function(){
   		yaosile[this.index].style.color="#ebebeb"
   		if (this.index==0) {p=setInterval(tee,1000)};
   		if (this.index==1) {pp=setInterval(teee,1000)};
   		if (this.index==2) {ppp=setInterval(teeee,1000)};
   		if (this.index==3) {pppp=setInterval(teeeee,1000)};
   	}
   };

   	function tee(){
   		d++;
   		if (d==4) {d=0};
   		if (d==3) {animate(box3211[0],{left:(-100*d)},500,function(){box3211[0].style.left=0;d=0});}
        else{animate(box3211[0],{left:-100*d},500)};
      
   	}
   	var v=0
   	var pp=setInterval(teee,1000)
   	function teee(){
   		v++;
   		if (v==4) {v=0};
   		if (v==3) {animate(box3211[1],{left:(-100*v)},500,function(){box3211[1].style.left=0;v=0});}
        else{animate(box3211[1],{left:-100*v},500)};
      
   	}
   	var  vv=0
   	var ppp=setInterval(teeee,1000)
   	function teeee(){
   		vv++;
   		if (vv==4) {d=0};
   		if (vv==3) {animate(box3211[2],{left:(-100*vv)},500,function(){box3211[2].style.left=0;vv=0});}
        else{animate(box3211[2],{left:-100*vv},500)};
      
   	}
   	var vvv=0
   	var pppp=setInterval(teeeee,1000)
   	function teeeee(){
   		vvv++;
   		if (vvv==4) {vvv=0};
   		if (vvv==3) {animate(box3211[3],{left:(-100*vvv)},500,function(){box3211[3].style.left=0;vvv=0});}
        else{animate(box3211[3],{left:-100*vvv},500)};
      
   	}
     window.onscroll=function(){
    if (!flg) {return};
    flg=false
    if (doc().scrollTop>800){animate(sousuo,{top:0},100,function(){flg=true})}else{animate(sousuo,{top:-60},100,function(){flg=true})}
     if (doc().scrollTop>800){dingwei4.style.display="block"}else{dingwei4.style.display="none"}
    for (var i =0; i < 11; i++) {
      if (doc().scrollTop>(axx[i])) {
      	for (var j =0; j<dingwei41.length; j++) {
         dingwei41[j].style.zIndex=0
        };

        dingwei41[i].style.zIndex=20};
    };
    
  }

   
}	
