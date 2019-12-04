import React from 'react';
import lst from '../imgs/about/lst.png';
import sja from '../imgs/about/sja.png';
import jw from '../imgs/about/jw.png';
import lzh from '../imgs/about/lzh.png';


const About = () => { 
    return (
    	<div className="about">
	    	<div className="start"> 
	    		<h1>About</h1>
	    		<p>
	    			Our team is aiming to offer multipe restaurants choice near northeastern university seattle campus with customized favor including Chinese, Italian, Japenese, Mexican, Traditional American. 
	    			All information are real businuess data and source from Yelp.
	    		</p>
	    	</div>
	    	<div className= "cards">
				<div className="card">
					<img src={lst} alt="Shouting Lyu" />
				  	<h1>Shouting Lyu</h1>
				  	<p className="title">17 Fall</p>
				  	<p> Northeastern </p>
		    		<p> lyu.s@husky.neu.edu </p>
		    		<a href="#"><i className="fa fa-dribbble"></i></a>
  					<a href="#"><i className="fa fa-twitter"></i></a>
  					<a href="#"><i className="fa fa-linkedin"></i></a>
  					<a href="#"><i className="fa fa-facebook"></i></a>
		    	</div>
		    	<div className="card">
					<img src={lzh} alt="Zhihao Li" />
				  	<h1>Zhihao Li</h1>
				  	<p className="title">18 Fall</p>
				  	<p> Northeastern </p>
		    		<p> li.zhiha@husky.neu.edu  </p>
		    		<a href="#"><i className="fa fa-dribbble"></i></a>
  					<a href="#"><i className="fa fa-twitter"></i></a>
  					<a href="#"><i className="fa fa-linkedin"></i></a>
  					<a href="#"><i className="fa fa-facebook"></i></a>
		    	</div>
		    	<div className="card">
					<img src={jw} alt="Wei Jia" />
				  	<h1>Wei Jia</h1>
				  	<p className="title">18 Fall</p>
				  	<p> Northeastern </p>
		    		<p> jia.wei@husky.neu.edu </p>
		    		<a href="#"><i className="fa fa-dribbble"></i></a>
  					<a href="#"><i className="fa fa-twitter"></i></a>
  					<a href="#"><i className="fa fa-linkedin"></i></a>
  					<a href="#"><i className="fa fa-facebook"></i></a>
		    	</div>
		    	<div className="card">
					<img src={sja} alt="Jiaan Shi" />
				  	<h1>Jiaan Shi</h1>
				  	<p className="title">19 Fall</p>
				  	<p> Northeastern </p>
		    		<p> shi.jiaa@husky.neu.edu </p>
		    		<a href="#"><i className="fa fa-dribbble"></i></a>
  					<a href="#"><i className="fa fa-twitter"></i></a>
  					<a href="#"><i className="fa fa-linkedin"></i></a>
  					<a href="#"><i className="fa fa-facebook"></i></a>
		    	</div>
		    </div>
	    </div>
    )
}

export default About