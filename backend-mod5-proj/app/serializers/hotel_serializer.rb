class HotelSerializer < ActiveModel::Serializer
  attributes :id, :address, :name, :description, :image

  has_many :rooms
end
