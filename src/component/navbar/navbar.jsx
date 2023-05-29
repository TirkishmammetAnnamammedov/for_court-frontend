import React, { useState } from "react";
import './navbar.scss';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import Sidebar from "../sidebar/sidebar";


const Navbar = () => {
   const categories = [
      {
         id: 1,
         main: 'Kategoriýalar',
         onClick: 'category',
         active: 'category',
      },
      {
         id: 2,
         main: 'Baş sahypa',
         link: '/home',
         active: 'main'
      },
      {
         id: 3,
         main: 'Täze döretmek',
         link: '/add',
         active: 'add'
      },
      {
         id: 4,
         main: 'Borçlylar',
         link: '/borchlylar',
         active: 'borch'
      },
      {
         id: 5,
         main: 'Bergidarlar',
         link: '/bergidarlar',
         active: 'bergidar'
      },
      {
         id: 6,
         main: 'Arhiw',
         link: '/arhiw',
         active: 'arhiw'
      },
   ]

   const currentDateTime = new Date().toLocaleString();
   let date = JSON.stringify(currentDateTime)
   date = date.slice(1, 11)
   const [active, setActive] = useState('')
   const [isActiveSidebar, setIsActiveSidabar] = useState(false)

   console.log()
   return (
      <>
         <div className="navbar">
            <div className="flexBox">
               <div className="left">
                  <div className="logo">
                     <img src={logo} alt="logo" />
                  </div>
                  <p>Türkmenistanyň ýokary kazyýeti</p>
               </div>

               <div className="right">
                  <div className="date">{date}</div>
                  <div className="backButton">
                     <Link to='/' className="link">
                        <Logout className="logout" />
                        Çykmak
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="categories">
            <div className="CtgrFlexBox">
               {categories.map((i) => (
                  <div className={active === i.active ? "ctgrData active" : "ctgrData"} key={i.id}>
                     <Link to={i.link} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="ctgrText" onClick={() => {setActive(i.active); i.id===1 && setIsActiveSidabar(!isActiveSidebar)}}>
                           <p>{i.main}</p>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
            {isActiveSidebar &&(
               <Sidebar isActiveSidebar={isActiveSidebar} setIsActiveSidabar={setIsActiveSidabar} />
            )}
         </div>
      </>
   )
}

export default Navbar;