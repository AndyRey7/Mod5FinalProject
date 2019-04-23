class Api::V1::UsersController < ApplicationController
    before_action :find_user, only: [:show, :update, :destroy]

    def index
      @users = User.all
      render json: @users
    end

    def show
      render json: @user
    end

    def create
      @user = User.new(user_params)
      if @user.save
        @token = JWT.encode({user_id: @user.id}, "yeah")
       render json: { user: @user, jwt: @token }, status: :created
      else
        render json: @user.errors.full_messages , status: :unprocessable_entity
      end
    end

    def update
      @user.update(user_params)
      if @user.save
        render json: @user
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
      end
    end

    def destroy
      render json: @user
      @user.destroy
    end

    private

    def user_params
      params.require(:user).permit(:email, :password, :name,)
    end

    def find_user
      @user = User.find(params[:id])
    end
end
