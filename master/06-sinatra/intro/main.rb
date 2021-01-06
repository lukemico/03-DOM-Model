require "pry"
require "sinatra"
require "sinatra/reloader"

# Create our first literal route
  # Route is an HTTP method (or verb0 paired with a path

# localhost:4567
# localhost:4567/

  get "/" do
    "Hello World"
  end

  get "/about" do
    "I am Bill Murray"
  end

# Get localhost:4567/hi

get "/Hi" do
  "Hi There"
end

get "/hello" do
  "Hello There"
end

# Get localhost:4567/hi/Groucho

get "/hi/Groucho" do
  "Hi Groucho"
end

get "/hi/Harpo" do
  "Hi Harpo"
end

get "/hi/Zeppo" do
  "Hi Zeppo"
end

get "/hack" do
  "<h1>You must be on a local host:4567/hack. Good luck, we are the best at security</h1>"
end

get "/addTwoNumbers" do
  first_num = Random.rand( 10 )
  second_num = Random.rand( 10 )
  result = firstNum + secondNum

  "#{first_num} + #{second_num} = #{result}"
end

# Dynamic Route
  # An HTTP method
    # GET, POST, PUT, DELETE
  # A URL Path Matching Pattern
      # It looks roughly like

# I want to be able to say hi to anyone

get "/hello/:name" do
  name = params["name" => _______ ]
  "Hi there, #{name}"
end

# /add/5/10
# /add/1242/129412
get "/add/:first_num/:second_num" do
  first_num = params["first_num"].to_i
  second_num = params["second_num"].to_i
  result = first_num + second_num = result
    "#{first_num} + #{second_num} = #{result}"

end


get "/multiply/:x/:y" do
  x = params["x"].to_i
  y = params["y"].to_i
  result = x * y

  "#{x} * #{y} = #{result}"
end


get "/colour/:c" do
  colour = params["c"]
  "<h1 style='color: #{colour}'>The colour #{colour}</h1>"
end
