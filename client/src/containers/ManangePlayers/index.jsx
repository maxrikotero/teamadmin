import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableUi from '../../components/Table/Table'
import { getPlayers } from '../../actions/playersActions';

class ManangePlayers extends Component {

    componentDidMount() {
        // debugger;
    }

    createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein};
    }
    createDataColumn = (name, align, id) => {
    return { name, align,  id};
    }

    render() {

        const rows = [
            this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'inherit'),
            this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'right'),
            this.createData('Eclair', 262, 16.0, 24, 6.0, 'right'),
            this.createData('Cupcake', 305, 3.7, 67, 4.3, 'right'),
            this.createData('Gingerbread', 356, 16.0, 49, 3.9, 'right'),
          ];
        const columns = [
            this.createDataColumn('Dessert (100g serving)','inherit', 159),
            this.createDataColumn('Calories','right', 237),
            this.createDataColumn('Fat','right', 262),
            this.createDataColumn('Carbs','right', 305),
            this.createDataColumn('Protein','right', 356),
          ];

        return (
            <div className="container">
                    {/* <TableUi rows={rows} columns={columns}/> */}
            </div>
        );
    }
}

const mapDispatchProps = {
    getPlayers:getPlayers
}
export default connect(null, mapDispatchProps)(ManangePlayers);
