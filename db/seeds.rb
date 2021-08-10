# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require_relative "tag_names"
require "open-uri"
require 'net/http'

User.delete_all
Photo.delete_all
# Follow.delete_all
# Comment.delete_all
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

file1 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/flowergirl.jpeg")
file2 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/annekiz.jpeg")
file3 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/balkon.jpeg")
file4 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/bisikletlisokak.jpeg")
file5 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/bot.jpeg")
file6 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/buzlugol.jpeg")
file7 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/camdansurat.jpeg")
file8 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/catlakyumurta.jpeg")
file9 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/catlamistopraklar.jpeg")
file10 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/cay.jpeg")
file11 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/dalgic.jpeg")
file12 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/deniz.jpeg")
file13 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/denizanasi.jpeg")
file14 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/donmedolap.jpeg")
file15 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/dovmeliadam.jpeg")
file16 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/dua.jpeg")
file17 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/boksor.jpeg")
file18 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/dumanli+kayalar.jpeg")
file19 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/erimis+buzullar.jpeg")
file20 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/gelincikler+icin.jpeg")
file21 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/gul.jpeg")
file22 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/guzelbiraile.jpeg")
file23 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/halilar.jpeg")
file24 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/hediyelikesya.jpeg")
file25 = open("https://blowup-dev.s3.us-west-1.amazonaws.com/ilgincpencere.jpeg")
# file26 = URI.open("")
# file27 = URI.open("")
# file28 = URI.open("")
# file29 = URI.open("")
# # file30 = URI.open("")
# # file31 = URI.open("")
# # file32 = URI.open("")
# file33 = URI.open("")

# file34 = URI.open("")
# file35 = URI.open("")
# file36 = URI.open("")
# file37 = URI.open("")
# file38 = URI.open("")
# file39 = URI.open("")
# file40 = URI.open("")
# file41 = URI.open("")
# file42 = URI.open("")
# file43 = URI.open("")
# file44 = URI.open("")
# file45 = URI.open("")
# file46 = URI.open("")
# file47 = URI.open("")
# file48 = URI.open("")
# file49 = URI.open("")
# file50 = URI.open("")
photo1 = Photo.new(title: "Flower Girl", description: "Amazing beatiful girl scatters flowers in Hawaii wedding", user_id: diane.id)
photo2 = Photo.new(title: "Have fun with a child", description: "A child can make you happiest person ever", user_id: robert.id)
photo3 = Photo.new(title: "Balcony", description: "Dream the most beatiful view you can have", user_id: annie.id)
photo4 = Photo.new(title: "Bicycle", description: "Authentic street with a beatiful bicycle", user_id: steve.id)
photo5 = Photo.new(title: "The boat", description: "I know some boats which are far away from the shores", user_id: diane.id)
photo6 = Photo.new(title: "Lake", description: "A frozen lake is the best part of the vaccation", user_id: alfred.id)
photo7 = Photo.new(title: "Glass Face", description: "Somebody knows to hide the feelings", user_id: irving.id)
photo8 = Photo.new(title: "A Egg", description: "Needs care:)", user_id: edward.id)
photo9 = Photo.new(title: "Broken lands", description: "Harmony of yellow and land color", user_id: cindy.id)
photo10 = Photo.new(title: "Tea", description: "A cup of tea is the best", user_id: diane.id)
photo11 = Photo.new(title: "Diver", description: "Above and below the sea", user_id: robert.id)
photo12 = Photo.new(title: "Sea", description: "Enjoy with the view!", user_id: cindy.id)
photo13 = Photo.new(title: "Jellyfish", description: "Amazing world inside", user_id: cindy.id)
photo14 = Photo.new(title: "Sunset", description: "Having fun at sunset", user_id: alfred.id)
photo15 = Photo.new(title: "Tattoo", description: "Express yourself in a different way", user_id: jazz.id)
photo16 = Photo.new(title: "Pry", description: "Sometimes, all you need is faith", user_id: drew.id)
photo17 = Photo.new(title: "Boxer", description: "A strong punch is coming", user_id: amy.id)
photo18 = Photo.new(title: "High", description: 'You want to touch the clouds', user_id: kate.id)
photo19 = Photo.new(title: "Ice", description: "Resist melting", user_id: john.id)
photo20 = Photo.new(title: "Red Flowers", description: "lying on a flower bed", user_id: alfred.id)
photo21 = Photo.new(title: "Color of a Rose", description: "Have you ever look at a rose this closely", user_id: jazz.id)
photo22 = Photo.new(title: "Family", description: "A family in a shot, while laughing and having fun", user_id: amy.id)
photo23 = Photo.new(title: "Rugs", description: "Handcraft rugs are waiting for somebody who knows their value", user_id: jazz.id)
photo24 = Photo.new(title: "Wind Chimes", description: "feel the enchanting melody", user_id: annie.id)
photo25 = Photo.new(title: "An Interesting Window", description: "Some beauties are hidden, you need to find them", user_id: kate.id)

