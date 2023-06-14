import React from 'react';
import GoogleMapReact from 'google-map-react';
import { BsFillGeoAltFill } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';
import ReactStars from 'react-rating-stars-component';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData } ) => {
    // const {setCoordinates, setBounds, coordinates, places, setChildClicked } = props
    const isMobileOrTab = useMediaQuery({query: '(max-width: 700px)'});
  
    return (
        <div className="map" style={{height: '100vh', width: "100%"}}>
            <GoogleMapReact
            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGL_MAPS_API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14.0}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                }}
                onChildClick = {(child) => setChildClicked(child)}
                >
                {places?.map((place, i)=>(
                    <div className='card-marker' id='card-mark'
                        lat = {Number(place.latitude)}
                        lng = {Number(place.longitude)}
                        key ={i}
                        // onClick = {() => {
                        //     console.log('child clicked')
                        //     setChildClicked(this)
                        //     console.log(document.getElementById('card-mark'))
                        // }}
                    >
                        {isMobileOrTab ? 
                        <BsFillGeoAltFill color='red' size='20px'/> : 
                        <div 
                            className='card-marker-display' 
                        >
                            {place.name}
                            <img className='card-img' src={place.photo ? place.photo.images.small.url: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} 
                            alt={place.name} 
                            width="100%" />
                            <ReactStars count={5} 
                                value={Number(place.rating)}
                                edit ={false}
                            />
                        </div>
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map;