class UserWithCharitiesSerializer < ActiveModel::Serializer
  attributes :id
  has_many :charities
end
