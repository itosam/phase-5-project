class CartItemsController < ApplicationController

    
    def index
        cart_items = @user.cart_items
        render json: cart_items
    end

    def show
        cart_item = CartItem.find(params[:id])
        render json: cart_item
    end

    def destroy
        cart_item = CartItem.find(params[:id])
        cart_item.destroy
    end

end
