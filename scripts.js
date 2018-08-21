var menu = document.getElementById("main-nav");
const menuItems = document.getElementsByClassName("menu__item");
const itemRadio = document.getElementsByClassName("item__radio");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 100) {
    menu.classList.add("smaller");
  } else if (this.window.scrollY <= 100) {
    menu.classList.remove("smaller");
  }
  if (window.scrollY < 1000) {
    itemRadio[0].checked = true;
  }
  if (window.scrollY >= 1000 && window.scrollY < 1700) {
    itemRadio[1].checked = true;
  }
  if (window.scrollY >= 1700 && window.scrollY < 2490) {
    itemRadio[2].checked = true;
  }
  if (window.scrollY >= 2490 && window.scrollY < 4026) {
    itemRadio[3].checked = true;
  }
  if (window.scrollY >= 4526 && window.scrollY < 5390) {
    itemRadio[4].checked = true;
  }
  if (window.scrollY >= 5390) {
    itemRadio[5].checked = true;
  }
});

// for (let i = 0; i < menuItems.length; i++) {
//   menuItems[i].addEventListener("click", function() {
//     itemRadio[i].checked = true;
//   });
// }
