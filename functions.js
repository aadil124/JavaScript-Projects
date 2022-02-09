function greet(){
    var name= document.getElementById("name").value;
    alert(name);
    document.getElementsByClassName("greet")[0].innerHTML = "Hello " + name
    } 