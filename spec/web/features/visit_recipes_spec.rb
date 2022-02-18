require 'features_helper'

RSpec.describe 'Visit recipes' do
    it 'is successful' do
        visit '/'

        expect(page).to have_content('Recipes Search')
    end

    scenario 'can interract withautocomplete', js: true do
        visit '/'
        find(".search-input").send_keys('apple')
        expect(page).to have_text(/Name/, minimum: 2, wait: 30)
    end
end