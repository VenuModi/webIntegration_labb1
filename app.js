
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
