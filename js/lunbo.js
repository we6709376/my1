function Shufflingfigure(boxwidth,boxheight,imgnum,leftinc,speed,id){
	this.boxwidth=boxwidth;
	this.boxheight=boxheight;
	this.imgnum=imgnum;
	this.imgwidth=boxwidth;
	this.imgheight=boxheight;
	this.timer=0;
	this.outleft=0;
	this.leftinc=leftinc;
	this.speed=speed;
	this.spendjiange=boxwidth/leftinc*speed+2000;
	this.firstimg=this.timer+1;
	this.secondimg=this.timer+1;
	this.id=id;
	this.mytimer=null;
	this.imgtimer=null;
	//轮播图走一步
	this.gostep=function(){
		
		var imgs=$(this.id)[0].children;
		this.outleft-=this.leftinc;
		if(this.outleft<=-this.boxwidth){
			this.outleft=-this.boxwidth;
			clearInterval(this.mytimer);
		}
		imgs[this.firstimg].style.left=this.outleft+"px";
		imgs[this.secondimg].style.left=this.outleft+this.boxwidth+"px";
		
	}
	//重置顺序轮播数据
	this.orderimgdate=function(){
		this.timer++;
		this.firstimg=this.timer;
		this.secondimg=this.timer+1;
		if(this.secondimg>this.imgnum){
			this.secondimg=1;
			this.timer=0;
		}
		this.outleft=0;
	}
	//切换图片
	this.changeimg=function(ord){
		if(this.secondimg==ord){
			return;
		}
		//图片未切换完 将图片直接移动完成
		
		let imgs=$(this.id)[0].children;
		imgs[this.firstimg].style.left=-this.boxwidth+"px";
		imgs[this.secondimg].style.left="0px";
		clearInterval(this.mytimer);
		//重置切换图片的数据
		this.firstimg=this.secondimg;
		this.secondimg=ord;
		this.outleft=0;
		//走一步
		let that=this;
		this.mytimer=setInterval(function(){
			that.gostep();
		},this.speed);
		this.changeli(ord-1);
		this.timer=ord-1;
	}
	//顺序移动图片
	this.orderimgmove=function(){
		this.orderimgdate();
		let that=this;
		this.mytimer=setInterval(function(){
			that.gostep();
		},this.speed);
		this.resetimg();
		this.changeli(this.firstimg);
	}
	//
	this.moveimg=function(){
		let that=this;
		this.imgtimer=setInterval(function(){
			that.orderimgmove();
		},this.spendjiange);
	}
	this.changeli=function(ord){
		let ulbox=$(this.id)[0].children[0].children;
		for(let i=0;i<ulbox.length;i++){
			ulbox[i].style.backgroundColor="rgba(200,200,200,0.8)";
		}
		if(ord>=ulbox.length){
			ord=0;
		}
		ulbox[ord].style.backgroundColor="red";
	
	}
	this.resetimg=function(){
		var imgs=$(this.id)[0].children;
		if(this.firstimg-1>0){
		imgs[this.firstimg-1].style.left=this.boxwidth+"px";
		}
	}
	this.initUI=function(){
		this.changeli(0);
		$(this.id)[0].style.width=boxwidth+"px";
		$(this.id)[0].style.height=boxheight+"px";
		for(let i=1;i<=imgnum;i++){
			let imgobj=document.createElement("img");
			imgobj.src="img/banner"+i+".jpg";
			imgobj.style.position="absolute";
			imgobj.style.width=this.imgwidth+"px";
			imgobj.style.height=this.imgheight+"px";
			imgobj.style.left=this.boxwidth+"px";
			$(this.id)[0].appendChild(imgobj);
		}
		$(this.id)[0].children[1].style.left=this.outleft+"px";
		$(this.id)[0].children[0].children[0].style.backgroundColor="red";
		let  that=this;
		$(this.id)[0].onmousemove=function(){
			clearInterval(that.imgtimer);
		}
		$(this.id)[0].onmouseout=function(){
			
			that.imgtimer=setInterval(function(){
				that.orderimgmove();
			},that.spendjiange)
		}
		let lichilds=$("#ulbox")[0].children;
		for(let i=0;i<lichilds.length;i++){
			lichilds[i].ord=i+1;
			lichilds[i].onclick=function(){
				that.changeimg(this.ord);
			}
		}
		
	}
	this.initUI();
	this.moveimg();
}