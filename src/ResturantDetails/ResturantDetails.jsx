import React from 'react'

const Detail = props => {
    return (
        <div>
            <div className="logoImage"></div>
            <div className="hotelImages">
                <image className = "hotelImage" src ={data.image_url} />
            </div>
            <div className="hotelDetail">
                <ul>
                    <li className="name">name</li>
                    <li className="prices">prices</li>
                    <li className="rating">rating</li>
                    <li className="businessHours">businessHours</li>
                    <li className="display_phone">display_phone</li>
                    <li className="display_address">display_address</li>
                    
                </ul>
            </div>
            <div className="reservateButton"></div>

            
        </div>
    )
}

export default Foo