// Code directly taken from edamam-api Node module
const http = require('axios');
const deepmerge = require('deepmerge');

module.exports = class RecipeClient {
  constructor({ appKey, appId }) {
    this.appKey = appKey;
    this.appId = appId;
    this.basePath = 'http://localhost:8010/proxy/';
    this.apiUrl = 'http://localhost:8010/proxy/api/';
  }

  async makeRequest(method, url, data = null, config = {}) {
    const mergedConfig = deepmerge({
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        app_id: this.appId,
        app_key: this.appKey
      }
    }, config);

    const response = await http[method](
      url.includes('*')
        ? `${this.basePath}${url.replace('*', '')}`
        : `${this.apiUrl}${url}`
      ,
      ['post', 'put'].includes(method.toLowerCase())
        ? JSON.stringify(data)
        : mergedConfig,
      ['post', 'put'].includes(method.toLowerCase()) && mergedConfig
    );

    return this.unpackResponse(response);
  }

  async get(url, config = {}) {
    return this.makeRequest('get', url, null, config);
  }

  async unpackResponse(response) {
    switch (response.status) {
      case 200:
        return response.data;
      default:
        throw new Error(`${response.status} response from server: ${response.data}`);
    }
  }

  search({
    query = null,
    recipeId = null,
    limit = {
      from: 0,
      to: 30
    },
    maxIngredients = null,
    mealType = null,
    calories = null,
    time = null,
    dietLabels = [],
    healthLabels = [],
    cuisineTypeLabels = [],
    dishTypeLabels = [],
    excludedIngredients = []
  }) {
    const params = [
      ['q', query],
      ['r', recipeId],
      ['from', limit.from],
      ['to', limit.to],
      ['ingr', maxIngredients],
      ['mealType', mealType],
      ['calories', calories],
      ['time', time],
      ...dietLabels.map(dl => ['diet', dl]),
      ...healthLabels.map(hl => ['health', hl]),
      ...cuisineTypeLabels.map(ctl => ['cuisineType', ctl]),
      ...dishTypeLabels.map(dtl => ['dishType', dtl]),
      ...excludedIngredients.map(ei => ['excluded', ei])
    ]
      .map(([key, value]) => [null, undefined].includes(value) ? null : `${key}=${encodeURIComponent(value)}`)
      .filter(x => x)
      .join('&');

    return this.get(`*search?${params}`, {});
  }
};