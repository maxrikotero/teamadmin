import React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableUseStyle from '../../util/TableStyle/TableStyle';
import TableHeader from './TableHead';
import TableRows from './TableRow';


const useStyles = TableUseStyle;

const TableUi = (props) => {
  const { rows, columns } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHeader columns={columns}/>{/* <TableHeader ---> Columns - Component/>  */}
        <TableRows rows={rows}/>{/* <TableHeader ---> Columns - Component/>  */}
      </Table>
    </Paper>
  );
}

export default TableUi;
