import React, { useState } from "react";
import "./dataTable.scss";
import TableFooter from "./tableFooter";
import useTable from "./useTable";
import Modal from '../modal/modal';

const DataTable = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  
  const [activeModal, setActiveModal] = useState(false)
  return (
    <>
      <table className='table'>
        <thead className='tableRowHeader'>
          <tr>
            <th className='tableHeader'>T/b</th>
            <th className='tableHeader'>Bergidaryň ady/familaýasy</th>
            <th className='tableHeader'>Algydaryň ady/familaýasy</th>
            <th className='tableHeader'>Alimenti töläp başlan wagty</th>
            <th className='tableHeader'>Işiň döredilen senesi</th>
            <th className='tableHeader'>Karary çykaran</th>
            <th className='tableHeader'>Bölüm</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className='tableRowItems' key={el.id}>
              <td className='tableCell'>{el.id}</td>
              <td 
                  className='tableCell'
                  style={{cursor: 'pointer'}}
                  onClick={(e) => {setActiveModal(!activeModal)}}                  
              >
                {el.name}
              </td>
              <td className='tableCell'>{el.name2}</td>
              <td className='tableCell'>{el.aliment}</td>
              <td className='tableCell'>{el.job}</td>
              <td className='tableCell'>{el.karar}</td>
              <td className='tableCell'>{el.bolum}</td>
              
            </tr>
          ))}
        
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}/>
    </>
  );
};

export default DataTable;