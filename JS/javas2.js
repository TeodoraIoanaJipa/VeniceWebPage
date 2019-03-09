window.onload=myMain;
function myMain(){

	var paragrafele=document.getElementsByTagName("p"); 
	for(var i=0;i<paragrafele.length;i++)
		paragrafele[i].style.textIndent="20px"; 

	var lista=document.getElementsByClassName("om");
	for(var i=0;i<lista.length;i++)
	{
		lista[i].style.textAlign="justify";
		lista[i].style.textIndent="60px";		
	}										
	/*
	document.getElementById("lego").onclick = function() {
		creez_element("p");
		schimb_stil_element();
		document.getElementById("lego").style.visibility="hidden";
	};

	document.getElementById("lego").onmouseover = schimba;
	document.getElementById("lego").onmouseout = schimba_stil;	*/
	document.getElementById("veneto").onmousemove=function(event){
		var b=document.getElementById("lego");
		b.proprietateNoua=event.pageX+"px";
		b.proprietateNoua2=event.pageY+"px";
		b.style.left=b.proprietateNoua;
		b.style.top=b.proprietateNoua2;
	}

	var myw;
	var b=document.getElementById("btn");
	b.addEventListener("click",function(){
	 			myw=window.open("1PROIECT.html","_blank","toolbar=yes,width=400")},false)
	/*var b2=document.getElementById("btn2");
	b2.addEventListener("click",function(){ myw.close();},false);

	if(localStorage.lastvisit==undefined)
	{
			var f=open();
			var d=new Date();
			localStorage.lastvisit=d;
	}
		else
			alert("Ultima vizita a fost: "+localStorage.lastvisit);*/
}

function creez_element(tag){
    var untag = document.createElement(tag);
    var t = document.createTextNode("Va multumim pentru timpul acordat!");
    untag.appendChild(t);
    document.body.appendChild(untag);
}

function schimb_stil_element(){
	document.getElementById("veneto").style.color="#000080";
	document.getElementById("veneto").style.fontSize="bold";
	document.getElementById("veneto").className="om";
}

function schimba(){
	document.getElementById("penultimul").style.backgroundColor="yellow";
	document.getElementById("penultimul").style.textAlign="left";
}

function schimba_stil(){
	document.getElementById("penultimul").style.backgroundColor="lightblue";
	document.getElementById("penultimul").style.textAlign="right";
}
