@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'phot', phot: photo
  end
end