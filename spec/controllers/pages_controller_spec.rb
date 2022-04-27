require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  describe 'New app' do
    let(:category) { FactoryBot.create(:category) }
    let(:params) do
      {
        election_apps_app: {
          name: 'App Name',
          description: 'Description text',
          screenshot: '',
          category_id: category.id,
          logo: '',
          link: 'http://someurl.ext'
        }
      }
    end

    it 'returns http success', aggregate_failures: true do
      expect{ post :create_app, params: params }.to change { ActionMailer::Base.deliveries.count }.by(1)
      expect(ElectionApps::App.last.name).to eql('App Name')
    end
  end
end
