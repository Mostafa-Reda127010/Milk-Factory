


const submit = document.querySelector(".form-button");
const logo = document.querySelector(".logo");
const form = document.querySelector(".form");
const box = document.querySelector(".submitted");
const add = document.querySelector(".add-other");


submit.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(e)
    logo.classList.add("display-none");
    document.getElementById("ahmed").style.display="none";
    box.classList.add("display");
    add.classList.add("display");
 
    
})

add.addEventListener("click", ()=>{
    logo.classList.remove("display-none");
    document.getElementById("ahmed").style.display="flex";
    box.classList.remove("display");
    add.classList.remove("display");
})


