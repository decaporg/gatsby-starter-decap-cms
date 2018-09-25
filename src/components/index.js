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

export function Echo(props) {
  const { children, color = "green", ...rest } = props;
  return (
    <div style={{ border: "3px solid orangered" }}>
      <div>
        This is a React component! Stringifying props: {JSON.stringify(rest)}
      </div>
      <div style={{ color }}>{children}</div>
    </div>
  );
}
