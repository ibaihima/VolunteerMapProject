class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_content
  has_one :user
  has_one :charity
end
