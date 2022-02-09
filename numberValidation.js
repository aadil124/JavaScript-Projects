
 document.getElementById("res").style.color="red"

function val(elem){

    if (isNaN(elem.value)) {
        document.getElementById("res").innerText= "Please Enter Numbers Only"
    } else {
        document.getElementById("res").innerText= ""
     if (elem.value.length > 10) {
        document.getElementById("res").innerText= "Please Enter 10 digit only"
     } else {
        document.getElementById("res").innerText= ""
}
    }}