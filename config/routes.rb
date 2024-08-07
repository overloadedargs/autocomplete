# frozen_string_literal: true

module Autocomplete
  class Routes < Hanami::Routes
    # Add your routes here. See https://guides.hanamirb.org/routing/overview/ for details.
    # Configure your routes here
    # See: https://guides.hanamirb.org/routing/overview
    #
    # Example:
    # get '/hello', to: ->(env) { [200, {}, ['Hello from Hanami!']] }
    root to: 'finder.index'

    #get "/recipe_search", to: "recipe_search.index" 
    get "/finder", to: "finder.index"
    post "/recipe_search", to: "recipe_search.index"
  end
end
