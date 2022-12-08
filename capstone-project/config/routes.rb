Rails.application.routes.draw do
  resources :reviews
  # resources :user_items
  # resources :users
  resources :items

  post 'cart_items', to: "cart_items#create"
  get 'cart_items', to: "cart_items#index"
  delete 'cart_items/:id', to: "cart_items#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
