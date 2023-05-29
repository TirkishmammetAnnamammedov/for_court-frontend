import React from "react";
import "./modal.scss";
import person from '../../images/login.png';

const modalData = [{
    name: 'Aman Amanow ',
    wife: 'Maral Muhammedowa',
    phone: '+99362362075',
    law: 'Köpetdag etrap kazyýeti',
    executor: 'Berkararlyk etrap kazyýeti',
    pdf: 'Giňişleýin'
}]

const child = [
    { id: 1, name: "Jeren Amanowa", pdf: "Giňişleýin" },
    { id: 2, name: "Myrat Amanow", pdf: "Giňişleýin" },
    { id: 3, name: "Jemal Amanowa", pdf: "Giňişleýin" },
]

const Modal = ({ activeModal, setActiveModal }) => {
    return (
        <div className="modall">
            <div className={activeModal ? "modalOut active" : "modalOut"} onClick={() => setActiveModal(false)}>
                <div className="blur"></div>
                <div className="modalBox" onClick={e => e.stopPropagation()}>
                    {modalData.map((m, id) => (
                        <div className="modalContainer" key={id}>
                            <div className="top">
                                <h3>Bergidar barada umumy maglumat</h3>
                                <img src={person} alt="bergidar ady" />
                            </div>
                            <div className="flexBoxs">
                                <div className="flexBox">
                                    <div className="head">Ady:</div>
                                    <div className="text">{m.name}</div>
                                    <div className="right">
                                        <button><a href={require("../../images/file.pdf")}>{m.pdf}</a></button>
                                    </div>
                                </div>
                                <div className="flexBox">
                                    <div className="head">Aýalynyň ady:</div>
                                    <div className="text">{m.wife}</div>
                                    <div className="right">
                                        <button><a href={require("../../images/file.pdf")}>{m.pdf}</a></button>
                                    </div>
                                </div>
                                <div className="flexBox2">
                                    <div className="leftHead">Çagalary:</div>
                                    <div className="rightName">
                                    {child.map((c) => (
                                        <div className="child" key={c.id}>
                                            <div className="text2">
                                                <span>{c.name}</span>
                                            </div>
                                            <div className="right2">
                                                <button><a href={require("../../images/file.pdf")}>{c.pdf}</a></button>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                                <div className="flexBox">
                                    <div className="head">Telefon nomeri:</div>
                                    <div className="text">{m.phone}</div>
                                    <div className="right">
                                    </div>
                                </div>
                                <div className="flexBox">
                                    <div className="head">Karary çykaran:</div>
                                    <div className="text">{m.law}</div>
                                    <div className="right">
                                    </div>
                                </div>
                                <div className="flexBox">
                                    <div className="head">Ýerine ýetiriji:</div>
                                    <div className="text">{m.executor}</div>
                                    <div className="right">
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="out" onClick={() => setActiveModal(!activeModal)}>Chykmak</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;

