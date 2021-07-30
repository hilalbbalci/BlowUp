class SessionController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ["invalid username/password combination"], status: 422
        end
    end

    def destroy
        logout!
        
    end

   
end
