import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


const MarkersList = props => {
  const { locationStarts, ...markerProps } = props;
  return (
    <span>
      {locationStarts.map((locationStart, i) => {
        return (
          <Marker
            key={i}
            {...markerProps}
            position={{ lat: locationStart.lat(), lng: locationStart.lng() }}
          />
        );
      })}
    </span>
  );
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationStarts: []
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick = (ref, map, ev) => {
    const locationStart = ev.latLng;
    this.setState(prevState => ({
      locationStarts: [...prevState.locationStarts, locationStart]
    }));
    map.panTo(locationStart);
  };

  render() {
    return (
      <div className="map-view">
        <div className="map-container">
          <Map
            google={this.props.google}
            className={"map"}
            zoom={this.props.zoom}
            initialCenter={{
              lat: 39.9611,
              lng: -82.9987
              }}
              styles={ [    
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                }
            ]}
            onClick={this.handleMapClick}
          >
          <MarkersList locationStart={this.state.locationStart}  />

          <Marker
          position = {{ lat: 39.9611, lng: -82.9987 }}
         
          />
          </Map>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'API_KEY_HERE'
})(MapContainer);



