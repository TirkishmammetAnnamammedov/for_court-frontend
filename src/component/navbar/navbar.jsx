import React, { useState } from "react";
import './navbar.scss';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";

const categories = [
   {
      id: 1,
      main: 'Baş sahypa',
      link: '/home',
      active: 'main'
   },
   {
      id: 2,
      main: 'Täze döretmek',
      link: '/add',
      active: 'add'
   },
   {
      id: 3,
      main: 'Borçlylar',
      link: '/borchlylar'
   },
   {
      id: 4,
      main: 'Bergidarlar',
      link: '/bergidarlar'
   },
   {
      id: 5,
      main: 'Statistika',
      link: '/chart'
   },
   {
      id: 6,
      main: 'Exele öwürmek',
      link: '/exel'
   },
   {
      id: 7,
      main: 'Arhiw',
      link: '/arhiw'
   },
   
]

const Navbar = () => {
   // Get date function
   const currentDateTime = new Date().toLocaleString();
   let date = JSON.stringify(currentDateTime)
   date = date.slice(1, 11)
   const [active, setActive] = useState('')

    console.log(active)
   return (
      <>
         <div className="navbar">
            <div className="flexBox">
               <div className="date">{date}</div>
               <div className="logo"><img src={logo} alt="logo" /></div>

               <div className="backButton">
                  <Link to='/' className="link">
                     <Logout className="logout" />
                     Çykmak
                  </Link>
               </div>

            </div>
         </div>
         <div className="categories">
            <div className="CtgrFlexBox">
                {categories.map((i, j) => (
                  <div className={active==="active" ? "ctgrData active": "ctgrData"}>
                     <Link to={i.link} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="ctgrText" onClick={()=>setActive({active})}>
                           <p>{i.main}</p>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </>
   )
}

export default Navbar;