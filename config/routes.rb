Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do  
      resources :photos, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:show, :index, :create, :destroy] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy, :show] 
  end
    root to: 'static_pages#root'


end
