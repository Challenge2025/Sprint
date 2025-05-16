document.querySelector(".burger").addEventListener("click", function () {
    const nav = document.querySelector("nav");
    const isActive = nav.classList.contains("active");
    if (isActive) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  
  });
  
  document.querySelector(".burger").addEventListener("click", (event) => {
    console.log("Burger clicked", event);
  });