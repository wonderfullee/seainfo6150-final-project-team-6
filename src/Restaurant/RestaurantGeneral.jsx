import React, {Component} from "react";

export default class RestaurantGeneral extends Component { 
	constructor(props) {
	    super(props);
	    this.state = {
	    	category: props.category,
	    	index: props.index,
	    	url: props.restaurant.image_url,
	    	restaurantUrl: props.restaurant.url,
	    	name: props.restaurant.name,
	    	rating: props.restaurant.rating,
	    	price: props.restaurant.price
	    };
  	}	

	render() {
	    return (
	    	<div className="restaurant-general">
	    		<div className="image">
	    			<img src={this.state.url} alt={this.state.title} />
	    		</div>
	    		<div className="content">
	    			<a className= "name item" href={this.state.restaurantUrl}>{this.state.name}</a> 
	    			<span className="description item">Rating: {this.state.rating} Price:{this.state.price}</span>
	    			<a className="details grey item" href={"/restaurants/" + this.state.category + "/" + this.state.index}> Details </a>
	    		</div>
	    	</div>
	    );
	}
}