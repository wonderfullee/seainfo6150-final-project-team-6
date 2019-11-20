import React, {Component} from "react";

export default class UserLogin extends Component { 
	
	constructor(props) {
	    super(props);
  	}	

	render() {
	    return (
	    	<div>
	    		  <h1>Login</h1>  
        <form method="post">  
            <input type="text" required="required" placeholder="Name" name="n"></input><br />
            <input type="password" required="required" placeholder="Password" name="p"></input><br />
            <button class="but" type="submit">Login</button>  
        </form> 
	    	</div>
	    );
	}
}