json.extract! photo, :id, :title, :description, :user_id
json.post url_for(photo.post)
