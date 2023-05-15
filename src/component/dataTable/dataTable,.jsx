import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, 
        TableRow, Paper} from '@mui/material';
import './dataTable.scss';

const DataTable = () => {
    const rows = [
        {
            id: 1,
            kaz: 'Görogly et..',
            bergidar: 'Amanow Aman',
            ishi: '12-nji mekdep mugallymy',
            almnt: '2800.0',
            sonky: '12.03.2023',
            brgi: '1200.0',
            algdr: 'Babayewa Leyla',
            bellik: 'yok'
        },
        {
            id: 2,
            kaz: 'Görogly et..',
            bergidar: 'Amanow Aman',
            ishi: '12-nji mekdep mugallymy',
            almnt: '2800.0',
            sonky: '12.03.2023',
            brgi: '1200.0',
            algdr: 'Babayewa Leyla',
            bellik: 'yok'
        },
        {
            id: 3,
            kaz: 'Görogly et..',
            bergidar: 'Amanow Aman',
            ishi: '12-nji mekdep mugallymy',
            almnt: '2800.0',
            sonky: '12.03.2023',
            brgi: '1200.0',
            algdr: 'Babayewa Leyla',
            bellik: 'yok'
        }
    ]

    return<TableContainer component={Paper} className="table">
        <Table sx={{minWidth:650}} aria-label='simple table'>
            <TableHead>
                <TableRow className="tableHead">
                    <TableCell className="tableCell">Umumy sanaw boýunça t/b</TableCell>
                    <TableCell className="tableCell">Ýerine ýetirýän kazyýet</TableCell>
                    <TableCell className="tableCell">Bergidar</TableCell>
                    <TableCell className="tableCell">Bergidaryň işleýän ýeri</TableCell>
                    <TableCell className="tableCell">Alimentiň möçberi</TableCell>
                    <TableCell className="tableCell">Iň soňky töleg</TableCell>                  
                    <TableCell className="tableCell">Aliment boýunça bergidaryň möçberi</TableCell>
                    <TableCell className="tableCell">Algydar</TableCell>
                    <TableCell className="tableCell">Bellik</TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
            {rows.map((row)=>(
                <TableRow key={row.id} className="tableRow">                 
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">{row.kaz}</TableCell>
                    <TableCell className="tableCell">{row.bergidar}</TableCell>
                    <TableCell className="tableCell">{row.ishi}</TableCell>
                    <TableCell className="tableCell">{row.almnt}</TableCell>
                    <TableCell className="tableCell">{row.sonky}</TableCell>
                    <TableCell className="tableCell">{row.brgi}</TableCell>
                    <TableCell className="tableCell">{row.algdr}</TableCell>
                    <TableCell className="tableCell">{row.bellik}</TableCell>                                      
               </TableRow> 
            ))}
        </TableBody>
      </Table>
    </TableContainer>
}

export default DataTable;

