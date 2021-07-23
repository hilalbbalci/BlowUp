class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :commenter_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end
    add_index :comments, :photo_id
  end
end

