window.onload=function(){
	
	var misc=document.getElementsByClassName("in");
	/*
	misc[0].addEventListener("click",function(event){
		alert("Parinte: Ati dat click pe "+event.target.nodeName +"\n");
		event.stopPropagation();},true); */

	var btn=document.getElementById("cli");
	btn.addEventListener("click",abonare);
	//btn.addEventListener("mouseover",abonare2);
	var butonul=document.getElementById("sub");
	//butonul.addEventListener("mouseover",abonare2);

	document.getElementById("prevent").addEventListener("click",function(event){event.preventDefault();});
}

function abonare(event){
	var f=document.getElementById("myform");
	//alert(f.elements);
	//alert(f.length);
	alert("Copil: Salut, "+f.elements[0].value+" "+f.elements[1].value+" din "+f.elements[6].options[f.elements[6].selectedIndex].value+
		",te-ai abonat cu email'ul "+f.elements[4].value);
	event.stopImmediatePropagation();

}

function abonare2(event)
{
	var f=document.getElementById("myform");
	var s=document.getElementById("sub");
	s.style.backgroundColor="red";
	alert("Ati atins butonul");
}