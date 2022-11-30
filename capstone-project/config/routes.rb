Rails.application.routes.draw do
  resources :reviews
  resources :user_items
  resources :users
  resources :items
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
