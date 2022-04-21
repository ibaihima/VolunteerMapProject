class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_content
  belongs_to :user
  has_one :charity
end