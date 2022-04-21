class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :charities, through: :reviews

    validates :username, presence: true, uniqueness: true 
end
