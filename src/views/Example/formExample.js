import React from "react";

class FromExample extends React.Component {
  state = {
    title: "Tung",
    salary: "Suwa",
  };
  handleChangetitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangesalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.title + " - " + this.state.salary);
  };
  render() {
    return (
      <form>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          value={this.state.title}
          onChange={(event) => this.handleChangetitle(event)}
        />
        <br />
        <label htmlFor="salary">Salary:</label>
        <br />
        <input
          type="text"
          id="salary"
          value={this.state.salary}
          onChange={(event) => this.handleChangesalary(event)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(event) => this.handleSubmit(event)}
        />
      </form>
    );
  }
}
export default FromExample;