photo1.post.attach(io: file1, filename: "flowergirl.jpeg")
photo2.post.attach(io: file2, filename: "annekiz.jpeg")
photo3.post.attach(io: file3, filename: "balkon.jpeg")
photo4.post.attach(io: file4, filename: "bisikletlisokak.jpeg")
photo5.post.attach(io: file5, filename: "bot.jpeg")
photo6.post.attach(io: file6, filename: "buzlugol.jpeg")
photo7.post.attach(io: file7, filename: "camdansurat.jpeg")
photo8.post.attach(io: file8, filename: "catlakyumurta.jpeg")
photo9.post.attach(io: file9, filename: "catlamistopraklar.jpeg")
photo10.post.attach(io: file10, filename: "cay.jpeg")
photo11.post.attach(io: file11, filename: "dalgic.jpeg")
photo12.post.attach(io: file12, filename: "deniz.jpeg")
photo13.post.attach(io: file13, filename: "denizanasi.jpeg")
photo14.post.attach(io: file14, filename: "donmedolap.jpeg")
photo15.post.attach(io: file15, filename: "dovmeliadam.jpeg")
photo16.post.attach(io: file16, filename: "dua.jpeg")
photo17.post.attach(io: file17, filename: "boksor.jpeg")
photo18.post.attach(io: file18, filename: "dumanli+kayalar.jpeg")
photo19.post.attach(io: file19, filename: "erimis+buzullar.jpeg")
photo20.post.attach(io: file20, filename: "gelincikler+icin.jpeg")
photo21.post.attach(io: file21, filename: "gul.jpeg")
photo22.post.attach(io: file22, filename: "guzelbiraile.jpeg")
photo23.post.attach(io: file23, filename: "halilar.jpeg")
photo24.post.attach(io: file24, filename: "hediyelikesya.jpeg")
photo25.post.attach(io: file25, filename: "ilgincpencere.jpeg")


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
photo17.save!
photo18.save!
photo19.save!
photo20.save!
photo21.save!
photo22.save!
photo23.save!
photo24.save!
photo25.save!



Comment.create!({ photo_id: photo1.id, commenter_id: diane.id, comment: "Loving that theme" })
Comment.create!({ photo_id: photo2.id, commenter_id: annie.id, comment: "Love seeing pictures of that" })
Comment.create!({ photo_id: photo3.id, commenter_id: robert.id, comment: "Great colors!" })
Comment.create!({ photo_id: photo4.id, commenter_id: steve.id, comment: "Good composition" })
Comment.create!({ photo_id: photo5.id, commenter_id: edward.id, comment: "Amazing!" })
Comment.create!({ photo_id: photo6.id, commenter_id: alfred.id, comment: "Love the details" })
Comment.create!({ photo_id: photo7.id, commenter_id: irving.id, comment: "Good composition" })
Comment.create!({ photo_id: photo8.id, commenter_id: cindy.id, comment: "That is wonderful!" })
Comment.create!({ photo_id: photo9.id, commenter_id: amy.id, comment: "Love the details and harmony" })
Comment.create!({ photo_id: photo10.id, commenter_id: drew.id, comment: "Wow that is an epic composition" })
Comment.create!({ photo_id: photo11.id, commenter_id: john.id, comment: "Wow.." })
Comment.create!({ photo_id: photo12.id, commenter_id: kate.id, comment: "The picture is so vivid" })
Comment.create!({ photo_id: photo13.id, commenter_id: jazz.id, comment: 'Love that' })
Comment.create!({ photo_id: photo14.id, commenter_id: diane.id, comment: "Nice colors" })
Comment.create!({ photo_id: photo15.id, commenter_id: annie.id, comment: "Such a beautiful picture!" })
Comment.create!({ photo_id: photo16.id, commenter_id: robert.id, comment: "What a cool shot" })
Comment.create!({ photo_id: photo17.id, commenter_id: steve.id, comment: "Nice" })
Comment.create!({ photo_id: photo18.id, commenter_id: edward.id, comment: "What an ideal perspective" })
Comment.create!({ photo_id: photo19.id, commenter_id: alfred.id, comment: "Good Job" })
Comment.create!({ photo_id: photo20.id, commenter_id: cindy.id, comment: "Loving the vibes" })
Comment.create!({ photo_id: photo21.id, commenter_id: cindy.id, comment: "Loving the colors" })
Comment.create!({ photo_id: photo22.id, commenter_id: amy.id, comment: "Loving the details" })
Comment.create!({ photo_id: photo22.id, commenter_id: drew.id, comment: "Wonderful" })
Comment.create!({ photo_id: photo24.id, commenter_id: john.id, comment: "So vivid.." })
Comment.create!({ photo_id: photo25.id, commenter_id: kate.id, comment: "Super vibrant colors" })





