import React from "react";
import './main.scss';
import { Link } from "react-router-dom";
import fon from '../../images/fon.jpg';

const Main = () => {
    return (
        <div className="main">
            <div className="mainContainer">
                <div className="leftText">
                    <div className="textwrapper">
                        <div className="p">Türkmenistanyň ýokary <br />kazyýeti</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint
                            soluta voluptates tenetur minus dolore ratione consectetur laudantium labore dolorem
                            voluptatibus, similique architecto veritatis eius est provident accusantium voluptate vitae.
                        </p>
                        <div className="button">
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                <button className="btn-one">
                                    <span>Giriş</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='rightImage'>
                    <img src={fon} />
                </div>
            </div>
        </div>
    )
}

export default Main;