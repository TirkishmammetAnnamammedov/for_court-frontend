import React from "react";
import './sidebar.scss';

const Subsidebar = ({ test, setTest, activeSubsidebar, setActiveSubsidebar }) => {
    return (
        <>
            {activeSubsidebar ? (
                <div className="subSidebar">
                    <div className="ag">
                        <p>Berkararlyk etraby</p>
                        <p>Köpetdag etraby</p>
                        <p>Bagtyýarlyk etraby</p>
                        <p>Büzmeýin etraby</p>
                    </div>
                </div>
            ) : (null)
            }
            {test ? (
                <div className="subSidebar">
                    <div className="ag">
                        <p>Gökdepe etraby</p>
                        <p>Änew etraby</p>
                        <p>Ýaşlyk etraby</p>
                    </div>
                </div>)
                :
                (null)
            }
        </>
    )
}

export default Subsidebar;