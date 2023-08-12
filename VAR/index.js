const aramaAlani = document.querySelector(".search-bar");
const uygulamalarımiz = document.querySelector(".uygulamalarimiz");
const begendiklerim = document.querySelector(".begendiklerim");
const sepetim = document.querySelector(".sepetim");
const closeModal = document.querySelector(".close-modal");
const d = document.querySelector(".d");
const overlay = document.querySelector(".overlay");
const ana = document.getElementsByTagName("main");
console.log(ana);
aramaAlani.addEventListener("click", () => {
  const alan = aramaAlani;
  alan.value = "";
});

closeModal.addEventListener("click", () => {
  d.classList.add("hidden");
  overlay.classList.add("hidden");
});
