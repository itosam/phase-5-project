class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :integer
end
