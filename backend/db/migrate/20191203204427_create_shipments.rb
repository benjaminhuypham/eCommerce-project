class CreateShipments < ActiveRecord::Migration[6.0]
  def change
    create_table :shipments do |t|
      t.string :name
      t.string :address
      t.string :email
      t.float :phone
      t.string :product_detail

      t.timestamps
    end
  end
end
