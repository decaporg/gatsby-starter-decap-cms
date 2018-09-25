import React, { Component } from "react";

// export class Notification extends Component {
//   render() {
//     const { type = "default", children } = this.props;
//     return (
//       <div>
//         <div>Type: {type}</div>
//         <div>{children}</div>
//       </div>
//     );
//   }
// }

export function Notification(props) {
  const { type = "default", children } = props;
  return (
    <div style={{ border: "3px solid orangered" }}>
      <div>This is a React component! Type: {type}</div>
      <div>{children}</div>
    </div>
  );
}
