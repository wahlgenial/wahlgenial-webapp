require 'rails_helper'

RSpec.describe ElectionAppsController, type: :controller do
  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end
end

RSpec.describe 'Election Apps nested params', type: :request do
  describe "Extra Params" do
    it "returns http success" do
      category = create(:category, title: 'a Category')
      create(:app, name: 'App Name 1', category: category, link: 'http://link.app/', published: true)
      create(:app, name: 'App Name 2', category: category, link: 'http://link.app/', published: true)
      
      get '/wahl-apps/all/those/who/have/made/it'
      expect(response).to have_http_status(:success)
      expect(controller.instance_variable_get('@apps_categories').inspect).to include('a Category')
      expect(controller.params[:params_string]).to eql('all/those/who/have/made/it')
    end
  end
end
