class ElectionAppsController < ApplicationController
  def index
    @apps_categories = election_apps_categories
  end

  def new
    @election_app = ElectionApps::App.new()
  end

  def create
    if (@election_app = ElectionApps::App.create(election_app_params))
      redirect_to new_election_app_path, notice: t('.success')
    else
      render :new
    end
  end

  private

  def election_apps_categories
    ElectionApps::CategoryReactDecorator.decorate(ElectionApps::Category.includes(:apps))
  end

  def election_app_params
    params.require(:election_apps_app).permit(
      :name,
      :description,
      :image,
      :category_id,
      :logo,
      :link )
  end
end
