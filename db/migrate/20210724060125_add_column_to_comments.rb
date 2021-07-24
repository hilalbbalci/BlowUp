class AddColumnToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :comment, :text, null: false
  end
end
