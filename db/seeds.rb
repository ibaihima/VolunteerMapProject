# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
puts "📃 Seeding data..."
puts "Clearing db..."
Charity.destroy_all
User.destroy_all
Review.destroy_all





rm = RestClient.get "https://data.cityofnewyork.us/resource/i4kb-6ab6.json"

charity_array = JSON.parse(rm)
charity_array.each do |org|
    @c = Charity.create(
        organization_name: org["organization_name"],
        lat: org["latitude"],
        long: org["longitude"],
        website: org["website"]["url"],
        mission: org["mission"],
        program_description: org["volunteer_program_description"]
    )

    
end
    
puts "✅ Done seeding"