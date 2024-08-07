# frozen_string_literal: true

require "hanami"

module Autocomplete
  class App < Hanami::App
    # connect-src problem
    config.actions.content_security_policy[:connect_src] += " http://localhost:2300"
    #config.actions.content_security_policy = false

  end
end
