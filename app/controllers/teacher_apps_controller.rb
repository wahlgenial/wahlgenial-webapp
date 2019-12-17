class TeacherAppsController < ApplicationController
  #für die Suche
  def index
    #@apps = TeacherApp.where(published:true)
    @apps = TeacherApp.search(params[:search])
    #@apps = TeacherApp.where(["name LIKE ?","%#{params[:search]}%"])
  end

  def show
    @apps = TeacherApp.find_by(slug: params[:slug])
  end

end
