class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating
  belongs_to :user
  belongs_to :item

end
