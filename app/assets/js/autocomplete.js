import RecipeClient from './RecipeClient';

var debounce = require('./debounce');

const client = new RecipeClient({
  appId: '',
  appKey: ''
});

function callAPI(queryString) {
  let results = client.search({ query: queryString });
  return results;
}

// DOM elements
const searchInput = document.querySelector('.search-input');
const suggestions = document.querySelector('.suggestions');

// Display matches
function displayMatches() {
  let searchVal = document.querySelector('.search-input');

  const matches = callAPI(searchVal.value);

  let list = document.querySelector('.suggest-list');
  if (list !== null) {
    list.innerHTML = "";
  }

  matches.then(data => {
    data.hits.forEach(recipe => {
      let clone = suggestions.cloneNode(true);
      let recipeName = clone.querySelector('.recipe-name');
      let dishType = clone.querySelector('.dish-type');
      let calories = clone.querySelector('.calories');
      let ingredients = clone.querySelector('.ingredients');
      let image = clone.querySelector('.recipe-image');
      let link = clone.querySelector('.recipe-url');
      recipeName.innerHTML = `Name: ${recipe.recipe.label}`;
      dishType.innerHTML = `Dish Type: ${recipe.recipe.dishType[0]}`;
      calories.innerHTML = `Calories: ${Math.round(recipe.recipe.calories)}`;
      ingredients.innerHTML = `Ingredients: ${recipe.recipe.ingredientLines.join(', ')} `;
      link.href = recipe.recipe.url;
      image.src = recipe.recipe.image;
      list.appendChild(clone);
      return;
    });
  }).catch(err => {
    let clone = suggestions.cloneNode(true);
    let recipeName = clone.querySelector('.recipe-name');
    let image = clone.querySelector('.recipe-image');
    image.src = '';
    recipeName.innerHTML = `${err.message}`;
    list.appendChild(clone);
  });
}

var debounceMatches = debounce.debounce(function () {
  displayMatches();
}, 2000);

// Event listener
searchInput.addEventListener('keyup', debounceMatches);