class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :cart_items
  has_many :items, through: :cart_items
end
