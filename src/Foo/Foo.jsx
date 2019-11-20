import React from 'react'
import data from  "./date.json"

const Foo = () => {
    return (
        <div>
            <div className="logoImage">LOGO Image</div>
            <div className="hotelImages">
                <img className = "hotelImage" src ={data[props.category][props.id].image_url}/>
            </div>
            <div className="hotelDetailList">
                <ul>
                    <li className="name">{data[props.category][props.id].name}</li>
                    <li className="prices">{data[props.category][props.id].price}</li>
                    <li className="rating">{data[props.category][props.id].rating}</li>
                    <li className="businessHours">{data[props.category][props.id].businessHours}</li>
                    <li className="display_phone">{data[props.category][props.id].display_phone}</li>
                    <li className="display_address">{data[props.category][props.id].display_address}</li>
                    
                </ul>
            </div>
            <div className="reservateButton">
                <button className="reservateButton">reservate</button>
            </div>

            
        </div>
    )
}

export default Foo
