# source 'https://rubygems.org'

# frozen_string_literal: true

source "https://rubygems.org"

# gem 'hanami',       '~> 2.0.1'
# gem 'hanami-model' # previous hanami
gem "hanami", "~> 2.1"
gem "hanami-assets", "~> 2.1"
gem "hanami-controller", "~> 2.1"
gem "hanami-router", "~> 2.1"
gem "hanami-validations", "~> 2.1"
gem "hanami-view", "~> 2.1"

gem "dry-types", "~> 1.0", ">= 1.6.1"
gem "puma"
gem "rake"

group :development do
  gem "hanami-webconsole", "~> 2.1"
  gem "guard-puma"
  # Code reloading
  # See: https://guides.hanamirb.org/projects/code-reloading
  # gem 'shotgun', platforms: :ruby
end

group :development, :test do
  gem "dotenv"
end

group :cli, :development do
  gem "hanami-reloader", "~> 2.1"
end

group :cli, :development, :test do
  gem "hanami-rspec", "~> 2.1"
end

group :test do
  gem "capybara"
  gem "rack-test"
  gem 'selenium-webdriver'
end

# gem 'nokogiri'
# gem 'sqlite3'