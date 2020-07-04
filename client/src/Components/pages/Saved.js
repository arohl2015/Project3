// import React, { Component } from "react";
// import API from "../utils/API";
// import Navbar from "../components/Navbar";
// import Jumbotron from "../components/Jumbotron";
// import Wrapper from "../components/Wrapper";
// // import Buttons from "../components/Buttons";

// class Saved extends Component {
//   state = {
//     savedStore: [],
//   };
//   componentDidMount() {
//     API.getStore()
//       .then(res => {
//         this.setState({ savedStore: res.data })
//         console.log(this.state.savedStore)
//       })
//       .catch((err) => console.log(err));
//   }
 
//   deleteBook = (index) => {
//     API.deleteStore(index)
//       .then((res) => {
//         console.log(res);
//         this.componentDidMount();
//       })
//       .catch((err) => console.log(err));
//   };
//   render() {
//     return (
//       <div>
//         <Navbar/>
//         <Jumbotron/>
     
//          <Wrapper>
//           <div style={{ padding: "25px" }}>
//            {this.state.savedStore.map((store) => (
//               <Buttons
//                 key={store.title}
//                 sender="Saved"
//                 name ={store.name}
//                 location={store.location}
//                 phone={store.phone}
//                 url={store.url}
//                 description={store.description}
//                 type = {store.type}
//                 deleteStore={this.deleteStore}
//               ></Buttons>
            
//             ))}
//           </div>
//         </Wrapper>
//       </div>

//     );
//            }
//         }

//         export default Saved;