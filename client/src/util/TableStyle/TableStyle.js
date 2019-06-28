import { makeStyles } from '@material-ui/core/styles';

const TableUseStyle = () => {
    return (
        makeStyles(theme => ({
            root: {
              width: '100%',
              marginTop: theme.spacing(3),
              overflowX: 'auto',
            },
            table: {
              minWidth: 650,
            },
          }))
    )
}

export default TableUseStyle;