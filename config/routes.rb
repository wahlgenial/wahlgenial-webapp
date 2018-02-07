Rails.application.routes.draw do

  get 'election_apps/index'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root 'pages#home'

  controller :pages do
    get 'home'
    get 'glossary'
    get 'imprint'
  end

  # matchnig `wahl-apps/a/b/c/d....`
  get 'wahl-apps/(*params_string)', to: 'election_apps#index', as: 'election_apps'

end
