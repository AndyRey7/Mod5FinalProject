class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :room_id

  belongs_to :user
  belongs_to :room


end
