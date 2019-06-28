import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const createHeader = (columns) => {
    const ths = columns.map((col, index) => {
        return (
                <TableCell align={col.align} key={col.id}>{col.name}</TableCell>
            )
    });

    return (
        ths
    )
}

const TableHeader = (props) => {
    const { columns } = props;
    return (
        <TableHead>
            <TableRow>
                { createHeader(columns) }
            </TableRow>
      </TableHead>
    )
}

export default TableHeader;