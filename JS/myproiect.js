var v,v2;
window.onload=function()
{
	v=setTimeout(alertare,5000);

	var a=document.getElementsByClassName("input")[0];
	a.firstElementChild.firstElementChild.style.color="#b30000";

	var forma=document.getElementById("myform");
	var copii=forma.children;
	/*
	for(let i=0;i<copii.length;i+=2)
		v2=setTimeout(function(){ copii[i].children[0].style.color="#b30000";},5000*((i+2)/2)); */


	var nume=document.getElementById("numele");

	/*(nume.onchange=function(){	
		var string1="Salut,";
		var string2=this.value;
		alert(string1.concat(string2));}*/

	nume.nextElementSibling.nextElementSibling.onclick = chestionar;

	setTimeout(function(){//clearInterval(v);  
							forma.previousElementSibling.style.color="black";
							forma.parentElement.style.fontWeight="20";
							},18000);


	document.body.lastElementChild.onclick=function(){ //sterg animatia la click adica ultimul div din body
		this.style.display="none";
	}
	/*
	var d=new Date();
	var zi=d.getDate();
	var luna=parseInt(d.getMonth())+1;
	var an=d.getFullYear();
	var data=document.createTextNode(zi+"."+luna.toString()+"."+an);
	document.body.appendChild(data);*/
}

function alertare(){alert("Nu doriti sa completati chestionarul?");}

function chestionar(){
		//clearInterval(v);
		var nr=0; var sum = 0;

		var raspunsuri=["Raspunsurile"];
		raspunsuri.push("tale");
		raspunsuri.push(":");

		var cap=document.getElementsByName("capitala");
		for(var i=0;i<cap.length;i++)
			if(cap[i].checked)
			{
				sum += Math.floor(cap[i].value); nr++;
				raspunsuri.push(cap[i].parentElement.textContent);
			}

		var pict=document.getElementsByName("pictor");
		if(pict[0].checked && pict[2].checked && pict[1].checked==false)
		{
					sum += 1; nr++;
					raspunsuri.push(pict[0].parentElement.textContent,pict[2].parentElement.textContent);
		}
		else
			for(let i=0;i<pict.length;i++)
				if(pict[i].checked)
				{
					raspunsuri.push(pict[i].parentElement.textContent);
					nr++;
				}

		var food=document.getElementsByName("mancare");
		for(let i=0;i<food.length;i++)
			if(food[i].checked)
			{
					sum += Math.floor(food[i].value);
					raspunsuri.push(food[i].parentElement.textContent);
					nr++;
			}

		var n=document.getElementById("numele").value;
		if(n=="Nume")
			alert("Nu ati introdus numele.");
		else
		if(nr<3)
			alert("Nu ati raspuns la cel putin una dintre intrebari!");
		else
			if(sum==0)
				alert("Nu ai raspuns corect la nicio intrebare. Te rog, mai incearca.");
			else
				if(sum==1)
					alert("Felicitari, "+ n +" , ai raspuns corect la o intrebare!");
				else
				{
					alert("Felicitari, "+ n +" , ai raspuns corect la " + parseInt(sum) + " intrebari!");
					
				}
			var string="";
			for(let i=0;i<raspunsuri.length;i++)
				string+=raspunsuri[i]+" ";
			alert(string);

		nr=0; sum=0;
}
