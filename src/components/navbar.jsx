import React, { Component } from "react";

//stateless functional component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar-rendered");

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};
//remove this. from {this.props.totalCounters} and add (props) to Navbar function

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default Navbar;
