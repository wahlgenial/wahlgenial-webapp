class PagesController < ApplicationController
  include ApplicationHelper
  def home
    @election_programs = election_programs
    @political_agreements = BundestagVote::PoliticalAgreement.all.limit(3)
    @last_election = Calendar::Event.order(:datetime).last
  end

  def imprint
  end

  def about
    @election_app = ElectionApps::App.new()
  end

  def create_app

    @election_app = ElectionApps::App.new(election_app_params)
    if (@election_app.save)
      ElectionAppsMailer.new_app_registered(
        @election_app,
        rails_admin.show_url(model_name: 'election_apps~app', id: @election_app.id),
        user_details
      ).deliver
      redirect_to about_path, notice: t('.success')
    else
      render :about
    end
  end

  private

  def election_programs
    ElectionPrograms::TopicReactDecorator.decorate_collection(ElectionPrograms::Topic.includes(questions: {opinions: :party}))
  end


  def election_app_params
    params.require(:election_apps_app).permit(
      :name,
      :description,
      :screenshot,
      :category_id,
      :logo,
      :link )
  end
end
