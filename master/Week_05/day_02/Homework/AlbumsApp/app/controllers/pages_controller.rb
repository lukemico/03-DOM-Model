class PagesController < ApplicationController
end


def index
  # Do I need to speak to the database?
  # Do I need to pass any information to the views? (as instance variables)
  @all_pages = Page.all
end

def new
  @page = Page.new
end

def show
  @page = Page.find_by(id: params['id'])
end

def create
  album = Page.create( album_strong_params() )
  redirect_to "/albums/#{album.id}"
end

def edit
  @page = Page.find_by(id: params["id"])
    # Prefill values
    # Reuse the new form
end

def update
  # Use the URL to find the right Artist
  page = Page.find_by(id: params["id"])
  # Enforce a structure of the params, and restrict the values that can be sent. Add that into the database
  page.update( page_strong_params() )
  # Make a new GET request to /artists/:id
  redirect_to "/pages/#{page.id}"
end

def destroy
  page = Page.find_by(id: params["id"])
  page.destroy
  redirect_to "/page"
end

private
def artist_strong_params
    # Strong Parameters || Whitelisting
    # A way to add params directly into the database by describing an appropriate structure
    params.require(:album).permit(:name, :artist, :tracks, :release)
  end
