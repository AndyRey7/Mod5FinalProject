# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#  https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/hotelmanagement/1551371746/Hotel-Ottilia-Suite_bedroom.jpg?7sALV5nWzKBIQBnMDW3aEZWpSKuebHxn&itok=EJXatsv6
#  https://www.qe2.com/application/files/9315/2037/8325/Zeus-Accommodations-960x628px-Hotel_Rooms_Club1.jpg
#  https://freshome.com/wp-content/uploads/2013/07/Dubai-Underwater-Hotel-Rooms.jpg
# https://www.niagarafallscrowneplazahotel.com/wp-content/themes/crowne-plaza-fallsview/images/home-room-4.jpg
# https://www.desertpalmshotel.com/resourcefiles/rooms-smallimages-slider/desert-palms-hotel-and-suites-deluxe-room-with-2-queen-beds-1.jpg
# https://www.ashlinghotel.ie/wp-content/uploads/2019/02/familyRoomPageImage.jpg


User.create(name: "andy", password: "1234", email:"tom@tom.com" )
User.create(name: "jeff", password: "12345", email:"tommy@tom.com" )
User.create(name: "luis", password: "12346", email:"hello@tom.com" )

Hotel.create(address: "401 7th Ave, New York, NY 10001", name:"Hotel Pennsylvania", image:"https://lh5.googleusercontent.com/p/AF1QipPbNpO-MC9S6Iq8wBm0jR5tnHI7UpVSvqsbxngH=w325-h211-k-no", description: Faker::TvShows::SiliconValley.quote, lat:'40.7498', lng: '-73.9928' )
Hotel.create(address: "Avinguda Diagonal, 589-591, 08014 Barcelona, Spain", name:"Hilton Barcelona", image:"https://media-cdn.tripadvisor.com/media/photo-s/11/36/ad/12/avenida-diagonal-hotel.jpg", description: Faker::TvShows::SiliconValley.quote, lat: '41.3987', lng: '2.1394' )
Hotel.create(address: "3 Chome-3-1 Shibakoen, Minato City, Tokyo 105-8560, Japan", name:"Tokyo Prince Hotel", image:"http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/1/2016/03/26081528/facade1-Grand-Prince-Hotel-New-Takanawa-Tokyo-300x200.jpg", description: Faker::TvShows::SiliconValley.quote, lat: '35.6589', lng: '139.7459' )

Room.create(category: "standard", description: Faker::Games::Witcher.quote, img_URL: "https://pix10.agoda.net/hotelImages/433/43322/43322_17041516100052420644.jpg?s=1024x768", hotel_id: 1)
Room.create(category: "deluxe", description:Faker::Games::Witcher.quote, img_URL: "http://portoazzurro.com.mt/wp-content/uploads/2013/11/hotel_room_land_view-556x310.png", hotel_id: 1)
Room.create(category: "superior", description:Faker::Games::Witcher.quote, img_URL: "https://pix10.agoda.net/hotelImages/10685/-1/186c8531c0296e9b952acf6b7dc160b7.png?s=1024x768", hotel_id: 1)

Room.create(category: "standard", description: Faker::Games::Witcher.quote, img_URL: "http://www.bestwesternplusmeridian.com/Content/images/Queen-Room.jpg", hotel_id: 2)
Room.create(category: "deluxe", description:Faker::Games::Witcher.quote, img_URL: "https://s-ec.bstatic.com/images/hotel/max1024x768/731/73118462.jpg", hotel_id: 2)
Room.create(category: "superior", description:Faker::Games::Witcher.quote, img_URL: "https://cache.radissonhotels.com/ow-cms/rad/images/hotels/GREENBAY/NEW_PILOT/king-guest-room-960.jpg", hotel_id: 2)

Room.create(category: "standard", description: Faker::Games::Witcher.quote, img_URL: "https://texasstation.sclv.com/~/media/Images/Page-Background-Images/Texas/TS_Hotel_King_lowrez.jpg?h=630&la=en&w=1080", hotel_id: 3)
Room.create(category: "deluxe", description:Faker::Games::Witcher.quote, img_URL: "https://www.lavalencia.com/resourcefiles/roomssmallimages/vintage-king-ocean-at-la-valencia-hotel-california.jpg", hotel_id: 3)
Room.create(category: "superior", description:Faker::Games::Witcher.quote, img_URL: "http://www.elitetraveler.com/wp-content/uploads/2013/06/Chicago-Trump.jpg", hotel_id: 3)

Reservation.create(user_id: 1, room_id: 2)
Reservation.create(user_id: 1, room_id: 1)
Reservation.create(user_id: 2, room_id: 3)
