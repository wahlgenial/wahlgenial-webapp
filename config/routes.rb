Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root 'pages#home'

  controller :pages do
    get 'home'
    get 'glossary'
  end

end
