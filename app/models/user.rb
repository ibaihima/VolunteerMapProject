class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :charities, through: :reviews

    validates :username, :password_digest, presence: true
end
