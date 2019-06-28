import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

const CreateRow = (rows) => {
    debugger;
    const tds = rows.map((row, ix) => { 
            return ( 
                <TableRow key={row.name}>
                    {
                        Object.keys(row).map((i, ix) => {
                            return(
                                <TableCell align="right">{ row[i]}</TableCell>
                            )                         
                        })
                    }
                </TableRow>
            )
    })
    return (
        tds
    )
}

const TableRows = (props) => {
    const { rows } = props;
    return (
        <TableBody>
            {
               CreateRow(rows)
            }
        </TableBody>
    ) 
}   

export default TableRows;