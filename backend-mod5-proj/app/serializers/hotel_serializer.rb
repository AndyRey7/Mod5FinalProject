class HotelSerializer < ActiveModel::Serializer
  attributes :id, :address, :name, :description, :image, :lat, :lng

  has_many :rooms
end
