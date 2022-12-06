class UsersController < ApplicationController

    # skip_before_action :authenticate, except: [:profile]

    def profile
        render json: @user, include: [:items]
    end

    def index
        render json: User.all
    end

    def create
        @user = User.create!(user_params)

        if @user.save
            render json: @user, status: :created
        else
            render json: {error: "User not created"}, status: :bad_request
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end

    private
    def user_params
        params.permit(:username, :password)
    end

end
