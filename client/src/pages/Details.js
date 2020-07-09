import React, {Component} from "react";
import Hobby from "../Components/Hobby";
import Jumbotron from "../Components/Jumbotron";
import Wrapper from "../Components/Wrapper";

class HobbyDetails extends Component {

    constructor(props){
        super(props);  
    }
render() {

        return ( 
            <div>
            {/* <Jumbotron /> */}
            <Wrapper>
   
            <div> {
                this.props.hobbies.map((hobby, key) => ( 
                    <Hobby name= {hobby.name}
                    location={hobby.location}
                    phone={hobby.phone}
                    url= {hobby.url}
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

export default HobbyDetails;