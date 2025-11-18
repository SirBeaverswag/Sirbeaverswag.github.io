const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('myPopup');
const overlay = document.getElementById('popupOverlay');
const popupInput = document.getElementById('popupInput');

openPopupBtn.addEventListener('click', () => {
  popup.classList.add('active');
  overlay.classList.add('active');
});

closePopupBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
  // You can also clear the input or perform other actions on close
  popupInput.value = ''; 
});

// Optional: Close popup by clicking outside (on the overlay)
overlay.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
  popupInput.value = '';
});