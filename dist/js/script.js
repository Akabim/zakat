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

function validateInput(input) {
  input.value = input.value.replace(/[^0-9]/g, "") || 0; // Hanya mengizinkan angka
  input.value = parseInt(input.value).toLocaleString("id-ID"); // Menambahkan pemisahan ribuan
}

function hitungZakat() {
  // Mengambil nilai dari input
  var gaji = parseInt(document.getElementById("gaji").value.replace(/\./g, "")) || 0;
  var pendapatanLain = parseInt(document.getElementById("pendapatanLain").value.replace(/\./g, "")) || 0;
  var hutang = parseInt(document.getElementById("hutang").value.replace(/\./g, "")) || 0;

  // Menghitung jumlah harta
  var totalHarta = gaji + pendapatanLain - hutang;

  // Pengecekan agar tidak NaN
  if (gaji === 0) {
    return (value = 0);
  }

  // Mengecek apakah memenuhi nisab
  if (totalHarta >= 7060788) {
    // Menghitung zakat
    var zakat = Math.min(0.025 * totalHarta, totalHarta);

    // Menampilkan hasil zakat dalam elemen input dengan pemisahan ribuan
    document.getElementById("hasilZakat").value = zakat.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  } else {
    // Menampilkan alert jika tidak memenuhi nisab
    Swal.fire({
      icon: "info",
      title: "Oops...",
      html: "Kamu tidak berkewajiban untuk zakat karena tidak memenuhi nisab sebesar Rp. 7.060.788",
    });
  }
}

function updateTotalHarta() {
  // Mengambil nilai dari input
  var gaji = parseInt(document.getElementById("gaji").value.replace(/\./g, "")) || 0;
  var pendapatanLain = parseInt(document.getElementById("pendapatanLain").value.replace(/\./g, "")) || 0;
  var hutang = parseInt(document.getElementById("hutang").value.replace(/\./g, "")) || 0;

  // Menghitung jumlah harta
  var totalHarta = gaji + pendapatanLain - hutang;

  // Menampilkan hasil total harta dalam elemen input dengan pemisahan ribuan
  document.getElementById("totalHarta").value = "Rp. " + totalHarta.toLocaleString("id-ID");
}
