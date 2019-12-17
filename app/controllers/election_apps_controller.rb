class ElectionAppsController < ApplicationController
  def index
    @apps_categories = election_apps_categories
  end

  private
  def election_apps_categories
    ElectionApps::CategoryReactDecorator.decorate(ElectionApps::Category.includes(:apps).where({'election_apps_apps.published' => true}))
  end

end
