class CreateUserInfos < ActiveRecord::Migration[6.0]
  def change
    create_table :user_infos do |t|
      t.string :name
      t.float :phone
      t.string :email
      t.string :address

      t.timestamps
    end
  end
end
