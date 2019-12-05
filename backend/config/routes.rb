Rails.application.routes.draw do
  resources :cart_items
  resources :shipments
  resources :payments
  resources :orders
  resources :product_orders
  resources :products
  resources :user_infos
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # post 'authenticate', to: 'authentication#authenticate'
end
