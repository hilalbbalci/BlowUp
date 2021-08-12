class Api::LikesController < ApplicationController
    def index
        @likes = Like.all
    end
    def create
        @like = Like.new
        @like.photo_id = params[:id]
        @like.liker_id = current_user.id
        unless @like.save
            render json: @like.errors.full_messages, status: 401
        end
        render 'api/like/show'
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        render json: @like
    end
   
end
