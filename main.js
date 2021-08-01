meanu_list_array = ["Chichen Tandoori Pizza",
                    "Veg supreme pizza",
                    "Panner tikka pizza",
                    "Deluxe Veggie pizza",
                    "Veg Extravaganza Pizza"];

function getmeanu(){
var htmldata; 
htmldata="<ol class='menulist'>"
meanu_list_array.sort();
for(var i=0;i<meanu_list_array.length;i++){
    htmldata=htmldata+'<li>' + meanu_list_array[i] + '</li>'
}    
htmldata=htmldata+"</ol>"
document.getElementById("display_meanu").innnerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
meanu_list_array.push(item); 
meanu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<meanu_list_array.length;i++){

    htmldata="<div class='cards'>" +'<img src="images/pizzaling.png"/>' + meanu_list_array[i] + '</div>'
}
  htmldata=htmldata+"</section>"
  document.getElementById("display_addmenu").innerHTML = htmldata;