class Api::V1::RoomsController < ApplicationController
    def index
      @rooms = Room.all
      render json: @rooms, status: :ok
    end

    def show
      @room = Room.find(params[:id])
      render json: @room, status: :ok
    end
end
