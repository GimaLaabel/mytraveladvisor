import React from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import ReactLoading from 'react-loading';

const List = ({places, childClicked, isLoading, type, setType, rating, setRating } ) => {
    // const {places, childClicked} = props
    
    const [elRefs, setElRefs] = React.useState([])

    React.useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || React.createRef());
        setElRefs(refs);
    }, [places])
    console.log({childClicked})
    
    return (
        <div className="list">
            <h4>Restaurants, Hotels & Attractions around you</h4>            
            {isLoading? (
                <div className='loading'>
                    <ReactLoading type = 'spin' color='blue' height= '100' width= '100'/>
                </div>
            ) :
            (
             <>
                <div className="list-div">
                    <form>
                        <label htmlFor='type'>Type </label>
                        <select id="type" 
                                value={type}
                                onChange={(e) => (setType(e.target.value))}>
                            <option value="restaurants">Restaurants</option>
                            <option value="hotels">Hotels</option>
                            <option value="attractions">Attractions</option>
                        </select>
                    </form>
                    <form>
                        <label htmlFor='rating'>Rating </label>
                        <select id="rating" 
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}>
                            <option value={0}>All</option>
                            <option value={3}>Above 3.0</option>
                            <option value={4}>Above 4.0</option>
                            {/* <option value={4.5}>Above 4.5</option> */}
                        </select>
                    </form>                
                </div>
                <div>
                    {places?.map((place, i) =>(
                        <div key = {i}>
                            <PlaceDetails 
                                place={place} 
                                selected = {Number(childClicked) === i}
                                refProp = {elRefs[i] }
                            />
                        </div>
                    ))}
                </div>
            </>               
            )}
        </div>
    )
}

export default List;