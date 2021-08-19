const showMenuMobile = () => {
  const burger = document.querySelector(".burger");
  const closeMenu = document.querySelector(".close-menu");
  const menuMobile = document.querySelector(".menu-mobile");
  burger &&
    burger.addEventListener("click", () => {
      menuMobile.classList.toggle("menu-mobile-actives");
    });
  closeMenu.addEventListener("click", () => {
    menuMobile.classList.toggle("menu-mobile-actives");
  });
};

showMenuMobile();
