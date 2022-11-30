class Item < ApplicationRecord
    has_many :cart_items
    has_many :users, through: :cart_items

    has_many :reviews
    has_many :users, through: :reviews
end
