import React from 'react'
import data from  '../data.json'
import reverse from '../Restaurant/Reservation'

const Foo = () => {
    return (
        <div>
        <div className="logoImage">LOGO Image</div>
        <div className="hotelImages">
            <img className = "hotelImage" src ={data['chinese'][1].image_url} alt="" />
        </div>
        <div className="hotelDetailList">
            <ul>
                <li className="name">{data['chinese'][1].name}</li>
                <li className="prices">{data['chinese'][1].price}</li>
                <li className="rating">{data['chinese'][1].rating}</li>
                <li className="businessHours">{data['chinese'][1].businessHours}</li>
                <li className="display_phone">{data['chinese'][1].display_phone}</li>
                <li className="display_address">{data['chinese'][1].display_address}</li>
                
            </ul>
        </div>
        <div className="reservateButton">
        <form method="get" action={reverse}>
            <button type="submit">Reservation</button>
        </form>
        </div>
    </div>
    )
}

export default Foo
