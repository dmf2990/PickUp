import React, { Component } from 'react'
import AllOpenOrders from '../../PickupRequest/AllOpenOrders';
import AllAcceptedOrders from '../../PickupRequest/AllAcceptedOrders';
import AllCompletedOrders from '../../PickupRequest/AllCompletedOrders';
import OrderForm from '../../OrderForm/OrderForm';
import MapContainer from '../../Map/MapContainer';
import MapMarker from '../../Map/MapMarker'
import './DriverView.css'
import '../../PickupRequest/PickupRequest.css'


export class DriverView extends Component {
  render() {
    console.log(this.props.locationStart)
    return (
      <React.Fragment>
        
        <div className="mapMarkers" >
                  <MapMarker
                  origin = {this.props.locationStart} 
                  
                  
                  />
                 
                  
              </div>
              
              
        <div className="rest">
        <AllAcceptedOrders
            allAcceptedOrders={this.props.allAcceptedOrders}
            markComplete={this.props.markComplete}
        />
        <AllOpenOrders
            allOpenOrders={this.props.allOpenOrders}
            assignOrder={this.props.assignOrder}
        />
        <AllCompletedOrders
            allCompletedOrders={this.props.allCompletedOrders}
        />
        </div>
      </React.Fragment>
    )
  }
}

export default DriverView
