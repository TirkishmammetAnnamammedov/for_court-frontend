import React, { useState } from "react";
import './borchlylar.scss';
import { SearchOutlined } from '@mui/icons-material';
import DataTable from "../../component/dataTable/dataTable";



const Borchlylar = () => {
    const [isActiveModal, setIsActiveModal] = useState(false);
    return (
        <div className="borchMain">
            <div className="borchMainContainer">
                <h2>Ähli borçly bergidarlaryň sanawy</h2>
                <div className="topSearch">
                    <div className="header-search">
                        <div className="form">
                            <input type="search" name="Search" placeholder="Gözle..." required />
                            <button type="submit" className="btn-default" aria-label="Left Align">
                                <SearchOutlined className="searchIcon" />
                                Gozle
                            </button>
                        </div>
                    </div>
                    <div className="dataFilter">
                        <div className="filterBox">
                            <div className="filterTop" onClick={() => setIsActiveModal(!isActiveModal)}>
                                Filterle
                            </div>
                            {isActiveModal &&
                                <div className="filterList">
                                    <li>Birinji</li>
                                    <li>Ikinji</li>
                                    <li>Uchunji</li>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="dataTable">
                    <DataTable />
                </div>
            </div>
        </div>
    )
}


export default Borchlylar;