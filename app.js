const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const imgTanya = document.getElementById('img-tanya');
const imgJohn = document.getElementById('img-john');
const txtTanya = document.getElementById('txt-tanya');
const txtJohn = document.getElementById('txt-john');


function clickButton() {
  console.log("clicked");
  if (imgTanya.classList.contains("inactive") && txtTanya.classList.contains("inactive")) {
    imgTanya.className = "testimonial__img active";
    txtTanya.className = "testimonial__details active";
  } else {
    imgTanya.className = "testimonial__img inactive";
    txtTanya.className = "testimonial__details inactive";
  }

  if (imgJohn.classList.contains("inactive") && txtJohn.classList.contains("inactive")) {
    imgJohn.className = "testimonial__img active";
    txtJohn.className = "testimonial__details active";
  } else {
    imgJohn.className = "testimonial__img inactive";
    txtJohn.className = "testimonial__details inactive";
  }
}

prevButton.addEventListener("click", clickButton);
nextButton.addEventListener("click", clickButton);