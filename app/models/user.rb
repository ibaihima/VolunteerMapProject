class User < ApplicationRecord
    has_many :reviews   
    has_many :charities, through: :reviews

    validates :username, :password , presence: true
end
