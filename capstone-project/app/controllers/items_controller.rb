class ItemsController < ApplicationController

# skip_before_action :authenticate, except: [:create]

    def index
        render json: Item.all
    end

    def show
        item = Item.find(params[:id])
        render json: item
    end

    def create
        item = Item.create!(item_params)
        render json: item, status: :created
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy
    end

    private

    def item_params
        params.permit(:name, :description, :price, :brand)
    end


end
