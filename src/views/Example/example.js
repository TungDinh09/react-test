import React from "react";
import ChildExample from "./ChildExample";
class example extends React.Component {
  state = {
    firstName: "Tung",
    lastName: "Suwa",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Click me");
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        {<ChildExample></ChildExample>}
      </>
    );
  }
}
export default example;