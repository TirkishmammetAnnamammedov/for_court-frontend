import React from "react";
import './bergidarlar.scss';
import DataTable from "../../component/dataTable/dataTable";

const Bergidarlar = () => {
    return(
        <div className="brgMain">
           <div className="brgMainContainer">
               <h2>Ähli bergidarlaryň sanawy</h2>
               <div className="dataTable">
                  <DataTable/>
               </div> 
           </div>
        </div>
    )
}


export default Bergidarlar;