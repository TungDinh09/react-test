import React from "react";
import ChildExample from "./ChildExample";
import FromExample from "./formExample";
class example extends React.Component {
  state = {
    arrJobs: [
      { id: "abcjob1", title: "Developers", salary: "500 $" },
      { id: "abcjob2", title: "Tester", salary: "300 $" },
      { id: "abcjob3", title: "Project mana", salary: "400 $" },
    ],
  };

  render() {
    return (
      <>
        <FromExample />
        {
          <ChildExample
            name={this.state.firstName}
            arrJobs={this.state.arrJobs}
          ></ChildExample>
        }
      </>
    );
  }
}
export default example;
