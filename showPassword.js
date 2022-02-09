function toggle(elem){
    var password= document.getElementById("password");
var type= password.getAttribute("type")

if (type === "password") {
    password.setAttribute('type','text')
    elem.innerText="Hide Password"

} else {
    password.setAttribute('type','password')
    elem.innerText="Show Password"
}
} 