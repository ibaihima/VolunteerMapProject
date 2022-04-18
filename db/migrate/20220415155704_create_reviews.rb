class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :charity, null: false, foreign_key: true
      t.float :rating
      t.string :review_content

      t.timestamps
    end
  end
end
