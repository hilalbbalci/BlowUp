class Api::LikesController < ApplicationController
    def create
        @like = Like.new
        @like.photo_id = params[:id]
        @like.likeer_id = current_user.id
        unless @like.save
            render json: @like.errors.full_messages
        end
        render json: @like
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        render json: @like
    end
end
