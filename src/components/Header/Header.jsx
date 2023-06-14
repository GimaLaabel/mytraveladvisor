import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {BsSearch} from "react-icons/bs";

const Header = ({setCoordinates}) => {
    const [autoComplete, setAutoComplete] = React.useState(null)

    const onLoad = (autoCom) => setAutoComplete(autoCom);
    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();

        setCoordinates({lat, lng});
    }

    return (
        <nav className="header">
            <h2>My Travel Advisor</h2>
            <div className='header-right'>
                <h4>Explore new places</h4>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className='search'> 
                        <BsSearch />                       
                        <input type="text" placeholder='Search...'/>
                    </div>
                </Autocomplete>
            </div>
        </nav>        
    )
}

export default Header;