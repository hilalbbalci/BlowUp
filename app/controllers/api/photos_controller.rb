class Api::PhotosController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    # def new
    # @chirp = Chirp.new
    # render :new
    # end

    def create
        @photo = Photo.new(photo_params)
        @photo.user_id = current_user.id
        @photo.post.attach(params[:photo][:post])
        if @photo.save! 
        # redirect_to photo_url(@chirp)
        render :show
        else
        render json: @photo.errors.full_messages, status: 422
        end
    end

    def show
        @photo = Photo.find(params[:id])
        if @photo
        render :show
        else
        render json: @photo.errors.full_messages, status: 404
        end
    end

    def index
        @photos = Photo.all
        render :index
    end

    # def edit
    #     @chirp = Chirp.find(params[:id])
    #     render :edit
    # end

    # def update
    #     @photo = Photo.find(params[:id])
    #     if @photo.update(photo_params)
    #     render json: @photo
    #     else
    #     render json: @photo.errors.full_messages, status: 422
    #     end
    # end

    def destroy
        @photo = Photo.find(params[:id])
        if @photo.destroy
        render :index
        else
        render plain: "You can't destroy what's not there."
        end
    end
    
    private

    def photo_params
        params.require(:photo).permit(:title, :description, :user_id, :post)
    end
end
