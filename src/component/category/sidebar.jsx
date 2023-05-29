import React from "react";
import './sidebar.scss';


const Sidebar = ({isActiveSidebar, setIsActiveSidebar}) => {
    return(
        <div className={isActiveSidebar ? 'sidebar active' : 'sidebar'} onClick={() => setIsActiveSidebar(false)}>
            <div className="sdbContainer">
                <div className="sdbCategory">Aşgabat</div>
                <div className="sdbCategory">Ahal welaýaty</div>
            </div>
        </div>
    )
}


export default Sidebar;