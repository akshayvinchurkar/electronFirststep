var form = document.querySelector("form");
var myvalue = document.getElementById("name");

form.onsubmit = (e) => {
    e.preventDefault();
    console.log(myvalue.value);
}