class CharitySerializer < ActiveModel::Serializer
  attributes :id, :organization_name, :lat, :long, :website
end
