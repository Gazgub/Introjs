/*when header is clicked, add a class*/

let myheader = document.querySelector("#header");

myheader.addEventListener("click", doSomething);

function doSomething(){
  console.log("clicked")
  //console.log("clicked");
  myheader.classList.add("awesome")

}
