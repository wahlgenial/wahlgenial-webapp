Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  resources :election_apps, only: [:new, :create]

  controller :pages do
    get 'home'
    get 'glossary'
    get 'imprint'
  end

  # matchnig `wahl-apps/a/b/c/d....`
  get 'wahl-apps/(*params_string)', to: 'election_apps#index', as: 'apps'

  root 'pages#home'

end
