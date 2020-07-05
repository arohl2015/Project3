import React, {Component} from "react";
import Jumbotron from "../Components/Jumbotron";
import hobbyList from "../hobbyList.json";
import FrontCard from "../Components/FrontCard";
import Wrapper from "../Components/Wrapper";


class Home extends Component {
    state = {
        hobbyList
    };
    render() {
        return ( 
            <div>
            <Jumbotron />
            <Wrapper>
   
            <div> {
                this.state.hobbyList.map((hobby, key) => ( 
                    <FrontCard name= {hobby.name}
                    description= {hobby.description}
                    key = {key}
                     />
                ))
            }
            </div>
            </Wrapper>
            </div>
    
        )}
        }

export default Home;