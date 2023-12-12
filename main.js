
const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function() {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

/** social media connect */
function openSocialMedia(url) {
  window.open(url, '_blank');
}


/**progress bar */
var percent = document.querySelector(".percent");
var progress = document.querySelector(".progress");
var preload = document.querySelector(".preload");
var homePage = document.getElementById("div1");

var loading = setInterval(animate, 70);
var count = 0;
var maxPercentage = 100;

function animate() {
  count += 4;

  count = Math.min(count, maxPercentage);

  var widthPercentage = (count / maxPercentage) * 100;

  progress.style.width = widthPercentage + "%";
  percent.textContent = count + "%";

  if (count >= maxPercentage) {
    clearInterval(loading);

  
    preload.style.display = "none";
    homePage.style.display = "block";
    
  }
}

/*navigation section*/
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

 
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}


/**login functionality */

function operateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;


  if (username === '' || password === '') {
    alert('Please enter both username and password.');
  } else {
    alert('Login successful!');
  }
}


/**preload quote */
// script.js

// Function to fetch a random quote from the Quotable API
async function fetchRandomQuote() {
  try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();

      if (response.ok) {
          return data.content;
      } else {
          console.error('Error fetching quote:', data.message);
          return 'Failed to fetch a quote';
      }
  } catch (error) {
      console.error('Error fetching quote:', error.message);
      return 'Failed to fetch a quote';
  }
}

// Function to update the loading-text div with a random quote
async function updateQuote() {
  const quoteContainer = document.getElementById('quoteContainer');
  quoteContainer.textContent = await fetchRandomQuote();
}

// Call the updateQuote function to set the initial quote
updateQuote();


