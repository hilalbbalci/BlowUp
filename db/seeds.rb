# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative "tag_names"
require "open-uri"

User.delete_all
Photo.delete_all
# Follow.delete_all
Comment.delete_all
# Tag.delete_all
# Taggedphoto.delete_all

####### CREATE TAGS #######

# Tags::Names.each do |name|
#   Tag.create!({ name: name })
# end

####### CREATE USERS #######

demo = User.create!(
  username: "demo_user",
  password: "password",
)

diane = User.create!(
  username: "Diane",
  password: "password",
)
annie = User.create!(
  username: "Annie",
  password: "password",
)

robert = User.create!(
  username: "Robert",
  password: "password",
)
steve = User.create!(
  username: "Steve",
  password: "password",
)

edward = User.create!(
  username: "Edward",
  password: "password",
)
alfred = User.create!(
  username: "Alfred",
  password: "password",
)

irving = User.create!(
  username: "Irving",
  password: "password",
)

cindy = User.create!(
  username: "Cindy",
  password: "password",
)
amy = User.create!(
  username: "Amy",
  password: "password",
)
drew = User.create!(
  username: "Drew",
  password: "password",
)
john = User.create!(
  username: "John",
  password: "password",
)
kate = User.create!(
  username: "Kate",
  password: "password",
)
jazz = User.create!(
  username: "Jasmine",
  password: "password",
)

####### CREATE FOLLOW #######

# Follow.create({ followed_id: annie.id, follower_id: robert.id })
# Follow.create({ followed_id: annie.id, follower_id: diane.id })
# Follow.create({ followed_id: diane.id, follower_id: robert.id })
# Follow.create({ followed_id: robert.id, follower_id: demo.id })

# Follow.create({ followed_id: steve.id, follower_id: irving.id })
# Follow.create({ followed_id: edward.id, follower_id: cindy.id })
# Follow.create({ followed_id: steve.id, follower_id: irving.id })

# Follow.create({ followed_id: cindy.id, follower_id: demo.id })
# Follow.create({ followed_id: irving.id, follower_id: robert.id })
# Follow.create({ followed_id: cindy.id, follower_id: steve.id })

# Follow.create({ followed_id: amy.id, follower_id: john.id })
# Follow.create({ followed_id: irving.id, follower_id: kate.id })
# Follow.create({ followed_id: kate.id, follower_id: jazz.id })

# Follow.create({ followed_id: jazz.id, follower_id: drew.id })
# Follow.create({ followed_id: drew.id, follower_id: john.id })
# Follow.create({ followed_id: cindy.id, follower_id: steve.id })

# Follow.create({ followed_id: john.id, follower_id: irving.id })
# Follow.create({ followed_id: jazz.id, follower_id: amy.id })
# Follow.create({ followed_id: amy.id, follower_id: diane.id })

# Follow.create({ followed_id: amy.id, follower_id: annie.id })
# Follow.create({ followed_id: jazz.id, follower_id: annie.id })
# Follow.create({ followed_id: robert.id, follower_id: drew.id })

# Follow.create({ followed_id: jazz.id, follower_id: cindy.id })
# Follow.create({ followed_id: edward.id, follower_id: jazz.id })
# Follow.create({ followed_id: cindy.id, follower_id: steve.id })

# Follow.create({ followed_id: drew.id, follower_id: edward.id })
# Follow.create({ followed_id: cindy.id, follower_id: amy.id })
# Follow.create({ followed_id: jazz.id, follower_id: diane.id })

####### IMPORT IMAGES #######

file1 = URI.open("")
file2 = URI.open("")
file3 = URI.open("")
file4 = URI.open("")
file4 = URI.open("")
file5 = URI.open("")
file6 = URI.open("")
file7 = URI.open("")
file8 = URI.open("")
file9 = URI.open("")
file10 = URI.open("")
file11 = URI.open("")
file12 = URI.open("")
file13 = URI.open("")
file14 = URI.open("")
file15 = URI.open("")
file16 = URI.open("")
# file17 = URI.open("")
file18 = URI.open("")
file19 = URI.open("")
file20 = URI.open("")
file21 = URI.open("")
file22 = URI.open("")
file23 = URI.open("")
file24 = URI.open("")
file25 = URI.open("")
file26 = URI.open("")
file27 = URI.open("")
file28 = URI.open("")
file29 = URI.open("")
# file30 = URI.open("")
# file31 = URI.open("")
# file32 = URI.open("")
file33 = URI.open("")

file34 = URI.open("")
file35 = URI.open("")
file36 = URI.open("")
file37 = URI.open("")
file38 = URI.open("")
file39 = URI.open("")
file40 = URI.open("")
file41 = URI.open("")
file42 = URI.open("")
file43 = URI.open("")
file44 = URI.open("")
file45 = URI.open("")
file46 = URI.open("")
file47 = URI.open("")
file48 = URI.open("")
file49 = URI.open("")
file50 = URI.open("")
 "Sunset in Daytona Beach", description: "Sunset at Daytona Beach near Hilton Hotel.", user_id: diane.id)
