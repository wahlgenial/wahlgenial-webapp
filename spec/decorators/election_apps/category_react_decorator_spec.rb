require 'rails_helper'

RSpec.describe ElectionApps::CategoryReactDecorator do

  describe 'elections apps categories react decorator' do
    let(:output) do
      [{
        title: "First Category",
        description: "Category Description",
        icon_name: "category-icon-name",
        apps:
          [ { name: "App Name",
              description: "Description",
              link: 'http://link.app/',
              image: nil,
              image_thumb: nil,
              logo: nil,
              logo_thumb: nil },
            { name: "App Name",
              description: "Description",
              link: 'http://link.app/',
              image: nil,
              image_thumb: nil,
              logo: nil,
              logo_thumb: nil },
            { name: "App Name",
              description: "Description",
              link: 'http://link.app/',
              image: nil,
              image_thumb: nil,
              logo: nil,
              logo_thumb: nil }
        ]
      },
      { title: "Second Category",
        description: "Category Description",
        icon_name: "category-icon-name",
        apps:
          [ { name: "App Name",
            description: "Description",
            link: 'http://link.app/',
            image: nil,
            image_thumb: nil,
            logo: nil,
            logo_thumb: nil } ]
      }]
    end

    it 'returns the correct data tree' do
      category_1 = create(:category, title: 'First Category')
      category_2 = create(:category, title: 'Second Category')
      create(:app, category: category_1, link: 'http://link.app/')
      create(:app, category: category_1, link: 'http://link.app/')
      create(:app, category: category_1, link: 'http://link.app/')
      create(:app, category: category_2, link: 'http://link.app/')

      election_apps_categories = ElectionApps::CategoryReactDecorator.decorate(ElectionApps::Category.includes(:apps))
      expect(election_apps_categories.to_h).to eql(output)
    end
  end
end
