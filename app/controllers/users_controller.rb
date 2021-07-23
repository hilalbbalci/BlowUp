class UsersController < ApplicationController
#      def new
#     @user = User.new
#     render :new
#   end

    def create
        @user = User.new(user_params)
        if @user.save
        login!(@user)
        # redirect_to user_url(@user)
        render json: @user
        else
        # flash.now[:errors] = @user.errors.full_messages
        render json: @user.errors.full_messages
        # render :new
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
        render json: @user
        else
        render json: @user.errors.full_messages, status: 404
        end
    end

    # def index
    #     @users = User.all
    #     render json: @users
    # end

    # def edit
    #     @user = User.find(params[:id])
    #     render :edit
    # end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
        render json: @user
        else
        render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.destroy
        render json: @users
        else
        render plain: "You can't destroy what's not there."
        end
    end

    def search
        @users = User.where("username LIKE '%#{params[:query]}%'")
        render json: @users
    end

    private

    def user_params
        # params.require(:user).permit(:username, :email)
        # Add password
        params.require(:user).permit(:username, :email, :password)
    end
end
