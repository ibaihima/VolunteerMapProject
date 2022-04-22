class UserWithReviewsSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews
end
