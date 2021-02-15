import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function Map(props) {
   
  const mapSettings = {
    containerStyle: {
      width: '100%',
      height: '50vh'
      },
      center: {
          lat: props.hives.length > 0 ? props.hives[0].location.coordinates[0] : 55.378051 ,
          lng: props.hives.length > 0 ? props.hives[0].location.coordinates[1] : -3.435973
      }
  }

  const hives = props.hives

  const renderMarkers = () => {
      const markers = hives.map(hive=>{
          const lat = hive.location.coordinates[0]
          const lng = hive.location.coordinates[1]
          const position = {
              lat: lat,
              lng: lng
          }
          return <Marker key={hive._id} position={position} onClick={()=>{props.clickedHive(hive._id)}}/>
      })

      return markers
  }
  
  return (
      <LoadScript
        googleMapsApiKey="AIzaSyD1oOisGCqOcAQ4PbEUjwT_tgneji5RkQs"
      >
        <GoogleMap
          mapContainerStyle={mapSettings.containerStyle}
          center={mapSettings.center}
          zoom={5}
          defaultOptions={{
            zoomControl: true,
            fullscreenControl: true,
            streetViewControl: false,
            mapTypeControl: false,
          }}
        >
          <React.Fragment>
            {renderMarkers()}
          </React.Fragment>
        </GoogleMap>
      </LoadScript>
  )
}

export default Map