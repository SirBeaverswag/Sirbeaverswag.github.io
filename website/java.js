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


// THIS IS FOR IMAGE 2 I'M SURE THERES A BETTER WAY TO DO THIS BUT I DON'T HAVE TIME TO FIGURE IT OUT.
const openPopupBtn1 = document.getElementById('openPopupBtn1');
const closePopupBtn1 = document.getElementById('closePopupBtn1');
const popup1 = document.getElementById('myPopup1');
const overlay1 = document.getElementById('popupOverlay1');
const popupInput1 = document.getElementById('popupInput1');

openPopupBtn1.addEventListener('click', () => {
  popup1.classList.add('active');
  overlay1.classList.add('active');
});

closePopupBtn1.addEventListener('click', () => {
  popup1.classList.remove('active');
  overlay1.classList.remove('active');
  // You can also clear the input or perform other actions on close
  popupInput.value = ''; 
});

// Optional: Close popup by clicking outside (on the overlay)
overlay1.addEventListener('click', () => {
  popup1.classList.remove('active');
  overlay1.classList.remove('active');
  popupInput1.value = '';
});

// THIS IS FOR IMAGE 3
const openPopupBtn2 = document.getElementById('openPopupBtn2');
const closePopupBtn2 = document.getElementById('closePopupBtn2');
const popup2 = document.getElementById('myPopup2');
const overlay2 = document.getElementById('popupOverlay2');
const popupInput2 = document.getElementById('popupInput2');

openPopupBtn2.addEventListener('click', () => {
  popup2.classList.add('active');
  overlay2.classList.add('active');
});

closePopupBtn2.addEventListener('click', () => {
  popup2.classList.remove('active');
  overlay2.classList.remove('active');
  // You can also clear the input or perform other actions on close
  popupInput.value = ''; 
});

// Optional: Close popup by clicking outside (on the overlay)
overlay2.addEventListener('click', () => {
  popup2.classList.remove('active');
  overlay2.classList.remove('active');
  popupInput2.value = '';
});

// THIS IS FOR IMAGE 4
const openPopupBtn3 = document.getElementById('openPopupBtn3');
const closePopupBtn3 = document.getElementById('closePopupBtn3');
const popup3 = document.getElementById('myPopup3');
const overlay3 = document.getElementById('popupOverlay3');
const popupInput3 = document.getElementById('popupInput3');

openPopupBtn3.addEventListener('click', () => {
  popup3.classList.add('active');
  overlay3.classList.add('active');
});

closePopupBtn3.addEventListener('click', () => {
  popup3.classList.remove('active');
  overlay3.classList.remove('active');
  // You can also clear the input or perform other actions on close
  popupInput3.value = ''; 
});

// Optional: Close popup by clicking outside (on the overlay)
overlay3.addEventListener('click', () => {
  popup3.classList.remove('active');
  overlay3.classList.remove('active');
  popupInput3.value = '';
});

// THIS IS FOR IMAGE 5
const openPopupBtn4 = document.getElementById('openPopupBtn4');
const closePopupBtn4 = document.getElementById('closePopupBtn4');
const popup4 = document.getElementById('myPopup4');
const overlay4 = document.getElementById('popupOverlay4');
const popupInput4 = document.getElementById('popupInput4');

openPopupBtn4.addEventListener('click', () => {
  popup4.classList.add('active');
  overlay4.classList.add('active');
});

closePopupBtn4.addEventListener('click', () => {
  popup4.classList.remove('active');
  overlay4.classList.remove('active');
  // You can also clear the input or perform other actions on close
  popupInput4.value = ''; 
});

// Optional: Close popup by clicking outside (on the overlay)
overlay4.addEventListener('click', () => {
  popup4.classList.remove('active');
  overlay4.classList.remove('active');
  popupInput4.value = '';
});

// THIS IS FOR IMAGE 6
const openPopupBtn5 = document.getElementById('openPopupBtn5');
const closePopupBtn5 = document.getElementById('closePopupBtn5');
const popup5 = document.getElementById('myPopup5');
const overlay5 = document.getElementById('popupOverlay5');
const popupInput5 = document.getElementById('popupInput5');

openPopupBtn5.addEventListener('click', () => {
  popup5.classList.add('active');
  overlay5.classList.add('active');
});

closePopupBtn5.addEventListener('click', () => {
  popup5.classList.remove('active');
  overlay5.classList.remove('active');
  // You can also clear the input or perform other actions on close
  popupInput.value = ''; 
});

// Optional: Close popup by clicking outside (on the overlay)
overlay5.addEventListener('click', () => {
  popup5.classList.remove('active');
  overlay5.classList.remove('active');
  popupInput5.value = '';
});