photo2 = photo.new(title: "Moon", description: "Captured in the evening.", user_id: robert.id)
photo3 = photo.new(title: "Basketball hoop", description: "View of the silhouette a of a basketball hoop.", user_id: annie.id)
photo4 = photo.new(title: "Guggenheim", description: "Looking up at the inside the Guggenheim museum.", user_id: steve.id)
photo5 = photo.new(title: "The beach", description: "Panorama of the beach in the morning.", user_id: diane.id)
photo6 = photo.new(title: "Let there be Light", description: "Closeup of a candle wick.", user_id: alfred.id)
photo7 = photo.new(title: "Frozen guy", description: "Captured from the Portrait Gallery!", user_id: irving.id)
photo8 = photo.new(title: "Golden Gate Bridge", description: "A very cold and foggy day at the Golden Gate bridge!", user_id: edward.id)
photo9 = photo.new(title: "Flower", description: "Beautiful flower.", user_id: cindy.id)
photo10 = photo.new(title: "Sunset", description: "Sunset landscape captured from my balcony.", user_id: diane.id)
photo11 = photo.new(title: "Transamerica Tower", description: "Looking up at the Transamerica tower", user_id: robert.id)
photo12 = photo.new(title: "Underneath a dock", description: "Love the lines made by this dock.", user_id: cindy.id)
photo13 = photo.new(title: "Scandal", description: "Famous hotel in the nation's capital.", user_id: cindy.id)
photo14 = photo.new(title: "Untitled", description: "windows.", user_id: alfred.id)
photo15 = photo.new(title: "Frozen Bike", description: "A chill morning at the National Gallery of Art", user_id: jazz.id)
photo16 = photo.new(title: "Church in the Wild", description: "Walking around Palo Alto, when I spotted this interesting looking church.", user_id: drew.id)
# photo17 = photo.new(title: "Laser eyes", description: "Camilo probably wants a treat!", user_id: amy.id)
photo18 = photo.new(title: "Nations Capital", description: 'Crisp morning in the Nation\'s Capital', user_id: kate.id)
photo19 = photo.new(title: "Power", description: "San Francisco City Hall at an angle.", user_id: john.id)
photo20 = photo.new(title: "My Morning", description: "Still life of a coffee and cream", user_id: alfred.id)
photo21 = photo.new(title: "Couch Vibes", description: "Capture of my couch with the tv on", user_id: jazz.id)
photo22 = photo.new(title: "Churro Cupcake", description: "Closeup photo of a Churro Cupcake", user_id: amy.id)
photo23 = photo.new(title: "Beach Vibes", description: "Panorama of a beach in Daytona, Fl", user_id: jazz.id)
photo24 = photo.new(title: "SF Ferry Building", description: "Looking up at the Ferry Building in San Francisco, CA", user_id: annie.id)
photo25 = photo.new(title: "Looking up At the Flag", description: "A flag hanging down in Boston, MA for Memorial Day weekend", user_id: kate.id)
photo26 = photo.new(title: "Closeup on Nature", description: "A close up photo of a lily flower", user_id: amy.id)
photo27 = photo.new(title: "Magenta Magic", description: "Photo of a vibrant lily flower", user_id: amy.id)
photo28 = photo.new(title: "Lime", description: "Macro still of a dried up lime", user_id: jazz.id)
photo29 = photo.new(title: "Mars", description: "Ocean Beach in San Francisco, edited a bit :)", user_id: diane.id)
# photo30 = photo.new(title: "Carrying the Weight of the World", description: "Statue near Rockefeller Center in NYC", user_id: robert.id)
# photo31 = photo.new(title: "Loving Eyes", description: "Rufino waiting for a treat", user_id: jazz.id)
# photo32 = photo.new(title: "Treats", description: "Just got woke up from a nap", user_id: jazz.id)
photo33 = photo.new(title: "Statue", description: "Black and white still of a statue in a museum", user_id: drew.id)
photo34 = photo.new(title: 'Looking down Grant St.', description: 'Grant st. in San Franciscos\'s Chinatown. ', user_id: amy.id)
photo35 = photo.new(title: 'Street Lamp', description: 'Close up shot of a street lamp in SF Chinatown.', user_id: amy.id)
photo36 = photo.new(title: 'Night Lights', description: 'San Francisco Chinatown at night. ', user_id: amy.id)
photo37 = photo.new(title: 'SF Chinatown', description: 'Grant st. on the weekend ', user_id: amy.id)
photo38 = photo.new(title: 'Angles', description: 'Church in SF North Beach, taken at an angle.', user_id: kate.id)
photo39 = photo.new(title: 'Columns', description: 'Columns of the Filoli mansion', user_id: john.id)
photo40 = photo.new(title: 'Dahlia', description: 'Close up of a Dahlia flower', user_id: diane.id)
photo41 = photo.new(title: 'Dahlia Bud', description: 'Close up of a Dahlia bud', user_id: diane.id)
photo42 = photo.new(title: 'Faucet', description: 'Black and white still of a kitchen faucet.', user_id: john.id)
photo43 = photo.new(title: 'Curves and Shadows', description: 'Photo of my lamp', user_id: robert.id)
photo44 = photo.new(title: 'Piano', description: 'Piano from the Filoli mansion', user_id: robert.id)
photo45 = photo.new(title: 'Dock of the Bay', description: 'Dock restaurant in Sausalito, CA', user_id: steve.id)
photo46 = photo.new(title: 'Shop in Chinatown', description: 'Poultry store in SF Chinatown.', user_id: amy.id)
photo47 = photo.new(title: 'Triangles', description: 'Details at the base of the Transamerica Tower.', user_id: cindy.id)
photo48 = photo.new(title: 'Tree', description: 'Beautful tree', user_id: drew.id)
photo49 = photo.new(title: 'Flowers at Brunch', description: 'Table and flower display at Filoli Mansion', user_id: diane.id)
photo50 = photo.new(title: 'Vintage Nights', description: 'Vintage Tv and Lamp', user_id: annie.id)

