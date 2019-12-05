class ShipmentsController < ApplicationController
  before_action :set_shipment, only: [:show, :update, :destroy]

  # GET /shipments
  def index
    @shipments = Shipment.all

    render json: @shipments
  end

  # GET /shipments/1
  def show
    render json: @shipment
  end

  # POST /shipments
  def create
    @shipment = Shipment.new(shipment_params)

    if @shipment.save
      render json: @shipment, status: :created, location: @shipment
    else
      render json: @shipment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shipments/1
  def update
    if @shipment.update(shipment_params)
      render json: @shipment
    else
      render json: @shipment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shipments/1
  def destroy
    @shipment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shipment
      @shipment = Shipment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def shipment_params
      params.require(:shipment).permit(:name, :address, :email, :phone, :product_detail)
    end
end
