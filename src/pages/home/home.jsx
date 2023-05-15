import React from 'react';
import './home.scss';
import {SearchOutlined} from '@mui/icons-material';
import DataTable from '../../component/dataTable/dataTable,';

const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <div className="header-search">
                    <div className="form">
                        <input type="search" name="Search" placeholder="Gözle..." required/>
                        <button type="submit" className="btn-default" aria-label="Left Align">
                           <SearchOutlined className="searchIcon"/>
                            Gozle
                        </button>
                    </div>
                </div>
                <div className="dataTableContainer">
                    <DataTable/>
                </div>
            </div>
        </div>
    )
}


export default Home;