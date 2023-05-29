import React  from "react";
import './add.scss';
import logoBottom from '../../images/logo.PNG';
// import { DriveFolderUploadOutlined } from "@mui/icons-material";


const Add = () => {
    // const inputRef = useRef(null);
    // const [inputs, setInputs] = useState("");
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
                                <input type="text" placeholder=""/>
                                {/* <label htmlFor="file" className="file"><DriveFolderUploadOutlined/></label>
                                <input type="file"  style={{ display: "none" }} id="file" name="file"/> */}
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
                                <label>Algydar</label>     {/*onClick={() => setInputs(inputRef.current.value)} */}
                               <input type="text" placeholder="" /> {/* ref={inputRef} */}
                            </div>
                            {/* <p>{inputs}</p> */}
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