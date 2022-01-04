const btnAdd = document.querySelector(".add-content");
const div = document.createElement("div");
const p = document.createElement("p");

btnAdd.addEventListener("click", Create );


function Create(){
    
    p.innerHTML= "<form > <h1>Enter your tex here </h1>  </form>";
    div.appendChild(p);
    document.body.appendChild(div);
}
