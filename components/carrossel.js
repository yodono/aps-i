const INITIAL_PAGE = 1;

// insira o índice atual para cada slide
let slideIndex = [INITIAL_PAGE, INITIAL_PAGE, INITIAL_PAGE];
let slideId = ["meusSlides1", "meusSlides2", "meusSlides3"]

const renderFirstSlides = () => {
  const slideContainers = Array.from(document.getElementsByClassName('slideshow-container'));

  slideContainers.forEach((_, index) => {
    showSlides(INITIAL_PAGE, index);
  })
}

function proSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block"; 
}

renderFirstSlides();