photo1.post.attach(io: file1, filename: "daytona.jpeg")
photo2.post.attach(io: file2, filename: "moon.jpeg")
photo3.post.attach(io: file3, filename: "basketballhoop.JPG")
photo4.post.attach(io: file4, filename: "architecture.JPG")
photo5.post.attach(io: file5, filename: "daytona2.jpeg")
photo6.post.attach(io: file6, filename: "fire.jpeg")
photo7.post.attach(io: file7, filename: "frozenguy.JPG")
photo8.post.attach(io: file8, filename: "goldengate.jpeg")
photo9.post.attach(io: file9, filename: "flower.jpeg")
photo10.post.attach(io: file10, filename: "sunset.jpeg")
photo11.post.attach(io: file11, filename: "transamerica.JPG")
photo12.post.attach(io: file12, filename: "underdock.jpeg")
photo13.post.attach(io: file13, filename: "watergate.JPG")
photo14.post.attach(io: file14, filename: "windows.JPG")
photo15.post.attach(io: file15, filename: "bike.jpg")
photo16.post.attach(io: file16, filename: "building.JPG")
# photo17.post.attach(io: file17, filename: "camilo.jpeg")
photo18.post.attach(io: file18, filename: "capital.jpeg")
photo19.post.attach(io: file19, filename: "cityhall.jpeg")
photo20.post.attach(io: file20, filename: "coffee.jpeg")
photo21.post.attach(io: file21, filename: "couch.jpeg")
photo22.post.attach(io: file22, filename: "cupcake.jpeg")
photo23.post.attach(io: file23, filename: "daytona.jpeg")
photo24.post.attach(io: file24, filename: "ferry.jpeg")
photo25.post.attach(io: file25, filename: "flag.jpeg")
photo26.post.attach(io: file26, filename: "flower1.jpeg")
photo27.post.attach(io: file27, filename: "flower2.jpeg")
photo28.post.attach(io: file28, filename: "lime.JPG")
photo29.post.attach(io: file29, filename: "mars.jpg")
# photo30.post.attach(io: file30, filename: "nyc.JPG")
# photo31.post.attach(io: file31, filename: "ruf.jpeg")
# photo32.post.attach(io: file32, filename: "rufino2.JPG")
photo33.post.attach(io: file33, filename: "statue.jpeg")
photo34.post.attach(io: file34, filename: 'chinatown.jpeg')
photo35.post.attach(io: file35, filename: 'chinatownlamp.jpeg')
photo36.post.attach(io: file36, filename: 'chinatownnight.jpeg')
photo37.post.attach(io: file37, filename: 'chinatownstreet.jpeg')
photo38.post.attach(io: file38, filename: 'churchnorthbeach.jpeg')
photo39.post.attach(io: file39, filename: 'columns.jpeg')
photo40.post.attach(io: file40, filename: 'dahlia.jpeg')
photo41.post.attach(io: file41, filename: 'dahliabud.jpeg')
photo42.post.attach(io: file42, filename: 'faucet.jpeg')
photo43.post.attach(io: file43, filename: 'furniture.jpeg')
photo44.post.attach(io: file44, filename: 'piano.jpeg')
photo45.post.attach(io: file45, filename: 'restaurantdock.jpeg')
photo46.post.attach(io: file46, filename: 'shopchinatown.jpeg')
photo47.post.attach(io: file47, filename: 'transamericabuildingdetail.jpeg')
photo48.post.attach(io: file48, filename: 'trees.jpeg')
photo49.post.attach(io: file49, filename: 'vintageflowers.jpeg')
photo50.post.attach(io: file50, filename: 'vintagetv.jpeg')

photo1.save!
photo2.save!
photo3.save!
photo4.save!
photo5.save!
photo6.save!
photo7.save!
photo8.save!
photo9.save!
photo10.save!
photo11.save!
photo12.save!
photo13.save!
photo14.save!
photo15.save!
photo16.save!
# photo17.save!
photo18.save!
photo19.save!
photo20.save!
photo21.save!
photo22.save!
photo23.save!
photo24.save!
photo25.save!
photo26.save!
photo27.save!
photo28.save!
photo29.save!
# photo30.save!
# photo31.save!
# photo32.save!
photo33.save!
photo34.save!
photo35.save!
photo36.save!
photo37.save!
photo38.save!
photo39.save!
photo40.save!
photo41.save!
photo42.save!
photo43.save!
photo44.save!
photo45.save!
photo46.save!
photo47.save!
photo48.save!
photo49.save!
photo50.save!

###### COMMENTS #######

