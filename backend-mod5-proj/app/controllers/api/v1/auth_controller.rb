class Api::V1::AuthController < ApplicationController
  def create
    @user = User.find_by(email: login_params[:email])
    if @user && @user.authenticate(login_params[:password])
      token = JWT.encode({ user_id: @user.id }, "secret")
      render json: { user:@user , jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def show
      # byebug
    user_id = JWT.decode(request.headers["Authorization"], nil, false)[0]["user_id"]
    user = User.find(user_id)
    render json:  { user: UserSerializer.new(user) }
  end

  private

  def login_params
    params.require(:user).permit(:email, :password)
  end
end
