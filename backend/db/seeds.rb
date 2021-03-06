# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

csv_text = File.read("deals.csv")
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  Product.create(
    image: row['image'],
    brand: row['brand'],
    title: row['title'], 
    price: row['price'] 
  )
end 