Comment.create!({ photo_id: photo1.id, author_id: diane.id, comment: "Loving the beach theme" })
Comment.create!({ photo_id: photo2.id, author_id: annie.id, comment: "Love seeing pictures of the moon" })
Comment.create!({ photo_id: photo3.id, author_id: robert.id, comment: "Great colors!" })
Comment.create!({ photo_id: photo4.id, author_id: steve.id, comment: "Good composition" })
Comment.create!({ photo_id: photo5.id, author_id: edward.id, comment: "This makes me miss the beach." })
Comment.create!({ photo_id: photo6.id, author_id: alfred.id, comment: "Love the detail in the wick!" })
Comment.create!({ photo_id: photo7.id, author_id: irving.id, comment: "Good composition" })
Comment.create!({ photo_id: photo8.id, author_id: cindy.id, comment: "The Golden Gate is wonderful!" })
Comment.create!({ photo_id: photo9.id, author_id: amy.id, comment: "Love the details in the flower." })
Comment.create!({ photo_id: photo10.id, author_id: drew.id, comment: "Wow that is an epic sunset" })
Comment.create!({ photo_id: photo11.id, author_id: john.id, comment: "This makes me miss SF!" })
Comment.create!({ photo_id: photo12.id, author_id: kate.id, comment: "The picture is so vivid, I can hear the waves crashing." })
Comment.create!({ photo_id: photo13.id, author_id: jazz.id, comment: 'I\'ve been to this hotel, not bad' })
Comment.create!({ photo_id: photo14.id, author_id: diane.id, comment: "Love the National Gallery, and angles made by windows." })
Comment.create!({ photo_id: photo15.id, author_id: annie.id, comment: "Such a beautiful building!" })
Comment.create!({ photo_id: photo16.id, author_id: robert.id, comment: "What a cool building!" })
# Comment.create!({ photo_id: photo17.id, author_id: steve.id, comment: "What a cute dog!" })
Comment.create!({ photo_id: photo18.id, author_id: edward.id, comment: "What an ideal image of the Capitol Building" })
Comment.create!({ photo_id: photo19.id, author_id: alfred.id, comment: "Love the angle this was taken at." })
Comment.create!({ photo_id: photo21.id, author_id: cindy.id, comment: "Loving the vibes" })
Comment.create!({ photo_id: photo22.id, author_id: amy.id, comment: "Loving the detail in the frosting!" })
Comment.create!({ photo_id: photo22.id, author_id: drew.id, comment: "This is making me hungry" })
Comment.create!({ photo_id: photo24.id, author_id: john.id, comment: "Now I miss San Francisco" })
Comment.create!({ photo_id: photo25.id, author_id: kate.id, comment: "Super vibrant colors" })
Comment.create!({ photo_id: photo26.id, author_id: jazz.id, comment: "Loving the details of the flower" })
Comment.create!({ photo_id: photo27.id, author_id: diane.id, comment: "Awesome colors" })
Comment.create!({ photo_id: photo28.id, author_id: annie.id, comment: "Really cool details and colors" })
Comment.create!({ photo_id: photo29.id, author_id: robert.id, comment: "Looks like another planet" })
# Comment.create!({ photo_id: photo30.id, author_id: steve.id, comment: "Loving the composition" })
# Comment.create!({ photo_id: photo31.id, author_id: edward.id, comment: "Beautiful light and composition" })
# Comment.create!({ photo_id: photo32.id, author_id: alfred.id, comment: "awww" })
Comment.create!({ photo_id: photo33.id, author_id: jazz.id, comment: "awesome" })
Comment.create!({ photo_id: photo34.id, author_id: jazz.id, comment: "Great capture, clever shot" })
Comment.create!({ photo_id: photo35.id, author_id: jazz.id, comment: "Interesting shot, making it cute" })
Comment.create!({ photo_id: photo36.id, author_id: jazz.id, comment: "Very nice" })
Comment.create!({ photo_id: photo37.id, author_id: jazz.id, comment: "Great composition and colors, well done!!" })
Comment.create!({ photo_id: photo38.id, author_id: jazz.id, comment: "Nice composition" })
Comment.create!({ photo_id: photo39.id, author_id: jazz.id, comment: "Super great shot" })
Comment.create!({ photo_id: photo40.id, author_id: jazz.id, comment: "Great macro and light" })
Comment.create!({ photo_id: photo41.id, author_id: jazz.id, comment: "Really rich colors" })
Comment.create!({ photo_id: photo42.id, author_id: jazz.id, comment: "Wonderful mood" })
Comment.create!({ photo_id: photo43.id, author_id: jazz.id, comment: "The lamp looks abstract" })
Comment.create!({ photo_id: photo44.id, author_id: jazz.id, comment: "Photo has an interesting mood" })
Comment.create!({ photo_id: photo45.id, author_id: jazz.id, comment: "Love the colors, it's very vivid" })
Comment.create!({ photo_id: photo47.id, author_id: jazz.id, comment: "Very easy to miss the details of this great building" })
Comment.create!({ photo_id: photo49.id, author_id: jazz.id, comment: "Love the colors" })
Comment.create!({ photo_id: photo49.id, author_id: jazz.id, comment: "Cool flower display" })
Comment.create!({ photo_id: photo50.id, author_id: robert.id, comment: "Very nostalgic!" })

####### LINK TAGS AND photoS #######

# Taggedphoto.create!({ photo_id: photo1.id, tag_id: Tag.find_by({ name: "view" }).id })
# Taggedphoto.create!({ photo_id: photo1.id, tag_id: Tag.find_by({ name: "beach" }).id })
# Taggedphoto.create!({ photo_id: photo1.id, tag_id: Tag.find_by({ name: "sand" }).id })

