function toggleDarkMode() {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle'); //pega a classe dark-mode
  
    body.classList.toggle('dark-mode');

  
    if (body.classList.contains('dark-mode')) {
      modeToggle.src = './img/white.png';
    } else {
      modeToggle.src = './img/dark.png';
    }
} //troca imagem


function showModal() {
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');

  modal.style.display = 'block';
  overlay.style.display = 'block';

  overlay.addEventListener('click', hideModal);
} //mostra o modal 

function hideModal() {
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');

  modal.style.display = 'none';
  overlay.style.display = 'none';
} //remove modal

window.onload = function () {
  showModal();
}; // att quando atualiza