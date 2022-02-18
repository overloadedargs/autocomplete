module RSpec
  module FeatureExampleGroup
    def self.included(group)
      group.metadata[:type] = :feature
      Capybara.app = Hanami.app
      Capybara.server = :webrick
      Capybara.default_driver = :selenium_chrome
      Capybara.javascript_driver = :selenium_chrome
    end
  end
end
