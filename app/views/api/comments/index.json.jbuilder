@comments.each do |comment|
    json.set! comment.id do
      json.partial! 'comment', comment: comment
    end
  end



# @photos.each do |photo|
#   json.set! photo.id do
#     json.partial! 'photo', photo: photo
#   end
# end