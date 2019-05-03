class AddLngToHotels < ActiveRecord::Migration[5.2]
  def change
    add_column :hotels, :lng, :string
  end
end
