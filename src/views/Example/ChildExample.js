import React from "react";
class ChildExample extends React.Component {
  state = { showjob: false };

  HandleShowHide = () => {
    this.setState({
      showjob: !this.state.showjob,
    });
  };

  render() {
    let { arrJobs } = this.props;

    let { showjob } = this.state;

    return (
      <>
        {showjob === false && (
          <div>
            <button onClick={() => this.HandleShowHide()}>show</button>
          </div>
        )}

        {showjob === true && (
          <>
            <div className="jop-title">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} - {index}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.HandleShowHide()}>hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildExample = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       <div className="jop-title">
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary} - {index}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default ChildExample;
