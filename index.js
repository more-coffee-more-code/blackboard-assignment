const sidenav = document.querySelector('.navbar__sidenav')
const menuIcon = document.querySelector('.navbar__icon')
const searchIcon = document.getElementById('searchIcon')
const searchBar = document.getElementById('searchBar')
const dropdownToggle = document.getElementById('dropdownToggle')
const schoolsDropdown = document.getElementById('schoolsDropdown')

let slideIndex = 0

searchIcon.addEventListener('click', () => {
  searchBar.classList.toggle('show-search')
})

dropdownToggle.addEventListener('click', () => {
  schoolsDropdown.classList.toggle('show-dropdown')
})

function showSlides() {
  let i;
  let slides = document.querySelectorAll('.hero__carousel-slide')

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) slideIndex = 1

  slides[slideIndex-1].style.display = "block"

  setTimeout(showSlides, 2000); 
  
  return slideIndex
} 

showSlides()