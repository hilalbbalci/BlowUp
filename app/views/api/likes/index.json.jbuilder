@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :photo_id, :liker_id
    end
end