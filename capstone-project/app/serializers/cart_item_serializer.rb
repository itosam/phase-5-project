class CartItemSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :item
end
