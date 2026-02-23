const homeLink = document.getElementById('homeLink');
const productsLink = document.getElementById('productsLink');
const mainContent = document.getElementById('mainContent');
const productsContent = document.getElementById('productsContent');

homeLink.addEventListener('click', () => {
  mainContent.classList.remove('hidden');
  productsContent.classList.add('hidden');
});

productsLink.addEventListener('click', () => {
  mainContent.classList.add('hidden');
  productsContent.classList.remove('hidden');
});
