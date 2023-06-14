import React from 'react';
import {BsGeoAltFill, BsFillTelephoneFill} from "react-icons/bs";
import ReactStars from 'react-rating-stars-component';

const PlaceDetails = ({place, selected, refProp}) => {
    
    if(selected) refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"})

    return (
        <div className="card">
            <div className="card-title">
                <img className='card-img' src={place.photo ? place.photo.images.large.url: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} alt={place.name} width="100%" />
                <h5 className='card-title-name'>{place.name}</h5>
            </div>
            <div className="card-content">
                <div className='rating-div'>
                    <ReactStars count={5} 
                    value={Number(place.rating)}
                    edit ={false}
                    />
                    <h5>out of {place.num_reviews} reviews</h5>
                </div>
                { place.price && 
                <div className="card-price">
                    <h5>Price: </h5>
                    <h5>{place.price}</h5>
                </div>
                }
                <div className="card-price">
                    <h5>Ranking</h5>
                    <h6>{place.ranking}</h6>
                </div>
                {place?.awards?.map((award) => (
                    <div>
                        <img src={award.images.small} alt={award.display_name}/>
                        <h6>{award.display_name}</h6>
                    </div>
                ))}
                <div className="cuisines">
                    <h5>Cuisines: {place?.cuisine?.map(({name})=>(
                    <h6 className='cuisine-item'>{name}</h6>
                ))}</h5>
                </div>
                {place?.address && 
                    <div className="card-address">
                        <BsGeoAltFill />
                        <h6>{place.address}</h6>
                    </div>
                }

                {place?.phone && 
                    <div className="card-address">
                        <BsFillTelephoneFill />
                        <h6>{place.phone}</h6>
                    </div>
                }
                <div className='card-navigation'>
                    <button className='card-nav-btn' onClick={()=>window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </button>
                    <button className='card-nav-btn' onClick={()=>window.open(place.website, '_blank')}>
                        Website
                    </button>
                </div>
                
            </div>

        </div>
    ) 
}

export default PlaceDetails;