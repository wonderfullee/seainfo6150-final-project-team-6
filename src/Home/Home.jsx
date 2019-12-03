import React from 'react';
// import {Redirect} from 'react-router-dom';
import cnf from '../imgs/cnf.jpg';
import mex from '../imgs/mex.jpg';
import jap from '../imgs/jap.jpg';
import itl from '../imgs/itlian.jpg';
import tra from '../imgs/tra.jpg';
import logo from '../imgs/logo1.svg';


const Home = () => {
    return (
        <div className= "main">


                <div className="cateInner">

                    <div className="img">
                    <span className="foodText">Chinese Food</span>
                    <img className={"pic"} src= {cnf} alt="chinese" onClick={() => {window.location.href="/restaurants/chinese"}}/>
                    </div>

                    <div className="img">
                        <span className="foodText">Italian Food</span>
                    <img className={"pic"} src={itl} alt="italian" onClick={() => {window.location.href="/restaurants/italian"}}/>
                    </div>

                    <div className="img">
                        <span className="foodText">Japanese Food</span>
                    <img className={"pic"} src={jap} alt="japanese" onClick={() => {window.location.href="/restaurants/japanese"}}/>
                    </div>

                    <div className="img">
                        <span className="foodText">Mexican Food</span>
                    <img className={"pic"}  src={mex} alt="mexican" onClick={() => {window.location.href="/restaurants/mexican"}}/>
                    </div>

                    <div className="img">
                        <span className="foodText">Trad-American Food</span>
                    <img className={"pic"} src={tra} alt="tradamerican" onClick={() => {window.location.href="/restaurants/tradamerican"}}/>
                    </div>

                </div>
        </div>
    )
}

export default Home
