class ReviewsController < ApplicationController
    skip_before_action :authorized, only: [:show,:index]

    def index  
        render json: Review.all, status: :ok
    end 

    def show 
        review = Review.find_by!(id: params[:id])
        render json: review
    end 

    def create 
        review = Review.create(review_params)
        if review
            render json: review, status: :created
        else 
            render json: {error: "not created"}, status: :unprocessable_entity
        end
    end 

    def by_user_id
        user_reviews = User.find(session[:user_id]).reviews
        render json: user_reviews
    end 

    def update 
        review = Review.find_by!(id: params[:id])
        review.update!(review_params)
        render json: review, status: :accepted
    end 

    def destroy 
        review = Review.find_by!(id: params[:id])
        review.destroy
        head :no_content

    end 

    private 

    def review_params 
        params.permit(:user_id, :charity_id, :review_content)
    end

end