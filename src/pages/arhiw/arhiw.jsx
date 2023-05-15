import React, { useState } from "react";
import './arhiw.scss';
import DataTable from '../../component/dataTable/dataTable'


const Arhiw = () => {
    const [isActiveModal, setIsActiveModal] = useState(false);

    return (
        <div className="arhiw">
            <div className="arhiwContainer">
                <h2>Ýyllar boýunça arhiw</h2>
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
                <div className="dataTableContainer">
                    <DataTable />
                </div>
            </div>
        </div>
    )
}

export default Arhiw;