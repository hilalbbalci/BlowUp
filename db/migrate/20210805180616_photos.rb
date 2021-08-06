class Photos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :photos, [:user_id, :title], unique: true
  end
end
