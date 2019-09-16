// import React, { Fragment } from "react";
// //import ReactDOM from "react-dom";
// import data from "./data";
// import "./styles.css";
// import posed from "react-pose";

// const Content = posed.div({
//   closed: { height: 0 },
//   open: { height: "auto" }
// });

// class TabQA extends Component {
//   state = { open: false };

//   render() {
//     const { open } = this.state;
//     return (
//       <Fragment>
//          {data.map(({ title, content }, i) => (
//           <Fragment>
//             <h2
//               className="title"
//               onClick={() => this.setState({ open: open === i ? false : i })}
//             >
//               {title}
//             </h2>
//             <Content className="content" pose={open === i ? "open" : "closed"}>
//               <div className="content-wrapper">{content}</div>
//             </Content>
//           </Fragment>
//         ))}
//       </Fragment>
//     );
//   }
// }

// export default TabQA