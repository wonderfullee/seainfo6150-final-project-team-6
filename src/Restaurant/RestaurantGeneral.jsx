import React, {Component} from "react";
import  { Link } from 'react-router-dom';

export default class RestaurantGeneral extends Component { 
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	category: props.category,
	    	index: props.index,
	    	url: props.restaurant.image_url,
	    	name: props.restaurant.name
	    };
  	}	

	render() {
	    return (
	    	<div>
	    		<img className = "restaurant-general-img" src={this.state.url} alt={this.state.title} />
	    		<h>{this.state.name}</h>
	    		<a href= {"/restaurants/" + this.state.category + "/" + this.state.index}> Details </a>
	    	</div>
	    );
	}
}