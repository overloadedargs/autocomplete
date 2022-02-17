import RecipeClient from './RecipeClient'

const client = new RecipeClient({
  appId: 'db174bf3',
  appKey: '90597395fbf45646a5f2d9f54d5c8de1'
});

function callAPI(queryString) {
  let results = client.search({ query: queryString });

  return results;
}

// DOM elements
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const searchHtml = suggestions.innerHTML;

// Display matches
function displayMatches () {
  const matches = callAPI(this.value);
  matches.then(data => {
 
    console.log(data);
    data.forEach((key, value) => {
      console.log(key);
      let clone = document.createElement('div');
      clone.innerHTML = searchHtml;
      let recipeName = suggestions.querySelector('.recipe-name');
      recipeName.innerHTML = key.recipe.label;
      searchInput.appendChild(clone);
      return;
    });
  });
}

// Event listener
searchInput.addEventListener('keyup', displayMatches);