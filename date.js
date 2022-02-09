var date = new Date();
function getDate(){
document.getElementById("res").innerText = date;
}
function year(){
document.getElementById("res").innerText = date.getFullYear();
}
function month(){
var months=["Jan","feb","March","apr","may","june","july","aug"]

document.getElementById("res").innerText = months[date.getMonth()];
}
// function getDate(){
// document.getElementById("res").innerText = date;
// }

