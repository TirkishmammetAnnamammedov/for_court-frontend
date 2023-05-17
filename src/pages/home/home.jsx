import React, { useState } from 'react';
import './home.scss';
import { SearchOutlined } from '@mui/icons-material';
import DataTable from '../../component/dataTable/dataTable';

const Home = () => {
    const [isActiveModal, setIsActiveModal] = useState(false);
    return (
        <div className="home">
            <div className="homeContainer">
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
                <div className="dataTableContainer">
                    <DataTable />
                </div>
            </div>
        </div>
    )
}


export default Home;