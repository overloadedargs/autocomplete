import RecipeClient from './RecipeClient';

var debounce = require('./debounce');

const client = new RecipeClient({
  appId: '381d9f12',
  appKey: 'd21ca6af4c4a6746f24a3cb7eb250429'
});

function callAPI(queryString) {
  let results = client.search({ query: queryString });

  return results;
}

// DOM elements
const searchInput = document.querySelector('.search-input');
const suggestions = document.querySelector('.suggestions');
const searchAppend = document.querySelector('.search');

// Display matches
function displayMatches () {
  let searchVal = document.querySelector('.search-input');
  const matches = callAPI(searchVal.value);
  
  matches.then(data => {
    let list = document.querySelector('.suggest-list');
    if (list !== null) { 
        list.innerHTML = "";
     }

    data.hits.forEach(recipe => {
      let parent = document.createElement('div');
      let clone = document.createElement('div');
      clone.innerHTML = suggestions.innerHTML;
      let recipeName = clone.querySelector('.recipe-name');
      recipeName.innerHTML = recipe.recipe.label;
      list.appendChild(clone);
      return;
    });
  });
}

var debounceMatches = debounce.debounce(function() {
  displayMatches();
}, 180);

// Event listener
searchInput.addEventListener('keyup', debounceMatches);