# Taggedphoto.create!({ photo_id: photo2.id, tag_id: Tag.find_by({ name: "moon" }).id })
# Taggedphoto.create!({ photo_id: photo2.id, tag_id: Tag.find_by({ name: "sky" }).id })
# Taggedphoto.create!({ photo_id: photo2.id, tag_id: Tag.find_by({ name: "iconic" }).id })

# Taggedphoto.create!({ photo_id: photo3.id, tag_id: Tag.find_by({ name: "basketball" }).id })
# Taggedphoto.create!({ photo_id: photo3.id, tag_id: Tag.find_by({ name: "city" }).id })
# Taggedphoto.create!({ photo_id: photo3.id, tag_id: Tag.find_by({ name: "sunset" }).id })
# Taggedphoto.create!({ photo_id: photo3.id, tag_id: Tag.find_by({ name: "vibes" }).id })

# Taggedphoto.create!({ photo_id: photo4.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo4.id, tag_id: Tag.find_by({ name: "building" }).id })
# Taggedphoto.create!({ photo_id: photo4.id, tag_id: Tag.find_by({ name: "iconic" }).id })

# Taggedphoto.create!({ photo_id: photo5.id, tag_id: Tag.find_by({ name: "beach" }).id })
# Taggedphoto.create!({ photo_id: photo5.id, tag_id: Tag.find_by({ name: "ocean" }).id })
# Taggedphoto.create!({ photo_id: photo5.id, tag_id: Tag.find_by({ name: "landscape" }).id })
# Taggedphoto.create!({ photo_id: photo5.id, tag_id: Tag.find_by({ name: "scenic" }).id })
# Taggedphoto.create!({ photo_id: photo5.id, tag_id: Tag.find_by({ name: "seascape" }).id })

# Taggedphoto.create!({ photo_id: photo6.id, tag_id: Tag.find_by({ name: "wonder" }).id })
# Taggedphoto.create!({ photo_id: photo6.id, tag_id: Tag.find_by({ name: "art" }).id })
# Taggedphoto.create!({ photo_id: photo6.id, tag_id: Tag.find_by({ name: "mood" }).id })

# Taggedphoto.create!({ photo_id: photo7.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo7.id, tag_id: Tag.find_by({ name: "street" }).id })
# Taggedphoto.create!({ photo_id: photo7.id, tag_id: Tag.find_by({ name: "moment" }).id })
# Taggedphoto.create!({ photo_id: photo7.id, tag_id: Tag.find_by({ name: "glance" }).id })

# Taggedphoto.create!({ photo_id: photo8.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo8.id, tag_id: Tag.find_by({ name: "icon" }).id })
# Taggedphoto.create!({ photo_id: photo8.id, tag_id: Tag.find_by({ name: "wonder" }).id })
# Taggedphoto.create!({ photo_id: photo8.id, tag_id: Tag.find_by({ name: "ocean" }).id })
# Taggedphoto.create!({ photo_id: photo8.id, tag_id: Tag.find_by({ name: "san francisco" }).id })

# Taggedphoto.create!({ photo_id: photo9.id, tag_id: Tag.find_by({ name: "details" }).id })
# Taggedphoto.create!({ photo_id: photo9.id, tag_id: Tag.find_by({ name: "flower" }).id })
# Taggedphoto.create!({ photo_id: photo9.id, tag_id: Tag.find_by({ name: "plants" }).id })
# Taggedphoto.create!({ photo_id: photo9.id, tag_id: Tag.find_by({ name: "life" }).id })

# Taggedphoto.create!({ photo_id: photo10.id, tag_id: Tag.find_by({ name: "sunset" }).id })
# Taggedphoto.create!({ photo_id: photo10.id, tag_id: Tag.find_by({ name: "landscape" }).id })
# Taggedphoto.create!({ photo_id: photo10.id, tag_id: Tag.find_by({ name: "dusk" }).id })

# Taggedphoto.create!({ photo_id: photo11.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo11.id, tag_id: Tag.find_by({ name: "angles" }).id })
# Taggedphoto.create!({ photo_id: photo11.id, tag_id: Tag.find_by({ name: "street" }).id })
# Taggedphoto.create!({ photo_id: photo11.id, tag_id: Tag.find_by({ name: "icon" }).id })
# Taggedphoto.create!({ photo_id: photo11.id, tag_id: Tag.find_by({ name: "san francisco" }).id })

# Taggedphoto.create!({ photo_id: photo12.id, tag_id: Tag.find_by({ name: "ocean" }).id })
# Taggedphoto.create!({ photo_id: photo12.id, tag_id: Tag.find_by({ name: "beach" }).id })

# Taggedphoto.create!({ photo_id: photo13.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo13.id, tag_id: Tag.find_by({ name: "icon" }).id })
# Taggedphoto.create!({ photo_id: photo13.id, tag_id: Tag.find_by({ name: "black and white" }).id })

# Taggedphoto.create!({ photo_id: photo14.id, tag_id: Tag.find_by({ name: "abstract" }).id })
# Taggedphoto.create!({ photo_id: photo14.id, tag_id: Tag.find_by({ name: "art" }).id })
# Taggedphoto.create!({ photo_id: photo14.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo14.id, tag_id: Tag.find_by({ name: "museum" }).id })

# Taggedphoto.create!({ photo_id: photo15.id, tag_id: Tag.find_by({ name: "museum" }).id })
# Taggedphoto.create!({ photo_id: photo15.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo15.id, tag_id: Tag.find_by({ name: "moment" }).id })
# Taggedphoto.create!({ photo_id: photo15.id, tag_id: Tag.find_by({ name: "street" }).id })

