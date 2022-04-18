class CreateCharities < ActiveRecord::Migration[6.1]
  def change
    create_table :charities do |t|
      t.string :organization_name
      t.float :lat
      t.float :long
      t.string :website
      t.string :mission
      t.string :program_description


      t.timestamps
    end
  end
end
