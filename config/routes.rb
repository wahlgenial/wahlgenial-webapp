Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # matchnig `controller/a/b/c/d....`
  get 'wahl-apps/(*params_string)', to: 'election_apps#index', as: 'apps'
  get 'lehrer-wahl-apps/', to: 'election_apps#teacher', as: 'teacher_apps'
  get 'lehrer-wahl-apps/:slug', to: 'election_apps#teacher_apps_view', as: 'teacher_apps_view'
  get 'woerterbuch/(*params_string)', to: 'glossary#index', as: 'glossary'
  get 'wahl-termine', to: 'calendar#index', as: 'calendar'

  post 'about', to: 'pages#create_app', as: 'new_app'

  get 'home', to: 'pages#home', as: 'home'
  get 'impressum', to: 'pages#imprint', as: 'imprint'
  get 'ueber-uns', to: 'pages#about', as: 'about'
  get 'datenschutzerklaerung', to: 'pages#data_protection', as: 'data_protection'



  root 'pages#home'
end
