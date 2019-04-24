class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :category
      t.string :description
      t.string :img_URL
      t.integer :hotel_id

      t.timestamps
    end
  end
end
