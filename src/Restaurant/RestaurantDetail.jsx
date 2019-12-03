import React, {Component} from "react";
import styles from '../Restaurant/RestaurantDetail.module.css'
import Reservation from '../Restaurant/Reservation'
import {Redirect, withRouter} from 'react-router-dom';


export default class RestaurantDetail extends Component {

    constructor(props) {
	    super(props);	
	    this.state = {
            category: props.category,
            index: props.index,
            data: props.data,
            hiddeForm: false,
            hiddeSubmission: true,
            firstname :"",
            lastname :"",
            cellPhopne:"",
            numofGuest :"",
            reservationDate: "",
            reservationTime: ""
	    }
      }

      

      submitForm = () => {
        this.setState({
            hiddeForm: true,
            hiddeSubmission: false
        })


 
        
      }

      formChange = (event) =>{
          event.preventDefault();
          const target = event.target;
          const value = target.value;
          const name = target.name;
            this.setState({
            [name]: value
    });

}




      
    render() {
        return (
        <div>
        <div>
           
            <h1 >{this.props.data[this.props.category][this.props.index].name}</h1>
        </div>
        <div className= {styles.container}>
            
            
                <img className = {styles.restaurantDetai} src = {this.props.data[this.props.category][this.props.index].image_url} alt={this.props.data[this.props.category][this.props.index].name}/>
                
                <div className = {styles.detailtext}>
                <table className ={styles.restaurantDetailTable}>
                <tr>
                    <th>Restaurant</th>
                    <th>RestaurantDetail</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{this.props.data[this.props.category][this.props.index].name}</td>
                </tr>
                <tr>
                    <td>Prices</td>
                    <td>{this.props.data[this.props.category][this.props.index].price}</td>
                </tr>
                <tr>
                    <td>Rating</td>
                    <td>{this.props.data[this.props.category][this.props.index].rating}</td>
                </tr>
                <tr>
                    <td>Business Hours</td>
                    <td>{this.props.data[this.props.category][this.props.index].businessHours}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{this.props.data[this.props.category][this.props.index].display_phone}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{this.props.data[this.props.category][this.props.index].location.display_address}</td>
                </tr>


                </table>    
                <form className={styles.detailForm} id= "reservateion"  hidden={this.state.hiddeForm}>
                    First Name: <br/>
                    <input type ="text" placeholder = "First Name" name = "firstname" value={this.state.firstname} onChange ={this.formChange}></input><br/>
                    Last Name: <br></br>
                    <input type ="text" placeholder = "Last Name" name = "lastname"value={this.state.lastname} onChange ={this.formChange}></input><br/>
                    Phone Number <br/>
                    <input type ="text" placeholder = "Phone Number" name="cellPhopne" value={this.state.cellPhopne} onChange ={this.formChange}></input><br/>
                    Number of Guest <br/>
                    
                    <input type="radio" name = "numofGuest" value="1" onChange ={this.formChange}/> 1 
                    <input type="radio" name = "numofGuest" value="2" defaultChecked onChange ={this.formChange}/> 2 
                    <input type="radio" name = "numofGuest" value="3" onChange ={this.formChange}/> 3
                    <input type="radio" name = "numofGuest" value="4" onChange ={this.formChange}/> 4
                    <input type="radio" name = "numofGuest" value="5" onChange ={this.formChange}/> 5
                    <input type="radio" name = "numofGuest" value="5+" onChange ={this.formChange}/> 5+
                    

                    <br/>
                    Reservation Date and Time
                    <br />
                    <input type="date" name="reservationDate" onChange ={this.formChange}></input>

                    <select name="reservationTime" form="reservateion" value={this.state.vale} onChange ={this.formChange}>
                        <option value="11pm-2pm">11pm-2pm</option>
                        <option value="6pm-9pm">6pm-9pm</option>
                    </select>
                    
                    <br/>
                    <button className={styles.reservationButton} type="button" onClick={this.submitForm} >Make Reservation</button>
                </form>

                { this.state.hiddeSubmission ? null :
                <div>
                    <h2>Thank you! We got your revervation   See you soon</h2>

                <table>
                <tr>
                    <td>First Name</td>
                    <td>{this.state.firstname}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{this.state.lastname}</td>
                </tr>
                <tr>
                    <td>Your cellphone</td>
                    <td>{this.state.cellPhopne}</td>
                </tr>
                <tr>
                    <td>Number Of Guest</td>
                    <td>{this.state.numofGuest}</td>
                </tr>
                <tr>
                    <td>Reservation Date</td>
                    <td>{this.state.reservationDate}</td>
                </tr>
                <tr>
                    <td>Reservation Time</td>
                    <td>{this.state.reservationTime}</td>
                </tr>
                </table>
                </div>}
          
                </div>
            </div>
            </div>
        )
    }
}
    
