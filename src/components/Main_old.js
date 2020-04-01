import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHeader from "@material-ui/core/TableHeader";
import TableHeaderColumn from "@material-ui/core/TableHeaderColumn";
import TableRow from "@material-ui/core/TableRow";
import TableRowColumn from "@material-ui/core/TableRowColumn";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      selected: [1]
    };
  }

  isSelected = index => {
    const { selected } = this.state;
    return selected.indexOf(index) !== -1;
  };

  handleRowSelection = selectedRows => {
    this.setState({ selected: selectedRows });
  };

  render() {
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Player</TableHeaderColumn>
            <TableHeaderColumn>Team</TableHeaderColumn>
            <TableHeaderColumn>Position</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected={this.isSelected(0)}>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(1)}>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(2)}>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(3)}>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default Main;
