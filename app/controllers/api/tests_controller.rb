class Api::TestsController < ApplicationController

  def index
    tests = Test.all
    render json: tests
  end
  def show
    render json: @test
  end
  def create
    @test = Test.new(test_params)
    if @test.save
      render json: @test
    else
      render json: {errors: test.errors}, status: 422
    end
  end
  def update
    if @test.update(test_params)
      render json: @test
    else
      render json: {errors: test.errors}, status: 422
    end
  end
  def destroy
    render json: @test.destroy
  end
  private
  def test_params
  params.require(:test).permit(:name)
  end
  def set_test
    @test = Test.find(params[:id])
  end

end
