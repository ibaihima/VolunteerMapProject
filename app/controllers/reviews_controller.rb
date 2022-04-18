class ReviewsController < ApplicationController
    
    def index  
        render json: Review.all, status: :ok
    end 

    def show 

    end 

    def create 

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