# Taggedphoto.create!({ photo_id: photo16.id, tag_id: Tag.find_by({ name: "building" }).id })
# Taggedphoto.create!({ photo_id: photo16.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo16.id, tag_id: Tag.find_by({ name: "angles" }).id })

# # Taggedphoto.create!({ photo_id: photo17.id, tag_id: Tag.find_by({ name: "dog" }).id })
# # Taggedphoto.create!({ photo_id: photo17.id, tag_id: Tag.find_by({ name: "black and white" }).id })
# # Taggedphoto.create!({ photo_id: photo17.id, tag_id: Tag.find_by({ name: "sharp" }).id })
# # Taggedphoto.create!({ photo_id: photo17.id, tag_id: Tag.find_by({ name: "pet" }).id })

# Taggedphoto.create!({ photo_id: photo18.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo18.id, tag_id: Tag.find_by({ name: "icon" }).id })
# Taggedphoto.create!({ photo_id: photo18.id, tag_id: Tag.find_by({ name: "no people" }).id })
# Taggedphoto.create!({ photo_id: photo18.id, tag_id: Tag.find_by({ name: "city" }).id })
# Taggedphoto.create!({ photo_id: photo18.id, tag_id: Tag.find_by({ name: "building" }).id })

# Taggedphoto.create!({ photo_id: photo19.id, tag_id: Tag.find_by({ name: "building" }).id })
# Taggedphoto.create!({ photo_id: photo19.id, tag_id: Tag.find_by({ name: "city" }).id })
# Taggedphoto.create!({ photo_id: photo19.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo19.id, tag_id: Tag.find_by({ name: "no people" }).id })

# Taggedphoto.create!({ photo_id: photo20.id, tag_id: Tag.find_by({ name: "still life" }).id })
# Taggedphoto.create!({ photo_id: photo20.id, tag_id: Tag.find_by({ name: "food" }).id })
# Taggedphoto.create!({ photo_id: photo20.id, tag_id: Tag.find_by({ name: "milk" }).id })
# Taggedphoto.create!({ photo_id: photo20.id, tag_id: Tag.find_by({ name: "coffee" }).id })

# Taggedphoto.create!({ photo_id: photo21.id, tag_id: Tag.find_by({ name: "vibes" }).id })
# Taggedphoto.create!({ photo_id: photo21.id, tag_id: Tag.find_by({ name: "home" }).id })
# Taggedphoto.create!({ photo_id: photo21.id, tag_id: Tag.find_by({ name: "house" }).id })

# Taggedphoto.create!({ photo_id: photo22.id, tag_id: Tag.find_by({ name: "food" }).id })
# Taggedphoto.create!({ photo_id: photo22.id, tag_id: Tag.find_by({ name: "dessert" }).id })
# Taggedphoto.create!({ photo_id: photo22.id, tag_id: Tag.find_by({ name: "close-up" }).id })
# Taggedphoto.create!({ photo_id: photo22.id, tag_id: Tag.find_by({ name: "macro" }).id })
# Taggedphoto.create!({ photo_id: photo22.id, tag_id: Tag.find_by({ name: "joy" }).id })

# Taggedphoto.create!({ photo_id: photo24.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo24.id, tag_id: Tag.find_by({ name: "ocean" }).id })
# Taggedphoto.create!({ photo_id: photo24.id, tag_id: Tag.find_by({ name: "sea" }).id })
# Taggedphoto.create!({ photo_id: photo24.id, tag_id: Tag.find_by({ name: "iconic" }).id })

# Taggedphoto.create!({ photo_id: photo25.id, tag_id: Tag.find_by({ name: "building" }).id })
# Taggedphoto.create!({ photo_id: photo25.id, tag_id: Tag.find_by({ name: "angles" }).id })
# Taggedphoto.create!({ photo_id: photo25.id, tag_id: Tag.find_by({ name: "iconic" }).id })
# Taggedphoto.create!({ photo_id: photo25.id, tag_id: Tag.find_by({ name: "flag" }).id })

# Taggedphoto.create!({ photo_id: photo26.id, tag_id: Tag.find_by({ name: "close-up" }).id })
# Taggedphoto.create!({ photo_id: photo26.id, tag_id: Tag.find_by({ name: "macro" }).id })
# Taggedphoto.create!({ photo_id: photo26.id, tag_id: Tag.find_by({ name: "flower" }).id })
# Taggedphoto.create!({ photo_id: photo26.id, tag_id: Tag.find_by({ name: "flowers" }).id })
# Taggedphoto.create!({ photo_id: photo26.id, tag_id: Tag.find_by({ name: "botany" }).id })
# Taggedphoto.create!({ photo_id: photo26.id, tag_id: Tag.find_by({ name: "plant" }).id })

# Taggedphoto.create!({ photo_id: photo27.id, tag_id: Tag.find_by({ name: "flower" }).id })
# Taggedphoto.create!({ photo_id: photo27.id, tag_id: Tag.find_by({ name: "botany" }).id })
# Taggedphoto.create!({ photo_id: photo27.id, tag_id: Tag.find_by({ name: "flowers" }).id })
# Taggedphoto.create!({ photo_id: photo27.id, tag_id: Tag.find_by({ name: "macro" }).id })
# Taggedphoto.create!({ photo_id: photo27.id, tag_id: Tag.find_by({ name: "close-up" }).id })
# Taggedphoto.create!({ photo_id: photo27.id, tag_id: Tag.find_by({ name: "plant" }).id })
# Taggedphoto.create!({ photo_id: photo27.id, tag_id: Tag.find_by({ name: "details" }).id })

