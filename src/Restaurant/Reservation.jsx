import React, {Component} from "react";


export default class Reservation extends Component {

	constructor(props) {
        super(props);	
        console.log(props)
	    this.state = {
            firstname: props.firstname,
            lastname: props.lastname
	    }
  	}	
      render() {
          return(
              <div>
                  Thank you {this.props.firstname}
              </div>
          )

      }
    }