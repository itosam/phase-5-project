class User < ApplicationRecord

    has_many :cart_items
    has_many :items, through: :cart_items

    has_many :reviews
    has_many :items, through: :reviews

end
