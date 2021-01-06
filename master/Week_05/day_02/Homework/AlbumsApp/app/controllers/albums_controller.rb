class AlbumsController < ApplicationController
  def index
    # Do I need to speak to the database?
    # Do I need to pass any information to the views? (as instance variables)
    @all_albums = Albums.all
  end

  def new
    @album = Album.new
  end

  def show
    @album = Album.find_by(id: params['id'])
  end

  def create
    album = Album.create( album_strong_params() )
    redirect_to "/albums/#{album.id}"
  end

  def edit
    @album = Album.find_by(id: params["id"])
      # Prefill values
      # Reuse the new form
  end

  def update
    # Use the URL to find the right Artist
    album = Album.find_by(id: params["id"])
    # Enforce a structure of the params, and restrict the values that can be sent. Add that into the database
    album.update( album_strong_params() )
    # Make a new GET request to /artists/:id
    redirect_to "/albums/#{album.id}"
  end

  def destroy
    album = Album.find_by(id: params["id"])
    album.destroy
    redirect_to "/album"
  end

  private
  def artist_strong_params
      # Strong Parameters || Whitelisting
      # A way to add params directly into the database by describing an appropriate structure
      params.require(:album).permit(:name, :artist, :tracks, :release)
    end
end
