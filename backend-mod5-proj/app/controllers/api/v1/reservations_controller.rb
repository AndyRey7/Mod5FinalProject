class Api::V1::ReservationsController < ApplicationController
    before_action :find_reservation, only: [:show, :update, :destroy]

    def index
      @reservations = Reservation.all
      render json: @reservations
    end

    def show
      render json: @reservation
    end

    def create
      @reservation = Reservation.new(reservation_params)
      if @reservation.save
        render json: @reservation, status: :ok
      else
        render json: @reservation.errors, status: :unproccessable_entity
      end
    end

    def update
      if @reservation.update(reservation_params)
        render json: @reservation, status: :ok
      else
        render json: @reservation, status: :unproccessable_entity
      end
    end

    def delete
      @reservation.destroy
      render json: @reservation, status: :ok
    end

    private

    def reservation_params
        params.require(:reservation).permit(:user_id, :room_id)
    end

    def find_reservation
        @reservation = Reservation.find(params[:id])
    end


end
