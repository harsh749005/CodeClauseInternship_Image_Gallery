import data from "./data.js";

let details = `
 <div class="heading">Gallery -> Photos</div>
            <h3>Image Gallery</h3>
<h2>Total Images : ${data.length}</h2>`
document.querySelector(".heading-container").innerHTML = details;

function showImages() {
  let clutter = "";
  data.forEach((obj) => {
    clutter += `
          <div class="image-handler" key=${obj.id}>
            <img class="image" src="${obj.url}" alt="" name=${obj.value}>
          </div>`;
  });
  document.querySelector(".image-collection").innerHTML = clutter;

  const carsCheckbox = document.querySelectorAll(".cars");
  

  carsCheckbox.forEach((Checkbox) => {
    Checkbox.addEventListener("change", (event) => {
      const images = document.querySelectorAll(".image");

      images.forEach((img) => {
        const imgName = img.getAttribute("name");

        if (Checkbox.checked) {
          
          if (imgName === Checkbox.name) {
            img.parentElement.style.display = "block";
          } else {
            img.parentElement.style.display = "none";
          }
        } else {
          img.parentElement.style.display = "block";
        }
      });
    });
  });
}
showImages();


function showMenu(){
  const menu = document.querySelector(".menu");
  const root = document.getElementById("root");
  const navbar = document.getElementById("navbar");
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  close.style.display = "none";
  let isMenuOpen = "false"
  menu.addEventListener('click',()=>{
    if(isMenuOpen){
      navbar.style.display = "none";
      root.style.opacity = 1;
      close.style.display = "none";
      open.style.display = "block";
    }
    else{
      root.style.opacity = .6;
      navbar.style.display = "flex";
      close.style.display = "block";
      open.style.display = "none";
    }
    isMenuOpen = !isMenuOpen;
  })

}
showMenu();