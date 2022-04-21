class ReviewsController < ApplicationController
    
    def index  
        render json: Review.all, status: :ok
    end 

    def show 
        
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
