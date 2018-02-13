require 'rails_helper'

RSpec.describe ElectionAppsController, type: :controller do
  # describe "GET #index" do
  #   it "returns http success" do
  #     get :index
  #     expect(response).to have_http_status(:success)
  #   end
  # end

  describe 'New app' do
    it 'returns http success' do
      expect{ post :create, params: {
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

# RSpec.describe 'Election Apps nested params', type: :request do
#   describe "Extra Params" do
#     before do
#       create(:category, title: 'a Category')
#     end
#     it "returns http success" do
#       get '/wahl-apps/all/those/who/have/made/it'
#       expect(response).to have_http_status(:success)
#       expect(controller.instance_variable_get('@apps_categories').inspect).to include('a Category')
#       expect(controller.params[:params_string]).to eql('all/those/who/have/made/it')
#     end
#   end
# end
