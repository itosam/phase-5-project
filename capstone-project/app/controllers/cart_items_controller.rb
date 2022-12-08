class CartItemsController < ApplicationController

    before_action :authorize
    
    def index
        user = User.find_by(id: session[:user_id])
        cart_items= user.cart_items
        render json: cart_items
    end

    def show
        cart_item = CartItem.find(params[:id])
        render json: cart_item
    end

     def create
        user = User.find_by(id: session[:user_id])
        cart_items= user.cart_items.create(item_params)
        if cart_items.valid?
            render json: cart_items, status: :created
        else
            render json: {errors: cart_items.errors.full_messages}, status: :unprocessable_entity
        end
    end


    def destroy
        cart_item = CartItem.find(params[:id])
        cart_item.destroy
    end

    private

    def item_params
        params.permit(:user_id, :item_id)
    end

    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
    

end
