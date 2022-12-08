class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def create
        user = User.find_by(id: session[:user_id])
        review = user.reviews.create(review_params)
        
        if review.valid?
        render json: review, status: :created
        else
            render json: {errors: "Please Sign in to leave review"}, status: :unprocessable_entity
        end
    end

     def destroy
        review = Review.find_by(id: params[:id])
        if review
          review.destroy
          head :no_content
        else
          render json: { error: "Review not found" }, status: :not_found
        end
      end

    private

    def review_params
        params.permit(:user_id, :product_id, :rating, :comment)
    end

end
