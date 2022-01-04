/*Variables */
const productsLink = document.querySelector(".products-link");
const supplierLink = document.querySelector(".supplier-link");

const recommended = document.querySelector(".select-recommended");
const materials = document.querySelector(".select-materials");
const products = document.querySelector(".select-products");
const closeCart= document.querySelector(".close-icon");
const cartIcon = document.querySelector(".cart-sympol");
const bars = document.querySelector(".bars");
const responiveNav = document.querySelectorAll(".responsive");
const navUl= document.querySelector(".column");
//To the top button

ToTop = document.getElementById("buttonToTop");

//Show btn when scroll
window.onscroll = function() {scrollTillTheTop()};

function scrollTillTheTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    ToTop.style.display = "block";
  } else {
    ToTop.style.display = "none";
  }
}

//when click go to the top 
function toTheTop() {
  //For Chrome, Firefox, IE and Opera
  window.scrollTo({top: 0, behavior: 'smooth'});
}




/* scrolling to sections */
/* products */


productsLink.addEventListener("click",()=>{
  productsScroll();
})
function productsScroll(){
  document.querySelector('.section-title').scrollIntoView({
      behavior: 'smooth'
  });
}

/*SUPPLLIER JOIN */

supplierLink.addEventListener("click",()=>{
  supplierScroll();
})
function supplierScroll(){
  document.querySelector('.ahmed').scrollIntoView({
      behavior: 'smooth'
  });
}


/* SELECTION */

recommended.addEventListener("click",()=>{
  document.getElementById("recommendation-id").style.display="flex";
  document.getElementById("materials-id").style.display="none";
  document.getElementById("products-id").style.display="none";
/*   document.querySelectorAll(".products-showcase").forEach(prod=>prod.style.transform="translateY(10px)"); */
  
})

materials.addEventListener("click",()=>{
  document.getElementById("recommendation-id").style.display="none";
  document.getElementById("materials-id").style.display="flex";
  document.getElementById("products-id").style.display="none";
  
})
products.addEventListener("click",()=>{
  document.getElementById("recommendation-id").style.display="none";
  document.getElementById("materials-id").style.display="none";
  document.getElementById("products-id").style.display="flex";
})




/*CART */
closeCart.addEventListener("click", ()=>{
    document.querySelector(".cart-overlay").style.display="none";
})

cartIcon.addEventListener("click",()=>{
  document.querySelector(".cart-overlay").style.display="block";

})



/* Responive nav */



bars.addEventListener("click",()=>{
  navUl.classList.add("column-toggle");
  responiveNav.forEach((respons)=>{
    respons.classList.add("display-toggle");
  })
})

navUl.addEventListener("mouseleave",()=>{
  
  responiveNav.forEach((respons)=>{
    respons.classList.remove("display-toggle");
  })

})
/* bars.addEventListener("click",()=>{
  responiveNav.forEach((responsive)=>{
    responsive.style.display="block";
  })
}) */



/*practice */
/* 
const createDiv = document.createElement("div");
const paragrapghClicked = (ahmed)=> {
  if(ahmed.target.nodeName==="P"){
    console.log("pragrapgh was clicked" + ahmed.target.textContent);
  }
  
}


for (let i = 0 ; i<=200 ; i++){
  const createP= document.createElement("p");
  createP.textContent=" this is paragraph " + i;

  

  createDiv.appendChild(createP);
}

createDiv.addEventListener("click",paragrapghClicked);
document.body.appendChild(createDiv);

 */
