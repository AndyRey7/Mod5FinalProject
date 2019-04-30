# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "andy", password: "1234", email:"tom@tom.com" )
User.create(name: "jeff", password: "12345", email:"tommy@tom.com" )
User.create(name: "luis", password: "12346", email:"hello@tom.com" )

Hotel.create(address: "401 7th Ave, New York, NY 10001", name:"Hotel Pennsylvania", image:"https://lh5.googleusercontent.com/p/AF1QipPbNpO-MC9S6Iq8wBm0jR5tnHI7UpVSvqsbxngH=w325-h211-k-no", description: Faker::TvShows::SiliconValley.unique.quote )
Hotel.create(address: "Avinguda Diagonal, 589-591, 08014 Barcelona, Spain", name:"Hotel Barcelona", image:"https://media-cdn.tripadvisor.com/media/photo-s/11/36/ad/12/avenida-diagonal-hotel.jpg", description: Faker::TvShows::SiliconValley.unique.quote )
Hotel.create(address: "3 Chome-3-1 Shibakoen, Minato City, Tokyo 105-8560, Japan", name:"Tokyo Prince Hotel", image:"http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/1/2016/03/26081528/facade1-Grand-Prince-Hotel-New-Takanawa-Tokyo-300x200.jpg", description: Faker::TvShows::SiliconValley.unique.quote )

Room.create(category: "standard", description: Faker::Games::Witcher.unique.quote, img_URL: "https://pix10.agoda.net/hotelImages/433/43322/43322_17041516100052420644.jpg?s=1024x768", hotel_id: 1)
Room.create(category: "deluxe", description:Faker::Games::Witcher.unique.quote, img_URL: "http://portoazzurro.com.mt/wp-content/uploads/2013/11/hotel_room_land_view-556x310.png", hotel_id: 1)
Room.create(category: "superior", description:Faker::Games::Witcher.unique.quote, img_URL: "https://pix10.agoda.net/hotelImages/10685/-1/186c8531c0296e9b952acf6b7dc160b7.png?s=1024x768", hotel_id: 1)

Room.create(category: "standard", description: Faker::Games::Witcher.unique.quote, img_URL: "https://pix10.agoda.net/hotelImages/433/43322/43322_17041516100052420644.jpg?s=1024x768", hotel_id: 2)
Room.create(category: "deluxe", description:Faker::Games::Witcher.unique.quote, img_URL: "http://portoazzurro.com.mt/wp-content/uploads/2013/11/hotel_room_land_view-556x310.png", hotel_id: 2)
Room.create(category: "superior", description:Faker::Games::Witcher.unique.quote, img_URL: "https://pix10.agoda.net/hotelImages/10685/-1/186c8531c0296e9b952acf6b7dc160b7.png?s=1024x768", hotel_id: 2)

Room.create(category: "standard", description: Faker::Games::Witcher.unique.quote, img_URL: "https://pix10.agoda.net/hotelImages/433/43322/43322_17041516100052420644.jpg?s=1024x768", hotel_id: 3)
Room.create(category: "deluxe", description:Faker::Games::Witcher.unique.quote, img_URL: "http://portoazzurro.com.mt/wp-content/uploads/2013/11/hotel_room_land_view-556x310.png", hotel_id: 3)
Room.create(category: "superior", description:Faker::Games::Witcher.unique.quote, img_URL: "https://pix10.agoda.net/hotelImages/10685/-1/186c8531c0296e9b952acf6b7dc160b7.png?s=1024x768", hotel_id: 3)

Reservation.create(user_id: 1, room_id: 2)
Reservation.create(user_id: 1, room_id: 1)
Reservation.create(user_id: 2, room_id: 3)
