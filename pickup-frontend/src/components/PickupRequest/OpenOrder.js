import React, { Component } from "react";
import './PickupRequest.css'

class OpenOrder extends Component {





  render() {
    const { id, locationStart, locationEnd, time, description, status } = this.props.openOrder;

    if (status === 'DO'){
    return (
    <div className="box">
      
          <h2 className="box-item">{ description }</h2>
          <p className="box-item">Starting Location: { locationStart }</p>
          <p className="box-item">Destination: { locationEnd }</p>
          <p className="box-item">Time of Delivery: { time }</p>
          <p className="box-item">Status: { status }</p>
          <p className="">Order Confirmation: { id }</p>
          <button className="btn" onClick={()=>this.props.assignOrder(id) }>Accept Order</button>
    </div> )} 

    else return ("")
  }
}

export default OpenOrder;

