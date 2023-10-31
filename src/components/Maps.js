import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Map/Marker'
// import Polyline from './Map/Polyline'

class Maps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mapsLoaded: false,
      map: null,
      maps: null,
    }
  }

  onMapLoaded(map, maps) {
    this.fitBounds(map, maps)

    this.setState({
      ...this.state,
      mapsLoaded: true,
      map: map,
      maps: maps
    })
  }

  fitBounds(map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  afterMapLoadChanges() {
    // return (
    //   <div style={{display: 'none'}}>
    //     <Polyline
    //       map={this.state.map}
    //       maps={this.state.maps}
    //       markers={this.props.markers}/>
    //   </div>
    // )
  }

  render() {
    return (

      <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyBZe6zfgKt1_ECwEnLXDcLGIEPeJ1uWKlI' }}
        style={{ height: '100%', width: '100%', overflow: 'hidden', position: 'absolute' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={({ map, maps }) => this.onMapLoaded(map, maps)}>
        <Marker text={'device1'} lat={26.881502} lng={75.765002} />
        <Marker text={'device2'} lat={26.840049} lng={75.805766} />
        <Marker text={'device3'} lat={26.95635} lng={75.842661} />
        {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
      </GoogleMap>
    )
  }
}

Maps.defaultProps = {
  markers: [
    { lat: 26.881502, lng: 75.765002 },
    { lat: 26.840049, lng: 75.805766 },
    { lat: 26.95635, lng: 75.842661 },
    { lat: 26.881502, lng: 75.765002 }



  ],
  center: [26.88778, 75.797467],
  zoom: 4
}

export default Maps

