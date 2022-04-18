class CharitiesController < ApplicationController

    def index 
        render josn: Charity.all, status: :ok
    end

    def show  
        charity = Charity.find_by(id: params[:id])
        if charity
            render json: charity, status: :ok
        else 
            render json: {error: "charity not found"}, status: :not_found
        end 
    end
end
