class Comment < ApplicationRecord

    validates :commenter_id, :photo_id, presence: true

    belongs_to :photo,
       

    belongs_to :commenter,
        foreign_key: :commenter_id,
        class_name: :User


end
