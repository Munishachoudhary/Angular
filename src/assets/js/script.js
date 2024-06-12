const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// tech-text

document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector(".scroll-images");
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");
  
    function checkScroll() {
      const currentScroll = scrollImages.scrollLeft;
      if (currentScroll === 0) {
        leftButton.setAttribute("disabled", "true");
        rightButton.removeAttribute("disabled");
      } else if (currentScroll === scrollLength) {
        rightButton.setAttribute("disabled", "true");
        leftButton.removeAttribute("disabled");
      } else {
        leftButton.removeAttribute("disabled");
        rightButton.removeAttribute("disabled");
      }
    }
  
    scrollImages.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();
  
    function leftScroll() {
      scrollImages.scrollBy({
        left: -200,
        behavior: "smooth"
      });
    }
  
    function rightScroll() {
      scrollImages.scrollBy({
        left: 200,
        behavior: "smooth"
      });
    }
  
    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);
  });












// var downArrow = document.getElementById("btn1");
// var upArrow = document.getElementById("btn2");

// downArrow.onclick = function () {
//     'use strict';
//     document.getElementById("first-list").style = "top:-620px";
//     document.getElementById("second-list").style = "top:-620px";
//     downArrow.style = "display:none";
//     upArrow.style = "display:block";
// };

// upArrow.onclick = function () {
//     'use strict';
//     document.getElementById("first-list").style = "top:0";
//     document.getElementById("second-list").style = "top:80px";
//     upArrow.style = "display:none";
//     downArrow.style = "display:block";
// };

