let main = document.querySelector("#main");
let imageDiv = document.querySelector(".target");
let image = document.querySelector(".image");
let description = document.querySelector(".description");

if (image) {
  image.addEventListener("mouseover", () => {
    image.classList.add("move-left");
    if (description) {
      description.classList.add("move-right");
    }
    if (main) {
      main.style.backgroundColor = "black";
    }
  });
  image.addEventListener("mouseout", () => {
    image.classList.replace("move-left", "move-lback");
    if (description) {
      description.classList.remove("move-right", "move-rback");
      if (main) {
        main.style.backgroundColor = "white";
      }
    }
  });
}

// if (main) {
//   main.style.backgroundColor = "black";
// }
