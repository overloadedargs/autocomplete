class RecipeClient {
  #client;

  // constructor() {
  // }

  async search(query) {
    let response = "";
    
    fetch(`http://localhost:2300/recipe_search`, { 
      method: "post", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query),  
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    return response;
  }
  
  async getSearchResult(query) {
    const results = await this.search({ q: query });
    return results;
  }
}

export default RecipeClient;