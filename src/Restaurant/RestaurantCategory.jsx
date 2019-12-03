import React, {Component} from "react";
import {Redirect} from 'react-router-dom'; 
import RestaurantGeneral from "./RestaurantGeneral.jsx";

export default class RestaurantCategory extends Component { 	

	constructor(props) {
	    super(props);	
	    this.state = {
	    	category: props.category,
	    }
  	}	

	render() {
		if(this.props.data[this.state.category] === undefined ) {
			return (<Redirect to = "/err" />);
		} else {
			return (
		    	<div className="restaurant-category">
		    		<div className="category-name">
		    			<h1 > Category: {this.state.category.toUpperCase()} </h1> 
		    		</div>
		    		<ul className="restaurant-category-list">
		    			{this.props.data[this.state.category].map((restaurant, index) => (
	        				<li key={restaurant.id}>
	        					<RestaurantGeneral 
	        					index = {index}
	        					category= {this.state.category} 
	        					restaurant= {restaurant} />
	        				</li>
	      				))}
		    		</ul>
		    	</div>
	    	);
		}
	}
}