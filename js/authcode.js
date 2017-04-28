function getrandomcode(id){
		var arr=new Array(),a=0;
		for(var i=49;i<=57;i++){
			arr[a]=i;
			a++;
		}
		for(i=65;i<=90;i++){
			arr[a]=i;
			a++;
		}
		for(i=97;i<=122;i++){
			arr[a]=i;
			a++;
		}
		var newarr=[];
		for(i=0;i<4;i++){
			newarr.push(arr[parseInt(Math.random()*arr.length)]);
		}
		let str="";
		for(i=0;i<newarr.length;i++){
			str+="<img style='float:left;width:25px;height:32px;margin-top:2px;margin-left:5px;' src='../img/images/"+newarr[i]+".jpg'/>";
		}
		$(id).html("");
		$(id).append(str);
		return newarr;
	}
function testcode(id,arr){
	let str=$(id).val();
	if(str.length!=arr.length){
		return false;
	}
	let newstr="";
	for(i=0;i<arr.length;i++){
		newstr+=String.fromCharCode(arr[i]);
	}
	if(newstr.toLowerCase()==str.toLowerCase()){
		return true;
	}else{
		return false;
	}
}
	