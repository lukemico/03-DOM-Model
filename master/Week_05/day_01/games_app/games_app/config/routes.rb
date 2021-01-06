Rails.application.routes.draw do



get "/home" => "pages#home"

get "/about" => "pages#about"

# For a GET request to /home
  # I want to go into the pages_controller.rb
  # I want to run the home method defined in PagesController
  # I want to load the pages home.html.erb

# In the case that someone makes a GET request to /about, I want to run the pages controller about method
get "/magic8" => "pages#magic8"

get "/secretnumber" => "pages#secretnumberm"

get "/scissorspaperrock" => "pages#scissorspaperrock"

end
