class RoomSerializer < ActiveModel::Serializer
  attributes :id, :category, :description, :img_URL

  has_many :reservations
  has_many :users, through: :reservations
  belongs_to :hotel
end
