class AddColumnToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :followers, :string, array: true, default: []
    add_column :users, :followings, :string, array: true, default: []
  end
end
