class ElectionAppsController < ApplicationController
  def index
    @apps_categories = election_apps_categories
  end

  def teacher
    #@apps = TeacherApp.where(published:true)
    @apps = TeacherApp.search(params[:search])
    #@apps = TeacherApp.where(["name LIKE ?","%#{params[:search]}%"])
  end

  def teacher_apps_view
    @apps =  TeacherApp.where(slug: params[:slug])
  end

  def new
    @app = TeacherApp.new
  end

  private
  def election_apps_categories
    ElectionApps::CategoryReactDecorator.decorate(ElectionApps::Category.includes(:apps).where({'election_apps_apps.published' => true}))
  end

end
