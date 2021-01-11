import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      firstNameSelected: true
    };
  }
  handleInputChange(value) {
    this.setState({ firstNameSelected: !this.state.firstNameSelected });
  }
  render() {
    const { data, firstNameSelected } = this.state;
    return (
      <div>
        <div>
          <label>First Name</label>
          <input
            name="firstName"
            type="checkbox"
            checked={this.state.firstNameSelected}
            onChange={this.handleInputChange.bind(this)}
          />
        </div>

        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName",
                  show: firstNameSelected
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  show: firstNameSelected,
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: "Stats",
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
