var form = document.querySelector("form");
var myvalue = document.getElementById("name");

form.onsubmit = function(e) {
    e.preventDefault();
    console.log(myvalue.value);    
}