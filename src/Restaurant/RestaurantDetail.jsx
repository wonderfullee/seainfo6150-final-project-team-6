import React from 'react'


const RestaurantDetail = (props) => {
    return (
        <div>
            <div className="logoImage">LOGO Image</div>
            <div className="hotelImages">
                <img className = "hotelImage" src = {props.data[props.category][props.index].image_url} />
            </div>
            <div className="hotelDetailList">
                <ul>
                    <li className="name">{props.data[props.category][props.index].name}</li>
                    <li className="prices">{props.data[props.category][props.index].price}</li>
                    <li className="rating">{props.data[props.category][props.index].rating}</li>
                    <li className="businessHours">{props.data[props.category][props.index].businessHours}</li>
                    <li className="display_phone">{props.data[props.category][props.index].display_phone}</li>
                    <li className="display_address">{props.data[props.category][props.index].location.display_address}</li>
                    
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