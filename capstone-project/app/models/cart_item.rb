class CartItem < ApplicationRecord
    belongs_to :users
    belongs_to :item
end
