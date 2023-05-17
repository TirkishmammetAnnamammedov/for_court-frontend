import React from "react";
import App from "./App";
import Navbar from "./component/navbar/navbar";
import  {withRouter} from 'react-router-dom';

const Route = ({location}) => {
 return(
    <> 
        {location.pathname !=='/login' && <Navbar/>}  <App/>
    </>
 )
}

export default withRouter(Route);