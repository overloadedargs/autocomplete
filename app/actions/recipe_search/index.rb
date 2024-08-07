require 'rest-client'

module Autocomplete
  module Actions
    module RecipeSearch
      class Index < Autocomplete::Action
        def handle(request, response)
          # use Rack::Cors do
          #   allow do
          #     origins '*'
          #     resource '*', headers: :any, methods: [:get, :post, :patch, :put]
          #   end
          # end
        
          app_id = ""
          app_key = ""
          search = request.params.to_hash
          search = JSON.parse(search.keys.first.to_s)["query"]
          recipes = RestClient.get("https://api.edamam.com/search?q=#{search}&app_id=#{app_id}&app_key=#{app_key}", headers={})

          response.format = :json
          response.body = recipes
        end
      end
    end
  end
end