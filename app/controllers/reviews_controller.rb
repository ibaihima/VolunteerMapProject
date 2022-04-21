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

    def update 

    end 

    def destroy 

    end 

    private 

    def review_params 
        params.permit(:user_id, :charity_id, :rating, :review_content)
    end

end