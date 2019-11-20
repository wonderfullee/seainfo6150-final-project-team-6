import React, {Component} from "react";

export default class UserRegister extends Component { 
	
	constructor(props) {
	    super(props);
  	}	

	render() {
	    return (
	    	<div>
	    		<form method="post">  
            <input type="text" required="required" placeholder="Name" name="n"></input><br /> 
            <input type="password" required="required" placeholder="Password" name="p"></input><br />  
            <input type="re-password" required="required" placeholder="Re-Password" name="r"></input><br />  
            <input type="e-mail" required="required" placeholder="E-mail" name="e"></input><br />
            <input type="phone" required="required" placeholder="Phone" name="p"></input><br />   
            <button class="but" type="submit">Register</button>  
        </form>  
	    	</div>
	    );
	}
}