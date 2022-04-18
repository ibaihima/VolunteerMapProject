class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :charities, through: :reviews

    validates :username, :password , presence: true
end
