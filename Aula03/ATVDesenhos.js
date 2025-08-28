// ================== CARROSSEL ==================
let slides = document.querySelectorAll(".slide");
let index = 0;

function mostrarSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
});

// Troca automática a cada 8s
setInterval(() => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}, 8000);

// ================== BOTÃO TOPO ==================
let topo = document.getElementById("topo");

window.onscroll = function() {
  topo.style.display = document.documentElement.scrollTop > 200 ? "block" : "none";
};

topo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
