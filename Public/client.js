console.log("hi I'm connected to you, HTML!");

const form = document.getElementById("dada_form");
form.onsubmit = event => {
    //don't know what this is
event.preventDefault();
const dadaInput = event.target.elements ["input"];
const name = dadaInput.value;
console.log(name);

fetch("/add", {
    method: "POST",
    body: JSON.stringify({name: name}),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => {
    console.log("no errors");

});


};
