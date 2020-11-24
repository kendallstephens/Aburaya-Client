import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';


export class MapContainer extends Component {
  render() {
    const style = {
      width: '100%',
      height: '50%'
      }

      // const pos = {
      //   lat: 37.8060199, 
      //   lng: -122.2697855
      // }

  return (
  <div className= 'App'>
  <Map google = {this.props.google} 
  zoom = {10}
  initialCenter={{
  lat: 37.8060199,
  lng: -122.2697855
  }}
  style = {style}>
  < Marker position = {{                   
                 lat: 37.8060199,                     
                 lng: -122.2697855                
  }}
  label={'Aburuya'}
             />
             </Map>
  
  </div>
  );
  }
 }

 export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
 })(MapContainer);
