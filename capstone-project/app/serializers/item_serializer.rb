class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :image, :brand
  has_many :cart_items
  has_many :users, through: :cart_items
end
