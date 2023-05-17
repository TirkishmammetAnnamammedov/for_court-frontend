import React from "react";
import './add.scss';
import logoBottom from '../../images/logo.png'


const Add = () => {
    return (
        <div className="add">
            <div className="addContainer">
                <h2>Täze döretmek</h2>
                <div className="addList">
                    <div className="addFlexBox">
                        <div className="left">
                            <div className="inputs">
                                <label>Bergidaryň ady</label>
                                <input type="text" placeholder="" />
                            </div>

                            <div className="inputs">
                                <label>Ýerine ýetirýän edara</label>
                                <input type="text" placeholder="" />
                            </div>

                            <div className="inputs">
                                <label>Abonent nomeri</label>
                                <input type="text" placeholder="" />
                            </div>

                            <div className="inputs">
                                <label>Işleýän ýeri</label>
                                <input type="text" placeholder="" />
                            </div>

                            <div className="inputs">
                                <label>Telefon belgisi</label>
                                <input type="text" placeholder="" />
                            </div>

                            <div className="inputs">
                                <label>Algydar</label>
                                <input type="text" placeholder="" />
                            </div>

                            <div className="inputs">
                                <label>Alimentiň moçberi</label>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="logoBottom">
                            <img src={logoBottom} alt="logo"/>
                        </div>
                    </div>
                    <div className="bottomTextArea">
                        <label>Bellik</label>
                        <textarea></textarea>
                    </div>
                    <div className="addButton">
                        <p>
                           Döretmek 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Add;