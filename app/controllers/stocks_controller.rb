class StocksController < ApplicationController
  respond_to :json

  def index
    respond_with Stock.all
  end
  
  def show
    respond_with Stock.find(params[:id])
  end

  def create
    respond_with Stock.create(stock_params)
  end

  def destroy
   respond_with Stock.destroy(params[:id])
  end

  private
    def stock_params
      params.require(:stock).permit(:symbol, :name, :bid, :ask, :year_low, :year_high)
    end
end