# Taggedphoto.create!({ photo_id: photo28.id, tag_id: Tag.find_by({ name: "close-up" }).id })
# Taggedphoto.create!({ photo_id: photo28.id, tag_id: Tag.find_by({ name: "macro" }).id })
# Taggedphoto.create!({ photo_id: photo28.id, tag_id: Tag.find_by({ name: "green" }).id })
# Taggedphoto.create!({ photo_id: photo28.id, tag_id: Tag.find_by({ name: "food" }).id })
# Taggedphoto.create!({ photo_id: photo28.id, tag_id: Tag.find_by({ name: "details" }).id })

# Taggedphoto.create!({ photo_id: photo29.id, tag_id: Tag.find_by({ name: "ocean" }).id })
# Taggedphoto.create!({ photo_id: photo29.id, tag_id: Tag.find_by({ name: "beach" }).id })
# Taggedphoto.create!({ photo_id: photo29.id, tag_id: Tag.find_by({ name: "editing" }).id })

# # Taggedphoto.create!({ photo_id: photo30.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# # Taggedphoto.create!({ photo_id: photo30.id, tag_id: Tag.find_by({ name: "travel" }).id })
# # Taggedphoto.create!({ photo_id: photo30.id, tag_id: Tag.find_by({ name: "skyscraper" }).id })
# # Taggedphoto.create!({ photo_id: photo30.id, tag_id: Tag.find_by({ name: "urban" }).id })

# # Taggedphoto.create!({ photo_id: photo31.id, tag_id: Tag.find_by({ name: "pet" }).id })
# # Taggedphoto.create!({ photo_id: photo31.id, tag_id: Tag.find_by({ name: "pets" }).id })
# # Taggedphoto.create!({ photo_id: photo31.id, tag_id: Tag.find_by({ name: "dog" }).id })
# # Taggedphoto.create!({ photo_id: photo31.id, tag_id: Tag.find_by({ name: "black and white" }).id })

# # Taggedphoto.create!({ photo_id: photo32.id, tag_id: Tag.find_by({ name: "pet" }).id })
# # Taggedphoto.create!({ photo_id: photo32.id, tag_id: Tag.find_by({ name: "pets" }).id })
# # Taggedphoto.create!({ photo_id: photo32.id, tag_id: Tag.find_by({ name: "dog" }).id })

# Taggedphoto.create!({ photo_id: photo33.id, tag_id: Tag.find_by({ name: "black and white" }).id })
# Taggedphoto.create!({ photo_id: photo33.id, tag_id: Tag.find_by({ name: "museum" }).id })
# Taggedphoto.create!({ photo_id: photo33.id, tag_id: Tag.find_by({ name: "art" }).id })
# Taggedphoto.create!({ photo_id: photo33.id, tag_id: Tag.find_by({ name: "sculpture" }).id })

# Taggedphoto.create!({ photo_id: photo34.id, tag_id: Tag.find_by({ name: "street" }).id })
# Taggedphoto.create!({ photo_id: photo34.id, tag_id: Tag.find_by({ name: "city" }).id })
# Taggedphoto.create!({ photo_id: photo34.id, tag_id: Tag.find_by({ name: "san francisco" }).id })

# Taggedphoto.create!({ photo_id: photo35.id, tag_id: Tag.find_by({ name: "street" }).id })
# Taggedphoto.create!({ photo_id: photo35.id, tag_id: Tag.find_by({ name: "city" }).id })
# Taggedphoto.create!({ photo_id: photo35.id, tag_id: Tag.find_by({ name: "details" }).id })
# Taggedphoto.create!({ photo_id: photo35.id, tag_id: Tag.find_by({ name: "close-up" }).id })
# Taggedphoto.create!({ photo_id: photo35.id, tag_id: Tag.find_by({ name: "san francisco" }).id })

# Taggedphoto.create!({ photo_id: photo36.id, tag_id: Tag.find_by({ name: "san francisco" }).id })
# Taggedphoto.create!({ photo_id: photo36.id, tag_id: Tag.find_by({ name: "city" }).id })
# Taggedphoto.create!({ photo_id: photo36.id, tag_id: Tag.find_by({ name: "street" }).id })
# Taggedphoto.create!({ photo_id: photo36.id, tag_id: Tag.find_by({ name: "night" }).id })

# Taggedphoto.create!({ photo_id: photo37.id, tag_id: Tag.find_by({ name: "san francisco" }).id })
# Taggedphoto.create!({ photo_id: photo37.id, tag_id: Tag.find_by({ name: "city" }).id })
# Taggedphoto.create!({ photo_id: photo37.id, tag_id: Tag.find_by({ name: "street" }).id })
# Taggedphoto.create!({ photo_id: photo37.id, tag_id: Tag.find_by({ name: "colors" }).id })

# Taggedphoto.create!({ photo_id: photo38.id, tag_id: Tag.find_by({ name: "street" }).id })
# Taggedphoto.create!({ photo_id: photo38.id, tag_id: Tag.find_by({ name: "san francisco" }).id })
# Taggedphoto.create!({ photo_id: photo38.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo38.id, tag_id: Tag.find_by({ name: "angles" }).id })
# Taggedphoto.create!({ photo_id: photo38.id, tag_id: Tag.find_by({ name: "building" }).id })

