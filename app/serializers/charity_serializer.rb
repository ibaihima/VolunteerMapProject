class CharitySerializer < ActiveModel::Serializer
  attributes :id, :organization_name, :lat, :long, :website, :mission, :program_description
  # belongs_to :user
end
