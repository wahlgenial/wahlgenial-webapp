Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root 'pages#home'

  controller :pages do
    get 'home'
    get 'glossary'
    get 'election_apps'
    get 'imprint'
  end
end
