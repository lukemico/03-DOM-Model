require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# Include the gems
# Work on the static pages
  # Home pages
  # About pages
# Create the database itself
# Add a table into the database
  # sqlite3 database.db < _______.sql
  # Make a migration
# Insert a few records into that table
  # Seeding the database (adding dummy data)
# READ STEP - /animals
# CREATE STEP - /animals/new
# UPDATE STEP - /animals/:id/edit
# DELETE STEP - /animals/:id/delete

get "/" do
  erb(:home) # Go get views/home.erb
end

get "/about" do
  erb(:about)
end

get "/animals" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_animals = db.execute "SELECT * FROM animals"
    # => [{}, {}, {}]
  db.close

  erb(:animals_index)
  # Read Step of CRUD
    # Show all animals
end

get "/animals/new" do
  erb(:animals_new)
end

post "/animals" do
  img = params["image"]
  desc = params["description"]
  species = params["species"]

  # INSERT INTO animals (species, image, description) VALUES ('species', 'image', 'description')
  sql = "INSERT INTO animals (species, image, description) VALUES ('#{species}', '#{img}', '#{desc}')"

  get "/animals" do
    db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
    db.execute ( sql )
    db.close

    redirect("/animals")
end

get "/animals/:id" do
  # Show Page (Profile Page) of a specific animal
  # Connect to the database
  # Ask for the results as a hash
  # Execute some SQL
  # Save the record in an instance variable
  # Present it

  id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM animals WHERE id == #{id}"
  @animal = db.execute(sql).first
  db.close

  erb :animals_show
end

get "/animals/:id/edit" do
  id = params["id"]

  # Find the animals
    # So we can show prefilled inputs
    # so we can use the ID

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM animals WHERE id == #{id}"
  @animal = db.execute(sql).first
  db.close

  "The id is #{id}"

  erb(:animals_edit)
end

post "/animals/:id" do
  id = params["id"]
  species = params["s"]
  description = params["d"]
  image = params["i"]

# UPDATE animals SET species = '___', description = '___', image = '___' WHERE id == ___

  sql = "UPDATE animals SET species = '#{s}', description = '#{d}', image = '#{i}' WHERE id == #{id}"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute(sql)
  db.close

  redirect("/animals/#{id}")
end

get "/animals/:id/delete" do
    #We need to get the ID out of the URL
    id = params["id"]

    # We need to connect to the database
    db = SQLite3::Database.new("database.db")

    # We need to delete the animals with a certin ID
      #DELETE FROM animals WHERE id ==
    sql = "DELETE FROM animals WHERE id == #{id}"
    db.execute(sql)

    # We need to close the database connection
    db.close
    # We redirect back to the list of all animals
    redirect("/animals")
end
