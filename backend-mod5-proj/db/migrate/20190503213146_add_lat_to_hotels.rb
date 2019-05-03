class AddLatToHotels < ActiveRecord::Migration[5.2]
  def change
    add_column :hotels, :lat, :string
  end
end
