class CreateHotels < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels do |t|
      t.string :address
      t.string :name
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
