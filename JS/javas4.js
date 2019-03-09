window.onload=function(){
	document.querySelector(".istorie").style.backgroundColor="white";

	var lista2=document.querySelectorAll(".ist");
	for(var i=0;i<lista2.length;i++)
	{
		lista2[i].style.textAlign="left";
		lista2[i].style.textIndent="30px";
	}

	var drag=document.getElementById("drag1");
	var drop=document.getElementById("drop1");
	var globala;
	drop.ondragover=function(event)
	{
		event.preventDefault();
	}
	drop.ondrop=function(event)
	{
		event.preventDefault();
		drop.appendChild(globala);
	}
	drag.ondragstart=function(event)
	{
		globala=drag;
	}

}							