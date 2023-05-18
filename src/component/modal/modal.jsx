import React from "react";
import "./modal.scss";

const Modall = ({isActiveModal,setIsActiveModal}) => {

    return (
        <div className="modall">
            <div className={isActiveModal ? "modalOut active" : "modalOut"} onClick={() => setIsActiveModal(false)}>
                <div className="blur"></div>
                <div className="content" onClick={e => e.stopPropagation()}>
                <h3>Bergidar barada umumy maglumat</h3>
                    <div className="modalText">
                        <div className="flexBox">
                            <p> Ady : </p>                        
                            <p> Amanow Aman </p>                           
                        </div>
                        <div className="flexBox">
                            <p> Doglan senesi : </p>                        
                            <p> 12.09.1970y </p>                           
                        </div>
                        <div className="flexBox">
                            <p> Telefon nomeri : </p>                        
                            <p> +99362364532 </p>                           
                        </div>
                    </div>
                    <div className="out" onClick={() => setIsActiveModal(!isActiveModal)}>Chykmak</div>
                </div>
            </div>
        </div>
    )
}

export default Modall;

