Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index, :update] do  
      resources :photos, only: [:index]
      resources :follows, only: [:create]
    end

    resource :session, only: [:create, :destroy]
    resources :likes, only: [:index, :create, :destroy]

    resources :photos, only: [:show, :index, :create, :destroy] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy, :show] 
    resources :follows, only: [:destroy]

  end
    root to: 'static_pages#root'


end
