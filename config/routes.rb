Rails.application.routes.draw do
  resources :reviews
  resources :charities, only: [:show, :index]
  resources :users, only: [:create, :index]

  #signup/login routes
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #other custom routes
  get "/reviews/users/me", to: "reviews#by_user_id"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
