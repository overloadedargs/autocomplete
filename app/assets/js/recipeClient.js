class RecipeClient {
  #client;

  // constructor() {
  // }

  search(query) {    
    let response = fetch(`http://localhost:2300/recipe_search`, { 
      method: "post", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)})
        .then((response) => response.json())
        .then((data) => {
           return data;
        });
      return response;
    };
  
  getSearchResult(query) {
    let result = this.search(query);
    return result;
  }
}

export default RecipeClient;