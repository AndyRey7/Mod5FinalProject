class User < ApplicationRecord
    has_secure_password
    validates :email,  presence: true
    validates :email,  uniqueness: true

    validates :name, presence: true

    has_many :reservations
    has_many :rooms, through: :reservations
    has_many :hotels, through: :rooms
end
