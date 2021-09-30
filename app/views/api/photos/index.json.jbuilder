json.array! @photos do |photo|
  json.extract! photo, :id, :title, :description, :user_id, :post
  # json.post url_for(photo.post)
end





# @photos.each do |photo|
#   json.set! photo.id do
#     json.partial! 'photo', photo: photo
#   end
# end