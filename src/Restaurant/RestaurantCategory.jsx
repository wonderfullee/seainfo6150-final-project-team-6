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
<<<<<<< HEAD
		    	<div>
		    		<h1>Logo</h1>
		    		<p> Category: {this.state.category} </p>
		    		<ul>
		    			{this.props.data[this.state.category].map((restaurant, index) => ( 
=======
		    	<div className="restaurant-category">
		    		<div className="category-name">
		    			<h1 > Category: {this.state.category.toUpperCase()} </h1> 
		    		</div>
		    		<ul className="restaurant-category-list">
		    			{this.props.data[this.state.category].map((restaurant, index) => (
>>>>>>> e3ebd0b5493f0c22493aa31ae513f9fce8f21b7a
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