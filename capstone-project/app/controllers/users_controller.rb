class UsersController < ApplicationController

    # skip_before_action :authenticate, except: [:profile]

    def index
        render json: User.all
    end

     def show
        user = User.find_by(id: session[:user_id])
           render json: user
     end

    def create
        user = User.create!(user_params)

        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: "Invalid username or password-user not created"}, status: :bad_request
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    private
    def user_params
        params.permit(:username, :password)
    end

end
