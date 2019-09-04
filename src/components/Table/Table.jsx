import React, { Component } from 'react';
import TableItem from './TableItem/TableItem';
import classes from './Table.module.css';

class Table extends Component {
    render() {

        return (
            <div className={classes.table}>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>surname</th>
                            <th>age</th>
                            <th>position</th>
                            <th>salary</th>
                        </tr>
                    </thead>
                    <TableItem worker={this.props.workers} delete={this.props.delete} />
                </table>
            </div>
        );
    }
}

export default Table;