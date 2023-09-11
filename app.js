
// Footer Setup
const getElement = (selector) => {

  const element = document.querySelector(selector);
  if (element) return element
  throw Error('Please double check your class names, there is no ${selector} class')
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear


//JSON
function setupParagraph() {
  const p1 = document.querySelector("#p1");

  fetch("contact.json")
    .then((response) => response.json())
    .then((data) => {
      p1.textContent = data[0].p1;
    });
}
setupParagraph();


//Validation
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name.length < 2) {
    alert('Name must be at least 2 characters long.');
    return false;
  }
  if(containsSpecialCharacters(name)){
    alert('Name cannot contain special characters.')
    return false;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (message.length < 10) {
    alert('Message must be at least 10 characters long.');
    return false;
  }

  alert('submitted!')
  return true;
}

function containsSpecialCharacters(inputString){
  const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return specialCharacterRegex.test(inputString);
}

function isValidEmail(email) {
 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// Favorite Button
document.addEventListener('DOMContentLoaded', function () {
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  const favoritedRecipes = JSON.parse(localStorage.getItem('favoritedRecipes')) || [];

  // Initialize the UI based on Local Storage
  favoriteButtons.forEach((button, index) => {
    if (favoritedRecipes.includes(index)) {
      // Recipe at this index is favorited
      button.classList.add('favorited');
    }

    button.addEventListener('click', function () {
      if (favoritedRecipes.includes(index)) {
        // Recipe is already favorited, so unfavorite it
        const indexOfRecipe = favoritedRecipes.indexOf(index);
        favoritedRecipes.splice(indexOfRecipe, 1);
        button.classList.remove('favorited');
      } else {
        // Recipe is not favorited, so favorite it
        favoritedRecipes.push(index);
        button.classList.add('favorited');
      }

      // Save the updated favoritedRecipes array to Local Storage
      localStorage.setItem('favoritedRecipes', JSON.stringify(favoritedRecipes));
    });
  });
});



