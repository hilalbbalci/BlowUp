class Photo < ApplicationRecord
    validates :title, :description, :user_id, presence: true
    validates :user_id, uniqueness: true

    belongs_to :user
end
