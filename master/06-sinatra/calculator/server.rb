require "pry"
require "sinatra"
require "sinatra/reloader"

get "/" do
  erb(:home)
  #looks into the views folder
    # gets layour.erb
    # and, if we have told it how
      # it will then put the conent of home.erb in layout.erb
end

get "/about" do
  'Lorem Ipsum ad dfdfdage Asgwl ddfggrl stlrnrl'
  erb:about
end
# If someone makes a request to /about
    # Load the layout.erb file
      # If the layout.erb file has a yield statement in ERB delimiters
        # Place the content from contact.erb over the yield statement



get "/contact" do
  'Welcome to the Contact Page'
end


get "/calculator" do
    # I want to use EEB (embedded RUby) to create a dynamic web Page
      # Copy all the stuf from views/calculoter.erb
      # Paste it over the top of any <%= yield %. statement in views/layout.erb
      # once you have done that, send the newly created HTML to the browser

end







# /divide/4.0/2.5
get "/divide/first_num/second_num" do
  binding.pry
  x = params["first_num"].to_f #f is equal to a float
  y = params["second_num"].to_f
  res = x / y

end
