class CreateUserItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.integer :quantity
      t.references :user, foreign_key: true 
      t.references :item, foreign_key: true

      t.timestamps
    end
  end
end
