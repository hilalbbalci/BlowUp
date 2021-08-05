class Photo < ApplicationRecord
    validates :title, :description, :user_id, presence: true
    validates :title, uniqueness: {scope: :user_id}
    has_one_attached :post
    belongs_to :user

    has_many :comments,
        foreign_key: :photo_id,
        class_name: :Photo

    # has_many :commenters,
    #     through: :comments,
    #     source: :commenter

    has_many :likes,
        foreign_key: :photo_id,
        class_name: :Like

    # has_many :likers,
    #     through: :likes,
    #     source: :liker
end
