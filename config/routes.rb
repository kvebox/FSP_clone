Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :posts, only: [] do 
      resources :comments
      resources :likes, only: [:index, :create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :edit] do
      resources :posts 
    end
  end
  
end
