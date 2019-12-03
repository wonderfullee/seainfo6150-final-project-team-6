import React, {Component} from "react";
import "./Login.css"
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
        </form> 
		<form method ="get" action = "/">
		<button className="but" type="submit">Login</button>   
		</form>
	    	</div>
	    );
	}
}