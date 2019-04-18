import React, { Component } from 'react'
import MapContainer from '../Map/MapContainer'

class CompletedOrder extends Component {
 
 
  render() {

    const { id, locationStart, locationEnd, date ,time, description, status, img } = this.props.completedOrder;


    if (status === 'DONE'){
    return (
        <div className="box">
        <section className="grid__section">
          <div className="grid__item">
                <h2 className="box-item">{ description }</h2>
                <p className="box-item">Driver</p>
                <p className="box-item">Starting Location: { locationStart }</p>
                <p className="box-item">Destination: { locationEnd }</p>
                <p className="box-item">Date of Delivery: { date }</p>
                <p className="box-item">Time of Delivery: { time }</p>
                <p className="box-item">Status: { status }</p>
                <p className="">Order Confirmation: { id }</p>
                </div>
            <div className= "grid__item">
            <h1>Item:</h1>
            <img src= {img}/>
            </div>
          
        </section>
                
        </div> )} 

    else return ("")
  }
}

export default CompletedOrder
