class ElectionAppsController < ApplicationController
  def index
    @apps_categories = election_apps_categories
  end

  def teacher
    @apps = ElectionApps::App.where(published:true)
  end

  private
  def election_apps_categories
    ElectionApps::CategoryReactDecorator.decorate(ElectionApps::Category.includes(:apps).where({'election_apps_apps.published' => true}))
  end

end
