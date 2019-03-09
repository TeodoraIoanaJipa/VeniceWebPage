window.onload=function(){
	
	var lista=document.getElementsByClassName("om");
		for(var i=0;i<lista.length;i++)
		{
			lista[i].style.textAlign="justify";
			lista[i].style.textIndent="60px";		
		}

	document.getElementById("elbuton").onclick=functia;
	var e=document.getElementsByClassName("reg")[0];
	//e.onclick=myfunction;

	var k=document.getElementById("key");
	document.body.onkeyup=function(event)
	{
		if(event.key=="r")
			k.style.color="red";
		else
			if(event.key=="b")
				k.style.color="blue";
		else
			if(event.key=="y")
				k.style.color="yellow";
		else
		document.getElementById("key2").innerHTML=event.key;
	}

}

function functia(){
		var list = document.getElementById("lista");
		var s = document.getElementById("item");
		list.removeChild(s);
}

function myfunction(event){
	alert("Ati dat " + event.type + " pe un " + event.target.nodeName + " dintr-un " + event.currentTarget.nodeName + 
		" dupa "+ event.timeStamp + "milisecunde");
	alert("event.client : " + event.clientX+" "+ event.clientY + "\n" + " event.page : "+ event.pageX+" "+ event.pageY + "\n");
}