# Taggedphoto.create!({ photo_id: photo39.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo39.id, tag_id: Tag.find_by({ name: "museum" }).id })
# Taggedphoto.create!({ photo_id: photo39.id, tag_id: Tag.find_by({ name: "building" }).id })

# Taggedphoto.create!({ photo_id: photo40.id, tag_id: Tag.find_by({ name: "floral" }).id })
# Taggedphoto.create!({ photo_id: photo40.id, tag_id: Tag.find_by({ name: "flowers" }).id })
# Taggedphoto.create!({ photo_id: photo40.id, tag_id: Tag.find_by({ name: "flower" }).id })
# Taggedphoto.create!({ photo_id: photo40.id, tag_id: Tag.find_by({ name: "botany" }).id })
# Taggedphoto.create!({ photo_id: photo40.id, tag_id: Tag.find_by({ name: "macro" }).id })

# Taggedphoto.create!({ photo_id: photo41.id, tag_id: Tag.find_by({ name: "floral" }).id })
# Taggedphoto.create!({ photo_id: photo41.id, tag_id: Tag.find_by({ name: "flowers" }).id })
# Taggedphoto.create!({ photo_id: photo41.id, tag_id: Tag.find_by({ name: "flower" }).id })
# Taggedphoto.create!({ photo_id: photo41.id, tag_id: Tag.find_by({ name: "botany" }).id })
# Taggedphoto.create!({ photo_id: photo41.id, tag_id: Tag.find_by({ name: "macro" }).id })

# Taggedphoto.create!({ photo_id: photo42.id, tag_id: Tag.find_by({ name: "black and white" }).id })
# Taggedphoto.create!({ photo_id: photo42.id, tag_id: Tag.find_by({ name: "home" }).id })

# Taggedphoto.create!({ photo_id: photo43.id, tag_id: Tag.find_by({ name: "monochrome" }).id })
# Taggedphoto.create!({ photo_id: photo43.id, tag_id: Tag.find_by({ name: "details" }).id })
# Taggedphoto.create!({ photo_id: photo43.id, tag_id: Tag.find_by({ name: "shadow" }).id })
# Taggedphoto.create!({ photo_id: photo43.id, tag_id: Tag.find_by({ name: "abstract" }).id })

# Taggedphoto.create!({ photo_id: photo44.id, tag_id: Tag.find_by({ name: "vintage" }).id })

# Taggedphoto.create!({ photo_id: photo45.id, tag_id: Tag.find_by({ name: "ocean" }).id })
# Taggedphoto.create!({ photo_id: photo45.id, tag_id: Tag.find_by({ name: "dock" }).id })
# Taggedphoto.create!({ photo_id: photo45.id, tag_id: Tag.find_by({ name: "sea" }).id })
# Taggedphoto.create!({ photo_id: photo45.id, tag_id: Tag.find_by({ name: "seascape" }).id })

# Taggedphoto.create!({ photo_id: photo46.id, tag_id: Tag.find_by({ name: "san francisco" }).id })
# Taggedphoto.create!({ photo_id: photo46.id, tag_id: Tag.find_by({ name: "store" }).id })
# Taggedphoto.create!({ photo_id: photo46.id, tag_id: Tag.find_by({ name: "shopping" }).id })

# Taggedphoto.create!({ photo_id: photo47.id, tag_id: Tag.find_by({ name: "skyscraper" }).id })
# Taggedphoto.create!({ photo_id: photo47.id, tag_id: Tag.find_by({ name: "building" }).id })
# Taggedphoto.create!({ photo_id: photo47.id, tag_id: Tag.find_by({ name: "architecture" }).id })
# Taggedphoto.create!({ photo_id: photo47.id, tag_id: Tag.find_by({ name: "abstract" }).id })
# Taggedphoto.create!({ photo_id: photo47.id, tag_id: Tag.find_by({ name: "icon" }).id })

# Taggedphoto.create!({ photo_id: photo48.id, tag_id: Tag.find_by({ name: "tree" }).id })
# Taggedphoto.create!({ photo_id: photo48.id, tag_id: Tag.find_by({ name: "trees" }).id })
# Taggedphoto.create!({ photo_id: photo48.id, tag_id: Tag.find_by({ name: "green" }).id })

# Taggedphoto.create!({ photo_id: photo49.id, tag_id: Tag.find_by({ name: "flowers" }).id })
# Taggedphoto.create!({ photo_id: photo49.id, tag_id: Tag.find_by({ name: "flower" }).id })
# Taggedphoto.create!({ photo_id: photo49.id, tag_id: Tag.find_by({ name: "floral" }).id })
# Taggedphoto.create!({ photo_id: photo49.id, tag_id: Tag.find_by({ name: "botany" }).id })
# Taggedphoto.create!({ photo_id: photo49.id, tag_id: Tag.find_by({ name: "vintage" }).id })

# Taggedphoto.create!({ photo_id: photo50.id, tag_id: Tag.find_by({ name: "vintage" }).id })
# Taggedphoto.create!({ photo_id: photo50.id, tag_id: Tag.find_by({ name: "television" }).id })
# Taggedphoto.create!({ photo_id: photo50.id, tag_id: Tag.find_by({ name: "home" }).id })
