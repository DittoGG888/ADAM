const navSlide = () => {
    const burger = document.querySelector(".BurgerButton");
    const nav = document.querySelector(".otherPages");
    const theHeader = document.querySelector(".head");
    const navLinks = document.querySelectorAll(".otherPages li");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("NavActive");
      theHeader.classList.toggle("hdrMutate");
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 1
          }s`;
        }
      });
    });
  
    // navLinks.forEach((link) => {
    //   link.addEventListener("click", () => {
    //     console.log("link clicked");
    //     nav.classList.toggle("NavActive");
    //     link.style.animation = "";
        
    //   });
    // });
  };
  
  navSlide();