import React, { useState } from "react";
import './sidebar.scss';
import { ArrowRight } from "@mui/icons-material";
import Subsidebar from "./subSidebar";


const Sidebar = ({isActiveSidebar, setIsActiveSidabar}) => {
    const [activeSubsidebar, setActiveSubsidebar] = useState(false)
    const [test, setTest] = useState(false);
    return(
        <div className={isActiveSidebar ? 'sidebar active' : 'sidebar'} onClick={() => setIsActiveSidabar(false)}>
            <div className="sidebarLeftOpen" onClick={e => e.stopPropagation()}>
                <div className="flexText" onClick={(e) => setActiveSubsidebar(!activeSubsidebar)}>
                   <p>Asgabat saheri</p>
                   <ArrowRight/>
                </div>
                <div className="flexText" onClick={(e) => setTest(!test)}>
                   <p>Ahal welayaty</p>
                   <ArrowRight/>
                </div>
                <Subsidebar activeSubsidebar={activeSubsidebar} setActiveSubsidebar={setActiveSubsidebar} test={test} setTest={setTest}/>
            </div>
        </div>
    )
}

export default Sidebar;

