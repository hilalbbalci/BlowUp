# json.array! @photos do |photo|
#   json.extract! photo, :id, :title, :description, :user_id
#   json.photoUrl url_for(photo.photo_url)
# end





@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
  end
end