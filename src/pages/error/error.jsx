import React from "react";
import './error.scss';
import notFound from '../../images/notFound.jpg';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <div className="errorContainer">
              <img className="notImg" src={notFound} alt="Not Found"/>
                <h1>Gözlenilýän sahypa tapylmady</h1>
                  <Link to='/home' style={{textDecoration: 'none'}}>
                    <p>Baş sahypa geçmek</p>
                  </Link>
            </div>
        </div>
    )
}

export default Error;