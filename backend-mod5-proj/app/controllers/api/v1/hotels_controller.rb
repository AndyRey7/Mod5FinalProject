class Api::V1::HotelsController < ApplicationController
    def index
      @hotels = Hotel.all
      render json: @hotels, status: :ok
    end

    def show
      @hotel = Hotel.find(params[:id])
      render json: @hotel, status: :ok
    end
end
