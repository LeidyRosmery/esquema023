var div01=document.createElement("div");
div01.setAttribute("class","div01");
var div02=document.createElement("div");
div02.setAttribute("id","div02");
var div03=document.createElement("div");
div03.setAttribute("id","div03");
div02.appendChild(div03);
div01.appendChild(div02);
document.body.appendChild(div01);


var square01=document.createElement("div");
square01.setAttribute("class","square01");
var square02=document.createElement("div");
square02.setAttribute("id","square02");
var square03=document.createElement("div");
square03.setAttribute("id","square03");
square02.appendChild(square03);
square01.appendChild(square02);
document.body.appendChild(square01);
