import debounce from './debounce';
import RecipeClient from './recipeClient';

const client = new RecipeClient();

function callAPI(queryString) {
  let response = client.getSearchResult({ query: queryString });

  return response;
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
    JSON.parse(data).hits.forEach(recipe => {
      let clone = suggestions.cloneNode(true);

      setFields(clone, recipe);

      list.appendChild(clone);
      return;
  });
}).catch (err => {
  let clone = suggestions.cloneNode(true);
  let recipeName = clone.querySelector('.recipe-name');
  let image = clone.querySelector('.recipe-image');
  image.src = '';
  recipeName.innerHTML = `${err.message}`;
  list.appendChild(clone);
});
}

function setFields(clone, recipe) {
  let fields = {
    recipeName : '.recipe-name',
    dishType : '.dish-type',
    calories : '.calories',
    ingredients : '.ingredients',
    image : '.recipe-image',
    link : '.recipe-url'
  };
  
  clone.querySelector(fields.recipeName).innerHTML = recipeLabel(recipe);
  clone.querySelector(fields.dishType).innerHTML = dishType(recipe);
  clone.querySelector(fields.calories).innerHTML = calories(recipe);
  clone.querySelector(fields.ingredients).innerHTML = ingredients(recipe);

  clone.querySelector(fields.image).src = recipe.recipe.image;
  clone.querySelector(fields.ingredients).href = recipe.recipe.url;
}

function recipeLabel(recipe) {
  return `Name: ${recipe.recipe.label}`;
}

function dishType(recipe) {
  return `Dish Type: ${recipe.recipe.dishType[0]}`;
}

function calories(recipe) {
  return `Calories: ${Math.round(recipe.recipe.calories)}`
}

function ingredients(recipe) {
  return `Ingredients: ${recipe.recipe.ingredientLines.join(', ')} `;
}

var debounceMatches = debounce.debounce(function () {
  displayMatches();
}, 2000);

// Event listener
searchInput.addEventListener('keyup', debounceMatches);