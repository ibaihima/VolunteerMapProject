class Review < ApplicationRecord
  belongs_to :user
  belongs_to :charity

  validates :rating, inclusion: 1..5
end
