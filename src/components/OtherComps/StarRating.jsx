import React from 'react'
import {BsStarHalf, BsStarFill} from 'react-icons/bs'

const StarRating = (props)=>{
    
    const {ratingValue} = props;

    const displayRating = ()=>{
        // let count = Number(ratingValue)
        // const numbStars = Number(ratingValue)
        // let starElement = `<div id='display'></div>`
        // for(let i = 0; i < numbStars; i++){
        //     if(count - 0.5 === 0){
        //         document.getElementById('display').innerHTML += "<BsStarHalf />"
        //     }else{
        //         document.getElementById('display').innerHTML += "<BsStarFill />"
        //     }
        //     count--;
        // }
        console.log(props.ratingValue);
        return "Hello world";
    }

    return (        
        <div className='rating-div' id='rating-div'>
            <h3>component</h3>
            {<BsStarFill color='yellow'/>}
            <BsStarHalf color='yellow'/> 
            <h3>{displayRating}</h3>
        </div>
    )
    
}
export default StarRating;