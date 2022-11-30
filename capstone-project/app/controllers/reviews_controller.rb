class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def create
        review = @user.review.create!(review_params)
        render json: review, status: :created
    end

end
