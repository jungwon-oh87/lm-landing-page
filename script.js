const burger = document.getElementById("burger");
const phone_nav_container = document.getElementById("phone-nav-container");

burger.addEventListener("click", () => {
  phone_nav_container.classList.toggle("phone-nav-toggle");
  if (phone_nav_container.classList.contains("removed")) {
  } else {
    phone_nav_container.classList.add("removed");
  }
});
