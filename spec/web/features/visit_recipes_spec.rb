require 'features_helper'

RSpec.describe 'Visit recipes' do
    it 'is successful' do
        visit '/'

        expect(page).to have_content('Recipes')
    end
end