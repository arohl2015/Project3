import React, {Component} from "react";
import Jumbotron from "../Jumbotron";
import hobbyList from "../../hobbyList.json";
import FrontCard from "../Card";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";


class Home extends Component {
    state = {
        //   name: "",
        //   location: "",
        //   phone: number,
        //   url: "",
        //   description: "",
        //   type: "",
        hobbyList
    };
    render() {
        return ( 
            <div>
             <Navbar />
            <Jumbotron />
            <Wrapper>
   
            <div> {
                this.state.hobbyList.map(hobby => ( 
                    <FrontCard name= {hobby.name}
                    description= {hobby.description}
                     />
                ))
            }
            </div>
            </Wrapper>
            </div>
    
        )}
        }

export default Home;