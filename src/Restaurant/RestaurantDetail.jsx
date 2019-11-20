import React from 'react'
import data from  '../data/data.json'

const RestaurantDetail = (props) => {
    return (
        <div>
            <div className="logoImage">LOGO Image</div>
            <div className="hotelImages">
                <img className = "hotelImage" src = {data[props.category][props.index].image_url} />
            </div>
            <div className="hotelDetailList">
                <ul>
                    <li className="name">{data[props.category][props.index].name}</li>
                    <li className="prices">{data[props.category][props.index].price}</li>
                    <li className="rating">{data[props.category][props.index].rating}</li>
                    <li className="businessHours">{data[props.category][props.index].businessHours}</li>
                    <li className="display_phone">{data[props.category][props.index].display_phone}</li>
                    <li className="display_address">{data[props.category][props.index].location.display_address}</li>
                    
                </ul>
            </div>
            <div className="reservateButton">
            <form method="get" action="/Reservation">
                <button type="submit">Make Reservation</button>
            </form>
            </div>     
        </div>
    )
}

export default RestaurantDetail