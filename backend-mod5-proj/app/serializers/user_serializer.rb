class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :resRooms

  has_many :reservations
  has_many :rooms, through: :reservations
  has_many :hotels, through: :rooms


  def resRooms
      object.reservations.map do |reservation|
          {
              reservation: {
                  id: reservation.id,
              },
            room: {
                id: reservation.room.id,
                category: reservation.room.category,
                description: reservation.room.description,
                img_URL: reservation.room.img_URL
            }
          }
      end
  end


end
