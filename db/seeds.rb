# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
puts "📃 Seeding data..."






rm = RestClient.get "https://data.cityofnewyork.us/resource/i4kb-6ab6.json"

charity_array = JSON.parse(rm)
charity_array.each do |org|
    c = Charity.create(
        # lat: org["latitude"],
        # long: org["longitude"],
        website: org["website"],
        mission: org ["mission"],
        program_description: org ["volunteer_program_description"]
    )


    user1 = User.create(username: "ibaihima" ,  password: "iba" )
    user2 = User.create(username: "klemense" ,  password: "klem" )
    
    Review.create(rating: 4.2, review_content: "This was a really good site I recommend it for anyone.", user_id: user1.id, charity_id: c.id  )
    Review.create(rating: 2.1, review_content: "This place was kinda bad I dont recommend anyone to check it out.", user_id: user2.id, charity_id: c.id)
end

puts "✅ Done seeding"