import React from "react";
import './borchlylar.scss';
import DataTable from "../../component/dataTable/dataTable,";


const Borchlylar = () => {
    return(
        <div className="borchMain">
            <div className="borchMainContainer">
            <h2>Ähli borçly bergidarlaryň sanawy</h2>
               <div className="dataTable">
                  <DataTable/>
               </div> 
            </div>
        </div>
    )
}


export default Borchlylar;