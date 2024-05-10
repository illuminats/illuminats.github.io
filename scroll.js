const svg = document.querySelector(`svg.line`);
const path = svg.querySelector(`path`);

const scroll = () => {
    const distance = window.scrollY;
    const totalDistance = svg.clientHeight - window.innerHeight;
    const percentage = distance / totalDistance;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
}

// Initiate the scroll function
scroll();

// Add scroll event listener
window.addEventListener("scroll", scroll);

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  const seeMoreButton = document.querySelector('.see-more-button');
  const hiddenCardsContainer = document.querySelector('.hidden-cards-container');

  seeMoreButton.addEventListener('click', function() {
    if (hiddenCardsContainer.style.display === "none" || hiddenCardsContainer.style.display === "") {
      hiddenCardsContainer.style.display = "flex";
      requestAnimationFrame(() => {
        hiddenCardsContainer.style.opacity = 1;
      });
      seeMoreButton.textContent = "See Less";
    } else {
      hiddenCardsContainer.style.opacity = 0;
      setTimeout(() => { 
        hiddenCardsContainer.style.display = "none"; 
        seeMoreButton.textContent = "See More";
      }, 500); // Corresponds to the CSS transition duration
    }
  });
});

// Function to show the login modal
function showLoginModal() {
  document.getElementById('loginModal').style.display = 'flex'; // Show the login modal
}

// Function to show the calendar modal
function showCalendarModal() {
  document.querySelector('.calendar-modal-background').style.display = 'flex'; // Show the calendar modal
}


// Function to close any modal
function closeModal() {
  document.querySelectorAll('.modal-background').forEach(function(modal) {
    modal.style.display = 'none'; // Hide the modal
  });
}


// Function to specifically close the login modal
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}
//confirmation//
function confirmBooking() {
  var date = document.getElementById('meeting-date').value;
  var time = document.getElementById('meeting-time').value;

  // First, set the text in the confirmation modal
  document.getElementById('confirmedDate').textContent = date;
  document.getElementById('confirmedTime').textContent = time;

  // Then close only the calendar modal specifically
  document.querySelector('.calendar-modal-background').style.display = 'none';

  // Finally, show the confirmation modal
  setTimeout(function() {
      document.getElementById('confirmationModal').style.display = 'flex';
  }, 100);  // slight delay to ensure it doesn't get closed by any other call
}

window.onclick = function(event) {
  console.log("Clicked on:", event.target); // Log the target of the click
  if (event.target.classList.contains('modal-background')) {
      console.log("Closing modal due to click on background.");
      closeModal(); // This function should close any modal
  }
}
function closeConfirmationModal(event) {
  event.stopPropagation(); // Prevent the click from bubbling up to the window
  document.getElementById('confirmationModal').style.display = 'none';
}

//last adition // 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        slide.style.display = 'none'; // Hide all slides
    });
    slides[index].classList.add('active');
    slides[index].style.display = 'block'; // Show the current slide
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the slideshow with the first slide
showSlide(currentSlide);

// STUFF FOR SIGN UP //

// Get the modal using the updated ID and class
var modal = document.getElementById("signupModal");

// Assuming you have buttons to open the modal that you can identify
var btns = document.querySelectorAll('.cta-button'); // Assuming the buttons to open the modal have class 'cta-button'

// Get the <span> element that closes the modal, using the updated class
var span = document.getElementsByClassName("signup-close")[0];

// Add event listeners to each button to open the modal
btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modal.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal content, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// FOR THE CTA BUTTONS  //
// Get the modal
var modal = document.getElementById("signupModal");

// Get the button that opens the modal
var btns = document.querySelectorAll('.cta-button');

// Get the link that opens the modal
var signupLink = document.getElementById("signupLink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("signup-close")[0];

// Function to open modal
function openModal() {
    modal.style.display = "block";
}

// Attach click event to each button and the signup link
btns.forEach(function(btn) {
    btn.addEventListener('click', openModal);
});

// Attach click event to the signup link
signupLink.addEventListener('click', openModal);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

