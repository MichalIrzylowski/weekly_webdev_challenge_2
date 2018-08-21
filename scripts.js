var menu = document.getElementById("main-nav");
const menuItems = document.getElementsByClassName("menu__item");
const itemRadio = document.getElementsByClassName("item__radio");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 100) {
    menu.classList.add("smaller");
  } else if (this.window.scrollY <= 100) {
    menu.classList.remove("smaller");
  }
});

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
    itemRadio[i].checked = true;
  });
}
