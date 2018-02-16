require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  describe 'New app' do
    it 'returns http success' do
      expect{ post :create_app, params: {
          election_apps_app: {
            name: 'App Name',
            description: 'Description text',
            screenshot: '',
            category_id: '',
            logo: '',
            link: 'http://someurl.ext' }
      }}.to change { ActionMailer::Base.deliveries.count }.by(1)
      expect(ElectionApps::App.last.name).to eql('App Name')
    end
  end
end
