import React, { Component } from 'react'
import AllOpenOrders from '../../PickupRequest/AllOpenOrders';
import AllAcceptedOrders from '../../PickupRequest/AllAcceptedOrders';
import AllCompletedOrders from '../../PickupRequest/AllCompletedOrders';
import MapContainer from '../../MapContainer';
import './DriverView.css'


export class DriverView extends Component {
  render() {
    return (
      <React.Fragment>
          <MapContainer 
          />
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
        </React.Fragment>
    )
  }
}

export default DriverView
