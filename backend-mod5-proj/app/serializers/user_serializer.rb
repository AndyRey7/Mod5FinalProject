class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  has_many :reservations
  has_many :rooms, through: :reservations
  has_many :hotels, through: :rooms

end
