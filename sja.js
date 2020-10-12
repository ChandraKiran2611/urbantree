function validation(){

var form= document.getElementById("box");
var text= document.getElementById("tex");
var use= document.getElementById("tbox").value;
var c='chandrakiran';
var k='kathyayini';
var j='jahnavi';
var l='leela';
var m='manikanta';

if(use==c||use==k||use==j||use==l||use==m)
{
	text.innerHTML="Username is valid";
	text.style.color="#03ff18";
}
else{
	text.innerHTML="Username is invalid";
	text.style.color="#f51616";
	return false;
}
if(use==" ")
{
	form.classList.remove("invalid");
	form.classList.remove("valid");

}


}

function openNav() {
	var body= document.getElementById("bl").style.filter="blur(10px)";
  document.getElementById("slider").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("slider").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  var body= document.getElementById("bl").style.filter="";

}

function psw(){
	var form=document.getElementById("box");
	var pass=document.getElementById("pass").value;
	var c='chandrakiran';
	var k='kathyayini';
var j='jahnavi';
var l='leela';
var m='manikanta';

	if(pass==c)
	{
		return;
	}
	else{
		alert("invalid password try agian");
		return false;
	}
}