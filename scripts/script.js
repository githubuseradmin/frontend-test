var button1 = document.getElementById("button");
var form_open = document.getElementsByClassName("form_open")[0];
var form1 = document.getElementsByClassName("form")[0];
var filter = document.getElementsByClassName("filter")[0];
var close1 = document.getElementsByClassName("close")[0];

button1.onclick = function(){
	form_open.style.display = "block";
	form1.style.display = "block";
	filter.style.display = "block";
	document.body.style.overflow = "hidden";
}

close1.onclick = function(){
	form_open.style.display = "none";
	form1.style.display = "none";
	filter.style.display = "none";
	document.body.style.overflow = "scroll";
}