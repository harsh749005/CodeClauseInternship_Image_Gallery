import data from "./data.js";

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
