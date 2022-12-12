const main=document.querySelector("#form");
const result=document.querySelector("#results");

form.addEventListener("click", (e) => {
e.preventDefault();

 console.log(e.target[0].value);
})