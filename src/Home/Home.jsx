import React from 'react'
import mainpage from '../styles/mainPage.module.css';
import cnf from '../imgs/cnf.jpg';
import mex from '../imgs/mex.jpg';
import jap from '../imgs/jap.jpg';
import itl from '../imgs/itlian.jpg';
import tra from '../imgs/tra.jpg';
import logo from '../imgs/logo1.svg';


const Home = () => {
    return (
        <div className={mainpage.main}>
            The home page

            <div className ={mainpage.logo}>
                <img className={mainpage.logoimg} src={logo} alt = "logo"/>
            </div>

            <div className={mainpage.login}>
                <a href="" target='_blank' className={mainpage.loginUrl}>User Login </a>
            </div>

            <div className={mainpage.cateOuter}>
                {/*<text fontSize="20px" >categroies</text>*/}
                <div className={mainpage.cateInner}>

                    <div className={mainpage.img}>
                    <text className={mainpage.foodText}>Chinese Food</text>
                    <img  src= {cnf} alt="chinese" onClick={() => {window.location.href="www.google.com"}}/>
                    </div>

                    <div className={mainpage.img}>
                        <text className={mainpage.foodText}>Italian Food</text>
                    <img src={itl} alt="italian" onClick={() => {javaScript:alert("hello")}}/>
                    </div>

                    <div className={mainpage.img}>
                        <text className={mainpage.foodText}>Japanese Food</text>
                    <img src={jap} alt="japanese" onClick={() => {javaScript:alert("hello")}}/>
                    </div>

                    <div className={mainpage.img}>
                        <text className={mainpage.foodText}>Mexican Food</text>
                    <img src={mex} alt="mexican" onClick={() => {javaScript:alert("hello")}}/>
                    </div>

                    <div className={mainpage.img}>
                        <text className={mainpage.foodText}>Trad-American Food</text>
                    <img src={tra} alt="tradamerican" onClick={() => {javaScript:alert("hello")}}/>
                    </div>

                </div>
            </div>
            <div className={mainpage.about}>
                <a href="" target='_blank' className={mainpage.contect}>About</a>
                <text className={mainpage.contect}>    |   </text>
                <a href="" target='_blank' className={mainpage.contect}>Contect us</a>
            </div>

        </div>
    )
}

export default Home
