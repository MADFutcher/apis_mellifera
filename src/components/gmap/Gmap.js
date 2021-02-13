/*global google*/

import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


export default class Map extends Component {
    constructor(props){
        super(props)
        this.state = {
            containerStyle: {
                width: '100%',
                height: '50vh'
            },
            center: {
                lat: this.props.hives[0].location.coordinates[0],
                lng: this.props.hives[0].location.coordinates[1]
            },
            hives: this.props.hives
        }
    }
    

    renderMarkers = () =>{
        const google=window.google
        const markers = this.state.hives.map(hive=>{
            const lat = hive.location.coordinates[0]
            const lng = hive.location.coordinates[1]
            const position = {
                lat: lat,
                lng: lng
            }
            return <Marker key={hive._id} position={position} onClick={()=>{this.props.clickedHive(hive._id)}}/>
        })

        return markers
    }

  render() {

    return (
      <LoadScript
        googleMapsApiKey="AIzaSyD1oOisGCqOcAQ4PbEUjwT_tgneji5RkQs"
      >
        <GoogleMap
          mapContainerStyle={this.state.containerStyle}
          center={this.state.center}
          zoom={5}
          defaultOptions={{
            zoomControl: true,
            fullscreenControl: true,
            streetViewControl: false,
            mapTypeControl: false,
          }}
        >
          {this.renderMarkers()}
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}