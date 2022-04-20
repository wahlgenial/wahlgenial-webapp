require 'rails_helper'

RSpec.describe ElectionApps::CategoryReactDecorator do

  describe 'elections apps categories react decorator' do
    let(:output) do
      [{
        title: "First Category",
        slug: "first-category",
        description: "Category Description",
        icon_name: "category-icon-name",
        apps:
          [ { name: "App Name 1",
              slug: "app-name-1",
              description: "Description",
              link: 'http://link.app/',
              screenshot: nil,
              screenshot_thumb: nil,
              logo: nil,
              logo_thumb: nil,
              featured: true },
            { name: "App Name 2",
              slug: "app-name-2",
              description: "Description",
              link: 'http://link.app/',
              screenshot: nil,
              screenshot_thumb: nil,
              logo: nil,
              logo_thumb: nil,
              featured: false },
            { name: "App Name 3",
              slug: "app-name-3",
              description: "Description",
              link: 'http://link.app/',
              screenshot: nil,
              screenshot_thumb: nil,
              logo: nil,
              logo_thumb: nil,
              featured: false }
        ]
      },
      { title: "Second Category",
        slug: "second-category",
        description: "Category Description",
        icon_name: "category-icon-name",
        apps:
          [ { name: "App Name 4",
            slug: "app-name-4",
            description: "Description",
            link: 'http://link.app/',
            screenshot: nil,
            screenshot_thumb: nil,
            logo: nil,
            logo_thumb: nil,
            featured: true } ]
      }]
    end

    it 'returns the correct data tree' do
      ElectionApps::Category.destroy_all # not sure why this is needed on the CI, maybe because we still use Rails 5.0 defaults?

      category_1 = create(:category, title: 'First Category')
      category_2 = create(:category, title: 'Second Category')
      create(:app, name: 'App Name 1', category: category_1, link: 'http://link.app/', featured: true)
      create(:app, name: 'App Name 2', category: category_1, link: 'http://link.app/')
      create(:app, name: 'App Name 3', category: category_1, link: 'http://link.app/')
      create(:app, name: 'App Name 4', category: category_2, link: 'http://link.app/', featured: true)

      election_apps_categories = ElectionApps::CategoryReactDecorator.decorate(ElectionApps::Category.includes(:apps))

      expect(election_apps_categories.to_h).to match_array(output)
    end
  end
end
