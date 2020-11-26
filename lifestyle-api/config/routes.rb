Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :products, only: [:index, :show]

    resource :user, only: [:create]

    resource :session, only: [:create, :destroy]
  end
end
