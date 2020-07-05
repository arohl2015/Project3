import React, {Component} from "react";
import Jumbotron from "../Components/Jumbotron";
import hobbyList from "../hobbyList.json";
import FrontCard from "../Components/FrontCard";
import Navbar from "../Components/Navbar";
import Wrapper from "../Components/Wrapper";


class Home extends Component {
    state = {
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