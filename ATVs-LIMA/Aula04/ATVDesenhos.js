// ATVDesenhos.js - Funcionalidade do carrossel

document.addEventListener('DOMContentLoaded', function() {
  // Configuração do carrossel
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  // Função para mostrar um slide específico
  function showSlide(index) {
    // Ajusta o índice se for beyond dos limites
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }
    
    // Move o carrossel para o slide atual
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
  }
  
  // Event listeners para os botões
  prevButton.addEventListener('click', function() {
    showSlide(currentSlide - 1);
  });
  
  nextButton.addEventListener('click', function() {
    showSlide(currentSlide + 1);
  });
  
  // Rotação automática do carrossel (opcional)
  let slideInterval = setInterval(function() {
    showSlide(currentSlide + 1);
  }, 5000);
  
  // Pausa a rotação automática quando o mouse está sobre o carrossel
  const carrossel = document.querySelector('.carrossel');
  carrossel.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
  });
  
  carrossel.addEventListener('mouseleave', function() {
    slideInterval = setInterval(function() {
      showSlide(currentSlide + 1);
    }, 5000);
  });
  
  // Inicializa o carrossel
  showSlide(currentSlide);
});

// Fim do ATVDesenhos.js

