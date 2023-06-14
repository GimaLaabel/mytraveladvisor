import React from 'react'
import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Map from './components/Map/Map.jsx'
import { getPlacesData, getWeatherData } from './api/index.js'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils/index.js'

const App = () => {
    const [places, setPlaces] = React.useState([]);
    const [weatherData, setWeatherData] = React.useState([])
    const [filteredPlaces, setFilteredPlaces] = React.useState([]);
    const [coordinates, setCoordinates] = React.useState({});
    const [bounds, setBounds] = React.useState({});
    const [childClicked, setChildClicked] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false)
    const [type, setType] = React.useState("restaurants")
    const [rating, setRating] = React.useState('')
    
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
        // console.log(coordinates, bounds)
    }, [])

    React.useEffect(() => {
        if(bounds.sw && bounds.ne){
            setIsLoading(true);

            getWeatherData(coordinates.lat, coordinates.lng)
            .then((data) => setWeatherData(data))

            getPlacesData(type, bounds.sw, bounds.ne) 
            .then((data) => {
                setPlaces(data?.filter((place) => place.name))
                setFilteredPlaces([])
                setIsLoading(false);
            })
        }
    }, [type, bounds])

    console.log({weatherData})

    React.useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating) 
        setFilteredPlaces(filteredPlaces)
    }, [rating])

    return (        
        <div> 
            <Header 
                setCoordinates = {setCoordinates}
            />

            <div className="main-section">
                <List 
                    places= {filteredPlaces.length? filteredPlaces : places}
                    childClicked = {childClicked} 
                    isLoading = {isLoading}  
                    type = {type}
                    setType = {setType}
                    rating = {rating}
                    setRating = {setRating}
                />
                <Map 
                    setCoordinates = {setCoordinates}   
                    setBounds = {setBounds}
                    coordinates = {coordinates} 
                    places = {filteredPlaces.length? filteredPlaces : places}
                    setChildClicked = {setChildClicked}
                    weatherData = {weatherData}
                />
            </div>
        </div>
    )
}

export default App;

// bl_latitude: '11.847676',
// tr_latitude: '12.838442',
// bl_longitude: '109.095887',
// tr_longitude: '109.149359',