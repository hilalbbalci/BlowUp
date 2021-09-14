class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :followers, :string, array: true
    change_column :users, :followings, :string, array: true
  end
end
