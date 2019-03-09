window.onload=function()
{
	var b=document.getElementById("buton");

	b.onclick=function()
	{
		var d=document.getElementsByTagName("li");
		for(var i=0;i<d.length;i++)
			if(d[i].classList.contains("nu")&& d[i].classList.contains("da"))
			{
				d[i].classList.remove("nu");
				d[i].classList.remove("da");
			}
		for(var i=0;i<d.length;i++)
			if(d[i].className=="da")
				d[i].classList.add("nu");
			else
				d[i].classList.add("in");

		b.style.position="relative";
		b.style.left="100px";
		var divuri=document.getElementsByTagName("div")[0];
			divuri.firstElementChild.style.color=getComputedStyle(b,null).color;
	
	}


}