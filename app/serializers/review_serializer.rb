class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_content
  belongs_to :user
  has_one :charity
end
