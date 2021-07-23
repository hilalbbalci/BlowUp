class FollowsController < ApplicationController
    def create
        @follow = Follow.new
        @follow.followed_id = params[:id]
        @follow.follower_id = current_user.id
        unless @follow.save
            render json: @follow.errors.full_messages
        end
        render json: @follow
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
        render json: @follow
    end
end
