const gajiBulanan = document.getElementById("gaji-bulanan").value();
const pendapatanLain = document.getElementById("pendapatan-lain").value();
const hutangOrCicilan = document.getElementById("hutang-or-cicilan").value();

const totalPendapatan = gajiBulanan + pendapatanLain - hutangOrCicilan;
const nisab = totalPendapatan * 0.025;

// navbar

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
