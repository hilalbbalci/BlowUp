class Api::FollowsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

  def index
    @follows = Follow.all
    render :index
  end

  def show
    @follow = Post.find(params[:id])
    if @follow
      render :show
    else
      render json: ['not found'], status: 404
    end
  end
    
    def create
        @follow = Follow.new(follow_params)
        # @follow.followed_id = params[:id]
        # @follow.follower_id = current_user.id
        if @follow.save
          render json: @follow.errors.full_messages
        else
          render :show
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
        render :show
    end
    private 

    def follow_params
        params.require(:follow).permit(:followed_id, :follower_id)
    end
end
