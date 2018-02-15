Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  resources :election_apps, only: [:new, :create]
  controller :pages do
    get 'home'
    get 'imprint'
  end


  # matchnig `controller/a/b/c/d....`
  get 'wahl-apps/(*params_string)', to: 'election_apps#index', as: 'apps'
  get 'glossary/(*params_string)', to: 'glossary#index', as: 'glossary'

  get 'calendar', to: 'calendar#index', as: 'calendar'

  root 'pages#home'
end
