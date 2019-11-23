import React from 'react';
import {Redirect} from 'react-router-dom'; 
import cnf from '../imgs/cnf.jpg';
import mex from '../imgs/mex.jpg';
import jap from '../imgs/jap.jpg';
import itl from '../imgs/itlian.jpg';
import tra from '../imgs/tra.jpg';
import logo from '../imgs/logo1.svg';


const Home = () => {
    return (
        <div className= "main">
            The home page

            <div className = "logo">
                <img className= "logimg" src={logo} alt = "logo"/>
            </div>

            <div className="cateOuter">
                {/*<text fontSize="20px" >categroies</text>*/}
                <div className="cateInner">

                    <div className="img">
                    <text className="foodText">Chinese Food</text>
                    <img  src= {cnf} alt="chinese" onClick={() => {window.location.href="/restaurants/chinese"}}/>
                    </div>

                    <div className="img">
                        <text className="foodText">Italian Food</text>
                    <img src={itl} alt="italian" onClick={() => {window.location.href="/restaurants/italian"}}/>
                    </div>

                    <div className="img">
                        <text className="foodText">Japanese Food</text>
                    <img src={jap} alt="japanese" onClick={() => {window.location.href="/restaurants/japanese"}}/>
                    </div>

                    <div className="img">
                        <text className="foodText">Mexican Food</text>
                    <img src={mex} alt="mexican" onClick={() => {window.location.href="/restaurants/mexican"}}/>
                    </div>

                    <div className="img">
                        <text className="foodText">Trad-American Food</text>
                    <img src={tra} alt="tradamerican" onClick={() => {window.location.href="/restaurants/tradamerican"}}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
